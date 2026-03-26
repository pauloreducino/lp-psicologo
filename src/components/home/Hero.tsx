"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { WA_URL } from "@/lib/utils";

const WA_ICON = (
  <svg
    width="17"
    height="17"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  const stats = useMemo(
    () => [
      { target: 12, suffix: "+", label: "Anos de experiência" },
      { target: 850, suffix: "+", label: "Pacientes atendidos" },
      { target: 97, suffix: "%", label: "Satisfação" },
    ],
    [],
  );

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isAnimated) return;

    const duration = 1300;
    const startTime = performance.now();
    let rafId = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCounts(stats.map((item) => Math.round(item.target * progress)));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((item) => item.target));
        setIsAnimated(true);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isAnimated, stats]);

  return (
    <section
      className="hero-pattern relative flex items-center"
      style={{
        minHeight: "100svh",
        paddingTop: "5.5rem",
        paddingBottom: "5rem",
        background:
          "linear-gradient(135deg,#1a3a26 0%,#234a30 55%,#2d5e3d 100%)",
        /* NÃO colocar overflow aqui — cria scroll container e gera scrollbar vertical.
           O overflow-x: hidden já está no html e body do globals.css */
      }}
      aria-label="Apresentação"
    >
      {/* Curve */}
      <svg
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 70, bottom: -1 }}
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0,70 C360,0 1080,0 1440,70 L1440,70 L0,70 Z" fill="#F8F6F0" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ── Text ── */}
          <div className="text-center lg:text-left">
            <div className="section-tag mb-5 justify-center lg:justify-start">
              Psicologia Clínica
            </div>

            <h1
              className="font-serif font-semibold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)" }}
            >
              Cuidado com a sua <br className="hidden sm:block" />
              <em className="not-italic" style={{ color: "#c4a45a" }}>
                saúde mental
              </em>
              <br className="hidden sm:block" /> começa aqui
            </h1>

            <p
              className="leading-relaxed mb-8 mx-auto lg:mx-0"
              style={{
                fontSize: "clamp(.88rem,2.5vw,1.03rem)",
                color: "rgba(255,255,255,.72)",
                maxWidth: 480,
              }}
            >
              Há mais de 12 anos, ofereço um espaço seguro, acolhedor e sem
              julgamentos para que você possa se reconectar consigo mesmo,
              superar bloqueios e viver com mais equilíbrio e propósito.
            </p>

            <div className="flex flex-wrap gap-3 mb-9 justify-center lg:justify-start">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-500"
                style={{
                  background: "#c4a45a",
                  padding: ".75rem 1.75rem",
                  fontSize: ".9rem",
                }}
                aria-label="Agendar consulta pelo WhatsApp"
              >
                {WA_ICON}
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
                style={{
                  background: "transparent",
                  color: "#fff",
                  padding: ".75rem 1.75rem",
                  fontSize: ".9rem",
                  border: "1.5px solid rgba(255,255,255,.45)",
                }}
              >
                Conhecer mais
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start"
              style={{
                borderTop: "1px solid rgba(255,255,255,.12)",
                paddingTop: "1.5rem",
              }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-4 sm:gap-6">
                  {i > 0 && (
                    <div
                      className="w-px h-9"
                      style={{ background: "rgba(255,255,255,.15)" }}
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <p
                      className="font-serif font-bold leading-none"
                      style={{ fontSize: "1.9rem", color: "#c4a45a" }}
                    >
                      {counts[i]}
                      {s.suffix}
                    </p>
                    <p
                      className="text-xs font-medium mt-0.5"
                      style={{ color: "rgba(255,255,255,.5)" }}
                    >
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image — visível em TODOS os tamanhos ── */}
          <div className="flex justify-center lg:justify-end">
            {/*
              Wrapper com overflow-hidden para conter os badges
              sem vazar para fora da viewport no mobile.
              No desktop mantemos o espaço para os badges negativos
              usando padding.
            */}
            <div
              className="relative w-full"
              style={{
                maxWidth: 400,
                /* Padding lateral para dar espaço aos badges no desktop
                   sem causar scroll no mobile */
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              {/* Anéis decorativos — só no desktop para não vazar */}
              <div
                className="hidden lg:block absolute -top-4 -right-4 w-36 h-36 rounded-full"
                style={{ border: "2px dashed rgba(196,164,90,.28)", zIndex: 0 }}
                aria-hidden="true"
              />
              <div
                className="hidden lg:block absolute -bottom-2 -left-2 w-20 h-20 rounded-full"
                style={{ background: "rgba(196,164,90,.07)", zIndex: 0 }}
                aria-hidden="true"
              />

              {/* Foto */}
              <div
                className="relative rounded-[22px] overflow-hidden"
                style={{ boxShadow: "0 28px 70px rgba(0,0,0,.5)", zIndex: 1 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=560&q=80"
                  alt="Dr. Rafael Mendes, Psicólogo Clínico, sorrindo em ambiente profissional"
                  width={560}
                  height={747}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  priority
                />
              </div>

              {/* Badge flutuante — posição segura no mobile, negativa só no desktop */}
              <div
                className="float-badge absolute z-10"
                style={{
                  bottom: 20,
                  /* Mobile: dentro da foto. Desktop: sai levemente para a esquerda */
                  left: 12,
                  background: "#fff",
                  borderRadius: 14,
                  padding: ".6rem .85rem",
                  boxShadow: "0 8px 30px rgba(0,0,0,.18)",
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                }}
                aria-label="Consultas Presenciais e Online"
              >
                <div
                  className="flex items-center justify-center rounded-[9px]"
                  style={{
                    width: 32,
                    height: 32,
                    minWidth: 32,
                    background: "#eef4f0",
                  }}
                >
                  <svg
                    width="17"
                    height="17"
                    fill="none"
                    stroke="#1a3a26"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: ".62rem",
                      color: "#9ca3af",
                      fontWeight: 500,
                    }}
                  >
                    Consultas
                  </p>
                  <p
                    style={{
                      fontSize: ".78rem",
                      fontWeight: 700,
                      color: "#1a3a26",
                    }}
                  >
                    Presencial & Online
                  </p>
                </div>
              </div>

              {/* Badge CRP — posição segura no mobile */}
              <div
                className="absolute z-10"
                style={{
                  top: 16,
                  /* Mobile: dentro da foto. Desktop: sai levemente para a esquerda */
                  right: 12,
                  background: "#1a3a26",
                  borderRadius: 11,
                  padding: ".4rem .75rem",
                  boxShadow: "0 4px 16px rgba(0,0,0,.28)",
                }}
                aria-label="Registro profissional CRP 06/12345"
              >
                <p
                  style={{
                    fontSize: ".62rem",
                    color: "rgba(255,255,255,.55)",
                    fontWeight: 500,
                  }}
                >
                  CRP
                </p>
                <p
                  className="font-serif font-bold"
                  style={{ fontSize: ".78rem", color: "#c4a45a" }}
                >
                  06/12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
