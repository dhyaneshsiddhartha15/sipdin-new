"use client";

import { useState, useEffect } from "react";
import { Sparkles, Bot } from "lucide-react";

// Official brand logo paths (Simple Icons, 24x24 viewBox)
const brand = {
  whatsapp: {
    hex: "#25D366",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  },
  shopify: {
    hex: "#7AB55C",
    path: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z",
  },
  googlemeet: {
    hex: "#00897B",
    path: "M5.53 2.13 0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.12-7.468 6.19 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z",
  },
  notion: {
    hex: "#000000",
    path: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z",
  },
  clickup: {
    hex: "#7B68EE",
    path: "M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z",
  },
  aws: {
    hex: "#FF9900",
    path: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z",
  },
  azure: {
    hex: "#0078D4",
    path: "M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684",
  },
  gcloud: {
    hex: "#4285F4",
    path: "M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z",
  },
  digitalocean: {
    hex: "#0069FF",
    path: "M12.04 0C5.408-.02.005 5.37.005 11.992h4.638c0-4.923 4.882-8.731 10.064-6.855a6.95 6.95 0 014.147 4.148c1.889 5.177-1.924 10.055-6.84 10.064v-4.61H7.391v4.623h4.61V24c7.86 0 13.967-7.588 11.397-15.83-1.115-3.59-3.985-6.446-7.575-7.575A12.8 12.8 0 0012.039 0zM7.39 19.362H3.828v3.564H7.39zm-3.563 0v-2.978H.85v2.978z",
  },
};

const BrandGlyph = ({
  icon,
  size = 20,
  color,
}: {
  icon: { hex: string; path: string };
  size?: number;
  color?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color ?? icon.hex} aria-hidden="true">
    <path d={icon.path} />
  </svg>
);

const clouds = [
  {
    name: "AWS",
    fullName: "Amazon Web Services",
    icon: brand.aws,
    services: ["EC2", "S3", "RDS", "Lambda", "CloudFront"],
  },
  {
    name: "Azure",
    fullName: "Microsoft Azure",
    icon: brand.azure,
    services: ["App Service", "Blob Storage", "SQL Database", "Functions"],
  },
  {
    name: "Google Cloud",
    fullName: "Google Cloud Platform",
    icon: brand.gcloud,
    services: ["Compute Engine", "Cloud Storage", "Firestore", "Cloud Run"],
  },
  {
    name: "DigitalOcean",
    fullName: "DigitalOcean",
    icon: brand.digitalocean,
    services: ["Droplets", "Spaces", "Managed Databases", "Kubernetes"],
  },
];

export default function AiCloudSection() {
  const [isDark, setIsDark] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [aiActive, setAiActive] = useState(0);
  const [deckHover, setDeckHover] = useState(false);

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

  // Auto-flip the AI card deck every 3.5s (paused while hovered)
  useEffect(() => {
    if (deckHover) return;
    const id = setInterval(() => setAiActive((a) => (a + 1) % 2), 3500);
    return () => clearInterval(id);
  }, [deckHover]);

  const c = isDark
    ? {
        bg: "#070b14",
        title: "#eef2fb",
        subtitle: "#aab4c9",
        cardBg: "rgba(15, 22, 38, 0.6)",
        cardBorder: "rgba(110, 140, 255, 0.15)",
        illusBg: "rgba(10, 16, 30, 0.8)",
        dot: "rgba(110, 140, 255, 0.16)",
        node: "#131c30",
        nodeBorder: "rgba(110, 140, 255, 0.2)",
        bubbleBot: "#131c30",
        bubbleBotText: "#dbe3f5",
        connector: "rgba(110, 140, 255, 0.45)",
        accent: "#6E8CFF",
        notionFill: "#eef2fb",
      }
    : {
        bg: "#ffffff",
        title: "#111111",
        subtitle: "#666666",
        cardBg: "#ffffff",
        cardBorder: "#e2e8f0",
        illusBg: "#f7f9ff",
        dot: "rgba(65, 105, 225, 0.18)",
        node: "#ffffff",
        nodeBorder: "#e2e8f0",
        bubbleBot: "#ffffff",
        bubbleBotText: "#333333",
        connector: "rgba(65, 105, 225, 0.4)",
        accent: "#4169E1",
        notionFill: "#000000",
      };

  const dotBoard: React.CSSProperties = {
    backgroundColor: c.illusBg,
    backgroundImage: `radial-gradient(${c.dot} 1.5px, transparent 1.5px)`,
    backgroundSize: "26px 26px",
    borderTop: `1px solid ${c.cardBorder}`,
  };

  const nodeShadow = isDark
    ? "0 10px 28px rgba(0, 0, 0, 0.45)"
    : "0 10px 28px rgba(65, 105, 225, 0.14)";

  const iconChip = (bg?: string): React.CSSProperties => ({
    width: "44px",
    height: "44px",
    borderRadius: "9999px",
    background: bg ?? c.node,
    border: bg ? "none" : `1px solid ${c.nodeBorder}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: nodeShadow,
  });

  const card = (key: string): React.CSSProperties => ({
    background: c.cardBg,
    border: `1px solid ${hovered === key ? c.accent + "50" : c.cardBorder}`,
    borderRadius: "20px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transform: hovered === key ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hovered === key ? "0 20px 48px rgba(65, 105, 225, 0.15)" : "none",
    transition: "all 0.35s ease",
  });

  // Overlapping deck: active card in front, the other peeking behind
  const deck = (i: number): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    zIndex: aiActive === i ? 2 : 1,
    transform:
      aiActive === i
        ? "translate(0, 0) scale(1)"
        : "translate(18px, -18px) scale(0.96)",
    opacity: aiActive === i ? 1 : 0.55,
    cursor: aiActive === i ? "default" : "pointer",
    transition: "all 700ms cubic-bezier(0.22, 1, 0.36, 1)",
  });

  const subLabel = (text: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: "18px", margin: "0 0 24px" }}>
      <span
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: c.accent,
        }}
      >
        {text}
      </span>
      <span style={{ flex: 1, height: "1px", background: c.cardBorder }} />
    </div>
  );

  return (
    <section
      style={{
        background: c.bg,
        fontFamily: "Hanken Grotesk, sans-serif",
        padding: "56px 24px 100px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Unified header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "9999px",
              border: `1px solid ${c.accent}20`,
              background: `${c.accent}05`,
              padding: "8px 20px",
              fontFamily: "Geist, sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: c.accent,
              marginBottom: "24px",
            }}
          >
            <Sparkles size={14} />
            Intelligence + Infrastructure
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 600,
              color: c.title,
              margin: "0 0 20px",
            }}
          >
            AI Solutions & <span style={{ color: c.accent }}>Managed Cloud</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: c.subtitle,
              lineHeight: 1.6,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            We build intelligent systems — and run the enterprise-grade cloud
            they live on. From AWS to Azure, GCP to DigitalOcean, one team
            handles both, end to end.
          </p>
        </div>

        {/* Two columns: 01 AI deck (left) + 02 Cloud (right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
            gap: "48px",
            alignItems: "start",
            marginBottom: "48px",
          }}
        >
          {/* 01 — AI card deck */}
          <div>
            {subLabel("01 · Core AI Expertise")}
            <div
              style={{ position: "relative", height: "480px", marginTop: "16px" }}
              onMouseEnter={() => setDeckHover(true)}
              onMouseLeave={() => setDeckHover(false)}
            >
          {/* RAG / chatbot card */}
          <div style={deck(0)} onClick={() => setAiActive(0)}>
          <div
            style={{ ...card("rag"), height: "100%", background: isDark ? "#0E1627" : "#ffffff" }}
            onMouseEnter={() => setHovered("rag")}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ padding: "26px 26px 20px" }}>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: c.title, marginBottom: "8px" }}>
                Retrieval-Augmented Generation
              </h3>
              <p style={{ fontSize: "14.5px", color: c.subtitle, lineHeight: 1.6, margin: 0 }}>
                We engineer high-fidelity RAG systems that make your LLMs
                accurate, citeable, and hallucination-free.
              </p>
            </div>
            <div style={{ flex: 1, minHeight: 0, ...dotBoard, display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px", padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ background: "linear-gradient(120deg,#2E4FB8,#4169E1)", borderRadius: "16px 16px 4px 16px", padding: "9px 15px", boxShadow: nodeShadow }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Hi, what do you do?</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}>
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg,#4169E1,#6E8CFF)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: nodeShadow,
                  }}
                >
                  <Bot size={15} />
                </span>
                <div style={{ background: c.bubbleBot, border: `1px solid ${c.nodeBorder}`, borderRadius: "4px 16px 16px 16px", padding: "9px 15px", maxWidth: "82%", boxShadow: nodeShadow }}>
                  <span style={{ fontSize: "13px", color: c.bubbleBotText, lineHeight: 1.5 }}>
                    Hi there! We build custom AI solutions like chatbots, AI
                    agents and automation.
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ background: "linear-gradient(120deg,#2E4FB8,#4169E1)", borderRadius: "16px 16px 4px 16px", padding: "9px 15px", boxShadow: nodeShadow }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>I want a chatbot for my store</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}>
                <span style={{ width: "28px", flexShrink: 0 }} />
                <div style={{ background: c.bubbleBot, border: `1px solid ${c.nodeBorder}`, borderRadius: "4px 16px 16px 16px", padding: "11px 15px", display: "flex", gap: "5px", alignItems: "center" }}>
                  {[0, 1, 2].map((i) => (
                    <span key={i} style={{ width: "6px", height: "6px", borderRadius: "9999px", background: c.accent, opacity: 0.4 + i * 0.3 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* ETL / pipelines card */}
          <div style={deck(1)} onClick={() => setAiActive(1)}>
          <div
            style={{ ...card("etl"), height: "100%", background: isDark ? "#0E1627" : "#ffffff" }}
            onMouseEnter={() => setHovered("etl")}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ padding: "26px 26px 20px" }}>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: c.title, marginBottom: "8px" }}>
                Data Pipelines & ETL Automation
              </h3>
              <p style={{ fontSize: "14.5px", color: c.subtitle, lineHeight: 1.6, margin: 0 }}>
                We design high-performance data pipelines to clean, structure,
                and feed your AI models efficiently.
              </p>
            </div>
            <div style={{ flex: 1, minHeight: 0, ...dotBoard, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", width: "210px", height: "210px", borderRadius: "9999px", border: `1.5px dashed ${c.connector}` }} />
              <div style={{ position: "absolute", width: "120px", height: "120px", borderRadius: "9999px", border: `1px solid ${c.nodeBorder}`, opacity: 0.7 }} />
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg,#2E4FB8,#6E8CFF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 32px rgba(65, 105, 225, 0.4)",
                  zIndex: 1,
                }}
              >
                <Sparkles size={24} color="#ffffff" fill="#ffffff" />
              </div>
              <div style={{ ...iconChip(brand.whatsapp.hex), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(0, -105px)" }}>
                <BrandGlyph icon={brand.whatsapp} color="#ffffff" size={18} />
              </div>
              <div style={{ ...iconChip(brand.shopify.hex), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(100px, -32px)" }}>
                <BrandGlyph icon={brand.shopify} color="#ffffff" size={18} />
              </div>
              <div style={{ ...iconChip(), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(62px, 85px)" }}>
                <BrandGlyph icon={brand.googlemeet} size={18} />
              </div>
              <div style={{ ...iconChip(), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(-62px, 85px)" }}>
                <BrandGlyph icon={{ ...brand.notion, hex: c.notionFill }} size={18} />
              </div>
              <div style={{ ...iconChip(), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(-100px, -32px)" }}>
                <BrandGlyph icon={brand.clickup} size={18} />
              </div>
            </div>
          </div>
          </div>
            </div>

            {/* Deck dots */}
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "20px" }}>
              {[0, 1].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setAiActive(i)}
                  aria-label={i === 0 ? "Show RAG card" : "Show data pipelines card"}
                  style={{
                    width: aiActive === i ? "22px" : "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    background: aiActive === i ? c.accent : c.cardBorder,
                    transition: "all 300ms ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* 02 — Cloud providers (right column) */}
          <div>
            {subLabel("02 · Managed Cloud Infrastructure")}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
                gap: "16px",
                marginTop: "16px",
              }}
            >
          {clouds.map((cloud) => (
            <div
              key={cloud.name}
              onMouseEnter={() => setHovered(cloud.name)}
              onMouseLeave={() => setHovered(null)}
              style={{ ...card(cloud.name), padding: "18px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: `${cloud.icon.hex}15`,
                    border: `1px solid ${cloud.icon.hex}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <BrandGlyph icon={cloud.icon} size={24} />
                </div>
                <div>
                  <div style={{ fontSize: "17px", fontWeight: 600, color: c.title, marginBottom: "2px" }}>
                    {cloud.name}
                  </div>
                  <div style={{ fontSize: "12px", color: c.subtitle }}>{cloud.fullName}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {cloud.services.map((service) => (
                  <span
                    key={service}
                    style={{
                      fontSize: "11px",
                      padding: "4px 11px",
                      borderRadius: "9999px",
                      background: `${cloud.icon.hex}10`,
                      border: `1px solid ${cloud.icon.hex}20`,
                      color: cloud.icon.hex,
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>

        {/* Single CTA for the whole section */}
        <div
          style={{
            textAlign: "center",
            padding: "36px",
            borderRadius: "16px",
            background: isDark ? "rgba(110, 140, 255, 0.05)" : "rgba(65, 105, 225, 0.03)",
            border: `1px solid ${c.accent}15`,
          }}
        >
          <h3 style={{ fontSize: "24px", fontWeight: 600, color: c.title, marginBottom: "12px" }}>
            Ready to build AI on solid cloud foundations?
          </h3>
          <p style={{ fontSize: "16px", color: c.subtitle, marginBottom: "24px" }}>
            Let&apos;s discuss your AI and infrastructure needs and find the
            perfect solution for your business.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: c.accent,
              color: "#fff",
              padding: "15px 32px",
              borderRadius: "8px",
              fontFamily: "Geist, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get Started
            <span style={{ fontSize: "20px" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
