"use client";

/**
 * AiHero — cinematic full-bleed scene, text + background only (the 3D
 * energy-halo visualization has been removed from the page; the component
 * still exists at ./AiEnergyHalo if it's wanted back later).
 */

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import AIConsultationModal from "@/components/contact/AIConsultationModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function MagneticButton({
  children,
  onClick,
  href,
  variant,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant: "primary" | "ghost";
}) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: Math.max(-8, Math.min(8, relX * 0.2)), y: Math.max(-6, Math.min(6, relY * 0.25)) });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const className =
    variant === "primary"
      ? "relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white"
      : "relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white/70";

  const style =
    variant === "primary"
      ? {
          background: "linear-gradient(135deg, rgba(93,124,255,0.9), rgba(143,181,255,0.75))",
          boxShadow: "0 0 44px rgba(93,124,255,0.45)",
        }
      : {
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.16)",
        };

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 16, mass: 0.4 }}
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.96 }}
      className={className}
      style={style}
    >
      {children}
    </Comp>
  );
}

export default function AiHero() {
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, (context) => {
        const { reduceMotion } = context.conditions as { reduceMotion: boolean };

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".ai-hero-bg", { opacity: 0 }, { opacity: 1, duration: reduceMotion ? 0 : 1.8 }, 0)
          .fromTo(
            ".ai-hero-eyebrow",
            { opacity: 0, y: 14, filter: "blur(8px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: reduceMotion ? 0 : 0.9 },
            0.5
          )
          .fromTo(
            ".ai-hero-heading",
            { opacity: 0, y: 24, scale: 0.95, filter: "blur(14px)" },
            { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: reduceMotion ? 0 : 1.1 },
            0.65
          )
          .fromTo(
            ".ai-hero-cta > *",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, stagger: reduceMotion ? 0 : 0.12, duration: reduceMotion ? 0 : 0.7 },
            1.1
          );

        if (!reduceMotion) {
          gsap.to(".ai-hero-bg-parallax", {
            yPercent: 10,
            ease: "none",
            scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
          });

          gsap.to(".ai-hero-text-parallax", {
            yPercent: -12,
            ease: "none",
            scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
          });
        }

        return () => {};
      });

      return () => mm.revert();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] overflow-hidden"
      style={{ background: "#050816", fontFamily: "Inter, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes aihero2-drift-a { 0%,100% { transform: translate(-5%,-3%) scale(1); } 50% { transform: translate(5%,4%) scale(1.12); } }
        @keyframes aihero2-drift-b { 0%,100% { transform: translate(4%,5%) scale(1.04); } 50% { transform: translate(-5%,-4%) scale(0.94); } }
        @keyframes aihero2-dust { 0%,100% { transform: translateY(0); opacity: 0.2; } 50% { transform: translateY(-18px); opacity: 0.6; } }
        @keyframes aihero2-grid-fade { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      {/* Background — near-black navy, subtle grid, volumetric fog, tiny dust. No obvious gradients. */}
      <div className="ai-hero-bg ai-hero-bg-parallax pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[10%] h-[70%] w-[90%] -translate-x-1/2"
          style={{
            background: "radial-gradient(closest-side, rgba(93,124,255,0.10), transparent 72%)",
            filter: "blur(60px)",
            animation: "aihero2-drift-a 26s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-[10%] left-1/2 h-[60%] w-[70%] -translate-x-1/2"
          style={{
            background: "radial-gradient(closest-side, rgba(9,13,31,0.9), transparent 75%)",
            filter: "blur(40px)",
            animation: "aihero2-drift-b 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 65% 60% at 50% 40%, black 20%, transparent 82%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 60% at 50% 40%, black 20%, transparent 82%)",
            animation: "aihero2-grid-fade 1.8s ease-out both",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {[
          { top: "16%", left: "14%", size: 2 },
          { top: "26%", left: "84%", size: 2 },
          { top: "60%", left: "8%", size: 2 },
          { top: "70%", left: "90%", size: 2 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#8fb5ff]"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 8px rgba(143,181,255,0.6)",
              animation: `aihero2-dust ${7 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* Type — minimal, centered */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-[12vh] text-center">
        <div className="ai-hero-text-parallax flex flex-col items-center">
          <span
            className="ai-hero-eyebrow mb-5 inline-block text-[11px] font-semibold uppercase text-[#8FB5FF]"
            style={{ letterSpacing: "0.4em", fontFamily: "Geist, sans-serif" }}
          >
            Introducing
          </span>

          <h1
            className="ai-hero-heading font-bold leading-[1.02] tracking-tight"
            style={{
              fontSize: "clamp(42px, 7.5vw, 96px)",
              fontFamily: "Hanken Grotesk, sans-serif",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Sidpin
            <span
              style={{
                color: "#8FB5FF",
                textShadow: "0 0 30px rgba(143,181,255,0.6), 0 0 70px rgba(93,124,255,0.4)",
              }}
            >
              .ai
            </span>
          </h1>

          <div className="ai-hero-cta mt-9 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton variant="primary" href="#capabilities">
              Start Building
              <ArrowRight size={17} strokeWidth={2.5} />
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => setModalOpen(true)}>
              Book Consultation
            </MagneticButton>
          </div>
        </div>
      </div>

      <AIConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
