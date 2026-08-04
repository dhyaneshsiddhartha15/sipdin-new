"use client";

/**
 * AiCloudCTA — premium full-width CTA closing out the AI + Cloud section.
 * Left: badge, gradient headline, copy, CTA pair, feature chips.
 * Right: the robot photo (public/icons/robot.png).
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Cloud, ShieldCheck, Bot, ArrowRight } from "lucide-react";
import AIConsultationModal from "@/components/contact/AIConsultationModal";

const FEATURES = [
  { label: "AI Automation", Icon: Bot },
  { label: "Cloud Infrastructure", Icon: Cloud },
  { label: "Enterprise Security", Icon: ShieldCheck },
];

export default function AiCloudCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative"
        style={{
          fontFamily: "Inter, -apple-system, sans-serif",
          boxShadow:
            "0 40px 100px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), 0 0 60px -20px rgba(0,184,255,0.15)",
          borderRadius: "32px",
        }}
      >
        <style>{`
          @keyframes acta-drift-a { 0%,100% { transform: translate(-6%,-4%) scale(1); } 50% { transform: translate(5%,6%) scale(1.12); } }
          @keyframes acta-drift-b { 0%,100% { transform: translate(6%,8%) scale(1.05); } 50% { transform: translate(-5%,-6%) scale(0.94); } }
          @keyframes acta-grid-fade { from { opacity: 0; } to { opacity: 1; } }
          @keyframes acta-shimmer { 0% { transform: translateX(-130%) skewX(-12deg); } 100% { transform: translateX(230%) skewX(-12deg); } }
        `}</style>

        {/* Card background — clipped separately so the robot photo can spill past the card edge.
            A lighter layered gradient (not a flat single tone) so the card still reads as an
            elevated surface even when the page itself is dark. */}
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #121B32 0%, #0B111F 45%, #070b14 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "32px",
          }}
        >
          {/* Ambient mesh + glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[10%] -top-[20%] h-[520px] w-[520px]"
            style={{
              background: "radial-gradient(closest-side, rgba(77,38,124,0.16), transparent 70%)",
              filter: "blur(30px)",
              animation: "acta-drift-a 22s ease-in-out infinite",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[8%] -bottom-[15%] h-[560px] w-[560px]"
            style={{
              background: "radial-gradient(closest-side, rgba(0,184,255,0.14), transparent 70%)",
              filter: "blur(35px)",
              animation: "acta-drift-b 26s ease-in-out infinite",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[15%] top-[10%] h-[360px] w-[360px]"
            style={{
              background: "radial-gradient(closest-side, rgba(91,108,255,0.14), transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* Faint grid, fades in */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 70% 60% at 70% 40%, black 30%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 70% 40%, black 30%, transparent 85%)",
              animation: "acta-grid-fade 1.2s ease-out both",
            }}
          />

          {/* Noise */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[55%_45%] md:gap-6 md:px-14 md:py-16">
          {/* LEFT — content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase"
              style={{
                letterSpacing: "0.16em",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(6px)",
              }}
            >
              <Sparkles size={12} />
              AI Powered • Cloud Native • Enterprise Ready
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-extrabold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "clamp(30px, 4vw, 46px)" }}
            >
              Ready to build{" "}
              <span style={{ color: "#00B8FF" }}>
                AI
              </span>{" "}
              on solid{" "}
              <span style={{ color: "#00B8FF" }}>
                cloud foundations
              </span>
              ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-[480px] text-[16px] leading-relaxed text-white/70"
            >
              Helping businesses build secure AI systems, scalable cloud
              infrastructure, automation, and intelligent digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[15px] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(100deg, #1E3A8A 0%, #4169E1 55%, #00B8FF 100%)",
                  boxShadow: "0 16px 40px -14px rgba(0,184,255,0.55)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(100deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)",
                    animation: "acta-shimmer 1.2s ease-in-out infinite",
                  }}
                />
                <span className="relative">Book Consultation</span>
                <ArrowRight size={17} strokeWidth={2.5} className="relative" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {FEATURES.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 12px 30px -12px rgba(0,0,0,0.55)",
                  }}
                >
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full"
                    style={{ background: "linear-gradient(135deg, rgba(77,38,124,0.16), rgba(0,184,255,0.16))" }}
                  >
                    <Icon size={16} className="text-[#4D267C]" />
                  </span>
                  <span className="text-[13px] font-semibold text-[#1A1730]">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — robot photo: only the head spills above the card, the rest stays inside */}
          <div className="relative mx-auto hidden h-full w-full max-w-[440px] self-stretch md:block">
            <div className="absolute -bottom-16 left-1/2 h-[620px] -translate-x-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/robot.png"
                alt="AI robot"
                className="h-full w-auto max-w-none object-contain"
                style={{ filter: "drop-shadow(0 25px 50px rgba(77,38,124,0.35))" }}
              />
            </div>
          </div>
        </div>
      </div>

      <AIConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
