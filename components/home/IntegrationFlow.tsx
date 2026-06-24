"use client";

export default function IntegrationFlow() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-10">
      <svg viewBox="0 0 760 320" className="w-full h-auto" fill="none">
        <defs>
          <linearGradient id="flowGold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e9c349" stopOpacity="0" />
            <stop offset="50%" stopColor="#e9c349" stopOpacity="1" />
            <stop offset="100%" stopColor="#e9c349" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowLight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#cfc4c5" stopOpacity="0" />
            <stop offset="50%" stopColor="#cfc4c5" stopOpacity="1" />
            <stop offset="100%" stopColor="#cfc4c5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowDark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e2e2e4" stopOpacity="0" />
            <stop offset="50%" stopColor="#e2e2e4" stopOpacity="1" />
            <stop offset="100%" stopColor="#e2e2e4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* base connector lines */}
        {/* AI agent down to spine */}
        <path d="M380,70 L380,140" stroke="#e2e2e4" strokeWidth="2" />
        {/* spine to left (slack) */}
        <path d="M380,140 L380,160 Q380,170 370,170 L160,170 Q150,170 150,180 L150,210" stroke="#e2e2e4" strokeWidth="2" fill="none" />
        {/* spine straight down to phone */}
        <path d="M380,140 L380,210" stroke="#e2e2e4" strokeWidth="2" />
        {/* spine to right (coinbase) */}
        <path d="M380,140 L380,160 Q380,170 390,170 L610,170 Q620,170 620,180 L620,210" stroke="#e2e2e4" strokeWidth="2" fill="none" />

        {/* animated traveling pulses */}
        <circle r="4" fill="#e9c349">
          <animateMotion
            dur="2.2s"
            repeatCount="indefinite"
            path="M380,70 L380,140 L380,160 Q380,170 370,170 L160,170 Q150,170 150,180 L150,210"
          />
        </circle>
        <circle r="4" fill="#cfc4c5">
          <animateMotion
            dur="2.2s"
            begin="0.3s"
            repeatCount="indefinite"
            path="M380,70 L380,140 L380,210"
          />
        </circle>
        <circle r="4" fill="#e2e2e4">
          <animateMotion
            dur="2.2s"
            begin="0.6s"
            repeatCount="indefinite"
            path="M380,70 L380,140 L380,160 Q380,170 390,170 L610,170 Q620,170 620,180 L620,210"
          />
        </circle>

        {/* AI Agent node */}
        <g>
          <rect x="305" y="20" width="150" height="50" rx="12" fill="#111415" stroke="#e9c349" strokeWidth="1.5" />
          <text x="380" y="50" textAnchor="middle" fontSize="14" fontWeight="600" fill="#e9c349">
            ✦ AI ENGINE
          </text>
        </g>

        {/* Slack node */}
        <g>
          <rect x="105" y="210" width="90" height="90" rx="16" fill="#111415" stroke="#e2e2e4" strokeWidth="1.5" />
          {/* Chat icon */}
          <path d="M130 245 L130 265 Q130 270 135 270 L145 270 L150 275 L150 270 L170 270 Q175 270 175 265 L175 255 Q175 250 170 250 L145 250 L145 245 Z" fill="none" stroke="#e9c349" strokeWidth="2" />
          <circle cx="140" cy="258" r="2" fill="#e9c349" />
          <circle cx="150" cy="258" r="2" fill="#e9c349" />
          <circle cx="160" cy="258" r="2" fill="#e9c349" />
        </g>

        {/* Phone node */}
        <g>
          <rect x="335" y="210" width="90" height="100" rx="18" fill="#111415" stroke="#e9c349" strokeWidth="2" />
          {/* Smartphone icon */}
          <rect x="358" y="235" width="44" height="50" rx="4" fill="none" stroke="#e9c349" strokeWidth="2" />
          <line x1="375" y1="278" x2="385" y2="278" stroke="#e9c349" strokeWidth="2" />
          <circle cx="380" cy="242" r="2" fill="#e9c349" />
        </g>

        {/* Payment node */}
        <g>
          <rect x="575" y="210" width="90" height="90" rx="16" fill="#111415" stroke="#e2e2e4" strokeWidth="1.5" />
          {/* Card/Payment icon */}
          <rect x="595" y="240" width="50" height="30" rx="4" fill="none" stroke="#e9c349" strokeWidth="2" />
          <line x1="595" y1="250" x2="645" y2="250" stroke="#e9c349" strokeWidth="1" />
          <circle cx="605" cy="260" r="3" fill="#e9c349" />
          <circle cx="635" cy="260" r="3" fill="#e9c349" />
        </g>
      </svg>
    </div>
  );
}
