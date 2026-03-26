import type { Metadata } from "next";
import Header     from "@/components/ui/Header";
import Footer     from "@/components/ui/Footer";
import { WhatsAppFloat, ScrollProgress, RevealObserver } from "@/components/ui/ClientWidgets";

// ── Seções da Home (cada uma em seu próprio arquivo) ──
import Hero          from "@/components/home/Hero";
import Especialidades from "@/components/home/Especialidades";
import Sobre         from "@/components/home/Sobre";
import Formacao      from "@/components/home/Formacao";
import Depoimentos   from "@/components/home/Depoimentos";
import BlogPreview   from "@/components/home/BlogPreview";
import FAQ           from "@/components/home/FAQ";
import CTABanner     from "@/components/home/CTABanner";
import Contato       from "@/components/home/Contato";

import { getLatestArticles } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Dr. Rafael Mendes — Psicólogo Clínico em São Paulo",
  description:
    "Psicólogo Clínico com 12+ anos de experiência. Atendimento presencial em São Paulo e online para todo o Brasil. Ansiedade, depressão, relacionamentos e autoconhecimento. CRP 06/12345.",
  openGraph: {
    title: "Dr. Rafael Mendes — Psicólogo Clínico",
    description: "Cuidado com a sua saúde mental começa aqui. Atendimento presencial e online.",
    url: "https://drrafaelmendes.com.br",
  },
};

export default async function HomePage() {
  // Busca os 3 artigos mais recentes do WordPress
  // Se o WordPress estiver offline, usa os artigos locais como fallback
  const latestArticles = await getLatestArticles(3);

  return (
    <>
      <ScrollProgress />
      <RevealObserver />
      <WhatsAppFloat />
      <Header transparent />

      <main id="main-content">
        <Hero />
        <Especialidades />
        <Sobre />
        <Formacao />
        <Depoimentos />
        <BlogPreview articles={latestArticles} />
        <FAQ />
        <CTABanner />
        <Contato />
      </main>

      <Footer />
    </>
  );
}
