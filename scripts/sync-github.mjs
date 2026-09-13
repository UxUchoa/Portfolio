#!/usr/bin/env node
/**
 * Gera src/data/github-snapshot.json com perfil + repositorios publicos do GitHub.
 * Esse snapshot e o estado inicial do site (primeira pintura e fallback quando a
 * API publica esta com rate limit). Em runtime o hook useGithubRepos revalida.
 *
 * Uso: node scripts/sync-github.mjs
 * GITHUB_TOKEN (opcional) aumenta o limite de 60 para 5000 req/h.
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const githubUser = 'UxUchoa';
const hiddenRepoNames = new Set([githubUser]);
const maxRepos = 12;

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputFile = path.join(rootDir, 'src', 'data', 'github-snapshot.json');

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': `${githubUser}-portfolio-sync`,
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function fetchJson(url) {
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`GitHub request failed (${response.status}) for ${url}`);
  }

  return response.json();
}

function normalizeRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    homepage: repo.homepage || null,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    updated_at: repo.updated_at,
    pushed_at: repo.pushed_at,
    size: repo.size,
    fork: repo.fork,
    archived: repo.archived,
    topics: repo.topics || [],
  };
}

async function main() {
  const [profile, repos] = await Promise.all([
    fetchJson(`https://api.github.com/users/${githubUser}`),
    fetchJson(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=100`),
  ]);

  const visibleRepos = repos
    .filter((repo) => !repo.fork && !repo.archived && !repo.private && !hiddenRepoNames.has(repo.name))
    .map(normalizeRepo)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, maxRepos);

  if (visibleRepos.length === 0) {
    throw new Error('Nenhum repositorio visivel retornado; snapshot nao foi sobrescrito.');
  }

  const snapshot = {
    generatedAt: new Date().toISOString(),
    profile: {
      login: profile.login,
      avatar_url: profile.avatar_url,
      html_url: profile.html_url,
      bio: profile.bio,
      public_repos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
    },
    repos: visibleRepos,
  };

  await writeFile(outputFile, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
  console.log(`Snapshot atualizado: ${visibleRepos.length} repos -> ${path.relative(rootDir, outputFile)}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
