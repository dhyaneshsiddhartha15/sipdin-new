"use client";

/**
 * AiEcosystemBackground — Lightweight background ecosystem for individual sections
 * Adds subtle floating AI tiles to any section without overwhelming the content
 */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Minimal tech subset for section backgrounds
const SECTION_TECH = [
  "🤖", "🧠", "💎", "⛓️", "🔥", "📚", "✨", "🔌"
];

interface FloatingTileProps {
  x: number;
  y: number;
  size: number;
  icon: string;
  delay: number;
  duration: number;
}

function FloatingTile({ x, y, size, icon, delay, duration }: FloatingTileProps) {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{
        y: [0, Math.sin(delay) * 4, 0],
        x: [0, Math.cos(delay) * 2, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div
        className="absolute inset-0 rounded-lg flex items-center justify-center"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.04)",
          backdropFilter: "blur(4px)",
        }}
      >
        <span className="text-lg opacity-40">{icon}</span>
      </div>
    </motion.div>
  );
}

export default function AiEcosystemBackground({
  density = "light"
}: {
  density?: "light" | "medium" | "heavy"
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Tile configurations based on density
  const tiles: FloatingTileProps[] = density === "light" ? [
    { x: 8, y: 15, size: 28, icon: SECTION_TECH[0], delay: 0.5, duration: 7 },
    { x: 85, y: 20, size: 32, icon: SECTION_TECH[1], delay: 1.2, duration: 8 },
    { x: 12, y: 70, size: 30, icon: SECTION_TECH[2], delay: 0.8, duration: 6 },
    { x: 80, y: 75, size: 28, icon: SECTION_TECH[3], delay: 1.5, duration: 9 },
  ] : density === "medium" ? [
    { x: 6, y: 12, size: 30, icon: SECTION_TECH[0], delay: 0.4, duration: 7 },
    { x: 88, y: 18, size: 32, icon: SECTION_TECH[1], delay: 1.1, duration: 8 },
    { x: 10, y: 65, size: 28, icon: SECTION_TECH[2], delay: 0.7, duration: 6 },
    { x: 82, y: 72, size: 34, icon: SECTION_TECH[3], delay: 1.3, duration: 9 },
    { x: 25, y: 85, size: 30, icon: SECTION_TECH[4], delay: 0.9, duration: 7.5 },
    { x: 70, y: 88, size: 28, icon: SECTION_TECH[5], delay: 1.6, duration: 8.5 },
  ] : [
    // Heavy density
    { x: 5, y: 10, size: 28, icon: SECTION_TECH[0], delay: 0.3, duration: 7 },
    { x: 90, y: 15, size: 32, icon: SECTION_TECH[1], delay: 1.0, duration: 8 },
    { x: 8, y: 68, size: 30, icon: SECTION_TECH[2], delay: 0.6, duration: 6 },
    { x: 85, y: 70, size: 34, icon: SECTION_TECH[3], delay: 1.2, duration: 9 },
    { x: 20, y: 82, size: 28, icon: SECTION_TECH[4], delay: 0.8, duration: 7.5 },
    { x: 75, y: 85, size: 30, icon: SECTION_TECH[5], delay: 1.4, duration: 8.5 },
    { x: 50, y: 12, size: 32, icon: SECTION_TECH[6], delay: 1.1, duration: 8.2 },
    { x: 48, y: 88, size: 28, icon: SECTION_TECH[7], delay: 0.5, duration: 7.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {tiles.map((tile, index) => (
        <FloatingTile key={index} {...tile} />
      ))}

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}