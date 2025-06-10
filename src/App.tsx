import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Mail, Phone, ExternalLink, Download, Menu, X, Eye, Calendar, MapPin, Award, BookOpen, Briefcase, Moon, Sun } from 'lucide-react';
import { Button as MovingBorderButton } from "./components/ui/moving-border";
import { TextShimmer } from "./components/ui/text-shimmer";
import { SimplePDFViewer } from "./components/ui/simple-pdf-viewer";
import { LanguageSwitcher } from './components/ui/language-switcher';
import { WhatsAppIcon } from './components/ui/whatsapp-icon';
import { BehanceIcon } from './components/ui/behance-icon';
import { LazyImage } from './components/ui/lazy-image';
import { AboutSectionSkeleton, HeroSectionSkeleton } from './components/ui/skeleton';
import { VideoCardSkeleton, ExperienceListSkeleton, ShimmerSkeleton } from './components/ui/shimmer-skeleton';
import { FadeIn, FadeInList } from './components/ui/fade-in';
import { useSectionLoading } from './hooks/useLoading';

function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [pdfViewer, setPdfViewer] = useState({ isOpen: false, pdfUrl: '', title: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isHeroLoading = useSectionLoading(800);
  const isAboutLoading = useSectionLoading(1200);
  const isPortfolioLoading = useSectionLoading(1500);
  const isExperienceLoading = useSectionLoading(1800);

    const cvFile = i18n.language === 'pt'
    ? { path: '/pdfs/CV_PT-BR_Lucas_Uchoa.pdf', name: 'CV_PT-BR_Lucas_Uchoa.pdf' }
    : { path: '/pdfs/CV_EN-US_Lucas_Uchoa.pdf', name: 'CV_EN-US_Lucas_Uchoa.pdf' };

  useEffect(() => {
    const saved = localStorage.getItem('dark-mode');
    const initialDark = saved === 'true';
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('dark-mode', newDark.toString());
    document.documentElement.classList.toggle('dark', newDark);
  };

  const projects = [
    { id: 1, key: 'juritask' },
    { id: 2, key: 'tracksales' },
    { id: 3, key: 'meEnsina' },
    { id: 4, key: 'flowchartTools' }
  ].map(p => ({
    ...p,
    title: t(`portfolio.projects.${p.key}.title`),
    category: t(`portfolio.projects.${p.key}.category`),
    description: t(`portfolio.projects.${p.key}.description`),
    image: p.id === 1 ? "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/303e7b227022677.683864d03e96b.png" :
           p.id === 2 ? "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/9f2250225905089.682522cfea537.png" :
           p.id === 3 ? "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a9cc7a207985795.66e74c80f1c3d.png" :
           "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a1bd4c210727753.671691f195fd5.png",
    tags: ["UI/UX", "Web Design", "Figma"],
    year: p.id <= 2 ? "2025" : "2024",
    link: p.id === 1 ? "https://www.behance.net/gallery/227022677/Juritask-Legal-Management-(Case-Challenge)" :
          p.id === 2 ? "https://www.behance.net/gallery/225905089/Tracksales-Management-Platform-UI" :
          p.id === 3 ? "https://www.behance.net/gallery/207985795/Me-ensina-Smart-learning-Case-Study" :
          "https://www.behance.net/gallery/210727753/Benchmarking-Flowchart-Tools",
    pdfUrl: p.id === 1 ? "/pdfs/juritask.pdf" :
            p.id === 2 ? "/pdfs/tracksales.pdf" :
            p.id === 3 ? "/pdfs/me-ensina.pdf" :
            "/pdfs/benchmark.pdf"
  }));

  const skills = [
    { name: t('about.skills.uxResearch'), level: 95 },
    { name: t('about.skills.uiDesign'), level: 98 },
    { name: t('about.skills.prototyping'), level: 92 },
    { name: t('about.skills.userTesting'), level: 88 },
    { name: t('about.skills.infoArchitecture'), level: 90 },
    { name: t('about.skills.designSystems'), level: 94 }
  ];

  const tools = [
    "Figma", "Adobe XD", "Sketch", "Adobe Photoshop", "Adobe Illustrator",
    "Miro", "InVision", "Principle", "After Effects", "Zeplin"
  ];

  const experience = ['bancoBrasil', 'imoBanco', 'aevoTech', 'indra'].map(key => ({
    period: t(`experience.jobs.${key}.period`),
    role: t(`experience.jobs.${key}.role`),
    company: t(`experience.jobs.${key}.company`),
    description: t(`experience.jobs.${key}.description`),
  }));

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openPDFViewer = (pdfUrl: string, title: string) => {
    setPdfViewer({ isOpen: true, pdfUrl, title });
  };

  const closePDFViewer = () => {
    setPdfViewer({ isOpen: false, pdfUrl: '', title: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Contato do Portfolio - ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    const mailtoLink = `mailto:lucasismael03@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const sendViaWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`);
    const whatsappLink = `https://wa.me/5583996698962?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900 dark:text-white">{t('nav.name')}</div>
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'portfolio', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-blue-600'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                  }`}
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
              <LanguageSwitcher />
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher />
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
              {['home', 'about', 'portfolio', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        {isHeroLoading ? (
          <HeroSectionSkeleton />
        ) : (
          <FadeIn duration={800} direction="up">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-blue-600 font-medium text-lg">{t('hero.greeting')}</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {t('hero.iam')}{" "}
                  <TextShimmer duration={3} className="font-bold">
                    {t('hero.name')}
                  </TextShimmer>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  <Trans i18nKey="hero.description">
                    A UX/UI Designer with <span className="font-semibold text-blue-600">6 years of experience</span> crafting digital experiences that delight users and drive business results.
                  </Trans>
                </p>
              </div>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <MovingBorderButton
                  onClick={() => scrollToSection('portfolio')}
                  duration={3000}
                  borderRadius="1.25rem"
                  className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                  borderClassName="bg-[radial-gradient(circle,#3b82f6_30%,transparent_70%)]"
                >
                  <div className="flex items-center space-x-2 px-4">
                    <Eye size={20} />
                    <span>{t('hero.viewProjects')}</span>
                  </div>
                </MovingBorderButton>
                    <a href={cvFile.path} download={cvFile.name}>
                  <MovingBorderButton
                    duration={3000}
                    borderRadius="1.25rem"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white border border-gray-300 dark:border-transparent"
                    borderClassName="bg-[radial-gradient(circle,#6b7280_25%,transparent_75%)]"
                  >
                    <div className="flex items-center space-x-2 px-4">
                      <Download size={20} />
                      <span>{t('hero.downloadCV')}</span>
                    </div>
                  </MovingBorderButton>
                </a>
              </div>
                  <div className="flex items-center space-x-6 pt-4 justify-center lg:justify-start">
                <a href="mailto:lucasismael03@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors" title="Email">
                  <Mail size={24} />
                </a>
                <a href="https://www.behance.net/Lucas_-vieira" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors" title="Behance Portfolio">
                  <BehanceIcon size={24} />
                </a>
                <a href="https://wa.me/5583996698962" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors" title="WhatsApp">
                  <WhatsAppIcon size={24} />
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden">
                      <LazyImage 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQF15ncVW99TlQ/profile-displayphoto-shrink_800_800/B4DZXnugIoHkAc-/0/1743349482542?e=1754524800&v=beta&t=6AkOte0FiqZjpOjsYv-bhaH5AOnVH7aXHZRfH-RADTI"
                    alt="Lucas Uchôa - UX/UI Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
          </FadeIn>
        )}
      </section>

      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        {isAboutLoading ? (
          <AboutSectionSkeleton />
        ) : (
          <FadeIn duration={800} direction="up">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t('about.intro')}</p>
            <p className="mt-4 text-md text-gray-500 dark:text-gray-400 italic max-w-2xl mx-auto">{t('about.subheading')}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8 text-center lg:text-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.journeyTitle')}</h3>
                <div className="space-y-4">
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('about.journeyParagraph1')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    <Trans 
                      i18nKey="about.journeyParagraph2"
                      components={[
                        <span className="font-semibold text-blue-600" />,
                        <span className="font-semibold text-blue-600" />,
                        <span className="font-semibold text-blue-600" />
                      ]}
                    />
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {t('about.journeyParagraph3')}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.quickFactsTitle')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none">
                      <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <MapPin className="text-blue-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{t('about.quickFacts.location')}</span>
                  </div>
                      <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <Briefcase className="text-blue-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{t('about.quickFacts.experience')}</span>
                  </div>
                      <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <Award className="text-blue-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{t('about.quickFacts.projects')}</span>
                  </div>
                      <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <BookOpen className="text-blue-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{t('about.quickFacts.learning')}</span>
                  </div>
                </div>
              </div>
            </div>
                <div className="space-y-8 text-center lg:text-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.skillsTitle')}</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.toolsTitle')}</h3>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
          </FadeIn>
        )}
      </section>

      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
        {isPortfolioLoading ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <ShimmerSkeleton width="280px" height="32px" className="mx-auto mb-4" />
              <ShimmerSkeleton width="320px" height="24px" className="mx-auto" />
            </div>
            <div className="text-center mb-12">
              <ShimmerSkeleton width="200px" height="20px" className="mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, index) => (
                <VideoCardSkeleton key={index} />
              ))}
            </div>
          </div>
        ) : (
          <FadeIn duration={800} direction="up">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={200} duration={600} direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('portfolio.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t('portfolio.subtitle')}</p>
          </div>
              </FadeIn>
              <FadeIn delay={400} duration={600} direction="up">
          <div className="text-center mb-12">
            <a 
              href="https://www.behance.net/Lucas_-vieira" 
              target="_blank" 
              rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <MovingBorderButton borderRadius="1.75rem" className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border-neutral-200 dark:border-slate-800">
                      <div className="flex items-center space-x-3 px-4 py-1">
                        <BehanceIcon className="text-blue-600 dark:text-blue-400" size={20} />
                        <span className="font-medium">{t('portfolio.viewFullPortfolio')}</span>
                      </div>
                    </MovingBorderButton>
            </a>
          </div>
              </FadeIn>
              <FadeInList 
                className="grid md:grid-cols-2 gap-8"
                itemDelay={150}
                direction="up"
              >
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="aspect-video bg-gray-200 dark:bg-gray-600 overflow-hidden">
                      <LazyImage 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{project.category}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                  </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                      <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-600">
                        <button onClick={() => openPDFViewer(project.pdfUrl, project.title)} className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center space-x-2">
                          <Eye size={18} />
                      <span>{t('portfolio.viewPDF')}</span>
                    </button>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 flex items-center space-x-2">
                      <span>{t('portfolio.viewBehance')}</span>
                          <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
              </FadeInList>
          </div>
          </FadeIn>
        )}
      </section>

      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        {isExperienceLoading ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <ShimmerSkeleton width="250px" height="32px" className="mx-auto mb-4" />
              <ShimmerSkeleton width="350px" height="24px" className="mx-auto" />
            </div>
            <ExperienceListSkeleton />
            <div className="mt-16">
              <ShimmerSkeleton width="300px" height="32px" className="mx-auto mb-6" />
              <div className="grid md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="text-center">
                    <ShimmerSkeleton width="64px" height="64px" rounded="full" className="mx-auto mb-4" />
                    <ShimmerSkeleton width="150px" height="24px" className="mx-auto mb-2" />
                    <ShimmerSkeleton width="120px" height="16px" className="mx-auto mb-1" />
                    <ShimmerSkeleton width="180px" height="12px" className="mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <FadeIn duration={800} direction="up">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={200} duration={600} direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('experience.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t('experience.subtitle')}</p>
          </div>
              </FadeIn>
              <FadeInList 
                className="space-y-8"
                itemDelay={200}
                direction="up"
              >
            {experience.map((job, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-center md:text-left">
                <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="flex items-center space-x-2 text-blue-600 font-medium mb-2 justify-center md:justify-start">
                    <Calendar size={16} />
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{job.role}</h3>
                  <h4 className="text-lg text-blue-600 font-medium mb-3">{job.company}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
              </FadeInList>
              <FadeIn delay={600} duration={600} direction="up">
          <div className="mt-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{t('about.educationTitle')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{t('about.education.computerScience.degree')}</h4>
                      <p className="text-blue-600 text-sm font-medium mb-2">{t('about.education.computerScience.type')}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{t('about.education.computerScience.institution')}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{t('about.education.computerScience.period')} • {t('about.education.computerScience.status')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{t('about.education.uxBeyond.degree')}</h4>
                      <p className="text-blue-600 text-sm font-medium mb-2">{t('about.education.uxBeyond.type')}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{t('about.education.uxBeyond.institution')}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{t('about.education.uxBeyond.period')} • {t('about.education.uxBeyond.status')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{t('about.education.graphicDesign.degree')}</h4>
                      <p className="text-blue-600 text-sm font-medium mb-2">{t('about.education.graphicDesign.type')}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{t('about.education.graphicDesign.institution')}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{t('about.education.graphicDesign.period')} • {t('about.education.graphicDesign.status')}</p>
              </div>
            </div>
          </div>
              </FadeIn>
        </div>
          </FadeIn>
        )}
      </section>

      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:lucasismael03@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
                  >
                    <Mail className="text-blue-600" size={24} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">lucasismael03@gmail.com</p>
                    </div>
                  </a>
                  <a 
                    href="tel:+5583996698962"
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
                  >
                    <Phone className="text-blue-600" size={24} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">+55 83 996698962</p>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/5583996698962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
                  >
                    <WhatsAppIcon className="text-green-500" size={24} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">WhatsApp</p>
                      <p className="text-gray-600 dark:text-gray-300">+55 83 996698962</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('contact.form.title')}</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.message')}</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>
                <div className="flex flex-col space-y-3">
                  <MovingBorderButton
                    type="submit"
                    duration={3000}
                    borderRadius="1rem"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Mail size={20} />
                      <span>{isSubmitting ? 'Enviando...' : t('contact.form.sendMessage')}</span>
                    </div>
                  </MovingBorderButton>
                  <button
                    type="button"
                    onClick={sendViaWhatsApp}
                    disabled={!formData.name || !formData.message}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <WhatsAppIcon size={20} />
                    <span>Enviar via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 dark:bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {t('footer.by')}. {t('footer.madeWith')} ❤️</p>
          </div>
        </div>
      </footer>

      <SimplePDFViewer
        isOpen={pdfViewer.isOpen}
        onClose={closePDFViewer}
        pdfUrl={pdfViewer.pdfUrl}
        title={pdfViewer.title}
      />
    </div>
  );
}

export default App;