import StatsCounter from "./StatsCounter";

const TIMELINE = [
  {
    year: "2024",
    title: "Especialização em EMDR",
    desc: "Instituto EMDR Brasil — Certificação em Eye Movement Desensitization and Reprocessing para tratamento de trauma.",
    last: false,
  },
  {
    year: "2021",
    title: "Mestrado em Psicologia Clínica",
    desc: "PUC-SP — Pesquisa sobre eficácia da TCC em transtornos de ansiedade. Aprovado com louvor.",
    last: false,
  },
  {
    year: "2018",
    title: "Pós em Terapia Cognitivo-Comportamental",
    desc: "IFEN — Instituto de Formação e Educação Neurocomportamental, São Paulo.",
    last: false,
  },
  {
    year: "2013",
    title: "Graduação em Psicologia",
    desc: "Universidade de São Paulo (USP) — Psicologia Clínica e Organizacional. CRP 06/12345.",
    last: true,
  },
] as const;

const STATS = [
  { value: "12+", label: "Anos clínicos" },
  { value: "850+", label: "Pacientes" },
  { value: "6", label: "Especializações" },
  { value: "97%", label: "Satisfação" },
];

const MEMBERSHIPS = [
  {
    title: "CFP — Conselho Federal de Psicologia",
    sub: "Membro ativo · CRP 06/12345",
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "ABPPC — Terapia Cognitivo-Comportamental",
    sub: "Membro certificado",
    d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Instituto EMDR Brasil",
    sub: "Terapeuta certificado",
    d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function Formacao() {
  return (
    <section
      id="formacao"
      className="py-20 lg:py-24"
      style={{ background: "#F8F6F0" }}
      aria-label="Formação e qualificações"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-14">
          <div className="section-tag justify-center mb-3">Formação</div>
          <h2
            className="font-serif font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.7rem,3.5vw,2.6rem)", color: "#1a3a26" }}
          >
            Experiência & Qualificações
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Timeline */}
          <div className="reveal-left">
            <h3
              className="font-serif font-semibold mb-6"
              style={{ fontSize: "1.35rem", color: "#1a3a26" }}
            >
              Trajetória Acadêmica
            </h3>
            <ol className="relative" style={{ paddingLeft: "1.75rem" }}>
              <div
                className="absolute left-[5px] top-0 bottom-0 w-0.5 rounded"
                style={{
                  background:
                    "linear-gradient(to bottom,#1a3a26,#c4a45a,rgba(196,164,90,.1))",
                }}
                aria-hidden="true"
              />
              {TIMELINE.map((t, i) => (
                <li
                  key={t.year}
                  className={i < TIMELINE.length - 1 ? "mb-7" : ""}
                  style={{ position: "relative" }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      left: "-1.75rem",
                      top: 4,
                      width: 12,
                      height: 12,
                      background: t.last ? "#c4a45a" : "#1a3a26",
                      border: "2px solid #c4a45a",
                      boxShadow: "0 0 0 3px rgba(196,164,90,.12)",
                    }}
                    aria-hidden="true"
                  />
                  <time
                    className="block font-bold uppercase tracking-widest mb-1"
                    style={{ fontSize: ".72rem", color: "#c4a45a" }}
                  >
                    {t.year}
                  </time>
                  <h4
                    className="font-bold mb-1"
                    style={{ fontSize: ".92rem", color: "#1a3a26" }}
                  >
                    {t.title}
                  </h4>
                  <p
                    className="leading-relaxed text-gray-500"
                    style={{ fontSize: ".82rem" }}
                  >
                    {t.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Stats + memberships */}
          <div className="reveal-right flex flex-col gap-4">
            <StatsCounter stats={STATS} />

            <div className="card p-5">
              <h4
                className="font-serif font-semibold mb-4"
                style={{ fontSize: "1.1rem", color: "#1a3a26" }}
              >
                Associações & Membros
              </h4>
              <ul className="flex flex-col gap-3">
                {MEMBERSHIPS.map((m) => (
                  <li key={m.title} className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center rounded-[9px] shrink-0"
                      style={{ width: 34, height: 34, background: "#eef4f0" }}
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
                          d={m.d}
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="font-semibold text-gray-800"
                        style={{ fontSize: ".85rem" }}
                      >
                        {m.title}
                      </p>
                      <p
                        className="text-gray-400"
                        style={{ fontSize: ".75rem" }}
                      >
                        {m.sub}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
