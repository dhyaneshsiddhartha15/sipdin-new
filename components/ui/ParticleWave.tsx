"use client";

import { useEffect, useRef } from "react";

export default function ParticleWave({
  color = "65, 105, 225", // RGB of brand royal-blue (#4169E1)
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cols = 70;
    const rows = 18;
    let width = 0;
    let height = 0;
    let t = 0;
    let raf: number;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const spacingX = width / cols;
      const spacingY = height / rows;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * spacingX;
          // wave formula: combine two sines for organic flow
          const wave =
            Math.sin(x * 0.18 + t) * 18 +
            Math.sin(x * 0.08 - t * 1.3 + y * 0.4) * 14;
          const py = y * spacingY + wave + (height - rows * spacingY) / 2;

          // fade dots near top/bottom for a soft edge
          const edgeFade = 1 - Math.abs(y - rows / 2) / (rows / 2);
          const depth = (Math.sin(x * 0.18 + t) + 1) / 2; // 0..1 brightness variance
          const alpha = Math.max(0.05, edgeFade * (0.3 + depth * 0.7));
          const radius = 1 + depth * 1.8;

          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${alpha})`;
          ctx.shadowColor = `rgba(${color}, ${alpha})`;
          ctx.shadowBlur = 6;
          ctx.fill();
        }
      }

      t += 0.012;
      if (!prefersReduced) raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return <canvas ref={canvasRef} className={`block h-full w-full ${className}`} />;
}
