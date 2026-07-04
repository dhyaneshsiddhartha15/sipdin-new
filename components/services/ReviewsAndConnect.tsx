"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { serviceCategories } from "@/lib/services";

const reviews = [
  {
    quote:
      "SIDPIN Digital built us a website that actually converts. The team's coordination and attention to detail stood out from day one — in a market full of unreliable agencies, they simply delivered. Great work team!",
    name: "Mohd. Arif",
    role: "CEO, Zoya Clothing",
  },
  {
    quote:
      "Our social media presence went from invisible to unmissable. Consistent posting, real engagement, and a strategy that brought actual enquiries — not just likes. Highly recommended.",
    name: "Ritika Sharma",
    role: "Founder, Wellness Studio",
  },
  {
    quote:
      "The CRM they built organized our entire admission pipeline. Follow-ups that used to slip through the cracks now happen automatically. Our team saves hours every single day.",
    name: "Deepak Verma",
    role: "Director, Coaching Institute",
  },
  {
    quote:
      "From the brand film to the landing page, everything felt premium and connected. Leads started coming in within weeks of launch. A true growth partner, not just a vendor.",
    name: "Ananya Iyer",
    role: "Co-founder, D2C Skincare Brand",
  },
  {
    quote:
      "Professional, transparent, and fast. They rebuilt our store, tightened our ads, and our revenue reflects it. The monthly reporting alone is worth it — we finally know what's working.",
    name: "Rahul Khanna",
    role: "Owner, Home Decor E-commerce",
  },
];

const allServices = serviceCategories.flatMap((cat) =>
  cat.services.map((s) => s.name)
);

export default function ReviewsAndConnect({
  currentService,
}: {
  currentService: string;
}) {
  const [active, setActive] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % reviews.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const review = reviews[active];

  return (
    <section className="bg-surface px-6 py-[120px] md:px-[80px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-14 lg:grid-cols-2">
        {/* Left — testimonial carousel */}
        <div>
          <span className="font-['Geist'] mb-4 block text-xs font-medium uppercase tracking-[0.4em] text-[#4169E1]">
            Testimonials
          </span>
          <h2 className="font-['Hanken_Grotesk'] mb-12 text-[36px] font-medium md:text-[48px]">
            Review From <span className="text-[#4169E1]">Clients</span>
          </h2>

          <div className="glass-card relative rounded-2xl border border-line/30 p-10 md:p-12">
            <Quote
              size={44}
              className="absolute right-8 top-8 text-[#4169E1]/20"
              aria-hidden="true"
            />
            <div className="mb-6 flex gap-1" aria-label="5 star rating">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[#FBBC05] text-[#FBBC05]"
                />
              ))}
            </div>
            {/* key remounts content so the fade replays on each slide */}
            <div key={active} className="animate-[fadeInUp_0.5s_ease-out]">
              <p className="font-['Inter'] mb-10 min-h-[150px] text-lg italic leading-relaxed text-fg-2">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-gradient-to-br from-[#2E4FB8] to-[#6E8CFF] font-['Hanken_Grotesk'] text-lg font-bold text-white">
                  {review.name[0]}
                </span>
                <span>
                  <span className="block font-['Hanken_Grotesk'] text-lg font-semibold text-fg">
                    {review.name}
                  </span>
                  <span className="block font-['Inter'] text-sm text-fg-3">
                    {review.role}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex gap-2.5">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                aria-label={`Show review ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-7 bg-[#4169E1]"
                    : "w-2 bg-fg/20 hover:bg-fg/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right — connect form */}
        <div className="glass-card rounded-2xl border border-line/40 p-8 md:p-10">
          {submitted ? (
            <div className="py-20 text-center">
              <span className="material-symbols-outlined mb-4 text-5xl text-[#4169E1]">
                check_circle
              </span>
              <h3 className="font-['Hanken_Grotesk'] mb-3 text-2xl font-semibold">
                Thank you!
              </h3>
              <p className="font-['Inter'] text-fg-2">
                Our experts will reach out to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5"
            >
              <div className="mb-2 text-center">
                <h3 className="font-['Hanken_Grotesk'] text-[26px] font-semibold leading-snug">
                  Connect with our{" "}
                  <span className="text-[#4169E1]">Digital Marketing Experts</span>
                </h3>
                <span className="mt-4 inline-block h-[3px] w-14 rounded-full bg-[#4169E1]" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Name *"
                  suppressHydrationWarning
                  className="w-full rounded-lg border border-line bg-surface px-4 py-3.5 font-['Inter'] text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-[#4169E1]"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  suppressHydrationWarning
                  className="w-full rounded-lg border border-line bg-surface px-4 py-3.5 font-['Inter'] text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-[#4169E1]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile No. *"
                  suppressHydrationWarning
                  className="w-full rounded-lg border border-line bg-surface px-4 py-3.5 font-['Inter'] text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-[#4169E1]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  suppressHydrationWarning
                  className="w-full rounded-lg border border-line bg-surface px-4 py-3.5 font-['Inter'] text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-[#4169E1]"
                />
              </div>

              <select
                defaultValue={currentService}
                suppressHydrationWarning
                className="w-full appearance-none rounded-lg border border-line bg-surface px-4 py-3.5 font-['Inter'] text-sm text-fg outline-none transition-colors focus:border-[#4169E1]"
              >
                {allServices.map((name) => (
                  <option key={name} value={name} className="bg-surface">
                    {name}
                  </option>
                ))}
              </select>

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                suppressHydrationWarning
                className="w-full resize-none rounded-lg border border-line bg-surface px-4 py-3.5 font-['Inter'] text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-[#4169E1]"
              />

              <button
                type="submit"
                suppressHydrationWarning
                className="rounded-full py-4 font-['Geist'] text-xs font-semibold uppercase tracking-[0.2em] text-white transition-transform hover:scale-[1.02]"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,#2E4FB8 0%,#4169E1 45%,#6E8CFF 100%)",
                }}
              >
                Submit Now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
