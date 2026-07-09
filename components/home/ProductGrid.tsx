"use client";

/**
 * ProductGrid — "Tools that work for you" section, modeled on the Adobe.com
 * homepage. It opens with a full-bleed cinematic header that reveals on scroll
 * (the background image zooms + brightens and the heading fades up as the
 * section enters the viewport), then a dark 3-column grid of service cards whose
 * background image + arrow reveal on hover. Sidpin content + /public imagery.
 */

import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  Megaphone,
  Search,
  Code2,
  Palette,
  Clapperboard,
  Bot,
  Database,
  ShoppingBag,
  Share2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

// Full-bleed cinematic background behind the header — swap for any image/photo.
const HEADER_BG = "/expertise/web-development.jpg";

type Product = {
  key: string;
  name: string;
  desc: string;
  href: string;
  image: string;
  color: string;
  Icon: LucideIcon;
};

const PRODUCTS: Product[] = [
  { key: "marketing", name: "Digital Marketing", desc: "Full-funnel campaigns that grow reach, leads and revenue.", href: "/services", image: "/expertise/meta-ads.jpg", color: "#FF4A00", Icon: Megaphone },
  { key: "seo", name: "SEO", desc: "Rank #1 on Google and win organic traffic that compounds.", href: "/services", image: "/expertise/seo.jpg", color: "#22C55E", Icon: Search },
  { key: "web", name: "Web Development", desc: "Fast, scalable websites and web apps built to convert.", href: "/services", image: "/expertise/web-development.jpg", color: "#4169e1", Icon: Code2 },
  { key: "design", name: "Creative Design", desc: "Brand identity, UI/UX and graphics people remember.", href: "/services", image: "/expertise/graphic-design.jpg", color: "#EC4899", Icon: Palette },
  { key: "video", name: "Video Production", desc: "Scroll-stopping video and motion for every channel.", href: "/services", image: "/expertise/video-production.jpg", color: "#F97316", Icon: Clapperboard },
  { key: "ai", name: "AI Automation", desc: "Custom AI agents that handle the busywork around the clock.", href: "/services", image: "/expertise/automation.jpg", color: "#8B5CF6", Icon: Bot },
  { key: "crm", name: "Custom CRM", desc: "White-label CRM tailored to exactly how your team works.", href: "/services", image: "/expertise/app-development.jpg", color: "#06B6D4", Icon: Database },
  { key: "ecom", name: "E-Commerce", desc: "High-converting stores on Shopify, WooCommerce and more.", href: "/services", image: "/expertise/ecommerce.jpg", color: "#10B981", Icon: ShoppingBag },
  { key: "social", name: "Social Media", desc: "Content and community management that builds a following.", href: "/services", image: "/expertise/social-media.jpg", color: "#E4405F", Icon: Share2 },
];

export default function ProductGrid() {
  const { ref, p } = useScrollReveal<HTMLDivElement>();
  // Section-level scroll progress drives the "rise up as a card" motion.
  const { ref: sectionRef, p: sectionP } = useScrollReveal<HTMLElement>();
  const lift = (1 - Math.min(1, sectionP * 1.9)) * 80; // 80px → 0 as it enters

  return (
    // Rounded-card reveal: the dark section physically rises up (parallax lift)
    // over the light section above it, overlapping it (negative margin) with big
    // rounded top corners + a soft top shadow — so it "comes up as a card" and
    // reveals the light background at the corners, adobe.com style.
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden rounded-t-[32px] bg-black text-white shadow-[0_-30px_70px_rgba(0,0,0,0.28)] md:rounded-t-[56px]"
      style={{ marginTop: "-56px", transform: `translateY(${lift}px)`, willChange: "transform" }}
    >
      {/* Cinematic scroll-reveal header */}
      <div
        ref={ref}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "clamp(560px, 82vh, 900px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HEADER_BG}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(${1.05 + p * 0.16}) translateY(${(1 - p) * 26}px)`,
            filter: `brightness(${0.45 + p * 0.5})`,
            willChange: "transform, filter",
          }}
        />
        {/* Legibility overlays */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.72 - p * 0.42 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        {/* Header copy — rises up + fades in on scroll (adobe.com style) */}
        <div
          className="relative z-10 mx-auto max-w-3xl px-6 text-center"
          style={{
            opacity: Math.min(1, p * 2.2),
            transform: `translateY(${(0.5 - p) * 80}px)`,
            willChange: "transform, opacity",
          }}
        >
          <h2
            className="font-semibold leading-[1.08] tracking-tight"
            style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(38px, 5vw, 68px)" }}
          >
            Tools that work for you.
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-white/80"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.3vw, 19px)", lineHeight: 1.7 }}
          >
            Bring any idea to life with solutions for creators, businesses, and beyond.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[15px] font-semibold text-black transition-transform duration-300 hover:scale-[1.04]"
          >
            See all services
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-[1440px] px-[24px] pb-[80px] pt-[64px] md:px-[80px] md:pb-[120px] md:pt-[80px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((prod) => {
            const Icon = prod.Icon;
            return (
              <Link
                key={prod.key}
                href={prod.href}
                className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                {/* Hover background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prod.image}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <span
                  className="relative grid h-11 w-11 place-items-center rounded-xl shadow-lg"
                  style={{ background: prod.color }}
                >
                  <Icon size={22} strokeWidth={2} color="#fff" />
                </span>

                {/* Copy */}
                <div className="relative mt-auto pt-8">
                  <h3 className="flex items-center gap-2 text-[20px] font-semibold" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {prod.name}
                    <ArrowRight
                      size={18}
                      className="translate-x-[-6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                    {prod.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
