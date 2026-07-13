"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Clapperboard,
  Layers,
  Building2,
  TrendingUp,
  Handshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

const caseStudyImages = [
  { src: "/social/social-case-1.jpeg", alt: "Client social media growth case study 1" },
  { src: "/social/social-case-2.jpeg", alt: "Client social media growth case study 2" },
  { src: "/social/social-case-3.jpeg", alt: "Client social media growth case study 3" },
  { src: "/social/social-case-4.jpeg", alt: "Client social media growth case study 4" },
  { src: "/social/social-case-5.jpeg", alt: "Client social media growth case study 5" },
];

export default function ClientShowcase() {
  const [isDark, setIsDark] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % caseStudyImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + caseStudyImages.length) % caseStudyImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const colors = isDark
    ? {
        bg: "#070b14",
        title: "#eef2fb",
        subtitle: "#aab4c9",
        cardBg: "rgba(15, 22, 38, 0.6)",
        cardBorder: "rgba(110, 140, 255, 0.15)",
        accent: "#6E8CFF",
        sliderBg: "#0d1424",
      }
    : {
        bg: "#ffffff",
        title: "#111111",
        subtitle: "#666666",
        cardBg: "#ffffff",
        cardBorder: "#e2e8f0",
        accent: "#4169E1",
        sliderBg: "#f1f5f9",
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
              Why Choose SIDPIN Digital
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
                marginBottom: "40px",
              }}
            >
              Most agencies offer services. We build attention, trust, systems,
              and growth through one connected ecosystem.
            </p>

            {/* Reasons List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {reasons.map((reason) => (
                <div key={reason.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
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
                        fontSize: "16px",
                        fontWeight: 600,
                        color: colors.title,
                        marginBottom: "2px",
                      }}
                    >
                      {reason.title}
                    </div>
                    <span style={{ fontSize: "14px", color: colors.subtitle, lineHeight: 1.5 }}>
                      {reason.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Case Study Image Slider */}
          <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "420px",
                aspectRatio: "4 / 5",
                borderRadius: "24px",
                overflow: "hidden",
                background: colors.sliderBg,
                border: `1px solid ${colors.cardBorder}`,
                boxShadow: isDark
                  ? "0 24px 64px rgba(0, 0, 0, 0.5)"
                  : "0 24px 64px rgba(65, 105, 225, 0.12)",
              }}
            >
              {caseStudyImages.map((image, index) => (
                <div
                  key={image.src}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: index === currentSlide ? 1 : 0,
                    transition: "opacity 0.6s ease",
                    pointerEvents: index === currentSlide ? "auto" : "none",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    style={{ objectFit: "contain" }}
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Prev / Next arrows */}
              <button
                onClick={prevSlide}
                aria-label="Previous case study"
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0, 0, 0, 0.45)",
                  backdropFilter: "blur(4px)",
                  color: "#ffffff",
                  transition: "background 0.2s ease",
                  zIndex: 2,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.45)";
                }}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next case study"
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0, 0, 0, 0.45)",
                  backdropFilter: "blur(4px)",
                  color: "#ffffff",
                  transition: "background 0.2s ease",
                  zIndex: 2,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.45)";
                }}
              >
                <ChevronRight size={22} />
              </button>

              {/* Slide counter */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(4px)",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  zIndex: 2,
                }}
              >
                {currentSlide + 1} / {caseStudyImages.length}
              </div>
            </div>

            {/* Dot indicators */}
            <div style={{ display: "flex", gap: "10px" }}>
              {caseStudyImages.map((image, index) => (
                <button
                  key={image.src}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to case study ${index + 1}`}
                  style={{
                    width: index === currentSlide ? "28px" : "10px",
                    height: "10px",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    background: index === currentSlide ? colors.accent : `${colors.accent}30`,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <p
              style={{
                fontSize: "14px",
                color: colors.subtitle,
                textAlign: "center",
                margin: 0,
              }}
            >
              Real results from accounts we manage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
