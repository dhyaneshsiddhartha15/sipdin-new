"use client";

/**
 * IntegrationGrid — the animated app-integration icon grid from the original
 * hero, extracted so it can sit on the right side of the new hero. Icons float
 * in a fixed grid; a single connector line cycles through pairs, lighting up the
 * two active icons (and any hovered one). Styled for a dark background.
 */

import { useEffect, useState } from "react";
import {
  Mail, Zap, Share2, BookOpen, CreditCard, FileSpreadsheet,
  Video, ShoppingBag, Calendar, Phone, Camera, MessageSquare, Users, Cloud, Gamepad2,
} from "lucide-react";

const LinkedinIcon = ({ size = 24, color = "currentColor", strokeWidth = 2 }: { size?: number; color?: string; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ITEMS = [
  { name: "Gmail",      col: 2, row: 0, color: "#EA4335", Icon: Mail },
  { name: "Zapier",     col: 0, row: 1, color: "#FF4A00", Icon: Zap },
  { name: "HubSpot",    col: 3, row: 1, color: "#FF7A59", Icon: Share2 },
  { name: "Notion",     col: 4, row: 1, color: "#FFFFFF", Icon: BookOpen },
  { name: "Stripe",     col: 1, row: 2, color: "#635BFF", Icon: CreditCard },
  { name: "Sheets",     col: 2, row: 2, color: "#0F9D58", Icon: FileSpreadsheet },
  { name: "LinkedIn",   col: 3, row: 2, color: "#0A66C2", Icon: LinkedinIcon },
  { name: "Meet",       col: 5, row: 2, color: "#00A76A", Icon: Video },
  { name: "Shopify",    col: 0, row: 3, color: "#95BF47", Icon: ShoppingBag },
  { name: "Calendar",   col: 3, row: 3, color: "#4C8DFF", Icon: Calendar },
  { name: "WhatsApp",   col: 2, row: 4, color: "#25D366", Icon: Phone },
  { name: "Instagram",  col: 3, row: 4, color: "#E4405F", Icon: Camera },
  { name: "Slack",      col: 4, row: 4, color: "#8E5BB5", Icon: MessageSquare },
  { name: "Teams",      col: 1, row: 5, color: "#8B8CC7", Icon: Users },
  { name: "Salesforce", col: 4, row: 5, color: "#00A1E0", Icon: Cloud },
  { name: "Discord",    col: 5, row: 5, color: "#5865F2", Icon: Gamepad2 },
];

const CELL = 60;
const GAP = 16;
const UNIT = CELL + GAP;

function center(col: number, row: number) {
  return { x: col * UNIT + CELL / 2, y: row * UNIT + CELL / 2 };
}

const AUTO_LINKS = [
  ["Sheets", "Notion"],
  ["Sheets", "Calendar"],
  ["Stripe", "Sheets"],
  ["Zapier", "HubSpot"],
  ["Gmail", "Stripe"],
  ["Shopify", "Gmail"],
  ["WhatsApp", "Teams"],
  ["Meet", "Calendar"],
  ["Instagram", "LinkedIn"],
  ["Slack", "Discord"],
];

export default function IntegrationGrid() {
  const [linkIdx, setLinkIdx] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => setLinkIdx((i) => (i + 1) % AUTO_LINKS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const cols = Math.max(...ITEMS.map((i) => i.col)) + 1;
  const rows = Math.max(...ITEMS.map((i) => i.row)) + 1;
  const width = cols * UNIT - GAP;
  const height = rows * UNIT - GAP;

  const [fromName, toName] = AUTO_LINKS[linkIdx];
  const from = ITEMS.find((i) => i.name === fromName);
  const to = ITEMS.find((i) => i.name === toName);
  if (!from || !to) return null;

  const p1 = center(from.col, from.row);
  const p2 = center(to.col, to.row);
  const activeNames = new Set([fromName, toName, hovered].filter(Boolean));

  return (
    <div style={{ position: "relative", width, height }}>
      <svg style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} width={width} height={height}>
        <path
          d={`M${p1.x},${p1.y} L${p1.x},${(p1.y + p2.y) / 2} Q${p1.x},${p2.y} ${(p1.x + p2.x) / 2 > p1.x ? p1.x + 12 : p1.x - 12},${p2.y} L${p2.x},${p2.y}`}
          stroke={to.color}
          strokeWidth="2"
          fill="none"
          style={{ transition: "all 0.6s ease" }}
        />
      </svg>

      {ITEMS.map((item) => {
        const pos = center(item.col, item.row);
        const isActive = activeNames.has(item.name);
        const Icon = item.Icon;
        return (
          <div
            key={item.name}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "absolute",
              left: pos.x - CELL / 2,
              top: pos.y - CELL / 2,
              width: CELL,
              height: CELL,
              borderRadius: 14,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              cursor: "pointer",
              border: isActive ? "1px solid rgba(255,255,255,0.28)" : "1px solid rgba(255,255,255,0.13)",
              background: isActive ? "rgba(255,255,255,0.10)" : "transparent",
              boxShadow: isActive ? "0 10px 30px rgba(0,0,0,0.35)" : "none",
              backdropFilter: isActive ? "blur(8px)" : "none",
              zIndex: isActive ? 3 : 1,
              transition: "all 0.35s ease",
            }}
          >
            <Icon
              size={22}
              strokeWidth={1.75}
              color={isActive ? item.color : "rgba(255,255,255,0.4)"}
              style={{ transition: "color 0.35s ease" }}
            />
            <span
              style={{
                fontSize: "9.5px",
                color: "rgba(255,255,255,0.75)",
                opacity: isActive ? 1 : 0,
                height: isActive ? "auto" : 0,
                transition: "opacity 0.3s ease",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
