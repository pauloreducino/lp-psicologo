import Link from "next/link";
import { WA_URL } from "@/lib/utils";

const WA_ICON = (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-10 pb-7" style={{ background: "#1a3a26" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                style={{ background: "rgba(196,164,90,.18)", border: "1.5px solid rgba(196,164,90,.35)" }}>
                <svg width="18" height="18" fill="none" stroke="#c4a45a" strokeWidth="1.7" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-[1rem] font-semibold text-white">Dr. Rafael Mendes</p>
                <p className="text-[0.62rem] uppercase tracking-widest font-medium" style={{ color: "rgba(255,255,255,.4)" }}>Psicólogo Clínico</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.45)" }}>
              Cuidando da sua saúde mental com ética, ciência e humanidade há mais de 12 anos.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-[0.72rem] uppercase tracking-widest font-bold mb-4" style={{ color: "rgba(255,255,255,.35)" }}>
              Navegação
            </h3>
            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-2.5">
                {[
                  { href: "/#sobre", label: "Sobre Mim" },
                  { href: "/#especialidades", label: "Especialidades" },
                  { href: "/#formacao", label: "Formação" },
                  { href: "/blog", label: "Artigos" },
                  { href: "/#faq", label: "Perguntas Frequentes" },
                  { href: "/#contato", label: "Contato" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(255,255,255,.6)", textDecoration: "none" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-[0.72rem] uppercase tracking-widest font-bold mb-4" style={{ color: "rgba(255,255,255,.35)" }}>
              Agendar Consulta
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,.45)" }}>
              Presencial em São Paulo ou online para todo o Brasil.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#c4a45a" }}>
              {WA_ICON}
              WhatsApp
            </a>
          </div>
        </div>

        <div className="h-px mb-5" style={{ background: "rgba(255,255,255,.08)" }} />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "rgba(255,255,255,.28)" }}>
            © {new Date().getFullYear()} Dr. Rafael Mendes · CRP 06/12345 · Todos os direitos reservados
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,.28)" }}>
            Psicologia Clínica · São Paulo, SP
          </p>
        </div>
      </div>
    </footer>
  );
}
