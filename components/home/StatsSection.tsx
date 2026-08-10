"use client";

import { useEffect, useRef, useState } from "react";
import {
  Rocket,
  RefreshCcw,
  Target,
  Award,
  Building2,
  Clock,
} from "lucide-react";

const stats = [
  {
    icon: Rocket,
    color: "#6E8CFF",
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across digital marketing, web development, and creative design",
  },
  {
    icon: RefreshCcw,
    color: "#22C55E",
    value: 85,
    suffix: "%",
    label: "Client Retention Rate",
    description: "Businesses that choose to grow with us year after year",
  },
  {
    icon: Target,
    color: "#F97316",
    value: 3,
    suffix: "x",
    label: "Average ROI Increase",
    description: "Typical growth in marketing performance for our clients",
  },
  {
    icon: Award,
    color: "#A78BFA",
    value: 3,
    suffix: "+",
    label: "Years of Excellence",
    description: "Building digital products and marketing systems that work",
  },
  {
    icon: Building2,
    color: "#EC4899",
    value: 25,
    suffix: "+",
    label: "Industries Served",
    description: "From hospitality to education, healthcare to retail",
  },
  {
    icon: Clock,
    color: "#22D3EE",
    value: 100,
    suffix: "%",
    label: "On-Time Delivery",
    description: "Projects delivered on schedule, every time",
  },
];

/* Counts 0 -> value when scrolled into view */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        let start: number | null = null;
        const tick = (t: number) => {
          if (start === null) start = t;
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* Compact animated icon with drawing effect */
function AnimatedIcon({
  Icon,
  color,
  delay,
}: {
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string; style?: React.CSSProperties }>;
  color: string;
  delay: number;
}) {
  return (
    <span className="relative block w-10 h-10 shrink-0" aria-hidden="true">
      <Icon size={40} strokeWidth={1.2} className="absolute inset-0 text-[#C3CFE8]" />
      <span
        className="stat-draw absolute inset-0 block"
        style={{ "--stat-delay": `${delay}ms` } as React.CSSProperties}
      >
        <Icon size={40} strokeWidth={1.3} style={{ color }} />
      </span>
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-transparent py-3 px-6 md:px-12">
      <div className="w-full max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-x-4 md:gap-x-0 gap-y-3 md:gap-y-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 px-2 md:px-3 py-2 md:relative"
          >
            {/* Vertical divider on desktop only (not after last item) */}
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-[#D1DCE8]" />
            )}

            {/* Icon */}
            <AnimatedIcon Icon={stat.icon} color={stat.color} delay={i * 600} />

            {/* Content */}
            <div className="min-w-0">
              <div className="font-['Hanken_Grotesk'] text-xl font-bold leading-none" style={{ color: stat.color }}>
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-['Hanken_Grotesk'] text-sm font-semibold text-white/90 leading-tight mt-1">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .stat-draw svg,
        .stat-draw svg * {
          stroke-dasharray: 90;
          stroke-dashoffset: 90;
        }
        .stat-draw svg * {
          animation: statDraw 4.5s linear infinite;
          animation-delay: var(--stat-delay, 0ms);
        }
        @keyframes statDraw {
          0% {
            stroke-dashoffset: 90;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -90;
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
