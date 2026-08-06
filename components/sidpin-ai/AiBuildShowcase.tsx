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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description:
      "Conversational agents that handle support, sales, and internal workflows — trained on your business, not a generic script.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "We replace manual, repetitive work with automations that connect your tools and run in the background, every day.",
  },
  {
    icon: Database,
    title: "RAG & Knowledge Systems",
    description:
      "Retrieval-augmented systems that make your AI accurate and citeable — grounded in your own data, not guesswork.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Infrastructure",
    description:
      "The managed cloud foundation — AWS, Azure, GCP, or DigitalOcean — that keeps every AI system fast, secure, and reliable.",
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

        // Animate services
        gsap.fromTo(
          ".service-item",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: reduceMotion ? 0 : 0.06,
            duration: reduceMotion ? 0 : 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".services-grid",
              start: "top 85%",
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
      className="bg-bg px-[24px] py-[100px] md:px-[80px]"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4169E1]">
            What We Do
          </span>
          <h2
            className="mt-4 text-[34px] font-bold leading-tight text-fg md:text-[46px]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            AI-Powered Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-fg-2">
            Intelligent automation and conversational AI to transform your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid mx-auto max-w-5xl grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="service-item rounded-2xl border border-line bg-surface/50 p-6 transition-all duration-300 hover:border-[#4169E1]/50 hover:bg-surface hover:shadow-[0_12px_40px_-20px_rgba(65,105,225,0.3)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#4169E1]/10">
                  <Icon size={22} className="text-[#4169E1]" />
                </span>
                <h3
                  className="mt-4 text-[18px] font-semibold text-fg"
                  style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-fg-2">
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
