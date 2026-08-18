"use client";

/**
 * AiHero — Modern cinematic hero with enhanced typography and visual design
 * Clean, professional layout without 3D elements
 */

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";

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
  variant: "primary" | "secondary";
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
      ? "relative inline-flex items-center gap-3 rounded-full px-9 py-4 text-[16px] font-bold text-white"
      : "relative inline-flex items-center gap-3 rounded-full px-9 py-4 text-[16px] font-bold text-white/80 border border-white/20 text-left";

  const style =
    variant === "primary"
      ? {
          background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
          boxShadow: "0 8px 32px rgba(59,130,246,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset",
        }
      : {
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1) inset",
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      style={style}
    >
      {children}
    </Comp>
  );
}

function FeatureBadge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 px-5 py-3 rounded-full"
      style={{
        background: "rgba(59,130,246,0.08)",
        border: "1px solid rgba(59,130,246,0.2)",
        backdropFilter: "blur(12px)",
        textAlign: "left",
      }}
      whileHover={{
        background: "rgba(59,130,246,0.15)",
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
        <Icon size={16} className="text-white" strokeWidth={2} />
      </div>
      <span className="text-[14px] font-medium text-white/90">{text}</span>
    </motion.div>
  );
}

export default function AiHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, (context) => {
        const { reduceMotion } = context.conditions as { reduceMotion: boolean };

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".ai-hero-bg", { opacity: 0 }, { opacity: 1, duration: reduceMotion ? 0 : 2 }, 0)
          .fromTo(
            ".ai-hero-eyebrow",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: reduceMotion ? 0 : 1 },
            0.8
          )
          .fromTo(
            ".ai-hero-heading",
            { opacity: 0, y: 30, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: reduceMotion ? 0 : 1.2 },
            1
          )
          .fromTo(
            ".ai-hero-subheading",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: reduceMotion ? 0 : 0.9 },
            1.4
          )
          .fromTo(
            ".ai-hero-features > *",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, stagger: reduceMotion ? 0 : 0.15, duration: reduceMotion ? 0 : 0.7 },
            1.7
          )
          .fromTo(
            ".ai-hero-cta > *",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, stagger: reduceMotion ? 0 : 0.12, duration: reduceMotion ? 0 : 0.7 },
            2
          );

        if (!reduceMotion) {
          // Parallax effects removed for cleaner design
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
      className="relative min-h-[100vh] overflow-hidden"
      style={{ background: "#0a0f1e", fontFamily: "Inter, -apple-system, sans-serif" }}
    >
      {/* Image Background */}
      <div className="ai-hero-bg pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/sidpin-ai-image.png')",
          }}
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(10,15,30,0.7) 0%, rgba(10,15,30,0.5) 50%, rgba(10,15,30,0.8) 100%)",
          }}
        />
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.15); }
          66% { transform: translate(-30px, 30px) scale(0.85); }
        }
        @keyframes particle {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-50vh) translateX(30px) scale(1.2); }
          90% { opacity: 1; }
          100% { transform: translateY(-120vh) translateX(60px) scale(0.8); opacity: 0; }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.2; transform: translateY(0) scale(1); }
          50% { opacity: 0.8; transform: translateY(-20px) scale(1.5); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Modern Content Layout */}
      <div className="relative z-10 min-h-[100vh] flex flex-col items-start justify-center px-6 md:px-12 lg:px-20 py-[16vh]" style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
        <div className="w-full" style={{textAlign: 'left', marginLeft: '0 !important', marginRight: 'auto !important', alignItems: 'flex-start', maxWidth: '80%'}}>
          {/* Enhanced Badge */}
          <motion.div
            className="ai-hero-eyebrow mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.3em]"
            style={{
              fontFamily: "Geist, sans-serif",
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.35)",
              color: "#93C5FD",
              alignSelf: "flex-start",
            }}
            whileHover={{
              background: "rgba(59,130,246,0.18)",
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles size={14} strokeWidth={2} />
            Introducing Sidpin.ai
          </motion.div>

          {/* Enhanced Heading */}
          <h1
            className="ai-hero-heading font-bold leading-[1.05] tracking-tight mb-8 text-left"
            style={{
              fontSize: "clamp(48px, 8vw, 110px)",
              fontFamily: "Hanken Grotesk, sans-serif",
              color: "rgba(255,255,255,0.98)",
              textAlign: "left",
            }}
          >
            AI-Powered
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #93C5FD 0%, #3b82f6 50%, #2563eb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Excellence
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <motion.p
            className="ai-hero-subheading text-[18px] md:text-[20px] leading-relaxed max-w-2xl mb-12 text-left"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Inter, sans-serif",
              textAlign: "left",
            }}
          >
            Transform your business with intelligent AI solutions that automate workflows,
            enhance decision-making, and drive sustainable growth in the digital age.
          </motion.p>

          {/* Feature Badges */}
          <div className="ai-hero-features flex flex-wrap items-center justify-start gap-4 mb-12 w-full">
            <FeatureBadge icon={Zap} text="Lightning Fast" />
            <FeatureBadge icon={Shield} text="Enterprise Secure" />
            <FeatureBadge icon={TrendingUp} text="Scalable Growth" />
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="ai-hero-cta flex flex-wrap items-center justify-start gap-5 w-full" style={{alignSelf: 'flex-start'}}>
            <MagneticButton variant="primary" href="#contact">
              Start Your AI Journey
              <ArrowRight size={18} strokeWidth={2.5} />
            </MagneticButton>
            <MagneticButton variant="secondary" href="#capabilities">
              Explore Solutions
              <ArrowRight size={18} strokeWidth={2.5} />
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0a0f1e, transparent)",
        }}
      />
    </section>
  );
}