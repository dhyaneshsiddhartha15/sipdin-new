"use client";

import { useState, useEffect } from "react";
import { Sparkles, Zap, Globe, Smartphone, Code, BarChart3, ArrowRight } from "lucide-react";

// Latest features and updates
const FEATURES = [
  {
    title: "AI-Powered SEO Automation",
    description: "Our new AI engine automatically identifies high-value keywords, generates SEO-optimized content, and monitors your rankings in real-time.",
    icon: Sparkles,
    color: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    link: "/services",
    badge: "New",
  },
  {
    title: "Lightning-Fast Web Performance",
    description: "Latest optimization techniques ensure your website loads in under 2 seconds, improving SEO rankings and user experience.",
    icon: Zap,
    color: "#F97316",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    link: "/services",
    badge: "Enhanced",
  },
  {
    title: "Global CDN Integration",
    description: "Your content now delivers faster worldwide with our new CDN integration, ensuring optimal performance in every region.",
    icon: Globe,
    color: "#22C55E",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    link: "/services",
    badge: "Updated",
  },
  {
    title: "Mobile-First Development",
    description: "All new projects are built mobile-first, ensuring perfect experiences across smartphones, tablets, and desktops.",
    icon: Smartphone,
    color: "#4169E1",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    link: "/services",
    badge: "Standard",
  },
  {
    title: "Custom CRM Solutions",
    description: "Build tailored CRM systems that integrate seamlessly with your existing tools and automate your workflows.",
    icon: Code,
    color: "#EAB308",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "/services",
    badge: "Popular",
  },
  {
    title: "Advanced Analytics Dashboard",
    description: "Real-time insights into your marketing performance with beautiful, actionable dashboards and reports.",
    icon: BarChart3,
    color: "#EF4444",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "/services",
    badge: "Analytics",
  },
];

export default function FeaturesSection() {
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
        description: "#7e8aa0",
        border: "rgba(110, 140, 255, 0.15)",
      }
    : {
        bg: "#ffffff",
        cardBg: "#ffffff",
        title: "#111111",
        subtitle: "#555555",
        description: "#777777",
        border: "#e5e7eb",
      };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .feature-card:hover .feature-image {
          transform: scale(1.05);
        }
        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>

      <section style={{ background: colors.bg, fontFamily: "Hanken Grotesk, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "80px 24px" }}>
          {/* Section Header */}
          <div style={{
            marginBottom: "64px",
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
              What's New
            </span>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: colors.title,
              marginBottom: "16px",
              fontFamily: "Hanken Grotesk, sans-serif",
            }}>
              Explore What's Possible.
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: colors.subtitle,
              fontFamily: "Inter, sans-serif",
              maxWidth: "600px",
            }}>
              Discover the latest features and capabilities we've added to help you succeed.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))",
            gap: "32px",
          }}>
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "24px",
                    alignItems: "center",
                    padding: "24px",
                    borderRadius: "20px",
                    background: colors.cardBg,
                    border: `1px solid ${colors.border}`,
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = isDark
                      ? "0 20px 40px rgba(65, 105, 225, 0.2)"
                      : "0 20px 40px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Image */}
                  <div style={{
                    position: "relative",
                    height: "200px",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="feature-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                      }}
                    />
                    {/* Badge */}
                    <div style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      padding: "6px 12px",
                      background: feature.color,
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#fff",
                      fontFamily: "Geist, sans-serif",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}>
                      {feature.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                      <div
                        className="feature-icon"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: `${feature.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "transform 0.4s ease",
                        }}
                      >
                        <Icon size={20} color={feature.color} strokeWidth={2} />
                      </div>
                      <h3 style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: colors.title,
                        marginBottom: "0",
                        fontFamily: "Hanken Grotesk, sans-serif",
                        flex: 1,
                      }}>
                        {feature.title}
                      </h3>
                    </div>
                    <p style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: colors.description,
                      marginBottom: "16px",
                      fontFamily: "Inter, sans-serif",
                    }}>
                      {feature.description}
                    </p>
                    <a
                      href={feature.link}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        color: feature.color,
                        fontSize: "13px",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontFamily: "Geist, sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.gap = "10px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.gap = "6px";
                      }}
                    >
                      <span>Learn more</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
