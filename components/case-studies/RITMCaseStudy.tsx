"use client";

/**
 * RITMCaseStudy — Premium editorial case study layout for RITM Hospitality Institute
 * Features: custom hero with dual images, large showcases, alternating feature layouts, brand identity
 */

import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/caseStudies";

// === ANIMATION HOOK ===
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

// === RITM BRAND IDENTITY SHOWCASE SECTION ===
function RITMBrandIdentitySection() {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [headingRef, headingVisible] = useScrollReveal();
  const [paletteRef, paletteVisible] = useScrollReveal();
  const [typographyRef, typographyVisible] = useScrollReveal();
  const [logoRef, logoVisible] = useScrollReveal();

  // RITM brand colors - hospitality education theme
  const BRAND_COLORS = [
    { name: "Hospitality Teal", hex: "#0E8A80", description: "Primary brand color" },
    { name: "Professional Navy", hex: "#1E3A5A", description: "Trust & authority" },
    { name: "Warm Beige", hex: "#F5F1E8", description: "Background surface" },
    { name: "Gold Accent", hex: "#C9A961", description: "Premium touch" },
    { name: "Slate Grey", hex: "#4A5568", description: "Supportive tone" },
    { name: "Deep Charcoal", hex: "#1A1A1A", description: "Primary text" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F1E8] py-32 overflow-hidden"
    >
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-conic-gradient(from 0deg, #0E8A80 0deg, #0E8A80 0.5deg, transparent 0.5deg, transparent 45deg)`,
        backgroundSize: '800px 800px',
        filter: 'blur(1px)'
      }} />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div
          ref={headingRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0E8A80]" style={{ fontFamily: "Inter, sans-serif" }}>
            Brand Identity
          </span>
          <h2 className="mt-6 text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            A Professional Identity,
            <br />
            Built for Excellence
          </h2>
          <p className="mt-6 text-[16px] text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            RITM's visual language reflects professionalism and excellence in hospitality education — preparing students for global careers.
          </p>
        </div>

        {/* MAIN GRID - DESIGN SYSTEM */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">

          {/* LEFT COLUMN */}
          <div className="space-y-16">

            {/* COLOR PALETTE */}
            <div
              ref={paletteRef}
              className={`transition-all duration-1000 delay-200 ${
                paletteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Color Palette
              </h3>
              <p className="text-[14px] text-[#666666] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Professional tones that communicate trust, excellence, and hospitality industry standards.
              </p>

              {/* Color swatches grid */}
              <div className="grid grid-cols-3 gap-4">
                {BRAND_COLORS.map((color, index) => (
                  <div key={color.hex} className="space-y-2">
                    {/* Color swatch */}
                    <div
                      className="h-24 rounded-lg shadow-sm transition-transform hover:scale-105 duration-300"
                      style={{
                        backgroundColor: color.hex,
                        border: color.hex === "#F5F1E8" ? "1px solid #E5E5E5" : "none"
                      }}
                    />
                    {/* Color info */}
                    <div>
                      <div className="text-[12px] font-medium text-[#1A1A1A]">{color.name}</div>
                      <div className="text-[11px] text-[#888888] font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TYPOGRAPHY */}
            <div
              ref={typographyRef}
              className={`transition-all duration-1000 delay-300 ${
                typographyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Typography
              </h3>
              <p className="text-[14px] text-[#666666] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Clean, professional typography ensuring clarity and authority across all communications.
              </p>

              {/* Typography samples */}
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="space-y-6">
                  {/* Primary typeface */}
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-2">Primary Typeface</div>
                    <div className="text-[24px] text-[#1A1A1A] leading-relaxed" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      Aa Bb Cc Dd
                    </div>
                    <div className="text-[16px] text-[#1A1A1A] mt-2" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                    <div className="text-[14px] text-[#666666] mt-1" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      abcdefghijklmnopqrstuvwxyz
                    </div>
                  </div>

                  {/* Typography hierarchy */}
                  <div className="pt-6 border-t border-[#F5F5F5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-3">Typography Hierarchy</div>
                    <div className="space-y-3">
                      <div className="text-[32px] font-bold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                        Heading
                      </div>
                      <div className="text-[20px] font-semibold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                        Subheading
                      </div>
                      <div className="text-[14px] text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>
                        Body text - Regular paragraph for content and descriptions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-16">

            {/* LOGO */}
            <div
              ref={logoRef}
              className={`transition-all duration-1000 delay-400 ${
                logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Institute Identity
              </h3>
              <p className="text-[14px] text-[#666666] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                A professional mark representing RITM's commitment to excellence in hospitality education.
              </p>

              {/* Logo display */}
              <div className="bg-white rounded-xl p-8 border border-[#E5E5E5] flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="text-[48px] font-bold text-[#0E8A80]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    RITM
                  </div>
                  <div className="text-[14px] text-[#666666] mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    Raboche Institute of Technology & Management
                  </div>
                </div>
              </div>
            </div>

            {/* UI ACCENTS & ELEMENTS */}
            <div className={`transition-all duration-1000 delay-500 ${
              logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                UI Elements & Accents
              </h3>

              {/* UI elements grid */}
              <div className="space-y-4">
                {/* Buttons */}
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                  <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Button Style</div>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-[#0E8A80] text-white text-[14px] font-semibold rounded-lg hover:bg-[#0c756c] transition-colors">
                      Apply Now
                    </button>
                    <button className="px-6 py-3 bg-white text-[#0E8A80] text-[14px] font-semibold rounded-lg border-2 border-[#0E8A80] hover:bg-[#0E8A80] hover:text-white transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Iconography & Borders */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Iconography</div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0E8A80]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#0E8A80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#0E8A80]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#0E8A80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Professional education icons</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Borders & Shapes</div>
                    <div className="space-y-2">
                      <div className="h-8 rounded-lg border-2 border-[#0E8A80]/20"></div>
                      <div className="h-8 rounded-full border-2 border-[#0E8A80]/30"></div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Clean rounded corners</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0E8A80]/20 to-transparent" />
    </section>
  );
}

// === RITM IMAGE SHOWCASE SECTION ===
function RITMImageSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="relative bg-[#FAF7F6]">
      <div
        ref={ref}
        className={`flex justify-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* RITM-1.png */}
        <div className="w-full max-w-[1000px] overflow-hidden rounded-3xl">
          <img
            src="/case-study/RITM/RITM-1.png"
            alt="RITM Hospitality Institute"
            className="h-full w-full object-contain"
            style={{ maxHeight: "800px" }}
          />
        </div>
      </div>
    </section>
  );
}

// === HERO SECTION ===
function HeroSection({ study }: { study: CaseStudy }) {
  const [titleRef, titleVisible] = useScrollReveal();
  const [imageRef, imageVisible] = useScrollReveal();

  return (
    <section className="relative bg-[#fafafa] pt-24 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT - Project Info */}
          <div
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ borderColor: study.accent, color: study.accent }}>
              {study.tag}
            </span>
            <h1 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A] md:text-[48px] lg:text-[56px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              {study.title}
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-[#555555] md:text-[18px]" style={{ fontFamily: "Inter, sans-serif" }}>
              {study.description}
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              {study.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[28px] font-bold leading-none" style={{ color: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[12px] font-medium uppercase tracking-wider text-[#888888]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Large Image */}
          <div
            ref={imageRef}
            className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${
              imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src="/case-study/RITM/RITM-3.png"
              alt={study.title}
              className="h-full w-full object-contain"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// === PROJECT INFORMATION GRID ===
function ProjectInfoSection({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-white pt-16 pb-24 md:pt-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg" style={{ borderColor: `${study.accent}20` }}>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888888]" style={{ fontFamily: "Inter, sans-serif" }}>
              Industry
            </div>
            <div className="mt-3 text-[15px] font-medium leading-snug text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
              {study.product}
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg" style={{ borderColor: `${study.accent}20` }}>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888888]" style={{ fontFamily: "Inter, sans-serif" }}>
              Services
            </div>
            <div className="mt-3 text-[15px] font-medium leading-snug text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
              Full Digital Solution
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg" style={{ borderColor: `${study.accent}20` }}>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888888]" style={{ fontFamily: "Inter, sans-serif" }}>
              Timeline
            </div>
            <div className="mt-3 text-[15px] font-medium leading-snug text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
              2024
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg" style={{ borderColor: `${study.accent}20` }}>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888888]" style={{ fontFamily: "Inter, sans-serif" }}>
              Platform
            </div>
            <div className="mt-3 text-[15px] font-medium leading-snug text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
              Next.js
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// === CONTENT SECTION COMPONENTS ===

function TextSection({ section, study, isEven }: { section: any; study: CaseStudy; isEven: boolean }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className={`py-24 ${isEven ? "bg-white" : "bg-[#fafafa]"}`}>
      <div
        ref={ref}
        className={`mx-auto max-w-[1400px] px-6 md:px-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-[28px] font-bold leading-tight text-[#1A1A1A] md:text-[36px]" style={{ color: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}>
          {section.heading}
        </h2>
        <div className="mt-8 space-y-6">
          {section.body.map((p: string, i: number) => (
            <p key={i} className="text-[16px] leading-relaxed text-[#555555] md:text-[18px]" style={{ fontFamily: "Inter, sans-serif" }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListSection({ section, study, isEven }: { section: any; study: CaseStudy; isEven: boolean }) {
  const [contentRef, contentVisible] = useScrollReveal();
  const [imageRef, imageVisible] = useScrollReveal();

  return (
    <section className={`py-24 ${isEven ? "bg-white" : "bg-[#fafafa]"}`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className={`flex flex-col gap-12 lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""}`}>
          {/* Content Side */}
          <div
            ref={contentRef}
            className={`flex-1 transition-all duration-1000 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: study.accent, fontFamily: "Inter, sans-serif" }}>
              {section.heading}
            </span>

            {section.intro && (
              <p className="mt-4 text-[16px] leading-relaxed text-[#555555] md:text-[18px]" style={{ fontFamily: "Inter, sans-serif" }}>
                {section.intro}
              </p>
            )}

            <ol className="mt-8 space-y-6">
              {section.items.map((it: any, i: number) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[15px] font-bold text-white"
                    style={{ background: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    {it.label && <span className="font-bold text-[#1A1A1A]">{it.label}: </span>}
                    {it.text && <span className="font-medium text-[#3a3a3a]">{it.text}</span>}
                    {it.sub && (
                      <ul className="mt-3 space-y-2">
                        {it.sub.map((s: string, j: number) => (
                          <li key={j} className="flex items-start gap-3 text-[15px] font-medium text-[#444]">
                            <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full" style={{ background: study.accent }} />
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {section.note && (
              <div
                className="mt-8 rounded-xl border-l-4 px-5 py-4 italic"
                style={{ borderColor: study.accent, background: `${study.accent}12`, fontFamily: "Inter, sans-serif" }}
              >
                <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
                  {section.note}
                </p>
              </div>
            )}
          </div>

          {/* Image Side */}
          <div
            ref={imageRef}
            className={`flex-1 transition-all duration-1000 delay-200 ${
              imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/case-study/RITM/1.jpg"
                alt={section.heading}
                className="h-auto w-full object-cover"
                style={{ minHeight: "400px", maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageSection({ section, study }: { section: any; study: CaseStudy }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="bg-white py-0">
      <div
        ref={ref}
        className={`mx-auto max-w-[1800px] px-6 md:px-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {section.heading && (
          <h2 className="mb-6 text-[28px] font-bold leading-tight text-[#1A1A1A]" style={{ color: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}>
            {section.heading}
          </h2>
        )}
        {section.intro && (
          <p className="mb-6 text-[16px] leading-relaxed text-[#555555] md:text-[18px]" style={{ fontFamily: "Inter, sans-serif" }}>
            {section.intro}
          </p>
        )}
        <div className="grid gap-0 sm:grid-cols-1">
          {section.images.map((img: any, i: number) => (
            <figure key={i} className="overflow-hidden">
              <img src={img.src} alt={img.caption || "Case study visual"} className="h-auto w-full object-contain" loading="lazy" style={{ maxHeight: "1000px" }} />
              {img.caption && (
                <figcaption className="p-3 text-center text-[13px] italic text-[#666]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection({ section, study }: { section: any; study: CaseStudy }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="bg-[#fafafa] py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[900px] px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl text-[30px] font-bold text-white shadow-lg" style={{ background: study.accent }}>
          &rdquo;
        </span>
        <blockquote className="mt-6">
          <p className="mx-auto max-w-2xl text-[21px] font-semibold italic leading-relaxed text-[#1A1A1A] md:text-[24px]" style={{ fontFamily: "Inter, sans-serif" }}>
            &ldquo;{section.text}&rdquo;
          </p>
          <figcaption className="mt-6">
            <span className="block text-[18px] font-bold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              {section.name}
            </span>
            <span className="mt-1 block text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: study.accent, fontFamily: "Geist, sans-serif" }}>
              {section.role}
            </span>
          </figcaption>
        </blockquote>
      </div>
    </section>
  );
}

// === CONTENT SECTIONS RENDERER ===
function ContentSections({ study }: { study: CaseStudy }) {
  return (
    <>
      {study.sections.map((section, sectionIndex) => {
        const isEven = sectionIndex % 2 === 0;

        if (section.type === "text") {
          return <TextSection key={sectionIndex} section={section} study={study} isEven={isEven} />;
        }

        if (section.type === "list") {
          return <ListSection key={sectionIndex} section={section} study={study} isEven={isEven} />;
        }

        if (section.type === "image") {
          return <ImageSection key={sectionIndex} section={section} study={study} />;
        }

        // Quote section
        return <QuoteSection key={sectionIndex} section={section} study={study} />;
      })}
    </>
  );
}

// === DEFAULT QUOTE SECTION ===
function DefaultQuoteSection({ study }: { study: CaseStudy }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="bg-[#fafafa] py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[900px] px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8 text-[64px] font-bold leading-none" style={{ color: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}>{" "}</div>
        <p className="text-[20px] font-semibold italic leading-relaxed text-[#1A1A1A] md:text-[28px]" style={{ fontFamily: "Inter, sans-serif" }}>
          Transforming hospitality education into digital excellence
        </p>
        <div className="mt-6 text-[18px] font-bold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          {study.title}
        </div>
      </div>
    </section>
  );
}

// === MAIN COMPONENT ===
interface RITMCaseStudyProps {
  study: CaseStudy;
}

export default function RITMCaseStudy({ study }: RITMCaseStudyProps) {
  return (
    <main className="bg-white">
      <HeroSection study={study} />
      <RITMImageSection />
      <ProjectInfoSection study={study} />
      <ContentSections study={study} />
      <DefaultQuoteSection study={study} />
      <RITMBrandIdentitySection />
    </main>
  );
}
