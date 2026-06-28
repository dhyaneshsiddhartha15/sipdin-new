"use client";

type NodeDef = {
  id: string;
  cx: number;
  label: string;
  /** Branch path from the AI hub down to this node (for flow + pulse). */
  path: string;
};

const NODES: NodeDef[] = [
  { id: "claude", cx: 130, label: "Claude", path: "M500,110 L500,178 Q500,200 478,200 L152,200 Q130,200 130,222 L130,298" },
  { id: "gemini", cx: 315, label: "Gemini", path: "M500,110 L500,178 Q500,200 478,200 L337,200 Q315,200 315,222 L315,298" },
  { id: "nvidia", cx: 500, label: "NVIDIA", path: "M500,110 L500,298" },
  { id: "meta", cx: 685, label: "Meta AI", path: "M500,110 L500,178 Q500,200 522,200 L663,200 Q685,200 685,222 L685,298" },
  { id: "huggingface", cx: 870, label: "Hugging Face", path: "M500,110 L500,178 Q500,200 522,200 L848,200 Q870,200 870,222 L870,298" },
];

/** Real AI/brand logo filling a node's tile, centred on (cx, 356).
 *  White by default; fades to the brand colour on node hover. */
function NodeIcon({ id, cx }: { id: string; cx: number }) {
  const size = 44;
  const x = cx - size / 2;
  const y = 356 - size / 2;
  return (
    <>
      <image
        href={`/icons/${id}.svg`}
        x={x}
        y={y}
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        className="transition-opacity duration-300 group-hover:opacity-0"
      />
      <image
        href={`/icons/${id}-color.svg`}
        x={x}
        y={y}
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </>
  );
}

export default function IntegrationFlow() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-12">
      {/* Ambient layers */}
      <div className="ai-grid-bg pointer-events-none absolute inset-0 -z-0" />
      <div className="ai-spotlight pointer-events-none absolute inset-x-0 -top-10 h-72 -z-0" />
      {/* Floating glass orbs for depth */}
      <div className="animate-float pointer-events-none absolute left-6 top-10 h-16 w-16 rounded-2xl glass-card opacity-70" style={{ animationDelay: "0.4s" }} />
      <div className="animate-float pointer-events-none absolute right-10 bottom-8 h-12 w-12 rounded-full glass-card opacity-60" style={{ animationDelay: "1.2s" }} />

      <svg viewBox="0 0 1000 460" className="relative z-10 w-full h-auto" fill="none">
        <defs>
          <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6E8CFF" />
            <stop offset="100%" stopColor="#2E4FB8" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8FB0FF" />
            <stop offset="50%" stopColor="#4169E1" />
            <stop offset="100%" stopColor="#8FB0FF" />
          </linearGradient>
          <radialGradient id="hubGlow">
            <stop offset="0%" stopColor="#4169E1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4169E1" stopOpacity="0" />
          </radialGradient>



          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="cardShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#2E4FB8" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Hub glow halo */}
        <circle cx="500" cy="66" r="120" fill="url(#hubGlow)" />

        {/* Connectors: base + animated flow + travelling pulse per branch */}
        {NODES.map((n, i) => (
          <g key={`wire-${n.id}`}>
            <path d={n.path} stroke="rgba(65,105,225,0.16)" strokeWidth="2" fill="none" />
            <path d={n.path} stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="5 16">
              <animate attributeName="stroke-dashoffset" from="42" to="0" dur="1.3s" repeatCount="indefinite" />
            </path>
            <circle r="3.6" fill="#4169E1" filter="url(#glow)">
              <animateMotion dur="2.6s" begin={`${i * 0.28}s`} repeatCount="indefinite" path={n.path} />
            </circle>
          </g>
        ))}

        {/* ---- AI ENGINE hub ---- */}
        <g filter="url(#cardShadow)">
          <rect x="392" y="22" width="216" height="88" rx="24" fill="url(#brandGrad)" />
          <rect x="392" y="22" width="216" height="88" rx="24" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1" />
        </g>
        {/* pulsing rings */}
        <circle cx="430" cy="66" r="16" fill="none" stroke="#FFFFFF" strokeOpacity="0.5">
          <animate attributeName="r" from="12" to="26" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" from="0.5" to="0" dur="2.4s" repeatCount="indefinite" />
        </circle>
        {/* hub neural glyph */}
        <g transform="translate(430,66)" stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <circle cx="0" cy="0" r="4.5" />
          <circle cx="-13" cy="-10" r="3" />
          <circle cx="13" cy="-10" r="3" />
          <circle cx="-13" cy="11" r="3" />
          <circle cx="13" cy="11" r="3" />
          <path d="M-11,-9 L-2,-2 M11,-9 L2,-2 M-11,9 L-2,2 M11,9 L2,2" />
        </g>
        <text x="470" y="62" fontSize="17" fontWeight="700" fill="#FFFFFF" letterSpacing="0.06em">
          AI ENGINE
        </text>
        <text x="470" y="82" fontSize="10.5" fontWeight="500" fill="#DCE4FF" letterSpacing="0.18em">
          ORCHESTRATION
        </text>

        {/* ---- Spoke nodes ---- */}
        {NODES.map((n) => {
          const rectX = n.cx - 62;
          const isCore = n.id === "nvidia";
          return (
            <g key={`node-${n.id}`} className="group cursor-pointer">
              <g filter="url(#cardShadow)">
                <rect
                  x={rectX}
                  y={300}
                  width="124"
                  height="112"
                  rx="24"
                  fill="var(--color-surface)"
                  stroke={isCore ? "#4169E1" : "rgba(65,105,225,0.28)"}
                  strokeWidth={isCore ? "2.5" : "1.5"}
                  className="transition-all duration-300 group-hover:[stroke:#4169E1]"
                />
              </g>
              {/* icon tile — brand gradient by default, white on hover */}
              <rect
                x={n.cx - 32}
                y={324}
                width="64"
                height="64"
                rx="18"
                fill="url(#brandGrad)"
                className="transition-opacity duration-300 group-hover:opacity-0"
              />
              <rect
                x={n.cx - 32}
                y={324}
                width="64"
                height="64"
                rx="18"
                fill="#FFFFFF"
                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <NodeIcon id={n.id} cx={n.cx} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
