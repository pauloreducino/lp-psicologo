"use client";

import { useEffect } from "react";

export default function AnchorScroll() {
  useEffect(() => {
    // Injeta id em todos os H2 do artigo que não têm id
    const prose = document.querySelector(".article-prose");
    if (prose) {
      const h2s = prose.querySelectorAll("h2");
      h2s.forEach((h2) => {
        if (!h2.id) {
          const id =
            h2.textContent
              ?.trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "") ?? "";
          if (id) h2.id = id;
        }
      });
    }

    // Intercepta cliques nos links âncora e faz rolagem suave
    const HEADER_OFFSET = 96;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();

      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

      window.scrollTo({ top, behavior: "smooth" });

      history.pushState(null, "", hash);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
