"use client";

/**
 * AdobeStyleHero — a full-bleed rotating hero modeled on the Adobe.com homepage:
 * cinematic background media per slide, a large left-aligned headline with an
 * eyebrow label + subtitle + pill CTA, and a bottom row of category tabs that
 * auto-advance (progress underline + play/pause), cross-fading the background.
 *
 * Content is Sidpin's (placeholder — easy to edit in SLIDES) and backgrounds use
 * existing /public assets. The original IntegrationHero is left intact.
 */

import { useState } from "react";
import {
  Boxes,
  Search,
  Palette,
  Bot,
  Database,
  Sparkles,
  Megaphone,
  Clapperboard,
  Play,
  Pause,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import IntegrationGrid from "./IntegrationGrid";

type Slide = {
  key: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  cta: string;
  href: string;
  tab: string;
  Icon: LucideIcon;
  image: string;
  video?: string;
};

const SLIDES: Slide[] = [
  {
    key: "web",
    eyebrow: "Digital Delivery",
    title: (
      <>
        We build digital products
        <br /> that actually get delivered.
      </>
    ),
    subtitle:
      "End-to-end websites, apps and platforms — designed, built and shipped by one trusted digital partner.",
    cta: "See our work",
    href: "/case-studies",
    tab: "Web & Product",
    Icon: Boxes,
    image: "/expertise/web-development.jpg",
  },
  {
    key: "seo",
    eyebrow: "Growth Marketing",
    title: (
      <>
        Rank #1 and turn
        <br /> clicks into customers.
      </>
    ),
    subtitle:
      "SEO, Google & Meta Ads engineered around revenue — more visibility, more qualified traffic, more conversions.",
    cta: "Explore SEO & Ads",
    href: "/services",
    tab: "SEO & Ads",
    Icon: Search,
    image: "/expertise/seo.jpg",
  },
  {
    key: "design",
    eyebrow: "Creative Studio",
    title: (
      <>
        Designs that make
        <br /> brands unforgettable.
      </>
    ),
    subtitle:
      "Brand identity, UI/UX and video production that give your business a look people remember and trust.",
    cta: "See our design",
    href: "/case-studies",
    tab: "Creative Design",
    Icon: Palette,
    image: "/expertise/graphic-design.jpg",
  },
  {
    key: "ai",
    eyebrow: "AI Automation",
    title: (
      <>
        Automate the busywork
        <br /> with AI agents.
      </>
    ),
    subtitle:
      "Custom AI agents and automations that handle repetitive work around the clock — so your team scales without the headcount.",
    cta: "Meet the agents",
    href: "/services",
    tab: "AI Automation",
    Icon: Bot,
    image: "/expertise/automation.jpg",
  },
  {
    key: "crm",
    eyebrow: "Custom CRM",
    title: (
      <>
        One CRM, built
        <br /> for your business.
      </>
    ),
    subtitle:
      "White-label CRM solutions tailored to how you actually work — every pipeline, every team, one source of truth.",
    cta: "Book a demo",
    href: "/contact",
    tab: "Custom CRM",
    Icon: Database,
    image: "/expertise/app-development.jpg",
    video: "/crm.mp4",
  },
  {
    key: "branding",
    eyebrow: "Branding",
    title: (
      <>
        A brand people
        <br /> actually remember.
      </>
    ),
    subtitle:
      "Logos, identity systems and guidelines that make you instantly recognizable across every touchpoint.",
    cta: "See our branding",
    href: "/case-studies",
    tab: "Branding",
    Icon: Sparkles,
    image: "/expertise/ui-ux.jpg",
  },
  {
    key: "marketing",
    eyebrow: "Digital Marketing",
    title: (
      <>
        Full-funnel growth,
        <br /> engineered for revenue.
      </>
    ),
    subtitle:
      "Campaigns across search, social and paid ads — built around the metrics that actually move your business.",
    cta: "Explore marketing",
    href: "/services",
    tab: "Digital Marketing",
    Icon: Megaphone,
    image: "/expertise/meta-ads.jpg",
  },
  {
    key: "video",
    eyebrow: "Video Editing",
    title: (
      <>
        Video that stops
        <br /> the scroll.
      </>
    ),
    subtitle:
      "Editing, motion and post-production for ads, social and brand films that keep people watching.",
    cta: "Watch our reels",
    href: "/case-studies",
    tab: "Video Editing",
    Icon: Clapperboard,
    image: "/expertise/video-editing.jpg",
  },
];

const SLIDE_MS = 6000;

export default function AdobeStyleHero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = () => setActive((i) => (i + 1) % SLIDES.length);
  const slide = SLIDES[active];

  return (
    <section
      className="relative w-full overflow-hidden bg-black text-white"
      style={{ minHeight: "100svh", fontFamily: "Hanken Grotesk, -apple-system, sans-serif" }}
    >
      <style jsx>{`
        @keyframes heroProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes heroContentIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-content {
          animation: heroContentIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-content { animation: none; }
        }
      `}</style>

      {/* Background layers — cross-fade between slides */}
      {SLIDES.map((s, i) => (
        <div
          key={s.key}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          {s.video && i === active ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={s.image}
            >
              <source src={s.video} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={s.image} alt="" className="h-full w-full object-cover" />
          )}
        </div>
      ))}

      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-6 md:px-20"
        style={{ minHeight: "100svh", paddingTop: "clamp(120px, 16vh, 200px)", paddingBottom: "40px" }}
      >
        {/* Headline (left) + integration grid (right) */}
        <div className="flex flex-1 items-center gap-10">
          <div key={slide.key} className="hero-content max-w-[720px] flex-1">
            <span
              className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              {slide.eyebrow}
            </span>
            <h1 className="font-semibold leading-[1.08] tracking-tight text-white" style={{ fontSize: "clamp(38px, 5.2vw, 68px)" }}>
              {slide.title}
            </h1>
            <p
              className="mt-6 max-w-[560px] text-white/85"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.3vw, 19px)", lineHeight: 1.7 }}
            >
              {slide.subtitle}
            </p>
            <a
              href={slide.href}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-transform duration-300 hover:scale-[1.04] hover:bg-white/90"
            >
              {slide.cta}
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>

          {/* Integration grid — right side, only on the first (Digital Delivery) slide */}
          {slide.key === "web" && (
            <div className="hidden shrink-0 xl:flex xl:items-center xl:justify-center">
              <IntegrationGrid />
            </div>
          )}
        </div>

        {/* Bottom tab carousel */}
        <div className="pt-12">
          <div className="flex items-stretch gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SLIDES.map((s, i) => {
              const isActive = i === active;
              const TabIcon = s.Icon;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "group relative flex min-w-[150px] flex-1 flex-col justify-between overflow-hidden rounded-xl border px-4 pt-3.5 pb-3 text-left backdrop-blur-md transition-colors",
                    isActive
                      ? "border-white/70 bg-white text-black shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                      : "border-white/15 bg-white/10 text-white/80 hover:bg-white/20",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-2">
                    <TabIcon size={18} strokeWidth={2} className={isActive ? "text-[#4169e1]" : "text-white/70"} />
                    <span className="text-[13px] font-semibold" style={{ fontFamily: "Geist, sans-serif" }}>
                      {s.tab}
                    </span>
                  </span>

                  {/* Progress underline (drives auto-advance on the active tab) */}
                  <span className="mt-3 block h-[3px] w-full overflow-hidden rounded-full bg-black/10">
                    {isActive && (
                      <span
                        key={active}
                        onAnimationEnd={next}
                        className="block h-full rounded-full bg-[#4169e1]"
                        style={{
                          width: 0,
                          animation: `heroProgress ${SLIDE_MS}ms linear forwards`,
                          animationPlayState: playing ? "running" : "paused",
                        }}
                      />
                    )}
                  </span>
                </button>
              );
            })}

            {/* Play / pause */}
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause" : "Play"}
              className="ml-1 grid h-11 w-11 shrink-0 place-items-center self-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
