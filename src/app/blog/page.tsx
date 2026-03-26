import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { WhatsAppFloat, ScrollProgress, RevealObserver } from "@/components/ui/ClientWidgets";
import FeaturedCarousel from "@/components/blog/FeaturedCarousel";
import ArticlesGrid from "@/components/blog/ArticlesGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import {
  getAllArticles,
  getFeaturedArticles,
  buildDynamicCategories,
} from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog — Artigos sobre Saúde Mental",
  description:
    "Artigos sobre ansiedade, depressão, relacionamentos, burnout e autoconhecimento. Por Dr. Rafael Mendes, Psicólogo Clínico CRP 06/12345.",
  openGraph: {
    title: "Blog — Dr. Rafael Mendes · Psicólogo Clínico",
    description: "Artigos sobre saúde mental, psicologia e autoconhecimento.",
    url: "https://drrafaelmendes.com.br/blog",
  },
};

export default async function BlogPage() {
  // Busca todos os artigos e os destaques do WordPress
  const [allArticles, featuredArticles] = await Promise.all([
    getAllArticles(),
    getFeaturedArticles(),
  ]);

  // Calcula categorias com contagem real dos artigos do WP
  const dynamicCategories = buildDynamicCategories(allArticles);

  return (
    <>
      <ScrollProgress />
      <RevealObserver />
      <WhatsAppFloat />
      <Header />

      <main id="main-content">
        {/* ── Featured Carousel (artigos com "Destaque" marcado no WP) ── */}
        <FeaturedCarousel articles={featuredArticles} />

        {/* ── Breadcrumb ── */}
        <div className="bg-white border-b border-black/[0.06] py-2.5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 font-medium hover:text-forest-800 focus:outline-none"
                    style={{ textDecoration: "none" }}
                  >
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li aria-current="page">
                  <span className="font-semibold" style={{ color: "#1a3a26" }}>
                    Blog & Artigos
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            {/* Articles */}
            <div>
              <ArticlesGrid articles={allArticles} categories={dynamicCategories} />
            </div>
            {/* Sidebar desktop */}
            <div className="sidebar-desktop-only">
              <BlogSidebar categories={dynamicCategories} />
            </div>
          </div>

          {/* Sidebar mobile */}
          <div className="sidebar-mobile-only mt-10">
            <BlogSidebar categories={dynamicCategories} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
