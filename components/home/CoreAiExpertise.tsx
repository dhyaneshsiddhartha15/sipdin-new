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

export default function CoreAiExpertise() {
  const [isDark, setIsDark] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

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
        nodeText: "#eef2fb",
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
        nodeText: "#111111",
        nodeBorder: "#e2e8f0",
        bubbleBot: "#ffffff",
        bubbleBotText: "#333333",
        connector: "rgba(65, 105, 225, 0.4)",
        accent: "#4169E1",
        notionFill: "#000000",
      };

  // Dotted board — different texture from typical square-grid mockups
  const dotBoard: React.CSSProperties = {
    backgroundColor: c.illusBg,
    backgroundImage: `radial-gradient(${c.dot} 1.5px, transparent 1.5px)`,
    backgroundSize: "26px 26px",
    borderTop: `1px solid ${c.cardBorder}`,
  };

  const nodeShadow = isDark
    ? "0 10px 28px rgba(0, 0, 0, 0.45)"
    : "0 10px 28px rgba(65, 105, 225, 0.14)";

  // Circular icon chips instead of square tiles
  const iconChip = (bg?: string): React.CSSProperties => ({
    width: "50px",
    height: "50px",
    borderRadius: "9999px",
    background: bg ?? c.node,
    border: bg ? "none" : `1px solid ${c.nodeBorder}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: nodeShadow,
  });

  const cards = [
    {
      key: "rag",
      title: "Retrieval-Augmented Generation",
      description:
        "We engineer high-fidelity RAG systems that make your LLMs accurate, citeable, and hallucination-free.",
      illustration: (
        <div
          style={{
            ...dotBoard,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "14px",
            padding: "26px",
          }}
        >
          {/* User bubble — accent gradient, distinct look */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                background: "linear-gradient(120deg,#2E4FB8,#4169E1)",
                borderRadius: "16px 16px 4px 16px",
                padding: "10px 16px",
                boxShadow: nodeShadow,
              }}
            >
              <span style={{ fontSize: "13px", color: "#ffffff" }}>
                Hi, what do you do?
              </span>
            </div>
          </div>

          {/* Bot bubble */}
          <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}>
            <span
              style={{
                width: "30px",
                height: "30px",
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
              <Bot size={16} />
            </span>
            <div
              style={{
                background: c.bubbleBot,
                border: `1px solid ${c.nodeBorder}`,
                borderRadius: "4px 16px 16px 16px",
                padding: "10px 16px",
                maxWidth: "82%",
                boxShadow: nodeShadow,
              }}
            >
              <span style={{ fontSize: "13px", color: c.bubbleBotText, lineHeight: 1.5 }}>
                Hi there! We build custom AI solutions like chatbots, AI agents
                and automation.
              </span>
            </div>
          </div>

          {/* User bubble */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                background: "linear-gradient(120deg,#2E4FB8,#4169E1)",
                borderRadius: "16px 16px 4px 16px",
                padding: "10px 16px",
                boxShadow: nodeShadow,
              }}
            >
              <span style={{ fontSize: "13px", color: "#ffffff" }}>
                I want a chatbot for my store
              </span>
            </div>
          </div>

          {/* Typing indicator */}
          <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}>
            <span style={{ width: "30px", flexShrink: 0 }} />
            <div
              style={{
                background: c.bubbleBot,
                border: `1px solid ${c.nodeBorder}`,
                borderRadius: "4px 16px 16px 16px",
                padding: "12px 16px",
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    background: c.accent,
                    opacity: 0.4 + i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "etl",
      title: "Data Pipelines & ETL Automation",
      description:
        "We design high-performance data pipelines to clean, structure, and feed your AI models efficiently.",
      illustration: (
        <div
          style={{
            ...dotBoard,
            position: "relative",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Orbit rings */}
          <div
            style={{
              position: "absolute",
              width: "230px",
              height: "230px",
              borderRadius: "9999px",
              border: `1.5px dashed ${c.connector}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "130px",
              height: "130px",
              borderRadius: "9999px",
              border: `1px solid ${c.nodeBorder}`,
              opacity: 0.7,
            }}
          />

          {/* Center AI core */}
          <div
            style={{
              width: "62px",
              height: "62px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg,#2E4FB8,#6E8CFF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 32px rgba(65, 105, 225, 0.4)",
              zIndex: 1,
            }}
          >
            <Sparkles size={26} color="#ffffff" fill="#ffffff" />
          </div>

          {/* Orbiting integrations */}
          <div style={{ ...iconChip(brand.whatsapp.hex), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(0, -115px)" }}>
            <BrandGlyph icon={brand.whatsapp} color="#ffffff" />
          </div>
          <div style={{ ...iconChip(brand.shopify.hex), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(109px, -36px)" }}>
            <BrandGlyph icon={brand.shopify} color="#ffffff" />
          </div>
          <div style={{ ...iconChip(), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(68px, 93px)" }}>
            <BrandGlyph icon={brand.googlemeet} />
          </div>
          <div style={{ ...iconChip(), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(-68px, 93px)" }}>
            <BrandGlyph icon={{ ...brand.notion, hex: c.notionFill }} />
          </div>
          <div style={{ ...iconChip(), position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translate(-109px, -36px)" }}>
            <BrandGlyph icon={brand.clickup} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      style={{
        background: c.bg,
        fontFamily: "Hanken Grotesk, sans-serif",
        padding: "56px 24px 40px",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {/* Unified header for the combined AI + Cloud section */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            We build intelligent systems — and run the enterprise-grade cloud
            they live on. One team for both, end to end.
          </p>
        </div>

        {/* 01 — AI expertise */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            maxWidth: "960px",
            margin: "0 auto 28px",
          }}
        >
          <span
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: c.accent,
              whiteSpace: "nowrap",
            }}
          >
            01 · Core AI Expertise
          </span>
          <span style={{ flex: 1, height: "1px", background: c.cardBorder }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "28px",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.key}
              onMouseEnter={() => setHovered(card.key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: c.cardBg,
                border: `1px solid ${hovered === card.key ? c.accent + "50" : c.cardBorder}`,
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transform: hovered === card.key ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hovered === card.key
                    ? "0 20px 48px rgba(65, 105, 225, 0.18)"
                    : "none",
                transition: "all 0.35s ease",
              }}
            >
              {/* Text first — flipped order from typical layouts */}
              <div style={{ padding: "28px 28px 24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: c.title,
                    marginBottom: "10px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: c.subtitle,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
              </div>
              <div style={{ height: "320px" }}>{card.illustration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
