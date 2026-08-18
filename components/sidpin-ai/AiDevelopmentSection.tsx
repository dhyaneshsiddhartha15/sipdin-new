"use client";

/**
 * AiDevelopmentSection — Premium editorial layout inspired by Apple & Linear.
 * Single large framed image, minimalist feature rows, luxury styling.
 * Animations: GSAP ScrollTrigger, Motion Framer for image zoom/tilt/light sweep.
 */

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, BarChart3, Cpu } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Minimalist icon component
function MinimalIcon({ icon: Icon }: { icon: any }) {
  return (
    <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-brand/5 border border-brand/10">
      <Icon size={16} className="text-brand" strokeWidth={1.5} />
    </div>
  );
}

// Premium button component
function PremiumButton({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full text-[15px] font-medium transition-all duration-500";
  const variants = {
    primary:
      "bg-gradient-to-r from-[#1a1a2e] to-[#2a2a4e] dark:from-[#0F1626] dark:to-[#1a2338] text-white border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl",
    secondary:
      "text-fg-2 hover:text-fg border border-line/50 hover:border-line hover:bg-surface-2/50",
  };

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </Comp>
  );
}

// Light sweep animation component
function LightSweep({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0],
        x: ["-100%", "100%"],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    >
      <div
        className="h-full w-1/3 skew-x-12"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
        }}
      />
    </motion.div>
  );
}

export default function AiDevelopmentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Fixed data values to avoid hydration mismatch
  const dataValues = [0.87, 0.94, 0.91, 0.96, 0.89];
  const progressValues = [72, 85, 68, 94, 79];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageFrameRef.current) return;
    const rect = imageFrameRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    setRotateY(Math.max(-3, Math.min(3, percentX * 3)));
    setRotateX(Math.max(-3, Math.min(3, -percentY * 3)));
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, (context) => {
        const { reduceMotion } = context.conditions as { reduceMotion: boolean };

        // Section fade up
        gsap.fromTo(
          ".ai-dev-section",
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: reduceMotion ? 0 : 1.2, ease: "power3.out" }
        );

        // Badge reveal
        gsap.fromTo(
          ".ai-dev-badge",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.15, ease: "power2.out" }
        );

        // Heading reveal
        gsap.fromTo(
          ".ai-dev-heading",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.25, ease: "power3.out" }
        );

        // Description fade
        gsap.fromTo(
          ".ai-dev-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.4, ease: "power2.out" }
        );

        // Feature rows stagger
        gsap.fromTo(
          ".ai-dev-feature-row",
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: reduceMotion ? 0 : 0.7,
            stagger: 0.12,
            delay: reduceMotion ? 0 : 0.55,
            ease: "power2.out",
          }
        );

        // CTA fade in
        gsap.fromTo(
          ".ai-dev-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.9, ease: "power2.out" }
        );

        // Image frame reveal
        gsap.fromTo(
          ".ai-dev-image-frame",
          { opacity: 0, scale: 0.95, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.35, ease: "power3.out" }
        );

        // Image subtle parallax (20-30px)
        if (!reduceMotion && imageRef.current) {
          gsap.to(imageRef.current, {
            y: 30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        return () => {};
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const FEATURES = [
    {
      Icon: Zap,
      title: "Intelligent Business Automation",
      description:
        "Transform manual workflows into intelligent automation — handle customer support 24/7, streamline document processing, and optimize internal operations with AI-powered efficiency.",
    },
    {
      Icon: BarChart3,
      title: "Data-Driven Decision Intelligence",
      description:
        "Harness the power of predictive analytics and machine learning models that transform complex business data into clear, actionable insights — giving you the competitive edge to make smarter decisions faster.",
    },
    {
      Icon: Cpu,
      title: "Enterprise-Grade AI Infrastructure",
      description:
        "Deploy production-ready AI applications that scale seamlessly with your growth — built on secure, compliant cloud infrastructure that delivers maximum performance and reliability for mission-critical operations.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="ai-dev-section relative px-6 py-[160px] md:px-[120px] overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column - Editorial Content (Full Width) */}
          <div className="lg:col-span-12 space-y-10">
            {/* Badge */}
            <div className="ai-dev-badge">
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.35em] text-[#4169E1]">
                AI Development
              </span>
            </div>

            {/* Heading */}
            <h2
              className="ai-dev-heading text-[44px] md:text-[52px] font-bold leading-[1.08] tracking-tight text-fg"
              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            >
              What Is{" "}
              <span className="bg-gradient-to-r from-[#1a1a2e] via-[#2a2a4e] to-[#1a1a2e] dark:from-[#8FB5FF] dark:via-[#6E8CFF] dark:to-[#8FB5FF] bg-clip-text text-transparent">
                AI Development
              </span>
              <br />
              & Why It Matters Today
            </h2>

            {/* Description */}
            <p
              className="ai-dev-description text-[17px] md:text-[18px] leading-[1.75] text-fg-2 max-w-[900px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              Artificial Intelligence development represents the transformative process of creating intelligent software systems that can understand complex information, learn from data patterns, and continuously improve performance. Modern AI integrates cutting-edge machine learning algorithms, advanced natural language processing, and powerful generative models to build systems that dramatically reduce manual workload while accelerating business growth. From sophisticated AI assistants that handle customer inquiries to predictive analytics that forecast market trends, AI has emerged as the foundational technology driving the next generation of digital innovation and competitive advantage across every industry.
            </p>

            {/* Feature Rows with Thin Dividers */}
            <div className="space-y-0 pt-4">
              {FEATURES.map((feature, index) => (
                <div key={feature.title}>
                  <div className="ai-dev-feature-row flex gap-5 items-start py-6">
                    <MinimalIcon icon={feature.Icon} />
                    <div className="flex-1">
                      <h3
                        className="text-[16px] font-medium text-fg mb-1.5"
                        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-[15px] text-fg-2 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {index < FEATURES.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-line/50 via-line/30 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="ai-dev-cta flex flex-wrap items-center gap-4 pt-2">
              <PremiumButton href="#contact" variant="primary" className="px-7 py-3.5">
                Explore AI Solutions
                <ArrowRight size={17} strokeWidth={2} />
              </PremiumButton>
              <PremiumButton href="#process" variant="secondary" className="px-7 py-3.5">
                See Our Process
                <ArrowRight size={17} strokeWidth={2} />
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(65,105,225,0.04), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>
    </section>
  );
}
