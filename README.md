# Documentação do Projeto de Portfólio

## Introdução

Este documento fornece uma visão geral abrangente do projeto de portfólio, detalhando sua estrutura, as tecnologias utilizadas e as instruções para configuração e execução. O objetivo é servir como um guia para desenvolvedores que desejam entender, modificar ou contribuir para o projeto.

## Visão Geral do Projeto

O projeto de portfólio é uma aplicação web moderna desenvolvida para exibir os trabalhos e habilidades de um desenvolvedor. Ele apresenta uma interface de usuário interativa e responsiva, com suporte a múltiplos idiomas e a capacidade de visualizar documentos PDF diretamente no navegador. O portfólio é projetado para ser facilmente personalizável e extensível.

## Funcionalidades Principais

### Sistema de Skeleton Loading
O portfólio implementa um sistema avançado de skeleton loading similar ao YouTube, proporcionando uma experiência de carregamento suave com efeitos shimmer durante o carregamento das seções.

### Visualizador de PDF Integrado
O portfólio inclui um visualizador de PDF robusto que permite visualizar case studies diretamente no site, com funcionalidades como:
- Visualização em modal fullscreen
- Detecção automática de dispositivos móveis
- Fallback para dispositivos que não suportam visualização inline
- Botões de download e abertura em nova aba
- Interface responsiva com tema claro/escuro

### Sistema de Internacionalização (i18n)
Suporte completo para múltiplos idiomas (Português e Inglês) com:
- Detecção automática do idioma do navegador
- Switcher de idioma na interface
- Traduções completas de todos os textos

### 🆕 Seção "Novo Projeto" - Live Well Membership
Uma seção especial dedicada ao case study mais recente, localizada entre "Sobre" e "Portfólio":

#### Características da Seção:
- **Layout diferenciado**: Seção full-width com grid de 2 colunas
- **Background gradiente**: Azul claro para escuro com tema adaptável
- **Badge animado**: "Novo Projeto" com ponto pulsante
- **Imagem destacada**: Lado esquerdo com overlay e badge "Redesign Case"
- **Informações detalhadas**: Grade com 4 campos informativos
- **Botões de ação**: CTA principal para visualizar + botão de download
- **Animações**: FadeIn sequencial para entrada suave

#### Conteúdo Traduzido:
- **Português**: Foco em "experiência premium na costa da Flórida"
- **Inglês**: "Premium experience on Florida's coast"
- **Descrição completa**: Plataforma de membership exclusiva para a região costeira 30A da Flórida
- **Detalhes técnicos**: Foco em UX/UI, setor turismo & hospitalidade, tipo membership platform

#### Funcionalidades Especiais:
- **Visualizador PDF integrado**: Botão principal abre o case study
- **Download direto**: Botão secundário para download do PDF
- **Responsivo**: Adaptado para desktop, tablet e mobile
- **Tema escuro**: Totalmente compatível com modo escuro

### Portfólio de Projetos
#### Case Studies Disponíveis:
1. **🆕 Live Well Membership - UI Case** (2025) - **SEÇÃO ESPECIAL**
   - Categoria: Design de Interface 
   - Case study completo de redesign de plataforma de membership exclusiva para experiências na costa da Flórida (30A)
   - **Setor**: Turismo & Hospitalidade
   - **Foco**: Acesso privilegiado e benefícios únicos para membros
   - **Localização**: Seção dedicada entre "Sobre" e "Portfólio"
   - **Destaque**: Layout especial com animações e informações detalhadas

2. **Juritask - Gestão Jurídica** (2025)
   - Categoria: Desafio de Caso
   - Plataforma de gestão jurídica focada em processos legais

3. **Tracksales - Plataforma de Gestão** (2025)
   - Categoria: UI de App Móvel
   - Plataforma de gestão de vendas com interface móvel

4. **Me-ensina Smart Learning** (2024)
   - Categoria: Estudo de Caso
   - Plataforma educacional com tecnologia inteligente

5. **Benchmarking de Ferramentas de Fluxograma** (2024)
   - Categoria: Pesquisa UX
   - Análise comparativa de ferramentas de fluxograma

### Características Especiais do Live Well Membership
- **Badge "NOVO"**: Destaque visual para identificar o projeto mais recente
- **Imagem temática**: Imagem personalizada relacionada a saúde e bem-estar
- **Sem link externo**: Foco total no PDF case study completo
- **Visualizador otimizado**: Experiência de leitura aprimorada para o case study

### Animações e Transições
- Loading states com skeleton components
- Fade-in animations para seções
- Hover effects nos cards de projetos
- Transições suaves entre temas claro/escuro

### Responsividade
- Design adaptado para desktop, tablet e mobile
- Componentes otimizados para diferentes tamanhos de tela
- Touch-friendly interfaces para dispositivos móveis

## Tecnologias Utilizadas

O projeto de portfólio é construído com as seguintes tecnologias principais:

*   **React**: Uma biblioteca JavaScript para construir interfaces de usuário interativas.
*   **TypeScript**: Um superconjunto tipado de JavaScript que melhora a robustez e a manutenibilidade do código.
*   **Vite**: Um bundler de próxima geração que oferece uma experiência de desenvolvimento rápida e otimizada.
*   **Tailwind CSS**: Um framework CSS utilitário que permite a criação rápida de designs personalizados.
*   **i18next**: Uma estrutura de internacionalização para aplicações JavaScript, permitindo suporte a múltiplos idiomas.
*   **react-pdf**: Uma biblioteca para exibir documentos PDF em aplicações React.
*   **Framer Motion**: Uma biblioteca para animações de interface de usuário no React.

Além dessas, o projeto utiliza várias outras bibliotecas e ferramentas para desenvolvimento, linting e construção, conforme detalhado no arquivo `package.json`.

## Como Rodar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:

- **Node.js** (versão 18 ou superior)
  - Baixe em: https://nodejs.org/
  - Verifique a instalação: `node --version`
- **npm** (geralmente vem com o Node.js)
  - Verifique a instalação: `npm --version`

### Instalação

1. **Clone o repositório** (se ainda não fez):
   ```bash
   git clone <url-do-repositorio>
   cd Portfolio
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

### Executando o Projeto

#### Modo de Desenvolvimento
Para rodar o projeto em modo de desenvolvimento com hot-reload:

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado e você verá uma mensagem similar a:
```
  VITE v5.4.2  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Acesse `http://localhost:5173/` no seu navegador para ver o projeto.

#### Outros Comandos Disponíveis

- **Build para produção**:
  ```bash
  npm run build
  ```

- **Preview da build de produção**:
  ```bash
  npm run preview
  ```

- **Linting do código**:
  ```bash
  npm run lint
  ```

### Solução de Problemas Comuns

#### Erro de Porta em Uso
Se a porta 5173 estiver ocupada, o Vite tentará automaticamente a próxima porta disponível. Você verá a nova porta na mensagem de inicialização.

#### Problemas com Dependências
Se encontrar problemas com dependências:

```bash
# Limpar cache do npm
npm cache clean --force

# Remover node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
```

#### Problemas com TypeScript
Se houver erros de TypeScript:

```bash
# Verificar tipos
npx tsc --noEmit

# Reinstalar tipos se necessário
npm install @types/react @types/react-dom
```

### Configuração Adicional

#### Variáveis de Ambiente
O projeto pode ser configurado com variáveis de ambiente criando um arquivo `.env` na raiz:

```env
VITE_APP_TITLE=Meu Portfólio
VITE_APP_DESCRIPTION=Portfólio pessoal de desenvolvimento
```

#### Configuração do Vite
O arquivo `vite.config.ts` contém as configurações do bundler. Principais configurações:

- **Porta**: Configurada para 5173 por padrão
- **Host**: Configurado para aceitar conexões externas
- **Plugins**: React e outras otimizações

### Desenvolvimento e Contribuição

#### Workflow de Desenvolvimento
1. **Crie uma branch** para suas mudanças:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

2. **Faça suas alterações** e teste localmente:
   ```bash
   npm run dev
   npm run lint
   ```

3. **Commit suas mudanças**:
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   ```

4. **Push e crie um Pull Request**

#### Padrões de Código
- Use **TypeScript** para todos os novos arquivos
- Siga as **convenções do ESLint** configuradas
- Use **Tailwind CSS** para estilização
- Mantenha componentes **reutilizáveis** e **modulares**

#### Estrutura de Componentes
- Componentes UI genéricos em `src/components/ui/`
- Componentes específicos da aplicação em `src/components/`
- Hooks customizados em `src/hooks/`
- Utilitários em `src/lib/`

### Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

```
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
```

*   **`public/`**: Contém arquivos estáticos, como arquivos de localização (`locales/`) para internacionalização e documentos PDF (`pdfs/`) que são exibidos no portfólio.
*   **`src/`**: Contém o código-fonte principal da aplicação React.
    *   **`components/`**: Componentes React reutilizáveis, incluindo componentes de UI genéricos (`ui/`