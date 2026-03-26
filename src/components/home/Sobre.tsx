import Image from "next/image";
import { WA_URL } from "@/lib/utils";

const DIFERENCIAIS = [
  "Ambiente acolhedor, sigiloso e sem julgamentos",
  "Atendimento presencial em São Paulo e online",
  "Plano terapêutico personalizado para cada caso",
  "Técnicas baseadas em evidências científicas",
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 lg:py-24"
      style={{ background: "#eef4f0" }}
      aria-label="Sobre Rafael Mendes"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem */}
          <div className="reveal-left flex justify-center">
            <div
              className="img-frame"
              style={{
                maxWidth: 440,
                width: "100%",
                paddingBottom: "1.5rem",
                paddingRight: "1.5rem",
              }}
            >
              <Image
                src="/images/doctor.webp"
                alt="Rafael Mendes em seu consultório"
                width={580}
                height={725}
                className="w-full object-cover rounded-[20px] relative z-10"
                style={{ aspectRatio: "4/5" }}
              />
              <div
                className="absolute z-20 rounded-[14px]"
                style={{
                  bottom: 32,
                  right: 4,
                  background: "#1a3a26",
                  padding: "1rem 1.25rem",
                  color: "#fff",
                  boxShadow: "0 10px 36px rgba(0,0,0,.2)",
                  maxWidth: 180,
                }}
              >
                <p
                  style={{
                    fontSize: ".72rem",
                    color: "rgba(255,255,255,.55)",
                    fontWeight: 500,
                    marginBottom: ".2rem",
                  }}
                >
                  Abordagem
                </p>
                <p
                  className="font-serif font-semibold leading-tight"
                  style={{ fontSize: "1.05rem", color: "#c4a45a" }}
                >
                  Psicoterapia
                  <br />
                  Integrativa
                </p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="reveal-right">
            <div className="section-tag mb-5">Sobre Mim</div>
            <h2
              className="font-serif font-semibold tracking-tight mb-4 leading-[1.2]"
              style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#1a3a26" }}
            >
              Uma parceria de
              <br />
              confiança e crescimento
            </h2>
            <p
              className="text-gray-600 leading-relaxed mb-3"
              style={{ fontSize: "clamp(.85rem,2vw,.95rem)" }}
            >
              Sou o Rafael Mendes, psicólogo clínico com mais de 12 anos
              dedicados à saúde mental. Meu trabalho é guiado pela crença de que
              cada pessoa tem em si a capacidade de crescer, se transformar e
              viver de forma mais plena.
            </p>
            <p
              className="text-gray-600 leading-relaxed mb-7"
              style={{ fontSize: "clamp(.85rem,2vw,.95rem)" }}
            >
              Utilizo uma abordagem integrativa, combinando TCC, Psicanálise e
              Mindfulness para criar um caminho terapêutico personalizado para
              cada paciente.
            </p>

            <ul
              className="flex flex-col gap-3 mb-8"
              aria-label="Diferenciais do atendimento"
            >
              {DIFERENCIAIS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-[7px] shrink-0"
                    style={{ width: 26, height: 26, background: "#1a3a26" }}
                  >
                    <svg
                      width="13"
                      height="13"
                      fill="none"
                      stroke="#c4a45a"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span
                    className="text-gray-700 font-medium"
                    style={{ fontSize: ".88rem" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-forest-800"
              style={{
                background: "#1a3a26",
                padding: ".75rem 1.75rem",
                fontSize: ".9rem",
              }}
            >
              Agendar com Rafael
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
