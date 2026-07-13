import type { Metadata } from "next";
import Link from "next/link";
import { Check, Wand2, ShieldCheck, Activity, LayoutDashboard, Headphones, Quote, Info, type LucideIcon } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ComparePlans from "@/components/pricing/ComparePlans";
import { PERKS, TESTIMONIALS, INCLUDED } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing | SIDPIN Digital",
  description:
    "Simple, transparent pricing. Compare Sidpin plans and see exactly what you get — websites, storage, support, AI tools, SSL and more.",
};

const ICONS: Record<string, LucideIcon> = {
  builder: Wand2,
  security: ShieldCheck,
  uptime: Activity,
  dashboard: LayoutDashboard,
  support: Headphones,
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg">
        {/* Hero */}
        <section className="mx-auto max-w-[1200px] px-[24px] pb-8 pt-36 text-center md:px-[40px] md:pt-44">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brand" style={{ fontFamily: "Geist, sans-serif" }}>
            Pricing
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-[40px] font-extrabold leading-[1.05] tracking-tight text-fg md:text-[64px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            Plans that scale with you.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
            Find the perfect balance of features, performance, and affordability — no surprises, no lock-in.
          </p>
        </section>

        {/* Perks — no extra cost */}
        <section className="mx-auto max-w-[1100px] px-[24px] py-10 md:px-[40px]">
          <div className="rounded-3xl border border-line bg-surface p-8 md:p-10">
            <h2 className="text-center text-[24px] font-bold text-fg md:text-[30px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              Enjoy all this. At no extra cost.
            </h2>
            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {PERKS.map((perk) => (
                <div key={perk} className="flex items-center gap-3 text-[15px] font-medium text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Check size={18} className="shrink-0 text-emerald-500" strokeWidth={2.5} />
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare plans */}
        <section className="mx-auto max-w-[1200px] px-[24px] pb-24 pt-14 md:px-[40px]">
          <div className="mb-10 text-center">
            <h2 className="text-[32px] font-extrabold tracking-tight text-fg md:text-[44px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              Compare our plans
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[16px] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
              See at a glance what each plan costs and what you get for your money.
            </p>
          </div>
          <ComparePlans />

          {/* Fair-usage disclaimer */}
          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-line bg-surface-2 px-5 py-4">
            <Info size={18} className="mt-0.5 shrink-0 text-brand" />
            <p className="text-[13.5px] leading-relaxed text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Unlimited features are subject to our{" "}
              <Link href="/fair-usage-policy" className="font-semibold text-brand underline decoration-brand/40 underline-offset-2 hover:decoration-brand">
                Fair Usage Policy
              </Link>
              . All plans are paid upfront. The monthly rate reflects the total plan price divided by the number of months in your plan.
            </p>
          </div>

          {/* CRM callout */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-line bg-surface px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-[18px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                Looking for a custom CRM?
              </h3>
              <p className="mt-1 text-[14px] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                We build Starter, Business &amp; Enterprise CRM solutions from $499. Tell us your workflow.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-fg px-6 py-3 text-[14px] font-bold text-bg transition-transform duration-300 hover:scale-[1.04]"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              Talk to us
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-surface-2">
          <div className="mx-auto max-w-[1200px] px-[24px] py-24 md:px-[40px]">
            <h2 className="mb-12 text-center text-[30px] font-extrabold tracking-tight text-fg md:text-[40px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              Trusted by growing brands worldwide
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-2xl border border-line bg-surface p-7">
                  <Quote size={26} className="text-brand" />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6">
                    <span className="block text-[15px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      {t.name}
                    </span>
                    <span className="text-[13px] text-fg-3" style={{ fontFamily: "Inter, sans-serif" }}>
                      {t.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Included with every plan */}
        <section className="mx-auto max-w-[1200px] px-[24px] py-24 md:px-[40px]">
          <h2 className="mb-12 text-center text-[30px] font-extrabold tracking-tight text-fg md:text-[40px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            Included with every plan
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item) => {
              const Icon = ICONS[item.icon] ?? Check;
              return (
                <div key={item.title} className="rounded-2xl border border-line bg-surface p-7 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(65,105,225,0.4)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-[19px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1200px] px-[24px] pb-28 md:px-[40px]">
          <div className="rounded-3xl bg-[#111318] px-8 py-14 text-center text-white md:px-16">
            <h2 className="text-[28px] font-extrabold md:text-[38px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              Not sure which plan fits?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
              Tell us about your project and we&apos;ll recommend the right plan — free, no pressure.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-[15px] font-bold text-black transition-transform duration-300 hover:scale-[1.04]"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              Get started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
