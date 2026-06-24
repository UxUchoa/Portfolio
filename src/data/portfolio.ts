import type { GithubProfile, GithubRepo, Locale, ProjectStackProfile, SectionId } from '../types/github';

export const githubUser = 'UxUchoa';
export const profilePhoto = '/images/IMG_5704%20(1).jpg';
export const navItems: SectionId[] = ['home', 'work', 'github', 'experience', 'contact'];

export const languageColors: Record<string, string> = {
  TypeScript: '#38bdf8',
  JavaScript: '#f4d35e',
  Python: '#4ade80',
  HTML: '#fb7185',
  CSS: '#a78bfa',
  Tcl: '#f59e0b',
  Other: '#94a3b8',
};

export const pinnedRepoNames = [
  'UX-Analysis-pipeline',
  'Api_Gerenciamento_De_Produtos',
  'Portfolio',
  'Projeto_GLojas',
  'Skyrim_Copilot',
  'UCtorrent',
];

export const projectStackProfiles: Record<string, ProjectStackProfile> = {
  'UX-Analysis-pipeline': {
    summary: 'Pipeline UX com front-end analítico, API Python e IA local para leitura de entrevistas.',
    technologies: ['React', 'Vite', 'Recharts', 'Lucide', 'FastAPI', 'Pandas', 'Pydantic', 'Ollama', 'qwen3:4b'],
    layers: ['React + Vite + Recharts + Lucide', 'HTTP/REST', 'FastAPI + Pandas + Pydantic', 'Ollama local - qwen3:4b'],
  },
  Skyrim_Copilot: {
    summary: 'Copilot de gameplay com front-end React/Vite, API FastAPI e integração local com IA.',
    technologies: ['React', 'Vite', 'FastAPI', 'Dify', 'Docker', 'Ollama'],
    layers: ['React/Vite front-end', 'FastAPI backend/API', 'Dify infra/docker', 'Ollama no Windows host'],
  },
  Projeto_GLojas: {
    summary: 'Backend escalável com NestJS, TypeScript, PostgreSQL e documentação automática de API.',
    technologies: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL', 'Docker', 'class-validator', '@nestjs/swagger'],
    layers: ['NestJS + TypeScript', 'TypeORM + PostgreSQL', 'Docker', 'class-validator + Swagger'],
  },
  UCtorrent: {
    summary: 'Aplicativo desktop Python com interface PySide6, API local e persistência SQLite.',
    technologies: ['Python 3.11+', 'libtorrent', 'PySide6', 'FastAPI', 'Uvicorn', 'SQLite'],
    layers: ['Python 3.11+', 'libtorrent binding', 'PySide6 UI', 'FastAPI + Uvicorn', 'SQLite'],
  },
  Api_Gerenciamento_De_Produtos: {
    summary: 'API CRUD para gerenciamento de produtos, útil para contratos de backend e prática TypeScript.',
    technologies: ['TypeScript', 'API REST', 'CRUD', 'Node.js'],
    layers: ['TypeScript backend', 'REST endpoints', 'Product CRUD'],
  },
  Portfolio: {
    summary: 'Portfólio pessoal em React com Vite, TypeScript, Tailwind e consumo de dados públicos do GitHub.',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind', 'GitHub API'],
    layers: ['React + Vite', 'TypeScript', 'Tailwind UI', 'GitHub public API'],
  },
};

export const fallbackProfile: GithubProfile = {
  login: 'UxUchoa',
  avatar_url: 'https://avatars.githubusercontent.com/u/43651116?v=4',
  html_url: 'https://github.com/UxUchoa',
  bio: 'Sou um estudante com muita sede de evolução e anseio por aprendizado, apaixonado por programação. 💻',
  public_repos: 9,
  followers: 8,
  following: 13,
};

export const fallbackRepos: GithubRepo[] = [
  {
    name: 'UX-Analysis-pipeline',
    description: null,
    html_url: 'https://github.com/UxUchoa/UX-Analysis-pipeline',
    homepage: null,
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-05-14T23:20:48Z',
    size: 415,
  },
  {
    name: 'Api_Gerenciamento_De_Produtos',
    description: 'Crud simples para gerenciamento de produtos',
    html_url: 'https://github.com/UxUchoa/Api_Gerenciamento_De_Produtos',
    homepage: null,
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2025-07-29T13:25:08Z',
    size: 141,
  },
  {
    name: 'Portfolio',
    description: 'Template de portfolio',
    html_url: 'https://github.com/UxUchoa/Portfolio',
    homepage: 'https://portfolio-uchoatis-projects.vercel.app',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2025-08-26T14:53:37Z',
    size: 133665,
  },
  {
    name: 'Projeto_GLojas',
    description: null,
    html_url: 'https://github.com/UxUchoa/Projeto_GLojas',
    homepage: null,
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2025-10-01T19:37:12Z',
    size: 125403,
  },
  {
    name: 'Skyrim_Copilot',
    description: null,
    html_url: 'https://github.com/UxUchoa/Skyrim_Copilot',
    homepage: null,
    language: 'HTML',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-05-21T00:59:11Z',
    size: 46381,
  },
  {
    name: 'UCtorrent',
    description: null,
    html_url: 'https://github.com/UxUchoa/UCtorrent',
    homepage: null,
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-06-21T17:08:42Z',
    size: 180,
  },
];

export const copy = {
  pt: {
    nav: {
      home: 'Início',
      work: 'Cases',
      github: 'GitHub',
      experience: 'Trajetória',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'UX Researcher que sabe codar',
      title: 'Lucas Uchôa',
      subtitle:
        'Eu conecto pesquisa, interface e código para transformar sinais de usuário em produto. UX continua sendo meu território; codar é o diferencial que me deixa mais perto da entrega.',
      status: 'Aberto a oportunidades em UX, Produto e Front-end',
      location: 'Brasil',
      primaryAction: 'Ver GitHub',
      secondaryAction: 'Ver cases UX',
      cvAction: 'Baixar CV',
      codeLabel: 'hybrid-profile.ts',
      code: [
        'const lucas = {',
        "  role: 'UX Researcher',",
        "  stack: ['React', 'TypeScript', 'Python'],",
        "  edge: 'pesquisa que conversa com código',",
        "  goal: 'produto claro, útil e implementável'",
        '};',
      ],
      mobileCode: "UX Research + UI | React + TS + Python",
      metrics: [
        { value: '6+', label: 'anos em UX/UI' },
        { value: '2020', label: 'base full stack' },
        { value: 'PT/EN', label: 'comunicação' },
      ],
    },
    bridge: {
      title: 'Um perfil de UX com repertório técnico de produto.',
      text:
        'A força está na combinação: investigar bem, desenhar com intenção e entender o suficiente de implementação para colaborar melhor, prototipar melhor e defender decisões com mais precisão.',
      cards: [
        {
          title: 'Pesquisa que orienta produto',
          text: 'Entrevistas, testes, análise qualitativa e leitura de dados para transformar sinais em decisões.',
        },
        {
          title: 'Interface pronta para implementação',
          text: 'Arquitetura da informação, design systems, protótipos e handoff com atenção ao detalhe técnico.',
        },
        {
          title: 'Código como diferencial de UX',
          text: 'React, TypeScript, Python, APIs e automações como repertório para dialogar com engenharia e materializar soluções.',
        },
      ],
    },
    stack: {
      title: 'Stack híbrida',
      subtitle: 'UX segue como base; o código entra como evidência de autonomia, colaboração técnica e pensamento de produto.',
      clusters: [
        {
          title: 'Produto e UX',
          items: ['UX Research', 'UI Design', 'Testes de usabilidade', 'Design Systems', 'Arquitetura da informação'],
        },
        {
          title: 'Frontend',
          items: ['React', 'TypeScript', 'Tailwind', 'Design responsivo', 'Acessibilidade'],
        },
        {
          title: 'Dados e backend',
          items: ['Python', 'APIs', 'CRUD', 'Análise de dados', 'Automação'],
        },
      ],
    },
    work: {
      title: 'Cases UX que explicam meu jeito de pensar produto',
      subtitle:
        'Pesquisa, fluxo, interface e decisão continuam no centro. O GitHub complementa essa leitura mostrando como esse olhar também chega perto da implementação.',
      behanceAction: 'Behance completo',
      viewCase: 'Abrir PDF',
      openExternal: 'Ver online',
      cases: [
        {
          title: 'Live Well Membership',
          category: 'UI Case / Membership',
          year: '2025',
          description:
            'Redesign de uma plataforma de membership para experiências de férias, com foco em clareza, benefícios e decisão rápida.',
          image: '/images/live-well-thumbnail.png',
          pdfUrl: '/pdfs/Live Well Membership - UI Case.pdf',
          link: '/pdfs/Live Well Membership - UI Case.pdf',
          tags: ['UI', 'Produto', 'Hospitalidade'],
        },
        {
          title: 'Juritask',
          category: 'Legal management',
          year: '2025',
          description:
            'Plataforma jurídica para organizar fluxos, reduzir atrito operacional e melhorar a leitura de tarefas complexas.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/303e7b227022677.683864d03e96b.png',
          pdfUrl: '/pdfs/juritask.pdf',
          link: 'https://www.behance.net/gallery/227022677/Juritask-Legal-Management-(Case-Challenge)',
          tags: ['UX', 'SaaS', 'Workflow'],
        },
        {
          title: 'Tracksales',
          category: 'Management platform',
          year: '2025',
          description:
            'Interface de gestão com foco em métricas, acompanhamento de performance e tomada de decisão mais escaneável.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/9f2250225905089.682522cfea537.png',
          pdfUrl: '/pdfs/tracksales.pdf',
          link: 'https://www.behance.net/gallery/225905089/Tracksales-Management-Platform-UI',
          tags: ['Dashboard', 'Mobile', 'Data'],
        },
        {
          title: 'Me-ensina',
          category: 'Smart learning',
          year: '2024',
          description:
            'Experiência educacional centrada no aluno, explorando jornada, motivação e clareza no acesso ao conteúdo.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a9cc7a207985795.66e74c80f1c3d.png',
          pdfUrl: '/pdfs/me-ensina.pdf',
          link: 'https://www.behance.net/gallery/207985795/Me-ensina-Smart-learning-Case-Study',
          tags: ['EdTech', 'UX', 'Pesquisa'],
        },
      ],
    },
    github: {
      title: 'GitHub ao vivo, sem maquiagem',
      subtitle:
        'Projetos pinados carregados com dados públicos do GitHub e explicados pela arquitetura real. A intenção é mostrar repertório técnico sem apagar a base de UX.',
      loading: 'Sincronizando com GitHub',
      live: 'Dados ao vivo',
      fallback: 'Dados locais',
      error: 'GitHub limitou a API',
      updated: 'Atualizado',
      languageMix: 'Stack dos pinados',
      featuredRepos: 'Projetos pinados no GitHub',
      openRepo: 'Abrir repo',
      openDemo: 'Demo',
      emptyDescription: 'Sem descrição pública no GitHub.',
      profileAction: 'Perfil completo',
      publicRepos: 'repos públicos',
      followers: 'seguidores',
      following: 'seguindo',
      noBio: 'Bio pública indisponível no momento.',
    },
    experience: {
      title: 'Trajetória profissional',
      subtitle: 'A experiência em UX continua sendo o eixo: pesquisa, colaboração, leitura de usuário e proximidade com desenvolvimento.',
      jobs: [
        {
          period: 'Jan 2026 - Presente',
          role: 'Pesquisador UX',
          company: 'Avanade',
          description:
            'Pesquisa de mercado e usuários, refinamento de interfaces com dados qualitativos e integração de descobertas com design e desenvolvimento.',
        },
        {
          period: 'Mar 2024 - Dez 2025',
          role: 'Pesquisador UX',
          company: 'Qintess',
          description:
            'Pesquisas, identificação de melhorias, validação de funcionalidades e colaboração multifuncional para transformar feedback em produto.',
        },
        {
          period: 'Abr 2023 - Fev 2024',
          role: 'Designer UX/UI',
          company: 'ImoBanco',
          description:
            'Interfaces, otimização de jornadas e parceria com desenvolvimento para equilibrar intenção visual e viabilidade técnica.',
        },
        {
          period: 'Mai 2023 - Jan 2024',
          role: 'Designer Gráfico Freelancer',
          company: 'Touuro',
          description: 'Identidade de marca, ativos visuais e consistência em comunicações de marketing.',
        },
        {
          period: 'Out 2021 - Mar 2023',
          role: 'Designer UX/UI',
          company: 'AevoTech',
          description: 'Aplicações centradas no usuário, melhoria de usabilidade, retenção e participação em projetos principais.',
        },
        {
          period: 'Out 2020 - Out 2021',
          role: 'Desenvolvedor Full Stack',
          company: 'Indra',
          description: 'Desenvolvimento de projetos web, colaboração com design e implementação de interfaces responsivas.',
        },
      ],
      educationTitle: 'Formação e certificações',
      education: [
        'Tecnólogo em Design Gráfico - UNIPÊ',
        'Pós-graduação em User Experience Design and Beyond - PUCRS',
        'Curso Intensivo de UX Design - Awari',
      ],
    },
    contact: {
      title: 'Vamos conversar',
      subtitle: 'Busco oportunidades em UX, Produto ou Front-end nas quais pesquisa, interface e código possam trabalhar juntos.',
      formTitle: 'Mensagem rápida',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      sendEmail: 'Enviar por email',
      sendWhatsapp: 'Enviar por WhatsApp',
      placeholders: {
        name: 'Seu nome',
        email: 'seu@email.com',
        message: 'Conte sobre a vaga, produto ou desafio.',
      },
      whatsappTemplate: 'Olá! Meu nome é {{name}}.\n\nEmail: {{email}}\n\nMensagem:\n{{message}}',
      emailSubject: 'Contato do Portfolio - {{name}}',
    },
    footer: 'Lucas Uchôa - UX Research, UI e código aplicado a produto.',
  },
  en: {
    nav: {
      home: 'Home',
      work: 'Cases',
      github: 'GitHub',
      experience: 'Path',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'UX Researcher who can code',
      title: 'Lucas Uchôa',
      subtitle:
        'I connect research, interface craft and code to turn user signals into product. UX remains my home base; coding is the edge that brings me closer to delivery.',
      status: 'Open to UX, Product and Front-end opportunities',
      location: 'Brazil',
      primaryAction: 'See GitHub',
      secondaryAction: 'See UX cases',
      cvAction: 'Download CV',
      codeLabel: 'hybrid-profile.ts',
      code: [
        'const lucas = {',
        "  role: 'UX Researcher',",
        "  stack: ['React', 'TypeScript', 'Python'],",
        "  edge: 'research that speaks code',",
        "  goal: 'clear, useful, buildable product'",
        '};',
      ],
      mobileCode: "UX Research + UI | React + TS + Python",
      metrics: [
        { value: '6+', label: 'years in UX/UI' },
        { value: '2020', label: 'full stack base' },
        { value: 'PT/EN', label: 'communication' },
      ],
    },
    bridge: {
      title: 'A UX profile with technical product range.',
      text:
        'The strength is the combination: investigate well, design with intent and understand implementation enough to collaborate better, prototype better and defend decisions with more precision.',
      cards: [
        {
          title: 'Research that guides product',
          text: 'Interviews, tests, qualitative analysis and data reading to turn signals into decisions.',
        },
        {
          title: 'Interface ready for implementation',
          text: 'Information architecture, design systems, prototypes and handoff with attention to technical detail.',
        },
        {
          title: 'Code as a UX advantage',
          text: 'React, TypeScript, Python, APIs and automation as a way to speak with engineering and make solutions tangible.',
        },
      ],
    },
    stack: {
      title: 'Hybrid stack',
      subtitle: 'UX remains the base; code adds autonomy, technical collaboration and product thinking.',
      clusters: [
        {
          title: 'Product and UX',
          items: ['UX Research', 'UI Design', 'Usability testing', 'Design Systems', 'Information architecture'],
        },
        {
          title: 'Frontend',
          items: ['React', 'TypeScript', 'Tailwind', 'Responsive design', 'Accessibility'],
        },
        {
          title: 'Data and backend',
          items: ['Python', 'APIs', 'CRUD', 'Data analysis', 'Automation'],
        },
      ],
    },
    work: {
      title: 'UX cases that explain how I think about product',
      subtitle:
        'Research, flows, interface and decisions stay at the center. GitHub complements that story by showing how the same thinking gets closer to implementation.',
      behanceAction: 'Full Behance',
      viewCase: 'Open PDF',
      openExternal: 'View online',
      cases: [
        {
          title: 'Live Well Membership',
          category: 'UI Case / Membership',
          year: '2025',
          description: 'Membership platform redesign focused on clarity, benefits and faster decision-making.',
          image: '/images/live-well-thumbnail.png',
          pdfUrl: '/pdfs/Live Well Membership - UI Case.pdf',
          link: '/pdfs/Live Well Membership - UI Case.pdf',
          tags: ['UI', 'Product', 'Hospitality'],
        },
        {
          title: 'Juritask',
          category: 'Legal management',
          year: '2025',
          description:
            'Legal platform for organizing workflows, reducing operational friction and improving readability in complex tasks.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/303e7b227022677.683864d03e96b.png',
          pdfUrl: '/pdfs/juritask.pdf',
          link: 'https://www.behance.net/gallery/227022677/Juritask-Legal-Management-(Case-Challenge)',
          tags: ['UX', 'SaaS', 'Workflow'],
        },
        {
          title: 'Tracksales',
          category: 'Management platform',
          year: '2025',
          description: 'Management interface focused on metrics, performance tracking and scannable decision-making.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/9f2250225905089.682522cfea537.png',
          pdfUrl: '/pdfs/tracksales.pdf',
          link: 'https://www.behance.net/gallery/225905089/Tracksales-Management-Platform-UI',
          tags: ['Dashboard', 'Mobile', 'Data'],
        },
        {
          title: 'Me-ensina',
          category: 'Smart learning',
          year: '2024',
          description: 'Education experience centered on student journeys, motivation and clear content access.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a9cc7a207985795.66e74c80f1c3d.png',
          pdfUrl: '/pdfs/me-ensina.pdf',
          link: 'https://www.behance.net/gallery/207985795/Me-ensina-Smart-learning-Case-Study',
          tags: ['EdTech', 'UX', 'Research'],
        },
      ],
    },
    github: {
      title: 'Live GitHub, no makeup',
      subtitle:
        'Pinned projects loaded from public GitHub data and explained through their real architecture. The goal is technical evidence without erasing the UX foundation.',
      loading: 'Syncing with GitHub',
      live: 'Live data',
      fallback: 'Local data',
      error: 'GitHub API limited',
      updated: 'Updated',
      languageMix: 'Pinned stack',
      featuredRepos: 'Pinned GitHub projects',
      openRepo: 'Open repo',
      openDemo: 'Demo',
      emptyDescription: 'No public description on GitHub.',
      profileAction: 'Full profile',
      publicRepos: 'public repos',
      followers: 'followers',
      following: 'following',
      noBio: 'Public bio unavailable right now.',
    },
    experience: {
      title: 'Professional path',
      subtitle: 'UX remains the axis: research, collaboration, user awareness and proximity to development.',
      jobs: [
        {
          period: 'Jan 2026 - Present',
          role: 'UX Researcher',
          company: 'Avanade',
          description:
            'Market and user research, interface refinement with qualitative data and integration of findings with design and development.',
        },
        {
          period: 'Mar 2024 - Dec 2025',
          role: 'UX Researcher',
          company: 'Qintess',
          description: 'Research, UX improvement discovery, feature validation and cross-functional collaboration.',
        },
        {
          period: 'Apr 2023 - Feb 2024',
          role: 'UX/UI Designer',
          company: 'ImoBanco',
          description: 'Interface design, journey optimization and development partnership for technically viable product work.',
        },
        {
          period: 'May 2023 - Jan 2024',
          role: 'Freelance Graphic Designer',
          company: 'Touuro',
          description: 'Brand identity, visual assets and consistency across marketing communications.',
        },
        {
          period: 'Oct 2021 - Mar 2023',
          role: 'UX/UI Designer',
          company: 'AevoTech',
          description: 'User-centered applications, usability improvements, retention work and key product projects.',
        },
        {
          period: 'Oct 2020 - Oct 2021',
          role: 'Full Stack Developer',
          company: 'Indra',
          description: 'Web project development, design collaboration and implementation of responsive interfaces.',
        },
      ],
      educationTitle: 'Education and certifications',
      education: [
        'Graphic Design Technology Degree - UNIPÊ',
        'Postgraduate Specialization in User Experience Design and Beyond - PUCRS',
        'Intensive UX Design Course - Awari',
      ],
    },
    contact: {
      title: 'Let us talk',
      subtitle: 'I am looking for UX, Product or Front-end roles where research, interface and code can work together.',
      formTitle: 'Quick message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      sendEmail: 'Send by email',
      sendWhatsapp: 'Send by WhatsApp',
      placeholders: {
        name: 'Your name',
        email: 'you@email.com',
        message: 'Tell me about the role, product or challenge.',
      },
      whatsappTemplate: 'Hi! My name is {{name}}.\n\nEmail: {{email}}\n\nMessage:\n{{message}}',
      emailSubject: 'Portfolio contact - {{name}}',
    },
    footer: 'Lucas Uchôa - UX Research, UI and code applied to product.',
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export type PortfolioCopy = typeof copy[Locale];
