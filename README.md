# Dr. Rafael Mendes — Psicólogo Clínico

Landing page + blog completo em **Next.js 14**, **TypeScript**, **Tailwind CSS**.

## 🚀 Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Lucide React** (ícones)

---

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Root layout + fonts + metadata
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Estilos globais
│   └── blog/
│       ├── page.tsx        # Listagem do blog
│       └── [slug]/
│           └── page.tsx    # Artigo individual
├── components/
│   ├── ui/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ClientWidgets.tsx  # WhatsApp float, scroll progress, reveal
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Sections.tsx       # Especialidades, Sobre, Formacao, Depoimentos, CTA, Contato
│   │   ├── BlogPreview.tsx    # 3 últimos artigos (landing)
│   │   └── FAQ.tsx            # FAQ com JSON-LD schema
│   └── blog/
│       ├── FeaturedCarousel.tsx
│       ├── ArticlesGrid.tsx   # Filtro, busca, paginação (6/página)
│       ├── BlogSidebar.tsx    # Newsletter, categorias, redes sociais, share
│       └── ArticleShareButtons.tsx
├── data/
│   └── articles.ts        # Todos os artigos, categorias, FAQ
├── lib/
│   └── utils.ts           # Utilitários e constantes
└── types/
    └── index.ts           # Tipos TypeScript
```

---

## ⚙️ Instalação e execução

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build de produção
npm run build
npm start
```

---

## 📱 Responsividade

| Breakpoint | Largura |
|-----------|---------|
| Mobile    | < 640px |
| Tablet    | 640px – 1023px |
| Desktop   | ≥ 1024px |

---

## ✅ Funcionalidades

### Landing Page (`/`)
- Header fixo com scroll transparente → sólido
- Hero com imagem, stats e CTAs para WhatsApp
- Especialidades (6 cards)
- Sobre — split layout com imagem
- Formação — timeline + stats
- Depoimentos
- Blog Preview — **sempre 3 últimos artigos** publicados
- FAQ — acordeão com **JSON-LD Schema** (FAQPage)
- CTA Banner
- Contato

### Blog (`/blog`)
- Carrossel de 2 artigos em destaque (auto-play 5.5s)
- Busca em tempo real por título, excerpt e tags
- Filtro por categoria funcional (pills)
- Grid responsivo com imagens reais
- **Paginação numérica** (6 artigos por página)
- Sidebar: Newsletter, Categorias, Redes Sociais, Compartilhar
- Breadcrumb

### Artigo (`/blog/[slug]`)
- Hero com imagem em full-width
- **Sumário âncoras** automático dos H2s
- Conteúdo em prose estilizado
- Tags, compartilhamento (WA, Twitter, LinkedIn, copiar link)
- Card do autor com CTA
- Artigos relacionados (mesma categoria)
- **JSON-LD Schema** de Article (SEO)
- Sidebar

---

## 🔧 Personalização

### WhatsApp
Altere o número em `src/lib/utils.ts`:
```ts
export const WA_NUMBER = "5511999999999"; // ← seu número aqui
```

### Artigos
Adicione/edite artigos em `src/data/articles.ts`.

### Cores e fontes
Edite `tailwind.config.ts` e `src/app/globals.css`.

---

## 📦 Deploy (Vercel recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Ou conecte o repositório GitHub diretamente no [Vercel Dashboard](https://vercel.com).

---

## 📋 SEO

- Metadata dinâmica por página (`generateMetadata`)
- Open Graph configurado
- JSON-LD: **FAQPage** (landing) + **Article** (artigo individual)
- `generateStaticParams` para ISG nos artigos
- Imagens com `alt` descritivos
- Semântica HTML5 correta (`main`, `article`, `nav`, `aside`, `section`)
- ARIA labels em botões e formulários
