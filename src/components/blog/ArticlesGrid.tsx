"use client";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Article, Category } from "@/types";

const ARTICLES_PER_PAGE = 6;

const GRADIENT_MAP: Record<string, string> = {
  ansiedade: "linear-gradient(135deg,#1a3a26,#3d7750)",
  relacionamentos: "linear-gradient(135deg,#5e4209,#c4a45a)",
  autoconhecimento: "linear-gradient(135deg,#1e3a5f,#2d6a9f)",
  burnout: "linear-gradient(135deg,#7c2d12,#c2410c)",
  depressao: "linear-gradient(135deg,#1e1b4b,#3730a3)",
};

interface Props {
  articles: Article[];
  categories: Category[];
}

export default function ArticlesGrid({ articles, categories }: Props) {
  const searchParams = useSearchParams();
  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // Sincroniza com o parâmetro `cat` da URL
  useEffect(() => {
    const catParam = searchParams.get("cat");
    if (catParam && categories.some((c) => c.id === catParam)) {
      setActiveCat(catParam);
    }
  }, [searchParams, categories]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return articles.filter((a) => {
      const matchCat = activeCat === "all" || a.category === activeCat;
      const matchQ =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [articles, activeCat, query]);

  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const paged = filtered.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE,
  );

  const handleCat = (id: string) => {
    setActiveCat(id);
    setPage(1);
  };
  const handleSearch = (v: string) => {
    setQuery(v);
    setPage(1);
  };

  return (
    <div>
      {/* ── Header row ── */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <h2
          className="font-serif font-semibold tracking-tight"
          style={{ fontSize: "clamp(1.4rem,3vw,1.85rem)", color: "#1a3a26" }}
        >
          Todos os Artigos
          <span className="ml-2 text-sm font-sans font-normal text-gray-400">
            ({filtered.length})
          </span>
        </h2>

        {/* Search */}
        <div className="relative" style={{ maxWidth: 240, width: "100%" }}>
          <label htmlFor="article-search" className="sr-only">
            Buscar artigos
          </label>
          <input
            id="article-search"
            type="search"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar artigos…"
            className="newsletter-input ml-2 pl-8"
            aria-label="Buscar artigos"
          />
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
            width="14"
            height="14"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35"
            />
          </svg>
        </div>
      </div>

      {/* ── Category pills ── */}
      <div
        className="cat-scroll flex gap-2 pb-2 mb-6 overflow-x-auto"
        role="tablist"
        aria-label="Filtrar por categoria"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCat === cat.id}
            onClick={() => handleCat(cat.id)}
            className={`cat-pill ${activeCat === cat.id ? "cat-pill-active" : "cat-pill-default"}`}
          >
            {cat.label}
            <span
              className="rounded-full px-1.5 text-[.68rem]"
              style={{
                background:
                  activeCat === cat.id ? "rgba(255,255,255,.25)" : "#f3f4f6",
              }}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* ── No results ── */}
      {paged.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-black/[0.06]">
          <svg
            width="48"
            height="48"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="mx-auto mb-4"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35"
            />
          </svg>
          <p className="font-semibold text-gray-500 mb-2">
            Nenhum artigo encontrado.
          </p>
          <button
            onClick={() => {
              handleCat("all");
              handleSearch("");
            }}
            className="text-sm font-bold underline"
            style={{
              color: "#1a3a26",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Ver todos os artigos
          </button>
        </div>
      )}

      {/* ── Articles grid ── */}
      {paged.length > 0 && (
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns:
              "repeat(auto-fill,minmax(min(100%,280px),1fr))",
          }}
          role="list"
          aria-label="Lista de artigos"
        >
          {paged.map((article) => (
            <article key={article.id} className="art-card" role="listitem">
              <Link
                href={`/blog/${article.slug}`}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 185, flexShrink: 0 }}
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background:
                        GRADIENT_MAP[article.category] ||
                        GRADIENT_MAP.ansiedade,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute top-3 left-3 rounded-md px-2 py-0.5 text-white font-bold uppercase tracking-wider"
                    style={{
                      fontSize: ".65rem",
                      background: "rgba(196,164,90,.9)",
                      letterSpacing: ".05em",
                    }}
                  >
                    {article.categoryLabel}
                  </span>
                  <span
                    className="absolute top-3 right-3 rounded-md px-2 py-0.5 text-white"
                    style={{
                      fontSize: ".62rem",
                      background: "rgba(0,0,0,.35)",
                    }}
                  >
                    {article.readTime} min
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p
                    className="text-gray-400 font-medium mb-2"
                    style={{ fontSize: ".7rem" }}
                  >
                    <time dateTime={article.dateISO}>{article.date}</time>
                  </p>
                  <h3
                    className="font-serif font-semibold leading-snug mb-2"
                    style={{ fontSize: "1.1rem", color: "#1a3a26" }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-gray-500 leading-relaxed mb-4 flex-1"
                    style={{ fontSize: ".82rem" }}
                  >
                    {article.excerpt.slice(0, 110)}…
                  </p>
                  <span
                    className="inline-flex items-center gap-1 font-bold mt-auto"
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

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <nav
          className="flex items-center justify-center gap-2 mt-8"
          aria-label="Paginação"
        >
          {/* Prev */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="page-btn"
            aria-label="Página anterior"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 18l-6-6 6-6"
              />
            </svg>
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
            const show = n === 1 || n === totalPages || Math.abs(n - page) <= 1;
            const ellipsisBefore = n === page - 2 && page > 3;
            const ellipsisAfter = n === page + 2 && page < totalPages - 2;
            if (ellipsisBefore || ellipsisAfter) {
              return (
                <span key={n} className="w-8 text-center text-gray-400 text-sm">
                  …
                </span>
              );
            }
            if (!show) return null;
            return (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`page-btn${page === n ? " active" : ""}`}
                aria-label={`Página ${n}`}
                aria-current={page === n ? "page" : undefined}
              >
                {n}
              </button>
            );
          })}

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="page-btn"
            aria-label="Próxima página"
          >
            <svg
              width="14"
              height="14"
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
          </button>
        </nav>
      )}

      {/* Page info */}
      {totalPages > 1 && (
        <p className="text-center text-xs text-gray-400 mt-3">
          Página {page} de {totalPages} · {filtered.length} artigos
        </p>
      )}
    </div>
  );
}
