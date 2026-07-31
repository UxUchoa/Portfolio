import type { GithubProfile, GithubRepo, Locale, ProjectStackProfile, SectionId } from '../types/github';

export const githubUser = 'UxUchoa';
export const profilePhoto = '/images/IMG_5704%20(1).jpg';
export const navItems: SectionId[] = ['home', 'github', 'work', 'experience', 'contact'];

export const languageColors: Record<string, string> = {
  TypeScript: '#38bdf8',
  JavaScript: '#f4d35e',
  Python: '#ff6846',
  HTML: '#fb7185',
  CSS: '#a78bfa',
  Tcl: '#f59e0b',
  Other: '#94a3b8',
};

export const pinnedRepoNames = [
  'LimiarTarot',
  'UCtorrent',
  'Skyrim_Copilot',
  'UX-Analysis-pipeline',
  'Projeto_Viagem',
  'Projeto_GLojas',
];

export const projectTechnologyStacks: Partial<Record<string, ProjectStackProfile['technologies']>> = {
  LimiarTarot: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4', 'Zod', 'Ollama', 'Python', 'Vitest', 'Playwright'],
  Projeto_Viagem: ['React 19', 'Vite 7', 'JavaScript', 'CSS', 'Weather UI', 'Mobile-first'],
  'UX-Analysis-pipeline': ['React', 'Vite', 'Recharts', 'Lucide', 'FastAPI', 'Pandas', 'Pydantic', 'Ollama', 'qwen3:4b'],
  Skyrim_Copilot: ['React', 'Vite', 'FastAPI', 'Dify', 'Docker', 'Ollama'],
  Projeto_GLojas: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL', 'Docker', 'class-validator', '@nestjs/swagger'],
  UCtorrent: ['Python 3.11+', 'libtorrent', 'PySide6', 'FastAPI', 'Uvicorn', 'SQLite'],
  Api_Gerenciamento_De_Produtos: ['TypeScript', 'API REST', 'CRUD', 'Node.js'],
  Portfolio: ['React', 'Vite', 'TypeScript', 'Tailwind', 'GitHub API'],
};

export const fallbackProfile: GithubProfile = {
  login: 'UxUchoa',
  avatar_url: 'https://avatars.githubusercontent.com/u/43651116?v=4',
  html_url: 'https://github.com/UxUchoa',
  bio: 'Sou um estudante com muita sede de evolução e anseio por aprendizado, apaixonado por programação. 💻',
  public_repos: 10,
  followers: 8,
  following: 13,
};

export const fallbackRepos: GithubRepo[] = [
  {
    name: 'LimiarTarot',
    description: 'Portal interativo para estudo e interpretação de tiragens do Tarô de Waite.',
    html_url: 'https://github.com/UxUchoa/LimiarTarot',
    homepage: null,
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-07-21T15:48:18Z',
    size: 12241,
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
    name: 'Projeto_Viagem',
    description: 'Aplicativo mobile-first para organizar roteiros, clima e deslocamentos de viagem.',
    html_url: 'https://github.com/UxUchoa/Projeto_Viagem',
    homepage: 'https://projeto-viagem-ten.vercel.app',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2025-11-25T16:50:52Z',
    size: 15204,
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
];

export const copy = {
  pt: {
    nav: {
      home: 'Início',
      github: 'Projetos Dev',
      work: 'Produto/UI',
      experience: 'Trajetória',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'Product Designer com background fullstack',
      title: 'Lucas Uchôa',
      headline: 'Entre a pergunta certa e o produto funcionando.',
      subtitle:
        'Crio soluções digitais conectando produto, desenvolvimento fullstack e UX/UI. Meu diferencial é transformar problemas de negócio em experiências claras, viáveis tecnicamente e sustentadas por pesquisa, dados e implementação.',
      status: 'Produto, fullstack, UX/UI e pesquisa',
      location: 'Brasil',
      primaryAction: 'Ver projetos fullstack',
      secondaryAction: 'Conhecer cases de produto',
      cvAction: 'Baixar CV',
      codeLabel: 'product-fullstack-profile.ts',
      code: [
        'const lucas = {',
        "  role: 'Product Designer + Fullstack background',",
        "  priority: ['product', 'technology', 'ux-ui'],",
        "  stack: ['React', 'TypeScript', 'Python', 'APIs'],",
        "  edge: 'produto com profundidade técnica',",
        "  goal: 'soluções úteis, viáveis e escaláveis'",
        '};',
      ],
      mobileCode: "Produto + Fullstack + UX/UI | React + TS + Python",
      metrics: [
        { value: '6+', label: 'anos em UX/UI' },
        { value: '2020', label: 'base full stack' },
        { value: 'PT/EN', label: 'comunicação' },
      ],
      process: ['Observar', 'Estruturar', 'Construir'],
    },
    bridge: {
      title: 'Produto primeiro, tecnologia forte e UX/UI para transformar intenção em entrega.',
      text:
        'Sou Lucas Uchôa, Product Designer com background fullstack e experiência na criação de produtos digitais de ponta a ponta. Minha atuação começa no problema de produto, ganha profundidade técnica e se materializa em interfaces claras, usáveis e possíveis de construir.',
      cards: [
        {
          title: 'Produto e decisão',
          text: 'Discovery, jornada, priorização, métricas e leitura de contexto para transformar problemas em decisões de produto.',
        },
        {
          title: 'Tecnologia e fullstack',
          text: 'React, TypeScript, Python, APIs, bancos de dados e automações para aproximar estratégia, protótipo e implementação real.',
        },
        {
          title: 'UX/UI e design system',
          text: 'Pesquisa com usuário, arquitetura da informação, acessibilidade, componentes e handoff para dar forma clara à solução.',
        },
      ],
    },
    stack: {
      title: 'Produto, tecnologia e design',
      subtitle: 'A ordem aqui é intencional: pensar produto, sustentar com tecnologia e transformar em interface clara. UX/UI segue forte, mas a leitura técnica ganha protagonismo.',
      clusters: [
        {
          title: 'Produto & Estratégia',
          items: ['Discovery', 'Product Thinking', 'Jornada do Usuário', 'Priorização', 'Métricas', 'NPS', 'CES'],
        },
        {
          title: 'Tecnologia & Fullstack',
          items: ['React', 'JavaScript', 'TypeScript', 'Python', 'APIs REST', 'FastAPI', 'NestJS', 'SQL', 'Docker'],
        },
        {
          title: 'Pesquisa & Validação',
          items: ['Entrevistas', 'Testes de Usabilidade', 'Avaliação Heurística', 'Benchmarking', 'Análise de Dados'],
        },
        {
          title: 'UI & Design System',
          items: ['Figma', 'Prototipação', 'Design System', 'Acessibilidade', 'WCAG', 'Componentização', 'Tailwind'],
        },
      ],
    },
    work: {
      title: 'Cases de produto, UX e UI',
      subtitle:
        'Prova de processo e design: problema, jornada, hipótese e interface. A frente técnica aparece com mais força no GitHub; aqui, os cases mostram como as decisões chegam à experiência.',
      behanceAction: 'Behance completo',
      viewCase: 'Conhecer case',
      openExternal: 'Ver online',
      cases: [
        {
          title: 'Live Well Membership',
          category: 'UI Case / Membership',
          year: '2025',
          description:
            'Redesign de uma experiência de membership, trabalhando clareza de oferta, percepção de valor e tomada de decisão em uma jornada de férias.',
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
            'Case de plataforma jurídica com foco em mapear tarefas complexas, organizar fluxos operacionais e tornar a rotina de gestão mais legível.',
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
            'Interface de gestão orientada por leitura de métricas, acompanhamento de performance e organização visual para decisões mais escaneáveis.',
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
            'Experiência educacional centrada no aluno, conectando jornada, motivação, clareza de conteúdo e validação de hipóteses de aprendizado.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a9cc7a207985795.66e74c80f1c3d.png',
          pdfUrl: '/pdfs/me-ensina.pdf',
          link: 'https://www.behance.net/gallery/207985795/Me-ensina-Smart-learning-Case-Study',
          tags: ['EdTech', 'UX', 'Pesquisa'],
        },
      ],
    },
    github: {
      sectionLabel: '03 / projetos dev',
      title: 'Projetos fullstack e tecnologia aplicada',
      subtitle:
        'Projetos pinados carregados com dados públicos do GitHub e explicados pela arquitetura real. O foco é TI aplicada a produto: front-end, back-end, APIs, dados, automação, IA local e decisões técnicas.',
      loading: 'Sincronizando com GitHub',
      live: 'Dados ao vivo',
      fallback: 'Dados locais',
      error: 'GitHub limitou a API',
      updated: 'Atualizado',
      languageMix: 'Stack fullstack dos pinados',
      featuredRepos: 'Projetos dev pinados',
      newProject: 'Novo projeto',
      openRepo: 'Abrir repo',
      openDemo: 'Demo',
      emptyDescription: 'Sem descrição pública no GitHub.',
      profileAction: 'Perfil completo',
      publicRepos: 'repos públicos',
      followers: 'seguidores',
      following: 'seguindo',
      noBio: 'Bio pública indisponível no momento.',
      projectProfiles: {
        LimiarTarot: {
          summary: 'Portal completo para estudar 78 cartas e interpretar tiragens físicas, com conteúdo canônico, fallback determinístico e IA local opcional.',
          technologies: projectTechnologyStacks.LimiarTarot || [],
          layers: ['Next.js 16 + React 19 + TypeScript', 'Domínio validado com Zod e persistência local', 'Ollama local com gemma3:12b + fallback básico', 'Pipeline Python e testes Vitest + Playwright'],
        },
        Projeto_Viagem: {
          summary: 'Aplicativo mobile-first de roteiro de viagem com agenda diária, previsão do tempo e atalhos de mobilidade.',
          technologies: projectTechnologyStacks.Projeto_Viagem || [],
          layers: ['React 19 + Vite 7', 'Componentes de roteiro e clima', 'Links para Maps, Waze e Uber', 'Layout responsivo com CSS autoral'],
        },
        'UX-Analysis-pipeline': {
          summary: 'Pipeline de pesquisa UX com interface analítica, API Python e IA local para leitura de entrevistas.',
          technologies: projectTechnologyStacks['UX-Analysis-pipeline'] || [],
          layers: ['React + Vite + Recharts + Lucide', 'HTTP/REST', 'FastAPI + Pandas + Pydantic', 'Ollama local - qwen3:4b'],
        },
        Skyrim_Copilot: {
          summary: 'Copilot de gameplay com interface React/Vite, API FastAPI e integração local com IA.',
          technologies: projectTechnologyStacks.Skyrim_Copilot || [],
          layers: ['Interface React/Vite', 'Backend/API FastAPI', 'Infra Dify/docker', 'Ollama no Windows host'],
        },
        Projeto_GLojas: {
          summary: 'Backend escalável com NestJS, TypeScript, PostgreSQL e documentação automática de API.',
          technologies: projectTechnologyStacks.Projeto_GLojas || [],
          layers: ['NestJS + TypeScript', 'TypeORM + PostgreSQL', 'Docker', 'class-validator + Swagger'],
        },
        UCtorrent: {
          summary: 'Aplicativo desktop Python com interface PySide6, API local e persistência SQLite.',
          technologies: projectTechnologyStacks.UCtorrent || [],
          layers: ['Python 3.11+', 'Binding libtorrent', 'Interface PySide6', 'FastAPI + Uvicorn', 'SQLite'],
        },
        Api_Gerenciamento_De_Produtos: {
          summary: 'API CRUD para gerenciamento de produtos, útil para contratos de backend e prática TypeScript.',
          technologies: projectTechnologyStacks.Api_Gerenciamento_De_Produtos || [],
          layers: ['Backend TypeScript', 'Endpoints REST', 'CRUD de produtos'],
        },
        Portfolio: {
          summary: 'Portfólio pessoal em React com Vite, TypeScript, Tailwind e consumo de dados públicos do GitHub.',
          technologies: projectTechnologyStacks.Portfolio || [],
          layers: ['React + Vite', 'TypeScript', 'UI com Tailwind', 'API pública do GitHub'],
        },
      },
    },
    experience: {
      title: 'Trajetória profissional',
      subtitle: 'Minha trajetória combina produto, desenvolvimento fullstack, UX/UI, pesquisa e colaboração com stakeholders técnicos e de negócio.',
      jobs: [
        /* Experiência temporariamente oculta do portfólio.
        {
          period: 'Jan 2026 - Presente',
          role: 'Software Engineer',
          company: 'Avanade',
          description:
            'Engenharia de software com foco em Python, desenvolvimento de automações, APIs e soluções orientadas a dados, conectando requisitos de produto a implementações robustas e sustentáveis.',
        },
        */
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
      subtitle: 'Busco oportunidades em Produto, Tecnologia/Fullstack ou UX/UI em que visão técnica, pesquisa e design ajudem a tomar decisões melhores e entregar com mais qualidade.',
      formTitle: 'Mensagem rápida',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      sendEmail: 'Enviar por email',
      sendWhatsapp: 'Enviar por WhatsApp',
      placeholders: {
        name: 'Seu nome',
        email: 'seu@email.com',
        message: 'Conte sobre a vaga, produto ou desafio técnico.',
      },
      whatsappTemplate: 'Olá! Meu nome é {{name}}.\n\nEmail: {{email}}\n\nMensagem:\n{{message}}',
      emailSubject: 'Contato do Portfolio - {{name}}',
    },
    pdfViewer: {
      mobileTitle: 'Visualização mobile',
      errorTitle: 'Não foi possível carregar o PDF',
      mobileDescription: 'Para uma leitura melhor, abra o arquivo em nova aba ou baixe o PDF.',
      errorDescription: 'O visualizador não conseguiu carregar este arquivo. Use uma das opções abaixo.',
      openAction: 'Abrir em nova aba',
      downloadAction: 'Baixar PDF',
      closeAction: 'Fechar',
      loading: 'Carregando PDF...',
      fallbackAction: 'Abrir opções de PDF',
      openTitle: 'Abrir PDF em nova aba',
      downloadTitle: 'Baixar PDF',
    },
    footer: 'Lucas Uchôa - Produto, tecnologia fullstack e UX/UI aplicado a soluções digitais.',
  },
  en: {
    nav: {
      home: 'Home',
      github: 'Dev Projects',
      work: 'Product/UI',
      experience: 'Path',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Product Designer with fullstack background',
      title: 'Lucas Uchôa',
      headline: 'Between the right question and a working product.',
      subtitle:
        'I create digital solutions by connecting product, fullstack development and UX/UI. My edge is turning business problems into clear experiences that are technically viable and grounded in research, data and implementation.',
      status: 'Product, fullstack, UX/UI and research',
      location: 'Brazil',
      primaryAction: 'See fullstack projects',
      secondaryAction: 'Explore product cases',
      cvAction: 'Download CV',
      codeLabel: 'product-fullstack-profile.ts',
      code: [
        'const lucas = {',
        "  role: 'Product Designer + Fullstack background',",
        "  priority: ['product', 'technology', 'ux-ui'],",
        "  stack: ['React', 'TypeScript', 'Python', 'APIs'],",
        "  edge: 'product with technical depth',",
        "  goal: 'useful, viable and scalable solutions'",
        '};',
      ],
      mobileCode: "Product + Fullstack + UX/UI | React + TS + Python",
      metrics: [
        { value: '6+', label: 'years in UX/UI' },
        { value: '2020', label: 'full stack base' },
        { value: 'PT/EN', label: 'communication' },
      ],
      process: ['Observe', 'Structure', 'Build'],
    },
    bridge: {
      title: 'Product first, strong technology and UX/UI to turn intent into delivery.',
      text:
        'I am Lucas Uchôa, a Product Designer with a fullstack background and experience creating digital products end to end. My work starts with the product problem, gains technical depth and becomes clear, usable and buildable interfaces.',
      cards: [
        {
          title: 'Product and decision',
          text: 'Discovery, journeys, prioritization, metrics and context reading to turn problems into product decisions.',
        },
        {
          title: 'Technology and fullstack',
          text: 'React, TypeScript, Python, APIs, databases and automation to connect strategy, prototype and real implementation.',
        },
        {
          title: 'UX/UI and design system',
          text: 'User research, information architecture, accessibility, components and handoff to shape the solution clearly.',
        },
      ],
    },
    stack: {
      title: 'Product, technology and design',
      subtitle: 'The order is intentional: think product, support it with technology and turn it into a clear interface. UX/UI remains strong, while technical fluency gets more prominence.',
      clusters: [
        {
          title: 'Product & Strategy',
          items: ['Discovery', 'Product Thinking', 'User Journey', 'Prioritization', 'Metrics', 'NPS', 'CES'],
        },
        {
          title: 'Technology & Fullstack',
          items: ['React', 'JavaScript', 'TypeScript', 'Python', 'REST APIs', 'FastAPI', 'NestJS', 'SQL', 'Docker'],
        },
        {
          title: 'Research & Validation',
          items: ['Interviews', 'Usability Testing', 'Heuristic Evaluation', 'Benchmarking', 'Data Analysis'],
        },
        {
          title: 'UI & Design System',
          items: ['Figma', 'Prototyping', 'Design System', 'Accessibility', 'WCAG', 'Componentization', 'Tailwind'],
        },
      ],
    },
    work: {
      title: 'Product, UX and UI cases',
      subtitle:
        'Proof of process and design: problem, journey, hypothesis and interface. The technical side is stronger in GitHub; here, the cases show how decisions become experience.',
      behanceAction: 'Full Behance',
      viewCase: 'Explore case',
      openExternal: 'View online',
      cases: [
        {
          title: 'Live Well Membership',
          category: 'UI Case / Membership',
          year: '2025',
          description: 'Membership experience redesign focused on offer clarity, value perception and decision-making in a vacation journey.',
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
            'Legal platform case focused on mapping complex tasks, organizing operational flows and making management routines easier to read.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/303e7b227022677.683864d03e96b.png',
          pdfUrl: '/pdfs/juritask.pdf',
          link: 'https://www.behance.net/gallery/227022677/Juritask-Legal-Management-(Case-Challenge)',
          tags: ['UX', 'SaaS', 'Workflow'],
        },
        {
          title: 'Tracksales',
          category: 'Management platform',
          year: '2025',
          description: 'Management interface guided by metric reading, performance tracking and visual organization for more scannable decisions.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/9f2250225905089.682522cfea537.png',
          pdfUrl: '/pdfs/tracksales.pdf',
          link: 'https://www.behance.net/gallery/225905089/Tracksales-Management-Platform-UI',
          tags: ['Dashboard', 'Mobile', 'Data'],
        },
        {
          title: 'Me-ensina',
          category: 'Smart learning',
          year: '2024',
          description: 'Education experience centered on students, connecting journey, motivation, content clarity and learning hypothesis validation.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a9cc7a207985795.66e74c80f1c3d.png',
          pdfUrl: '/pdfs/me-ensina.pdf',
          link: 'https://www.behance.net/gallery/207985795/Me-ensina-Smart-learning-Case-Study',
          tags: ['EdTech', 'UX', 'Research'],
        },
      ],
    },
    github: {
      sectionLabel: '03 / dev projects',
      title: 'Fullstack projects and applied technology',
      subtitle:
        'Pinned projects loaded from public GitHub data and explained through their real architecture. The focus is IT applied to product: front-end, back-end, APIs, data, automation, local AI and technical decisions.',
      loading: 'Syncing with GitHub',
      live: 'Live data',
      fallback: 'Local data',
      error: 'GitHub API limited',
      updated: 'Updated',
      languageMix: 'Pinned fullstack stack',
      featuredRepos: 'Pinned dev projects',
      newProject: 'New project',
      openRepo: 'Open repo',
      openDemo: 'Demo',
      emptyDescription: 'No public description on GitHub.',
      profileAction: 'Full profile',
      publicRepos: 'public repos',
      followers: 'followers',
      following: 'following',
      noBio: 'Public bio unavailable right now.',
      projectProfiles: {
        LimiarTarot: {
          summary: 'A complete portal for studying 78 cards and interpreting physical spreads, with canonical content, deterministic fallback and optional local AI.',
          technologies: projectTechnologyStacks.LimiarTarot || [],
          layers: ['Next.js 16 + React 19 + TypeScript', 'Zod-validated domain and local persistence', 'Local Ollama with gemma3:12b + basic fallback', 'Python pipeline and Vitest + Playwright tests'],
        },
        Projeto_Viagem: {
          summary: 'A mobile-first travel itinerary app with daily planning, weather forecasts and mobility shortcuts.',
          technologies: projectTechnologyStacks.Projeto_Viagem || [],
          layers: ['React 19 + Vite 7', 'Itinerary and weather components', 'Maps, Waze and Uber shortcuts', 'Responsive layout with custom CSS'],
        },
        'UX-Analysis-pipeline': {
          summary: 'UX research pipeline with an analytics interface, Python API and local AI for reading interview data.',
          technologies: projectTechnologyStacks['UX-Analysis-pipeline'] || [],
          layers: ['React + Vite + Recharts + Lucide', 'HTTP/REST', 'FastAPI + Pandas + Pydantic', 'Local Ollama - qwen3:4b'],
        },
        Skyrim_Copilot: {
          summary: 'Gameplay copilot with a React/Vite interface, FastAPI backend and local AI integration.',
          technologies: projectTechnologyStacks.Skyrim_Copilot || [],
          layers: ['React/Vite interface', 'FastAPI backend/API', 'Dify infra/docker', 'Ollama on Windows host'],
        },
        Projeto_GLojas: {
          summary: 'Scalable backend with NestJS, TypeScript, PostgreSQL and automatic API documentation.',
          technologies: projectTechnologyStacks.Projeto_GLojas || [],
          layers: ['NestJS + TypeScript', 'TypeORM + PostgreSQL', 'Docker', 'class-validator + Swagger'],
        },
        UCtorrent: {
          summary: 'Python desktop app with a PySide6 interface, local API and SQLite persistence.',
          technologies: projectTechnologyStacks.UCtorrent || [],
          layers: ['Python 3.11+', 'libtorrent binding', 'PySide6 UI', 'FastAPI + Uvicorn', 'SQLite'],
        },
        Api_Gerenciamento_De_Produtos: {
          summary: 'CRUD API for product management, useful for backend contracts and TypeScript practice.',
          technologies: projectTechnologyStacks.Api_Gerenciamento_De_Produtos || [],
          layers: ['TypeScript backend', 'REST endpoints', 'Product CRUD'],
        },
        Portfolio: {
          summary: 'Personal portfolio built with React, Vite, TypeScript, Tailwind and public GitHub data.',
          technologies: projectTechnologyStacks.Portfolio || [],
          layers: ['React + Vite', 'TypeScript', 'Tailwind UI', 'GitHub public API'],
        },
      },
    },
    experience: {
      title: 'Professional path',
      subtitle: 'My path combines product, fullstack development, UX/UI, research and collaboration with technical and business stakeholders.',
      jobs: [
        /* Experience temporarily hidden from the portfolio.
        {
          period: 'Jan 2026 - Present',
          role: 'Software Engineer',
          company: 'Avanade',
          description:
            'Software engineering focused on Python, building automations, APIs and data-driven solutions while translating product requirements into robust, maintainable implementations.',
        },
        */
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
      title: "Let's talk",
      subtitle: 'I am looking for Product, Technology/Fullstack or UX/UI roles where technical vision, research and design can improve decisions and delivery quality.',
      formTitle: 'Quick message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      sendEmail: 'Send by email',
      sendWhatsapp: 'Send by WhatsApp',
      placeholders: {
        name: 'Your name',
        email: 'you@email.com',
        message: 'Tell me about the role, product or technical challenge.',
      },
      whatsappTemplate: 'Hi! My name is {{name}}.\n\nEmail: {{email}}\n\nMessage:\n{{message}}',
      emailSubject: 'Portfolio contact - {{name}}',
    },
    pdfViewer: {
      mobileTitle: 'Mobile preview',
      errorTitle: 'Could not load the PDF',
      mobileDescription: 'For a better reading experience, open the file in a new tab or download the PDF.',
      errorDescription: 'The viewer could not load this file. Use one of the options below.',
      openAction: 'Open in new tab',
      downloadAction: 'Download PDF',
      closeAction: 'Close',
      loading: 'Loading PDF...',
      fallbackAction: 'Open PDF options',
      openTitle: 'Open PDF in new tab',
      downloadTitle: 'Download PDF',
    },
    footer: 'Lucas Uchôa - Product, fullstack technology and UX/UI applied to digital solutions.',
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export type PortfolioCopy = typeof copy[Locale];
