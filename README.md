Documentação do Projeto de Portfólio

Introdução

Este documento fornece uma visão geral abrangente do projeto de portfólio, detalhando sua estrutura, as tecnologias utilizadas e as instruções para configuração e execução. O objetivo é servir como um guia para desenvolvedores que desejam entender, modificar ou contribuir para o projeto.

Visão Geral do Projeto

O projeto de portfólio é uma aplicação web moderna desenvolvida para exibir os trabalhos e habilidades de um desenvolvedor. Ele apresenta uma interface de usuário interativa e responsiva, com suporte a múltiplos idiomas e a capacidade de visualizar documentos PDF diretamente no navegador. O portfólio é projetado para ser facilmente personalizável e extensível.

Tecnologias Utilizadas

O projeto de portfólio é construído com as seguintes tecnologias principais:

•
React: Uma biblioteca JavaScript para construir interfaces de usuário interativas.

•
TypeScript: Um superconjunto tipado de JavaScript que melhora a robustez e a manutenibilidade do código.

•
Vite: Um bundler de próxima geração que oferece uma experiência de desenvolvimento rápida e otimizada.

•
Tailwind CSS: Um framework CSS utilitário que permite a criação rápida de designs personalizados.

•
i18next: Uma estrutura de internacionalização para aplicações JavaScript, permitindo suporte a múltiplos idiomas.

•
react-pdf: Uma biblioteca para exibir documentos PDF em aplicações React.

•
Framer Motion: Uma biblioteca para animações de interface de usuário no React.

Além dessas, o projeto utiliza várias outras bibliotecas e ferramentas para desenvolvimento, linting e construção, conforme detalhado no arquivo package.json.

Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

Plain Text


Portfolio/
├── public/
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json
│   │   └── pt/
│   │       └── translation.json
│   └── pdfs/
│       ├── benchmark.pdf
│       ├── juritask.pdf
│       ├── me-ensina.pdf
│       └── tracksales.pdf
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── aurora-background.tsx
│   │   │   ├── behance-icon.tsx
│   │   │   ├── language-switcher.tsx
│   │   │   ├── moving-border.tsx
│   │   │   ├── pdf-viewer.tsx
│   │   │   ├── simple-pdf-viewer.tsx
│   │   │   └── text-shimmer.tsx
│   │   │   └── whatsapp-icon.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── i18n.ts
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── ... (outros arquivos de configuração)


•
public/: Contém arquivos estáticos, como arquivos de localização (locales/) para internacionalização e documentos PDF (pdfs/) que são exibidos no portfólio.

•
src/: Contém o código-fonte principal da aplicação React.

•
components/: Componentes React reutilizáveis, incluindo componentes de UI genéricos (ui/).

•
lib/: Utilitários e funções auxiliares.

•
App.tsx: O componente raiz da aplicação.

•
i18n.ts: Configuração para internacionalização (i18n).

•
index.css: Estilos globais da aplicação.

•
main.tsx: Ponto de entrada da aplicação React.



•
package.json: Define as dependências do projeto e os scripts de construção.

•
README.md: O arquivo README original do projeto.

•
tailwind.config.js: Configuração do Tailwind CSS.

•
vite.config.ts: Configuração do Vite.

Configuração e Execução

Para configurar e executar o projeto localmente, siga os passos abaixo:

Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior) e o npm (ou yarn) instalados em sua máquina.

Instalação

1.
Clone o repositório:

2.
Instale as dependências:

Execução

Para iniciar o servidor de desenvolvimento:

Bash


npm run dev
# ou
yarn dev


O aplicativo estará disponível em http://localhost:5173 (ou outra porta disponível).

Construção para Produção

Para construir o projeto para produção:

Bash


npm run build
# ou
yarn build


Os arquivos de produção serão gerados na pasta dist/.

Conclusão

Este documento detalhou a estrutura, tecnologias e procedimentos para a configuração e execução do projeto de portfólio. Com estas informações, os desenvolvedores podem facilmente entender e trabalhar com o código-fonte, personalizando-o para suas próprias necessidades ou contribuindo para o seu desenvolvimento.

