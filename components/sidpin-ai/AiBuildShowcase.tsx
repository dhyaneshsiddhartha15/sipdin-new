"use client";

/**
 * AiBuildShowcase — "What We Can Build" auto-rotating card carousel.
 * Three tilted, brand-coloured service cards (Cloutzy/Eponet-style): the centre
 * card is upright and prominent, flanked by two tilted side cards. Every few
 * seconds it advances to the next service; hovering pauses it, and the dots
 * below allow manual navigation.
 */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  CalendarCheck,
  PhoneCall,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Stat = { value: string; label: string };
type Service = {
  key: string;
  name: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
  /** Card background gradient (top-left → bottom-right). */
  gradient: string;
  stats: [Stat, Stat];
};

const SERVICES: Service[] = [
  {
    key: "chat",
    name: "AI Chat Agent",
    tagline: "Conversational support & sales",
    description:
      "A chatbot trained on your business — not a generic script. It answers questions, qualifies leads, and books meetings around the clock in your brand voice.",
    Icon: MessageSquare,
    gradient: "linear-gradient(145deg, #2E5BE6 0%, #1E3A8A 100%)",
    stats: [
      { value: "24/7", label: "Always-on support" },
      { value: "80%", label: "Tickets auto-resolved" },
    ],
  },
  {
    key: "booking",
    name: "Booking Automation",
    tagline: "Scheduling on autopilot",
    description:
      "Automated booking flows that sync calendars, send reminders, and kill the back-and-forth emails — so slots fill themselves and no-shows disappear.",
    Icon: CalendarCheck,
    gradient: "linear-gradient(145deg, #10B981 0%, #065F46 100%)",
    stats: [
      { value: "3×", label: "Faster bookings" },
      { value: "0", label: "Manual scheduling" },
    ],
  },
  {
    key: "voice",
    name: "AI Voice Agent",
    tagline: "Answer & act on every call",
    description:
      "A natural-sounding voice agent that picks up calls, routes requests, and books appointments over the phone — so no lead ever lands in voicemail.",
    Icon: PhoneCall,
    gradient: "linear-gradient(145deg, #7C3AED 0%, #4C1D95 100%)",
    stats: [
      { value: "100%", label: "Calls answered" },
      { value: "<1s", label: "Pickup time" },
    ],
  },
  {
    key: "workflow",
    name: "Workflow Automation",
    tagline: "Connect every tool",
    description:
      "Background automations that link your apps and run the repetitive work for you — data flows between tools automatically, with no human in the loop.",
    Icon: Workflow,
    gradient: "linear-gradient(145deg, #E11D48 0%, #9F1239 100%)",
    stats: [
      { value: "40h", label: "Saved / month" },
      { value: "99.9%", label: "Reliability" },
    ],
  },
];

const AUTO_ADVANCE_MS = 4000;

/** Position/tilt for a card given its offset from the active (centre) card. */
function poseFor(offset: number) {
  if (offset === 0) return { x: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 30 };
  // Left card (including wrapped case: offset 2 when it's actually -2)
  if (offset === -1 || offset === 2) return { x: -520, rotate: -8, scale: 0.82, opacity: 0.6, zIndex: 20 };
  // Right card (including wrapped case: offset -2 when it's actually 2)
  if (offset === 1 || offset === -2) return { x: 520, rotate: 8, scale: 0.82, opacity: 0.6, zIndex: 20 };
  // Hidden behind the centre card until it rotates into view.
  return { x: 0, rotate: 0, scale: 0.7, opacity: 0, zIndex: 10 };
}

function ServiceCard({ service }: { service: Service }) {
  const { Icon } = service;
  return (
    <article
      className="relative flex h-full w-full flex-col overflow-hidden rounded-[28px] p-7 text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] md:p-8"
      style={{ background: service.gradient }}
    >
      {/* Faint watermark of the name, like the reference cards */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 right-3 select-none text-[64px] font-extrabold uppercase leading-none text-white/[0.06] md:text-[84px]"
        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
      >
        {service.name.split(" ")[0]}
      </span>

      {/* Header: icon badge + name */}
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
          <Icon size={24} className="text-white" strokeWidth={2} />
        </span>
        <div>
          <h3
            className="text-[22px] font-bold leading-tight"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            {service.name}
          </h3>
          <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-white/70">
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Explanation */}
      <p className="relative mt-5 text-[15px] leading-relaxed text-white/85">
        {service.description}
      </p>

      {/* Stats */}
      <div className="relative mt-6 grid grid-cols-2 gap-4">
        {service.stats.map((s) => (
          <div key={s.label}>
            <div
              className="text-[30px] font-extrabold leading-none"
              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            >
              {s.value}
            </div>
            <div className="mt-1.5 text-[13px] leading-snug text-white/75">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bottom frosted panel — evokes a product mockup without a screenshot */}
      <div className="relative mt-auto pt-6">
        <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
            <Icon size={18} className="text-white" />
          </span>
          <div className="min-w-0">
            <div className="h-2.5 w-24 rounded-full bg-white/40" />
            <div className="mt-2 h-2 w-36 rounded-full bg-white/20" />
          </div>
          <span className="ml-auto rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#0b1220]">
            Live
          </span>
        </div>
      </div>
    </article>
  );
}

export default function AiBuildShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SERVICES.length;

  // Auto-advance unless paused (hover / after manual interaction).
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, n]);

  // Nearest signed offset of card i from the active card (wraps around).
  const offsetOf = (i: number) => {
    let r = i - active;
    // Handle wrap-around: if the distance is more than half the array length, wrap the other way
    if (r > n / 2) r -= n;
    if (r <= -n / 2) r += n; // Changed to <= to handle -2 case for 4 cards
    return r;
  };

  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nudge = (i: number) => {
    setActive(i);
    setPaused(true);
    if (pauseRef.current) clearTimeout(pauseRef.current);
    // Resume auto-play a little after a manual pick.
    pauseRef.current = setTimeout(() => setPaused(false), 6000);
  };
  useEffect(() => () => { if (pauseRef.current) clearTimeout(pauseRef.current); }, []);

  return (
    <section id="what-we-build" className="bg-bg px-[24px] py-[100px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4169E1]">
            What We Can Build
          </span>
          <h2
            className="mt-4 text-[34px] font-bold leading-tight text-fg md:text-[46px]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            AI that does the work for you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-fg-2">
            From conversation to booking to voice — we build AI agents and
            automations that plug into your business and run on their own.
          </p>
        </div>

        {/* Carousel */}
        {/* <div
          className="relative mx-auto h-[420px] w-full max-w-[1600px] overflow-visible md:h-[400px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="group"
          aria-roledescription="carousel"
          aria-label="What we can build"
        >
          {SERVICES.map((service, i) => {
            const offset = offsetOf(i);
            const pose = poseFor(offset);
            return (
              <motion.div
                key={service.key}
                className="absolute left-1/2 top-1/2 h-[380px] w-[min(88vw,350px)]"
                style={{ transform: "translate(-50%, -50%)" }}
                animate={pose}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden={offset !== 0}
              >
                <ServiceCard service={service} />
              </motion.div>
            );
          })}
        </div> */}

        {/* Controls: dots */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {SERVICES.map((service, i) => (
            <button
              key={service.key}
              type="button"
              onClick={() => nudge(i)}
              aria-label={`Show ${service.name}`}
              aria-current={i === active}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-[#4169E1]" : "w-2.5 bg-fg-3/40 hover:bg-fg-3/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
