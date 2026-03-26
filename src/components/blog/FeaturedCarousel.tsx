"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types";

interface Props {
  articles: Article[];
}

export default function FeaturedCarousel({ articles }: Props) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (n: number) => setCurrent((n + articles.length) % articles.length),
    [articles.length],
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const article = articles[current];
  if (!article) return null;

  const BG_COLORS: Record<string, string> = {
    ansiedade: "linear-gradient(135deg,#1a3a26 0%,#234a30 60%,#2d5e3d 100%)",
    relacionamentos:
      "linear-gradient(135deg,#2d1a5e 0%,#4a2d7a 50%,#6b46a0 100%)",
    autoconhecimento:
      "linear-gradient(135deg,#1e3a5f 0%,#1a5276 50%,#2d6a9f 100%)",
    burnout: "linear-gradient(135deg,#7c2d12 0%,#9a3412 50%,#c2410c 100%)",
    depressao: "linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#3730a3 100%)",
  };

  return (
    <section
      id="destaque"
      aria-label="Artigos em destaque"
      className="relative overflow-hidden"
      style={{
        background: BG_COLORS[article.category] || BG_COLORS.ansiedade,
        transition: "background .6s ease",
      }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Curve bottom */}
      <svg
        className="absolute -bottom-px left-0 right-0"
        style={{ height: 70 }}
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0,70 C360,0 1080,0 1440,70 L1440,70 L0,70 Z" fill="#F8F6F0" />
      </svg>

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ paddingTop: "6rem", paddingBottom: "7rem" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full mb-5 px-3 py-1"
              style={{
                background: "rgba(196,164,90,.18)",
                border: "1px solid rgba(196,164,90,.38)",
              }}
            >
              <span
                style={{
                  fontSize: ".65rem",
                  fontWeight: 700,
                  color: "#c4a45a",
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                }}
              >
                ★ Artigo em Destaque
              </span>
            </div>

            <h2
              className="font-serif font-semibold text-white leading-[1.12] tracking-tight mb-4"
              style={{ fontSize: "clamp(1.75rem,4vw,2.8rem)" }}
            >
              {article.title}
            </h2>

            <p
              className="leading-relaxed mb-6"
              style={{
                fontSize: "clamp(.85rem,2vw,.95rem)",
                color: "rgba(255,255,255,.72)",
                maxWidth: 520,
              }}
            >
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-3 items-center mb-6">
              <Link
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-2 text-white font-semibold rounded-full transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-500"
                style={{
                  background: "#c4a45a",
                  padding: ".7rem 1.6rem",
                  fontSize: ".88rem",
                }}
              >
                Ler artigo completo
                <svg
                  width="14"
                  height="14"
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
              </Link>
              <span
                className="flex items-center gap-1.5"
                style={{ fontSize: ".82rem", color: "rgba(255,255,255,.6)" }}
              >
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

            <div className="flex flex-wrap gap-2">
              <span
                className="rounded-md px-2 py-0.5 font-bold uppercase tracking-wider"
                style={{
                  fontSize: ".68rem",
                  background: "rgba(196,164,90,.18)",
                  border: "1px solid rgba(196,164,90,.35)",
                  color: "#c4a45a",
                }}
              >
                {article.categoryLabel}
              </span>
              <span
                className="rounded-md px-2 py-0.5 font-semibold"
                style={{
                  fontSize: ".68rem",
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.15)",
                  color: "rgba(255,255,255,.65)",
                }}
              >
                {article.date}
              </span>
              <span
                className="rounded-md px-2 py-0.5 font-semibold"
                style={{
                  fontSize: ".68rem",
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.15)",
                  color: "rgba(255,255,255,.65)",
                }}
              >
                Dr. Rafael Mendes
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative" style={{ maxWidth: 360, width: "100%" }}>
              <div
                className="rounded-[20px] overflow-hidden"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,.45)" }}
              >
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  width={720}
                  height={540}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full"
                style={{ border: "2px dashed rgba(196,164,90,.3)", zIndex: -1 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div
          className="flex items-center justify-center gap-3 mt-10"
          role="group"
          aria-label="Navegação do carrossel"
        >
          <button
            onClick={prev}
            className="flex items-center justify-center rounded-full transition-colors"
            style={{
              width: 38,
              height: 38,
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.2)",
              color: "#fff",
            }}
            aria-label="Artigo anterior"
          >
            <svg
              width="15"
              height="15"
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

          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`carousel-dot${i === current ? " active" : ""}`}
              aria-label={`Ir para artigo ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            />
          ))}

          <button
            onClick={next}
            className="flex items-center justify-center rounded-full transition-colors"
            style={{
              width: 38,
              height: 38,
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.2)",
              color: "#fff",
            }}
            aria-label="Próximo artigo"
          >
            <svg
              width="15"
              height="15"
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
        </div>
      </div>
    </section>
  );
}
