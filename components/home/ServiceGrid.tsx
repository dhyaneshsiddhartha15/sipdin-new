"use client";

import { useState, useEffect } from "react";
import { ArrowRight, TrendingUp, Zap, Users, Target, BarChart3, Globe, Smartphone, Mail, Palette, Code, Video } from "lucide-react";

// Service categories for the grid
const SERVICES = [
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Drive Results with Data-Driven Strategies",
    description: "SEO, PPC, Social Media, Content Marketing - everything to grow your online presence.",
    icon: TrendingUp,
    color: "#4169E1",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    tagline: "Supercharge Your Workflow with AI",
    description: "Custom AI agents, automation workflows, chatbots, and intelligent process automation.",
    icon: Zap,
    color: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: "web-development",
    name: "Web Development",
    tagline: "Build Fast. Convert Better.",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    icon: Code,
    color: "#22C55E",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  },
  {
    id: "creative-design",
    name: "Creative Design",
    tagline: "Design That Captivates",
    description: "Branding, UI/UX design, graphics, and visual experiences that make your brand unforgettable.",
    icon: Palette,
    color: "#F97316",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    id: "video-production",
    name: "Video Production",
    tagline: "Stories That Move",
    description: "Professional video production, editing, and motion graphics that tell your brand story.",
    icon: Video,
    color: "#EF4444",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
  {
    id: "seo-services",
    name: "SEO Services",
    tagline: "Rank Higher. Convert More.",
    description: "Advanced SEO strategies, technical optimization, and content marketing to dominate search.",
    icon: Target,
    color: "#EAB308",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop",
  },
];

export default function ServiceGrid() {
  const [isDark, setIsDark] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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
        description: "#7e8aa0",
        border: "rgba(110, 140, 255, 0.15)",
        hoverBorder: "rgba(110, 140, 255, 0.3)",
      }
    : {
        bg: "#ffffff",
        cardBg: "#ffffff",
        title: "#111111",
        subtitle: "#555555",
        description: "#777777",
        border: "#e5e7eb",
        hoverBorder: "#4169E1",
      };

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .service-card:hover .card-image {
          transform: scale(1.05);
        }
        .service-card:hover .card-icon {
          transform: scale(1.1);
        }
      `}</style>

      <section style={{ background: colors.bg, fontFamily: "Hanken Grotesk, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "100px 24px" }}>
          {/* Section Header */}
          <div style={{
            textAlign: "center",
            marginBottom: "64px",
            maxWidth: "800px",
            margin: "0 auto 64px",
          }}>
            <span style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: isDark ? "#6E8CFF" : "#4169E1",
              marginBottom: "16px",
              display: "block",
            }}>
              Everything You Need
            </span>
            <h2 style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: colors.title,
              marginBottom: "24px",
              fontFamily: "Hanken Grotesk, sans-serif",
            }}>
              Make Anything Possible.
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: colors.subtitle,
              fontFamily: "Inter, sans-serif",
              maxWidth: "600px",
              margin: "0 auto",
            }}>
              Whether you're a startup, agency, or enterprise brand, we have the expertise and tools to bring your vision to life.
            </p>
          </div>

          {/* Services Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "24px",
          }}>
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;
              return (
                <a
                  key={service.id}
                  href="/services"
                  className="service-card"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    background: colors.cardBg,
                    border: `1px solid ${isHovered ? colors.hoverBorder : colors.border}`,
                    transition: "all 0.4s ease",
                    textDecoration: "none",
                    display: "block",
                    boxShadow: isDark
                      ? (isHovered ? "0 20px 40px rgba(65, 105, 225, 0.2)" : "none")
                      : (isHovered ? "0 20px 40px rgba(0, 0, 0, 0.1)" : "0 4px 12px rgba(0, 0, 0, 0.05)"),
                  }}
                >
                  {/* Image with overlay */}
                  <div style={{
                    position: "relative",
                    height: "240px",
                    overflow: "hidden",
                  }}>
                    <div className="card-image" style={{
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.6s ease",
                    }}>
                      <img
                        src={service.image}
                        alt={service.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(180deg, transparent 0%, ${isDark ? "rgba(7, 11, 20, 0.8)" : "rgba(0, 0, 0, 0.6)"} 100%)`,
                    }} />
                    {/* Icon badge */}
                    <div
                      className="card-icon"
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: isDark ? "rgba(15, 22, 38, 0.9)" : "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.4s ease",
                        border: `1px solid ${service.color}30`,
                      }}
                    >
                      <Icon size={24} color={service.color} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{
                    padding: "24px",
                  }}>
                    <h3 style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: colors.title,
                      marginBottom: "8px",
                      fontFamily: "Hanken Grotesk, sans-serif",
                    }}>
                      {service.name}
                    </h3>
                    <p style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: service.color,
                      marginBottom: "12px",
                      fontFamily: "Geist, sans-serif",
                      letterSpacing: "0.02em",
                    }}>
                      {service.tagline}
                    </p>
                    <p style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: colors.description,
                      marginBottom: "16px",
                      fontFamily: "Inter, sans-serif",
                    }}>
                      {service.description}
                    </p>

                    {/* Learn more link */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: service.color,
                      fontSize: "13px",
                      fontWeight: 600,
                      fontFamily: "Geist, sans-serif",
                    }}>
                      <span>Learn more</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: "center",
            marginTop: "64px",
          }}>
            <a
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                background: isDark ? "#6E8CFF" : "#4169E1",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                fontFamily: "Geist, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 10px 30px rgba(110, 140, 255, 0.4)"
                  : "0 10px 30px rgba(65, 105, 225, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              See All Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
