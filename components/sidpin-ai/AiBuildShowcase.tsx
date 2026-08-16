"use client";

/**
 * AiBuildShowcase — "What We Do" services section.
 * AI services we offer.
 */

import { motion } from "framer-motion";
import { Bot, Workflow, Database, Cloud } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AiEcosystemBackground from "./AiEcosystemBackground";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    category: "AI AUTOMATION",
    icon: Bot,
    title: "AI Agents & Chatbots",
    description:
      "Conversational agents trained on your business data for support, sales, and workflows.",
  },
  {
    category: "PROCESS OPTIMIZATION",
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Replace manual repetitive work with intelligent automations that connect your tools 24/7.",
  },
  {
    category: "INTELLIGENCE SYSTEMS",
    icon: Database,
    title: "RAG & Knowledge Systems",
    description:
      "Retrieval-augmented AI grounded in your own data — accurate, citeable, and context-aware.",
  },
  {
    category: "INFRASTRUCTURE",
    icon: Cloud,
    title: "Cloud-Native Foundation",
    description:
      "Managed cloud infrastructure that keeps every AI system fast, secure, and reliable.",
  },
];

export default function AiBuildShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, (context) => {
        const { reduceMotion } = context.conditions as { reduceMotion: boolean };

        // Animate services - smoother entrance for compact cards
        gsap.fromTo(
          ".service-item",
          {
            opacity: 0,
            y: 15,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: reduceMotion ? 0 : 0.08,
            duration: reduceMotion ? 0 : 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".services-grid",
              start: "top 90%",
            },
          }
        );

        return () => {};
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="bg-bg px-[24px] py-[100px] md:px-[80px] relative"
    >
      {/* Ecosystem background */}
      <div className="absolute inset-0 overflow-hidden">
        <AiEcosystemBackground density="light" />
      </div>

      <div className="mx-auto max-w-[1440px] relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4169E1]">
            What We Do
          </span>
          <h2
            className="mt-4 text-[32px] font-bold leading-tight text-white md:text-[40px]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            AI-Powered Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-[16px]">
            Intelligent automation and conversational AI to transform your business.
          </p>
        </div>

        {/* Services Grid - 2x2 Modern Cards */}
        <div className="services-grid mx-auto max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="service-item relative overflow-hidden rounded-2xl bg-white/[0.98] p-5 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_-15px_rgba(65,105,225,0.15)] lg:p-6"
                style={{
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                {/* Category Badge */}
                <div className="mb-3 inline-flex items-center rounded-full bg-[#4169E1]/8 px-2.5 py-1 lg:mb-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4169E1]">
                    {service.category}
                  </span>
                </div>

                {/* Icon - smaller and integrated */}
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4169E1]/12 to-[#4169E1]/6 lg:mb-4 lg:h-10 lg:w-10">
                  <Icon size={16} className="text-[#4169E1] lg:size-[18px]" />
                </div>

                {/* Title - bold and compact */}
                <h3
                  className="text-[15px] font-bold leading-tight text-[#0a0a0a] lg:text-[17px]"
                  style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                >
                  {service.title}
                </h3>

                {/* Description - secondary hierarchy */}
                <p className="mt-2 text-[12px] leading-relaxed text-[#6b7280] lg:mt-3 lg:text-[13px]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
