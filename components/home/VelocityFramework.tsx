"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Slide content                                                      */
/* ------------------------------------------------------------------ */

const slides = [
  {
    num: "001",
    name: "Mining",
    body: "The biggest risk in marketing is making assumptions. The Mining phase is designed to eliminate them. We immerse ourselves in your world, using keyword, brand, and competitor analysis to answer the most critical questions: Who is your ideal audience? What do they value? Where is the untapped opportunity? This is the foundation for all successful digital marketing solutions.",
  },
  {
    num: "002",
    name: "Smelting",
    body: "An insight is only as valuable as its application. In the Smelting phase, our creative digital marketing agency translates the validated insights into a cohesive, creative, and functional blueprint. Here, user personas become intuitive UI/UX, brand values become compelling visual design, and business goals become conversion-focused architecture.",
  },
  {
    num: "003",
    name: "Forging",
    body: "A plan on paper generates no revenue. The Forging stage is where the blueprint becomes a high-performance engine. Our development team meticulously builds your digital platform, while our growth experts implement the digital marketing services designed for immediate and long-term impact. After launch, we continue to optimize your processes using real-world data to refine performance and prove the direct, positive effect on your bottom line.",
  },
  {
    num: "004",
    name: "Scaling",
    body: "Launch is the starting line, not the finish. In the Scaling phase we compound your results — continuous A/B testing, conversion-rate optimization, and data-driven iteration turn a live platform into a growth engine that keeps getting stronger month after month. This is how Sidpin partners for the long term, not just a one-off project.",
  },
];

/* ------------------------------------------------------------------ */
/*  Shape particles                                                    */
/*  Each particle has a position for every slide:                      */
/*  s = [ [x,y] mining-scatter, [x,y] smelting-cluster, [x,y] forging ]*/
/*  On the Forging slide some particles snap into the laptop UI        */
/*  (filled diamonds / bullet circles); the rest fade away while the   */
/*  wireframe laptop fades in.                                         */
/* ------------------------------------------------------------------ */

const WHITE = "#E8EDF8";
const BLUE_LIGHT = "#8FB0FF"; // brand light blue
const BLUE = "#6E8CFF"; // brand royal blue (light variant for dark bg)

type Particle = {
  t: "circle" | "square" | "diamond" | "tri" | "triDown";
  c: string;
  s: [number, number][];
  /** particle survives into the Forging layout and becomes filled */
  forge?: boolean;
};

const particles: Particle[] = [
  // -- diamonds: five of them become the filled diamond row on Forging
  { t: "diamond", c: WHITE, s: [[140, 95], [255, 130], [250, 190]], forge: true },
  { t: "diamond", c: WHITE, s: [[390, 150], [360, 250], [278, 190]], forge: true },
  { t: "diamond", c: WHITE, s: [[215, 320], [230, 330], [306, 190]], forge: true },
  { t: "diamond", c: WHITE, s: [[180, 400], [235, 400], [334, 190]], forge: true },
  { t: "diamond", c: WHITE, s: [[270, 455], [305, 445], [362, 190]], forge: true },
  { t: "diamond", c: BLUE, s: [[640, 365], [555, 340], [610, 360]] },
  // -- circles: four become the filled bullet list on Forging
  { t: "circle", c: WHITE, s: [[245, 100], [270, 165], [245, 235]], forge: true },
  { t: "circle", c: WHITE, s: [[355, 215], [410, 250], [245, 265]], forge: true },
  { t: "circle", c: WHITE, s: [[240, 270], [360, 275], [245, 295]], forge: true },
  { t: "circle", c: WHITE, s: [[445, 260], [410, 275], [245, 325]], forge: true },
  { t: "circle", c: WHITE, s: [[595, 265], [560, 280], [640, 260]] },
  { t: "circle", c: WHITE, s: [[440, 345], [455, 330], [430, 420]] },
  { t: "circle", c: WHITE, s: [[515, 380], [510, 365], [560, 430]] },
  { t: "circle", c: WHITE, s: [[415, 415], [400, 395], [390, 460]] },
  { t: "circle", c: WHITE, s: [[525, 470], [490, 430], [520, 480]] },
  // -- triangles: three re-form inside the laptop screen
  { t: "tri", c: WHITE, s: [[455, 75], [385, 250], [425, 188]], forge: true },
  { t: "tri", c: WHITE, s: [[490, 305], [470, 300], [460, 195]], forge: true },
  { t: "triDown", c: WHITE, s: [[330, 190], [365, 225], [493, 201]], forge: true },
  { t: "triDown", c: WHITE, s: [[300, 310], [310, 355], [300, 470]] },
  // -- squares: dissolve on Forging (the wireframe bars take their place)
  { t: "square", c: BLUE, s: [[185, 155], [225, 130], [200, 140]] },
  { t: "square", c: BLUE_LIGHT, s: [[505, 140], [510, 165], [530, 120]] },
  { t: "square", c: BLUE_LIGHT, s: [[610, 150], [575, 190], [640, 150]] },
  { t: "square", c: BLUE_LIGHT, s: [[150, 235], [190, 250], [140, 250]] },
  { t: "square", c: BLUE_LIGHT, s: [[475, 225], [415, 225], [560, 200]] },
  { t: "square", c: BLUE, s: [[320, 265], [390, 225], [180, 300]] },
  { t: "square", c: BLUE_LIGHT, s: [[530, 290], [500, 270], [620, 300]] },
  { t: "square", c: BLUE, s: [[395, 375], [385, 275], [340, 440]] },
  { t: "square", c: BLUE_LIGHT, s: [[555, 395], [525, 395], [600, 420]] },
];

function ParticleShape({ p, active }: { p: Particle; active: number }) {
  const [x, y] = p.s[active];
  const forging = active === 2;
  const filled = forging && p.forge;
  const hidden = forging && !p.forge;
  const stroke = p.c;
  const fill = filled ? p.c : "none";

  const common = {
    stroke,
    fill,
    strokeWidth: 1.2,
    style: { transition: "fill 500ms ease 400ms" },
  };

  return (
    <g
      style={{
        transform: `translate(${x}px, ${y}px)`,
        opacity: hidden ? 0 : 1,
        transition:
          "transform 1000ms cubic-bezier(0.22,1,0.36,1), opacity 600ms ease",
      }}
    >
      {p.t === "circle" && <circle r={6} {...common} />}
      {p.t === "square" && <rect x={-5.5} y={-5.5} width={11} height={11} {...common} />}
      {p.t === "diamond" && (
        <rect x={-5.5} y={-5.5} width={11} height={11} transform="rotate(45)" {...common} />
      )}
      {p.t === "tri" && <polygon points="0,-7 6.5,5 -6.5,5" {...common} />}
      {p.t === "triDown" && <polygon points="0,7 6.5,-5 -6.5,-5" {...common} />}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/*  Laptop wireframe (fades in on the Forging slide)                   */
/* ------------------------------------------------------------------ */

function LaptopWireframe({ visible }: { visible: boolean }) {
  return (
    <g
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 700ms ease ${visible ? "450ms" : "0ms"}`,
      }}
      fill="none"
      strokeWidth={1.2}
    >
      {/* screen + base */}
      <rect x={215} y={90} width={330} height={300} rx={12} stroke={WHITE} />
      <circle cx={380} cy={102} r={2} stroke={WHITE} />
      <path d="M165 390 h430 v6 a10 10 0 0 1 -10 10 H175 a10 10 0 0 1 -10 -10 z" stroke={WHITE} />
      {/* header bars */}
      <rect x={240} y={122} width={72} height={28} stroke={BLUE} />
      <rect x={324} y={122} width={28} height={11} stroke={BLUE} />
      <rect x={324} y={139} width={28} height={11} stroke={BLUE} />
      <rect x={366} y={122} width={152} height={28} stroke={BLUE} />
      {/* bullet text lines */}
      {[235, 265, 295, 325].map((y) => (
        <g key={y} stroke={WHITE} strokeOpacity={0.55}>
          <line x1={262} y1={y - 3} x2={345} y2={y - 3} />
          <line x1={262} y1={y + 4} x2={328} y2={y + 4} />
        </g>
      ))}
      {/* action rects */}
      <rect x={398} y={224} width={122} height={24} stroke={WHITE} />
      <rect x={394} y={258} width={118} height={24} stroke={BLUE} />
      <rect x={398} y={292} width={120} height={24} stroke={BLUE} />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function VelocityFramework() {
  const [active, setActive] = useState(0);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  // Pin the section and step 001 -> 002 -> 003 as the user scrolls through it
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=333%",
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        setActive(
          Math.min(slides.length - 1, Math.floor(self.progress * slides.length))
        );
      },
    });
    stRef.current = st;

    return () => {
      st.kill();
      stRef.current = null;
    };
  }, []);

  // Tabs / arrows scroll the page to the matching point of the pinned range
  const goTo = useCallback((i: number) => {
    const st = stRef.current;
    if (st) {
      const top = st.start + ((st.end - st.start) * (i + 0.5)) / slides.length;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      setActive(i);
    }
  }, []);

  const slide = slides[active];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#05070F] text-white min-h-screen flex flex-col justify-center py-[60px] overflow-hidden border-y border-[#4169E1]/15"
    >
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Heading */}
        <div className="text-center px-[24px] mb-10">
          <span className="font-['Geist'] text-xs font-medium text-[#6E8CFF] tracking-[0.4em] uppercase mb-5 block">
            How We Work
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] font-medium leading-[1.15]">
            Every Growth System <br />
            Starts With Attention.
          </h2>
        </div>

        {/* Tab bar */}
        <div
          className="relative"
          onMouseLeave={() => setTooltip(null)}
          onMouseMove={(e) => setTooltip((t) => (t ? { ...t, x: e.clientX, y: e.clientY } : t))}
        >
          <div className="grid grid-cols-4">
            {slides.map((s, i) => (
              <button
                key={s.num}
                type="button"
                onClick={() => goTo(i)}
                onMouseEnter={(e) =>
                  i !== active
                    ? setTooltip({
                        x: e.clientX,
                        y: e.clientY,
                        label: `Click to check ${s.num} ${s.name.toUpperCase()}.`,
                      })
                    : setTooltip(null)
                }
                className={`pb-4 text-center font-['Geist'] text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 cursor-pointer ${
                  i === active ? "text-white" : "text-white/35 hover:text-white/70"
                }`}
              >
                {s.num} {s.name}
              </button>
            ))}
          </div>
          {/* track + active underline */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-white/15" />
          <div
            className="absolute bottom-0 h-[2px] w-1/4 bg-[#4169E1] transition-[left] duration-500 ease-out"
            style={{ left: `${(active * 100) / 4}%` }}
          />
        </div>

        {/* Slide body */}
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] items-center px-[24px] md:px-[60px] pt-6">
          {/* Shape canvas */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 760 560"
              className="w-full max-w-[700px] h-auto max-h-[52vh]"
              aria-hidden="true"
            >
              <LaptopWireframe visible={active >= 2} />
              {particles.map((p, i) => (
                // Particles only define 3 layouts; step 004 reuses the Forging visual.
                <ParticleShape key={i} p={p} active={Math.min(active, 2)} />
              ))}
            </svg>
          </div>

          {/* Text */}
          <div key={active} className="max-w-[400px] velocity-fade-up lg:pr-8">
            <h3 className="font-['Hanken_Grotesk'] text-[26px] md:text-[28px] font-semibold mb-6">
              {slide.num} {slide.name}
            </h3>
            <p className="font-['Inter'] text-[13px] leading-[1.8] text-white/80 mb-8">
              {slide.body}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(Math.max(0, active - 1))}
                disabled={active === 0}
                aria-label="Return to previous slide"
                className="h-[26px] w-[46px] rounded-full border border-white/40 flex items-center justify-center text-white text-[13px] leading-none transition-all duration-300 enabled:hover:border-[#6E8CFF] enabled:hover:bg-[#4169E1]/15 disabled:opacity-30 disabled:cursor-default cursor-pointer"
              >
                &#8592;
              </button>
              <button
                type="button"
                onClick={() => goTo(Math.min(slides.length - 1, active + 1))}
                disabled={active === slides.length - 1}
                aria-label="Jump to next slide"
                className="h-[26px] w-[46px] rounded-full border border-white/40 flex items-center justify-center text-white text-[13px] leading-none transition-all duration-300 enabled:hover:border-[#6E8CFF] enabled:hover:bg-[#4169E1]/15 disabled:opacity-30 disabled:cursor-default cursor-pointer"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cursor-following tab tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none border border-[#6E8CFF]/70 bg-[#05070F]/95 px-4 py-2 font-['Inter'] text-[13px] text-white whitespace-nowrap"
          style={{ left: tooltip.x + 18, top: tooltip.y + 18 }}
        >
          {tooltip.label}
        </div>
      )}

      <style>{`
        .velocity-fade-up {
          animation: velocityFadeUp 650ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes velocityFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
