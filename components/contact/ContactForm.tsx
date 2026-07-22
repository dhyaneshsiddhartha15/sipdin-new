"use client";

import { useState } from "react";
import { sendForm } from "@/lib/sendForm";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields: Record<string, string> = {
      Name: (data.get("name") as string) || "",
      Company: (data.get("company") as string) || "",
      Email: (data.get("email") as string) || "",
      Phone: (data.get("phone") as string) || "",
      Website: (data.get("website") as string) || "",
      Industry: (data.get("industry") as string) || "",
      "Budget Range": (data.get("budget") as string) || "",
      Timeline: (data.get("timeline") as string) || "",
      "Project Description": (data.get("description") as string) || "",
    };

    setStatus("sending");
    setFeedback("");
    const res = await sendForm("Project Inquiry", fields);
    if (res.ok) {
      setStatus("sent");
      setFeedback("Thanks! Your inquiry has been sent — we'll be in touch soon.");
      form.reset();
    } else {
      setStatus("error");
      setFeedback(res.error || "Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-fg/20 py-4 focus:ring-0 focus:border-[#4169E1] transition-colors font-['Inter'] text-lg text-fg outline-none";
  const labelClass =
    "block font-['Geist'] text-xs font-medium text-fg/60 uppercase tracking-widest mb-2";

  return (
    <section className="py-40 bg-surface-2">
      <div className="max-w-4xl mx-auto px-[24px] md:px-[80px]">
        <div className="text-center mb-24">
          <p className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.3em] uppercase mb-6">
            Enquiry
          </p>
          <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-fg">
            Tell Us About Your Vision.
          </h2>
        </div>
        <form className="glass-card p-8 md:p-12 lg:p-20 space-y-12" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <label className={labelClass}>Name</label>
              <input name="name" className={inputClass} placeholder="John Doe" type="text" />
            </div>
            <div>
              <label className={labelClass}>Company</label>
              <input name="company" className={inputClass} placeholder="Nexus Corp" type="text" />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input name="email" className={inputClass} placeholder="john@nexus.com" type="email" required />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input name="phone" className={inputClass} placeholder="+1 234 567 890" type="tel" />
            </div>
            <div>
              <label className={labelClass}>Website</label>
              <input name="website" className={inputClass} placeholder="www.nexus.com" type="url" />
            </div>
            <div>
              <label className={labelClass}>Industry</label>
              <select name="industry" className={`${inputClass} appearance-none`}>
                <option className="bg-bg">Technology</option>
                <option className="bg-bg">Fashion</option>
                <option className="bg-bg">Real Estate</option>
                <option className="bg-bg">Entertainment</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Budget Range</label>
              <select name="budget" className={`${inputClass} appearance-none`}>
                <option className="bg-bg">$10k - $25k</option>
                <option className="bg-bg">$25k - $50k</option>
                <option className="bg-bg">$50k - $100k</option>
                <option className="bg-bg">$100k+</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Timeline</label>
              <select name="timeline" className={`${inputClass} appearance-none`}>
                <option className="bg-bg">ASAP</option>
                <option className="bg-bg">1-3 Months</option>
                <option className="bg-bg">3-6 Months</option>
                <option className="bg-bg">Flexible</option>
              </select>
            </div>
          </div>
          <div className="pt-6">
            <label className={labelClass}>Project Description</label>
            <textarea
              name="description"
              className={`${inputClass} resize-none`}
              placeholder="Tell us about the challenges and goals of your project..."
              rows={4}
            />
          </div>
          <div className="flex flex-col items-center gap-6 pt-12">
            <button
              className="bg-[#4169E1] text-[#FFFFFF] px-16 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(65,105,225,0.4)] transition-all duration-500 w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit Inquiry"}
            </button>
            {feedback && (
              <p
                className={`font-['Inter'] text-sm text-center ${
                  status === "error" ? "text-[#c0392b]" : "text-[#0eab93]"
                }`}
              >
                {feedback}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
