"use client";

import { useState, useEffect } from "react";
import { Cloud, Server, Database, Shield, Zap, Globe, CheckCircle } from "lucide-react";

const clouds = [
  {
    name: "AWS",
    fullName: "Amazon Web Services",
    icon: "☁️",
    color: "#FF9900",
    services: ["EC2", "S3", "RDS", "Lambda", "CloudFront"],
  },
  {
    name: "Azure",
    fullName: "Microsoft Azure",
    icon: "☁️",
    color: "#0078D4",
    services: ["App Service", "Blob Storage", "SQL Database", "Functions"],
  },
  {
    name: "Google Cloud",
    fullName: "Google Cloud Platform",
    icon: "☁️",
    color: "#4285F4",
    services: ["Compute Engine", "Cloud Storage", "Firestore", "Cloud Run"],
  },
  {
    name: "DigitalOcean",
    fullName: "DigitalOcean",
    icon: "🐋",
    color: "#0069FF",
    services: ["Droplets", "Spaces", "Managed Databases", "Kubernetes"],
  },
];

export default function CloudDeployment() {
  const [isDark, setIsDark] = useState(false);
  const [hoveredCloud, setHoveredCloud] = useState<string | null>(null);

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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            }}
          >
            <Cloud size={16} />
            Cloud Infrastructure
          </span>

          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: "24px",
              color: colors.title,
            }}
          >
            Deploy Anywhere.
            <br />
            <span style={{ color: colors.accent }}>Scale Everywhere.</span>
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: colors.subtitle,
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            From AWS to Azure, GCP to DigitalOcean — we deploy your applications on
            any cloud infrastructure with enterprise-grade security and performance.
          </p>
        </div>

        {/* Cloud Providers Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          {clouds.map((cloud) => (
            <div
              key={cloud.name}
              onMouseEnter={() => setHoveredCloud(cloud.name)}
              onMouseLeave={() => setHoveredCloud(null)}
              style={{
                background: colors.cardBg,
                border: `1px solid ${hoveredCloud === cloud.name ? colors.accent + "40" : colors.cardBorder}`,
                borderRadius: "16px",
                padding: "24px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: hoveredCloud === cloud.name ? "0 8px 32px rgba(65, 105, 225, 0.15)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: `${cloud.color}15`,
                    border: `1px solid ${cloud.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                  }}
                >
                  {cloud.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: colors.title,
                      marginBottom: "4px",
                    }}
                  >
                    {cloud.name}
                  </div>
                  <div style={{ fontSize: "12px", color: colors.subtitle }}>
                    {cloud.fullName}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cloud.services.map((service) => (
                  <span
                    key={service}
                    style={{
                      fontSize: "11px",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      background: `${cloud.color}10`,
                      border: `1px solid ${cloud.color}20`,
                      color: cloud.color,
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px",
          }}
        >
          {[
            { icon: Server, title: "Auto-Scaling", desc: "Automatically scale resources based on traffic" },
            { icon: Database, title: "Managed Databases", desc: "Secure, backed-up, and optimized databases" },
            { icon: Shield, title: "Enterprise Security", desc: "SSL certificates, firewalls, and DDoS protection" },
            { icon: Zap, title: "CDN Integration", desc: "Lightning-fast content delivery worldwide" },
            { icon: Globe, title: "Global Deployment", desc: "Deploy across multiple regions for redundancy" },
            { icon: CheckCircle, title: "24/7 Monitoring", desc: "Real-time alerts and proactive support" },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
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
                <feature.icon size={24} color={colors.accent} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: colors.title,
                    marginBottom: "8px",
                  }}
                >
                  {feature.title}
                </div>
                <div style={{ fontSize: "14px", color: colors.subtitle, lineHeight: 1.5 }}>
                  {feature.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            padding: "40px",
            borderRadius: "16px",
            background: isDark ? "rgba(110, 140, 255, 0.05)" : "rgba(65, 105, 225, 0.03)",
            border: `1px solid ${colors.accent}15`,
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: colors.title,
              marginBottom: "16px",
            }}
          >
            Ready to deploy to the cloud?
          </h3>
          <p style={{ fontSize: "16px", color: colors.subtitle, marginBottom: "24px" }}>
            Let's discuss your infrastructure needs and find the perfect cloud solution.
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: colors.accent,
              color: "#fff",
              padding: "16px 32px",
              borderRadius: "8px",
              fontFamily: "Geist, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Get Started
            <span style={{ fontSize: "20px" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
