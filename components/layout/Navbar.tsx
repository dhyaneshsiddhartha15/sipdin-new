"use client";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { serviceCategories } from "@/lib/services";
import { useLocale } from "@/contexts/LocaleContext";

export default function Navbar() {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = useMemo(() => [
    { nameKey: "nav.home", href: "/" },
    { nameKey: "nav.about", href: "/about" },
    { nameKey: "nav.services", href: "/services" },
    { nameKey: "nav.caseStudies", href: "/case-studies" },
    // { nameKey: "nav.products", href: "/our-products" }, // hidden for now
    { nameKey: "nav.pricing", href: "/pricing" },
    { nameKey: "nav.studio", href: "/studio" },
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5 pointer-events-none">
      <style>{`
        @keyframes nav-pop {
          0% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
          70% { transform: translateY(1px); }
          100% { transform: translateY(0); }
        }
        .nav-pill-link:hover { animation: nav-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }
      `}</style>

      <div className="pointer-events-auto relative w-full max-w-[1080px]">
        {/* The pill */}
        <div
          className="flex items-center justify-between gap-4 rounded-full px-2.5 py-2.5 ring-1 ring-[#4169E1]/70 shadow-[0_0_12px_rgba(65,105,225,0.55),0_0_36px_rgba(65,105,225,0.3),0_18px_45px_-18px_rgba(0,0,0,0.55)]"
          style={{
            background: "linear-gradient(120deg, #101A36 0%, #0B1226 100%)",
          }}
        >
          {/* Logo circle — SIDPIN Digital mark */}
          <a
            href="/"
            aria-label="SIDPIN Digital home"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white transition-transform duration-300 hover:rotate-[15deg]"
          >
            <img
              src="/logo-mark.png"
              alt="SIDPIN Digital"
              className="h-7 w-7 object-contain"
            />
          </a>

          {/* Center links */}
          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/services"
                  ? pathname.startsWith("/services")
                  : pathname === link.href;
              const isServices = link.href === "/services";
              return (
                <div
                  key={link.nameKey}
                  className="relative"
                  onMouseEnter={() => isServices && setServicesOpen(true)}
                  onMouseLeave={() => {
                    if (isServices) {
                      setServicesOpen(false);
                      setActiveCategory(null);
                    }
                  }}
                >
                  <a
                    href={link.href}
                    className={`nav-pill-link inline-block py-3 font-['Inter'] text-[15.5px] font-medium transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/75 hover:text-white"
                    }`}
                  >
                    {t(link.nameKey)}
                  </a>

                  {/* Services dropdown */}
                  {isServices && servicesOpen && (
                    <div className="absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-4">
                      <div className="rounded-2xl bg-[#0D1530] py-3 ring-1 ring-[#4169E1]/50 shadow-[0_0_16px_rgba(65,105,225,0.35),0_24px_60px_-16px_rgba(0,0,0,0.7)]">
                        <a
                          href="/services"
                          className="block px-6 py-3 font-['Inter'] text-[14px] font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {t("nav.allServices")}
                        </a>
                        <div className="mx-4 my-1 h-px bg-white/10" />
                        {serviceCategories.map((cat) => (
                          <div
                            key={cat.name}
                            className="relative"
                            onMouseEnter={() => setActiveCategory(cat.name)}
                          >
                            <div
                              className={`flex cursor-default items-center justify-between px-6 py-3 font-['Inter'] text-[14px] font-medium transition-colors ${
                                activeCategory === cat.name
                                  ? "bg-white/10 text-white"
                                  : "text-white/75"
                              }`}
                            >
                              {cat.name}
                              <span className="material-symbols-outlined text-[16px]">
                                chevron_right
                              </span>
                            </div>
                            {activeCategory === cat.name && (
                              <div className="absolute left-full top-0 w-[280px] pl-2">
                                <div className="rounded-2xl bg-[#0D1530] py-3 ring-1 ring-[#4169E1]/50 shadow-[0_0_16px_rgba(65,105,225,0.35),0_24px_60px_-16px_rgba(0,0,0,0.7)]">
                                  {cat.services.map((service) => (
                                    <a
                                      key={service.slug}
                                      href={`/services/${service.slug}`}
                                      className="block px-6 py-3 font-['Inter'] text-[14px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                                    >
                                      {service.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right cluster: theme toggle + language + email pill */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle className="!h-12 !w-12 !border-white/15 !bg-white/10 !text-white hover:!border-white/50 hover:!text-white" />
            <LanguageSwitcher />
            <a
              href="mailto:hello@sidpin.com"
              className="hidden items-center rounded-full bg-white px-6 py-3 font-['Inter'] text-[15px] font-medium text-[#0B1226] shadow-[0_0_10px_rgba(65,105,225,0.35)] transition-transform duration-300 hover:scale-[1.03] sm:flex"
            >
              hello@sidpin.com
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white lg:hidden"
            >
              <span className="material-symbols-outlined text-[22px]">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="mt-3 rounded-3xl bg-[#0D1530] p-6 ring-1 ring-[#4169E1]/50 shadow-[0_0_16px_rgba(65,105,225,0.35),0_24px_60px_-16px_rgba(0,0,0,0.7)] lg:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isServices = link.href === "/services";
                if (isServices) {
                  return (
                    <div key={link.nameKey}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between py-4 font-['Inter'] text-[16px] font-medium text-white/85"
                      >
                        {t("nav.services")}
                        <span
                          className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      {mobileServicesOpen && (
                        <div className="mb-2 rounded-2xl bg-white/5 p-2">
                          <a
                            href="/services"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-xl px-4 py-3 font-['Inter'] text-[14px] text-white/70 hover:bg-white/10"
                          >
                            {t("nav.allServices")}
                          </a>
                          {serviceCategories.flatMap((cat) =>
                            cat.services.map((service) => (
                              <a
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-xl px-4 py-3 font-['Inter'] text-[14px] text-white/70 hover:bg-white/10"
                              >
                                {service.name}
                              </a>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <a
                    key={link.nameKey}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-4 font-['Inter'] text-[16px] font-medium text-white/85 hover:text-white"
                  >
                    {t(link.nameKey)}
                  </a>
                );
              })}
              <a
                href="mailto:hello@sidpin.com"
                className="mt-4 rounded-full bg-white px-6 py-3.5 text-center font-['Inter'] text-[15px] font-medium text-[#0B1226]"
              >
                hello@sidpin.com
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
