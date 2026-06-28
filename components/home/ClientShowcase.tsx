"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";

// Custom Social Icons
const InstagramIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const clientAccounts = [
  {
    platform: "Instagram",
    icon: InstagramIcon,
    color: "#E4405F",
    handle: "@yourbrand",
    followers: "125.4K",
    engagement: "8.5%",
    growth: "+234%",
    posts: "847",
  },
  {
    platform: "Facebook",
    icon: FacebookIcon,
    color: "#1877F2",
    handle: "Your Brand Official",
    followers: "89.2K",
    engagement: "6.2%",
    growth: "+156%",
    posts: "534",
  },
  {
    platform: "Twitter",
    icon: TwitterIcon,
    color: "#000000",
    handle: "@yourbrandhq",
    followers: "45.8K",
    engagement: "12.3%",
    growth: "+89%",
    posts: "2.3K",
  },
  {
    platform: "LinkedIn",
    icon: LinkedinIcon,
    color: "#0A66C2",
    handle: "Your Brand Company",
    followers: "34.1K",
    engagement: "9.7%",
    growth: "+145%",
    posts: "412",
  },
];

export default function ClientShowcase() {
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
        cardBg: "rgba(15, 22, 38, 0.6)",
        cardBorder: "rgba(110, 140, 255, 0.15)",
        accent: "#6E8CFF",
      }
    : {
        bg: "#ffffff",
        title: "#111111",
        subtitle: "#666666",
        cardBg: "#ffffff",
        cardBorder: "#e2e8f0",
        accent: "#4169E1",
      };

  return (
    <section style={{ background: colors.bg, fontFamily: "Hanken Grotesk, sans-serif", padding: "40px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(900px, 1fr))", gap: "60px", alignItems: "center" }}>
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
              Social Media Management
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
              We Grow Brands
              <br />
              <span style={{ color: colors.accent }}>Across All Platforms.</span>
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: colors.subtitle,
                lineHeight: 1.6,
                marginBottom: "40px",
              }}
            >
              Strategic content, community engagement, and data-driven growth. We manage
              your social presence so you can focus on running your business.
            </p>

            {/* Features List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { icon: TrendingUp, text: "Organic growth strategies that build real audiences" },
                { icon: Users, text: "Community management that drives engagement" },
                { icon: Target, text: "Targeted campaigns that convert followers to customers" },
                { icon: BarChart3, text: "Analytics and reporting to track what matters" },
              ].map((feature, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
                    <feature.icon size={22} color={colors.accent} />
                  </div>
                  <span style={{ fontSize: "16px", color: colors.subtitle }}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Social Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            {clientAccounts.map((account, index) => {
              const Icon = account.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: colors.cardBg,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "16px",
                    padding: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(65, 105, 225, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: `${account.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={20} color={account.color} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: colors.title }}>
                        {account.platform}
                      </div>
                      <div style={{ fontSize: "11px", color: colors.subtitle }}>
                        {account.handle}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                    <div>
                      <div style={{ fontSize: "11px", color: colors.subtitle, marginBottom: "4px" }}>Followers</div>
                      <div style={{ fontSize: "16px", fontWeight: 700, color: colors.title }}>
                        {account.followers}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: colors.subtitle, marginBottom: "4px" }}>Engagement</div>
                      <div style={{ fontSize: "16px", fontWeight: 700, color: account.color }}>
                        {account.engagement}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "12px",
                      paddingTop: "12px",
                      borderTop: `1px solid ${colors.cardBorder}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "11px", color: colors.subtitle }}>
                      {account.posts} posts
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#22c55e",
                      }}
                    >
                      {account.growth}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
