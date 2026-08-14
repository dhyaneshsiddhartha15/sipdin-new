"use client";

/**
 * AiPortfolio — Continuous horizontal marquee case-study showcase.
 * Smooth infinite scroll with Framer Motion. No snapping, no pagination.
 */

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Smartphone, Sparkles, TrendingUp, Award } from "lucide-react";
import { motion, useAnimation, useMotionValue, useTransform, PanInfo } from "framer-motion";
import AIConsultationModal from "@/components/contact/AIConsultationModal";
import { getAllCaseStudies } from "@/lib/caseStudies";

// Get only specific case studies: Dohabus, Rudradharma, Camera Market, Wafeeq
const ALL_CASE_STUDIES = getAllCaseStudies();
const CASE_STUDIES = ALL_CASE_STUDIES.filter(cs =>
  cs.slug === "dohabus-qatar-tourism-platform" ||
  cs.slug === "rudradharma-spiritual-ecommerce" ||
  cs.slug === "camera-market-dehradun-photography-e-commerce" ||
  cs.slug === "wafeeq-inclusive-digital-learning"
);

const PROJECTS = CASE_STUDIES.map((cs) => ({
  id: cs.slug,
  name: cs.product,
  category: cs.tag,
  color: cs.accent,
  description: cs.description,
  stats: cs.stats,
  image: cs.heroImage || "https://images.unsplash.com/photo-15566567932-02371d2713ef?w=800&q=80",
  alt: `${cs.product} case study`,
  slug: cs.slug,
}));

// Theme colors for glows
const THEME_COLORS = [
  "rgba(99, 102, 241, 0.5)",   // Indigo
  "rgba(168, 85, 247, 0.5)",   // Purple
  "rgba(236, 72, 153, 0.5)",   // Pink
  "rgba(34, 211, 238, 0.5)",   // Cyan
  "rgba(52, 211, 153, 0.5)",   // Emerald
];

function ProjectCard({
  project,
  index,
  isMobile = false,
}: {
  project: typeof PROJECTS[0];
  index: number;
  isMobile?: boolean;
}) {
  return (
    <motion.div
      className="relative shrink-0"
      style={{
        width: isMobile ? "100%" : "650px",
        height: isMobile ? "480px" : "520px",
      }}
      whileHover={{
        y: isMobile ? 0 : -10,
        transition: { duration: 0.3 },
      }}
    >
      {/* Plain Card */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[28px]"
        style={{
          background: project.color,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >

          {/* Card Content - 2 Column Layout */}
          <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-2">
            {/* LEFT - Device Mockup */}
            <div className="relative flex items-center justify-center p-8">
              {/* Device Frame */}
              <motion.div
                className="relative h-[380px] w-[180px] overflow-hidden rounded-[32px] border-4 border-white/30 bg-black shadow-2xl"
                whileHover={{
                  y: -15,
                  transition: { duration: 0.4 },
                }}
              >
                {/* Screen Image */}
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover"
                />

                {/* Notch */}
                <div className="absolute left-1/2 top-0 h-[24px] w-[80px] -translate-x-1/2 rounded-b-[12px] bg-black border-b border-l border-r border-white/20" />
              </motion.div>
            </div>

            {/* RIGHT - Content */}
            <div className="flex flex-col justify-center p-8 text-white">
              {/* Category Badge */}
              <motion.div
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-wider backdrop-blur-md"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Smartphone size={14} />
                {project.category}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="mt-5 text-[32px] font-bold leading-tight"
                style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {project.name}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="mt-4 line-clamp-3 text-[15px] leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                {project.description}
              </motion.p>

              {/* Metrics */}
              <motion.div
                className="mt-5 grid grid-cols-2 gap-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {project.stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                    <div
                      className="text-[22px] font-bold leading-none"
                      style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11px] font-medium opacity-80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href={`/case-studies/${project.slug}`}
                className="mt-auto inline-flex w-fit items-center gap-3 self-start rounded-full bg-white px-6 py-3.5 text-[14px] font-bold text-[#1A1730] transition-all duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                whileHover={{
                  boxShadow: "0 20px 50px rgba(255,255,255,0.3)",
                }}
              >
                View Case Study
                <motion.span
                  className="rounded-full bg-[#1A1730]/10 p-1.5"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={14} strokeWidth={2.5} />
                </motion.span>
              </motion.a>
            </div>
          </div>
      </div>
    </motion.div>
  );
}

export default function AiPortfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Duplicate projects for infinite scroll
  const displayProjects = [...PROJECTS, ...PROJECTS];

  // Calculate total width
  const cardWidth = 650;
  const gap = 24;
  const totalWidth = (cardWidth + gap) * PROJECTS.length;

  // Animation for desktop marquee
  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const animate = async () => {
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: 22,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    if (!isPaused) {
      animate();
    } else {
      controls.stop();
    }

    return () => controls.stop();
  }, [controls, isPaused, isMobile, totalWidth]);

  // Mobile drag state
  const [mobileIndex, setMobileIndex] = useState(0);
  const dragX = useMotionValue(0);
  const [cardWidthMobile, setCardWidthMobile] = useState(650);

  // Set mobile card width on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCardWidthMobile(window.innerWidth - 48);
    }
  }, []);

  const dragConstraints = {
    left: -(PROJECTS.length - 1) * cardWidthMobile,
    right: 0,
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (!isMobile) return;
    const newIndex = Math.round(info.offset.x / -cardWidthMobile);
    setMobileIndex(Math.max(0, Math.min(PROJECTS.length - 1, mobileIndex + newIndex)));
  };

  return (
    <>
      <section
        className="relative overflow-hidden bg-[#070b14] px-[24px] py-[100px] md:px-[80px]"
      >
        {/* Ambient Background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full blur-[180px]"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
          />
          <div
            className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full blur-[180px]"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px]">
          {/* Section Header */}
          <motion.div
            className="mb-10 text-center md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-[38px] font-bold leading-tight text-white md:text-[48px] lg:text-[54px]"
              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            >
              AI Projects We've Built for{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                Clients
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-relaxed text-white/60 md:text-[17px]">
              We don't just claim to be a top AI company—we prove it with real,
              production-ready results. Here are AI systems built and deployed for
              real clients worldwide.
            </p>
          </motion.div>

          {/* Desktop Marquee */}
          {!isMobile ? (
            <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
              <motion.div
                ref={containerRef}
                className="flex gap-6"
                animate={controls}
                style={{ gap: "24px" }}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              >
                {displayProjects.map((project, index) => (
                  <ProjectCard key={`${project.id}-${index}`} project={project} index={index % PROJECTS.length} />
                ))}
              </motion.div>
            </div>
          ) : (
            /* Mobile Swipeable */
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                drag="x"
                dragConstraints={dragConstraints}
                onDragEnd={handleDragEnd}
                style={{ x: dragX }}
              >
                {PROJECTS.map((project, index) => (
                  <div
                    key={project.id}
                    className="shrink-0 px-0"
                    style={{ width: "100%" }}
                  >
                    <ProjectCard project={project} index={index} isMobile={true} />
                  </div>
                ))}
              </motion.div>

              {/* Mobile Pagination Dots */}
              <div className="mt-6 flex justify-center gap-2">
                {PROJECTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMobileIndex(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === mobileIndex ? "w-6 bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <AIConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
