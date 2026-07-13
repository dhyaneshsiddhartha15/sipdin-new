"use client";

import { useEffect, useState } from "react";
import {
  Mail, Zap, Share2, BookOpen, CreditCard, FileSpreadsheet,
  Video, ShoppingBag, Calendar, Phone, Camera, MessageSquare, Users, Cloud, Gamepad2,
} from "lucide-react";

// Custom LinkedIn icon since it's not in lucide-react
const LinkedinIcon = ({ size = 24, color = "currentColor", strokeWidth = 2 }: { size?: number; color?: string; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// (col, row) taken directly from the reference screenshot's pixel grid
const ITEMS = [
  { name: "Gmail",      col: 2, row: 0, color: "#EA4335", Icon: Mail },
  { name: "Zapier",     col: 0, row: 1, color: "#FF4A00", Icon: Zap },
  { name: "HubSpot",    col: 3, row: 1, color: "#FF7A59", Icon: Share2 },
  { name: "Notion",     col: 4, row: 1, color: "#000000", Icon: BookOpen },
  { name: "Stripe",     col: 1, row: 2, color: "#635BFF", Icon: CreditCard },
  { name: "Sheets",     col: 2, row: 2, color: "#0F9D58", Icon: FileSpreadsheet },
  { name: "LinkedIn",   col: 3, row: 2, color: "#0A66C2", Icon: LinkedinIcon },
  { name: "Meet",       col: 5, row: 2, color: "#00832D", Icon: Video },
  { name: "Shopify",    col: 0, row: 3, color: "#95BF47", Icon: ShoppingBag },
  { name: "Calendar",   col: 3, row: 3, color: "#1A73E8", Icon: Calendar },
  { name: "WhatsApp",   col: 2, row: 4, color: "#25D366", Icon: Phone },
  { name: "Instagram",  col: 3, row: 4, color: "#E4405F", Icon: Camera },
  { name: "Slack",      col: 4, row: 4, color: "#4A154B", Icon: MessageSquare },
  { name: "Teams",      col: 1, row: 5, color: "#6264A7", Icon: Users },
  { name: "Salesforce", col: 4, row: 5, color: "#00A1E0", Icon: Cloud },
  { name: "Discord",    col: 5, row: 5, color: "#5865F2", Icon: Gamepad2 },
];

const CELL = 76;
const GAP = 20;
const UNIT = CELL + GAP;

function center(col: number, row: number) {
  return { x: col * UNIT + CELL / 2, y: row * UNIT + CELL / 2 };
}

// Pairs that cycle through - showing ONE connection at a time
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

export default function Hero() {
  const [linkIdx, setLinkIdx] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check dark mode
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();

    // Watch for dark mode changes
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cycle through connections every 2.8 seconds
    const id = setInterval(() => {
      setLinkIdx((i) => (i + 1) % AUTO_LINKS.length);
    }, 2800);

    return () => {
      clearInterval(id);
      observer.disconnect();
    };
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

  const colors = isDark
    ? {
        bg: "#070b14",
        cardBg: "rgba(15, 22, 38, 0.6)",
        title: "#eef2fb",
        subtitle: "#aab4c9",
        inputBg: "rgba(22, 31, 51, 0.5)",
        inputText: "#eef2fb",
        inputPlaceholder: "#7e8aa0",
        border: "rgba(110, 140, 255, 0.3)",
        iconBorder: "rgba(110, 140, 255, 0.15)",
        iconText: "rgba(110, 140, 255, 0.4)",
        label: "#aab4c9",
        activeBorder: "rgba(110, 140, 255, 0.3)",
        inactiveBorder: "rgba(110, 140, 255, 0.15)",
      }
    : {
        bg: "#ffffff",
        cardBg: "#ffffff",
        title: "#111111",
        subtitle: "#555555",
        inputBg: "#eceaf9",
        inputText: "#333",
        inputPlaceholder: "#999",
        border: "#e2e2f5",
        iconBorder: "#d1d5db",
        iconText: "#d1d5db",
        label: "#555",
        activeBorder: "#f0f0f0",
        inactiveBorder: "#e8e8f2",
      };

  return (
    <>
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        .service-shake:hover {
          animation: shake 0.5s ease-in-out;
        }
        /* Scale the fixed-size integration grid down on small screens */
        .hero-grid-zoom { zoom: 1; }
        @media (max-width: 640px) { .hero-grid-zoom { zoom: 0.85; } }
        @media (max-width: 520px) { .hero-grid-zoom { zoom: 0.66; } }
        @media (max-width: 400px) { .hero-grid-zoom { zoom: 0.55; } }
        @media (max-width: 344px) { .hero-grid-zoom { zoom: 0.45; } }
      `}</style>
    <section style={{ background: colors.bg, fontFamily: "Hanken Grotesk, -apple-system, sans-serif", paddingTop: "80px" }}>
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "80px clamp(20px, 4vw, 40px) 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* LEFT: copy */}
        <div>
          <div style={{ marginBottom: "24px" }}>
            <span style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: isDark ? "#6E8CFF" : "#4169E1"
            }}>
              Digital Delivery
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(44px, 4.6vw, 62px)",
              fontWeight: 600,
              lineHeight: 1.16,
              color: colors.title,
              margin: "0 0 32px 0",
              fontFamily: "Hanken Grotesk, sans-serif",
            }}
          >
            We Build{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationColor: isDark ? "#6E8CFF" : "#4169E1",
                textDecorationThickness: "5px",
                textUnderlineOffset: "10px",
              }}
            >
              Digital Products
            </span>
            <br />
            <span style={{ color: isDark ? "#6E8CFF" : "#4169E1" }}>That Actually Get Delivered.</span>
          </h1>
          <p style={{ fontSize: "19px", color: colors.subtitle, lineHeight: 1.75, maxWidth: "560px", margin: "0 0 40px 0", fontFamily: "Inter, sans-serif" }}>
            Scale your business, agency, or startup with end-to-end{" "}
            <span
              className="service-shake"
              style={{
                color: colors.title,
                fontWeight: 600,
                transition: "color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#EF4444"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.title; }}
            >Digital Marketing</span>,{" "}
            <span
              className="service-shake"
              style={{
                color: colors.title,
                fontWeight: 600,
                transition: "color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#22C55E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.title; }}
            >SEO</span>,{" "}
            <span
              className="service-shake"
              style={{
                color: colors.title,
                fontWeight: 600,
                transition: "color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#3B82F6"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.title; }}
            >Creative Design</span>,{" "}
            <span
              className="service-shake"
              style={{
                color: colors.title,
                fontWeight: 600,
                transition: "color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#F97316"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.title; }}
            >Video Production</span>,{" "}
            <span
              className="service-shake"
              style={{
                color: colors.title,
                fontWeight: 600,
                transition: "color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#8B5CF6"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.title; }}
            >Website Development</span>,{" "}
            <span
              className="service-shake"
              style={{
                color: colors.title,
                fontWeight: 600,
                transition: "color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#EC4899"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.title; }}
            >AI Automation</span>,{" "}
            <span
              className="service-shake"
              style={{
                color: colors.title,
                fontWeight: 600,
                transition: "color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#14B8A6"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.title; }}
            >AI Agents</span>,{" "}
            <span
              className="service-shake"
              style={{
                color: colors.title,
                fontWeight: 600,
                transition: "color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#EAB308"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.title; }}
            >Custom CRM Solutions</span>, and{" "}
            <span
              className="service-shake"
              style={{
                color: colors.title,
                fontWeight: 600,
                transition: "color 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#6366F1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.title; }}
            >White-Label Services</span> — all from one
            trusted digital partner.
          </p>

          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: isDark ? "#6E8CFF" : "#4169E1",
              color: "#fff",
              border: "none",
              padding: "18px 32px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              cursor: "pointer",
              textDecoration: "none",
              fontFamily: "Geist, sans-serif",
              transition: "background 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark ? "#8FB0FF" : "#6E8CFF";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isDark ? "#6E8CFF" : "#4169E1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            See Our Work
            <span style={{ fontSize: "18px" }}>→</span>
          </a>
          <a
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginLeft: "24px",
              fontSize: "15px",
              fontWeight: 500,
              color: colors.title,
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Explore Our Services{" "}
            <span style={{ color: isDark ? "#6E8CFF" : "#4169E1", fontWeight: 600 }}>Here</span>
          </a>
        </div>

        {/* RIGHT: integration grid */}
        <div className="hero-grid-zoom" style={{ position: "relative", width, height, margin: "0 auto" }}>
          {/* Single connector line that cycles through pairs */}
          <svg style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} width={width} height={height}>
            <path
              d={`M${p1.x},${p1.y} L${p1.x},${(p1.y + p2.y) / 2} Q${p1.x},${p2.y} ${(p1.x + p2.x) / 2 > p1.x ? p1.x + 14 : p1.x - 14},${p2.y} L${p2.x},${p2.y}`}
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
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  cursor: "pointer",
                  border: isActive ? `1px solid ${colors.activeBorder}` : `1px solid ${colors.inactiveBorder}`,
                  background: isActive ? colors.cardBg : "transparent",
                  boxShadow: isActive ? (isDark ? "0 8px 24px rgba(65, 105, 225, 0.2)" : "0 8px 24px rgba(0,0,0,0.08)") : "none",
                  backdropFilter: isDark ? "blur(10px)" : "none",
                  zIndex: isActive ? 3 : 1,
                  transition: "all 0.35s ease",
                }}
              >
                <Icon
                  size={26}
                  strokeWidth={1.75}
                  color={isActive ? item.color : colors.iconText}
                  style={{ transition: "color 0.35s ease" }}
                />
                <span
                  style={{
                    fontSize: "10.5px",
                    color: colors.label,
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
      </div>
    </section>
    </>
  );
}
