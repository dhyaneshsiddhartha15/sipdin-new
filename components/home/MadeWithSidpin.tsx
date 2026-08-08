"use client";

/**
 * MadeWithSidpin — "Made with Sidpin" showcase.
 * TRUE horizontal animated carousel with Framer Motion.
 * ALL cards exist in DOM, only offset changes → smooth sliding.
 */

import { useCallback, useState } from "react";
import Link from "next/link";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Site = { src: string; name: string; description: string; gradient: string };

const SITES: Site[] = [
  {
    src: "/websits/rudradharma.png",
    name: "Rudradharma",
    description: "A 70-year Rudraksha legacy taken online with an authentic, trust-first storefront.",
    gradient: "linear-gradient(160deg, #F6C177 0%, #E8894A 100%)",
  },
  {
    src: "/websits/dohabus.png",
    name: "Dohabus",
    description: "A tour & travel booking experience with rich itineraries and immersive media.",
    gradient: "linear-gradient(160deg, #6FD08C 0%, #2FA968 100%)",
  },
  {
    src: "/websits/ag.png",
    name: "AG Fitness",
    description: "A fitness brand site engineered to turn visitors into members.",
    gradient: "linear-gradient(160deg, #5AA9F0 0%, #2E6FD6 100%)",
  },
  {
    src: "/websits/avni.png",
    name: "Anvi Partners",
    description: "A digital consulting site — business systems that connect acquisition to operations.",
    gradient: "linear-gradient(160deg, #E27D8B 0%, #C24A63 100%)",
  },
  {
    src: "/websits/sign.png",
    name: "Wafeeq",
    description: "An AI-powered sign language learning platform with real-time feedback.",
    gradient: "linear-gradient(160deg, #7C83F7 0%, #5A4FD6 100%)",
  },
  {
    src: "/websits/Screenshot 2026-07-11 024850.png",
    name: "Showcase",
    description: "A campaign system dashboard that measures what works and what fails.",
    gradient: "linear-gradient(160deg, #46C6C0 0%, #2A8F98 100%)",
  },
];

// Circular index helper
const mod = (n: number, m: number) => ((n % m) + m) % m;

// Calculate offset with shortest path for circular carousel
const getOffset = (index: number, activeIndex: number, total: number) => {
  let offset = index - activeIndex;
  // Handle wrap-around for shortest path
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
};

// Get position props based on offset (reduced spacing for tighter layout)
const getPositionProps = (offset: number) => {
  const cardWidth = 420;
  const gap = 30; // Reduced from 40
  const baseOffset = cardWidth + gap; // Now 450 instead of 460

  if (offset === 0) {
    return {
      x: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      zIndex: 20,
    };
  } else if (offset === 1) {
    return {
      x: baseOffset,
      scale: 0.88,
      rotate: 11, // Reduced from 15
      opacity: 0.85,
      zIndex: 10,
    };
  } else if (offset === -1) {
    return {
      x: -baseOffset,
      scale: 0.88,
      rotate: -11, // Reduced from 15
      opacity: 0.85,
      zIndex: 10,
    };
  } else if (offset === 2) {
    return {
      x: baseOffset * 2.2,
      scale: 0.7,
      rotate: 20, // Reduced from 25
      opacity: 0.4,
      zIndex: 5,
    };
  } else if (offset === -2) {
    return {
      x: -baseOffset * 2.2,
      scale: 0.7,
      rotate: -20, // Reduced from 25
      opacity: 0.4,
      zIndex: 5,
    };
  } else {
    // Far cards
    const dir = offset > 0 ? 1 : -1;
    const distance = Math.abs(offset);
    return {
      x: dir * baseOffset * (2.2 + (distance - 2) * 0.5),
      scale: 0.5,
      rotate: dir * 25, // Reduced from 30
      opacity: 0.15,
      zIndex: 1,
    };
  }
};

// Individual Carousel Card
function CarouselCard({
  site,
  offset,
  direction,
  onClick,
}: {
  site: Site;
  offset: number;
  direction: number;
  onClick: () => void;
}) {
  const props = getPositionProps(offset);
  const isCenter = offset === 0;

  return (
    <motion.div
      className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[300px] shrink-0 overflow-hidden rounded-[22px] cursor-pointer will-change-transform sm:w-[360px] md:w-[420px]"
      style={{
        background: site.gradient,
        zIndex: props.zIndex,
      }}
      // Entrance animation based on direction
      initial={{
        x: direction > 0 ? 800 : -800,
        opacity: 0,
        scale: 0.8,
      }}
      // Target position based on offset
      animate={{
        x: props.x,
        scale: props.scale,
        rotate: props.rotate,
        opacity: props.opacity,
      }}
      // Smooth spring animation
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      }}
      onClick={onClick}
      whileHover={isCenter ? { scale: 1.02 } : undefined}
      drag={isCenter ? "x" : false}
      dragConstraints={{ left: 100, right: 100 }}
      dragElastic={0.15}
      onDragEnd={(e, info: PanInfo) => {
        const swipeThreshold = 50;
        if (info.offset.x > swipeThreshold) {
          onClick();
        } else if (info.offset.x < -swipeThreshold) {
          onClick();
        }
      }}
    >
      {/* Shine effect for center card */}
      {isCenter && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[22px]"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.45) 50%, transparent 80%)",
            backgroundSize: "200% 100%",
          }}
        />
      )}

      <div className="p-6 md:p-7">
        <motion.p
          className="font-['Hanken_Grotesk'] text-[22px] font-extrabold text-[#12121a]"
          animate={{ scale: isCenter ? 1 : 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {site.name}
        </motion.p>
        <p className="mt-2 min-h-[54px] font-['Inter'] text-[13px] leading-relaxed text-[#12121a]/75">
          {site.description}
        </p>
      </div>

      {/* Browser frame with screenshot */}
      <div className="mx-5 mb-6 overflow-hidden rounded-xl border border-black/10 bg-black/5 shadow-lg md:mx-6">
        <div className="flex items-center gap-1.5 border-b border-black/10 bg-white/40 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={encodeURI(site.src)}
          alt={`${site.name} — website built by Sidpin`}
          loading="lazy"
          className="h-[180px] w-full object-cover object-top md:h-[210px]"
        />
      </div>

      {/* Floating animation for center card */}
      {isCenter && (
        <motion.div
          className="absolute inset-0 rounded-[22px]"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            pointerEvents: "none",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        />
      )}
    </motion.div>
  );
}

export default function MadeWithSidpin() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = SITES.length;

  // Navigate with direction tracking
  const navigate = useCallback((newIndex: number, dir: number) => {
    setDirection(dir);
    setActive(newIndex);
  }, []);

  const go = (dir: number) => {
    navigate(mod(active + dir, total), dir);
  };

  const goTo = (index: number) => {
    const offset = getOffset(index, active, total);
    navigate(index, offset > 0 ? 1 : -1);
  };

  return (
    <section className="relative overflow-hidden bg-[#0d0a24] py-[60px] text-white md:py-[90px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[#4169E1]/18 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[320px] w-[520px] rounded-full bg-[#7c3aed]/15 blur-[150px]" />
      </div>

      {/* Header */}
      <div className="relative z-20 mx-auto max-w-[900px] px-[24px] text-center">
        <motion.h2
          className="text-[38px] font-extrabold leading-[1.05] tracking-tight md:text-[58px]"
          style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Made with Sidpin
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/60"
          style={{ fontFamily: "Inter, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Now it&apos;s your turn to succeed online — whether it&apos;s an e-commerce store, a booking platform, a portfolio, or a full business site.
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="relative z-20 mx-auto mt-10 flex max-w-[1000px] items-center gap-3 px-[24px]">
        <motion.button
          type="button"
          aria-label="Previous"
          onClick={() => go(-1)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </motion.button>

        <div className="flex flex-1 items-center gap-2.5 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SITES.map((s, i) => (
            <motion.button
              key={s.name}
              type="button"
              onClick={() => goTo(i)}
              className={`shrink-0 rounded-full px-5 py-2.5 font-['Inter'] text-[14px] font-semibold transition-colors ${
                i === active ? "bg-white text-[#0d0a24]" : "bg-white/[0.06] text-white/70 hover:bg-white/12 hover:text-white"
              }`}
              animate={{
                scale: i === active ? 1.05 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              whileHover={{ scale: i === active ? 1.08 : 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {s.name}
            </motion.button>
          ))}
        </div>

        <motion.button
          type="button"
          aria-label="Next"
          onClick={() => go(1)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </motion.button>
      </div>

      {/* Carousel Stage - ALL cards rendered, only offset changes */}
      <div className="relative z-20 mx-auto mt-10 h-[330px] max-w-[1200px] px-[24px] md:h-[360px]">
        {SITES.map((site, index) => {
          const offset = getOffset(index, active, total);
          return (
            <CarouselCard
              key={site.name}
              site={site}
              offset={offset}
              direction={direction}
              onClick={() => goTo(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
