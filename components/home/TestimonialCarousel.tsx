"use client";

/**
 * TestimonialCarousel — clean, image-free testimonial slider. A large centred
 * quote card (quote mark + quote + avatar initials + name + brand), circular
 * prev/next arrows, and dot indicators. Auto-advances (pauses on hover).
 * Real Sidpin client testimonials.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

type Testimonial = {
  key: string;
  quote: string;
  name: string;
  brand: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    key: "rudradharma",
    quote:
      "Sidpin took our 70-year Rudraksha legacy online with complete authenticity. Our sales and customer trust have never been stronger.",
    name: "Avish Bansal",
    brand: "Rudradharma",
  },
  {
    key: "ag-fitness",
    quote:
      "Our brand finally looks as strong as our training. Enquiries went up the moment the new site went live.",
    name: "Ankit Rawat",
    brand: "AG Fitness",
  },
  {
    key: "yog-adhyayan",
    quote:
      "They understood our vision instantly and turned it into a calm, beautiful digital experience. Bookings keep growing.",
    name: "Rohan Rawat",
    brand: "Yog Adhyayan",
  },
  {
    key: "ritm",
    quote:
      "On a lean budget they delivered a website that competes with global hospitality brands. Prospective students notice the difference.",
    name: "Shubham Rayal",
    brand: "Raboche Institute of Technology & Management",
  },
  {
    key: "panchbhootyatra",
    quote:
      "Sidpin captured the spirit of our journeys perfectly. The content and reach they created brought in a whole new audience.",
    name: "Akshat Trivedi",
    brand: "Panchbhootyatra",
  },
  {
    key: "rescue-by-anuj",
    quote:
      "Professional, fast, and genuinely invested in our mission. The results spoke for themselves within weeks.",
    name: "Anuj Dhasmana",
    brand: "Rescue by Anuj",
  },
  {
    key: "mazri-grant",
    quote:
      "Our bookings and online presence transformed completely. Guests now find and trust us before they ever arrive.",
    name: "Krishna Singh Rawat",
    brand: "Mazri Grant Resort",
  },
];

const AUTO_MS = 7000;

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

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

  const t = TESTIMONIALS[active];

  return (
    <section ref={ref} className="bg-bg py-[80px] md:py-[120px]">
      <div
        className="mx-auto max-w-[1100px] px-[24px] md:px-[40px]"
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

        {/* Card */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative mx-auto max-w-[680px] rounded-3xl border border-line bg-surface px-8 py-10 shadow-[0_20px_60px_-30px_rgba(65,105,225,0.35)] md:px-14 md:py-12">
            <Quote size={36} className="mx-auto text-brand" fill="currentColor" />
            <blockquote
              key={t.key}
              className="mx-auto mt-7 max-w-2xl text-center font-semibold leading-[1.3] text-fg"
              style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(20px, 2.4vw, 28px)" }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-col items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand/12 text-[15px] font-bold text-brand" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                {initials(t.name)}
              </span>
              <div className="text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                <p className="text-[16px] font-bold text-fg">{t.name}</p>
                <p className="mt-0.5 text-[14px] text-fg-2">{t.brand}</p>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-fg shadow-lg transition-transform hover:scale-110 md:-left-5"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-fg shadow-lg transition-transform hover:scale-110 md:-right-5"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.key}
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

        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-[14px] font-semibold text-bg transition-transform duration-300 hover:scale-[1.04]"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
