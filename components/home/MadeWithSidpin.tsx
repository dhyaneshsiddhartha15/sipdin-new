"use client";

/**
 * MadeWithSidpin — "Made with Sidpin" showcase (Hostinger-style). A centred
 * heading + CTA over two rows of real website screenshots that scroll as
 * opposing marquees. Screenshots live in /public/websits.
 */

import Link from "next/link";

type Site = { src: string; name: string };

const SITES: Site[] = [
  { src: "/websits/rudradharma.png", name: "Rudradharma" },
  { src: "/websits/dohabus.png", name: "Dohabus" },
  { src: "/websits/ag.png", name: "AG" },
  { src: "/websits/avni.png", name: "Anvi Partners" },
  { src: "/websits/sign.png", name: "Sign" },
  { src: "/websits/Screenshot 2026-07-11 024850.png", name: "Showcase" },
];

const ROW_A = [SITES[0], SITES[1], SITES[2]];
const ROW_B = [SITES[3], SITES[4], SITES[5]];

function Card({ site }: { site: Site }) {
  return (
    <div className="group/card relative w-[300px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:-translate-y-1.5 hover:border-white/25 sm:w-[400px] md:w-[480px]">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
      </div>
      <div className="relative h-[210px] overflow-hidden sm:h-[270px] md:h-[300px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={encodeURI(site.src)}
          alt={`${site.name} — website built by Sidpin`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-[3000ms] ease-linear group-hover/card:object-bottom"
        />
      </div>
    </div>
  );
}

function Row({ items, reverse = false }: { items: Site[]; reverse?: boolean }) {
  // Duplicate the set so translateX(-50%) loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="group flex overflow-hidden">
      <div
        className="flex shrink-0 gap-6 pe-6 group-hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "sidpin-marquee-rev" : "sidpin-marquee"} 38s linear infinite`,
        }}
      >
        {loop.map((s, i) => (
          <Card key={`${s.name}-${i}`} site={s} />
        ))}
      </div>
    </div>
  );
}

export default function MadeWithSidpin() {
  return (
    <section className="relative overflow-hidden bg-[#0d0a24] py-[80px] text-white md:py-[110px]">
      <style>{`
        @keyframes sidpin-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes sidpin-marquee-rev {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

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
        <Link
          href="/contact"
          className="mt-9 inline-flex rounded-full bg-white px-9 py-3.5 text-[15px] font-bold text-[#0d0a24] transition-transform duration-300 hover:scale-[1.04]"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Get started
        </Link>
      </div>

      {/* Marquee rows */}
      <div className="relative mt-16 flex flex-col gap-6">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d0a24] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0d0a24] to-transparent md:w-40" />
      </div>
    </section>
  );
}
