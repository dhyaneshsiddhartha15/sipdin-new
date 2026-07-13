"use client";

import { useState, useEffect } from "react";
import {
  PenTool, Image as ImageIcon, Palette, Edit3, Terminal, Rocket, Server,
  Cloud, Database, Atom, Triangle, Globe, FileCode, Container,
} from "lucide-react";

const STACK = [
  { name: "Adobe", tag: "DESIGN", Icon: PenTool },
  { name: "Photoshop", tag: "DESIGN", Icon: ImageIcon },
  { name: "Canva", tag: "DESIGN", Icon: Palette },
  { name: "Figma", tag: "DESIGN", Icon: Edit3 },
  { name: "Node.js", tag: "BACKEND", Icon: Terminal },
  { name: "Go", tag: "BACKEND", Icon: Terminal },
  { name: "Python", tag: "BACKEND", Icon: Terminal },
  { name: "FastAPI", tag: "BACKEND", Icon: Rocket },
  { name: "Express", tag: "BACKEND", Icon: Server },
  { name: "AWS", tag: "CLOUD", Icon: Cloud },
  { name: "Azure", tag: "CLOUD", Icon: Cloud },
  { name: "Google Cloud", tag: "CLOUD", Icon: Cloud },
  { name: "MongoDB", tag: "DATABASE", Icon: Database },
  { name: "Redis", tag: "DATABASE", Icon: Database },
  { name: "React", tag: "FRONTEND", Icon: Atom },
  { name: "Angular", tag: "FRONTEND", Icon: Triangle },
  { name: "Next.js", tag: "FRONTEND", Icon: Globe },
  { name: "TypeScript", tag: "LANGUAGE", Icon: FileCode },
  { name: "Docker", tag: "DEVOPS", Icon: Container },
];

// Split STACK into two halves for two-row marquee
const STACK_FIRST_HALF = STACK.slice(0, 10);
const STACK_SECOND_HALF = STACK.slice(10);

function Pill({ name, tag, Icon, index }: { name: string; tag: string; Icon: any; index: number }) {
  return (
    <div
      className="tech-pill"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 20px",
        flexShrink: 0,
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className="icon-wrapper"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
          border: "1px solid rgba(99, 102, 241, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 15px rgba(99, 102, 241, 0.1)",
          flexShrink: 0,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Icon size={18} strokeWidth={1.8} color="#4f46e5" />
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 700, fontSize: "15px", color: "#1a1a2e", letterSpacing: "-0.01em" }}>{name}</p>
        <p style={{ margin: "4px 0 0 0", fontSize: "10px", letterSpacing: "0.12em", fontWeight: 600, color: "#6366f1" }}>{tag}</p>
      </div>
    </div>
  );
}

export default function TechMarquee() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const colors = isDark
    ? {
        bg: "#0a0a0f",
        titleGradient: "linear-gradient(135deg, #00ff88, #00d4ff)",
        fadeStart: "rgba(10, 10, 15, 1)",
        fadeEnd: "transparent",
        pillBg: "rgba(255, 255, 255, 0.03)",
        pillBorder: "rgba(0, 255, 136, 0.15)",
        nameColor: "#eef2fb",
        tagColor: "#00ff88",
      }
    : {
        bg: "#f8f9ff",
        titleGradient: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
        fadeStart: "#f8f9ff",
        fadeEnd: "transparent",
        pillBg: "#ffffff",
        pillBorder: "rgba(99, 102, 241, 0.15)",
        nameColor: "#1a1a2e",
        tagColor: "#6366f1",
      };

  return (
    <section
      style={{
        background: colors.bg,
        padding: "60px 0",
        fontFamily: "Hanken Grotesk, -apple-system, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow effect */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "100%",
          background: isDark
            ? "radial-gradient(ellipse at center, rgba(0, 255, 136, 0.05), transparent 70%)"
            : "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto 40px", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-block", marginBottom: "16px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "8px 16px",
              borderRadius: "30px",
              background: isDark ? "rgba(0, 255, 136, 0.1)" : "rgba(99, 102, 241, 0.1)",
              color: isDark ? "#00ff88" : "#6366f1",
              border: `1px solid ${isDark ? "rgba(0, 255, 136, 0.2)" : "rgba(99, 102, 241, 0.2)"}`,
            }}
          >
            Technology Stack
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px 0" }}>
          <span
            style={{
              backgroundImage: colors.titleGradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Technology Core
          </span>
        </h2>
        <p style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 600, color: isDark ? "#eef2fb" : "#1a1a2e", margin: 0, opacity: 0.9 }}>
          Powering SIDPIN Digital
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "100px",
            background: `linear-gradient(90deg, ${colors.fadeStart}, ${colors.fadeEnd})`,
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "100px",
            background: `linear-gradient(270deg, ${colors.fadeStart}, ${colors.fadeEnd})`,
            zIndex: 2,
          }}
        />

        {/* Two rows of marquee */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Row 1 - Left scroll */}
          <div className="marquee-track" style={{ display: "flex", width: "max-content", gap: "16px" }}>
            {[...STACK_FIRST_HALF, ...STACK_FIRST_HALF, ...STACK_FIRST_HALF, ...STACK_FIRST_HALF].map((item, i) => (
              <div
                key={`row1-${i}`}
                style={{
                  padding: "14px 24px",
                  flexShrink: 0,
                  borderRadius: "16px",
                  background: colors.pillBg,
                  border: `1px solid ${colors.pillBorder}`,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="tech-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 8px 30px rgba(0, 255, 136, 0.2)"
                    : "0 8px 30px rgba(99, 102, 241, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  className="icon-wrapper"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: isDark
                      ? "linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 212, 255, 0.15))"
                      : "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
                    border: `1px solid ${isDark ? "rgba(0, 255, 136, 0.2)" : "rgba(99, 102, 241, 0.2)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <item.Icon size={20} strokeWidth={1.8} color={isDark ? "#00ff88" : "#6366f1"} />
                </div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: "15px", color: colors.nameColor }}>{item.name}</p>
                <p style={{ margin: "4px 0 0 0", fontSize: "10px", letterSpacing: "0.15em", fontWeight: 600, color: colors.tagColor }}>
                  {item.tag}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 - Right scroll (opposite direction) */}
          <div className="marquee-track-reverse" style={{ display: "flex", width: "max-content", gap: "16px" }}>
            {[...STACK_SECOND_HALF, ...STACK_SECOND_HALF, ...STACK_SECOND_HALF, ...STACK_SECOND_HALF].map((item, i) => (
              <div
                key={`row2-${i}`}
                style={{
                  padding: "14px 24px",
                  flexShrink: 0,
                  borderRadius: "16px",
                  background: colors.pillBg,
                  border: `1px solid ${colors.pillBorder}`,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="tech-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 8px 30px rgba(0, 255, 136, 0.2)"
                    : "0 8px 30px rgba(99, 102, 241, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  className="icon-wrapper"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: isDark
                      ? "linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 212, 255, 0.15))"
                      : "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
                    border: `1px solid ${isDark ? "rgba(0, 255, 136, 0.2)" : "rgba(99, 102, 241, 0.2)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <item.Icon size={20} strokeWidth={1.8} color={isDark ? "#00ff88" : "#6366f1"} />
                </div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: "15px", color: colors.nameColor }}>{item.name}</p>
                <p style={{ margin: "4px 0 0 0", fontSize: "10px", letterSpacing: "0.15em", fontWeight: 600, color: colors.tagColor }}>
                  {item.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
          padding: 0 24px;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-track-reverse {
          animation: marquee-scroll-reverse 40s linear infinite;
          padding: 0 24px;
        }
        .marquee-track-reverse:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .tech-card {
          animation: fadeSlideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .tech-card:nth-child(1) { animation-delay: 0.05s; }
        .tech-card:nth-child(2) { animation-delay: 0.1s; }
        .tech-card:nth-child(3) { animation-delay: 0.15s; }
        .tech-card:nth-child(4) { animation-delay: 0.2s; }
        .tech-card:nth-child(5) { animation-delay: 0.25s; }
        .tech-card:nth-child(6) { animation-delay: 0.3s; }
        .tech-card:nth-child(7) { animation-delay: 0.35s; }
        .tech-card:nth-child(8) { animation-delay: 0.4s; }
        .tech-card:nth-child(9) { animation-delay: 0.45s; }
        .tech-card:nth-child(10) { animation-delay: 0.5s; }
        .tech-card:nth-child(11) { animation-delay: 0.55s; }
        .tech-card:nth-child(12) { animation-delay: 0.6s; }
        .tech-card:nth-child(13) { animation-delay: 0.65s; }
        .tech-card:nth-child(14) { animation-delay: 0.7s; }
        .tech-card:nth-child(15) { animation-delay: 0.75s; }
        .tech-card:nth-child(16) { animation-delay: 0.8s; }
        .tech-card:nth-child(17) { animation-delay: 0.85s; }
        .tech-card:nth-child(18) { animation-delay: 0.9s; }
        .tech-card:nth-child(19) { animation-delay: 0.95s; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
          .tech-card {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
