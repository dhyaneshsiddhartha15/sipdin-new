/**
 * IndustriesShowcase — bordered card grid of the industries Sidpin serves with AI.
 * Centered heading + intro, then a responsive 4-column grid of cards
 * (outline icon · accent title · short description).
 */

import type { LucideIcon } from "lucide-react";
import {
  HeartPulse,
  ShieldCheck,
  Factory,
  ShoppingCart,
  GraduationCap,
  Utensils,
  Car,
  Building2,
  Gem,
  Dumbbell,
  UtensilsCrossed,
  Newspaper,
  Shirt,
  Plane,
  Clapperboard,
  Landmark,
} from "lucide-react";

type Industry = { name: string; description: string; icon: LucideIcon };

const INDUSTRIES: Industry[] = [
  { name: "Healthcare", description: "AI diagnostics, patient analytics, and clinical workflow automation.", icon: HeartPulse },
  { name: "Insurance", description: "Fraud detection, risk scoring, and claims processing intelligence.", icon: ShieldCheck },
  { name: "Manufacturing", description: "Predictive maintenance, quality control, and smart factory AI.", icon: Factory },
  { name: "E-Commerce", description: "Personalised recommendations, dynamic pricing AI, and inventory demand forecasting.", icon: ShoppingCart },
  { name: "Education", description: "Adaptive learning, intelligent tutoring, and outcome analytics.", icon: GraduationCap },
  { name: "Restaurant", description: "Smart ordering, inventory AI, and customer experience automation.", icon: Utensils },
  { name: "Automobile", description: "Connected vehicle AI, sales intelligence, and service analytics.", icon: Car },
  { name: "Real Estate", description: "Property valuation AI, lead scoring, and market prediction.", icon: Building2 },
  { name: "Luxury", description: "Personalized experiences, customer insights, and brand engagement.", icon: Gem },
  { name: "Sports", description: "Performance analytics, fan engagement, and event management.", icon: Dumbbell },
  { name: "Food & Beverage", description: "Demand forecasting, inventory control, and quality management.", icon: UtensilsCrossed },
  { name: "News", description: "Content personalisation, audience analytics, and AI-powered publishing automation.", icon: Newspaper },
  { name: "Fashion & Retail", description: "Trend forecasting, inventory optimization, and AI-driven customer insight.", icon: Shirt },
  { name: "Tourism", description: "Travel personalization, booking automation, and customer engagement.", icon: Plane },
  { name: "Media & Entertainment", description: "Content recommendations, audience insights, and distribution automation.", icon: Clapperboard },
  { name: "Bank", description: "Fraud detection, risk analysis, and financial process automation.", icon: Landmark },
];

export default function IndustriesShowcase() {
  return (
    <section className="w-full bg-bg py-[72px] md:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-[24px] md:px-[40px]">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="font-semibold leading-[1.1] tracking-tight text-fg"
            style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(30px, 4vw, 46px)" }}
          >
            Industries We Serve with AI{" "}
            <span className="text-fg-2">Development Solutions</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[680px] text-[15px] leading-relaxed text-fg-2 md:text-[16px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            SIDPIN Digital delivers AI development, machine learning, and custom SaaS
            solutions across 16+ industries — helping enterprises in healthcare, fintech,
            manufacturing, e-commerce, education, and more automate operations, reduce
            costs, and accelerate growth.
          </p>
        </div>

        {/* Bordered card grid */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group -mb-px -mr-px border-b border-r border-line bg-surface p-6 transition-colors duration-300 hover:bg-[#4169E1]/[0.04] dark:hover:bg-[#6E8CFF]/[0.06]"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#4169E1]/10 text-[#4169E1] transition-colors duration-300 group-hover:bg-[#4169E1] group-hover:text-white dark:bg-[#6E8CFF]/12 dark:text-[#6E8CFF] dark:group-hover:bg-[#6E8CFF] dark:group-hover:text-[#0a0f1c]">
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden />
                </span>
                <h3
                  className="mb-2 text-[16px] font-semibold text-[#4169E1] dark:text-[#8CA6FF]"
                  style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                >
                  {industry.name}
                </h3>
                <p
                  className="text-[13.5px] leading-relaxed text-fg-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
