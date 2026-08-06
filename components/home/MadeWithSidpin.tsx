"use client";

/**
 * MadeWithSidpin — "Made with Sidpin" showcase.
 * Coverflow-style tabbed carousel: a tab bar of project names + a 3-card stage
 * (tilted side cards, upright highlighted center). Reuses the real website
 * screenshots from /public/websits.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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

const mod = (n: number, m: number) => ((n % m) + m) % m;

const CARD_TRANSFORM: Record<"left" | "center" | "right", string> = {
  // Symmetric fan: sides offset ±68% from centre, sit slightly lower, tilt ±12°.
  center: "translate(-50%, -52%) scale(1) rotate(0deg)",
  left: "translate(-118%, -46%) scale(0.9) rotate(-12deg)",
  right: "translate(18%, -46%) scale(0.9) rotate(12deg)",
};

function StageCard({ site, position }: { site: Site; position: "left" | "center" | "right" }) {
  const isCenter = position === "center";
  return (
    <div
      className="absolute left-1/2 top-1/2 w-[300px] shrink-0 overflow-hidden rounded-[22px] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.85)] transition-all duration-700 ease-out sm:w-[360px] md:w-[420px]"
      style={{
        background: site.gradient,
        transform: CARD_TRANSFORM[position],
        zIndex: isCenter ? 20 : 10,
        opacity: isCenter ? 1 : 0.9,
      }}
    >
      <div className="p-6 md:p-7">
        <p className="font-['Hanken_Grotesk'] text-[22px] font-extrabold text-[#12121a]">{site.name}</p>
        <p className="mt-2 min-h-[54px] font-['Inter'] text-[13px] leading-relaxed text-[#12121a]/75">
          {site.description}
        </p>
      </div>
      {/* Screenshot in a browser frame */}
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
    </div>
  );
}

export default function MadeWithSidpin() {
  const [active, setActive] = useState(0);
  const total = SITES.length;
  const pausedRef = useRef(false);

  const go = (dir: number) => setActive((a) => mod(a + dir, total));

  // Auto-advance: current card rotates back, the next comes forward. Pauses on hover.
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((a) => mod(a + 1, total));
    }, 3500);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section
      className="relative overflow-hidden bg-[#0d0a24] py-[80px] text-white md:py-[110px]"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[#4169E1]/18 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[320px] w-[520px] rounded-full bg-[#7c3aed]/15 blur-[150px]" />
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-[900px] px-[24px] text-center">
        <h2 className="text-[38px] font-extrabold leading-[1.05] tracking-tight md:text-[58px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          Made with Sidpin
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
          Now it&apos;s your turn to succeed online — whether it&apos;s an e-commerce store, a booking platform, a portfolio, or a full business site.
        </p>
      </div>

      {/* Tabs */}
      <div className="relative mx-auto mt-10 flex max-w-[1000px] items-center gap-3 px-[24px]">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(-1)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>

        <div className="flex flex-1 items-center gap-2.5 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SITES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-5 py-2.5 font-['Inter'] text-[14px] font-semibold transition-colors ${
                i === active ? "bg-white text-[#0d0a24]" : "bg-white/[0.06] text-white/70 hover:bg-white/12 hover:text-white"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={() => go(1)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      {/* Coverflow stage */}
      <div className="relative mx-auto mt-12 h-[440px] max-w-[1200px] px-[24px] md:h-[480px]">
        <StageCard site={SITES[mod(active - 1, total)]} position="left" />
        <StageCard site={SITES[active]} position="center" />
        <StageCard site={SITES[mod(active + 1, total)]} position="right" />
      </div>

      <div className="relative mt-4 text-center">
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-white px-9 py-3.5 text-[15px] font-bold text-[#0d0a24] transition-transform duration-300 hover:scale-[1.04]"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
