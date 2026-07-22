"use client";

/**
 * ReleaseFeed — dark "Our Products" changelog page. Hero + email subscribe,
 * Release Type / Product Area filter dropdowns, a two-column grid of release
 * cards (colour tag, title, summary, Key Benefits, screenshot placeholder),
 * pagination, and a closing CTA. Modelled on a CustomerShip-style release feed.
 */

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import { sendForm } from "@/lib/sendForm";
import {
  RELEASES,
  PRODUCT_AREAS,
  RELEASE_TYPES,
  TYPE_COLORS,
  type Release,
} from "@/lib/products";

const PAGE_SIZE = 6;

function Filter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40" style={{ fontFamily: "Geist, sans-serif" }}>
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-xl border border-white/12 bg-white/[0.04] py-3 pe-10 ps-4 text-[14px] font-medium text-white outline-none transition-colors hover:border-white/25 focus:border-[#7c5cec] focus:ring-2 focus:ring-[#7c5cec]/30"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0d0d16] text-white">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown size={15} className="pointer-events-none absolute end-3.5 top-1/2 -translate-y-1/2 text-white/50" />
      </div>
    </label>
  );
}

function ReleaseCard({ r }: { r: Release }) {
  const tag = TYPE_COLORS[r.type];
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20">
      {/* Screenshot placeholder */}
      <div
        className="relative h-44 w-full overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${r.gradient[0]}, ${r.gradient[1]})` }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "radial-gradient(600px 200px at 30% -20%, rgba(255,255,255,0.6), transparent)" }} />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-md bg-black/25 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur" style={{ fontFamily: "Geist, sans-serif" }}>
            {r.product}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="h-2 w-24 rounded-full bg-white/40" />
          <div className="mt-2 h-2 w-16 rounded-full bg-white/25" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide" style={{ background: tag.bg, color: tag.text, fontFamily: "Geist, sans-serif" }}>
            {r.type}
          </span>
          <span className="text-[12px] text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
            {r.date}
          </span>
        </div>

        <h3 className="mt-4 text-[20px] font-bold leading-snug text-white" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          {r.title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
          {r.summary}
        </p>

        <div className="mt-5">
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40" style={{ fontFamily: "Geist, sans-serif" }}>
            Key benefits
          </p>
          <ul className="space-y-2">
            {r.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-white/75" style={{ fontFamily: "Inter, sans-serif" }}>
                <Check size={15} className="mt-[2px] shrink-0 text-emerald-400" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white/80 transition-colors hover:text-white"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Learn more
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export default function ReleaseFeed() {
  const [type, setType] = useState<string>(RELEASE_TYPES[0]);
  const [area, setArea] = useState<string>(PRODUCT_AREAS[0]);
  const [page, setPage] = useState(0);
  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [subMsg, setSubMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubStatus("sending");
    setSubMsg("");
    const res = await sendForm("Newsletter subscribe", { Email: subEmail });
    if (res.ok) {
      setSubStatus("sent");
      setSubMsg("You're subscribed! We'll keep you posted.");
      setSubEmail("");
    } else {
      setSubStatus("error");
      setSubMsg(res.error || "Something went wrong. Please try again.");
    }
  };

  const filtered = useMemo(() => {
    return RELEASES.filter(
      (r) =>
        (type === "All types" || r.type === type) &&
        (area === "All products" || r.product === area)
    );
  }, [type, area]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages - 1);
  const shown = filtered.slice(current * PAGE_SIZE, current * PAGE_SIZE + PAGE_SIZE);

  const reset = (fn: (v: string) => void) => (v: string) => {
    fn(v);
    setPage(0);
  };

  return (
    <main className="bg-[#08080f] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 md:pt-48">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/4 h-[420px] w-[560px] rounded-full bg-[#4169e1]/20 blur-[150px]" />
          <div className="absolute right-0 top-10 h-[380px] w-[520px] rounded-full bg-[#7c5cec]/20 blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-[24px] text-center md:px-[40px]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/50" style={{ fontFamily: "Geist, sans-serif" }}>
            Our Products
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-[40px] font-extrabold leading-[1.05] tracking-tight md:text-[60px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            Stay up-to-date with the latest enhancements
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
            Every improvement we ship across the Sidpin product suite — new features, upgrades, and fixes that help you grow faster.
          </p>

          {/* Subscribe */}
          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={subEmail}
              onChange={(e) => setSubEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-[14px] text-white outline-none placeholder:text-white/40 focus:border-[#7c5cec] focus:ring-2 focus:ring-[#7c5cec]/30"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button
              type="submit"
              disabled={subStatus === "sending"}
              className="rounded-full bg-white px-6 py-3 text-[14px] font-bold text-black transition-transform duration-300 hover:scale-[1.03] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              {subStatus === "sending" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {subMsg && (
            <p
              className={`mt-3 text-[13px] ${subStatus === "error" ? "text-red-400" : "text-emerald-400"}`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {subMsg}
            </p>
          )}
        </div>
      </section>

      {/* Filters + grid */}
      <section className="mx-auto max-w-[1120px] px-[24px] py-16 md:px-[40px] md:py-24">
        <div className="mb-10 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-2 lg:grid-cols-4">
          <Filter label="Release Type" value={type} options={RELEASE_TYPES} onChange={reset(setType)} />
          <Filter label="Product Area" value={area} options={PRODUCT_AREAS} onChange={reset(setArea)} />
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40" style={{ fontFamily: "Geist, sans-serif" }}>
              Integration
            </span>
            <div className="relative">
              <select disabled className="w-full cursor-not-allowed appearance-none rounded-xl border border-white/10 bg-white/[0.03] py-3 pe-10 ps-4 text-[14px] font-medium text-white/45" style={{ fontFamily: "Inter, sans-serif" }}>
                <option>All integrations</option>
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute end-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40" style={{ fontFamily: "Geist, sans-serif" }}>
              Date
            </span>
            <div className="relative">
              <select disabled className="w-full cursor-not-allowed appearance-none rounded-xl border border-white/10 bg-white/[0.03] py-3 pe-10 ps-4 text-[14px] font-medium text-white/45" style={{ fontFamily: "Inter, sans-serif" }}>
                <option>Newest first</option>
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute end-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            </div>
          </div>
        </div>

        {shown.length === 0 ? (
          <p className="py-20 text-center text-white/50" style={{ fontFamily: "Inter, sans-serif" }}>
            No releases match those filters yet.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {shown.map((r) => (
              <ReleaseCard key={r.id} r={r} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-10 w-10 rounded-full text-[14px] font-semibold transition-colors ${
                  i === current ? "bg-white text-black" : "border border-white/15 text-white/70 hover:border-white/40"
                }`}
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1120px] px-[24px] pb-28 md:px-[40px]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1730] to-[#0c0c16] px-8 py-16 text-center md:px-16">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-[#7c5cec]/25 blur-[120px]" />
          <div className="relative">
            <h2 className="text-[30px] font-extrabold tracking-tight md:text-[42px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              Start growing your business
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
              Put the whole Sidpin product suite to work for your brand — talk to us about where you want to grow next.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-[15px] font-bold text-black transition-transform duration-300 hover:scale-[1.04]"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
