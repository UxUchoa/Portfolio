import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Briefcase,
  CalendarDays,
  Code2,
  Download,
  ExternalLink,
  Eye,
  FileCode2,
  Github,
  GitFork,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
  Terminal,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { BehanceIcon } from './ui/behance-icon';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import { LazyImage } from './ui/lazy-image';
import { githubUser, languageColors, type PortfolioCopy } from '../data/portfolio';
import type { GithubProfile, GithubRepo, GithubStackSummary, GithubStatus, Locale, ProjectStackProfile, SectionId } from '../types/github';
import { useState, type ChangeEvent, type FormEvent } from 'react';

interface HeroSectionProps {
  content: PortfolioCopy;
  cvFile: { path: string; name: string };
  onNavigate: (sectionId: SectionId) => void;
}

interface SimpleSectionProps {
  content: PortfolioCopy;
}

interface WorkSectionProps {
  content: PortfolioCopy;
  onOpenPDF: (pdfUrl: string, title: string) => void;
}

interface GithubSectionProps {
  content: PortfolioCopy;
  locale: Locale;
  repos: GithubRepo[];
  profile: GithubProfile | null;
  stackSummary: GithubStackSummary[];
  status: GithubStatus;
}

interface ContactSectionProps {
  content: PortfolioCopy;
}

const bridgeIcons: LucideIcon[] = [Workflow, Terminal, Layers];
const stackIcons: LucideIcon[] = [Workflow, Terminal, BarChart3, Layers];
const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500';
const cardSurface =
  'signal-card border transition-all';
const ghostAction =
  'signal-ghost inline-flex min-h-11 items-center justify-center gap-2 border px-4 py-2.5 text-sm font-bold transition-all';
const solidAction =
  'signal-solid inline-flex min-h-11 items-center justify-center gap-2 px-4 py-2.5 text-sm font-black transition-all';

function applyTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{{${key}}}`, 'g'), value);
  }, template);
}

function formatRepoDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

function getStatusLabel(content: PortfolioCopy, status: GithubStatus) {
  if (status === 'live') return content.github.live;
  if (status === 'loading') return content.github.loading;
  if (status === 'error') return content.github.error;
  return content.github.fallback;
}

function getStatusColor(status: GithubStatus) {
  if (status === 'live') return 'bg-blue-400';
  if (status === 'loading') return 'bg-amber-300';
  if (status === 'error') return 'bg-rose-300';
  return 'bg-zinc-400';
}

export function HeroSection({ content, cvFile, onNavigate }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section relative overflow-hidden pt-[72px]">
      <div className="code-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-sun" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid min-h-[calc(88svh-72px)] max-w-[1440px] items-center px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
            <span className="status-chip inline-flex items-center gap-2 px-3 py-1.5">
              <Activity size={15} />
              {content.hero.status}
            </span>
            <span className="inline-flex items-center gap-2 opacity-70">
              <MapPin size={15} />
              {content.hero.location}
            </span>
          </div>
          <p className="section-index mb-5">00 / {content.hero.eyebrow}</p>
          <h1 className="hero-title">{content.hero.headline}</h1>
          <div className="mt-7 grid gap-5 border-l-4 pl-5 sm:grid-cols-[auto_1fr] sm:items-start">
            <p className="hero-name">{content.hero.title}</p>
            <p className="max-w-xl text-base leading-7 opacity-75 sm:text-lg">{content.hero.subtitle}</p>
          </div>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <button
              type="button"
              onClick={() => onNavigate('github')}
              className={`signal-primary inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-black ${focusRing}`}
            >
              <Github size={18} />
              {content.hero.primaryAction}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className={`${ghostAction} min-h-12 px-5 py-3 ${focusRing}`}
            >
              <Eye size={18} />
              {content.hero.secondaryAction}
            </button>
            <a
              href={cvFile.path}
              download={cvFile.name}
              className={`${ghostAction} min-h-12 px-5 py-3 ${focusRing}`}
            >
              <Download size={18} />
              {content.hero.cvAction}
            </a>
          </div>
        </div>

        <div className="hero-sticker-field" aria-hidden="true">
          <span className="hero-tag hero-tag-product">Product<br />Design</span>
          <span className="hero-tag hero-tag-fullstack">Fullstack<br />Mindset</span>
          <span className="hero-tag hero-tag-research">Research<br />Driven</span>
        </div>

        <div className="hero-process mt-10 max-w-4xl">
          <div className="grid grid-cols-3 border-y">
            {content.hero.process.map((step, index) => (
              <div key={step} className="process-step py-4 text-center font-mono text-[10px] font-black uppercase tracking-[0.16em] sm:text-xs">
                <span className="mr-1 opacity-40">0{index + 1}</span> {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProfileBridgeSection({ content }: SimpleSectionProps) {
  return (
    <section className="border-y border-zinc-200 bg-white py-16 dark:border-white/10 dark:bg-[#0d1010]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-4xl">
          <p className="mb-3 font-mono text-sm text-blue-700 dark:text-blue-300">01 / profile</p>
          <h2 className="text-3xl font-semibold leading-tight text-zinc-950 dark:text-white">{content.bridge.title}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300">{content.bridge.text}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.bridge.cards.map((card, index) => {
            const Icon = bridgeIcons[index];
            return (
              <article key={card.title} className={`${cardSurface} self-start bg-zinc-50 p-5 hover:border-blue-500 dark:hover:border-blue-300/70`}>
                <Icon className="mb-5 text-blue-700 dark:text-blue-300" size={24} />
                <h3 className="text-base font-semibold text-zinc-950 dark:text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StackSection({ content }: SimpleSectionProps) {
  return (
    <section className="bg-zinc-50 py-16 dark:bg-[#080b0d]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-sm text-blue-700 dark:text-blue-300">02 / stack</p>
            <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white">{content.stack.title}</h2>
            <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">{content.stack.subtitle}</p>
          </div>
          <a
            href="https://www.linkedin.com/in/lucasuchoadg"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ghostAction} w-full sm:w-auto ${focusRing}`}
          >
            <Linkedin size={18} />
            LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.stack.clusters.map((cluster, index) => {
            const Icon = stackIcons[index];
            return (
              <article key={cluster.title} className={`${cardSurface} p-5 hover:border-blue-500 dark:hover:border-blue-300/60`}>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-950 dark:text-white">{cluster.title}</h3>
                  <Icon size={22} className="text-amber-600 dark:text-amber-300" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cluster.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-white/10 dark:bg-black/20 dark:text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WorkSection({ content, onOpenPDF }: WorkSectionProps) {
  return (
    <section id="work" className="bg-white py-20 dark:bg-[#0d1010]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-sm text-blue-700 dark:text-blue-300">04 / product cases</p>
            <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white">{content.work.title}</h2>
            <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-300">{content.work.subtitle}</p>
          </div>
          <a
            href="https://www.behance.net/Lucas_-vieira"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ghostAction} w-full sm:w-auto ${focusRing}`}
          >
            <BehanceIcon size={18} />
            {content.work.behanceAction}
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {content.work.cases.map((project) => (
            <article
              key={project.title}
              className={`${cardSurface} case-card group overflow-hidden bg-zinc-50 hover:border-blue-500 dark:hover:border-blue-300/60`}
            >
              <div className="aspect-video overflow-hidden bg-zinc-200 dark:bg-white/5">
                <LazyImage src={project.image} alt={project.title} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-mono text-blue-700 dark:text-blue-300">{project.category}</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{project.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 dark:border-white/10 dark:bg-black/20 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 border-t border-zinc-200 pt-4 dark:border-white/10 sm:flex sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => onOpenPDF(project.pdfUrl, project.title)}
                    className={`${solidAction} ${focusRing}`}
                  >
                    <FileCode2 size={17} />
                    {content.work.viewCase}
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ghostAction} ${focusRing}`}
                  >
                    <ExternalLink size={17} />
                    {content.work.openExternal}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GithubSection({ content, locale, repos, profile, stackSummary, status }: GithubSectionProps) {
  const statusLabel = getStatusLabel(content, status);
  const profileUrl = profile?.html_url || `https://github.com/${githubUser}`;
  const projectProfiles = content.github.projectProfiles as Record<string, ProjectStackProfile | undefined>;

  return (
    <section id="github" className="border-y border-zinc-200 bg-zinc-100 py-20 text-zinc-950 dark:border-white/10 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-sm text-blue-700 dark:text-blue-300">{content.github.sectionLabel}</p>
            <h2 className="text-3xl font-semibold">{content.github.title}</h2>
            <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">{content.github.subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
              <span className={`h-2 w-2 rounded-full ${getStatusColor(status)}`} />
              {statusLabel}
            </span>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${solidAction} w-full sm:w-auto ${focusRing}`}
            >
              <Github size={18} />
              {content.github.profileAction}
            </a>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-5">
            <article className={`${cardSurface} p-5`}>
              <div className="flex items-center gap-4">
                {profile?.avatar_url ? (
                  <img src={profile.avatar_url} alt="" className="h-16 w-16 rounded-md border border-zinc-200 dark:border-white/10" />
                ) : (
                  <div className="grid h-16 w-16 place-items-center rounded-md border border-zinc-200 bg-zinc-50 font-mono text-lg dark:border-white/10 dark:bg-white/5">LU</div>
                )}
                <div>
                  <p className="font-mono text-lg font-semibold">@{profile?.login || githubUser}</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{profile?.bio || content.github.noBio}</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-zinc-200 pt-4 text-center dark:border-white/10">
                <div>
                  <p className="font-mono text-xl text-blue-700 dark:text-blue-300">{profile?.public_repos ?? repos.length}</p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{content.github.publicRepos}</p>
                </div>
                <div>
                  <p className="font-mono text-xl text-blue-700 dark:text-blue-300">{profile?.followers ?? 0}</p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{content.github.followers}</p>
                </div>
                <div>
                  <p className="font-mono text-xl text-blue-700 dark:text-blue-300">{profile?.following ?? 0}</p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{content.github.following}</p>
                </div>
              </div>
            </article>

            <article className={`${cardSurface} p-5`}>
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-semibold">{content.github.languageMix}</h3>
                <Code2 size={20} className="text-blue-700 dark:text-blue-300" />
              </div>
              <div className="space-y-4">
                {stackSummary.map((row) => (
                  <div key={row.technology}>
                    <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                      <span className="flex min-w-0 items-center gap-2 text-zinc-700 dark:text-zinc-200">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: languageColors[row.technology] || languageColors.Other }} />
                        <span className="truncate">{row.technology}</span>
                      </span>
                      <span className="font-mono text-zinc-500 dark:text-zinc-400">{row.count}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.max(row.percentage, 1)}%`,
                          backgroundColor: languageColors[row.technology] || languageColors.Other,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </aside>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">{content.github.featuredRepos}</h3>
              <GitFork size={20} className="text-amber-600 dark:text-amber-300" />
            </div>
            <div className="grid gap-3">
              {repos.map((repo) => {
                const projectProfile = projectProfiles[repo.name];

                return (
                  <article
                    key={repo.html_url}
                    className={`${cardSurface} repo-card p-4 hover:border-blue-500 hover:bg-blue-50/40 dark:hover:border-blue-300/60 dark:hover:bg-white/[0.07]`}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="break-words font-mono text-lg font-semibold text-zinc-950 dark:text-white">{repo.name.replace(/_/g, ' ')}</h4>
                          {repo.name === 'LimiarTarot' && <span className="new-project-badge">{content.github.newProject}</span>}
                          <span className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600 dark:border-white/10 dark:bg-transparent dark:text-zinc-300">
                            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: languageColors[repo.language || 'Other'] || languageColors.Other }} />
                            GitHub: {repo.language || 'Other'}
                          </span>
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">{projectProfile?.summary || repo.description?.trim() || content.github.emptyDescription}</p>
                      </div>
                      <div className="grid shrink-0 gap-2 sm:flex sm:flex-wrap">
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`signal-mini-action inline-flex min-h-10 items-center justify-center gap-2 px-3 py-2 text-sm font-bold ${focusRing}`}
                          >
                            {content.github.openDemo}
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`signal-mini-action inline-flex min-h-10 items-center justify-center gap-2 px-3 py-2 text-sm font-bold ${focusRing}`}
                        >
                          {content.github.openRepo}
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>
                    {projectProfile && (
                      <div className="mt-4 grid gap-3 border-t border-zinc-200 pt-4 dark:border-white/10">
                        <div className="flex flex-wrap gap-2">
                          {projectProfile.technologies.map((technology) => (
                            <span key={technology} className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600 dark:border-white/10 dark:bg-black/20 dark:text-zinc-300">
                              {technology}
                            </span>
                          ))}
                        </div>
                        <div className="grid gap-2">
                          {projectProfile.layers.map((layer, index) => (
                            <div key={`${repo.name}-${layer}`} className="flex items-center gap-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                              <span className="grid h-5 w-5 shrink-0 place-items-center rounded border border-zinc-200 font-mono text-[10px] text-blue-700 dark:border-white/10 dark:text-blue-300">
                                {index + 1}
                              </span>
                              <span>{layer}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-4 flex flex-wrap gap-4 border-t border-zinc-200 pt-3 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {content.github.updated}: {formatRepoDate(repo.updated_at, locale)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Star size={14} />
                        {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <GitFork size={14} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection({ content }: SimpleSectionProps) {
  return (
    <section id="experience" className="bg-zinc-50 py-20 dark:bg-[#080b0d]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 font-mono text-sm text-blue-700 dark:text-blue-300">05 / experience</p>
          <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white">{content.experience.title}</h2>
          <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">{content.experience.subtitle}</p>

          <div className={`${cardSurface} mt-8 p-5`}>
            <div className="mb-5 flex items-center gap-3">
              <BookOpen className="text-amber-600 dark:text-amber-300" size={22} />
              <h3 className="font-semibold text-zinc-950 dark:text-white">{content.experience.educationTitle}</h3>
            </div>
            <ul className="space-y-3">
              {content.experience.education.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6846] dark:bg-[#ff7656]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="timeline-line absolute bottom-0 left-4 top-0 hidden w-px bg-zinc-200 dark:bg-white/10 md:block" />
          <div className="space-y-4">
            {content.experience.jobs.map((job) => (
              <article key={`${job.company}-${job.period}`} className={`${cardSurface} relative p-5 md:ml-10`}>
                <span className="absolute -left-[2.95rem] top-6 hidden h-4 w-4 rounded-full border-4 border-zinc-50 bg-blue-600 dark:border-[#080b0d] dark:bg-blue-400 md:block" />
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{job.role}</h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-blue-700 dark:text-blue-300">
                      <Briefcase size={15} />
                      {job.company}
                    </p>
                  </div>
                  <p className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 dark:text-zinc-400">
                    <CalendarDays size={15} />
                    {job.period}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{job.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ content }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(applyTemplate(content.contact.emailSubject, { name: formData.name }));
    const body = encodeURIComponent(`${content.contact.name}: ${formData.name}\n${content.contact.email}: ${formData.email}\n\n${content.contact.message}:\n${formData.message}`);
    window.location.href = `mailto:lucasismael03@gmail.com?subject=${subject}&body=${body}`;
  };

  const sendViaWhatsApp = () => {
    const message = encodeURIComponent(
      applyTemplate(content.contact.whatsappTemplate, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
    );
    window.open(`https://wa.me/5583996698962?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="bg-white py-20 dark:bg-[#0d1010]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 font-mono text-sm text-blue-700 dark:text-blue-300">06 / contact</p>
          <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white">{content.contact.title}</h2>
          <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">{content.contact.subtitle}</p>

          <div className="mt-8 grid gap-3">
            <a
              href="mailto:lucasismael03@gmail.com"
              className={`contact-action flex min-h-14 items-center justify-between gap-3 p-4 ${focusRing}`}
            >
              <span className="flex min-w-0 items-center gap-3">
                <Mail size={20} />
                <span className="break-all">lucasismael03@gmail.com</span>
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a
              href="tel:+5583996698962"
              className={`contact-action flex min-h-14 items-center justify-between gap-3 p-4 ${focusRing}`}
            >
              <span className="flex items-center gap-3">
                <Phone size={20} />
                +55 83 99669-8962
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a
              href="https://wa.me/5583996698962"
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-action flex min-h-14 items-center justify-between gap-3 p-4 ${focusRing}`}
            >
              <span className="flex items-center gap-3">
                <WhatsAppIcon size={20} />
                WhatsApp
              </span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={`${cardSurface} bg-zinc-50 p-5`}>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-semibold text-zinc-950 dark:text-white">{content.contact.formTitle}</h3>
            <Send className="text-blue-700 dark:text-blue-300" size={20} />
          </div>
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {content.contact.name}
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                autoComplete="name"
                className={`rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition-colors focus:border-blue-500 dark:border-white/10 dark:bg-black/30 dark:text-white ${focusRing}`}
                placeholder={content.contact.placeholders.name}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {content.contact.email}
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="email"
                className={`rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition-colors focus:border-blue-500 dark:border-white/10 dark:bg-black/30 dark:text-white ${focusRing}`}
                placeholder={content.contact.placeholders.email}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {content.contact.message}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={`resize-none rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition-colors focus:border-blue-500 dark:border-white/10 dark:bg-black/30 dark:text-white ${focusRing}`}
                placeholder={content.contact.placeholders.message}
              />
            </label>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              type="submit"
              className={`${solidAction} ${focusRing}`}
            >
              <Mail size={18} />
              {content.contact.sendEmail}
            </button>
            <button
              type="button"
              onClick={sendViaWhatsApp}
              disabled={!formData.name || !formData.message}
              className={`${ghostAction} disabled:cursor-not-allowed disabled:opacity-50 ${focusRing}`}
            >
              <WhatsAppIcon size={18} />
              {content.contact.sendWhatsapp}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function PortfolioFooter({ content }: SimpleSectionProps) {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-8 dark:border-white/10 dark:bg-[#080b0d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-zinc-500 dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>{content.footer}</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/UxUchoa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`rounded text-zinc-500 transition-colors hover:text-blue-700 dark:text-zinc-400 dark:hover:text-blue-300 ${focusRing}`}>
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/lucasuchoadg" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`rounded text-zinc-500 transition-colors hover:text-blue-700 dark:text-zinc-400 dark:hover:text-blue-300 ${focusRing}`}>
            <Linkedin size={18} />
          </a>
          <a href="https://www.behance.net/Lucas_-vieira" target="_blank" rel="noopener noreferrer" aria-label="Behance" className={`rounded text-zinc-500 transition-colors hover:text-blue-700 dark:text-zinc-400 dark:hover:text-blue-300 ${focusRing}`}>
            <BehanceIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
