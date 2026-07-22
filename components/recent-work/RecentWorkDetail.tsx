/**
 * RecentWorkDetail — full social-media campaign case-study page. Theme-aware
 * (light/dark via semantic tokens: bg-bg / bg-surface / text-fg / border-line)
 * with a per-campaign accent: hero + real Instagram profile card, process
 * cards, results, per-platform performance, an "Our Creative Work" block that
 * embeds the client's real YouTube channel + posters, tools, quote and CTA.
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
  Camera,
  MonitorPlay,
  ExternalLink,
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
  const igFollowers = work.platformPerf.find((p) => p.platform === "Instagram")?.rows.find((r) => /follower/i.test(r.label));

  return (
    <main className="bg-bg text-fg">
      <div className="mx-auto max-w-[1120px] px-[24px] pt-32 md:px-[40px] md:pt-36">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-[13px] font-medium text-fg/70 transition-colors hover:text-fg" style={{ fontFamily: "Geist, sans-serif" }}>
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
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-fg/60" style={{ fontFamily: "Inter, sans-serif" }}>
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
              {work.youtubeUrl && (
                <a href={work.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-semibold text-fg transition-colors hover:border-fg/40" style={{ fontFamily: "Geist, sans-serif" }}>
                  Watch on YouTube <Play size={14} fill="currentColor" />
                </a>
              )}
            </div>
          </div>

          {/* Real Instagram profile card — colored gradient surface, always white text */}
          <a
            href={work.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl border border-white/10 p-8 text-white shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:-translate-y-1"
            style={{ background: `linear-gradient(160deg, ${work.gradient[0]}, ${work.gradient[1]})` }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: `radial-gradient(520px 240px at 70% 0%, ${a}44, transparent)` }} />
            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-full text-[18px] font-extrabold text-black" style={{ background: a, fontFamily: "Hanken Grotesk, sans-serif" }}>
                  {work.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={work.logo} alt={work.brand} className="h-full w-full object-cover" />
                  ) : (
                    work.brand[0]
                  )}
                </span>
                <div>
                  <p className="text-[20px] font-extrabold leading-tight" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {work.brand}
                  </p>
                  <span className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: a, fontFamily: "Geist, sans-serif" }}>
                    <Camera size={14} /> {work.handle}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-[14px] text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                {work.productLine}
              </p>

              {/* Real profile stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {igFollowers && <ProfileStat value={igFollowers.value} label="Followers" accent={a} />}
                <ProfileStat value={work.heroStat.value} label={work.heroStat.label} accent={a} />
                <ProfileStat value={work.platforms.length.toString()} label="Platforms" accent={a} />
              </div>

              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[13px] font-bold text-white transition-colors group-hover:bg-white/20" style={{ fontFamily: "Geist, sans-serif" }}>
                <Camera size={15} /> View Instagram profile <ArrowUpRightMini />
              </span>
            </div>
          </a>
        </div>

        {/* How we managed */}
        <Section title="How We Managed Their Social Media" subtitle="A complete 360° approach to build brand presence and drive measurable results.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-surface p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg" style={{ background: `${a}22`, color: a }}>
                  <p.icon size={19} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>{p.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-fg/60" style={{ fontFamily: "Inter, sans-serif" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section title={`Campaign Results (${work.duration})`}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {work.results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-line bg-surface p-5">
                <div className="text-[30px] font-extrabold leading-none" style={{ color: a, fontFamily: "Hanken Grotesk, sans-serif" }}>{r.value}</div>
                <div className="mt-2 text-[12.5px] text-fg/60" style={{ fontFamily: "Inter, sans-serif" }}>{r.label}</div>
                <MiniChart color={a} />
              </div>
            ))}
          </div>
        </Section>

        {/* Performance by platform */}
        <Section title="Performance by Platform" subtitle="How the campaign performed across every major social platform.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {work.platformPerf.map((pf) => (
              <div key={pf.platform} className="rounded-2xl border border-line bg-surface p-6">
                <p className="text-[15px] font-bold" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>{pf.platform}</p>
                <div className="mt-4 space-y-3">
                  {pf.rows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-[13px]" style={{ fontFamily: "Inter, sans-serif" }}>
                      <span className="text-fg/50">{row.label}</span>
                      <span className="flex items-center gap-2">
                        <span className="font-semibold text-fg">{row.value}</span>
                        <span className="font-semibold" style={{ color: a }}>{row.delta}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Creative work — real embeds */}
        <Section title="Our Creative Work" subtitle="Designs, videos & content that captured attention and built brand identity.">
          <CreativeWork work={work} />
        </Section>

        {/* Tools */}
        <Section title="Tools & Platforms We Use">
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((t) => (
              <span key={t} className="rounded-full border border-line bg-surface px-5 py-2.5 text-[13px] font-semibold text-fg/80" style={{ fontFamily: "Geist, sans-serif" }}>
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Client quote */}
        <Section title="What Our Client Says">
          <figure className="rounded-3xl border border-line bg-surface p-8 md:p-12">
            <p className="text-[20px] font-semibold italic leading-relaxed text-fg md:text-[26px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              &ldquo;{work.clientQuote.text}&rdquo;
            </p>
            <figcaption className="mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="block text-[15px] font-bold text-fg">{work.clientQuote.name}</span>
              <span className="text-[13px] text-fg/55">{work.clientQuote.role}</span>
            </figcaption>
          </figure>
        </Section>
      </div>

      {/* Final CTA — accent surface, always black text */}
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

function ArrowUpRightMini() {
  return <ArrowRight size={13} className="-rotate-45" />;
}

function ProfileStat({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="rounded-xl bg-black/25 px-3 py-3 text-center backdrop-blur">
      <div className="text-[18px] font-extrabold leading-none" style={{ color: accent, fontFamily: "Hanken Grotesk, sans-serif" }}>{value}</div>
      <div className="mt-1.5 text-[10.5px] leading-tight text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>{label}</div>
    </div>
  );
}

/** Real creative work: embedded YouTube channel + posters + profile links. */
function CreativeWork({ work }: { work: RecentWork }) {
  const a = work.accent;
  const hasYouTube = !!work.youtubeUploadsId;
  const hasPosters = !!work.posters?.length;

  return (
    <div className="space-y-8">
      {/* YouTube channel embed + posters — same row (side by side) on large screens */}
      {(hasYouTube || hasPosters) && (
        <div className={hasYouTube && hasPosters ? "grid gap-6 lg:grid-cols-2 lg:items-start" : "space-y-8"}>
          {hasYouTube && (
            <div>
              <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-fg/60" style={{ fontFamily: "Geist, sans-serif" }}>
                <MonitorPlay size={16} style={{ color: a }} /> Latest from their channel
              </p>
              <div className="overflow-hidden rounded-2xl border border-line bg-black shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]">
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/videoseries?list=${work.youtubeUploadsId}`}
                    title={`${work.brand} on YouTube`}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}

          {hasPosters && (
            <div>
              <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em] text-fg/60" style={{ fontFamily: "Geist, sans-serif" }}>
                Poster &amp; campaign artwork
              </p>
              <div className="grid grid-cols-1 gap-4">
                {work.posters!.map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={`${work.brand} campaign poster`}
                    className="w-full rounded-2xl border border-line object-cover shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Follow / watch link cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href={work.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-fg/25 hover:bg-surface-2"
        >
          <span className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${a}22`, color: a }}>
              <Camera size={20} />
            </span>
            <span style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="block text-[14px] font-bold text-fg">Instagram</span>
              <span className="text-[12.5px] text-fg/55">{work.handle}</span>
            </span>
          </span>
          <ExternalLink size={16} className="text-fg/40 transition-colors group-hover:text-fg" />
        </a>

        {work.youtubeUrl && (
          <a
            href={work.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-fg/25 hover:bg-surface-2"
          >
            <span className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${a}22`, color: a }}>
                <MonitorPlay size={20} />
              </span>
              <span style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="block text-[14px] font-bold text-fg">YouTube</span>
                <span className="text-[12.5px] text-fg/55">Watch the channel</span>
              </span>
            </span>
            <ExternalLink size={16} className="text-fg/40 transition-colors group-hover:text-fg" />
          </a>
        )}
      </div>
    </div>
  );
}

function Meta({ icon: Icon, label, value }: { icon: typeof Building2; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon size={17} className="mt-0.5 text-fg/40" />
      <div style={{ fontFamily: "Inter, sans-serif" }}>
        <p className="text-[11px] uppercase tracking-wide text-fg/40">{label}</p>
        <p className="text-[14px] font-semibold text-fg">{value}</p>
      </div>
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="mt-20">
      <h2 className="text-[26px] font-extrabold tracking-tight md:text-[34px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-[14px] text-fg/55" style={{ fontFamily: "Inter, sans-serif" }}>{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
