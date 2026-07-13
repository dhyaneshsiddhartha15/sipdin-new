"use client";

import { useEffect, useState } from "react";

const faqs = [
  {
    q: "What services does SIDPIN Digital offer?",
    a: "We're a full-stack growth partner! SEO, PPC, Meta ads, social media marketing, web & app development, UI/UX design, e-commerce, video editing, and CRM-powered marketing automation — all connected in one ecosystem.",
  },
  {
    q: "How soon can I expect results from SEO?",
    a: "SEO typically shows meaningful movement in 3–6 months as rankings compound. Need leads right now? We pair it with PPC and Meta ads that start driving qualified traffic from day one.",
  },
  {
    q: "Do you build websites and mobile apps too?",
    a: "Yes! We develop fast, secure, SEO-ready websites, high-converting e-commerce stores, and custom mobile apps — designed, built, and deployed end-to-end by our in-house team.",
  },
  {
    q: "Can you manage our social media completely?",
    a: "Absolutely. Strategy, content calendars, reels and video edits, posting, community management, and monthly growth reports — we handle your brand's social presence end-to-end.",
  },
  {
    q: "Do you provide a CRM and marketing automation?",
    a: "Yes! Our CRM is tailored for hotels, restaurants, schools, clinics, and more — with lead nurturing, email automation, and follow-up flows so no enquiry ever slips through.",
  },
  {
    q: "How do we get started with SIDPIN Digital?",
    a: "Simple! Book a free discovery call. We audit your current presence, map the untapped opportunity, and send you a clear proposal with timelines and pricing — no obligations.",
  },
];

/* Answer bubble that types itself out like a chat message */
function AnswerBubble({ text, onPop }: { text: string; onPop: () => void }) {
  const [typed, setTyped] = useState(0);
  const done = typed >= text.length;

  useEffect(() => {
    if (done) return;
    const id = setInterval(
      () => setTyped((n) => Math.min(text.length, n + 2)),
      24
    );
    return () => clearInterval(id);
  }, [done, text.length]);

  return (
    <div className="flex justify-end">
      <div className="faq-bubble-in relative max-w-[640px] md:mr-4 rounded-2xl rounded-br-sm bg-[#0F1626] border border-[#243049] px-7 py-6">
        <p className="font-['Inter'] text-[14px] leading-[1.8] text-[#EEF2FB]/90">
          {text.slice(0, typed)}
          {!done && (
            <span className="inline-block w-[8px] h-[16px] bg-[#6E8CFF] align-middle ml-[2px] faq-cursor" />
          )}
        </p>
        {done && (
          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={onPop}
              className="faq-bubble-in font-['Geist'] text-[11px] font-semibold tracking-[0.15em] uppercase bg-[#4169E1] text-white rounded-full px-6 py-2.5 cursor-pointer hover:bg-[#3557c4] transition-colors"
            >
              Pop Bubble
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FaqChat() {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (i: number) =>
    setOpen((o) => (o.includes(i) ? o.filter((n) => n !== i) : [...o, i]));

  return (
    <section className="relative bg-[#05070F] text-white py-[120px] px-[24px] md:px-[80px] overflow-hidden">
      {/* Decorative floating circles */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] left-[6%] w-40 h-40 rounded-full bg-[#4169E1]/[0.07]" />
        <div className="absolute top-[18%] right-[10%] w-24 h-24 rounded-full bg-[#4169E1]/[0.09]" />
        <div className="absolute top-[45%] left-[12%] w-16 h-16 rounded-full bg-[#6E8CFF]/[0.08]" />
        <div className="absolute bottom-[20%] right-[6%] w-36 h-36 rounded-full bg-[#4169E1]/[0.06]" />
        <div className="absolute bottom-[8%] left-[35%] w-28 h-28 rounded-full bg-[#6E8CFF]/[0.05]" />
        <div className="absolute top-[60%] right-[28%] w-14 h-14 rounded-full bg-[#4169E1]/[0.08]" />
      </div>

      <div className="relative max-w-[1100px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="font-['Geist'] text-xs font-medium text-[#6E8CFF] tracking-[0.4em] uppercase mb-4 block">
            Got Questions?
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] font-medium mb-8">
            Frequently Asked Questions
          </h2>
          <button
            type="button"
            onClick={() => setOpen([])}
            className="font-['Geist'] text-[11px] font-semibold tracking-[0.15em] uppercase bg-[#4169E1]/15 border border-[#4169E1]/40 text-[#8FB0FF] rounded-full px-6 py-2.5 cursor-pointer hover:bg-[#4169E1]/30 transition-colors"
          >
            Reset Q&amp;A
          </button>
        </div>

        {/* Chat thread */}
        <div className="flex flex-col gap-8">
          {faqs.map((faq, i) => {
            const isOpen = open.includes(i);
            return (
              <div key={faq.q} className="flex flex-col gap-5">
                {/* Question bubble */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="relative self-start max-w-full flex items-center gap-3 rounded-2xl rounded-bl-sm bg-[#4169E1] px-7 py-4 text-left cursor-pointer transition-all duration-300 hover:bg-[#3557c4] hover:-translate-y-0.5"
                >
                  <span className="font-['Hanken_Grotesk'] text-[15px] md:text-[17px] font-semibold text-white">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-white text-[11px] transition-transform duration-300 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    &#9654;
                  </span>
                  {/* tail */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-[6px] left-[14px] w-3 h-3 bg-[#4169E1] [clip-path:polygon(0_0,100%_0,0_100%)] transition-colors"
                  />
                </button>

                {/* Answer bubble */}
                {isOpen && (
                  <AnswerBubble text={faq.a} onPop={() => toggle(i)} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-bubble-in {
          animation: faqBubbleIn 350ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes faqBubbleIn {
          from {
            opacity: 0;
            transform: scale(0.7) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .faq-cursor {
          animation: faqCursorBlink 800ms steps(1) infinite;
        }
        @keyframes faqCursorBlink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
