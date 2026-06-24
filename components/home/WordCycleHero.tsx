"use client";

import { useEffect, useState } from "react";

const WORDS = [
  { text: "Create.", color: "#e9c349" },  // gold
  { text: "Build.", color: "#c9a329" },   // darker gold
  { text: "Scale.", color: "#d4af37" },    // metallic gold
  { text: "Deliver.", color: "#f4d03f" },  // bright gold
];

const INTERVAL = 1500; // ms per word

export default function WordCycleHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % WORDS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* pill badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-[#e9c349]/30 bg-[#e9c349]/10 px-4 py-1.5 font-['Geist'] text-xs font-medium text-[#e9c349]">
        <span className="h-2 w-2 rounded-full bg-[#e9c349] animate-pulse" />
        SIDPIN — Cinematic Precision in Every Frame
      </div>

      {/* word row */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 font-['Hanken_Grotesk'] text-4xl md:text-6xl lg:text-7xl font-semibold">
        {WORDS.map((w, i) => {
          const isActive = i === active;
          return (
            <span
              key={w.text}
              className="transition-all duration-500"
              style={{
                color: isActive ? w.color : "#cfc4c5",
                textShadow: isActive ? `0 0 40px ${w.color}66` : "none",
                transform: isActive ? "scale(1.08)" : "scale(1)",
              }}
            >
              {w.text}
            </span>
          );
        })}
      </div>

      {/* subheadline */}
      <p className="font-['Inter'] text-lg text-[#cfc4c5] max-w-2xl text-center mt-4">
        We engineer brands, systems, and growth that last.
      </p>
    </div>
  );
}
