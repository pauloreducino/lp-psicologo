import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import {
  WhatsAppFloat,
  ScrollProgress,
  RevealObserver,
} from "@/components/ui/ClientWidgets";
import ArticleShareButtons from "@/components/blog/ArticleShareButtons";
import AnchorScroll from "@/components/blog/AnchorScroll";
import BlogSidebar from "@/components/blog/BlogSidebar";
import {
  getAllSlugs,
  getArticleBySlug,
  getAllArticles,
  buildDynamicCategories,
} from "@/lib/wordpress";
import { WA_URL } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

// Gera as páginas estáticas no build (ISR)
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Metadata dinâmica por artigo
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: "Artigo não encontrado" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        { url: article.image, width: 800, height: 600, alt: article.imageAlt },
      ],
      type: "article",
      publishedTime: article.dateISO,
      authors: ["Dr. Rafael Mendes"],
    },
  };
}

// Gera id a partir do texto — mesma lógica do AnchorScroll.tsx
function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractHeadings(html: string) {
  const matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
  return matches
    .map((m) => {
      const text = m[1].replace(/<[^>]+>/g, "").trim();
      const id = slugify(text);
      return id ? { id, text } : null;
    })
    .filter(Boolean) as { id: string; text: string }[];
}

export default async function ArticlePage({ params }: Props) {
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(params.slug),
    getAllArticles(),
  ]);

  if (!article) notFound();

  const related = allArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const headings = extractHeadings(article.content);
  const dynamicCategories = buildDynamicCategories(allArticles);

  // JSON-LD Schema para SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.dateISO,
    author: {
      "@type": "Person",
      name: "Dr. Rafael Mendes",
      jobTitle: "Psicólogo Clínico",
      url: "https://drrafaelmendes.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Rafael Mendes — Psicólogo Clínico",
      logo: {
        "@type": "ImageObject",
        url: "https://drrafaelmendes.com.br/logo.png",
      },
    },
    keywords: article.tags.join(", "),
    articleSection: article.categoryLabel,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ScrollProgress />
      <RevealObserver />
      <AnchorScroll />
      <WhatsAppFloat />
      <Header />

      <main id="main-content">
        {/* ── Hero com imagem ── */}
        <div
          className="relative overflow-hidden"
          style={{ minHeight: 420, paddingTop: "5rem" }}
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,58,38,.55) 0%, rgba(26,58,38,.88) 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8 flex flex-col justify-end"
            style={{ minHeight: 420 }}
          >
            <span
              className="inline-block rounded-md px-3 py-1 font-bold uppercase tracking-wider mb-4"
              style={{
                fontSize: ".7rem",
                background: "rgba(196,164,90,.9)",
                color: "#fff",
                width: "fit-content",
              }}
            >
              {article.categoryLabel}
            </span>
            <h1
              className="font-serif font-semibold text-white leading-[1.12] tracking-tight mb-4"
              style={{ fontSize: "clamp(1.75rem,4vw,2.8rem)" }}
            >
              {article.title}
            </h1>
            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontSize: ".78rem", color: "rgba(255,255,255,.7)" }}
            >
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Dr. Rafael Mendes
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <time dateTime={article.dateISO}>{article.date}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="12 6 12 12 16 14"
                  />
                </svg>
                {article.readTime} min de leitura
              </span>
            </div>
          </div>
        </div>

        {/* ── Breadcrumb ── */}
        <div className="bg-white border-b border-black/[0.06] py-2.5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 font-medium hover:text-forest-800"
                    style={{ textDecoration: "none" }}
                  >
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 18l6-6-6-6"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 font-medium hover:text-forest-800"
                    style={{ textDecoration: "none" }}
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 18l6-6-6-6"
                    />
                  </svg>
                </li>
                <li aria-current="page">
                  <span
                    className="font-semibold"
                    style={{
                      color: "#1a3a26",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical" as const,
                    }}
                  >
                    {article.title}
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ── Corpo do artigo ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            {/* Conteúdo principal */}
            <div>
              {/* Sumário de âncoras */}
              {headings.length > 0 && (
                <nav
                  aria-label="Sumário do artigo"
                  className="rounded-2xl p-5 mb-8"
                  style={{
                    background: "#eef4f0",
                    border: "1px solid rgba(0,0,0,.06)",
                  }}
                >
                  <h2
                    className="font-bold mb-3"
                    style={{
                      fontSize: ".8rem",
                      color: "#1a3a26",
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Neste artigo
                  </h2>
                  <ol className="flex flex-col gap-1.5 list-none">
                    {headings.map((h, i) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="flex items-center gap-2 transition-colors hover:text-forest-800 focus:outline-none focus:ring-2 focus:ring-forest-800"
                          style={{
                            fontSize: ".85rem",
                            color: "#374151",
                            textDecoration: "none",
                          }}
                        >
                          <span
                            className="font-bold shrink-0"
                            style={{ color: "#c4a45a", fontSize: ".75rem" }}
                          >
                            {String(i + 1).padStart(2, "0")}.
                          </span>
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Prose do artigo - renderiza o HTML do WordPress */}
              <div
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              {article.tags.length > 0 && (
                <div
                  className="flex flex-wrap gap-2 mt-8 pt-6"
                  style={{ borderTop: "1px solid rgba(0,0,0,.07)" }}
                >
                  <span className="text-sm font-semibold text-gray-600 self-center mr-1">
                    Tags:
                  </span>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: "#eef4f0",
                        color: "#1a3a26",
                        border: "1px solid rgba(0,0,0,.07)",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Compartilhamento */}
              <div
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid rgba(0,0,0,.07)" }}
              >
                <ArticleShareButtons title={article.title} />
              </div>

              {/* Card do autor */}
              <div
                className="mt-8 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start"
                style={{
                  background: "#eef4f0",
                  border: "1px solid rgba(0,0,0,.06)",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full shrink-0 font-bold font-serif"
                  style={{
                    width: 64,
                    height: 64,
                    minWidth: 64,
                    background: "#1a3a26",
                    color: "#c4a45a",
                    fontSize: "1.5rem",
                  }}
                  aria-hidden="true"
                >
                  R
                </div>
                <div>
                  <p
                    className="font-serif font-semibold mb-0.5"
                    style={{ fontSize: "1.1rem", color: "#1a3a26" }}
                  >
                    Dr. Rafael Mendes
                  </p>
                  <p
                    className="font-medium uppercase tracking-widest mb-2"
                    style={{ fontSize: ".72rem", color: "#c4a45a" }}
                  >
                    Psicólogo Clínico · CRP 06/12345
                  </p>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontSize: ".85rem" }}
                  >
                    Psicólogo com mais de 12 anos de experiência em saúde
                    mental. Especialista em TCC, EMDR e Psicoterapia
                    Integrativa. Atende presencialmente em São Paulo e online
                    para todo o Brasil.
                  </p>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 font-bold transition-opacity hover:opacity-80"
                    style={{
                      fontSize: ".82rem",
                      color: "#1a3a26",
                      textDecoration: "none",
                      borderBottom: "1.5px solid #1a3a26",
                    }}
                  >
                    Agendar consulta →
                  </a>
                </div>
              </div>

              {/* Artigos relacionados */}
              {related.length > 0 && (
                <div className="mt-10">
                  <h2
                    className="font-serif font-semibold mb-6"
                    style={{ fontSize: "1.4rem", color: "#1a3a26" }}
                  >
                    Artigos Relacionados
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {related.map((rel) => (
                      <article key={rel.id} className="art-card">
                        <Link
                          href={`/blog/${rel.slug}`}
                          style={{
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                          }}
                        >
                          <div
                            className="relative overflow-hidden"
                            style={{ height: 140 }}
                          >
                            <Image
                              src={rel.image}
                              alt={rel.imageAlt}
                              fill
                              sizes="300px"
                              className="object-cover"
                            />
                            <div
                              className="absolute inset-0 opacity-40"
                              style={{
                                background:
                                  "linear-gradient(135deg,#1a3a26,#234a30)",
                              }}
                              aria-hidden="true"
                            />
                            <span
                              className="absolute top-2 left-2 rounded px-1.5 py-0.5 text-white font-bold uppercase"
                              style={{
                                fontSize: ".6rem",
                                background: "rgba(196,164,90,.9)",
                              }}
                            >
                              {rel.categoryLabel}
                            </span>
                          </div>
                          <div className="p-4 flex flex-col flex-1">
                            <h3
                              className="font-serif font-semibold leading-snug mb-2 flex-1"
                              style={{ fontSize: "1rem", color: "#1a3a26" }}
                            >
                              {rel.title}
                            </h3>
                            <span
                              className="text-xs font-bold"
                              style={{ color: "#c4a45a" }}
                            >
                              {rel.readTime} min →
                            </span>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA final */}
              <div
                className="mt-10 rounded-2xl p-7 text-center"
                style={{
                  background: "linear-gradient(135deg,#1a3a26,#2d5e3d)",
                }}
              >
                <p
                  className="font-serif font-semibold text-white mb-2"
                  style={{ fontSize: "1.35rem" }}
                >
                  Gostou deste artigo?
                </p>
                <p
                  className="mb-5 leading-relaxed"
                  style={{ fontSize: ".88rem", color: "rgba(255,255,255,.7)" }}
                >
                  Se este conteúdo fez sentido para você, talvez seja hora de
                  dar o próximo passo. Agende uma consulta e comece sua jornada
                  de transformação.
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold rounded-full transition-all hover:-translate-y-0.5"
                  style={{
                    background: "#c4a45a",
                    padding: ".75rem 1.75rem",
                    fontSize: ".9rem",
                  }}
                >
                  Agendar pelo WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar desktop */}
            <div className="sidebar-desktop-only">
              <BlogSidebar categories={dynamicCategories} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
