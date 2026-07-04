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

function Pill({ name, tag, Icon }: { name: string; tag: string; Icon: any }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "0 20px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          background: "#ffffff",
          border: "1px solid #e7e9f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 6px rgba(20,20,50,0.04)",
          flexShrink: 0,
        }}
      >
        <Icon size={16} strokeWidth={1.8} color="#444" />
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600, fontSize: "14px", color: "#111" }}>{name}</p>
        <p style={{ margin: 0, fontSize: "9px", letterSpacing: "0.06em", color: "#9aa0b4" }}>{tag}</p>
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
        bg: "#070b14",
        titleGradient: "linear-gradient(90deg, #BEDD00, #0095B6)",
        fadeStart: "rgba(7, 11, 20, 1)",
        fadeEnd: "transparent",
        pillBg: "#0f1628",
        pillBorder: "rgba(110, 140, 255, 0.2)",
        nameColor: "#eef2fb",
        tagColor: "#7e8aa0",
      }
    : {
        bg: "#f4f6fb",
        titleGradient: "linear-gradient(90deg, #6366f1, #06b6d4, #10b981)",
        fadeStart: "#f4f6fb",
        fadeEnd: "transparent",
        pillBg: "#ffffff",
        pillBorder: "#e7e9f3",
        nameColor: "#111",
        tagColor: "#9aa0b4",
      };

  return (
    <section
      style={{
        background: colors.bg,
        padding: "50px 0",
        fontFamily: "Hanken Grotesk, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto 30px", padding: "0 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
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
        <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, color: isDark ? "#eef2fb" : "#111", margin: "0 0 8px 0" }}>
          Powering SIDPIN Digital.
        </h2>
      </div>

      <div style={{ position: "relative" }}>
        {/* fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "60px", background: `linear-gradient(90deg, ${colors.fadeStart}, ${colors.fadeEnd})`, zIndex: 2 }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "60px", background: `linear-gradient(270deg, ${colors.fadeStart}, ${colors.fadeEnd})`, zIndex: 2 }} />

        <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
          {[...STACK, ...STACK].map((item, i) => (
            <Pill key={i} {...item} />
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
