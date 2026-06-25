"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Studio", href: "/studio" },
    { name: "Intelligence", href: "/intelligence" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-line bg-surface/80 backdrop-blur-xl transition-all duration-500 ease-out ${
        isScrolled ? "shadow-[0_8px_30px_-12px_rgba(65,105,225,0.25)]" : ""
      }`}
    >
      {/* faint tech grid */}
      <div className="ai-grid-bg pointer-events-none absolute inset-0 opacity-60" />

      <div
        className={`relative mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-[80px] transition-all duration-500 ${
          isScrolled ? "h-[72px]" : "h-24"
        }`}
      >
        {/* Logo lockup */}
        <a href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/70 font-['Hanken_Grotesk'] text-lg font-bold text-[#4169E1] shadow-sm transition-transform duration-300 group-hover:scale-105">
            S
          </span>
          <span className="leading-none">
            <span className="font-['Hanken_Grotesk'] text-2xl font-bold tracking-tight">
              <span className="text-fg">SID</span>
              <span className="gradient-text">PIN</span>
            </span>
            <span className="mt-1 block font-['Geist'] text-[9px] font-medium uppercase tracking-[0.28em] text-fg-3">
              Cinematic Growth Systems
            </span>
          </span>
        </a>

        {/* Numbered nav links */}
        <div className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-1.5 py-2 font-['Geist'] text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300"
              >
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? "text-[#4169E1]" : "text-fg-3"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={
                    isActive
                      ? "font-semibold text-fg"
                      : "text-fg-2 transition-colors group-hover:text-fg"
                  }
                >
                  {link.name}
                </span>
                {/* active / hover underline */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#4169E1] to-[#8FB0FF] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full px-6 py-3 font-['Geist'] text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_-8px_rgba(65,105,225,0.6)] transition-all duration-300 hover:shadow-[0_12px_30px_-8px_rgba(65,105,225,0.8)] sm:flex animate-gradient"
            style={{
              backgroundImage:
                "linear-gradient(120deg,#2E4FB8 0%,#4169E1 45%,#6E8CFF 100%)",
            }}
          >
            <span>Start a Project</span>
            <span className="font-mono transition-transform duration-300 group-hover:translate-x-1">
              {">_"}
            </span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-fg backdrop-blur-md xl:hidden"
          >
            <span className="material-symbols-outlined text-[22px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="relative border-t border-line bg-surface/95 px-6 py-6 backdrop-blur-xl xl:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 font-['Geist'] text-sm font-medium uppercase tracking-[0.15em] transition-colors ${
                    isActive ? "bg-[#4169E1]/10 text-[#4169E1]" : "text-fg-2 hover:bg-surface-2"
                  }`}
                >
                  <span className="font-mono text-[10px] text-fg-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.name}
                </a>
              );
            })}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full px-6 py-3 font-['Geist'] text-xs font-semibold uppercase tracking-[0.18em] text-white"
              style={{ backgroundImage: "linear-gradient(120deg,#2E4FB8,#4169E1,#6E8CFF)" }}
            >
              Start a Project <span className="font-mono">{">_"}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
