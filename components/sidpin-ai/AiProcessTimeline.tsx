"use client";

/**
 * AiProcessTimeline — Premium stacking scroll animation section.
 * 6 process cards that stack vertically as user scrolls, using GSAP ScrollTrigger pinning.
 * Each card has left content (badge, heading, description, checklist) and right side image.
 */

import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Process data
const PROCESS_STEPS = [
  {
    id: 1,
    phase: "Phase 01",
    title: "Discovery & AI Strategy",
    description:
      "We begin with deep discovery to understand your business challenges, identify AI opportunities, and define success metrics. This phase includes stakeholder interviews, workflow analysis, and strategic roadmapping.",
    checklist: [
      "Business goals assessment",
      "AI opportunity mapping",
      "Technical feasibility study",
      "ROI projections",
      "Implementation roadmap",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    alt: "Business strategy meeting",
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "Data Audit & Preparation",
    description:
      "Quality AI requires quality data. We audit your existing data sources, identify gaps, clean and structure information, and prepare pipelines for training and inference.",
    checklist: [
      "Data source inventory",
      "Quality assessment & cleaning",
      "Privacy & compliance review",
      "Pipeline architecture",
      "Storage optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    alt: "Data analytics dashboard",
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "AI Solution Architecture",
    description:
      "We design a robust, scalable AI architecture tailored to your needs. This includes model selection, infrastructure planning, API design, and integration strategy.",
    checklist: [
      "Model selection & validation",
      "Infrastructure design",
      "API & integration planning",
      "Security architecture",
      "Scalability blueprint",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    alt: "Software architecture visualization",
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "Model Development",
    description:
      "Our engineers build and fine-tune AI models specifically for your use cases. We train, validate, and iterate until performance meets your requirements.",
    checklist: [
      "Custom model training",
      "Fine-tuning & optimization",
      "Validation & testing",
      "Performance benchmarking",
      "Error analysis & refinement",
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    alt: "AI engineer at work",
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "Integration & Deployment",
    description:
      "We seamlessly integrate AI into your existing systems and deploy to production. This includes API connections, user interfaces, and monitoring setup.",
    checklist: [
      "System integration",
      "Production deployment",
      "User interface setup",
      "Monitoring configuration",
      "Documentation & handover",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    alt: "Cloud infrastructure deployment",
  },
  {
    id: 6,
    phase: "Phase 06",
    title: "Continuous Optimization",
    description:
      "AI gets better with use. We monitor performance, collect feedback, retrain models, and continuously optimize to ensure your AI systems deliver maximum value.",
    checklist: [
      "Performance monitoring",
      "Feedback collection",
      "Model retraining",
      "Feature enhancement",
      "Ongoing support",
    ],
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
    alt: "Analytics dashboard monitoring",
  },
];

// Checklist item component
function ChecklistItem({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as any }}
    >
      <div className="h-5 w-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
        <Check size={12} className="text-brand" strokeWidth={2.5} />
      </div>
      <span className="text-[15px] text-fg-2">{text}</span>
    </motion.div>
  );
}

// Image card component with tilt
function ImageCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    setRotateY(Math.max(-2, Math.min(2, percentX * 2)));
    setRotateX(Math.max(-2, Math.min(2, -percentY * 2)));
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={ref}
      className="relative h-full w-full rounded-[24px] overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}°) rotateY(${rotateY}°)`,
        transition: "transform 0.3s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image with zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.08 }}
        viewport={{ once: true }}
        transition={{ duration: 10, ease: [0.25, 0.1, 0.25, 1] as any }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      {/* Subtle border */}
      <div className="absolute inset-0 rounded-[24px] border border-white/10 pointer-events-none" />
    </div>
  );
}

// Individual process card
function ProcessCard({
  step,
  index,
  totalCards,
}: {
  step: (typeof PROCESS_STEPS)[0];
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="process-card absolute inset-0 flex items-center justify-center px-6 md:px-[80px] py-12"
      style={{ zIndex: totalCards - index }}
    >
      <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[70vh]">
        {/* Left Content */}
        <div className="lg:col-span-5 space-y-8">
          {/* Phase Badge */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-surface-2 border border-line/50">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fg-3">
                {step.phase}
              </span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-[38px] md:text-[44px] font-bold leading-tight text-fg"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as any }}
          >
            {step.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-[17px] leading-relaxed text-fg-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as any }}
          >
            {step.description}
          </motion.p>

          {/* Checklist */}
          <div className="space-y-3 pt-2">
            {step.checklist.map((item, i) => (
              <ChecklistItem key={item} text={item} delay={0.3 + i * 0.08} />
            ))}
          </div>

          {/* Optional CTA for last card */}
          {index === totalCards - 1 && (
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] as any }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1a1a2e] to-[#2a2a4e] dark:from-[#0F1626] dark:to-[#1a2338] text-white border border-white/10 hover:border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Your AI Journey
                <ArrowRight size={17} strokeWidth={2} />
              </a>
            </motion.div>
          )}
        </div>

        {/* Right Side - Image Card */}
        <div className="lg:col-span-7 h-[500px] md:h-[600px]">
          <ImageCard src={step.image} alt={step.alt} />
        </div>
      </div>
    </div>
  );
}

export default function AiProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Callback ref to populate the array
  const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        const total = cards.length;
        if (!total) return;

        // Initial state: the first card is visible, every later card is stacked
        // just below the frame and hidden — they slide up one at a time.
        cards.forEach((card, index) => {
          gsap.set(
            card,
            index === 0
              ? { yPercent: 0, opacity: 1 }
              : { yPercent: 100, opacity: 0 }
          );
        });

        // A single master timeline scrubbed by the pinned scroll distance. Each
        // subsequent card gets its own equal slice of the scroll, so all phases
        // (01 → 06) are shown in order instead of jumping straight to the last.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            // Explicit pixel distance (one viewport per remaining card) so the
            // pin reserves the right amount of scroll — a "%" end resolved to 0
            // here, collapsing every phase into a single jump.
            end: () => "+=" + window.innerHeight * (total - 1),
            pin: containerRef.current,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          if (index === 0) return;
          tl.to(
            card,
            {
              yPercent: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.inOut" as any,
            },
            index - 1
          );
        });

        // Images are lazy-loaded and fonts swap in, both of which change layout
        // heights after this effect runs — refresh once things settle so the pin
        // distance is measured correctly.
        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg min-h-[100vh]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Section Header */}
      <div className="relative z-10 px-6 py-24 md:px-[80px]">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any }}
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
              Our Process
            </span>
            <h2
              className="text-[42px] md:text-[52px] font-bold text-fg"
              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            >
              How We Build AI That Works
            </h2>
            <p className="text-[18px] text-fg-2 max-w-[600px] mx-auto">
              A proven, systematic approach to developing AI solutions that
              deliver measurable business results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <div ref={containerRef} className="relative h-[90vh] overflow-hidden">
        {/* Base card background - white premium card */}
        <div className="absolute inset-4 md:inset-6 rounded-[30px] bg-surface border border-line/30 shadow-[0_8px_40px_rgba(0,0,0,0.08),0_120px_160px_-40px_rgba(65,105,225,0.12)]" />

        {/* Process Cards */}
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.id}
            ref={setCardRef(index)}
            className="process-card-inner absolute inset-4 md:inset-6 rounded-[30px] bg-surface border border-line/30 overflow-hidden"
            style={{
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.06), 0 80px 120px -40px rgba(65,105,225,0.1)",
            }}
          >
            <ProcessCard
              step={step}
              index={index}
              totalCards={PROCESS_STEPS.length}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
