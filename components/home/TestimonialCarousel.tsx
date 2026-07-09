"use client";

/**
 * TestimonialCarousel — modeled on the Adobe.com testimonial slider: a large
 * cinematic card with a big quote + attribution + pill CTA, circular prev/next
 * arrows, dot indicators, and dimmed neighbouring cards peeking on the sides.
 * Auto-advances (pauses on hover). Sidpin content + /public/expertise imagery.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

type Testimonial = {
  key: string;
  quote: string;
  name: string;
  role: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    key: "lumen",
    quote: "Sidpin rebuilt our site and doubled our leads in just two months.",
    name: "Ayesha Khan",
    role: "Founder, Lumen Studios",
    image: "/expertise/web-development.jpg",
  },
  {
    key: "atlas",
    quote: "Their creative team gave our brand a look people actually remember.",
    name: "Marco Ferri",
    role: "CMO, Atlas Goods",
    image: "/expertise/graphic-design.jpg",
  },
  {
    key: "bloom",
    quote: "They cut our cost-per-lead in half while scaling ad spend.",
    name: "Priya Nair",
    role: "Growth Lead, Bloomkart",
    image: "/expertise/social-media.jpg",
  },
  {
    key: "nova",
    quote: "From strategy to launch video, everything shipped ahead of schedule.",
    name: "Daniel Osei",
    role: "COO, NovaCRM",
    image: "/expertise/video-production.jpg",
  },
];

const AUTO_MS = 7000;

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const go = (i: number) => setActive(((i % count) + count) % count);
  const prev = () => go(active - 1);
  const next = () => go(active + 1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % count), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  // Scroll-linked "rise up + fade in" reveal (adobe.com style).
  const { ref, p } = useScrollReveal<HTMLElement>();
  const rise = (0.5 - p) * 90;
  const appear = Math.min(1, p * 2.2);

  return (
    <section ref={ref} className="bg-bg py-[80px] md:py-[120px]">
      <div
        className="mx-auto max-w-[1440px] px-[24px] md:px-[80px]"
        style={{ transform: `translateY(${rise}px)`, opacity: appear, willChange: "transform, opacity" }}
      >
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <span
            className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brand"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Testimonials
          </span>
          <h2
            className="font-semibold leading-[1.08] tracking-tight text-fg"
            style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(34px, 4.4vw, 56px)" }}
          >
            Trusted by founders &amp; teams.
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(calc(7% - ${active * 86}%))` }}
            >
              {TESTIMONIALS.map((t, i) => {
                const isActive = i === active;
                return (
                  <div key={t.key} className="w-[92%] shrink-0 px-2 md:w-[86%] md:px-3">
                    <div
                      className={[
                        "relative h-[440px] overflow-hidden rounded-3xl bg-black transition-all duration-700 md:h-[560px]",
                        isActive ? "opacity-100" : "opacity-45",
                      ].join(" ")}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />

                      <div className="relative flex h-full max-w-[640px] flex-col justify-center p-8 md:p-16">
                        <blockquote
                          className="font-semibold leading-[1.15] text-white"
                          style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(26px, 3.2vw, 46px)" }}
                        >
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <div className="mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
                          <p className="text-[16px] font-semibold text-white">{t.name}</p>
                          <p className="text-[14px] text-white/70">{t.role}</p>
                        </div>
                        <Link
                          href="/work"
                          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black transition-transform duration-300 hover:scale-[1.04]"
                        >
                          See our work
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-fg shadow-lg transition-transform hover:scale-110 md:-left-2"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-fg shadow-lg transition-transform hover:scale-110 md:-right-2"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={[
                "h-2 rounded-full transition-all duration-300",
                i === active ? "w-7 bg-brand" : "w-2 bg-line hover:bg-fg-3",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
