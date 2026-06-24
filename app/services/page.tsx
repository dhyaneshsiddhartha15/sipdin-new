import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceExplorer from "@/components/services/ServiceExplorer";

export const metadata: Metadata = {
  title: "Services | SIDPIN Creative Co.",
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
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida/AP1WRLupNehXn4swJZpRPVkNy87OrV0Mpb4ok2dhc6p_5HIm74TidGbODUyq8Hk9bbTt6i0AC_X28mFT1mW5H8JzHdEEMUIys85Gn0TSWRvJ91SehN30BKDV2f98WGgX2umLgmy90xzQJY_IJhHJWA1PSQwH4WN_1Z3DkLF8dQsA-XyMOj7VvxfvTL_UlOjTXqmu89BYgrWrr8a7qQ3DxT69C7o0cEReTVkpF72WSTKcyzfMmUH1cOJfhgA2LILF')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111415]/50 to-[#111415]" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-[24px] md:px-[80px] text-center">
            <span className="font-['Geist'] text-xs font-medium tracking-[0.4em] uppercase text-[#e9c349] mb-6 block">
              Precision Engineered Success
            </span>
            <h1 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-[1.1] tracking-tight text-[#e2e2e4] mb-8 max-w-4xl mx-auto">
              Solutions Built Around Your Growth.
            </h1>
            <p className="font-['Inter'] text-lg leading-[1.6] text-[#cfc4c5] max-w-2xl mx-auto mb-12 opacity-80">
              From cinematic content production to custom business systems, every
              solution is designed to help your business attract attention,
              build trust, and grow.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="/work"
                className="bg-[#e9c349] text-[#342800] px-10 py-5 font-['Geist'] text-xs font-medium uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-xl"
              >
                View Work
              </a>
              <button
                type="button"
                className="border border-white/20 text-[#e2e2e4] px-10 py-5 font-['Geist'] text-xs font-medium uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all duration-500"
              >
                Start A Project
              </button>
            </div>
          </div>
        </section>

        <ServiceExplorer />

        {/* Custom Solutions */}
        <section className="py-[160px] relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjW1ei3cYG_L0yFA85OvbV9ISSoF5e2Pe39FBbcWZny8CZNOzGYm1uGUIi9faaT1trABG5Z8T21ToYCRAW5nvXFgZYVWVD5H7x6IZKYxHrhsXWC6ycmPdMApLfq6DusrYv5LPHVkK3XjihW8d-mmIotpBOWYRPtt8gKh-AnO1f28hfBFZEsH3C3G5juZRqxwAEU6Y23AzzyQZ-o3WylxtFfK3oSHu7sf6cOMY-J-x-SqJ6zJOKaypGP1jRgZtKFQtQtNwE_5n3B2Am')",
            }}
          />
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] relative z-10">
            <div className="grid md:grid-cols-2 gap-[80px] items-center">
              <div>
                <span className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.2em] uppercase mb-4 block">
                  Bespoke Engineering
                </span>
                <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-[#e2e2e4] mb-8">
                  Need Something Custom?
                </h2>
                <p className="font-['Inter'] text-lg leading-[1.6] text-[#cfc4c5] mb-12">
                  Every business is different. We don&apos;t believe in
                  one-size-fits-all. Our custom solutions are tailored to your
                  specific goals, industry, and growth stage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {customSolutions.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 glass-card p-4"
                    >
                      <span className="material-symbols-outlined text-[#e9c349]">
                        {item.icon}
                      </span>
                      <span className="font-['Geist'] text-xs font-medium tracking-wide text-[#e2e2e4]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="bg-[#e2e2e4] text-[#111415] px-10 py-5 font-['Geist'] text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#e9c349] hover:text-[#342800] transition-all"
                >
                  Request Custom Solution
                </button>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-[#e9c349] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                <img
                  className="relative z-10 w-full rounded-xl grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgNItaGEiJsyLVOq3QnNrpM9SRRH5CJSdmyV2GE041Vu4NpkPzy2rqvDQd_UYjN8ns_VW9azzGtuDlLGW1lGcY4PKA5YzCUVLfjqA17UREA3-1Xq1sNLLkJb2OzKc9EsGWMSrONk-2bL8pIY_nYGLf7X8IDoOvrs6lvnVj9y0n_3jS-LtmZxuS7QB9JZpEbVV9Jfem6AbTB3Zu7T_PuP098fdDDQ6uc3lwCn_J-eNBi1vGy195ENtoacsu5HJKZj8Uk-r7-TPtACor"
                  alt="Custom engineering and bespoke technical craftsmanship"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-[160px] bg-[#111415] overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
            <div className="text-center mb-24">
              <span className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.2em] uppercase mb-4 block">
                The Process
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-[#e2e2e4]">
                How We Work
              </h2>
            </div>
            <div className="relative workflow-line flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4">
              {workflowSteps.map((step) => (
                <div
                  key={step.num}
                  className="relative z-10 flex flex-col items-center text-center md:w-1/6 group"
                >
                  <div className="w-12 h-12 bg-[#111415] border border-[#e9c349]/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e9c349] group-hover:scale-110 transition-all duration-500">
                    <span className="text-[#e9c349] group-hover:text-[#111415] font-bold text-sm">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="font-['Geist'] text-xs font-medium uppercase tracking-[0.2em] text-[#e2e2e4] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#cfc4c5] opacity-60">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-[200px] relative overflow-hidden bg-[#111415]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] text-center relative z-10">
            <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-[1.1] tracking-tight text-[#e2e2e4] mb-8 max-w-5xl mx-auto">
              Let&apos;s Build The Right Solution For Your Business.
            </h2>
            <p className="font-['Inter'] text-lg leading-[1.6] text-[#cfc4c5] max-w-3xl mx-auto mb-16">
              Whether you need content, software, marketing, or a complete
              business ecosystem, we&apos;ll help you create a solution that fits
              your goals.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button
                type="button"
                className="bg-[#e9c349] text-[#342800] px-12 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:shadow-2xl transition-all"
              >
                Book A Discovery Call
              </button>
              <button
                type="button"
                className="bg-transparent border border-white/20 text-[#e2e2e4] px-12 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:bg-white/5 transition-all"
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
