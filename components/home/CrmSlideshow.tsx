"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/crm/crm-1.jpeg", alt: "CRM support dashboard with ticket analytics" },
  { src: "/crm/crm-2.jpeg", alt: "CRM dashboard overview" },
  { src: "/crm/crm-3.jpeg", alt: "CRM analytics dashboard" },
  { src: "/crm/crm-4.jpeg", alt: "CRM sales overview dashboard" },
];

const INTERVAL_MS = 3500;

export default function CrmSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden border border-line/20 shadow-2xl">
      <div className="relative aspect-[4/3]">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out ${
              i === current ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
            }`}
          />
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-7 bg-[#4169E1]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
