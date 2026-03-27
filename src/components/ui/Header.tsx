"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { WA_URL } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#formacao", label: "Formação" },
  { href: "/blog", label: "Artigos" },
  { href: "/#contato", label: "Contato" },
];

const WA_ICON = (
  <svg
    width="14"
    height="14"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = "bg-forest-800/95 shadow-lg backdrop-blur-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Rafael Mendes - Página inicial"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(196,164,90,.2)",
              border: "1.5px solid rgba(196,164,90,.45)",
            }}
            aria-hidden="true"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="#c4a45a"
              strokeWidth="1.7"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div>
            <p className="font-serif text-base font-semibold text-white leading-tight">
              Rafael Mendes
            </p>
            <p className="hidden sm:block text-[0.62rem] text-white/50 font-medium uppercase tracking-widest">
              Psicólogo Clínico · CRP 06/12345
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden md:flex items-center gap-6 lg:gap-7"
          role="menubar"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              role="menuitem"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 text-white font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
          style={{ background: "#c4a45a" }}
          aria-label="Agendar consulta pelo WhatsApp"
        >
          {WA_ICON}
          Agendar
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className="block w-5 h-0.5 bg-white rounded transition-all duration-200"
            style={
              menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}
            }
          />
          <span
            className="block w-5 h-0.5 bg-white rounded transition-all duration-200"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-4 h-0.5 bg-white rounded transition-all duration-200"
            style={
              menuOpen
                ? {
                    width: "20px",
                    transform: "translateY(-8px) rotate(-45deg)",
                  }
                : {}
            }
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="menu"
        aria-label="Menu de navegação"
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen" : "max-h-0"}`}
        style={{
          background: "rgba(26,58,38,.98)",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,.1)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div
            className="h-px"
            style={{ background: "rgba(255,255,255,.1)" }}
          />
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-full"
            style={{ background: "#c4a45a" }}
            onClick={() => setMenuOpen(false)}
          >
            {WA_ICON}
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
