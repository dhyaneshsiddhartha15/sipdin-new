"use client";

import { useState } from "react";
import { Paperclip, Check, MapPin } from "lucide-react";
import FluidCanvas from "./FluidCanvas";
import { sendForm } from "@/lib/sendForm";

const interests = [
  "SEO",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Social Media",
  "PPC Ads",
  "AI Automation",
  "Other",
];

export default function ContactSplit() {
  const [selected, setSelected] = useState<string[]>([interests[0]]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");
    const res = await sendForm("Project enquiry", {
      Name: name,
      Email: email,
      "Interested in": selected.join(", "),
      Message: message,
      ...(fileName ? { Attachment: fileName } : {}),
    });
    if (res.ok) {
      setStatus("sent");
      setFeedback("Thanks! Your request has been sent — we'll reply fast.");
      setName("");
      setEmail("");
      setMessage("");
      setSelected([interests[0]]);
      setFileName(null);
    } else {
      setStatus("error");
      setFeedback(res.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
    <section className="relative flex flex-col lg:flex-row min-h-screen">
      <style>{`
        @keyframes sidpin-blob-a {
          0%, 100% { transform: translate(-15%, -10%) rotate(0deg) scale(1); }
          50% { transform: translate(10%, 15%) rotate(40deg) scale(1.25); }
        }
        @keyframes sidpin-blob-b {
          0%, 100% { transform: translate(20%, 25%) rotate(0deg) scale(1.1); }
          50% { transform: translate(-10%, -15%) rotate(-35deg) scale(0.9); }
        }
        @keyframes sidpin-blob-c {
          0%, 100% { transform: translate(-25%, 30%) rotate(0deg) scale(1.2); }
          50% { transform: translate(15%, -20%) rotate(30deg) scale(1); }
        }
      `}</style>

      {/* Left — fluid gradient panel */}
      <div className="relative lg:w-[55%] min-h-[520px] lg:min-h-screen overflow-hidden bg-[#e9edfb] dark:bg-[#05060f] flex">
        {/* Animated iridescent blobs */}
        <div
          aria-hidden="true"
          className="absolute -inset-[20%] opacity-80 dark:opacity-95"
          style={{
            background:
              "radial-gradient(closest-side, #4169E1 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "sidpin-blob-a 18s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -inset-[20%] opacity-65 dark:opacity-80"
          style={{
            background:
              "radial-gradient(closest-side at 70% 30%, #9b5cff 0%, transparent 65%)",
            filter: "blur(70px)",
            animation: "sidpin-blob-b 22s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -inset-[20%] opacity-55 dark:opacity-70"
          style={{
            background:
              "radial-gradient(closest-side at 30% 70%, #35d6c2 0%, transparent 60%)",
            filter: "blur(80px)",
            animation: "sidpin-blob-c 26s ease-in-out infinite",
          }}
        />
        {/* Liquid-chrome shader (covers the blob fallback when WebGL is available) */}
        <FluidCanvas />

        {/* Veil so text stays readable in both themes */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/40 dark:from-[#05060f]/10 dark:to-[#05060f]/45"
        />

        {/* Copy */}
        <div className="relative z-10 flex flex-col justify-between w-full px-[24px] md:px-[64px] pt-40 pb-14">
          <h1 className="font-['Hanken_Grotesk'] text-[44px] md:text-[64px] font-bold leading-[1.1] text-[#101528] dark:text-white max-w-xl">
            Have a project? <br />
            We would love <br />
            to help.
          </h1>
          <a
            href="mailto:hello@sidpin.com"
            className="font-['Inter'] text-[#101528]/75 hover:text-[#101528] dark:text-white/80 dark:hover:text-white transition-colors text-base mt-16"
          >
            hello@sidpin.com
          </a>
        </div>
      </div>

      {/* Right — form panel */}
      <div className="lg:w-[45%] bg-surface dark:bg-[#0a0a0f] flex items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[560px] mx-auto px-[24px] md:px-[56px] pt-24 pb-20 lg:pt-44"
        >
          <p className="font-['Inter'] text-[15px] text-fg-2 mb-6">
            I&apos;m interested in...
          </p>

          {/* Interest pills */}
          <div className="flex flex-wrap gap-3 mb-14">
            {interests.map((item) => {
              const active = selected.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => toggle(item)}
                  className={`px-5 py-2.5 font-['Geist'] text-[13px] tracking-wide border rounded-sm transition-all duration-300 ${
                    active
                      ? "border-fg bg-fg text-surface font-semibold dark:text-black"
                      : "border-line text-fg-2 hover:border-fg/60 hover:text-fg"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Minimal underline inputs */}
          <div className="space-y-12 mb-12">
            <input
              type="text"
              required
              suppressHydrationWarning
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-transparent border-0 border-b border-line pb-3 font-['Inter'] text-[17px] text-fg placeholder:text-fg-3 outline-none focus:border-fg transition-colors"
            />
            <input
              type="email"
              required
              suppressHydrationWarning
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-transparent border-0 border-b border-line pb-3 font-['Inter'] text-[17px] text-fg placeholder:text-fg-3 outline-none focus:border-fg transition-colors"
            />
            <textarea
              rows={1}
              suppressHydrationWarning
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project"
              className="w-full bg-transparent border-0 border-b border-line pb-3 font-['Inter'] text-[17px] text-fg placeholder:text-fg-3 outline-none focus:border-fg transition-colors resize-none"
            />
          </div>

          {/* Attachment */}
          <label className="inline-flex items-center gap-3 cursor-pointer text-fg-2 hover:text-fg transition-colors mb-14">
            {fileName ? (
              <Check size={18} className="text-[#0eab93] dark:text-[#35d6c2]" />
            ) : (
              <Paperclip size={18} />
            )}
            <span className="font-['Inter'] text-[15px]">
              {fileName ?? "Add attachment"}
            </span>
            <input
              type="file"
              className="hidden"
              suppressHydrationWarning
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>

          <div>
            <button
              type="submit"
              suppressHydrationWarning
              disabled={status === "sending"}
              className="bg-fg text-surface dark:text-black font-['Geist'] text-[14px] font-bold px-10 py-4 rounded-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send request"}
            </button>
            {feedback && (
              <p
                className={`mt-4 font-['Inter'] text-[14px] ${
                  status === "error" ? "text-[#c0392b]" : "text-[#0eab93] dark:text-[#35d6c2]"
                }`}
              >
                {feedback}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>

    {/* Map band */}
    <section className="bg-surface dark:bg-[#0a0a0f]">
      <div className="mx-auto max-w-[1400px] px-[24px] md:px-[56px] pb-24">
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-fg">
            <MapPin size={20} strokeWidth={2.2} className="text-[#4169E1]" />
            <h2 className="font-['Hanken_Grotesk'] text-[26px] md:text-[32px] font-bold">
              Visit our office
            </h2>
          </div>
          <p className="font-['Inter'] text-[15px] text-fg-2 max-w-xl">
            First Floor, Birla Farm, Haripur Kalan, Haridwar, Motichur Range,
            Uttarakhand 249205
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-line shadow-[0_20px_60px_-24px_rgba(65,105,225,0.35)]">
          <iframe
            title="SIDPIN Digital office location"
            src="https://maps.google.com/maps?q=First%20Floor%2C%20Birla%20Farm%2C%20Haripur%20Kalan%2C%20Haridwar%2C%20Motichur%20Range%2C%20Uttarakhand%20249205&z=15&output=embed"
            className="block w-full h-[380px] md:h-[460px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          href="https://www.google.com/maps?daddr=First+Floor,+Birla+Farm,+Haripur+Kalan,+Haridwar,+Motichur+Range,+Uttarakhand+249205"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-['Inter'] text-[15px] font-medium text-[#4169E1] hover:underline"
        >
          Get directions
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
    </>
  );
}
