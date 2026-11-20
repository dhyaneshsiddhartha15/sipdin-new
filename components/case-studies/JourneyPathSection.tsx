"use client";

/**
 * JourneyPathSection — compact journey layout: a single tight row of step
 * cards with number chips, icons and a centred conclusion pill.
 * Opt-in per case study: journey section with variant: "path".
 */

import { useEffect, useRef, useState } from "react";
import type { JourneyStep } from "@/lib/caseStudies";
import { ICONS } from "./JourneyTimelineSection";

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

interface JourneyPathSectionProps {
  heading: string;
  intro: string;
  steps: JourneyStep[];
  conclusion?: string;
  accent?: string;
}

export default function JourneyPathSection({
  heading,
  intro,
  steps,
  conclusion,
  accent = "#1E3A8A",
}: JourneyPathSectionProps) {
  const [headRef, headVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();
  const [endRef, endVisible] = useScrollReveal();

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: `linear-gradient(180deg, #ffffff 0%, ${accent}08 18%, ${accent}08 82%, #ffffff 100%)` }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* SECTION HEADER */}
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
            {heading}
          </span>
          <h2
            className="mt-4 text-[24px] md:text-[30px] font-bold leading-[1.15] tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            {intro}
          </h2>
        </div>

        {/* COMPACT STEP CARDS */}
        <div
          ref={cardsRef}
          className={`mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 delay-150 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${accent}20`, boxShadow: `0 2px 14px -6px ${accent}15` }}
            >
              {/* Top accent strip */}
              <div
                className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: accent }}
              />

              {/* Number chip + icon */}
              <div className="flex items-center justify-between">
                <span
                  className="rounded-lg px-2.5 py-1 text-[12px] font-bold text-white"
                  style={{ backgroundColor: accent, fontFamily: "Hanken Grotesk, sans-serif" }}
                >
                  {step.number}
                </span>
                <div style={{ color: accent }}>
                  {ICONS[step.icon as keyof typeof ICONS] || ICONS.compass}
                </div>
              </div>

              {/* Title */}
              <h3
                className="mt-4 text-[15px] font-bold leading-snug text-[#1A1A1A]"
                style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="mt-2 text-[13px] leading-relaxed text-[#666666]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CONCLUSION PILL */}
        {conclusion && (
          <div
            ref={endRef}
            className={`mt-8 flex justify-center transition-all duration-1000 delay-200 ${
              endVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="flex max-w-2xl items-center gap-3 rounded-full border bg-white px-6 py-3"
              style={{ borderColor: `${accent}30` }}
            >
              <span className="h-2 w-2 shrink-0 rotate-45 rounded-[2px]" style={{ backgroundColor: accent }} />
              <p
                className="text-[13px] md:text-[14px] font-medium italic text-[#1A1A1A]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {conclusion}
              </p>
              <span className="h-2 w-2 shrink-0 rotate-45 rounded-[2px]" style={{ backgroundColor: accent }} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
