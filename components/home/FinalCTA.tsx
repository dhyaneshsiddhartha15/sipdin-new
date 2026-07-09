"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

export default function FinalCTA() {
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
        cardBg: "rgba(15, 22, 38, 0.8)",
        title: "#eef2fb",
        subtitle: "#aab4c9",
        border: "rgba(110, 140, 255, 0.15)",
      }
    : {
        bg: "#ffffff",
        cardBg: "#ffffff",
        title: "#111111",
        subtitle: "#555555",
        border: "#e5e7eb",
      };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }
        .glow-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <section style={{ background: colors.bg, fontFamily: "Hanken Grotesk, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
          {/* Main CTA Card */}
          <div style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(110, 140, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)"
              : "linear-gradient(135deg, rgba(65, 105, 225, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
            borderRadius: "32px",
            padding: "64px",
            border: `1px solid ${colors.border}`,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Floating icons */}
            <div style={{
              position: "absolute",
              top: "40px",
              left: "60px",
              opacity: 0.3,
            }} className="floating-icon">
              <Sparkles size={32} color={isDark ? "#6E8CFF" : "#4169E1"} />
            </div>
            <div style={{
              position: "absolute",
              top: "80px",
              right: "80px",
              opacity: 0.3,
              animationDelay: "1s",
            }} className="floating-icon">
              <Zap size={28} color={isDark ? "#8B5CF6" : "#8B5CF6"} />
            </div>
            <div style={{
              position: "absolute",
              bottom: "60px",
              left: "100px",
              opacity: 0.3,
              animationDelay: "2s",
            }} className="floating-icon">
              <TrendingUp size={24} color={isDark ? "#22C55E" : "#22C55E"} />
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: colors.title,
                marginBottom: "24px",
                fontFamily: "Hanken Grotesk, sans-serif",
              }}>
                Ready to Transform Your Digital Presence?
              </h2>
              <p style={{
                fontSize: "20px",
                lineHeight: 1.6,
                color: colors.subtitle,
                marginBottom: "40px",
                fontFamily: "Inter, sans-serif",
                maxWidth: "700px",
                margin: "0 auto 40px",
              }}>
                Join hundreds of businesses that have accelerated their growth with our comprehensive digital solutions. Let's build something amazing together.
              </p>

              {/* CTAs */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                marginBottom: "48px",
              }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "18px 40px",
                    background: isDark ? "#6E8CFF" : "#4169E1",
                    color: "#fff",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                    fontFamily: "Geist, sans-serif",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = isDark
                      ? "0 15px 40px rgba(110, 140, 255, 0.4)"
                      : "0 15px 40px rgba(65, 105, 225, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Start Your Project
                  <ArrowRight size={20} />
                </a>

                <a
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "18px 40px",
                    background: "transparent",
                    color: colors.title,
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                    fontFamily: "Geist, sans-serif",
                    border: `2px solid ${colors.title}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${colors.title}10`;
                    e.currentTarget.style.borderColor = colors.title;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = `${colors.title}30`;
                  }}
                >
                  Explore Services
                </a>
              </div>

              {/* Trust indicators */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "48px",
                justifyContent: "center",
                paddingTop: "32px",
                borderTop: `1px solid ${colors.border}`,
              }}>
                <div>
                  <div style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: isDark ? "#6E8CFF" : "#4169E1",
                    marginBottom: "4px",
                    fontFamily: "Hanken Grotesk, sans-serif",
                  }}>
                    500+
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: colors.subtitle,
                    fontFamily: "Inter, sans-serif",
                  }}>
                    Projects Delivered
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: isDark ? "#8B5CF6" : "#8B5CF6",
                    marginBottom: "4px",
                    fontFamily: "Hanken Grotesk, sans-serif",
                  }}>
                    98%
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: colors.subtitle,
                    fontFamily: "Inter, sans-serif",
                  }}>
                    Client Satisfaction
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: isDark ? "#22C55E" : "#22C55E",
                    marginBottom: "4px",
                    fontFamily: "Hanken Grotesk, sans-serif",
                  }}>
                    300%
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: colors.subtitle,
                    fontFamily: "Inter, sans-serif",
                  }}>
                    Avg. Traffic Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
