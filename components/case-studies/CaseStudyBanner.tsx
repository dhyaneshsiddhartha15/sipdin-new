"use client";

/**
 * CaseStudyBanner — the colored "Sidpin ✕ Product" banner used on case-study
 * cards. Accent background with a faint grid, the pairing title, and two tilted
 * white logo cards (Sidpin + the product). Logos are wordmarks on cream, so they
 * sit in white cards; products without a logo file show a letter placeholder.
 */

import { type CaseStudy, SIDPIN_LOGO } from "@/lib/caseStudies";

export default function CaseStudyBanner({ study }: { study: CaseStudy }) {
  const bg = study.bannerColor ?? study.accent;

  return (
    <div className="relative flex h-full min-h-[300px] w-full flex-col items-center justify-center overflow-hidden" style={{ background: bg }}>
      {/* Faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,40,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,40,0.9) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at center, black 55%, transparent 100%)",
        }}
      />

      {/* Pairing title */}
      <div className="relative z-10 mb-8 flex items-center gap-3 px-6 text-center">
        <span className="text-[24px] font-extrabold tracking-tight text-[#0f1728] md:text-[30px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          Sidpin
        </span>
        <span className="grid h-8 w-8 place-items-center rounded-md bg-white/70 text-[18px] font-bold text-[#0f1728]">✕</span>
        <span className="text-[24px] font-extrabold tracking-tight text-[#0f1728] md:text-[30px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          {study.product}
        </span>
      </div>

      {/* Connecting curve */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 300">
        <path d="M40 250 Q 200 120 360 40" fill="none" stroke="rgba(15,23,40,0.5)" strokeWidth="2.5" />
      </svg>

      {/* Logo cards */}
      <div className="relative z-10 flex items-center">
        <div className="grid h-[92px] w-[150px] -rotate-6 place-items-center overflow-hidden rounded-2xl bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SIDPIN_LOGO} alt="Sidpin" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="-ml-5 grid h-[92px] w-[150px] rotate-6 place-items-center overflow-hidden rounded-2xl bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
          {study.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={study.logo} alt={study.product} className="max-h-full max-w-full object-contain" />
          ) : (
            <span className="text-[40px] font-extrabold" style={{ color: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}>
              {study.productInitial}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
