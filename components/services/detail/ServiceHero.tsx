/**
 * Service hero — headline + promise callout + stat row + CTA on the left,
 * a live-dashboard mockup on the right (bars are static, this is a visual).
 */

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import type { Service, ServiceCategory } from "@/lib/services";
import { SERVICE_STATS } from "@/lib/serviceDetail";

/** Relative bar heights for the mockup chart, in %. */
const BARS = [38, 52, 58, 74, 82, 96];

export default function ServiceHero({
  service,
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  return (
    <section className="relative overflow-hidden bg-bg px-6 pb-[72px] pt-[64px] md:px-[80px] md:pb-[96px]">
      <div className="ai-grid-bg pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        {/* ---- Copy ---- */}
        <div>
          <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
            {category.name}
          </span>

          <h1 className="font-['Hanken_Grotesk'] mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-fg md:text-[58px]">
            {service.heroTitle}
          </h1>
          <p className="font-['Hanken_Grotesk'] mt-2 text-[30px] font-semibold italic leading-[1.15] text-brand md:text-[42px]">
            {service.tagline}
          </p>

          {/* Promise callout */}
          <div className="mt-9 flex max-w-[520px] items-start gap-4 rounded-2xl border border-brand/40 bg-surface px-5 py-4">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
              <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
            </span>
            <p className="font-['Inter'] text-[14.5px] leading-relaxed text-fg-2">
              {service.intro}
            </p>
          </div>

          <p className="font-['Inter'] mt-7 max-w-[520px] text-[14.5px] leading-relaxed text-fg-2">
            {service.description}
          </p>

          {/* Stat row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            {SERVICE_STATS.map((stat, i) => (
              <span key={stat.label} className="flex items-center gap-4">
                {i > 0 ? <span className="text-fg-3">|</span> : null}
                <span className="font-['Geist'] text-[15px] font-bold text-brand">
                  {stat.value}{" "}
                  <span className="font-['Geist'] text-[13px] font-normal text-fg-2">
                    {stat.label}
                  </span>
                </span>
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="font-['Geist'] mt-10 inline-flex items-center justify-center rounded-full bg-brand px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            Get My Free Audit
          </Link>
        </div>

        {/* ---- Dashboard mockup ---- */}
        <div className="relative">
          <div className="overflow-hidden rounded-[20px] bg-[#0b1020] shadow-[0_30px_80px_-30px_rgba(15,23,42,0.6)] ring-1 ring-white/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand/30" />
              <span className="font-['Geist'] ml-3 text-[11px] tracking-[0.1em] text-white/45">
                your-dashboard.live
              </span>
            </div>

            <div className="px-6 pb-6 pt-6 md:px-8">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {SERVICE_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-['Geist'] text-[10px] uppercase tracking-[0.2em] text-white/45">
                      {stat.label}
                    </p>
                    <p className="font-['Hanken_Grotesk'] mt-1.5 text-[30px] font-bold leading-none text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="mt-8 flex h-[190px] items-end gap-3 border-b border-white/10 pb-1">
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t-[4px]"
                    style={{
                      height: `${h}%`,
                      backgroundImage:
                        "linear-gradient(180deg,#6E8CFF 0%,#4169E1 55%,#2E4FB8 100%)",
                    }}
                  />
                ))}
              </div>

              <p className="font-['Geist'] mt-4 text-[11px] leading-relaxed text-white/45">
                Every enquiry, form and sale attributed to the work that caused it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
