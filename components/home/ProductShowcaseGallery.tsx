"use client";

/**
 * ProductShowcaseGallery — "Everything you need…" expanding cards, modeled on
 * the Adobe.com homepage gallery. A row of category cards; hovering one expands
 * it (flex-grow) while the others shrink, revealing a short blurb + link. Uses
 * Sidpin content and existing /public/expertise imagery.
 */

import Link from "next/link";
import { Palette, Code2, Search, Clapperboard, Bot, type LucideIcon } from "lucide-react";

type Card = {
  key: string;
  label: string;
  blurb: string;
  href: string;
  image: string;
  color: string;
  Icon: LucideIcon;
};

const CARDS: Card[] = [
  { key: "design", label: "Creative Design", blurb: "Brand identity, UI/UX and graphics that make you unforgettable.", href: "/services", image: "/expertise/graphic-design.jpg", color: "#EC4899", Icon: Palette },
  { key: "web", label: "Web Development", blurb: "Fast, scalable websites and apps built to convert.", href: "/services", image: "/expertise/web-development.jpg", color: "#4169e1", Icon: Code2 },
  { key: "seo", label: "SEO & Ads", blurb: "Rank higher and turn clicks into paying customers.", href: "/services", image: "/expertise/seo.jpg", color: "#22C55E", Icon: Search },
  { key: "video", label: "Video Production", blurb: "Scroll-stopping video and motion for every channel.", href: "/services", image: "/expertise/video-production.jpg", color: "#F97316", Icon: Clapperboard },
  { key: "ai", label: "AI Automation", blurb: "AI agents and automations that do the busywork for you.", href: "/services", image: "/expertise/automation.jpg", color: "#8B5CF6", Icon: Bot },
];

export default function ProductShowcaseGallery() {
  return (
    <section className="bg-bg py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1440px] px-[24px] md:px-[80px]">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2
            className="font-semibold leading-[1.08] tracking-tight text-fg"
            style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(34px, 4.4vw, 56px)" }}
          >
            Everything you need to grow.
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-fg-2"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.2vw, 18px)", lineHeight: 1.7 }}
          >
            Whether you&apos;re a startup, an agency, or a global brand — Sidpin has the team and the
            tools you need to make it happen.
          </p>
        </div>

        {/* Expanding cards */}
        <div className="flex flex-col gap-3 md:h-[520px] md:flex-row">
          {CARDS.map((card) => {
            const Icon = card.Icon;
            return (
              <Link
                key={card.key}
                href={card.href}
                className="group relative block h-[280px] grow-[1] overflow-hidden rounded-2xl transition-[flex-grow] duration-500 ease-out hover:grow-[3] md:h-full"
                style={{ flexBasis: 0 }}
              >
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />

                {/* Header (icon + label) */}
                <div className="absolute inset-x-0 top-0 flex items-center gap-2.5 p-5">
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg shadow-lg"
                    style={{ background: card.color }}
                  >
                    <Icon size={17} strokeWidth={2.2} color="#fff" />
                  </span>
                  <span
                    className="text-[15px] font-semibold text-white drop-shadow"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    {card.label}
                  </span>
                </div>

                {/* Blurb (revealed on expand) */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p
                    className="max-w-[420px] translate-y-2 text-[15px] leading-relaxed text-white/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {card.blurb}
                  </p>
                  <span
                    className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    Learn more →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
