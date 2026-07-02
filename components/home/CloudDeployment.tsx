"use client";

import { useState, useEffect } from "react";
import { Cloud, Server, Database, Shield, Zap, Globe, CheckCircle } from "lucide-react";

// Official brand logo paths (Simple Icons, 24x24 viewBox)
const brandPaths = {
  aws: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z",
  azure: "M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684",
  gcloud: "M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z",
  digitalocean: "M12.04 0C5.408-.02.005 5.37.005 11.992h4.638c0-4.923 4.882-8.731 10.064-6.855a6.95 6.95 0 014.147 4.148c1.889 5.177-1.924 10.055-6.84 10.064v-4.61H7.391v4.623h4.61V24c7.86 0 13.967-7.588 11.397-15.83-1.115-3.59-3.985-6.446-7.575-7.575A12.8 12.8 0 0012.039 0zM7.39 19.362H3.828v3.564H7.39zm-3.563 0v-2.978H.85v2.978z",
};

const BrandIcon = ({ path, color, size = 28 }: { path: string; color: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d={path} />
  </svg>
);

const clouds = [
  {
    name: "AWS",
    fullName: "Amazon Web Services",
    iconPath: brandPaths.aws,
    color: "#FF9900",
    services: ["EC2", "S3", "RDS", "Lambda", "CloudFront"],
  },
  {
    name: "Azure",
    fullName: "Microsoft Azure",
    iconPath: brandPaths.azure,
    color: "#0078D4",
    services: ["App Service", "Blob Storage", "SQL Database", "Functions"],
  },
  {
    name: "Google Cloud",
    fullName: "Google Cloud Platform",
    iconPath: brandPaths.gcloud,
    color: "#4285F4",
    services: ["Compute Engine", "Cloud Storage", "Firestore", "Cloud Run"],
  },
  {
    name: "DigitalOcean",
    fullName: "DigitalOcean",
    iconPath: brandPaths.digitalocean,
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
                  }}
                >
                  <BrandIcon path={cloud.iconPath} color={cloud.color} />
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
