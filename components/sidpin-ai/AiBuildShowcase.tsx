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

  // GSAP animations removed to eliminate icon popup effects
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // All card animations removed - no more popup effects
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="bg-bg px-[24px] py-[100px] md:px-[80px] relative"
    >
      {/* Ecosystem background removed - no more floating icons */}

      <div className="mx-auto max-w-[1440px] relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4169E1]">
            What We Do
          </span>
          <h2
            className="mt-4 text-[32px] font-bold leading-tight text-black dark:text-white md:text-[40px]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            AI-Powered Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-black/60 dark:text-white/60 md:text-[16px]">
            Intelligent automation and conversational AI to transform your business.
          </p>
        </div>

        {/* Services Grid - 2x2 Modern Cards with Dark Mode */}
        <div className="services-grid mx-auto max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="service-item relative overflow-hidden rounded-2xl bg-white dark:bg-[#0a0a0f] p-6 transition-all duration-300 hover:shadow-[0_12px_40px_-15px_rgba(65,105,225,0.2)] lg:p-8"
                style={{
                  border: "1px solid rgba(0,0,0,0.08) dark:border-transparent",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
                }}
              >
                {/* Category Badge - Enhanced for Dark Mode */}
                <div className="mb-4 inline-flex items-center rounded-full bg-[#4169E1]/10 dark:bg-[#4169E1]/20 px-3 py-1.5 lg:mb-5 border border-[#4169E1]/20 dark:border-[#4169E1]/30">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4169E1] dark:text-[#60a5fa]">
                    {service.category}
                  </span>
                </div>

                {/* Icon - Enhanced for Dark Mode */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4169E1] to-[#3b5dbd] shadow-md lg:mb-5">
                  <Icon size={20} className="text-white" strokeWidth={2} />
                </div>

                {/* Title - Dark Mode Support */}
                <h3
                  className="text-[18px] font-bold leading-tight text-gray-900 dark:text-white lg:text-[20px]"
                  style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                >
                  {service.title}
                </h3>

                {/* Description - Dark Mode Support */}
                <p className="mt-3 text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 lg:mt-4 lg:text-[15px]">
                  {service.description}
                </p>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 via-transparent to-blue-600/5 dark:from-[#4169E1]/10 dark:via-transparent dark:to-blue-600/10 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
