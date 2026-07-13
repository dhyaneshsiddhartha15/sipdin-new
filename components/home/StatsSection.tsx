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
    value: 80,
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
    value: 5,
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

/* Big two-tone line icon: white base + blue stroke continuously drawing over it */
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
    <span className="relative block w-[110px] h-[110px] shrink-0" aria-hidden="true">
      <Icon size={110} strokeWidth={1} className="absolute inset-0 text-[#C3CFE8]" />
      <span
        className="stat-draw absolute inset-0 block"
        style={{ "--stat-delay": `${delay}ms` } as React.CSSProperties}
      >
        <Icon size={110} strokeWidth={1.1} style={{ color }} />
      </span>
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#F2F6FF] py-[70px] px-[24px] md:px-[70px]">
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-8">
            <AnimatedIcon Icon={stat.icon} color={stat.color} delay={i * 600} />
            <div>
              <div className="font-['Hanken_Grotesk'] text-[17px] font-medium text-[#1A1A1A] leading-relaxed">
                {stat.label}
              </div>
              <div
                className="font-['Hanken_Grotesk'] text-[24px] font-bold leading-relaxed"
                style={{ color: stat.color }}
              >
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-['Inter'] text-[12.5px] text-[#555555] leading-relaxed max-w-[280px] mt-1">
                {stat.description}
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
      `}</style>
    </section>
  );
}
