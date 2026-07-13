"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import CustomSolutionForm from "@/components/services/CustomSolutionForm";

const reviews = [
  {
    quote:
      "Sidpin took our 70-year Rudraksha legacy online with complete authenticity. Our sales and customer trust have never been stronger.",
    name: "Avish Bansal",
    role: "Rudradharma",
  },
  {
    quote:
      "Our brand finally looks as strong as our training. Enquiries went up the moment the new site went live — great work team.",
    name: "Ankit Rawat",
    role: "AG Fitness",
  },
  {
    quote:
      "They understood our vision instantly and turned it into a calm, beautiful digital experience. Our bookings keep growing month on month.",
    name: "Rohan Rawat",
    role: "Yog Adhyayan",
  },
  {
    quote:
      "On a lean budget they delivered a website that competes with global hospitality brands. Prospective students notice the difference immediately.",
    name: "Shubham Rayal",
    role: "Raboche Institute of Technology & Management",
  },
  {
    quote:
      "Sidpin captured the spirit of our journeys perfectly. The content and reach they created brought in a whole new audience.",
    name: "Akshat Trivedi",
    role: "Panchbhootyatra",
  },
  {
    quote:
      "Professional, transparent, and genuinely invested in our mission. The results spoke for themselves within weeks.",
    name: "Anuj Dhasmana",
    role: "Rescue by Anuj",
  },
  {
    quote:
      "Our bookings and online presence transformed completely. Guests now find and trust us before they ever arrive.",
    name: "Krishna Singh Rawat",
    role: "Mazri Grant Resort",
  },
];

export default function ReviewsAndConnect(_props: { currentService?: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % reviews.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const review = reviews[active];

  return (
    <section className="bg-surface px-6 py-[120px] md:px-[80px] overflow-hidden">
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

        {/* Right — connect form (shared /services form card) */}
        <div>
          <div className="mb-16 text-center">
            <h3 className="font-['Hanken_Grotesk'] text-[26px] font-semibold leading-snug">
              Connect with our{" "}
              <span className="text-[#4169E1]">Digital Marketing Experts</span>
            </h3>
            <span className="mt-4 inline-block h-[3px] w-14 rounded-full bg-[#4169E1]" />
          </div>
          <CustomSolutionForm />
        </div>
      </div>
    </section>
  );
}
