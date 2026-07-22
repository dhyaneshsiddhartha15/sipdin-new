"use client";

import { useState } from "react";
import { sendForm } from "@/lib/sendForm";

export default function CustomSolutionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const sent = status === "sent";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const res = await sendForm("Custom Solution Request", {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    });
    if (res.ok) {
      setStatus("sent");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      setStatus("error");
      setErrorMsg(res.error || "Something went wrong.");
    }
  };

  const inputClass =
    "w-full bg-white border border-[#e5e2da] rounded-[4px] px-4 py-3 font-['Inter'] text-[14px] text-[#1A1A1A] placeholder:text-[#9a968c] outline-none focus:border-[#4169E1] transition-colors";

  return (
    <div className="relative">
      {/* Decorations */}
      <span
        aria-hidden="true"
        className="absolute -top-16 -left-10 w-4 h-4 rounded-full bg-[#1D6FF2]"
      />
      <span
        aria-hidden="true"
        className="absolute -top-20 right-2 material-symbols-outlined text-[#1D6FF2] text-[96px] rotate-12 select-none"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        extension
      </span>
      <span
        aria-hidden="true"
        className="absolute top-1/2 -right-8 w-2 h-2 rounded-full bg-[#F0813C]"
      />

      {/* "Fill the form" handwritten label + arrow */}
      <div className="absolute -top-12 -left-2 flex items-start gap-1 select-none" aria-hidden="true">
        <span
          className="text-[15px] font-semibold text-[#1A1A1A] -rotate-12 leading-tight"
          style={{ fontFamily: "'Segoe Script', 'Comic Sans MS', cursive" }}
        >
          Fill the
          <br />
          form
        </span>
        <svg width="52" height="46" viewBox="0 0 52 46" fill="none" className="mt-3">
          <path
            d="M4 4 C 18 10, 30 24, 44 38"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M44 38 l-10 -3 M44 38 l-2 -10"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Card */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-[#F6F6F4] rounded-lg p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(26,26,26,0.25)]"
      >
        <div className="space-y-4 mb-4">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className={inputClass}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone"
            className={inputClass}
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your project"
            rows={6}
            className={`${inputClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="font-['Geist'] text-[11px] font-bold tracking-[0.12em] uppercase text-[#4169E1] border border-[#4169E1] rounded-[4px] px-6 py-3 cursor-pointer hover:bg-[#4169E1] hover:text-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        <p className="font-['Inter'] text-[13.5px] text-[#555555] text-center mt-8">
          {sent ? (
            <>
              Thanks! Your message has been sent —{" "}
              <strong className="text-[#1A1A1A]">we&apos;ll reply fast.</strong>
            </>
          ) : status === "error" ? (
            <span className="text-[#c0392b]">{errorMsg}</span>
          ) : (
            <>
              Let&apos;s Boost Your{" "}
              <strong className="text-[#1A1A1A]">Online Success!</strong>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
