"use client";

/**
 * IndustriesShowcase — replaces the "Everything you need" expanding-card gallery.
 * A clean, full-bleed list of the industries Sidpin serves. Rows and their divider
 * lines span the full screen width; hovering a row reveals its image filling that
 * row's own area (full row width × height), label + link overlaid on top. Images
 * are local placeholders under /public — swap them for real industry shots.
 */

import Link from "next/link";

type Industry = { name: string; image: string };

// Industry-relevant imagery from Unsplash (landscape crop for the wide rows).
const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=1400&h=500&fit=crop&q=80`;

const INDUSTRIES: Industry[] = [
  { name: "Healthcare", image: U("1519494026892-80bbd2d6fd0d") },
  { name: "Finance", image: U("1611974789855-9c2a0a7236a3") },
  { name: "Government", image: U("1529107386315-e1a2ed48a620") },
  { name: "Real Estate", image: U("1560518883-ce09059eeffa") },
  { name: "Education", image: U("1523240795612-9a054b0db644") },
  { name: "Construction", image: U("1503387762-592deb58ef4e") },
  { name: "Retail", image: U("1441986300917-64674bd600d8") },
  { name: "Manufacturing", image: U("1581091226825-a6a2a5aee158") },
  { name: "Hospitality", image: U("1566073771259-6a8506099945") },
  { name: "Logistics", image: U("1586528116311-ad8dd3c8310d") },
];

// Text stays inside the original 1440 container so copy aligns where it was,
// while the borders and hover image run edge-to-edge (full screen width).
const INNER = "mx-auto max-w-[1440px] px-[24px] md:px-[80px]";

export default function IndustriesShowcase() {
  return (
    <section className="w-full bg-bg py-[80px] md:py-[120px]">
      {/* Heading */}
      <div className={INNER}>
        <h2
          className="max-w-[900px] font-semibold leading-[1.06] tracking-tight text-fg"
          style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(34px, 4.6vw, 60px)" }}
        >
          Regulated, complex, high-stakes.{" "}
          <span className="text-fg-2">Where software has to work the first time.</span>
        </h2>
      </div>

      {/* Full-width industry list (lines + hover image span the whole screen) */}
      <ul className="mt-14 w-full border-t border-line">
        {INDUSTRIES.map((industry, i) => (
          <li key={industry.name} className="border-b border-line">
            <Link href="/case-studies" className="group relative block overflow-hidden">
              {/* Image fills the whole row on hover */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={industry.image}
                alt={industry.name}
                className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
              />
              {/* Darken for text legibility (only when image is visible) */}
              <div className="pointer-events-none absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Text — kept within the original container so it aligns as before */}
              <div className={`relative z-10 flex items-center justify-between gap-4 py-6 md:py-8 ${INNER}`}>
                <div className="flex items-baseline gap-5 md:gap-8">
                  <span
                    className="text-[12px] font-medium tabular-nums text-fg-2/70 transition-colors duration-300 group-hover:text-white/70"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(26px, 3.4vw, 44px)" }}
                  >
                    {industry.name}
                  </span>
                </div>

                <span
                  className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-2 transition-colors duration-300 group-hover:text-white"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Case Studies <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
