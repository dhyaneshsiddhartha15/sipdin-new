import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/studio/Reveal";

export const metadata: Metadata = {
  title: "About Us | SIDPIN Digital — Built from curiosity. Driven by purpose.",
  description:
    "The story of Sidpin Digital — how a curiosity for photography grew into a full-service creative and digital-marketing studio built by two brothers, Gautam and Anand.",
};

const WHATSAPP =
  "https://wa.me/917453869244?text=" +
  encodeURIComponent("Hi Sidpin Digital! I'd like to talk about a project.");

const founders = [
  {
    initial: "G",
    name: "Gautam",
    role: "Digital Marketing",
    body: "Leads the digital marketing side — strategy, growth, campaigns, and making sure the right people find the right businesses at the right time.",
    color: "#4169E1",
  },
  {
    initial: "A",
    name: "Anand",
    role: "Creative & Films",
    body: "Leads the creative side — filmmaking, design, content, and brand storytelling. The kind of work that makes people stop scrolling.",
    color: "#7C3AED",
  },
  {
    initial: "P",
    name: "Preeti",
    role: "Social & Operations",
    body: "Joined early on, leading social media management and keeping day-to-day operations running with clarity and consistency.",
    color: "#0EA5A4",
  },
];

const stats = [
  { value: "50+", label: "Projects Completed", sub: "Each one built with the same attention regardless of size." },
  { value: "20+", label: "Brands Worked With", sub: "Businesses across industries that needed a partner they could trust." },
  { value: "10M+", label: "Views Generated", sub: "Content that reached people, held attention, and moved businesses forward." },
  { value: "5+", label: "Industries Served", sub: "Hospitality, wellness, real estate, e-commerce, education & more." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brand" style={{ fontFamily: "Geist, sans-serif" }}>
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg">
        {/* ============ HERO — OUR STORY ============ */}
        <section className="relative overflow-hidden px-[24px] pb-24 pt-40 md:px-[80px] md:pt-48">
          <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-brand/10 blur-[140px]" />
          <div className="relative mx-auto max-w-[900px] text-center">
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
              <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.04] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                Built from curiosity.
                <br /> Driven by purpose.
              </h1>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mx-auto mt-14 max-w-[720px] space-y-6 text-[17px] leading-[1.9] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
              <p className="text-[22px] font-semibold leading-snug text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                It started with a camera.
              </p>
              <p>
                What began as a quiet interest in photography during school years slowly became something more — a serious pursuit of visual storytelling. That curiosity led to learning filmmaking professionally, and eventually to a first real opportunity: handling digital content and social media for a resort.
              </p>
              <p>
                That experience changed everything. It made one thing clear — businesses that show up well digitally grow faster, connect deeper, and stand apart. That insight became the foundation of everything Sidpin does today.
              </p>
              <p>
                Freelance work followed — photography, videography, social media management, content creation. And as more businesses came with more needs, the work expanded into website development, apps, automation, and full digital systems.
              </p>
              <p>
                After years of learning, building, and growing — in <strong className="font-semibold text-fg">October 2023</strong>, the decision was made to stop working for others and start building something of their own.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ============ THE NAME ============ */}
        <section className="bg-surface-2 px-[24px] py-24 md:px-[80px]">
          <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <Eyebrow>The name</Eyebrow>
                <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  Why Sidpin?
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5 text-[17px] leading-[1.9] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                <p className="text-[19px] font-semibold text-fg">The name is personal.</p>
                <p>
                  Sidpin is a combination of two names — <strong className="font-semibold text-fg">Sid</strong> from Siddhartha, and <strong className="font-semibold text-fg">Pin</strong> from Pintu, the name of our father. His values, his work ethic, and the quiet way he carried himself continue to shape how we approach every project.
                </p>
                <p className="rounded-2xl border-s-4 border-brand bg-surface px-6 py-5 text-fg">
                  Sidpin Digital is not just a brand name. It is a tribute, a commitment, and a daily reminder of why we started.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ THE FOUNDERS ============ */}
        <section className="px-[24px] py-24 md:px-[80px]">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <div className="mb-12 text-center">
                <Eyebrow>The founders</Eyebrow>
                <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  Two brothers. One vision.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Sidpin Digital was founded by Gautam and Anand — two brothers whose strengths sit on opposite ends of the same goal. Together they built Sidpin around a simple belief: that great creative work and smart digital strategy should never be separated.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {founders.map((f, i) => (
                <Reveal key={f.name} delay={i * 120}>
                  <div className="h-full rounded-2xl border border-line bg-surface p-7 transition-transform duration-300 hover:-translate-y-1.5">
                    <span className="grid h-14 w-14 place-items-center rounded-xl text-[20px] font-extrabold text-white" style={{ background: f.color, fontFamily: "Hanken Grotesk, sans-serif" }}>
                      {f.initial}
                    </span>
                    <h3 className="mt-5 text-[22px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      {f.name}
                    </h3>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.15em]" style={{ color: f.color, fontFamily: "Geist, sans-serif" }}>
                      {f.role}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BY THE NUMBERS ============ */}
        <section className="bg-[#0d0a24] px-[24px] py-24 text-white md:px-[80px]">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <div className="mb-12 text-center">
                <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#9db4ff]" style={{ fontFamily: "Geist, sans-serif" }}>
                  By the numbers
                </span>
                <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  A few things we&apos;re proud of.
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                    <div className="text-[44px] font-extrabold leading-none tracking-tight text-white" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      {s.value}
                    </div>
                    <div className="mt-3 text-[15px] font-bold text-white" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      {s.label}
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/55" style={{ fontFamily: "Inter, sans-serif" }}>
                      {s.sub}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHAT WE BELIEVE ============ */}
        <section className="px-[24px] py-24 md:px-[80px]">
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <Eyebrow>What we believe</Eyebrow>
              <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                How we think about work.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                <p>
                  Good digital work is not about trends. It is about understanding a business deeply enough to represent it honestly — online, on screen, and in every piece of content that carries its name.
                </p>
                <p>
                  We take on projects we believe in. We work with businesses that are serious about where they&apos;re going. And we hold ourselves to the same standard we&apos;d want if we were the client.
                </p>
                <p className="text-[20px] font-semibold leading-snug text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  We&apos;re still early in this journey. But we&apos;re building it the right way — with intention, with craft, and with the values we were raised on.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="px-[24px] pb-28 md:px-[80px]">
          <div className="mx-auto max-w-[1100px]">
            <div className="rounded-3xl bg-[#111318] px-8 py-16 text-center text-white md:px-16">
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold leading-tight" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                Want to know if we&apos;re the right fit?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[16px] text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                Let&apos;s have an honest conversation about your project. No pitch. No pressure.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-[15px] font-bold text-white transition-transform duration-300 hover:scale-[1.04]"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Message us on WhatsApp
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/60"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  See our work →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
