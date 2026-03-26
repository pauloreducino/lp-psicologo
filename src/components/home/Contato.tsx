import { WA_URL } from "@/lib/utils";

const CARDS = [
  {
    href: WA_URL,
    bg: "#dcfce7",
    ic: "#16a34a",
    title: "WhatsApp",
    sub: "Resposta rápida para agendamentos",
    info: "(11) 99999-9999",
    infoColor: "#16a34a",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    fill: true,
  },
  {
    href: "mailto:contato@drrafaelmendes.com.br",
    bg: "#eef4f0",
    ic: "#1a3a26",
    title: "E-mail",
    sub: "Para dúvidas e informações gerais",
    info: "contato@drrafaelmendes.com.br",
    infoColor: "#1a3a26",
    path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    fill: false,
  },
  {
    href: "#",
    bg: "#eef4f0",
    ic: "#1a3a26",
    title: "Consultório",
    sub: "Av. Paulista, 1000 · Sala 512",
    info: "Bela Vista · São Paulo · SP",
    infoColor: "#1a3a26",
    path: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
    fill: false,
  },
  {
    href: "#",
    bg: "#eef4f0",
    ic: "#1a3a26",
    title: "Horários",
    sub: "Seg–Sex: 8h–20h",
    info: "Sáb: 9h–13h · Dom: Fechado",
    infoColor: "#1a3a26",
    path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    fill: false,
  },
  {
    href: "#",
    bg: "#eef4f0",
    ic: "#1a3a26",
    title: "Modalidades",
    sub: "Presencial · Online · Planos",
    info: "Atendimento em todo o Brasil",
    infoColor: "#1a3a26",
    path: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    fill: false,
  },
  {
    href: "#",
    bg: "linear-gradient(135deg,#fdf6e7,#fef9ef)",
    ic: "#ec4899",
    title: "Instagram",
    sub: "Conteúdo sobre saúde mental",
    info: "@drrafaelmendes",
    infoColor: "#ec4899",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    fill: true,
  },
];

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-20 lg:py-24"
      style={{ background: "#F8F6F0" }}
      aria-label="Contato"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12">
          <div className="section-tag justify-center mb-3">Contato</div>
          <h2
            className="font-serif font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.7rem,3.5vw,2.6rem)", color: "#1a3a26" }}
          >
            Como me encontrar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CARDS.map((c, i) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card reveal block"
              style={{ padding: "1.5rem", textDecoration: "none", transitionDelay: `${i * 0.05}s` }}
            >
              <div
                className="flex items-center justify-center rounded-[14px] mb-4"
                style={{ width: 48, height: 48, background: c.bg }}
              >
                <svg
                  width="24"
                  height="24"
                  fill={c.fill ? c.ic : "none"}
                  stroke={c.fill ? undefined : c.ic}
                  strokeWidth={c.fill ? undefined : "1.8"}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap={c.fill ? undefined : "round"}
                    strokeLinejoin={c.fill ? undefined : "round"}
                    d={c.path}
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1" style={{ fontSize: ".95rem", color: "#1a3a26" }}>
                {c.title}
              </h3>
              <p className="text-gray-500 mb-1" style={{ fontSize: ".82rem" }}>
                {c.sub}
              </p>
              <p className="font-semibold" style={{ fontSize: ".88rem", color: c.infoColor }}>
                {c.info}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
