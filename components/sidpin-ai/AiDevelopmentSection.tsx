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
      title: "Business Automation",
      description:
        "Automate repetitive workflows, customer support, document processing, and internal operations.",
    },
    {
      Icon: BarChart3,
      title: "Smarter Decision Making",
      description:
        "Use predictive analytics and AI models to transform business data into actionable insights.",
    },
    {
      Icon: Cpu,
      title: "Scalable AI Solutions",
      description:
        "Deploy secure AI applications that scale with your business while maintaining speed, compliance, and reliability.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="ai-dev-section relative px-6 py-[160px] md:px-[120px] overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column - Editorial Content (45%) */}
          <div className="lg:col-span-5 lg:col-start-1 space-y-10">
            {/* Badge */}
            <div className="ai-dev-badge">
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.35em] text-fg-3">
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
              className="ai-dev-description text-[17px] md:text-[18px] leading-[1.75] text-fg-2 max-w-[520px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              Artificial Intelligence development is the process of building
              software that can understand information, learn from data, and
              continuously improve. Modern AI combines machine learning,
              natural language processing, and generative models to create
              intelligent systems that reduce manual work and accelerate growth.
              From AI assistants to predictive analytics, AI is becoming the
              foundation of the next generation of digital businesses.
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

          {/* Right Column - Large Framed Image (55%) */}
          <div className="lg:col-span-6 lg:col-start-7 relative">
            {/* Background blur behind frame */}
            <div
              className="absolute inset-0 rounded-[32px] opacity-60"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(65,105,225,0.15), transparent 70%)",
                filter: "blur(60px)",
                transform: "scale(0.9)",
              }}
            />

            {/* Luxury Frame */}
            <div
              ref={imageFrameRef}
              className="ai-dev-image-frame relative rounded-[28px] overflow-hidden"
              style={{
                background: "#0F1626",
                border: "1px solid rgba(65,105,225,0.12)",
                boxShadow:
                  "0 4px 24px rgba(0,0,0,0.06), 0 80px 120px -40px rgba(65,105,225,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
                transform: `perspective(1200px) rotateX(${rotateX}°) rotateY(${rotateY}°)`,
                transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                height: "640px",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image Container with Zoom Animation */}
              <motion.div
                ref={imageRef}
                className="absolute inset-0"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.08 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 8, ease: "easeOut" }}
              >
                {/* Premium AI workspace image representation */}
                <div className="w-full h-full relative overflow-hidden">
                  {/* Dark gradient base */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1D] via-[#121C33] to-[#080C16]" />

                  {/* Subtle grid overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(110,140,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(110,140,255,0.2) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />

                  {/* Ambient lighting */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%]"
                    style={{
                      background: "radial-gradient(ellipse at 50% 0%, rgba(65,105,225,0.12), transparent 60%)",
                      filter: "blur(80px)",
                    }}
                  />

                  {/* Elegant abstract AI visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central glow */}
                    <div
                      className="absolute w-64 h-64 rounded-full"
                      style={{
                        background: "radial-gradient(circle, rgba(110,140,255,0.2), transparent 70%)",
                        filter: "blur(40px)",
                      }}
                    />

                    {/* Neural network pattern */}
                    <svg
                      className="w-full h-full opacity-30"
                      viewBox="0 0 400 500"
                      fill="none"
                    >
                      {/* Connection lines */}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <motion.line
                          key={`line-${i}`}
                          x1={100 + (i % 4) * 80}
                          y1={80 + Math.floor(i / 4) * 120}
                          x2={180 + ((i + 1) % 4) * 60}
                          y2={140 + Math.floor((i + 1) / 4) * 100}
                          stroke="rgba(110,140,255,0.3)"
                          strokeWidth="1"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.5 }}
                          transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                        />
                      ))}

                      {/* Nodes */}
                      {Array.from({ length: 9 }).map((_, i) => (
                        <motion.circle
                          key={`node-${i}`}
                          cx={120 + (i % 3) * 80}
                          cy={120 + Math.floor(i / 3) * 100}
                          r="4"
                          fill="rgba(143,181,255,0.6)"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                        />
                      ))}
                    </svg>

                    {/* Elegant typography element */}
                    <div className="absolute bottom-16 left-12 space-y-1">
                      <motion.div
                        className="text-[11px] uppercase tracking-[0.3em] text-brand/60 font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                      >
                        Neural Architecture
                      </motion.div>
                      <motion.div
                        className="text-[28px] font-light text-white/90 tracking-tight"
                        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                      >
                        v2.4
                      </motion.div>
                    </div>

                    {/* Data points visualization */}
                    <div className="absolute top-16 right-12">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 mb-2"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                        >
                          <div className="h-1 w-8 bg-brand/30 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-brand/60 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${progressValues[i]}%` }}
                              transition={{ delay: 1 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                          <span className="text-[10px] text-fg-3 font-mono">
                            {dataValues[i].toFixed(2)}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Light Sweep Effect */}
              <LightSweep />

              {/* Soft gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.2) 100%)",
                }}
              />

              {/* Subtle inner glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[28px]"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)",
                }}
              />
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
