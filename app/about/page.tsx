import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Share2, TrendingUp, Clapperboard, Megaphone, LayoutDashboard } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/studio/Reveal";

export const metadata: Metadata = {
  title: "About Us | SIDPIN Digital — Built from curiosity. Driven by purpose.",
  description:
    "The story of SIDPIN Digital — how curiosity, a camera, and three people with different strengths grew into a full-service creative and digital studio.",
};

const WHATSAPP =
  "https://wa.me/917453869244?text=" +
  encodeURIComponent("Hi Sidpin Digital! I'd like to talk about a project.");

const founders = [
  {
    initial: "G",
    name: "Gautam",
    role: "Digital Marketing",
    body: "Gautam focuses on the growth side of SIDPIN — digital marketing, strategy, campaigns and helping businesses reach the right audience.",
    color: "#4169E1",
  },
  {
    initial: "P",
    name: "Preeti",
    role: "Social & Operations",
    body: "Preeti works across social media, communication, planning and operations. She helps turn ideas into consistent execution — from managing digital presence to keeping projects and day-to-day work moving.",
    color: "#0EA5A4",
  },
  {
    initial: "A",
    name: "Anand",
    role: "Creative & Films",
    body: "The visual side of SIDPIN — filmmaking, cinematography, content creation and creative direction. From shooting and editing to developing visual ideas, Anand focuses on creating work that captures attention and tells a story.",
    color: "#7C3AED",
  },
];

const evolution = [
  { icon: Camera, from: "Photography", to: "Videography" },
  { icon: Share2, from: "Content", to: "Social Media" },
  { icon: TrendingUp, from: "Social Media", to: "Marketing" },
];

const needs = [
  {
    icon: Clapperboard,
    text: "A company may need a film — but also a website.",
  },
  {
    icon: Megaphone,
    text: "A brand may need social media — but also a marketing strategy.",
  },
  {
    icon: LayoutDashboard,
    text: "A growing business may need advertising, automation, CRM systems or an application.",
  },
];

const questions = [
  "Who are you?",
  "What are you trying to achieve?",
  "Who are you trying to reach?",
  "And what should happen after someone discovers you?",
];

const stillLearning = [
  "We are still learning.",
  "Still experimenting.",
  "Still making mistakes.",
  "Still finding better ways to do things.",
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
              <h1 className="text-[clamp(34px,4.6vw,58px)] font-extrabold leading-[1.08] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                It started with a camera.
                <br />
                <span className="gradient-text">Then it became something bigger.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <div className="mx-auto mt-10 max-w-[680px] space-y-5 text-[17px] leading-[1.85] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                <p>
                  SIDPIN did not begin as a perfectly planned company. It started with curiosity, a camera, and a willingness to figure things out along the way.
                </p>
                <p>
                  What began with photography and filmmaking gradually turned into real work — creating content, managing social media, helping businesses build their digital presence, and understanding what actually makes a brand work.
                </p>
              </div>
            </Reveal>
          </div>

          {/* One project led to another — evolution cards */}
          <Reveal delay={160}>
            <div className="mx-auto mt-16 max-w-[900px]">
              <p className="text-center text-[20px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                One project led to another.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {evolution.map((e, i) => (
                  <div
                    key={e.from}
                    className="rounded-2xl border border-line bg-surface p-6 text-center premium-shadow transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                      <e.icon size={20} strokeWidth={2} />
                    </span>
                    <p className="mt-4 text-[15px] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                      {e.from}
                    </p>
                    <p className="mt-1 text-[17px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      became {e.to}
                    </p>
                    <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.3em] text-fg-3" style={{ fontFamily: "Geist, sans-serif" }}>
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-[680px] text-center text-[16px] leading-[1.85] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                And eventually, businesses started asking for websites, applications, automation, branding, and complete digital solutions. That is how SIDPIN grew — not from a perfect business plan, but by solving real problems for real businesses.
              </p>
            </div>
          </Reveal>

          {/* October 2023 — the turning point */}
          <Reveal delay={200}>
            <div className="mx-auto mt-16 max-w-[720px] rounded-3xl border border-line bg-surface px-8 py-10 text-center premium-shadow">
              <p className="text-[17px] leading-[1.85] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                In <strong className="font-semibold text-fg">October 2023</strong>, the idea became more serious. Instead of only working on projects for others, we wanted to build something of our own — something that could bring creative production, marketing, technology and strategy together.
              </p>
              <p className="mt-6 text-[clamp(24px,3vw,34px)] font-extrabold tracking-tight" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                <span className="gradient-text">That became SIDPIN Digital.</span>
              </p>
            </div>
          </Reveal>
        </section>

        {/* ============ THE FOUNDERS ============ */}
        <section className="bg-surface-2 px-[24px] py-24 md:px-[80px]">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <div className="text-center">
                <Eyebrow>The founders</Eyebrow>
                <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  Three people. One company.
                  <br />
                  <span className="gradient-text">Different strengths.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.85] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  SIDPIN was built by Gautam, Preeti and Anand — three people brought together by the ambition to build something of their own.
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.85] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  The journey was never completely straightforward — experiments, difficult decisions, long working days, mistakes, disagreements and plenty of learning. But those experiences shaped SIDPIN. Instead of trying to make everyone do everything, we gradually found our own strengths and built the company around them.
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
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
            <Reveal delay={150}>
              <div className="mt-14 text-center">
                <p className="text-[17px] leading-relaxed text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Together, these strengths form the foundation of SIDPIN.
                </p>
                <p className="mt-4 text-[24px] font-extrabold tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  <span style={{ color: "#7C3AED" }}>Creative.</span> <span style={{ color: "#4169E1" }}>Marketing.</span>{" "}
                  <span style={{ color: "#0EA5A4" }}>Operations.</span>
                </p>
                <p className="mt-3 text-[15px] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Different responsibilities, one direction.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ THE NAME ============ */}
        <section className="px-[24px] py-24 md:px-[80px]">
          <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <Eyebrow>The name</Eyebrow>
                <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  Why SIDPIN?
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5 text-[17px] leading-[1.9] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                <p className="text-[19px] font-semibold text-fg">The name is personal.</p>
                <p>
                  SIDPIN comes from two names. <strong className="font-semibold text-fg">Sid</strong> — from Siddhartha.{" "}
                  <strong className="font-semibold text-fg">Pin</strong> — from Pintu, our father&apos;s name.
                </p>
                <p>
                  The name carries something much more personal than a brand identity. It represents where the journey came from and the values we want to carry forward — hard work, responsibility, simplicity and the courage to build something of our own.
                </p>
                <p className="rounded-2xl border-s-4 border-brand bg-surface px-6 py-5 text-fg">
                  For us, SIDPIN is not just a company name. It is a reminder of where we came from, what we are building, and why the work matters.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FROM CREATIVE WORK TO COMPLETE DIGITAL SOLUTIONS ============ */}
        <section className="bg-surface-2 px-[24px] py-24 md:px-[80px]">
          <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <Eyebrow>What we do</Eyebrow>
                <h2 className="text-[clamp(30px,3.6vw,44px)] font-extrabold leading-[1.12] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  From creative work to <span className="gradient-text">complete digital solutions</span>
                </h2>
                <p className="mt-6 text-[16px] leading-[1.85] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  As we worked with more businesses, we realised something simple: businesses rarely need just one thing.
                </p>
                <p className="mt-4 text-[16px] leading-[1.85] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Instead of treating these as completely separate services, we decided to bring them together.
                </p>
                <p className="mt-8 text-[22px] font-extrabold leading-snug text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  Creative. Marketing. Technology.
                  <br />
                  One team. One direction.
                </p>
                <p className="mt-3 text-[15px] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  That is what SIDPIN Digital is building.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5">
                {needs.map((n) => (
                  <div key={n.text} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                      <n.icon size={20} strokeWidth={2} />
                    </span>
                    <p className="pt-1.5 text-[15.5px] leading-relaxed text-fg" style={{ fontFamily: "Inter, sans-serif" }}>
                      {n.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
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
              {[
                { value: "50+", label: "Projects Completed", sub: "Each one built with the same attention regardless of size." },
                { value: "20+", label: "Brands Worked With", sub: "Businesses across industries that needed a partner they could trust." },
                { value: "10M+", label: "Views Generated", sub: "Content that reached people, held attention, and moved businesses forward." },
                { value: "5+", label: "Industries Served", sub: "Hospitality, wellness, real estate, e-commerce, education & more." },
              ].map((s, i) => (
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
          <div className="mx-auto max-w-[820px] text-center">
            <Reveal>
              <Eyebrow>What we believe</Eyebrow>
              <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                Good digital work starts with <span className="gradient-text">understanding.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                <p>
                  We don&apos;t believe in creating something simply because it is trending. Before we create a video, design a website, run an advertisement or build a digital system, we want to understand the business behind it.
                </p>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {questions.map((q, i) => (
                  <div key={q} className="rounded-2xl border border-line bg-surface p-6 text-left">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand" style={{ fontFamily: "Geist, sans-serif" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-[16px] font-semibold leading-snug text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      {q}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[17px] leading-[1.9] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                The answers to those questions shape our work.
              </p>
              <p className="mx-auto mt-8 max-w-[620px] text-[20px] font-semibold leading-snug text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                Because the goal isn&apos;t just to make something look good. <span className="gradient-text">The goal is to make it matter.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ WE'RE STILL BUILDING ============ */}
        <section className="bg-surface-2 px-[24px] py-24 md:px-[80px]">
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <Eyebrow>The journey continues</Eyebrow>
              <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                We&apos;re still building.
              </h2>
              <p className="mt-6 text-[18px] font-semibold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                SIDPIN is still young.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {stillLearning.map((line) => (
                  <span key={line} className="rounded-full border border-line bg-surface px-5 py-2.5 text-[14px] font-semibold text-fg" style={{ fontFamily: "Inter, sans-serif" }}>
                    {line}
                  </span>
                ))}
              </div>
              <div className="mt-10 space-y-5 text-[16px] leading-[1.9] text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                <p>And we are okay with that.</p>
                <p>
                  We would rather build something real than pretend we have already figured everything out. Every project, every client and every challenge adds another chapter to the story.
                </p>
              </div>
              <p className="mt-10 text-[24px] font-extrabold tracking-tight" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                <span className="gradient-text">And this is only the beginning.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ CLOSING ============ */}
        <section className="relative overflow-hidden px-[24px] py-28 md:px-[80px]">
          <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-brand/10 blur-[140px]" />
          <div className="relative mx-auto max-w-[820px] text-center">
            <Reveal>
              <h2 className="text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.06] tracking-tight text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                Built from curiosity.
                <br /> Driven by purpose.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mx-auto mt-10 max-w-[640px] space-y-3 text-[17px] font-semibold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                <p>From a camera to a company.</p>
                <p>From individual projects to complete digital solutions.</p>
                <p>From three people trying to figure things out to a team building something they can call their own.</p>
              </div>
              <p className="mt-12 text-[clamp(28px,3.8vw,44px)] font-extrabold tracking-tight" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                <span className="gradient-text">This is SIDPIN Digital.</span>
              </p>
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
                Let&apos;s have an honest conversation about your project. No unnecessary pitch. No pressure. Just a conversation.
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
