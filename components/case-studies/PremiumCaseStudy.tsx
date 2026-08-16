"use client";

/**
 * PremiumCaseStudy - Universal premium case study layout for all projects
 * Features: hero, logo, project info, sections with alternating layouts, parallax images
 */

import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/caseStudies";
import JourneyTimelineSection from "./JourneyTimelineSection";

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

  // Check if this is Wafeeq case study to hide image and show background
  const isWafeeq = study.slug === "wafeeq-inclusive-digital-learning";

  return (
    <section
      className={`relative pt-24 md:pt-32 ${isWafeeq ? "bg-repeat" : "bg-[#fafafa]"}`}
      style={isWafeeq ? {
        backgroundImage: "url('/case-study/wafeeq/3.png')",
        backgroundSize: "15%",
        backgroundPosition: "center",
        backgroundRepeat: "repeat"
      } : {}}
    >
      {/* Overlay for Wafeeq to make text readable */}
      {isWafeeq && (
        <div className="absolute inset-0 bg-white/92" />
      )}

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 md:pb-16 relative z-10">
        <div className={`grid gap-12 ${!isWafeeq ? "lg:grid-cols-2 lg:gap-16" : "lg:grid-cols-1"}`}>
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

          {/* RIGHT - Large Image - Hide for Wafeeq */}
          {!isWafeeq && (
            <div
              ref={imageRef}
              className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${
                imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src={study.slug === "ritm-hospitality-institute-website" ? "/case-study/RITM/RITM-2.png" : study.slug === "camera-market-dehradun-photography-e-commerce" ? "/case-study/camera/13.png" : study.slug === "dohabus-qatar-tourism-platform" ? "/case-study/Doha-bus/14.png" : (study.heroImage || UNSPLASH_IMAGES.hero)}
                alt={study.title}
                className="h-full w-full object-contain"
                style={{ minHeight: "400px" }}
              />
            </div>
          )}
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
    <section className="bg-white pt-12 pb-24">
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

// INDIVIDUAL SECTION COMPONENTS TO FIX HOOKS ORDER ISSUE

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

function ListSection({ section, study, isEven, index = 0 }: { section: any; study: CaseStudy; isEven: boolean; index?: number }) {
  const [contentRef, contentVisible] = useScrollReveal();
  const [imageRef, imageVisible] = useScrollReveal();

  // Check if this is a combined Challenge + Solution section
  const isCombinedSection = section.solutionHeading && section.solutionItems;

  // Check if this section should be horizontal timeline (Process & Timeline sections)
  const isHorizontalTimeline = section.heading === "Process & Timeline";

  return (
    <section className={`py-24 ${isEven ? "bg-white" : "bg-[#fafafa]"}`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Horizontal Timeline Layout for Process & Timeline */}
        {isHorizontalTimeline ? (
          <div
            ref={contentRef}
            className={`transition-all duration-1000 ${
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

            {/* Horizontal Timeline */}
            <div className="mt-12">
              {/* Desktop: Horizontal Layout */}
              <div className="hidden md:block">
                {/* Timeline Line */}
                <div className="relative">
                  <div
                    className="absolute top-6 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      backgroundColor: `${study.accent}15`,
                      backgroundImage: `linear-gradient(90deg, ${study.accent}30 0%, ${study.accent}15 50%, ${study.accent}30 100%)`
                    }}
                  />

                  {/* Timeline Steps */}
                  <div className="relative grid grid-cols-5 gap-6">
                    {section.items.map((it: any, i: number) => (
                      <div key={i} className="relative">
                        {/* Number Badge */}
                        <div
                          className="relative z-10 mx-auto w-16 h-10 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: study.accent,
                            boxShadow: `0 4px 15px ${study.accent}25`
                          }}
                        >
                          <span
                            className="text-[12px] font-bold text-white"
                            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* Connector Node */}
                        {i < section.items.length - 1 && (
                          <div
                            className="absolute top-6 left-1/2 w-full h-0.5 transform translate-x-1/2"
                            style={{ backgroundColor: `${study.accent}30` }}
                          >
                            <div
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: study.accent }}
                            />
                          </div>
                        )}

                        {/* Card */}
                        <div
                          className="bg-white rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          style={{
                            borderColor: `${study.accent}20`,
                            minHeight: "160px"
                          }}
                        >
                          {/* Label */}
                          {it.label && (
                            <h3
                              className="text-[14px] font-bold text-[#1A1A1A] mb-2"
                                                              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                            >
                              {it.label}
                            </h3>
                          )}

                          {/* Small accent underline */}
                          <div
                            className="w-6 h-0.5 rounded-full mb-3"
                            style={{ backgroundColor: study.accent }}
                          />

                          {/* Text */}
                          {it.text && (
                            <p
                              className="text-[13px] leading-relaxed text-[#666666]"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              {it.text}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile: Vertical Timeline */}
              <div className="md:hidden">
                <div className="space-y-6">
                  {section.items.map((it: any, i: number) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: study.accent }}
                        >
                          <span
                            className="text-[12px] font-bold text-white"
                            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        {i < section.items.length - 1 && (
                          <div
                            className="w-0.5 h-full my-2"
                            style={{ backgroundColor: `${study.accent}30` }}
                          />
                        )}
                      </div>

                      <div
                        className="flex-1 bg-white rounded-xl p-4 border"
                        style={{ borderColor: `${study.accent}20` }}
                      >
                        {it.label && (
                          <h3
                            className="text-[14px] font-bold text-[#1A1A1A] mb-1"
                            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                          >
                            {it.label}
                          </h3>
                        )}
                        {it.text && (
                          <p
                            className="text-[13px] leading-relaxed text-[#666666]"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {it.text}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note */}
            {section.note && (
              <div
                className="mt-12 rounded-xl border-l-4 px-5 py-4 italic"
                style={{ borderColor: study.accent, background: `${study.accent}12`, fontFamily: "Inter, sans-serif" }}
              >
                <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
                  {section.note}
                </p>
              </div>
            )}
          </div>
        ) : isCombinedSection ? (
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Challenge Side */}
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

            {/* Solution Side */}
            <div
              ref={imageRef}
              className={`flex-1 transition-all duration-1000 delay-200 ${
                imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="sticky top-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: study.accent, fontFamily: "Inter, sans-serif" }}>
                  {section.solutionHeading}
                </span>

                {section.solutionIntro && (
                  <p className="mt-4 text-[16px] leading-relaxed text-[#555555] md:text-[18px]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {section.solutionIntro}
                  </p>
                )}

                <ol className="mt-8 space-y-6">
                  {section.solutionItems.map((it: any, i: number) => (
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
              </div>
            </div>
          </div>
        ) : (
          /* Original Layout with Image */
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

            {/* Image Side - Hide for Process & Timeline sections */}
            {!isHorizontalTimeline && (
              <div
                ref={imageRef}
                className={`flex-1 transition-all duration-1000 delay-200 ${
                  imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={UNSPLASH_IMAGES[`feature${(index % 7) + 1}` as keyof typeof UNSPLASH_IMAGES]}
                    alt={section.heading}
                    className="h-auto w-full object-cover"
                    style={{ minHeight: "400px", maxHeight: "500px" }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ImageSection({ section, study }: { section: any; study: CaseStudy }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="bg-white py-0 m-0 p-0">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
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
            <figure key={i} className="overflow-hidden m-0 p-0">
              <div className="w-full" style={{ marginLeft: "0", paddingLeft: "0" }}>
                <img
                  src={img.src}
                  alt={img.caption || "Case study visual"}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                  style={{ maxHeight: "600px", objectFit: "cover" }}
                />
              </div>
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

function TableSection({ section, study, isEven }: { section: any; study: CaseStudy; isEven: boolean }) {
  const [ref, isVisible] = useScrollReveal();

  // Check if this is the Dohabus competition comparison section
  const isDohabusComparison = study.slug === "dohabus-qatar-tourism-platform" && section.heading === "Dohabus vs The Competition";

  return (
    <section className={`relative py-24 ${isEven ? "bg-white" : "bg-[#fafafa]"} ${isDohabusComparison ? "overflow-hidden" : ""}`}>
      {/* Minimal Transportation Background Illustrations - Only for Dohabus comparison */}
      {isDohabusComparison && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle route/road line - left side */}
          <svg
            className="absolute left-0 top-1/4 w-64 h-32 opacity-[0.25]"
            viewBox="0 0 240 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10 80 Q 60 40, 120 60 T 230 50"
              stroke="#0C8A99"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
          </svg>

          {/* Minimal bus outline - top right */}
          <svg
            className="absolute right-8 top-8 w-48 h-24 opacity-[0.20]"
            viewBox="0 0 180 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="20" y="30" width="140" height="50" rx="8" stroke="#0C8A99" strokeWidth="2"/>
            <circle cx="50" cy="82" r="8" stroke="#0C8A99" strokeWidth="2" fill="none"/>
            <circle cx="130" cy="82" r="8" stroke="#0C8A99" strokeWidth="2" fill="none"/>
            <rect x="30" y="38" width="40" height="20" rx="2" stroke="#0C8A99" strokeWidth="1.5" fill="none"/>
            <rect x="80" y="38" width="40" height="20" rx="2" stroke="#0C8A99" strokeWidth="1.5" fill="none"/>
            <rect x="130" y="38" width="20" height="20" rx="2" stroke="#0C8A99" strokeWidth="1.5" fill="none"/>
          </svg>

          {/* Location pin - bottom left */}
          <svg
            className="absolute left-12 bottom-12 w-16 h-20 opacity-[0.20]"
            viewBox="0 0 60 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 30 5 C 17 5, 8 15, 8 28 C 8 45, 30 75, 30 75 C 30 75, 52 45, 52 28 C 52 15, 43 5, 30 5 Z"
              stroke="#0C8A99"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="30" cy="28" r="8" stroke="#0C8A99" strokeWidth="2" fill="none"/>
          </svg>

          {/* Subtle curved route line - bottom right */}
          <svg
            className="absolute right-4 bottom-1/3 w-56 h-28 opacity-[0.18]"
            viewBox="0 0 200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10 70 C 40 70, 60 30, 100 40 S 160 20, 190 30"
              stroke="#0C8A99"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />
            <circle cx="100" cy="40" r="3" fill="#0C8A99" opacity="0.4"/>
            <circle cx="60" cy="52" r="2" fill="#0C8A99" opacity="0.3"/>
            <circle cx="140" cy="28" r="2" fill="#0C8A99" opacity="0.3"/>
          </svg>

          {/* Small bus icon - top left */}
          <svg
            className="absolute left-8 top-20 w-12 h-12 opacity-[0.15]"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="16" width="40" height="20" rx="4" stroke="#0C8A99" strokeWidth="2"/>
            <circle cx="14" cy="38" r="3" stroke="#0C8A99" strokeWidth="2" fill="none"/>
            <circle cx="34" cy="38" r="3" stroke="#0C8A99" strokeWidth="2" fill="none"/>
          </svg>

          {/* Compass/navigation element - top right corner */}
          <svg
            className="absolute right-16 top-1/4 w-16 h-16 opacity-[0.22]"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="24" stroke="#0C8A99" strokeWidth="2" fill="none"/>
            <path d="M 32 8 L 32 56" stroke="#0C8A99" strokeWidth="1.5"/>
            <path d="M 8 32 L 56 32" stroke="#0C8A99" strokeWidth="1.5"/>
            <circle cx="32" cy="32" r="4" fill="#0C8A99"/>
            <path d="M 32 12 L 35 20 L 32 32 L 29 20 Z" fill="#0C8A99" opacity="0.6"/>
          </svg>

          {/* Map grid pattern - middle area */}
          <svg
            className="absolute left-1/4 top-1/2 w-32 h-32 opacity-[0.18]"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="10" width="108" height="108" stroke="#0C8A99" strokeWidth="1" fill="none"/>
            <path d="M 10 42 L 118 42" stroke="#0C8A99" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M 10 74 L 118 74" stroke="#0C8A99" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M 10 106 L 118 106" stroke="#0C8A99" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M 42 10 L 42 118" stroke="#0C8A99" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M 74 10 L 74 118" stroke="#0C8A99" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M 106 10 L 106 118" stroke="#0C8A99" strokeWidth="1" strokeDasharray="4 4"/>
            <circle cx="42" cy="42" r="3" fill="#0C8A99" opacity="0.4"/>
            <circle cx="74" cy="74" r="3" fill="#0C8A99" opacity="0.4"/>
            <circle cx="106" cy="42" r="3" fill="#0C8A99" opacity="0.4"/>
          </svg>

          {/* Directional road sign - bottom right */}
          <svg
            className="absolute right-20 bottom-16 w-14 h-20 opacity-[0.20]"
            viewBox="0 0 56 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="8" width="40" height="64" rx="4" stroke="#0C8A99" strokeWidth="2" fill="none"/>
            <path d="M 28 20 L 28 35" stroke="#0C8A99" strokeWidth="2" strokeLinecap="round"/>
            <path d="M 23 30 L 28 35 L 33 30" stroke="#0C8A99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="28" cy="50" r="6" stroke="#0C8A99" strokeWidth="1.5" fill="none"/>
            <circle cx="28" cy="66" r="6" stroke="#0C8A99" strokeWidth="1.5" fill="none"/>
          </svg>

          {/* Transportation wheel element - left middle */}
          <svg
            className="absolute left-16 top-2/3 w-12 h-12 opacity-[0.18]"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="16" stroke="#0C8A99" strokeWidth="2" fill="none"/>
            <circle cx="24" cy="24" r="8" stroke="#0C8A99" strokeWidth="1.5" fill="none"/>
            <circle cx="24" cy="24" r="3" fill="#0C8A99"/>
            <path d="M 24 8 L 24 12" stroke="#0C8A99" strokeWidth="2"/>
            <path d="M 40 24 L 36 24" stroke="#0C8A99" strokeWidth="2"/>
            <path d="M 24 40 L 24 36" stroke="#0C8A99" strokeWidth="2"/>
            <path d="M 8 24 L 12 24" stroke="#0C8A99" strokeWidth="2"/>
          </svg>

          {/* Route arrow path - top center */}
          <svg
            className="absolute left-1/2 top-12 -translate-x-1/2 w-20 h-8 opacity-[0.15]"
            viewBox="0 0 80 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 10 16 L 60 16" stroke="#0C8A99" strokeWidth="2" strokeDasharray="6 4"/>
            <path d="M 55 11 L 60 16 L 55 21" stroke="#0C8A99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <circle cx="25" cy="16" r="2" fill="#0C8A99"/>
            <circle cx="45" cy="16" r="2" fill="#0C8A99"/>
          </svg>
        </div>
      )}

      <div
        ref={ref}
        className={`mx-auto max-w-[1400px] px-6 md:px-12 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-[28px] font-bold leading-tight text-[#1A1A1A] mb-6" style={{ color: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}>
          {section.heading}
        </h2>
        <div className={`overflow-x-auto rounded-2xl border ${isDohabusComparison ? "shadow-lg bg-white/80 backdrop-blur-sm" : ""}`}>
          <table className="w-full min-w-[560px] border-collapse text-left text-[16px]" style={{ fontFamily: "Inter, sans-serif", borderColor: "#0f1728/12" }}>
            <thead>
              <tr style={{ background: `${study.accent}14` }}>
                {section.columns.map((c: string, i: number) => (
                  <th
                    key={i}
                    className="p-4 text-[14px] font-bold uppercase tracking-wide"
                    style={i === section.columns.length - 1 ? { color: study.accent } : { color: "#1a1a1a" }}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row: string[], ri: number) => (
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

// CONTENT SECTIONS RENDERER
function ContentSections({ study }: { study: CaseStudy }) {
  return (
    <>
      {study.sections.map((section, sectionIndex) => {
        const isEven = sectionIndex % 2 === 0;

        if (section.type === "text") {
          return <TextSection key={sectionIndex} section={section} study={study} isEven={isEven} />;
        }

        if (section.type === "list") {
          return <ListSection key={sectionIndex} section={section} study={study} isEven={isEven} index={sectionIndex} />;
        }

        if (section.type === "image") {
          return <ImageSection key={sectionIndex} section={section} study={study} />;
        }

        if (section.type === "table") {
          return <TableSection key={sectionIndex} section={section} study={study} isEven={isEven} />;
        }

        if (section.type === "journey") {
          return <JourneyTimelineSection key={sectionIndex} {...section} accent={study.accent} />;
        }

        // Quote section
        return <QuoteSection key={sectionIndex} section={section} study={study} />;
      })}
    </>
  );
}

// QUOTE SECTION (if separate)
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
      {/* Skip default quote section for Dohabus and Camera Market */}
      {study.slug !== "dohabus-qatar-tourism-platform" && study.slug !== "camera-market-dehradun-photography-e-commerce" && <DefaultQuoteSection study={study} />}
    </main>
  );
}
