"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
  Lock,
  Check,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { sendForm } from "@/lib/sendForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

// Real Sidpin client testimonials (same source as TestimonialCarousel).
const TESTIMONIALS = [
  {
    quote:
      "Sidpin took our 70-year Rudraksha legacy online with complete authenticity. Our sales and customer trust have never been stronger.",
    name: "Avish Bansal",
    brand: "Rudradharma",
  },
  {
    quote:
      "Our brand finally looks as strong as our training. Enquiries went up the moment the new site went live.",
    name: "Ankit Rawat",
    brand: "AG Fitness",
  },
  {
    quote:
      "They understood our vision instantly and turned it into a calm, beautiful digital experience. Bookings keep growing.",
    name: "Rohan Rawat",
    brand: "Yog Adhyayan",
  },
];

// Real figures already shown in StatsSection — kept consistent, not invented.
const TRUST_CAPSULES = [
  "50+ Projects Delivered",
  "85% Client Retention",
  "3+ Years of Excellence",
  "100% On-Time Delivery",
];

const SERVICE_OPTIONS = [
  "AI Agents & Automation",
  "Web & App Development",
  "Cloud & DevOps",
  "UI/UX & Branding",
  "Full Digital Partnership",
  "Other",
];
function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

type FieldState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const EMPTY_FIELDS: FieldState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

function FloatField({
  label,
  active,
  children,
}: {
  label: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      <label
        className={`pointer-events-none absolute left-4 font-medium transition-all duration-200 ${
          active
            ? "-top-2 rounded bg-white px-1.5 text-[10.5px] text-[#4169E1]"
            : "top-2 text-[14px] text-[#9A97A6]"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

const inputClass =
  "peer w-full rounded-[14px] border border-[#E7E5EF] bg-white px-4 py-2 text-[14px] text-[#1A1730] outline-none transition-all duration-200 focus:border-[#4169E1] focus:shadow-[0_0_0_4px_rgba(65,105,225,0.10)]";

export default function AIConsultationModal({ open, onClose }: Props) {
  const [fields, setFields] = useState<FieldState>(EMPTY_FIELDS);
  const [focusField, setFocusField] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setFeedback("");
      setFields(EMPTY_FIELDS);
      setActiveTestimonial(0);
    }
  }, [open]);

  const set = (key: keyof FieldState) => (v: string) => setFields((f) => ({ ...f, [key]: v }));

  const nextTestimonial = () => setActiveTestimonial((i) => (i + 1) % TESTIMONIALS.length);
  const prevTestimonial = () =>
    setActiveTestimonial((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");
    const res = await sendForm("AI Consultation Request", {
      "First Name": fields.firstName,
      "Last Name": fields.lastName,
      Email: fields.email,
      Phone: fields.phone,
      Company: fields.company,
      Service: fields.service,
      Message: fields.message,
    });
    if (res.ok) {
      setStatus("sent");
      setFeedback("Thanks — your request is in. We'll be in touch within one business day.");
    } else {
      setStatus("error");
      setFeedback(res.error || "Something went wrong. Please try again.");
    }
  };

  const t = TESTIMONIALS[activeTestimonial];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-[#0A0A14]/60"
            style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ai-consult-heading"
            className="relative flex w-full max-w-[920px] flex-col overflow-hidden bg-white shadow-[0_60px_160px_-40px_rgba(10,10,20,0.55)] md:flex-row"
            style={{ borderRadius: "22px", maxHeight: "min(600px, 88vh)" }}
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-30 grid h-10 w-10 place-items-center rounded-full bg-black/5 text-[#1A1730] backdrop-blur-md transition-all hover:scale-105 hover:bg-black/10 md:right-6 md:top-6"
            >
              <X size={18} />
            </button>

            {/* LEFT — Liquid Glass showcase */}
            <div
              onMouseMove={handleMouseMove}
              className="relative hidden overflow-hidden md:flex md:w-[42%] md:flex-col md:justify-between"
              style={{
                background: "linear-gradient(160deg, #EAF0FF 0%, #DCE7FF 55%, #E3EDFF 100%)",
              }}
            >
              <style>{`
                @keyframes aicm-blob-a { 0%,100% { transform: translate(-15%,-10%) rotate(0deg) scale(1); } 50% { transform: translate(10%,15%) rotate(40deg) scale(1.25); } }
                @keyframes aicm-blob-b { 0%,100% { transform: translate(20%,25%) rotate(0deg) scale(1.1); } 50% { transform: translate(-10%,-15%) rotate(-35deg) scale(0.9); } }
                @keyframes aicm-blob-c { 0%,100% { transform: translate(-25%,30%) rotate(0deg) scale(1.2); } 50% { transform: translate(15%,-20%) rotate(30deg) scale(1); } }
                @keyframes aicm-float { 0%,100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(-14px); opacity: 1; } }
                @keyframes aicm-shimmer { 0% { transform: translateX(-120%) skewX(-12deg); } 100% { transform: translateX(220%) skewX(-12deg); } }
              `}</style>

              {/* Gradient blobs — outer wrapper carries mouse parallax, inner div carries the liquid animation */}
              <div
                aria-hidden
                className="absolute -inset-[12%]"
                style={{ transform: `translate(${parallax.x * 14}px, ${parallax.y * 14}px)` }}
              >
                <div
                  className="h-full w-full opacity-90"
                  style={{
                    background: "radial-gradient(closest-side, #1E3A8A 0%, transparent 72%)",
                    filter: "blur(50px)",
                    animation: "aicm-blob-a 18s ease-in-out infinite",
                  }}
                />
              </div>
              <div
                aria-hidden
                className="absolute -inset-[12%]"
                style={{ transform: `translate(${parallax.x * -10}px, ${parallax.y * -10}px)` }}
              >
                <div
                  className="h-full w-full opacity-80"
                  style={{
                    background: "radial-gradient(closest-side at 70% 30%, #4169E1 0%, transparent 68%)",
                    filter: "blur(55px)",
                    animation: "aicm-blob-b 22s ease-in-out infinite",
                  }}
                />
              </div>
              <div
                aria-hidden
                className="absolute -inset-[12%]"
                style={{ transform: `translate(${parallax.x * 8}px, ${parallax.y * 8}px)` }}
              >
                <div
                  className="h-full w-full opacity-70"
                  style={{
                    background: "radial-gradient(closest-side at 30% 75%, #38BDF8 0%, transparent 62%)",
                    filter: "blur(60px)",
                    animation: "aicm-blob-c 26s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Frosted glass sheen over the blobs */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(30px)",
                  WebkitBackdropFilter: "blur(30px)",
                }}
              />

              {/* Noise texture */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />

              {/* Floating glass particles */}
              {[
                { top: "14%", left: "16%", size: 6, delay: 0 },
                { top: "22%", left: "80%", size: 4, delay: 0.6 },
                { top: "70%", left: "12%", size: 5, delay: 1.1 },
                { top: "62%", left: "85%", size: 4, delay: 1.6 },
                { top: "40%", left: "50%", size: 3, delay: 2.1 },
              ].map((p, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="absolute rounded-full bg-white/70"
                  style={{
                    top: p.top,
                    left: p.left,
                    width: p.size,
                    height: p.size,
                    animation: `aicm-float ${5 + i}s ease-in-out infinite`,
                    animationDelay: `${p.delay}s`,
                    boxShadow: "0 0 12px rgba(255,255,255,0.8)",
                  }}
                />
              ))}

              {/* Centerpiece: floating glass testimonial card */}
              <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 14, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-[280px] rounded-[20px] border border-white/60 bg-white/55 p-5"
                    style={{
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      boxShadow:
                        "0 30px 70px -30px rgba(65,105,225,0.35), inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                  >
                    <Quote size={22} className="text-[#4169E1]/50" fill="currentColor" />
                    <p className="mt-3 text-[13.5px] leading-relaxed text-[#1A1F36]">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-4 flex items-center gap-2.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#4169E1] text-[12px] font-bold text-white">
                        {initials(t.name)}
                      </span>
                      <div>
                        <p className="text-[13px] font-bold text-[#1A1730]">{t.name}</p>
                        <p className="text-[11.5px] text-[#6B6478]">{t.brand}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Floating circular glass nav */}
                <div className="relative z-10 mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/40 text-[#4169E1] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/60"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex items-center gap-1.5">
                    {TESTIMONIALS.map((item, i) => (
                      <span
                        key={item.name}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeTestimonial ? "w-5 bg-[#4169E1]" : "w-1.5 bg-[#4169E1]/25"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/40 text-[#4169E1] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/60"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Trust capsules — small cards, 2x2 grid */}
              <div className="relative z-10 grid grid-cols-2 gap-2 px-6 pb-6">
                {TRUST_CAPSULES.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-[14px] border border-white/60 bg-white/50 px-3 py-2.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70"
                    style={{ boxShadow: "0 8px 20px -14px rgba(65,105,225,0.4)" }}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#4169E1]/10">
                      <Check size={12} className="text-[#4169E1]" strokeWidth={3} />
                    </span>
                    <span className="text-[11.5px] font-semibold leading-tight text-[#1E2A4A]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Contact form */}
            <div
              className="aicm-no-scrollbar relative flex w-full flex-col overflow-y-auto bg-white px-6 pb-6 pt-7 md:w-[58%] md:px-9 md:pb-6 md:pt-8"
              style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
            >
              <style>{`
                .aicm-no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
                .aicm-no-scrollbar::-webkit-scrollbar { display: none; width: 0; height: 0; }
              `}</style>
              {status === "sent" ? (
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#1E3A8A] via-[#4169E1] to-[#5B93F5]">
                    <Check size={28} className="text-white" strokeWidth={3} />
                  </span>
                  <h3 className="mt-6 text-[28px] font-extrabold text-[#1A1730]">Request sent</h3>
                  <p className="mt-3 max-w-[380px] text-[15px] leading-relaxed text-[#6B6478]">
                    {feedback}
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-8 rounded-full bg-[#1A1730] px-8 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    id="ai-consult-heading"
                    className="max-w-[calc(100%-56px)] font-extrabold leading-[1.15] tracking-tight text-[#1A1730] md:max-w-none"
                    style={{ fontSize: "clamp(20px, 2.1vw, 26px)" }}
                  >
                    Let&apos;s Build Something Amazing
                  </h2>
                  <p className="mt-1.5 max-w-[480px] text-[13.5px] leading-relaxed text-[#6B6478]">
                    Tell us about your project and we&apos;ll come back with a clear plan —
                    usually within one business day.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-4 flex flex-1 flex-col">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <FloatField label="First name" active={focusField === "firstName" || !!fields.firstName}>
                        <input
                          type="text"
                          required
                          value={fields.firstName}
                          onChange={(e) => set("firstName")(e.target.value)}
                          onFocus={() => setFocusField("firstName")}
                          onBlur={() => setFocusField(null)}
                          className={inputClass}
                        />
                      </FloatField>
                      <FloatField label="Last name" active={focusField === "lastName" || !!fields.lastName}>
                        <input
                          type="text"
                          required
                          value={fields.lastName}
                          onChange={(e) => set("lastName")(e.target.value)}
                          onFocus={() => setFocusField("lastName")}
                          onBlur={() => setFocusField(null)}
                          className={inputClass}
                        />
                      </FloatField>
                      <FloatField label="Email" active={focusField === "email" || !!fields.email}>
                        <input
                          type="email"
                          required
                          value={fields.email}
                          onChange={(e) => set("email")(e.target.value)}
                          onFocus={() => setFocusField("email")}
                          onBlur={() => setFocusField(null)}
                          className={inputClass}
                        />
                      </FloatField>
                      <FloatField label="Phone" active={focusField === "phone" || !!fields.phone}>
                        <input
                          type="tel"
                          value={fields.phone}
                          onChange={(e) => set("phone")(e.target.value)}
                          onFocus={() => setFocusField("phone")}
                          onBlur={() => setFocusField(null)}
                          className={inputClass}
                        />
                      </FloatField>
                      <FloatField label="Company" active={focusField === "company" || !!fields.company}>
                        <input
                          type="text"
                          value={fields.company}
                          onChange={(e) => set("company")(e.target.value)}
                          onFocus={() => setFocusField("company")}
                          onBlur={() => setFocusField(null)}
                          className={inputClass}
                        />
                      </FloatField>
                      <FloatField label="Service" active={!!fields.service}>
                        <select
                          value={fields.service}
                          onChange={(e) => set("service")(e.target.value)}
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="" disabled hidden />
                          {SERVICE_OPTIONS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </FloatField>
                    </div>

                    <div className="mt-2">
                      <FloatField label="Tell us about your project" active={focusField === "message" || !!fields.message}>
                        <textarea
                          rows={2}
                          value={fields.message}
                          onChange={(e) => set("message")(e.target.value)}
                          onFocus={() => setFocusField("message")}
                          onBlur={() => setFocusField(null)}
                          className={`${inputClass} resize-none`}
                        />
                      </FloatField>
                    </div>

                    {/* reCAPTCHA placeholder */}
                    <div className="mt-2.5 flex items-center gap-3 rounded-[14px] border border-[#E7E5EF] bg-[#FAFAFC] px-4 py-2">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded border border-[#C9C6D6] bg-white" />
                      <span className="text-[13px] text-[#5C5870]">I&apos;m not a robot</span>
                      <span className="ml-auto text-[10px] font-medium uppercase tracking-wide text-[#B5B1C4]">
                        reCAPTCHA
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group relative mt-2.5 overflow-hidden rounded-full px-8 py-3 text-[14.5px] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                      style={{
                        background: "linear-gradient(100deg, #1E3A8A 0%, #4169E1 55%, #5B93F5 100%)",
                        boxShadow: "0 16px 40px -14px rgba(65,105,225,0.5)",
                      }}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(100deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                          animation: "aicm-shimmer 1.2s ease-in-out infinite",
                        }}
                      />
                      <span className="relative inline-flex items-center gap-2">
                        {status === "sending" ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Start Your Project
                            <ArrowRight size={18} strokeWidth={2.5} />
                          </>
                        )}
                      </span>
                    </button>

                    {status === "error" && (
                      <p className="mt-2 text-[13px] text-[#DC2626]">{feedback}</p>
                    )}

                    <p className="mt-2 flex items-center gap-1.5 text-[12px] text-[#9A97A6]">
                      <Lock size={12} />
                      We respect your privacy. Your details are never shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
