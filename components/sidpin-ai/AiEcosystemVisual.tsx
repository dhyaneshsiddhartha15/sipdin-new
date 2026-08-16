"use client";

/**
 * AiEcosystemVisual — Floating hexagonal AI ecosystem
 * Positioned on right side of hero, shows 6-9 key AI technologies
 * with subtle animations and professional styling.
 */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// AI technologies to display (6-9 important ones)
const AI_TECHNOLOGIES = [
  { name: "OpenAI", icon: "🤖", color: "rgba(93,124,255,0.15)" },
  { name: "Claude", icon: "🧠", color: "rgba(143,181,255,0.15)" },
  { name: "Gemini", icon: "💎", color: "rgba(150,130,255,0.15)" },
  { name: "LangChain", icon: "⛓️", color: "rgba(100,150,255,0.15)" },
  { name: "PyTorch", icon: "🔥", color: "rgba(255,120,100,0.12)" },
  { name: "Hugging Face", icon: "🤗", color: "rgba(255,180,120,0.12)" },
  { name: "GitHub Copilot", icon: "✨", color: "rgba(120,200,255,0.12)" },
  { name: "RAG", icon: "📚", color: "rgba(130,180,255,0.12)" },
];

// Hexagonal grid positions (relative percentages)
const HEX_POSITIONS = [
  { x: 75, y: 25, tech: 0, scale: 1 },
  { x: 82, y: 35, tech: 1, scale: 0.9 },
  { x: 78, y: 45, tech: 2, scale: 0.85 },
  { x: 88, y: 40, tech: -1, scale: 0.75 }, // empty
  { x: 85, y: 55, tech: 3, scale: 0.8 },
  { x: 92, y: 50, tech: -1, scale: 0.7 }, // empty
  { x: 80, y: 60, tech: 4, scale: 0.9 },
  { x: 88, y: 65, tech: 5, scale: 0.85 },
  { x: 95, y: 58, tech: -1, scale: 0.65 }, // empty
  { x: 82, y: 70, tech: 6, scale: 0.8 },
  { x: 90, y: 75, tech: 7, scale: 0.75 },
  { x: 86, y: 80, tech: -1, scale: 0.6 }, // empty
];

function Hexagon({
  x,
  y,
  scale,
  tech,
  index
}: {
  x: number;
  y: number;
  scale: number;
  tech: number;
  index: number;
}) {
  const isEmpty = tech === -1;
  const techData = !isEmpty ? AI_TECHNOLOGIES[tech] : null;

  // Subtle floating animation
  const floatY = Math.sin(index * 0.5) * 8;
  const floatX = Math.cos(index * 0.3) * 4;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        scale,
      }}
      animate={{
        y: [0, floatY, 0],
        x: [0, floatX, 0],
      }}
      transition={{
        duration: 6 + index * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Hexagon shape */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          width: "60px",
          height: "70px",
        }}
        animate={isEmpty ? {} : {
          boxShadow: [
            "0 0 20px rgba(93,124,255,0.1)",
            "0 0 30px rgba(93,124,255,0.2)",
            "0 0 20px rgba(93,124,255,0.1)",
          ],
        }}
        transition={{
          duration: 3 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="60"
          height="70"
          viewBox="0 0 60 70"
          className="absolute inset-0"
        >
          <path
            d="M30 2 L55 17 L55 53 L30 68 L5 53 L5 17 Z"
            fill={isEmpty ? "rgba(255,255,255,0.03)" : (techData?.color || "rgba(255,255,255,0.05)")}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        </svg>

        {/* Tech content */}
        {!isEmpty && techData && (
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center gap-1"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-[18px] leading-none">{techData.icon}</span>
            <span
              className="text-[8px] font-medium leading-tight text-white/60"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "7px",
                letterSpacing: "0.02em",
              }}
            >
              {techData.name}
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Connecting lines for adjacent hexagons */}
      {!isEmpty && index > 0 && index % 3 === 0 && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(93,124,255,0.1), transparent)",
            width: "100%",
            height: "1px",
            top: "50%",
            left: "-30%",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}

// Subtle particle system
function Particles() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 70 + Math.random() * 25,
    y: 20 + Math.random() * 60,
    size: 1 + Math.random() * 2,
    delay: Math.random() * 3,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 4 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </>
  );
}

export default function AiEcosystemVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle glow background */}
      <motion.div
        className="absolute blur-[80px]"
        style={{
          right: "5%",
          top: "30%",
          width: "35%",
          height: "40%",
          background: "radial-gradient(ellipse, rgba(93,124,255,0.08), transparent 70%)",
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hexagonal grid */}
      <div className="absolute inset-0">
        {HEX_POSITIONS.map((pos, index) => (
          <Hexagon
            key={index}
            x={pos.x}
            y={pos.y}
            scale={pos.scale}
            tech={pos.tech}
            index={index}
          />
        ))}
      </div>

      {/* Subtle particles */}
      <Particles />

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(93,124,255,0)" />
            <stop offset="50%" stopColor="rgba(93,124,255,0.08)" />
            <stop offset="100%" stopColor="rgba(93,124,255,0)" />
          </linearGradient>
        </defs>

        {/* Animated connecting line */}
        <motion.line
          x1="75%" y1="30%"
          x2="85%" y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}