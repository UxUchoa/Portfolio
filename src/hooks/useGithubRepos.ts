import { useEffect, useState } from 'react';
import { fallbackProfile, fallbackRepos, githubUser, pinnedRepoNames, projectTechnologyStacks } from '../data/portfolio';
import type { GithubData, GithubProfile, GithubRepo, GithubStackSummary, GithubStatus } from '../types/github';

const githubHeaders = { Accept: 'application/vnd.github+json' };
const githubCacheKey = 'uxuchoa-github-data-v1';

interface GithubCache {
  profile: GithubProfile;
  repos: GithubRepo[];
  savedAt: string;
}

function calculateStackSummary(repos: GithubRepo[]): GithubStackSummary[] {
  const totals = repos.reduce<Record<string, number>>((acc, repo) => {
    const technologies = projectTechnologyStacks[repo.name] || [repo.language || 'Other'];

    technologies.forEach((technology) => {
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
    return cached ? (JSON.parse(cached) as GithubCache) : null;
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
  const [repos, setRepos] = useState<GithubRepo[]>(sortReposByUpdatedAt(fallbackRepos));
  const [profile, setProfile] = useState<GithubProfile | null>(fallbackProfile);
  const [stackSummary, setStackSummary] = useState<GithubStackSummary[]>(calculateStackSummary(sortReposByUpdatedAt(fallbackRepos)));
  const [status, setStatus] = useState<GithubStatus>('loading');

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    async function loadGithubData() {
      setStatus('loading');

      const cached = readGithubCache();
      if (cached) {
        setProfile(cached.profile);
        const sortedCachedRepos = sortReposByUpdatedAt(cached.repos);
        setRepos(sortedCachedRepos);
        setStackSummary(calculateStackSummary(sortedCachedRepos));
      }

      try {
        const [profileData, repoData] = await Promise.all([
          fetchJson<GithubProfile>(`https://api.github.com/users/${githubUser}`, controller.signal),
          fetchJson<GithubRepo[]>(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=100`, controller.signal),
        ]);

        const visibleRepos = pinnedRepoNames
          .map((repoName) => repoData.find((repo) => repo.name === repoName && !repo.fork))
          .filter((repo): repo is GithubRepo => Boolean(repo));
        const nextRepos = sortReposByUpdatedAt(visibleRepos.length > 0 ? visibleRepos : fallbackRepos);

        if (!isMounted) {
          return;
        }

        setProfile(profileData);
        setRepos(nextRepos);
        setStackSummary(calculateStackSummary(nextRepos));
        setStatus(visibleRepos.length > 0 ? 'live' : 'fallback');
        writeGithubCache(profileData, nextRepos);
      } catch (error) {
        if (!isMounted || controller.signal.aborted) {
          return;
        }

        console.warn(error);
        const cachedFallback = readGithubCache();
        const nextProfile = cachedFallback?.profile || fallbackProfile;
        const nextRepos = sortReposByUpdatedAt(cachedFallback?.repos || fallbackRepos);

        setProfile(nextProfile);
        setRepos(nextRepos);
        setStackSummary(calculateStackSummary(nextRepos));
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
