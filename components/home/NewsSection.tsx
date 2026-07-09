"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Calendar, TrendingUp } from "lucide-react";

// News items
const NEWS_ITEMS = [
  {
    id: 1,
    category: "AI Innovation",
    title: "Introducing Our New AI-Powered Content Generation Platform",
    excerpt: "Create compelling marketing content in seconds with our latest AI technology that understands your brand voice.",
    date: "July 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    link: "/blog",
  },
  {
    id: 2,
    category: "Case Study",
    title: "How We Helped a Startup Achieve 500% Growth in 6 Months",
    excerpt: "Discover the comprehensive digital strategy that transformed this tech startup into a market leader.",
    date: "June 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    link: "/blog",
  },
  {
    id: 3,
    category: "Web Development",
    title: "The Future of Web Performance: Speed Metrics That Matter",
    excerpt: "Learn why load times are critical and how our optimization techniques deliver sub-2-second performance.",
    date: "June 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    link: "/blog",
  },
];

export default function NewsSection() {
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
        .news-card:hover .news-image {
          transform: scale(1.05);
        }
      `}</style>

      <section style={{ background: colors.bg, fontFamily: "Hanken Grotesk, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "80px 24px" }}>
          {/* Section Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "24px",
          }}>
            <div>
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
                Latest Updates
              </span>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: colors.title,
                marginBottom: "8px",
                fontFamily: "Hanken Grotesk, sans-serif",
              }}>
                News & Insights
              </h2>
              <p style={{
                fontSize: "16px",
                color: colors.subtitle,
                fontFamily: "Inter, sans-serif",
              }}>
                Stay updated with our latest articles, case studies, and industry insights.
              </p>
            </div>
            <a
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                background: "transparent",
                color: colors.title,
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 600,
                transition: "all 0.3s ease",
                fontFamily: "Geist, sans-serif",
                border: `2px solid ${isDark ? "#6E8CFF" : "#4169E1"}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${isDark ? "#6E8CFF" : "#4169E1"}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              View All Posts
              <ArrowRight size={16} />
            </a>
          </div>

          {/* News Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
            gap: "32px",
          }}>
            {NEWS_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="news-card"
                style={{
                  display: "block",
                  background: colors.cardBg,
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: `1px solid ${colors.border}`,
                  transition: "all 0.4s ease",
                  textDecoration: "none",
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
                  overflow: "hidden",
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="news-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />
                  {/* Category badge */}
                  <div style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    padding: "8px 16px",
                    background: isDark ? "rgba(15, 22, 38, 0.9)" : "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: colors.title,
                    fontFamily: "Geist, sans-serif",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}>
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "24px" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                    fontSize: "13px",
                    color: colors.subtitle,
                    fontFamily: "Inter, sans-serif",
                  }}>
                    <Calendar size={14} />
                    {item.date}
                  </div>
                  <h3 style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: colors.title,
                    marginBottom: "12px",
                    lineHeight: 1.3,
                    fontFamily: "Hanken Grotesk, sans-serif",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: colors.description,
                    marginBottom: "16px",
                    fontFamily: "Inter, sans-serif",
                  }}>
                    {item.excerpt}
                  </p>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: isDark ? "#6E8CFF" : "#4169E1",
                    fontSize: "13px",
                    fontWeight: 600,
                    fontFamily: "Geist, sans-serif",
                  }}>
                    <span>Read more</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
