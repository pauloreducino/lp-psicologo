const SPECS = [
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    bg: "#eef4f0", stroke: "#1a3a26",
    title: "Ansiedade e Estresse",
    desc: "Tratamento de transtornos de ansiedade, síndrome do pânico e gerenciamento do estresse.",
    method: "TCC · Mindfulness",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    bg: "#fdf6e7", stroke: "#c4a45a",
    title: "Depressão",
    desc: "Abordagem humanizada para tratamento da depressão e dificuldades de motivação.",
    method: "TCC · Psicoterapia Integrativa",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    bg: "#eef4f0", stroke: "#1a3a26",
    title: "Relacionamentos",
    desc: "Terapia de casal, conflitos interpessoais e comunicação não violenta.",
    method: "Terapia de Casal · CNV",
  },
  {
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    bg: "#fdf6e7", stroke: "#c4a45a",
    title: "Burnout & Carreira",
    desc: "Prevenção e recuperação do esgotamento profissional e equilíbrio vida-trabalho.",
    method: "Coaching Psicológico",
  },
  {
    icon: "M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h1m20 0h1M4.22 19.778l.707-.707M18.364 5.636l.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z",
    bg: "#eef4f0", stroke: "#1a3a26",
    title: "Autoestima & Identidade",
    desc: "Resgate da autoconfiança e construção de uma identidade sólida e positiva.",
    method: "Psicanálise · Humanismo",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    bg: "#fdf6e7", stroke: "#c4a45a",
    title: "Trauma & TEPT",
    desc: "Processamento de traumas e experiências difíceis com técnicas validadas.",
    method: "EMDR · TCC-Trauma",
  },
];

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      className="py-20 lg:py-24"
      style={{ background: "#F8F6F0" }}
      aria-label="Especialidades"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-14">
          <div className="section-tag justify-center mb-3">Especialidades</div>
          <h2
            className="font-serif font-semibold tracking-tight mb-3"
            style={{ fontSize: "clamp(1.7rem,3.5vw,2.6rem)", color: "#1a3a26" }}
          >
            Áreas de Atuação
          </h2>
          <p
            className="text-gray-500 mx-auto leading-relaxed"
            style={{ maxWidth: 520, fontSize: "clamp(.85rem,2vw,.95rem)" }}
          >
            Com abordagem integrativa e baseada em evidências, ofereço suporte
            especializado em diversas áreas da saúde mental.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECS.map((s, i) => (
            <article
              key={s.title}
              className="card p-5 reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div
                className="flex items-center justify-center rounded-[13px] mb-4"
                style={{ width: 48, height: 48, background: s.bg }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke={s.stroke}
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3
                className="font-serif font-semibold mb-2"
                style={{ fontSize: "1.15rem", color: "#1a3a26" }}
              >
                {s.title}
              </h3>
              <p
                className="text-gray-500 leading-relaxed mb-3"
                style={{ fontSize: ".85rem" }}
              >
                {s.desc}
              </p>
              <span
                className="font-bold uppercase tracking-wider"
                style={{ fontSize: ".7rem", color: "#c4a45a" }}
              >
                {s.method}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
