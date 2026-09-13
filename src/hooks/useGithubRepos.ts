import { useEffect, useState } from 'react';
import {
  fallbackProfile,
  fallbackRepos,
  getRepoTechnologies,
  githubCacheTtlMs,
  githubUser,
  isVisibleRepo,
  maxVisibleRepos,
} from '../data/portfolio';
import type { GithubData, GithubProfile, GithubRepo, GithubStackSummary, GithubStatus } from '../types/github';

const githubHeaders = { Accept: 'application/vnd.github+json' };
const githubCacheKey = 'uxuchoa-github-data-v2';

interface GithubCache {
  profile: GithubProfile;
  repos: GithubRepo[];
  savedAt: string;
}

function calculateStackSummary(repos: GithubRepo[]): GithubStackSummary[] {
  const totals = repos.reduce<Record<string, number>>((acc, repo) => {
    getRepoTechnologies(repo).forEach((technology) => {
      acc[technology] = (acc[technology] || 0) + 1;
    });

    return acc;
  }, {});
  const maxCount = Math.max(...Object.values(totals), 1);

  return Object.entries(totals)
    .map(([technology, count]) => ({
      technology,
      count,
      percentage: Math.round((count / maxCount) * 100),
    }))
    .sort((a, b) => b.count - a.count || a.technology.localeCompare(b.technology))
    .slice(0, 10);
}

function sortReposByUpdatedAt(repos: GithubRepo[]): GithubRepo[] {
  return [...repos].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
}

/**
 * Descoberta automatica: qualquer repo publico novo entra sozinho na lista.
 * Sai apenas o que for fork, arquivado ou estiver em hiddenRepoNames.
 */
function selectVisibleRepos(repos: GithubRepo[]): GithubRepo[] {
  return sortReposByUpdatedAt(repos.filter(isVisibleRepo)).slice(0, maxVisibleRepos);
}

async function fetchJson<T>(url: string, signal: AbortSignal): Promise<T> {
  const response = await fetch(url, { headers: githubHeaders, signal });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

function readGithubCache(): GithubCache | null {
  try {
    const cached = localStorage.getItem(githubCacheKey);

    if (!cached) {
      return null;
    }

    const parsed = JSON.parse(cached) as GithubCache;
    const age = Date.now() - new Date(parsed.savedAt).getTime();

    if (!Number.isFinite(age) || age > githubCacheTtlMs) {
      localStorage.removeItem(githubCacheKey);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function writeGithubCache(profile: GithubProfile, repos: GithubRepo[]) {
  try {
    localStorage.setItem(
      githubCacheKey,
      JSON.stringify({
        profile,
        repos,
        savedAt: new Date().toISOString(),
      } satisfies GithubCache)
    );
  } catch {
    // Cache is only a resilience layer; ignore storage failures.
  }
}

export function useGithubRepos(): GithubData {
  const initialRepos = selectVisibleRepos(fallbackRepos);
  const [repos, setRepos] = useState<GithubRepo[]>(initialRepos);
  const [profile, setProfile] = useState<GithubProfile | null>(fallbackProfile);
  const [stackSummary, setStackSummary] = useState<GithubStackSummary[]>(calculateStackSummary(initialRepos));
  const [status, setStatus] = useState<GithubStatus>('loading');

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    function applyData(nextProfile: GithubProfile | null, nextRepos: GithubRepo[]) {
      setProfile(nextProfile);
      setRepos(nextRepos);
      setStackSummary(calculateStackSummary(nextRepos));
    }

    async function loadGithubData() {
      setStatus('loading');

      const cached = readGithubCache();
      if (cached) {
        applyData(cached.profile, selectVisibleRepos(cached.repos));
      }

      try {
        const [profileData, repoData] = await Promise.all([
          fetchJson<GithubProfile>(`https://api.github.com/users/${githubUser}`, controller.signal),
          fetchJson<GithubRepo[]>(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=100`, controller.signal),
        ]);

        const visibleRepos = selectVisibleRepos(repoData);

        if (!isMounted) {
          return;
        }

        if (visibleRepos.length === 0) {
          applyData(profileData, selectVisibleRepos(fallbackRepos));
          setStatus('fallback');
          return;
        }

        applyData(profileData, visibleRepos);
        setStatus('live');
        writeGithubCache(profileData, visibleRepos);
      } catch (error) {
        if (!isMounted || controller.signal.aborted) {
          return;
        }

        console.warn(error);
        const cachedFallback = readGithubCache();

        applyData(
          cachedFallback?.profile || fallbackProfile,
          selectVisibleRepos(cachedFallback?.repos || fallbackRepos)
        );
        setStatus(cachedFallback ? 'fallback' : 'error');
      }
    }

    loadGithubData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { repos, profile, stackSummary, status };
}
