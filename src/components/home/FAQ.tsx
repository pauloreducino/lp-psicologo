"use client";
import { useState } from "react";
import { FAQ_ITEMS } from "@/data/articles";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-24"
      style={{ background: "#eef4f0" }}
      aria-label="Perguntas Frequentes"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12">
          <div className="section-tag justify-center mb-3">FAQ</div>
          <h2
            className="font-serif font-semibold tracking-tight mb-3"
            style={{ fontSize: "clamp(1.7rem,3.5vw,2.6rem)", color: "#1a3a26" }}
          >
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 leading-relaxed mx-auto" style={{ fontSize: "clamp(.85rem,2vw,.95rem)", maxWidth: 520 }}>
            Tire suas principais dúvidas sobre psicoterapia e como funciona o atendimento.
          </p>
        </div>

        <dl className="flex flex-col gap-0 rounded-2xl overflow-hidden border border-black/[0.06] bg-white">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="faq-item last:border-b-0" style={{ borderBottom: i < FAQ_ITEMS.length - 1 ? "1px solid rgba(0,0,0,.07)" : "none" }}>
              <dt>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-sage-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-800"
                >
                  <span className="font-semibold" style={{ fontSize: "clamp(.88rem,2vw,.95rem)", color: "#1a3a26" }}>
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      width: 28, height: 28, minWidth: 28,
                      background: open === i ? "#1a3a26" : "#eef4f0",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" fill="none" stroke={open === i ? "#c4a45a" : "#1a3a26"} strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className="faq-answer"
                style={{
                  maxHeight: open === i ? 500 : 0,
                  overflow: "hidden",
                  transition: "max-height .35s ease",
                }}
              >
                <p
                  className="px-6 pb-5 text-gray-600 leading-relaxed"
                  style={{ fontSize: "clamp(.85rem,2vw,.92rem)" }}
                >
                  {item.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>

        {/* CTA under FAQ */}
        <div className="reveal mt-10 text-center">
          <p className="text-gray-500 mb-4" style={{ fontSize: ".88rem" }}>
            Ainda tem dúvidas? Entre em contato diretamente.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá, tenho uma dúvida sobre o atendimento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#1a3a26", padding: ".65rem 1.5rem", fontSize: ".88rem" }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
