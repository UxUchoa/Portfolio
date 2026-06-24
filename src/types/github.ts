export type Locale = 'pt' | 'en';

export type SectionId = 'home' | 'work' | 'github' | 'experience' | 'contact';

export type GithubStatus = 'loading' | 'live' | 'fallback' | 'error';

export interface GithubRepo {
  id?: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  languages_url?: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  size?: number;
  fork?: boolean;
}

export interface GithubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GithubStackSummary {
  technology: string;
  count: number;
  percentage: number;
}

export interface ProjectStackProfile {
  summary: string;
  technologies: string[];
  layers: string[];
}

export interface GithubData {
  repos: GithubRepo[];
  profile: GithubProfile | null;
  stackSummary: GithubStackSummary[];
  status: GithubStatus;
}
