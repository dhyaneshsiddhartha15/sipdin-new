"use client";

/**
 * AiPortfolio — Continuous horizontal marquee case-study showcase.
 * Smooth infinite scroll with Framer Motion. No snapping, no pagination.
 */

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Smartphone, Sparkles, TrendingUp, Award } from "lucide-react";
import { motion, useMotionValue, PanInfo } from "framer-motion";
import AIConsultationModal from "@/components/contact/AIConsultationModal";
import { getAllCaseStudies } from "@/lib/caseStudies";

// App screens cycled inside each card's phone mockup — one entry per project
const PROJECT_SCREENS: Record<string, string[]> = {
  "rudradharma-spiritual-ecommerce": [
    '/case-study/1.png',
    '/case-study/2.png',
    '/case-study/3.png',
    '/case-study/4.png',
    '/case-study/5.png',
    '/case-study/6.png',
  ],
  "dohabus-qatar-tourism-platform": [
    '/case-study/Doha-bus/8.jpg',
    '/case-study/Doha-bus/9.jpg',
    '/case-study/Doha-bus/10.jpg',
    '/case-study/Doha-bus/11.jpg',
    '/case-study/Doha-bus/12.jpg',
    '/case-study/Doha-bus/13.jpg',
  ],
  // Wafeeq mobile screens (same as case study gallery)
  "wafeeq-inclusive-digital-learning": [
    '/case-study/wafeeq/m-1.jpg',
    '/case-study/wafeeq/m-2.jpg',
    '/case-study/wafeeq/m-3.jpg',
    '/case-study/wafeeq/m-4.jpg',
    '/case-study/wafeeq/m-5.jpg',
    '/case-study/wafeeq/m-6.jpg',
  ],
  // SOLBiT mobile screens (same as case study gallery)
  "solbit-crm-ai-business-os": [
    '/case-study/solbit/m-1.png',
    '/case-study/solbit/m-2.png',
    '/case-study/solbit/m-3.png',
    '/case-study/solbit/m-4.png',
    '/case-study/solbit/m-5.png',
    '/case-study/solbit/m-6.png',
  ],
};

// Get only specific case studies: Dohabus, Rudradharma, Wafeeq, SOLBiT
const ALL_CASE_STUDIES = getAllCaseStudies();
const CASE_STUDIES = ALL_CASE_STUDIES.filter(cs =>
  cs.slug === "dohabus-qatar-tourism-platform" ||
  cs.slug === "rudradharma-spiritual-ecommerce" ||
  cs.slug === "wafeeq-inclusive-digital-learning" ||
  cs.slug === "solbit-crm-ai-business-os"
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
                  cs.slug === "dohabus-qatar-tourism-platform" ? "/ai-card/ai-doha.png" :
                  cs.slug === "solbit-crm-ai-business-os" ? "/ai-card/ai-solbit.svg" : null,
  deviceType: (cs.slug === "wafeeq-inclusive-digital-learning" ? "laptop" : "phone") as "phone" | "laptop",
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
  // Dynamic screen cycling — every card with a PROJECT_SCREENS entry auto-cycles
  const screens = PROJECT_SCREENS[project.slug];
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [screenOpacity, setScreenOpacity] = useState(1);

  // Auto-cycle through screens every 2 seconds
  useEffect(() => {
    if (!screens) return;

    const interval = setInterval(() => {
      setScreenOpacity(0);
      setTimeout(() => {
        setCurrentScreenIndex((prev) => (prev + 1) % screens.length);
        setScreenOpacity(1);
      }, 300); // Wait for fade out
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [screens]);

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
            {/* LEFT - Large Mobile Phone Mockup with App Screens */}
            <div className="relative flex items-center justify-center p-6 bg-gradient-to-br from-gray-50/10 to-gray-100/10">
              {/* Large Mobile Phone Frame - Rudradharma Style */}
              <div className="relative">
                {/* Realistic phone shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-[3.5rem] blur-2xl transform scale-105 translate-y-4"></div>

                {/* Main phone body - Larger size like Rudradharma case study */}
                <div className="relative w-[276px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full aspect-[357/735] bg-white rounded-[2.4rem] overflow-hidden relative">
                    {/* Project app screens — auto-cycling for every project with a PROJECT_SCREENS entry */}
                    {screens ? (
                      <div className="relative h-full">
                        <img
                          src={screens[currentScreenIndex]}
                          alt={`${project.name} app screen ${currentScreenIndex + 1}`}
                          className="w-full h-full object-cover object-top transition-opacity duration-300 ease-in-out"
                          style={{ opacity: screenOpacity }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.parentElement!.style.background = `linear-gradient(135deg, ${project.color}40, ${project.color}60)`;
                          }}
                        />
                        {/* Screen indicator dots */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                          {screens.map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all ${
                                i === currentScreenIndex ? 'bg-white' : 'bg-white/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Default fallback
                      <div className="relative h-full">
                        <img
                          src="/case-studies/dharohar/rudradharma-mobile.jpg"
                          alt="App screen"
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.parentElement!.style.background = `linear-gradient(135deg, ${project.color}40, ${project.color}60)`;
                          }}
                        />
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
  const [focusedCardIndex, setFocusedCardIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeX = useMotionValue(0);
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
  // Duration scales with distance so the scroll speed stays constant
  const marqueeDuration = (totalWidth / 674) * 22;

  // Animation for desktop marquee — a CSS-free rAF loop on a motion value so
  // pause/resume continues from the exact same pixel with no jump.
  useEffect(() => {
    if (isMobile || focusedCardIndex !== null) return;

    let raf = 0;
    let last = performance.now();
    // Speed: px/ms derived from totalWidth / marqueeDuration
    const speed = totalWidth / (marqueeDuration * 1000);

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      let next = marqueeX.get() - speed * dt;
      // Wrap seamlessly: one full set scrolled = jump back by totalWidth
      if (next <= -totalWidth) next += totalWidth;
      marqueeX.set(next);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isMobile, focusedCardIndex, totalWidth, marqueeDuration, marqueeX]);

  // Handle card click to center it
  const handleCardClick = (index: number) => {
    if (isMobile) return;

    setFocusedCardIndex(index);

    // Calculate position to center the card, wrapped into the first set
    const containerWidth = containerRef.current?.parentElement?.offsetWidth || 0;
    let centeredPosition = -(index * (cardWidth + gap)) + (containerWidth / 2) - (cardWidth / 2);
    while (centeredPosition < -totalWidth) centeredPosition += totalWidth;

    // Animate the motion value smoothly to the centered position
    const from = marqueeX.get();
    const startTime = performance.now();
    const duration = 700;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      marqueeX.set(from + (centeredPosition - from) * easeOut(t));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // Reset to normal scrolling
  const resetScrolling = () => {
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
                  style={{ gap: "24px", x: marqueeX }}
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
