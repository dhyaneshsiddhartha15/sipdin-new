import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExpertiseGrid from "@/components/home/ExpertiseGrid";
import CampaignTypes from "@/components/services/CampaignTypes";
import CustomSolutionForm from "@/components/services/CustomSolutionForm";

export const metadata: Metadata = {
  title: "Services | SIDPIN Digital",
  description:
    "From cinematic content production to custom business systems, every solution is designed to help your business attract attention, build trust, and grow.",
};

const workflowSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Audit and deep dive into your goals.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Mapping the roadmap to ROI.",
  },
  {
    num: "03",
    title: "Production",
    desc: "Creating high-end cinematic assets.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Building the technical engine.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "Deploying your new ecosystem.",
  },
  {
    num: "06",
    title: "Growth",
    desc: "Iterative scaling and support.",
  },
];

const customSolutions = [
  { icon: "terminal", label: "Custom Software" },
  { icon: "database", label: "ERP Systems" },
  { icon: "calendar_today", label: "Booking Platforms" },
  { icon: "api", label: "API Integrations" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — cream, centered, yellow-underline (brandwitty style) */}
        <section className="relative bg-[#F2F6FF] pt-[190px] pb-[130px] px-[24px] overflow-hidden">
          {/* Scattered colored dots */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden md:block">
            <span className="absolute top-[28%] left-[20%] w-3 h-3 rounded-full bg-[#8FB0FF]" />
            <span className="absolute top-[25%] left-[22%] w-1.5 h-1.5 rounded-full bg-[#4169E1]" />
            <span className="absolute top-[52%] left-[15%] w-3 h-3 rounded-full bg-[#2E4FB8]" />
            <span className="absolute top-[49%] left-[16.5%] w-1.5 h-1.5 rounded-full bg-[#4169E1]" />
            <span className="absolute top-[36%] right-[22%] w-3 h-3 rounded-full bg-[#8FB0FF]" />
            <span className="absolute top-[33%] right-[21%] w-1.5 h-1.5 rounded-full bg-[#4169E1]" />
            <span className="absolute top-[47%] right-[16%] w-3.5 h-3.5 rounded-full bg-[#2E4FB8]" />
            <span className="absolute top-[44%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#4169E1]" />
          </div>

          <div className="relative z-10 max-w-[900px] mx-auto text-center">
            <span className="font-['Geist'] text-xs font-medium tracking-[0.4em] uppercase text-[#4169E1] mb-6 block">
              Precision Engineered Success
            </span>
            <h1 className="font-['Hanken_Grotesk'] text-[clamp(40px,5.5vw,68px)] font-semibold leading-[1.15] tracking-tight text-[#1A1A1A] mb-8">
              Solutions Built Around{" "}
              <span className="underline decoration-[#4169E1] decoration-[5px] underline-offset-[10px]">
                Your Growth.
              </span>
            </h1>
            <p className="font-['Inter'] text-[17px] leading-[1.8] text-[#555555] max-w-[620px] mx-auto mb-12">
              From cinematic content production to{" "}
              <strong className="text-[#1A1A1A]">custom business systems</strong>,
              every solution is designed to help your business attract
              attention, build trust, and grow.
            </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
              <a
                href="/contact"
                className="bg-[#4169E1] text-white px-9 py-4 font-['Inter'] text-[15px] font-semibold rounded-[6px] hover:bg-[#2E4FB8] hover:scale-[1.03] transition-all duration-300 shadow-[0_10px_30px_rgba(65,105,225,0.35)]"
              >
                Start A Project
              </a>
              <a
                href="/case-studies"
                className="bg-white border border-[#d7e0f7] text-[#1A1A1A] px-9 py-4 font-['Inter'] text-[15px] font-semibold rounded-[6px] hover:border-[#4169E1]/50 transition-all duration-300 inline-flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
                View Our Work
              </a>
            </div>
          </div>
        </section>

        <ExpertiseGrid />

        {/* Campaign types */}
        <CampaignTypes />

        {/* Custom Solutions — light band with request form */}
        <section className="py-[140px] bg-[#F2F6FF] overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
            <div className="grid md:grid-cols-2 gap-[80px] items-center">
              <div>
                <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.2em] uppercase mb-4 block">
                  Bespoke Engineering
                </span>
                <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-[#1A1A1A] mb-8">
                  Need Something Custom?
                </h2>
                <p className="font-['Inter'] text-lg leading-[1.6] text-[#555555] mb-12">
                  Every business is different. We don&apos;t believe in
                  one-size-fits-all. Our custom solutions are tailored to your
                  specific goals, industry, and growth stage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {customSolutions.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 bg-white border border-[#dfe6f7] rounded-lg p-4 shadow-[0_10px_30px_-20px_rgba(65,105,225,0.35)]"
                    >
                      <span className="material-symbols-outlined text-[#4169E1]">
                        {item.icon}
                      </span>
                      <span className="font-['Geist'] text-xs font-medium tracking-wide text-[#1A1A1A]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <CustomSolutionForm />
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-[160px] bg-surface overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
            <div className="text-center mb-24">
              <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.2em] uppercase mb-4 block">
                The Process
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-fg">
                How We Work
              </h2>
            </div>
            <div className="relative workflow-line flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4">
              {workflowSteps.map((step) => (
                <div
                  key={step.num}
                  className="relative z-10 flex flex-col items-center text-center md:w-1/6 group"
                >
                  <div className="w-12 h-12 bg-surface border border-[#4169E1]/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4169E1] group-hover:scale-110 transition-all duration-500">
                    <span className="text-[#4169E1] group-hover:text-[#FFFFFF] font-bold text-sm">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="font-['Geist'] text-xs font-medium uppercase tracking-[0.2em] text-fg mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-fg-2 opacity-60">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-[200px] relative overflow-hidden bg-surface">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] text-center relative z-10">
            <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-[1.1] tracking-tight text-fg mb-8 max-w-5xl mx-auto">
              Let&apos;s Build The Right Solution For Your Business.
            </h2>
            <p className="font-['Inter'] text-lg leading-[1.6] text-fg-2 max-w-3xl mx-auto mb-16">
              Whether you need content, software, marketing, or a complete
              business ecosystem, we&apos;ll help you create a solution that fits
              your goals.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button
                type="button"
                className="bg-[#4169E1] text-[#FFFFFF] px-12 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:shadow-2xl transition-all"
              >
                Book A Discovery Call
              </button>
              <button
                type="button"
                className="bg-transparent border border-white/20 text-fg px-12 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:bg-surface/5 transition-all"
              >
                Request A Proposal
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
