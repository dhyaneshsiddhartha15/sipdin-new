"use client";

/**
 * AiBuildShowcase — "What We Do" services section.
 * 2x2 box grid with gradient-border cards. Theme-aware: light + dark.
 */

import { motion } from "framer-motion";
import { Bot, Workflow, Database, Cloud } from "lucide-react";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

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

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="relative overflow-hidden bg-bg px-[24px] py-[100px] md:px-[80px] dark:bg-[#050816]"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-[380px] w-[640px] rounded-full bg-[#4169e1]/[0.06] blur-[150px] dark:bg-[#4169e1]/[0.14]" />
        <div className="absolute bottom-0 left-1/4 h-[320px] w-[520px] rounded-full bg-[#6e8cff]/[0.04] blur-[150px] dark:bg-[#6e8cff]/[0.09]" />
        {/* Faint dot grid */}
        <div
          className="absolute inset-0 hidden opacity-[0.05] dark:block"
          style={{
            backgroundImage: "radial-gradient(rgba(143,176,255,0.9) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] dark:hidden"
          style={{
            backgroundImage: "radial-gradient(rgba(35,61,146,0.9) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl space-y-4 text-center lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4169e1] dark:text-[#6e8cff]">
            What We Do
          </span>
          <h2
            className="text-[32px] font-bold leading-tight text-fg dark:text-white md:text-[40px]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            AI-Powered Solutions
          </h2>
          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-fg-2 dark:text-white/60 md:text-[16px]">
            Intelligent automation and conversational AI to transform your business.
          </p>
        </motion.div>

        {/* Services Grid - 2x2 gradient-border boxes */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group rounded-2xl p-[1.5px] transition-transform duration-300 hover:-translate-y-2"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(65,105,225,0.55) 0%, rgba(110,140,255,0.22) 45%, rgba(143,176,255,0.30) 100%)",
                }}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
                whileHover={{
                  boxShadow: "0 14px 48px rgba(65,105,225,0.30)",
                }}
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-[14.5px] bg-white p-6 dark:bg-[#0a0f1e] lg:p-7">
                  {/* Ghost icon watermark */}
                  <Icon
                    aria-hidden
                    className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 text-[#4169e1]/[0.06] dark:text-[#6e8cff]/[0.09]"
                    strokeWidth={1.2}
                  />

                  {/* Header row: category */}
                  <div className="relative z-10 mb-5 flex items-start justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4169e1]/80 dark:text-[#8fb0ff]/80">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon tile */}
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl shadow-[0_6px_20px_rgba(65,105,225,0.3)] transition-transform duration-300 group-hover:scale-110 dark:shadow-[0_6px_20px_rgba(65,105,225,0.4)]"
                    style={{ background: "linear-gradient(135deg, #4169e1 0%, #6e8cff 100%)" }}
                  >
                    <Icon size={20} className="text-white" strokeWidth={2} />
                  </div>

                  {/* Title + description */}
                  <h3
                    className="text-[18px] font-bold leading-tight text-fg dark:text-white lg:text-[20px]"
                    style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-fg-2 dark:text-white/60 lg:text-[15px]">
                    {service.description}
                  </p>

                  {/* Footer hairline */}
                  <div className="mt-auto pt-5">
                    <div className="border-t border-line/60 pt-4 dark:border-white/[0.08]">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-2/70 dark:text-white/40">
                        Sidpin AI
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
