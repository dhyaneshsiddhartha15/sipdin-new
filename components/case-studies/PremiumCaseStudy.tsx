"use client";

/**
 * PremiumCaseStudy - Universal premium case study layout for all projects
 * Features: hero, logo, project info, sections with alternating layouts, parallax images
 */

import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/caseStudies";

// === UNSPLASH IMAGES (TEMPORARY PLACEHOLDERS) ===
const UNSPLASH_IMAGES = {
  hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  showcase: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80",
  gallery1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
  gallery2: "https://images.unsplash.com/photo-1610049521610-1d3d3ef254b9?w=800&q=80",
  gallery3: "https://images.unsplash.com/photo-1621600411688-4be93cd685f6?w=1000&q=80",
  gallery4: "https://images.unsplash.com/photo-1609949848964-4cf4eb72b0d8?w=800&q=80",
  feature1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80",
  feature2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  feature3: "https://images.unsplash.com/photo-1556742502-ec7370e76d11?w=1000&q=80",
  feature4: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80",
  feature5: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=80",
  feature6: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  feature7: "https://images.unsplash.com/photo-1497366216548-3bbb26053514?w=1000&q=80",
};

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

// === SECTION COMPONENTS ===

// HERO SECTION
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
              src={study.slug === "ritm-hospitality-institute-website" ? "/case-study/RITM/RITM-2.png" : (study.heroImage || UNSPLASH_IMAGES.hero)}
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

// RITM IMAGE SHOWCASE SECTION
function RITMImageSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="relative bg-white pb-16 ml-0 mr-0">
      <div
        ref={ref}
        className={`grid grid-cols-2 gap-0 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* LEFT IMAGE - RITM-1.png */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="/case-study/RITM/RITM-1.png"
            alt="RITM Hospitality Institute"
            className="h-full w-full object-contain"
            style={{ maxHeight: "800px" }}
          />
        </div>

        {/* RIGHT IMAGE - RITM-3.png */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="/case-study/RITM/RITM-3.png"
            alt="RITM Campus Life"
            className="h-full w-full object-contain"
            style={{ maxHeight: "800px" }}
          />
        </div>
      </div>
    </section>
  );
}

// PROJECT INFORMATION GRID
function ProjectInfoSection({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-white pb-24">
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
              {study.product}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CONTENT SECTIONS RENDERER
function ContentSections({ study }: { study: CaseStudy }) {
  return (
    <>
      {study.sections.map((section, sectionIndex) => {
        const [ref, isVisible] = useScrollReveal();
        const isEven = sectionIndex % 2 === 0;

        if (section.type === "text") {
          return (
            <section key={sectionIndex} className={`py-24 ${isEven ? "bg-white" : "bg-[#fafafa]"}`}>
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
                  {section.body.map((p, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-[#555555] md:text-[18px]" style={{ fontFamily: "Inter, sans-serif" }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.type === "list") {
          const [imgRef, imgVisible] = useScrollReveal();

          return (
            <section key={sectionIndex} className={`py-24 ${isEven ? "bg-white" : "bg-[#fafafa]"}`}>
              <div className="mx-auto max-w-[1400px] px-6 md:px-12">
                <div className={`flex flex-col gap-12 lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Content Side */}
                  <div
                    ref={ref}
                    className={`flex-1 transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                      {section.items.map((it, i) => (
                        <li key={i} className="flex gap-4">
                          <span
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[15px] font-exabold text-white"
                            style={{ background: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="pt-1">
                            {it.label && <span className="font-bold text-[#1A1A1A]">{it.label}: </span>}
                            {it.text && <span className="font-medium text-[#3a3a3a]">{it.text}</span>}
                            {it.sub && (
                              <ul className="mt-3 space-y-2">
                                {it.sub.map((s, j) => (
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
                    ref={imgRef}
                    className={`flex-1 transition-all duration-1000 delay-200 ${
                      imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="overflow-hidden rounded-3xl">
                      <img
                        src={UNSPLASH_IMAGES[`feature${(sectionIndex % 7) + 1}` as keyof typeof UNSPLASH_IMAGES]}
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

        if (section.type === "image") {
          return (
            <section key={sectionIndex} className="bg-[#fafafa] py-24">
              <div
                ref={ref}
                className={`mx-auto max-w-[1400px] px-6 md:px-12 transition-all duration-1000 ${
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
                <div className="grid gap-6 sm:grid-cols-2">
                  {section.images.map((img) => (
                    <figure key={img.src} className="overflow-hidden rounded-2xl border bg-[#faf7f0]" style={{ borderColor: "#0f1728/10" }}>
                      <img src={img.src} alt={img.caption || "Case study visual"} className="h-auto w-full object-contain" loading="lazy" />
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

        if (section.type === "table") {
          return (
            <section key={sectionIndex} className={`py-24 ${isEven ? "bg-white" : "bg-[#fafafa]"}`}>
              <div
                ref={ref}
                className={`mx-auto max-w-[1400px] px-6 md:px-12 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-[28px] font-bold leading-tight text-[#1A1A1A]" style={{ color: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}>
                  {section.heading}
                </h2>
                <div className="mt-6 overflow-x-auto rounded-2xl border">
                  <table className="w-full min-w-[560px] border-collapse text-left text-[16px]" style={{ fontFamily: "Inter, sans-serif", borderColor: "#0f1728/12" }}>
                    <thead>
                      <tr style={{ background: `${study.accent}14` }}>
                        {section.columns.map((c, i) => (
                          <th
                            key={i}
                            className="p-4 text-[14px] font-exabold uppercase tracking-wide"
                            style={i === section.columns.length - 1 ? { color: study.accent } : { color: "#1a1a1a" }}
                          >
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, ri) => (
                        <tr key={ri} style={{ borderColor: "#0f1728/10" }}>
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className={`p-4 align-top ${ci === 0 ? "font-bold text-fg" : ci === row.length - 1 ? "font-semibold text-fg" : "font-medium text-[#555]"}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          );
        }

        // Quote section
        return (
          <section key={sectionIndex} className="bg-[#fafafa] py-24">
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
      })}
    </>
  );
}

// QUOTE SECTION (if separate)
function QuoteSection({ study }: { study: CaseStudy }) {
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
          Transforming digital vision into reality
        </p>
        <div className="mt-6 text-[18px] font-bold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          {study.title}
        </div>
      </div>
    </section>
  );
}

// === MAIN COMPONENT ===
export default function PremiumCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <main className="bg-white">
      <HeroSection study={study} />
      {study.slug === "ritm-hospitality-institute-website" && <RITMImageSection />}
      <ProjectInfoSection study={study} />
      <ContentSections study={study} />
      <QuoteSection study={study} />
    </main>
  );
}
