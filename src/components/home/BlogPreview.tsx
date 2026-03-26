import Image from "next/image";
import Link from "next/link";
import type { NormalizedArticle } from "@/lib/wordpress";

const GRADIENTS: Record<string, string> = {
  ansiedade: "linear-gradient(135deg,#1a3a26,#3d7750)",
  relacionamentos: "linear-gradient(135deg,#5e4209,#c4a45a)",
  autoconhecimento: "linear-gradient(135deg,#1e3a5f,#2d6a9f)",
  burnout: "linear-gradient(135deg,#7c2d12,#c2410c)",
  depressao: "linear-gradient(135deg,#1e1b4b,#3730a3)",
  geral: "linear-gradient(135deg,#1a3a26,#3d7750)",
};

interface Props {
  articles: NormalizedArticle[];
}

export default function BlogPreview({ articles }: Props) {
  return (
    <section
      id="blog"
      className="py-20 lg:py-24"
      style={{ background: "#F8F6F0" }}
      aria-label="Últimos artigos"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-tag mb-3">Artigos</div>
            <h2
              className="font-serif font-semibold tracking-tight"
              style={{ fontSize: "clamp(1.7rem,3.5vw,2.6rem)", color: "#1a3a26" }}
            >
              Insights sobre Saúde Mental
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-forest-800"
            style={{
              fontSize: ".85rem",
              color: "#1a3a26",
              textDecoration: "none",
              borderBottom: "1.5px solid #1a3a26",
              paddingBottom: 2,
              whiteSpace: "nowrap",
            }}
          >
            Ver todos
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        {articles.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p>Nenhum artigo publicado ainda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <article
                key={article.id}
                className="post-card reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden" style={{ height: 190 }}>
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: GRADIENTS[article.category] || GRADIENTS.geral,
                        opacity: 0.5,
                      }}
                      aria-hidden="true"
                    />
                    {/* Category badge */}
                    <div
                      className="absolute top-3 left-3 rounded-md px-2 py-0.5 text-white font-bold uppercase tracking-wider"
                      style={{ fontSize: ".65rem", background: "rgba(196,164,90,.9)" }}
                    >
                      {article.categoryLabel}
                    </div>
                    {/* Read time */}
                    <div
                      className="absolute top-3 right-3 rounded-md px-2 py-0.5 text-white"
                      style={{ fontSize: ".62rem", background: "rgba(0,0,0,.35)" }}
                    >
                      {article.readTime} min
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="text-gray-400 font-medium mb-2" style={{ fontSize: ".7rem" }}>
                      {article.date}
                    </p>
                    <h3
                      className="font-serif font-semibold leading-snug mb-2"
                      style={{ fontSize: "1.1rem", color: "#1a3a26" }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="text-gray-500 leading-relaxed mb-3"
                      style={{ fontSize: ".82rem" }}
                    >
                      {article.excerpt.slice(0, 100)}…
                    </p>
                    <span
                      className="inline-flex items-center gap-1 font-bold"
                      style={{ fontSize: ".78rem", color: "#1a3a26" }}
                    >
                      Ler artigo
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
