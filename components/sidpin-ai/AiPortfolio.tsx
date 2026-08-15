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
  backgroundImage: cs.slug === "wafeeq-inclusive-digital-learning" ? "/ai-card/ai-wafeeq.png" :
                  cs.slug === "rudradharma-spiritual-ecommerce" ? "/ai-card/ai-rudra.png" :
                  cs.slug === "dohabus-qatar-tourism-platform" ? "/ai-card/ai-doha.png" : null,
  deviceType: cs.slug === "wafeeq-inclusive-digital-learning" ? "laptop" : "phone",
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
  onClick,
  isFocused = false,
}: {
  project: typeof PROJECTS[0] & { deviceType?: 'phone' | 'laptop' };
  index: number;
  isMobile?: boolean;
  onClick?: () => void;
  isFocused?: boolean;
}) {
  return (
    <motion.div
      className="relative shrink-0 cursor-pointer"
      style={{
        width: isMobile ? "100%" : "650px",
        height: isMobile ? "480px" : "520px",
      }}
      whileHover={{
        y: isMobile ? 0 : -10,
        scale: isFocused ? 1.05 : 1,
        transition: { duration: 0.3 },
      }}
      onClick={() => onClick && onClick()}
      animate={{
        scale: isFocused ? 1.08 : 1,
        zIndex: isFocused ? 20 : 1,
      }}
    >
      {/* Plain Card */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[28px]"
        style={{
          background: project.backgroundImage
            ? `url(${project.backgroundImage}) center/cover`
            : project.color,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Background Overlay for Image Cards */}
        {project.backgroundImage && (
          <div className="absolute inset-0 bg-black/15" />
        )}

          {/* Card Content - 2 Column Layout */}
          <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-2">
            {/* LEFT - Empty Space (Device Mockup Removed) */}
            <div className="relative flex items-end justify-center p-8">
              {/* Device mockup temporarily removed */}
            </div>

            {/* RIGHT - Content */}
            <div
              className="flex flex-col justify-center p-8"
              style={{
                color: project.slug === "rudradharma-spiritual-ecommerce" ? "#8B4513" :
                       project.slug === "dohabus-qatar-tourism-platform" ? "#000000" : "white"
              }}
            >
              {/* Category Badge */}
              <motion.div
                className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-wider backdrop-blur-md"
                style={{
                  backgroundColor: project.slug === "rudradharma-spiritual-ecommerce" ? "rgba(139, 69, 19, 0.15)" :
                                    project.slug === "dohabus-qatar-tourism-platform" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.15)",
                  color: project.slug === "rudradharma-spiritual-ecommerce" ? "#8B4513" :
                         project.slug === "dohabus-qatar-tourism-platform" ? "#000000" : "white"
                }}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Smartphone
                  size={14}
                  style={{
                    color: project.slug === "rudradharma-spiritual-ecommerce" ? "#8B4513" :
                           project.slug === "dohabus-qatar-tourism-platform" ? "#000000" : "white"
                  }}
                />
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
                  <div
                    key={i}
                    className="rounded-xl p-3 backdrop-blur-sm"
                    style={{
                      backgroundColor: project.slug === "rudradharma-spiritual-ecommerce" ? "rgba(139, 69, 19, 0.15)" :
                                       project.slug === "dohabus-qatar-tourism-platform" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"
                    }}
                  >
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
                className="mt-auto inline-flex w-fit items-center gap-3 self-start rounded-full px-6 py-3.5 text-[14px] font-bold transition-all duration-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  backgroundColor: project.slug === "rudradharma-spiritual-ecommerce" ? "#8B4513" :
                                 project.slug === "dohabus-qatar-tourism-platform" ? "#000000" : "white",
                  color: project.slug === "rudradharma-spiritual-ecommerce" ? "white" :
                         project.slug === "dohabus-qatar-tourism-platform" ? "white" : "#1A1730"
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                whileHover={{
                  boxShadow: project.slug === "rudradharma-spiritual-ecommerce"
                    ? "0 20px 50px rgba(139, 69, 19, 0.4)"
                    : project.slug === "dohabus-qatar-tourism-platform"
                    ? "0 20px 50px rgba(0, 0, 0, 0.4)"
                    : "0 20px 50px rgba(255,255,255,0.3)",
                }}
              >
                View Case Study
                <motion.span
                  className="rounded-full p-1.5"
                  style={{
                    backgroundColor: project.slug === "rudradharma-spiritual-ecommerce" ? "rgba(139, 69, 19, 0.2)" :
                                   project.slug === "dohabus-qatar-tourism-platform" ? "rgba(0, 0, 0, 0.2)" : "rgba(26, 23, 48, 0.1)"
                  }}
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
  const [focusedCardIndex, setFocusedCardIndex] = useState<number | null>(null);
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

    if (!isPaused && focusedCardIndex === null) {
      animate();
    } else {
      controls.stop();
    }

    return () => controls.stop();
  }, [controls, isPaused, isMobile, totalWidth, focusedCardIndex]);

  // Handle card click to center it
  const handleCardClick = (index: number) => {
    if (isMobile) return;

    setIsPaused(true);
    setFocusedCardIndex(index);

    // Calculate position to center the card
    const containerWidth = containerRef.current?.parentElement?.offsetWidth || 0;
    const centeredPosition = -(index * (cardWidth + gap)) + (containerWidth / 2) - (cardWidth / 2);

    controls.start({
      x: centeredPosition,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    });
  };

  // Reset to normal scrolling
  const resetScrolling = () => {
    setIsPaused(false);
    setFocusedCardIndex(null);
  };

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
            <>
              {focusedCardIndex !== null && (
                <motion.button
                  className="absolute top-4 right-4 z-30 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-md hover:bg-white/20 transition-all"
                  onClick={resetScrolling}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  ← Back to Scrolling
                </motion.button>
              )}
              <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
                <motion.div
                  ref={containerRef}
                  className="flex gap-6"
                  animate={controls}
                  style={{ gap: "24px" }}
                >
                  {displayProjects.map((project, index) => (
                    <ProjectCard
                      key={`${project.id}-${index}`}
                      project={project}
                      index={index % PROJECTS.length}
                      onClick={() => handleCardClick(index % PROJECTS.length)}
                      isFocused={focusedCardIndex === index % PROJECTS.length}
                    />
                  ))}
                </motion.div>
              </div>
            </>
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
