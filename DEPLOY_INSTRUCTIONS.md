# 🚀 Instruções de Deploy - Portfolio Lucas Uchôa

## 📋 Problema Atual
O domínio `www.uxuchoaportfolio.online` está com erro DNS e não está acessível.

## ✅ Soluções de Hospedagem (Gratuitas)

### **Opção 1: Vercel (Recomendada)**
1. Acesse: https://vercel.com
2. Conecte sua conta GitHub
3. Faça upload da pasta `dist` ou conecte este repositório
4. Após o deploy, você receberá uma URL como: `https://portfolio-lucas.vercel.app`

### **Opção 2: Netlify**
1. Acesse: https://netlify.com
2. Arraste a pasta `dist` para o deploy
3. URL será algo como: `https://portfolio-lucas.netlify.app`

### **Opção 3: GitHub Pages**
1. Suba o código para um repositório GitHub
2. Vá em Settings > Pages
3. Configure para usar a pasta `dist`
4. URL será: `https://seu-usuario.github.io/nome-do-repo`

## 🔧 Após o Deploy

### **1. Atualize as Meta Tags**
No arquivo `index.html`, substitua `YOUR_DOMAIN_HERE` pela URL real:

```html
<!-- Antes -->
<meta property="og:url" content="https://YOUR_DOMAIN_HERE/" />
<meta property="og:image" content="https://YOUR_DOMAIN_HERE/images/image.png" />

<!-- Depois (exemplo com Vercel) -->
<meta property="og:url" content="https://portfolio-lucas.vercel.app/" />
<meta property="og:image" content="https://portfolio-lucas.vercel.app/images/image.png" />
```

### **2. Teste as Meta Tags**
Use estas ferramentas para verificar se o preview está funcionando:

- **Facebook**: https://developers.facebook.com/tools/debug/
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **Twitter**: https://cards-dev.twitter.com/validator
- **OpenGraph**: https://www.opengraph.xyz/

### **3. Comandos para Deploy Local**

```bash
# Build do projeto
npm run build

# Preview local (opcional)
npm run preview

# Upload da pasta dist para sua hospedagem escolhida
```

## 📁 Estrutura Necessária no Servidor

Certifique-se de que estes arquivos estejam no servidor:

```
/
├── index.html (com meta tags atualizadas)
├── favicon.svg
├── images/
│   ├── image.png ← IMAGEM DE PREVIEW
│   └── live-well-thumbnail.png
├── pdfs/
├── locales/
└── assets/
```

## ✨ Resultado Esperado

Após seguir estas instruções:
- ✅ Site acessível na nova URL
- ✅ Imagem de preview funcionando
- ✅ Meta tags Open Graph funcionais
- ✅ Compartilhamento em redes sociais com preview

## 🆘 Precisa de Ajuda?

Se ainda tiver problemas:
1. Verifique se a URL da imagem está acessível diretamente
2. Use os debuggers das redes sociais para identificar erros
3. Aguarde até 24h para cache das redes sociais atualizar 