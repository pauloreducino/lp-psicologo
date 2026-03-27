"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<(string | number)[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Parse valores numéricos (remove + e %)
          const numericValues = stats.map((s) => {
            const num = parseInt(s.value.replace(/\D/g, ""), 10);
            return num;
          });

          const duration = 1300;
          const startTime = performance.now();
          let rafId = 0;

          const animate = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCounts(
              numericValues.map((target, idx) => {
                const animated = Math.round(target * progress);
                const original = stats[idx].value;
                const suffix = original.replace(/\d/g, "");
                return animated + suffix;
              }),
            );

            if (progress < 1) {
              rafId = requestAnimationFrame(animate);
            } else {
              setCounts(stats.map((s) => s.value));
            }
          };

          rafId = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [stats, hasAnimated]);

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-4">
      {counts.map((count, idx) => (
        <div key={stats[idx].label} className="card p-5 text-center">
          <p
            className="font-serif font-bold leading-none"
            style={{ fontSize: "2.8rem", color: "#1a3a26" }}
          >
            {count}
          </p>
          <p
            className="text-gray-500 font-medium mt-1"
            style={{ fontSize: ".78rem" }}
          >
            {stats[idx].label}
          </p>
        </div>
      ))}
    </div>
  );
}
