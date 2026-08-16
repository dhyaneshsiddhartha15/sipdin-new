"use client";

/**
 * JourneyTimelineSection - Modern horizontal journey timeline component
 * Features: full-width layout, 6-step horizontal timeline, responsive design
 */

import { useEffect, useRef, useState } from "react";
import type { JourneyStep } from "@/lib/caseStudies";

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

// === LUCIDE ICONS ===
const ICONS = {
  compass: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  ),
  "clipboard-check": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <path d="m9 14 2 2 4-4"/>
    </svg>
  ),
  "check-circle": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <path d="m9 11 3 3L22 4"/>
    </svg>
  ),
  "shopping-cart": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1"/>
      <circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  ),
  "refresh-cw": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
      <path d="M21 3v5h-5"/>
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
      <path d="M8 21H3v-5"/>
    </svg>
  )
};

interface JourneyTimelineSectionProps {
  heading: string;
  intro: string;
  steps: JourneyStep[];
  conclusion?: string;
  accent?: string;
}

export default function JourneyTimelineSection({
  heading,
  intro,
  steps,
  conclusion,
  accent = "#1E3A8A"
}: JourneyTimelineSectionProps) {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">

        {/* SECTION HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <span
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em]"
            style={{ color: accent, fontFamily: "Inter, sans-serif" }}
          >
            {heading}
          </span>

          {/* Main Heading */}
          <h2
            className="mt-6 text-[28px] md:text-[36px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            {intro}
          </h2>

          {/* Blue underline accent */}
          <div
            className="mx-auto mt-6 h-0.5 w-24 rounded-full"
            style={{ backgroundColor: accent }}
          />
        </div>

        {/* HORIZONTAL JOURNEY TIMELINE */}
        <div
          ref={timelineRef}
          className={`mb-20 transition-all duration-1000 delay-200 ${
            timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Timeline Container */}
          <div className="relative">

            {/* Desktop: Horizontal Timeline */}
            <div className="hidden lg:block">
              {/* Timeline Line */}
              <div
                className="absolute top-12 left-0 right-0 h-0.5 rounded-full"
                style={{
                  backgroundColor: `${accent}15`,
                  backgroundImage: `linear-gradient(90deg, ${accent}30 0%, ${accent}15 50%, ${accent}30 100%)`
                }}
              />

              {/* Timeline Steps */}
              <div className="relative grid grid-cols-6 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Number Badge */}
                    <div
                      className="relative z-10 mx-auto w-24 h-12 rounded-xl flex items-center justify-center mb-8 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 4px 20px ${accent}30`
                      }}
                    >
                      <span
                        className="text-[14px] font-bold text-white"
                        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Connector Node */}
                    {index < steps.length - 1 && (
                      <div
                        className="absolute top-12 left-1/2 w-full h-0.5 transform translate-x-1/2"
                        style={{ backgroundColor: `${accent}30` }}
                      >
                        {/* Small circular nodes between steps */}
                        <div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                          style={{ backgroundColor: accent }}
                        />
                      </div>
                    )}

                    {/* Card */}
                    <div
                      className="bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                      style={{
                        borderColor: `${accent}20`,
                        minHeight: "220px"
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${accent}10` }}
                      >
                        <div className="text-[#1E3A8A]" style={{ color: accent }}>
                          {ICONS[step.icon as keyof typeof ICONS] || ICONS.compass}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-[16px] font-bold text-[#1A1A1A] mb-2"
                        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                      >
                        {step.title}
                      </h3>

                      {/* Small blue underline */}
                      <div
                        className="w-8 h-0.5 rounded-full mb-3"
                        style={{ backgroundColor: accent }}
                      />

                      {/* Description */}
                      <p
                        className="text-[14px] leading-relaxed text-[#666666]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* Mobile: Vertical Stepper */}
            <div className="md:hidden lg:hidden">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: accent }}
                      >
                        <span
                          className="text-[12px] font-bold text-white"
                          style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                        >
                          {step.number}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className="w-0.5 h-full my-2"
                          style={{ backgroundColor: `${accent}30` }}
                        />
                      )}
                    </div>

                    <div
                      className="flex-1 bg-white rounded-xl p-4 border transition-all duration-300 hover:shadow-md"
                      style={{ borderColor: `${accent}20` }}
                    >
                      <h3
                        className="text-[15px] font-bold text-[#1A1A1A] mb-2"
                        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-[13px] leading-relaxed text-[#666666]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CALLOUT */}
        {conclusion && (
          <div
            ref={cardsRef}
            className={`transition-all duration-1000 delay-400 ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="relative rounded-xl p-6 border-l-4"
              style={{
                backgroundColor: `${accent}05`,
                borderColor: accent,
                borderLeftColor: accent
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: accent }} />
              <p
                className="text-[15px] leading-relaxed text-[#1A1A1A] italic"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {conclusion}
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${accent}20 50%, transparent 100%)`
        }}
      />
    </section>
  );
}