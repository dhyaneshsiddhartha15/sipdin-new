"use client";

/**
 * AiPoweredSystem — "Turn Your Business Into an AI-Powered System" split panel.
 * Left: dark composed AI visual. Right: heading, positioning copy, three
 * capability cards, and CTAs. Matches the sidpin-ai dark aesthetic.
 */

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Eye, Database, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AiEcosystemBackground from "./AiEcosystemBackground";

type Capability = {
  title: string;
  icon: LucideIcon;
  items?: string[];
  note?: string;
};

const CAPABILITIES: Capability[] = [
  { title: "Gen AI Integration", icon: Sparkles, items: ["AI Agents", "Chatbots", "Coding Assistants"] },
  { title: "Computer Vision", icon: Eye, items: ["Quality Control", "Facial Recognition"] },
  { title: "Data Engineering", icon: Database, note: "Building the infrastructure that feeds that AI." },
];

const AI_IMG =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1100&h=1100&fit=crop&q=80";

export default function AiPoweredSystem() {

  return (
    <section className="px-[24px] py-[72px] md:px-[80px] md:py-[100px]" style={{ background: "#050816" }}>
      <div
        className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[28px] ring-1 ring-white/[0.08] lg:grid-cols-[0.85fr_1.15fr]"
        style={{ background: "linear-gradient(120deg, #0a1024 0%, #0b1330 55%, #0d1533 100%)" }}
      >
        {/* Left — dark AI visual */}
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
          {/* Ecosystem background */}
          <AiEcosystemBackground density="medium" />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={AI_IMG}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          {/* Glow + blend into the right panel */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 20% 40%, rgba(93,124,255,0.28), transparent 60%), linear-gradient(90deg, rgba(5,8,22,0.35) 0%, rgba(11,19,48,0.2) 55%, #0b1330 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse 80% 70% at 40% 45%, black 20%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 40% 45%, black 20%, transparent 85%)",
            }}
          />
        </div>

        {/* Right — content */}
        <div className="px-7 py-10 md:px-12 md:py-14">
          <h2
            className="font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(28px, 3.4vw, 44px)" }}
          >
            Turn Your Business
            <br />
            <span style={{ color: "#8FB5FF" }}>Into an AI-Powered System</span>
          </h2>

          <p
            className="mt-5 max-w-[640px] text-[14px] leading-relaxed text-white/60 md:text-[15px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            SIDPIN Digital is an AI-first development partner chosen by ambitious businesses
            across the UK, US, UAE, Australia, Germany, Switzerland, and Singapore. Since 2013,
            we&apos;ve shipped production-ready AI and SaaS solutions across fintech, healthcare,
            logistics, e-commerce, and enterprise automation — built to scale and trusted by teams
            worldwide.
          </p>

          {/* Capability cards */}
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#5D7CFF]/40 hover:bg-white/[0.05]"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#5D7CFF]/15 text-[#8FB5FF]">
                    <Icon className="h-[19px] w-[19px]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3
                    className="mb-3 text-[15px] font-semibold text-white"
                    style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                  >
                    {cap.title}
                  </h3>
                  {cap.items ? (
                    <ul className="flex flex-col gap-2">
                      {cap.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-[12.5px] text-white/60"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          <Check className="h-[14px] w-[14px] shrink-0 text-[#8FB5FF]" strokeWidth={2.5} aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className="text-[12.5px] leading-relaxed text-white/60"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {cap.note}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, rgba(93,124,255,0.95), rgba(143,181,255,0.8))",
                boxShadow: "0 0 40px rgba(93,124,255,0.4)",
              }}
            >
              Contact Us
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
