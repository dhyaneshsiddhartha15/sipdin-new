/**
 * RecentWorkDetail — full social-media campaign case-study page (modelled on the
 * reference "Naturals" layout). Dark theme with a per-campaign accent: hero +
 * highlight card, process cards, 90-day results, per-platform performance,
 * creative gallery, tools, client quote, and a closing CTA.
 */

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Target,
  PenTool,
  Users,
  TrendingUp,
  PieChart,
  Building2,
  Clock,
  Share2,
} from "lucide-react";
import type { RecentWork } from "@/lib/recentWork";

const PROCESS = [
  { icon: Target, title: "Strategy & Planning", body: "We researched the audience, competitors, and market trends to create a data-driven content strategy." },
  { icon: PenTool, title: "Content Creation", body: "High-quality posts, reels, stories, carousels, and ads designed to engage and convert." },
  { icon: Users, title: "Community Management", body: "We engaged with the audience, replied to comments, and built a strong, loyal community." },
  { icon: TrendingUp, title: "Paid Campaigns", body: "Targeted ad campaigns to increase reach, website traffic, and product sales." },
  { icon: PieChart, title: "Analytics & Reporting", body: "Regular performance tracking and reports to optimize strategy and maximize ROI." },
];

const TOOLS = ["Meta", "Google Ads", "Canva", "Photoshop", "Illustrator", "Premiere Pro"];

function MiniChart({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 34" className="mt-3 h-8 w-full" preserveAspectRatio="none" aria-hidden="true">
      <polyline
        points="0,30 18,26 34,28 52,18 70,20 88,10 104,12 120,3"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RecentWorkDetail({ work }: { work: RecentWork }) {
  const a = work.accent;

  return (
    <main className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[1120px] px-[24px] pt-32 md:px-[40px] md:pt-36">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/70 transition-colors hover:text-white" style={{ fontFamily: "Geist, sans-serif" }}>
            <ArrowLeft size={16} /> Back to All Work
          </Link>
        </div>

        {/* Hero */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-black" style={{ background: a, fontFamily: "Geist, sans-serif" }}>
              Social Media Campaign
            </span>
            <h1 className="mt-6 text-[38px] font-extrabold leading-[1.03] tracking-tight md:text-[52px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              {work.heroTitle}
              <br />
              <span style={{ color: a }}>{work.heroTitleAccent}</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
              {work.intro}
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap gap-8">
              <Meta icon={Building2} label="Industry" value={work.industry} />
              <Meta icon={Clock} label="Duration" value={work.duration} />
              <Meta icon={Share2} label="Platforms" value={work.platforms.join(" · ")} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={work.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-bold text-black transition-transform duration-300 hover:scale-[1.04]" style={{ background: a, fontFamily: "Geist, sans-serif" }}>
                View Live Campaign <ArrowRight size={16} />
              </a>
              <a href={work.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white/50" style={{ fontFamily: "Geist, sans-serif" }}>
                Watch Campaign Reel <Play size={14} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Highlight card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]" style={{ background: `linear-gradient(160deg, ${work.gradient[0]}, ${work.gradient[1]})` }}>
            <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: `radial-gradient(520px 240px at 70% 0%, ${a}44, transparent)` }} />
            <div className="relative">
              <span className="text-[13px] font-semibold uppercase tracking-[0.25em]" style={{ color: a, fontFamily: "Geist, sans-serif" }}>
                {work.handle}
              </span>
              <p className="mt-6 text-[28px] font-extrabold leading-tight md:text-[34px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                {work.brand}
              </p>
              <p className="mt-2 text-[14px] text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                {work.productLine}
              </p>

              <div className="mt-10 rounded-2xl bg-black/30 p-5 backdrop-blur">
                <div className="flex items-end justify-between">
                  <span className="text-[30px] font-extrabold" style={{ color: a, fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {work.heroStat.value}
                  </span>
                  <span className="mb-1 text-[13px] text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                    {work.heroStat.label}
                  </span>
                </div>
                <MiniChart color={a} />
              </div>
            </div>
          </div>
        </div>

        {/* How we managed */}
        <Section title="How We Managed Their Social Media" subtitle="A complete 360° approach to build brand presence and drive measurable results.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg" style={{ background: `${a}22`, color: a }}>
                  <p.icon size={19} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>{p.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-white/55" style={{ fontFamily: "Inter, sans-serif" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section title={`Campaign Results (${work.duration})`}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {work.results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[30px] font-extrabold leading-none" style={{ color: a, fontFamily: "Hanken Grotesk, sans-serif" }}>{r.value}</div>
                <div className="mt-2 text-[12.5px] text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>{r.label}</div>
                <MiniChart color={a} />
              </div>
            ))}
          </div>
        </Section>

        {/* Performance by platform */}
        <Section title="Performance by Platform" subtitle="How the campaign performed across every major social platform.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {work.platformPerf.map((pf) => (
              <div key={pf.platform} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-[15px] font-bold" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>{pf.platform}</p>
                <div className="mt-4 space-y-3">
                  {pf.rows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-[13px]" style={{ fontFamily: "Inter, sans-serif" }}>
                      <span className="text-white/50">{row.label}</span>
                      <span className="flex items-center gap-2">
                        <span className="font-semibold text-white">{row.value}</span>
                        <span className="font-semibold" style={{ color: a }}>{row.delta}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Creative work */}
        <Section title="Our Creative Work" subtitle="Designs, videos & content that captured attention and built brand identity.">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] rounded-2xl border border-white/10" style={{ background: `linear-gradient(${140 + i * 20}deg, ${work.gradient[0]}, ${work.gradient[1]})` }} />
            ))}
          </div>
        </Section>

        {/* Tools */}
        <Section title="Tools & Platforms We Use">
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((t) => (
              <span key={t} className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-[13px] font-semibold text-white/80" style={{ fontFamily: "Geist, sans-serif" }}>
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Client quote */}
        <Section title="What Our Client Says">
          <figure className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <p className="text-[20px] font-semibold italic leading-relaxed text-white md:text-[26px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              &ldquo;{work.clientQuote.text}&rdquo;
            </p>
            <figcaption className="mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="block text-[15px] font-bold text-white">{work.clientQuote.name}</span>
              <span className="text-[13px] text-white/55">{work.clientQuote.role}</span>
            </figcaption>
          </figure>
        </Section>
      </div>

      {/* Final CTA */}
      <div className="mx-auto mt-20 max-w-[1120px] px-[24px] pb-24 md:px-[40px]">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center md:p-12" style={{ background: a }}>
          <div>
            <h2 className="text-[26px] font-extrabold leading-tight text-black md:text-[34px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              Ready to Get Similar Results for Your Brand?
            </h2>
            <p className="mt-2 text-[15px] text-black/70" style={{ fontFamily: "Inter, sans-serif" }}>
              Let&apos;s create, manage, and grow your brand together.
            </p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-7 py-3.5 text-[14px] font-bold text-white transition-transform duration-300 hover:scale-[1.04]" style={{ fontFamily: "Geist, sans-serif" }}>
            Let&apos;s Work Together <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}

function Meta({ icon: Icon, label, value }: { icon: typeof Building2; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon size={17} className="mt-0.5 text-white/40" />
      <div style={{ fontFamily: "Inter, sans-serif" }}>
        <p className="text-[11px] uppercase tracking-wide text-white/40">{label}</p>
        <p className="text-[14px] font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="mt-20">
      <h2 className="text-[26px] font-extrabold tracking-tight md:text-[34px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-[14px] text-white/55" style={{ fontFamily: "Inter, sans-serif" }}>{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
