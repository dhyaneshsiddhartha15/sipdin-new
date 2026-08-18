"use client";

/**
 * ProductGrid — "Tools that work for you" section, modern premium design
 * with cinematic header and sophisticated service cards.
 */

import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  Search,
  MousePointerClick,
  Megaphone,
  Share2,
  Code2,
  Smartphone,
  Palette,
  ShoppingCart,
  Bot,
  Clapperboard,
  Brush,
  Cloud,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

// Cinematic background for the header
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
  { key: "seo", name: "Search Engine Optimization", desc: "Maximize your search traffic and rank higher on Google with our SEO experts.", href: "/services", image: "/expertise/seo.jpg", color: "#22C55E", Icon: Search },
  { key: "ppc", name: "Pay-Per-Click Advertising", desc: "Drive conversions and traffic to your website and app with our PPC specialists.", href: "/services", image: "/expertise/ppc.jpg", color: "#F59E0B", Icon: MousePointerClick },
  { key: "meta", name: "Meta Ads", desc: "Full-funnel Facebook and Instagram campaigns engineered for qualified leads.", href: "/services", image: "/expertise/meta-ads.jpg", color: "#0866FF", Icon: Megaphone },
  { key: "social", name: "Social Media Marketing", desc: "Build your brand with highly engaging social media campaigns and content.", href: "/services", image: "/expertise/social-media.jpg", color: "#E4405F", Icon: Share2 },
  { key: "web", name: "Web Development", desc: "We develop fast, secure, SEO-ready websites that drive conversions.", href: "/services", image: "/expertise/web-development.jpg", color: "#4169e1", Icon: Code2 },
  { key: "app", name: "App Development", desc: "Custom mobile apps that help customers connect with your product easily.", href: "/services", image: "/expertise/app-development.jpg", color: "#06B6D4", Icon: Smartphone },
  { key: "uiux", name: "UI/UX Design", desc: "Enhance customer experience across web and app with better UI and UX.", href: "/services", image: "/expertise/ui-ux.jpg", color: "#A855F7", Icon: Palette },
  { key: "ecom", name: "E-commerce Development", desc: "High-converting online stores engineered for repeat purchases and growth.", href: "/services", image: "/expertise/ecommerce.jpg", color: "#10B981", Icon: ShoppingCart },
  { key: "automation", name: "Marketing Automation", desc: "Lead nurturing, CRM flows, and email automation that scale your growth.", href: "/services", image: "/expertise/automation.jpg", color: "#8B5CF6", Icon: Bot },
  { key: "video", name: "Video Editing", desc: "Cinematic edits, reels, and long-form content that keep audiences watching.", href: "/services", image: "/expertise/video-editing.jpg", color: "#F97316", Icon: Clapperboard },
  { key: "graphic", name: "Graphic Designing", desc: "Logos, brand identity, and social creatives that make your brand memorable.", href: "/services", image: "/expertise/graphic-design.jpg", color: "#EC4899", Icon: Brush },
  { key: "cloud", name: "Managed Cloud", desc: "Secure, scalable deployment and management on AWS and DigitalOcean.", href: "/services", image: "/expertise/cloud.jpg", color: "#0EA5E9", Icon: Cloud },
];

export default function ProductGrid() {
  const { ref, p } = useScrollReveal<HTMLDivElement>();
  const { ref: sectionRef, p: sectionP } = useScrollReveal<HTMLElement>();
  const lift = (1 - Math.min(1, sectionP * 1.9)) * 80;

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden rounded-t-[32px] text-gray-900 shadow-[0_-30px_70px_rgba(0,0,0,0.15)] md:rounded-t-[56px]"
      style={{ marginTop: "120px", transform: `translateY(${lift}px)`, willChange: "transform" }}
    >
      {/* Cinematic scroll-reveal header */}
      <div
        ref={ref}
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: "clamp(300px, 50vh, 500px)" }}
      >
        {/* Header content with premium typography */}
        <div
          className="relative z-10 max-w-4xl pl-16 pr-6 pt-12 text-left"
          style={{
            opacity: Math.min(1, p * 2.2),
            transform: `translateY(${(0.5 - p) * 40}px)`,
            willChange: "transform, opacity",
          }}
        >
          <span
            className="inline-block mb-6 font-semibold tracking-[0.4em] uppercase text-xs"
            style={{ color: "#4169E1", fontFamily: "Geist, sans-serif" }}
          >
            END-TO-END DIGITAL SOLUTIONS
          </span>
          <h2
            className="font-bold leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(38px, 5.2vw, 64px)", color: "#1a1a1a" }}
          >
            End-to-End Digital
            <br />
            Solutions That{" "}
            <span style={{ color: "#4169E1" }}>
              Drive Growth
            </span>
          </h2>
          <p
            className="mb-10 text-gray-600"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.7 }}
          >
            We deliver comprehensive digital solutions across multiple domains to help businesses innovate, scale, and stay ahead in a digital world.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] hover:shadow-xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Explore All Solutions
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* Premium Grid */}
      <div className="mx-auto max-w-[1440px] px-[24px] pb-[100px] pt-[64px] md:px-[80px] md:pb-[140px] md:pt-[80px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((prod) => {
            const Icon = prod.Icon;
            return (
              <Link
                key={prod.key}
                href={prod.href}
                className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-400 hover:-translate-y-2 hover:border-gray-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)]"
              >
                {/* Subtle background image on hover */}
                <img
                  src={prod.image}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-white/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon with colored background */}
                <div className="relative z-10">
                  <span
                    className="inline-grid h-12 w-12 place-items-center rounded-xl"
                    style={{ background: `${prod.color}15` }}
                  >
                    <Icon size={24} strokeWidth={2} style={{ color: prod.color }} />
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto">
                  <h3 className="flex items-center gap-2 text-[19px] font-bold text-gray-900 mb-2" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {prod.name}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                    {prod.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Accent line on bottom */}
                <div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-300 group-hover:via-gray-900 group-hover:w-full"
                  style={{ width: "0%", transition: "width 400ms ease" }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}