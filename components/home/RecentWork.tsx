"use client";

/**
 * RecentWork — dark "Recent Work" poster gallery (from reference video). A row
 * of tilted portrait poster cards, each with a category tag + label, linking to
 * a full social-media campaign detail page. Poster art uses brand gradients.
 */

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllRecentWork } from "@/lib/recentWork";

export default function RecentWork() {
  const items = getAllRecentWork();

  return (
    <section className="relative overflow-hidden bg-[#080808] py-[80px] text-white md:py-[110px]">
      {/* Header */}
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-6 px-[24px] md:flex-row md:items-end md:justify-between md:px-[48px]">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#C6F24E]" style={{ fontFamily: "Geist, sans-serif" }}>
            Recent Work
          </span>
          <h2 className="mt-4 text-[38px] font-extrabold leading-[1.03] tracking-tight md:text-[56px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            Campaigns that got
            <br /> brands noticed.
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C6F24E] px-6 py-3 text-[14px] font-bold text-black transition-transform duration-300 hover:scale-[1.04]"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Full Gallery
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Poster gallery */}
      <div className="relative mt-14 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max gap-6 px-[24px] md:px-[48px]">
          {items.map((w, i) => {
            const tilt = i % 2 === 0 ? "-rotate-2" : "rotate-2";
            return (
              <Link
                key={w.slug}
                href={`/recent-work/${w.slug}`}
                className={`group relative block w-[240px] shrink-0 ${tilt} transition-transform duration-500 hover:rotate-0 hover:-translate-y-2 md:w-[280px]`}
              >
                {/* Category tag */}
                <span
                  className="absolute left-3 top-3 z-10 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
                  style={{ background: w.accent, fontFamily: "Geist, sans-serif" }}
                >
                  {w.handle}
                </span>

                {/* Poster */}
                <div
                  className="relative flex aspect-[3/4.4] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]"
                  style={{ background: `linear-gradient(160deg, ${w.gradient[0]}, ${w.gradient[1]})` }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: `radial-gradient(420px 200px at 30% 0%, ${w.accent}55, transparent)` }} />
                  <div className="relative">
                    <span className="grid h-11 w-11 place-items-center rounded-full overflow-hidden text-[16px] font-extrabold text-black" style={{ background: w.accent, fontFamily: "Hanken Grotesk, sans-serif" }}>
                      {w.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={w.logo} alt={w.brand} className="h-full w-full object-cover" />
                      ) : (
                        w.brand[0]
                      )}
                    </span>
                    <h3 className="mt-4 text-[22px] font-extrabold leading-[1.05] text-white" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      {w.brand}
                    </h3>
                    <p className="mt-1.5 text-[12px] leading-snug text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                      {w.heroStat.value} {w.heroStat.label}
                    </p>
                  </div>
                </div>

                {/* Category label */}
                <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: "Geist, sans-serif" }}>
                  {w.category}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
