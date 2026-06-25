"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-fg backdrop-blur-md transition-all duration-300 hover:border-[#4169E1] hover:text-[#4169E1] ${className}`}
    >
      {/* Sun / Moon — only render glyph after mount to avoid hydration mismatch */}
      {mounted && (
        <span className="material-symbols-outlined text-[20px] leading-none">
          {dark ? "light_mode" : "dark_mode"}
        </span>
      )}
    </button>
  );
}
