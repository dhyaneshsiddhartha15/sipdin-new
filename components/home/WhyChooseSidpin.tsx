"use client";

import { useState, useEffect } from "react";
import { Clapperboard, Layers, Building2, TrendingUp, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Clapperboard,
    title: "Filmmaking First",
    text: "We start with storytelling, because great brands are built through stories people remember.",
  },
  {
    icon: Layers,
    title: "Beyond Content",
    text: "Content gets attention, websites create trust, systems create consistency. We connect every piece.",
  },
  {
    icon: Building2,
    title: "Built For Real Businesses",
    text: "Hotels, restaurants, travel, yoga centers, schools, NGOs — every solution is tailored to business goals.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    text: "Views are important. Followers are useful. Growth is what matters — every project creates measurable impact.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partner",
    text: "We don't just deliver projects. We help brands evolve, improve, and grow over time.",
  },
];

export default function WhyChooseSidpin() {
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
        title: "#eef2fb",
        subtitle: "#aab4c9",
        cardBorder: "rgba(110, 140, 255, 0.15)",
        accent: "#6E8CFF",
      }
    : {
        bg: "#ffffff",
        title: "#111111",
        subtitle: "#666666",
        cardBorder: "#e2e8f0",
        accent: "#4169E1",
      };

  return (
    <section style={{ background: colors.bg, fontFamily: "Hanken Grotesk, sans-serif", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* LEFT: Content */}
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderRadius: "9999px",
                border: `1px solid ${colors.accent}20`,
                background: `${colors.accent}05`,
                padding: "8px 20px",
                fontFamily: "Geist, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: colors.accent,
                marginBottom: "24px",
              }}
            >
              Why Choose SidPin
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: "24px",
                color: colors.title,
              }}
            >
              Not Another Agency.
              <br />
              <span style={{ color: colors.accent }}>A Creative Growth Partner.</span>
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: colors.subtitle,
                lineHeight: 1.6,
              }}
            >
              Most agencies offer services. We build attention, trust, systems,
              and growth through one connected ecosystem.
            </p>
          </div>

          {/* RIGHT: Reasons List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {reasons.map((reason) => (
              <div
                key={reason.title}
                style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: `${colors.accent}10`,
                    border: `1px solid ${colors.accent}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <reason.icon size={22} color={colors.accent} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      color: colors.title,
                      marginBottom: "4px",
                    }}
                  >
                    {reason.title}
                  </div>
                  <span style={{ fontSize: "15px", color: colors.subtitle, lineHeight: 1.5 }}>
                    {reason.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
