"use client";

/**
 * AiFloatingEcosystem — Full-width floating AI technology tiles
 * Spreads across the entire page creating an intelligent AI ecosystem feel
 */

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// AI Technologies with icons and subtle colors
const AI_TECHNOLOGIES = [
  { name: "OpenAI", icon: "🤖", color: "rgba(93,124,255,0.12)" },
  { name: "Claude", icon: "🧠", color: "rgba(143,181,255,0.12)" },
  { name: "Gemini", icon: "💎", color: "rgba(150,130,255,0.10)" },
  { name: "LangChain", icon: "⛓️", color: "rgba(100,150,255,0.10)" },
  { name: "PyTorch", icon: "🔥", color: "rgba(255,120,100,0.08)" },
  { name: "TensorFlow", icon: "🎯", color: "rgba(255,150,80,0.08)" },
  { name: "Hugging Face", icon: "🤗", color: "rgba(255,180,120,0.08)" },
  { name: "GitHub Copilot", icon: "✨", color: "rgba(120,200,255,0.08)" },
  { name: "Python", icon: "🐍", color: "rgba(100,180,120,0.08)" },
  { name: "JavaScript", icon: "⚡", color: "rgba(255,200,80,0.08)" },
  { name: "TypeScript", icon: "📘", color: "rgba(100,150,200,0.08)" },
  { name: "RAG", icon: "📚", color: "rgba(130,180,255,0.08)" },
  { name: "AI Agents", icon: "🤖", color: "rgba(140,160,255,0.08)" },
  { name: "Vercel", icon: "▲", color: "rgba(255,255,255,0.08)" },
  { name: "APIs", icon: "🔌", color: "rgba(120,180,255,0.06)" },
  { name: "Vector DB", icon: "🗄️", color: "rgba(100,160,200,0.06)" },
  { name: "Machine Learning", icon: "🎓", color: "rgba(130,200,180,0.06)" },
];

// Responsive tile configurations
const TILE_CONFIGS = {
  desktop: [
    // Hero area - top section
    { x: 8, y: 12, size: 44, tech: 0 },
    { x: 15, y: 18, size: 36, tech: 1 },
    { x: 22, y: 8, size: 40, tech: -1 }, // empty
    { x: 28, y: 25, size: 32, tech: 2 },
    { x: 35, y: 15, size: 38, tech: 3 },
    { x: 42, y: 22, size: 42, tech: -1 }, // empty
    { x: 48, y: 10, size: 36, tech: 4 },
    { x: 55, y: 28, size: 40, tech: 5 },
    { x: 62, y: 18, size: 44, tech: 6 },
    { x: 70, y: 32, size: 38, tech: 7 },
    { x: 78, y: 14, size: 42, tech: -1 }, // empty
    { x: 85, y: 24, size: 36, tech: 8 },
    { x: 92, y: 8, size: 40, tech: 9 },

    // Mid section - scattered
    { x: 5, y: 45, size: 38, tech: -1 }, // empty
    { x: 12, y: 52, size: 42, tech: 10 },
    { x: 20, y: 42, size: 36, tech: 11 },
    { x: 30, y: 55, size: 40, tech: 12 },
    { x: 38, y: 48, size: 44, tech: -1 }, // empty
    { x: 45, y: 58, size: 38, tech: 13 },
    { x: 52, y: 44, size: 42, tech: 14 },
    { x: 60, y: 52, size: 36, tech: 15 },
    { x: 68, y: 46, size: 40, tech: -1 }, // empty
    { x: 75, y: 55, size: 38, tech: 16 },
    { x: 82, y: 48, size: 44, tech: -1 }, // empty
    { x: 88, y: 58, size: 36, tech: -1 }, // empty

    // Bottom section - fewer tiles
    { x: 10, y: 75, size: 40, tech: -1 }, // empty
    { x: 25, y: 82, size: 38, tech: -1 }, // empty
    { x: 40, y: 78, size: 42, tech: -1 }, // empty
    { x: 55, y: 85, size: 36, tech: -1 }, // empty
    { x: 70, y: 80, size: 40, tech: -1 }, // empty
    { x: 85, y: 75, size: 38, tech: -1 }, // empty
  ],
  tablet: [
    // More compact layout for tablet
    { x: 8, y: 15, size: 40, tech: 0 },
    { x: 25, y: 12, size: 36, tech: 1 },
    { x: 45, y: 18, size: 42, tech: -1 }, // empty
    { x: 65, y: 14, size: 38, tech: 2 },
    { x: 85, y: 20, size: 40, tech: 3 },

    { x: 5, y: 45, size: 38, tech: 4 },
    { x: 22, y: 48, size: 44, tech: 5 },
    { x: 40, y: 42, size: 36, tech: 6 },
    { x: 58, y: 50, size: 40, tech: 7 },
    { x: 75, y: 46, size: 42, tech: 8 },
    { x: 90, y: 52, size: 38, tech: -1 }, // empty

    { x: 12, y: 78, size: 40, tech: -1 }, // empty
    { x: 35, y: 82, size: 38, tech: 9 },
    { x: 55, y: 76, size: 44, tech: -1 }, // empty
    { x: 75, y: 80, size: 36, tech: -1 }, // empty
  ],
  mobile: [
    // Minimal layout for mobile
    { x: 15, y: 20, size: 36, tech: 0 },
    { x: 70, y: 25, size: 40, tech: 1 },
    { x: 10, y: 55, size: 38, tech: 2 },
    { x: 60, y: 50, size: 42, tech: -1 }, // empty
    { x: 80, y: 58, size: 36, tech: 3 },
    { x: 25, y: 82, size: 40, tech: -1 }, // empty
  ],
};

function FloatingTile({
  tile,
  index,
  isVisible
}: {
  tile: { x: number; y: number; size: number; tech: number };
  index: number;
  isVisible: boolean;
}) {
  const isEmpty = tile.tech === -1;
  const techData = !isEmpty ? AI_TECHNOLOGIES[tile.tech] : null;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isEmpty) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePos({ x: x * 3, y: y * 3 });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${tile.x}%`,
        top: `${tile.y}%`,
        width: `${tile.size}px`,
        height: `${tile.size}px`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: [0, Math.sin(index * 0.4) * 6, 0],
        x: [0, Math.cos(index * 0.3) * 3, 0],
      }}
      transition={{
        duration: 8 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.05,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tile container */}
      <motion.div
        className="relative w-full h-full"
        animate={
          isEmpty
            ? {}
            : {
                y: mousePos.y,
                x: mousePos.x,
              }
        }
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        whileHover={
          isEmpty
            ? {}
            : {
                scale: 1.08,
                boxShadow: "0 8px 24px rgba(93,124,255,0.15)",
              }
        }
      >
        {/* Tile background */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: isEmpty
              ? "rgba(255,255,255,0.02)"
              : (techData?.color || "rgba(255,255,255,0.04)"),
            border: isEmpty
              ? "1px solid rgba(255,255,255,0.04)"
              : "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
          }}
        />

        {/* Subtle inner glow for non-empty tiles */}
        {!isEmpty && (
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), transparent 60%)",
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Tech icon/content */}
        {!isEmpty && techData && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className="text-2xl opacity-80"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
              }}
            >
              {techData.icon}
            </span>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Connection lines between related tiles
function ConnectionLines() {
  const lines = [
    { x1: 12, y1: 24, x2: 18, y2: 30 },
    { x1: 35, y1: 25, x2: 42, y2: 32 },
    { x1: 55, y1: 40, x2: 62, y2: 48 },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(93,124,255,0)" />
          <stop offset="50%" stopColor="rgba(93,124,255,0.06)" />
          <stop offset="100%" stopColor="rgba(93,124,255,0)" />
        </linearGradient>
      </defs>
      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1={`${line.x1}%`}
          y1={`${line.y1}%`}
          x2={`${line.x2}%`}
          y2={`${line.y2}%`}
          stroke="url(#connectionGrad)"
          strokeWidth="1"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

// Subtle grid pattern
function GridPattern() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  );
}

export default function AiFloatingEcosystem() {
  const [mounted, setMounted] = useState(false);
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setViewport("mobile");
      else if (width < 1024) setViewport("tablet");
      else setViewport("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  const tiles = TILE_CONFIGS[viewport];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Subtle grid pattern */}
      <GridPattern />

      {/* Connection lines */}
      <ConnectionLines />

      {/* Floating tiles */}
      {tiles.map((tile, index) => (
        <FloatingTile
          key={`${viewport}-${index}`}
          tile={tile}
          index={index}
          isVisible={true}
        />
      ))}

      {/* Subtle ambient glow */}
      <motion.div
        className="absolute blur-[100px]"
        style={{
          left: "20%",
          top: "20%",
          width: "30%",
          height: "30%",
          background: "radial-gradient(ellipse, rgba(93,124,255,0.05), transparent 70%)",
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute blur-[100px]"
        style={{
          right: "15%",
          bottom: "25%",
          width: "25%",
          height: "25%",
          background: "radial-gradient(ellipse, rgba(143,181,255,0.04), transparent 70%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}