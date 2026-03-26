/**
 * src/lib/wordpress.ts
 * Integração com WordPress REST API (Headless CMS)
 */

const API_URL =
  process.env.WORDPRESS_API_URL || "http://localhost/wp-json/wp/v2";

// ─────────────────────────────────────────────
// Tipos da API do WordPress
// ─────────────────────────────────────────────
export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media: number;
  status: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: { width: number; height: number };
    }>;
    "wp:term"?: Array<Array<{ slug: string; name: string }>>;
  };
  acf?: {
    read_time?: number;
    category_label?: string;
    category_slug?: string;
    excerpt?: string;
    tags?: string;
    featured?: boolean;
  };
}

export interface NormalizedArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryLabel: string;
  date: string;
  dateISO: string;
  readTime: number;
  image: string;
  imageAlt: string;
  tags: string[];
  featured: boolean;
}

// ─────────────────────────────────────────────
// Limpa HTML e entidades do WordPress
// ─────────────────────────────────────────────
function decodeWPString(str: string): string {
  return str
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "\u201c")
    .replace(/&#8221;/g, "\u201d")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim();
}

// ─────────────────────────────────────────────
// Imagem de fallback caso o artigo não tenha
// ─────────────────────────────────────────────
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80";

// ─────────────────────────────────────────────
// Converte WPPost → NormalizedArticle
// ─────────────────────────────────────────────
export function wpPostToArticle(post: WPPost): NormalizedArticle {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const image = featuredMedia?.source_url || FALLBACK_IMAGE;
  const imageAlt =
    featuredMedia?.alt_text || decodeWPString(post.title.rendered);

  const dateObj = new Date(post.date);
  const dateFormatted = dateObj.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Excerpt: campo ACF tem prioridade, senão usa o excerpt nativo do WP
  const rawExcerpt =
    post.acf?.excerpt ||
    stripHtml(post.excerpt.rendered).replace(/\[&hellip;\]/g, "").trim();

  // Tags: campo ACF separado por vírgula
  const tags = post.acf?.tags
    ? post.acf.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  return {
    id: post.id,
    slug: post.slug,
    title: decodeWPString(post.title.rendered),
    excerpt: rawExcerpt.slice(0, 300),
    content: post.content.rendered,
    category: post.acf?.category_slug || "geral",
    categoryLabel: post.acf?.category_label || "Geral",
    date: dateFormatted,
    dateISO: post.date,
    readTime: post.acf?.read_time ?? 5,
    image,
    imageAlt,
    tags,
    featured: post.acf?.featured ?? false,
  };
}

// ─────────────────────────────────────────────
// Fetch utilitário com tratamento de erro
// ─────────────────────────────────────────────
async function wpFetch<T>(
  endpoint: string,
  revalidate = 60
): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      next: { revalidate },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      console.error(`[WordPress] Erro ${res.status} em: ${endpoint}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error(`[WordPress] Falha de rede em: ${endpoint}`, err);
    return null;
  }
}

// ─────────────────────────────────────────────
// Buscar TODOS os artigos publicados
// ─────────────────────────────────────────────
export async function getAllArticles(): Promise<NormalizedArticle[]> {
  const posts = await wpFetch<WPPost[]>(
    "/posts?_embed&per_page=100&status=publish&orderby=date&order=desc",
    60
  );

  if (!posts || !Array.isArray(posts)) return getFallbackArticles();

  return posts.map(wpPostToArticle);
}

// ─────────────────────────────────────────────
// Buscar artigo por slug
// ─────────────────────────────────────────────
export async function getArticleBySlug(
  slug: string
): Promise<NormalizedArticle | null> {
  const posts = await wpFetch<WPPost[]>(
    `/posts?slug=${encodeURIComponent(slug)}&_embed&status=publish`,
    60
  );

  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    // Tenta no fallback (artigos locais)
    const { ARTICLES } = await import("@/data/articles");
    return ARTICLES.find((a) => a.slug === slug) ?? null;
  }

  return wpPostToArticle(posts[0]);
}

// ─────────────────────────────────────────────
// Buscar slugs para generateStaticParams
// ─────────────────────────────────────────────
export async function getAllSlugs(): Promise<string[]> {
  const posts = await wpFetch<Array<{ slug: string }>>(
    "/posts?per_page=100&status=publish&_fields=slug",
    3600
  );

  if (!posts || !Array.isArray(posts)) {
    // Retorna slugs dos artigos locais como fallback
    const { ARTICLES } = await import("@/data/articles");
    return ARTICLES.map((a) => a.slug);
  }

  return posts.map((p) => p.slug);
}

// ─────────────────────────────────────────────
// Buscar artigos em destaque (para carrossel)
// ─────────────────────────────────────────────
export async function getFeaturedArticles(): Promise<NormalizedArticle[]> {
  const all = await getAllArticles();
  const featured = all.filter((a) => a.featured);
  // Garante pelo menos 2 artigos no carrossel
  return featured.length >= 2 ? featured.slice(0, 3) : all.slice(0, 2);
}

// ─────────────────────────────────────────────
// Buscar os N artigos mais recentes
// ─────────────────────────────────────────────
export async function getLatestArticles(
  count = 3
): Promise<NormalizedArticle[]> {
  const posts = await wpFetch<WPPost[]>(
    `/posts?_embed&per_page=${count}&status=publish&orderby=date&order=desc`,
    60
  );

  if (!posts || !Array.isArray(posts)) {
    const { LATEST_ARTICLES } = await import("@/data/articles");
    return LATEST_ARTICLES.slice(0, count);
  }

  return posts.map(wpPostToArticle);
}

// ─────────────────────────────────────────────
// FALLBACK: usa artigos locais se WP estiver offline
// ─────────────────────────────────────────────
async function getFallbackArticles(): Promise<NormalizedArticle[]> {
  const { ARTICLES } = await import("@/data/articles");
  return ARTICLES;
}

// ─────────────────────────────────────────────
// Calcula contagem de categorias dinamicamente
// ─────────────────────────────────────────────
export function buildDynamicCategories(articles: NormalizedArticle[]) {
  const catMap = new Map<string, { label: string; count: number }>();

  for (const a of articles) {
    if (!catMap.has(a.category)) {
      catMap.set(a.category, { label: a.categoryLabel, count: 0 });
    }
    catMap.get(a.category)!.count++;
  }

  const dynamic = Array.from(catMap.entries()).map(([id, v]) => ({
    id,
    label: v.label,
    count: v.count,
  }));

  return [{ id: "all", label: "Todos os artigos", count: articles.length }, ...dynamic];
}
