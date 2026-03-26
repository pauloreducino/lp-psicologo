const TESTIMONIALS = [
  {
    initial: "M",
    name: "Marina S.",
    period: "Paciente há 2 anos",
    text: "O Rafael mudou minha vida. Depois de anos com ansiedade severa, aprendi ferramentas reais para lidar com meus pensamentos. Hoje vivo com muito mais leveza.",
  },
  {
    initial: "C",
    name: "Carlos A.",
    period: "Paciente há 18 meses",
    text: "Estava no limite do burnout quando comecei a terapia. O acolhimento e a profissionalidade do Rafael foram fundamentais para eu me reencontrar.",
  },
  {
    initial: "F",
    name: "Fernanda L.",
    period: "Paciente há 3 anos",
    text: "Fazer terapia online com o Rafael foi incrível. Mesma qualidade que no presencial, só que na comodidade de casa. Recomendo de olhos fechados!",
  },
];

export default function Depoimentos() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: "linear-gradient(135deg,#1a3a26,#2d5e3d)" }}
      aria-label="Depoimentos de pacientes"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-10">
          <div
            className="section-tag justify-center mb-3"
            style={{ color: "rgba(196,164,90,.8)" }}
          >
            Depoimentos
          </div>
          <h2
            className="font-serif font-semibold tracking-tight text-white"
            style={{ fontSize: "clamp(1.7rem,3.5vw,2.6rem)" }}
          >
            O que dizem meus pacientes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={t.name}
              className="reveal rounded-[18px] p-6"
              style={{
                transitionDelay: `${i * 0.07}s`,
                background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <div
                className="flex mb-4"
                style={{ color: "#c4a45a", fontSize: ".95rem" }}
                aria-label="5 estrelas"
              >
                ★★★★★
              </div>
              <p
                className="italic leading-relaxed mb-5"
                style={{ fontSize: ".88rem", color: "rgba(255,255,255,.76)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-full shrink-0 font-bold"
                  style={{
                    width: 38,
                    height: 38,
                    background: "rgba(196,164,90,.2)",
                    color: "#c4a45a",
                    fontSize: ".85rem",
                  }}
                  aria-hidden="true"
                >
                  {t.initial}
                </div>
                <div>
                  <cite
                    className="not-italic font-semibold block"
                    style={{ fontSize: ".85rem", color: "#fff" }}
                  >
                    {t.name}
                  </cite>
                  <span
                    style={{
                      fontSize: ".72rem",
                      color: "rgba(255,255,255,.4)",
                    }}
                  >
                    {t.period}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
