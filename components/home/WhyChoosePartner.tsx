"use client";

import { useState } from "react";

const items: { title: string; body: React.ReactNode }[] = [
  {
    title: "Capture High-Intent Customers with Smart Digital Marketing",
    body: (
      <>
        <span className="text-[#6E8CFF]">Right Place</span> &ndash; meet{" "}
        <span className="text-[#6E8CFF]">Right Time</span>. Our digital
        marketing strategies help your brand appear where your customers are
        actively searching, whether that&apos;s on Google, Meta, LinkedIn, or
        Bing.
      </>
    ),
  },
  {
    title: "Clarify Your Message",
    body: (
      <>
        <span className="text-[#6E8CFF]">Confused customers don&apos;t buy</span>.
        We refine your brand story into clear, compelling messaging &mdash;
        across your website, ads, and content &mdash; so people instantly
        understand what you do and why it matters to them.
      </>
    ),
  },
  {
    title: "Turn More Visitors Into Marketing Qualified Leads",
    body: (
      <>
        Traffic alone pays no bills. With{" "}
        <span className="text-[#6E8CFF]">conversion-focused pages</span>, lead
        magnets, and CRM-connected forms, we turn anonymous visitors into
        qualified leads your sales team can actually close.
      </>
    ),
  },
  {
    title: "Keep Your Marketing Data-Driven",
    body: (
      <>
        Every decision is backed by{" "}
        <span className="text-[#6E8CFF]">real-world data</span>. Transparent
        dashboards, campaign analytics, and monthly reporting show exactly
        what&apos;s working, what&apos;s not, and where your budget delivers
        the highest return.
      </>
    ),
  },
  {
    title: "No More Developer Dependence",
    body: (
      <>
        Need a landing page, a new offer, or a quick fix?{" "}
        <span className="text-[#6E8CFF]">We handle it end-to-end</span> &mdash;
        design, development, and deployment &mdash; so your marketing never
        waits in a developer&apos;s queue.
      </>
    ),
  },
];

export default function WhyChoosePartner() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#05070F] text-white py-[120px] px-[24px] md:px-[80px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <span className="font-['Geist'] text-xs font-medium text-[#6E8CFF] tracking-[0.3em] uppercase mb-4 block">
          Why Choose SIDPIN Digital As Your
        </span>
        <h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] font-medium mb-14">
          Best Digital Marketing Partner
        </h2>

        {/* Accordion */}
        <div className="border-t border-white/15">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.title} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-8 text-left cursor-pointer group"
                >
                  <span className="font-['Hanken_Grotesk'] text-[17px] md:text-[19px] font-semibold group-hover:text-[#8FB0FF] transition-colors duration-300">
                    {item.title}
                  </span>
                  {/* plus / minus */}
                  <span className="relative shrink-0 w-[18px] h-[18px]" aria-hidden="true">
                    <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white -translate-y-1/2" />
                    <span
                      className={`absolute left-1/2 top-0 h-full w-[1.5px] bg-white -translate-x-1/2 transition-transform duration-300 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="font-['Inter'] text-[13px] md:text-[14px] leading-[1.8] text-white/75 max-w-[640px] md:ml-[28%] pb-10">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
