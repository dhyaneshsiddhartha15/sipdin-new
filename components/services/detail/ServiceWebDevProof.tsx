"use client";

/**
 * ServiceWebDevProof — Animated web development case study showcase
 * Similar to AI portfolio with phone mockups and cycling app screens
 */

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Smartphone, Code, Globe } from "lucide-react";
import { motion, useAnimation, useMotionValue, useTransform, PanInfo } from "framer-motion";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/caseStudies";

// Rudradharma app screens for cycling
const RUDRADHARMA_SCRENS = [
  '/case-study/1.png',
  '/case-study/2.png',
  '/case-study/3.png',
  '/case-study/4.png',
  '/case-study/5.png',
  '/case-study/6.png',
];

// Dohabus app screens for cycling
const DOHABUS_SCRENS = [
  '/case-study/Doha-bus/8.jpg',
  '/case-study/Doha-bus/9.jpg',
  '/case-study/Doha-bus/10.jpg',
  '/case-study/Doha-bus/11.jpg',
  '/case-study/Doha-bus/12.jpg',
  '/case-study/Doha-bus/13.jpg',
];

// Get web development case studies: Rudradharma, Dohabus, and add web-dev focused ones
const ALL_CASE_STUDIES = getAllCaseStudies();
const WEBDEV_CASE_STUDIES = ALL_CASE_STUDIES.filter(cs =>
  cs.slug === "dohabus-qatar-tourism-platform" ||
  cs.slug === "rudradharma-spiritual-ecommerce" ||
  cs.slug === "wafeeq-inclusive-digital-learning" ||
  cs.slug === "ritm-hospitality-institute-website" ||
  cs.slug === "anvi-partners-landing-page"
).slice(0, 3); // Start with 3 as requested

const PROJECTS = WEBDEV_CASE_STUDIES.map((cs) => ({
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
  alt: `${cs.product} web development case study`,
  slug: cs.slug,
}));

function ProjectCard({
  project,
  index,
  isMobile = false,
  onClick,
  isFocused = false,
}: {
  project: typeof PROJECTS[0];
  index: number;
  isMobile?: boolean;
  onClick?: () => void;
  isFocused?: boolean;
}) {
  // Dynamic screen cycling for Rudradharma and Dohabus
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [screenOpacity, setScreenOpacity] = useState(1);

  // Auto-cycle through screens every 2 seconds
  useEffect(() => {
    if (project.slug === "rudradharma-spiritual-ecommerce") {
      const interval = setInterval(() => {
        setScreenOpacity(0);
        setTimeout(() => {
          setCurrentScreenIndex((prev) => (prev + 1) % 6);
          setScreenOpacity(1);
        }, 300);
      }, 2000);
      return () => clearInterval(interval);
    } else if (project.slug === "dohabus-qatar-tourism-platform") {
      const interval = setInterval(() => {
        setScreenOpacity(0);
        setTimeout(() => {
          setCurrentScreenIndex((prev) => (prev + 1) % 6);
          setScreenOpacity(1);
        }, 300);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [project.slug]);

  return (
    <motion.div
      className="relative shrink-0 cursor-pointer"
      style={{
        width: isMobile ? "100%" : "650px",
        height: isMobile ? "600px" : "650px",
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
      {/* Card with background */}
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
            {/* LEFT - Large Mobile Phone Mockup with App Screens */}
            <div className="relative flex items-center justify-center p-6 bg-gradient-to-br from-gray-50/10 to-gray-100/10">
              {/* Large Mobile Phone Frame */}
              <div className="relative">
                {/* Realistic phone shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-[3.5rem] blur-2xl transform scale-105 translate-y-4"></div>

                {/* Main phone body */}
                <div className="relative w-[276px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full aspect-[357/735] bg-white rounded-[2.4rem] overflow-hidden relative">
                    {/* Project specific app screens */}
                    {project.slug === "rudradharma-spiritual-ecommerce" ? (
                      <div className="relative h-full">
                        <img
                          src={`/case-study/${currentScreenIndex + 1}.png`}
                          alt={`Rudradharma app screen ${currentScreenIndex + 1}`}
                          className="w-full h-full object-cover object-top transition-opacity duration-300 ease-in-out"
                          style={{ opacity: screenOpacity }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.parentElement!.style.background = `linear-gradient(135deg, ${project.color}40, ${project.color}60)`;
                          }}
                        />
                        {/* Screen indicator dots */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                          {[0, 1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all ${
                                i === currentScreenIndex ? 'bg-white' : 'bg-white/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : project.slug === "dohabus-qatar-tourism-platform" ? (
                      <div className="relative h-full">
                        <img
                          src={DOHABUS_SCRENS[currentScreenIndex]}
                          alt={`Dohabus app screen ${currentScreenIndex + 1}`}
                          className="w-full h-full object-cover object-top transition-opacity duration-300 ease-in-out"
                          style={{ opacity: screenOpacity }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.parentElement!.style.background = `linear-gradient(135deg, ${project.color}40, ${project.color}60)`;
                          }}
                        />
                        {/* Screen indicator dots */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                          {[0, 1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all ${
                                i === currentScreenIndex ? 'bg-white' : 'bg-white/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : project.slug === "wafeeq-inclusive-digital-learning" ? (
                      <div className="relative h-full">
                        <img
                          src="/case-studies/dharohar/wafeeq-mobile.jpg"
                          alt="Wafeeq app screen"
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.parentElement!.style.background = `linear-gradient(135deg, ${project.color}40, ${project.color}60)`;
                          }}
                        />
                      </div>
                    ) : (
                      // Default fallback for web development projects
                      <div className="relative h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <Code size={32} className="mx-auto mb-2" />
                          <p className="text-sm font-semibold">Web Development</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone reflection/shadow */}
                <div className="absolute -bottom-8 left-8 right-8 h-12 bg-black/30 rounded-full blur-2xl"></div>
              </div>
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
                <Globe
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

export default function ServiceWebDevProof() {
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
    <section
      className="relative overflow-hidden bg-bg px-6 py-[88px] md:px-[80px]"
    >
      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* Section Header */}
        <motion.div
          className="mb-10 text-center md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
            03 — Proof
          </span>
          <h2
            className="font-['Hanken_Grotesk'] mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-fg md:text-[42px]"
          >
            Real projects.{" "}
            <em className="not-italic text-brand md:italic">Real results.</em>
          </h2>

          <p className="font-['Inter'] mx-auto mt-5 max-w-[700px] text-[15px] leading-relaxed text-fg-2">
            Every number below comes from work we shipped. Ask us on the call — we'll walk you through the project.
          </p>

          <Link
            href="/case-studies"
            className="font-['Geist'] mt-6 inline-flex items-center gap-3 rounded-full bg-surface px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-fg transition-transform duration-300 hover:scale-[1.03]"
          >
            See Our Portfolio
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </motion.div>

        {/* Desktop Marquee */}
        {!isMobile ? (
          <>
            {focusedCardIndex !== null && (
              <motion.button
                className="absolute top-4 right-4 z-30 rounded-full bg-surface-2 px-4 py-2 text-fg backdrop-blur-md hover:bg-surface-3 transition-all"
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
                    i === mobileIndex ? "w-6 bg-brand" : "bg-fg-3"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}