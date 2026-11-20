"use client";

/**
 * BrandIdentitySection — visual brand-system showcase for PremiumCaseStudy:
 * colour swatches, typography specimen, logo/identity block and UI elements,
 * styled after the per-study Brand Identity sections (RITM, Dohabus, etc.).
 */

import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/caseStudies";

function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
}

function BrandIdentitySection({
  section,
  study,
}: {
  section: Extract<CaseStudy["sections"][number], { type: "brandIdentity" }>;
  study: CaseStudy;
}) {
  const accent = study.accent;
  const bg = study.bannerColor ?? "#F7F3EA";

  const [headRef, headVisible] = useScrollReveal();
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: bg }}>
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        {/* HEADER */}
        <div
          ref={headRef}
          className={`text-center transition-all duration-1000 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em]"
            style={{ color: accent, fontFamily: "Inter, sans-serif" }}
          >
            {section.label}
          </span>
          <h2
            className="mt-5 text-[30px] md:text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            {section.title}
          </h2>
          {section.intro && (
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>
              {section.intro}
            </p>
          )}
        </div>

        {/* TWO-COLUMN SYSTEM GRID */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — COLOURS + TYPOGRAPHY */}
          <div ref={leftRef} className={`space-y-12 transition-all duration-1000 delay-150 ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Colour palette */}
            <div>
              <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
                Colour Direction
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {section.colors.map((color) => (
                  <div key={color.hex} className="space-y-2">
                    <div
                      className="h-20 rounded-lg transition-transform duration-300 hover:scale-105"
                      style={{
                        backgroundColor: color.hex,
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
                      }}
                    />
                    <div>
                      <div className="text-[12px] font-medium text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>{color.name}</div>
                      <div className="font-mono text-[11px] text-[#888888]">{color.hex}</div>
                      {color.description && (
                        <div className="mt-0.5 text-[11px] leading-snug text-[#999999]" style={{ fontFamily: "Inter, sans-serif" }}>{color.description}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography specimen */}
            <div>
              <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
                Typography
              </h3>
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: `${accent}25` }}>
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888]">Typography Hierarchy</div>
                <div className="mt-4 space-y-3">
                  <div className="text-[30px] font-bold leading-tight text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    Main Heading
                  </div>
                  <div className="text-[20px] font-semibold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    Section Heading
                  </div>
                  <div className="text-[15px] font-medium text-[#3a3a3a]" style={{ fontFamily: "Inter, sans-serif" }}>
                    Subheading for supporting detail
                  </div>
                  <div className="text-[14px] leading-relaxed text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>
                    Body text — descriptions and readable paragraphs balancing traditional identity with modern clarity.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — LOGO + UI ELEMENTS */}
          <div ref={rightRef} className={`space-y-12 transition-all duration-1000 delay-300 ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Identity */}
            <div>
              <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
                Logo & Brand Mark
              </h3>
              <div className="flex min-h-[200px] items-center justify-center rounded-xl border bg-white p-8" style={{ borderColor: `${accent}25` }}>
                <div className="text-center">
                  {section.logoImage ? (
                    <img
                      src={section.logoImage}
                      alt={section.logoName || "Brand logo"}
                      className="mx-auto h-28 w-28 rounded-2xl object-contain shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)]"
                    />
                  ) : (
                    section.logoInitial && (
                      <div className="text-[56px] font-bold leading-none" style={{ color: accent, fontFamily: "Hanken Grotesk, sans-serif" }}>
                        {section.logoInitial}
                      </div>
                    )
                  )}
                  {section.logoName && (
                    <div className="mt-4 text-[14px] font-medium text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>
                      {section.logoName}
                    </div>
                  )}
                  {section.logoTagline && (
                    <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.15em]" style={{ color: accent, fontFamily: "Inter, sans-serif" }}>
                      {section.logoTagline}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* UI Elements */}
            <div>
              <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
                UI Elements & Accents
              </h3>
              <div className="space-y-4">
                {/* Buttons */}
                <div className="rounded-xl border bg-white p-5" style={{ borderColor: `${accent}25` }}>
                  <div className="mb-4 text-[11px] uppercase tracking-[0.15em] text-[#888888]">Buttons</div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      className="rounded-lg px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: accent }}
                    >
                      Explore Ashrams
                    </button>
                    <button
                      className="rounded-lg border-2 bg-white px-5 py-2.5 text-[13px] font-semibold transition-colors hover:text-white"
                      style={{ borderColor: accent, color: accent }}
                    >
                      View Gallery
                    </button>
                  </div>
                </div>

                {/* Iconography + Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border bg-white p-5" style={{ borderColor: `${accent}25` }}>
                    <div className="mb-4 text-[11px] uppercase tracking-[0.15em] text-[#888888]">Iconography</div>
                    <div className="flex gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full" style={{ backgroundColor: `${accent}14` }}>
                        <svg className="h-5 w-5" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="4" />
                          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                        </svg>
                      </div>
                      <div className="grid h-10 w-10 place-items-center rounded-full" style={{ backgroundColor: `${accent}14` }}>
                        <svg className="h-5 w-5" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-[12px] text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>Spiritual & informational indicators</div>
                  </div>

                  <div className="rounded-xl border bg-white p-5" style={{ borderColor: `${accent}25` }}>
                    <div className="mb-4 text-[11px] uppercase tracking-[0.15em] text-[#888888]">Cards</div>
                    <div className="space-y-2">
                      <div className="rounded-lg border p-2.5" style={{ borderColor: `${accent}30` }}>
                        <div className="text-[11px] font-bold" style={{ color: accent }}>Chulkana Dham</div>
                        <div className="mt-1 text-[10px] text-[#999999]">Panipat, Haryana</div>
                      </div>
                      <div className="rounded-lg border p-2.5" style={{ borderColor: `${accent}30` }}>
                        <div className="text-[11px] font-bold" style={{ color: accent }}>Shri Shyam Akhada Ashram</div>
                        <div className="mt-1 text-[10px] text-[#999999]">Haridwar, Uttarakhand</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image treatment */}
                <div className="rounded-xl border bg-white p-5" style={{ borderColor: `${accent}25` }}>
                  <div className="mb-4 text-[11px] uppercase tracking-[0.15em] text-[#888888]">Image Treatment</div>
                  <div
                    className="h-16 rounded-lg"
                    style={{ background: `linear-gradient(90deg, ${accent}30, #6B1F1A40, ${accent}15)` }}
                  />
                  <div className="mt-3 text-[12px] text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>Large devotional imagery & location visuals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}30, transparent)` }}
      />
    </section>
  );
}

export default BrandIdentitySection;
