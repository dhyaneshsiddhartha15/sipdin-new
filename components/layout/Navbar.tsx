"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Process", href: "/process" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Intelligence", href: "/intelligence" },
    { name: "Studio", href: "/studio" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[80px] h-24 bg-[#111415]/60 backdrop-blur-xl border-b border-[#e2e2e4]/10 transition-all duration-500 ease-out ${
        isScrolled ? "h-20 bg-[#111415]/90" : ""
      }`}
    >
      {/* Logo */}
      <a
        href="/"
        className="font-['Hanken_Grotesk'] text-2xl font-medium tracking-tight text-[#e2e2e4] hover:text-[#e9c349] transition-colors duration-300"
      >
        SIDPIN
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <a
              key={link.name}
              href={link.href}
              className={`font-['Geist'] text-xs font-medium tracking-[0.2em uppercase transition-colors duration-300 ${
                isActive
                  ? "text-[#e9c349] font-bold"
                  : "text-[#e2e2e4]/60 hover:text-[#e2e2e4]"
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      {/* CTA Button */}
      <a
        href="/contact"
        className="bg-[#e9c349] text-[#241a00] px-8 py-3 font-['Geist'] text-xs font-medium tracking-widest uppercase hover:opacity-80 transition-opacity duration-300"
      >
        Start a Project
      </a>
    </nav>
  );
}
