import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { LanguageSwitcher } from './components/ui/language-switcher';
import { SimplePDFViewer } from './components/ui/simple-pdf-viewer';
import {
  ContactSection,
  ExperienceSection,
  GithubSection,
  HeroSection,
  PortfolioFooter,
  ProfileBridgeSection,
  StackSection,
  WorkSection,
} from './components/portfolio-sections';
import { copy, navItems } from './data/portfolio';
import { useGithubRepos } from './hooks/useGithubRepos';
import type { Locale, SectionId } from './types/github';

interface PDFState {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
}

function App() {
  const { i18n } = useTranslation();
  const locale: Locale = i18n.resolvedLanguage?.startsWith('pt') || i18n.language?.startsWith('pt') ? 'pt' : 'en';
  const content = copy[locale];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isDark, setIsDark] = useState(true);
  const [pdfViewer, setPdfViewer] = useState<PDFState>({ isOpen: false, pdfUrl: '', title: '' });
  const githubData = useGithubRepos();
  const themeLabel = isDark
    ? locale === 'pt'
      ? 'Ativar modo claro'
      : 'Activate light mode'
    : locale === 'pt'
      ? 'Ativar modo escuro'
      : 'Activate dark mode';
  const menuLabel = locale === 'pt' ? 'Menu de navegação' : 'Navigation menu';

  const cvFile =
    locale === 'pt'
      ? { path: '/pdfs/CV_PT-BR_Lucas_Uchoa.pdf', name: 'CV_PT-BR_Lucas_Uchoa.pdf' }
      : { path: '/pdfs/CV_EN-US_Lucas_Uchoa.pdf', name: 'CV_EN-US_Lucas_Uchoa.pdf' };

  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-mode');
    const initialDark = savedTheme === null ? true : savedTheme === 'true';
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navItems.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    localStorage.setItem('dark-mode', nextDark.toString());
    document.documentElement.classList.toggle('dark', nextDark);
  };

  const scrollToSection = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openPDFViewer = (pdfUrl: string, title: string) => {
    setPdfViewer({ isOpen: true, pdfUrl, title });
  };

  const closePDFViewer = () => {
    setPdfViewer({ isOpen: false, pdfUrl: '', title: '' });
  };

  return (
    <div className="portfolio-shell min-h-screen antialiased">
      <nav className="site-nav fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="brand-lockup flex items-center gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="Dev Uchôa"
          >
            <span className="brand-mark grid h-10 w-10 place-items-center font-mono text-xs font-black">
              LU
            </span>
            <span className="hidden sm:block">
              <span className="block text-[11px] font-black uppercase tracking-[0.18em]">Lucas Uchôa</span>
              <span className="block text-[10px] uppercase tracking-[0.12em] opacity-60">product · code · research</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item)}
                aria-current={activeSection === item ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                  activeSection === item ? 'is-active' : ''
                }`}
              >
                {content.nav[item]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
            type="button"
            onClick={toggleDarkMode}
              className="nav-icon-button grid h-10 w-10 place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label={themeLabel}
            aria-pressed={isDark}
            title={themeLabel}
          >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
              className="nav-icon-button grid h-10 w-10 place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
            aria-label={menuLabel}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-zinc-200 bg-zinc-50 px-4 py-3 shadow-lg shadow-zinc-900/5 dark:border-white/10 dark:bg-[#080b0d] dark:shadow-black/30 md:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollToSection(item)}
                  aria-current={activeSection === item ? 'page' : undefined}
                  className={`rounded-md px-3 py-3 text-left text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                    activeSection === item
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
                      : 'text-zinc-700 hover:bg-zinc-200 dark:text-zinc-200 dark:hover:bg-white/10'
                  }`}
                >
                  {content.nav[item]}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="nav-signal" aria-hidden="true" />
      </nav>

      <main>
        <HeroSection content={content} cvFile={cvFile} onNavigate={scrollToSection} />
        <ProfileBridgeSection content={content} />
        <StackSection content={content} />
        <GithubSection key={locale} content={content} locale={locale} {...githubData} />
        <WorkSection content={content} onOpenPDF={openPDFViewer} />
        <ExperienceSection content={content} />
        <ContactSection content={content} />
      </main>

      <PortfolioFooter content={content} />

      <SimplePDFViewer
        isOpen={pdfViewer.isOpen}
        onClose={closePDFViewer}
        pdfUrl={pdfViewer.pdfUrl}
        title={pdfViewer.title}
        labels={content.pdfViewer}
      />
    </div>
  );
}

export default App;
