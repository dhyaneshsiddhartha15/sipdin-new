"use client";

import { useEffect, useState } from "react";

type ServiceKey =
  | "content"
  | "web"
  | "growth"
  | "ai"
  | "photo"
  | "crm"
  | "app"
  | "edit";

type Service = {
  title: string;
  desc: string;
  list: string[];
  price: string;
  best: string;
  icon: string;
};

const services: Record<ServiceKey, Service> = {
  content: {
    title: "Content Production",
    desc: "High-end narrative storytelling that moves the needle. We combine cinematic visuals with strategic messaging to create content that captures attention and builds long-term brand equity.",
    list: [
      "4K Cinema Production",
      "Scriptwriting & Strategy",
      "Color Grading & Sound Design",
    ],
    price: "$2,500",
    best: "Luxury Brands, Tech Startups, Personal Brands",
    icon: "movie",
  },
  web: {
    title: "Website Development",
    desc: "Performance-first digital experiences. We build ultra-fast, high-converting websites using modern frameworks like React and Next.js, ensuring your digital presence is as powerful as your physical one.",
    list: [
      "Custom UI/UX Design",
      "Performance Optimization",
      "E-commerce & Web Apps",
    ],
    price: "$5,000",
    best: "SaaS Companies, Service Providers, Enterprise",
    icon: "terminal",
  },
  growth: {
    title: "Growth Marketing",
    desc: "Data-driven scaling. We don't just run ads; we engineer growth systems. From funnel optimization to multi-channel acquisition, we ensure every dollar spent returns maximum value.",
    list: [
      "Paid Media Management",
      "Conversion Rate Optimization",
      "Retention Strategy",
    ],
    price: "$3,000/mo",
    best: "Scale-ups, B2B Labs, DTC Brands",
    icon: "trending_up",
  },
  ai: {
    title: "AI & Automation",
    desc: "The future of efficiency. We implement custom AI workflows and automated systems that reduce overhead, eliminate manual tasks, and allow your team to focus on high-impact creativity.",
    list: [
      "AI Workflow Design",
      "Chatbot Integration",
      "Process Automation",
    ],
    price: "$4,000",
    best: "Efficiency-focused Orgs, High-volume Teams",
    icon: "smart_toy",
  },
  photo: {
    title: "Photography",
    desc: "Visual excellence for your brand assets. From editorial lifestyle shoots to clean commercial product photography, we capture the essence of your brand in every frame.",
    list: ["Brand Portraits", "Product/Commercial", "On-location Shoots"],
    price: "$1,200",
    best: "Founders, Fashion, Product Brands",
    icon: "photo_camera",
  },
  crm: {
    title: "CRM Software",
    desc: "Customer relationship management tailored to your specific business flow. We build and integrate custom CRMs that track leads, automate follow-ups, and simplify your sales pipeline.",
    list: [
      "Pipeline Automation",
      "Data Dashboards",
      "Sales Flow Optimization",
    ],
    price: "$6,000",
    best: "Sales Teams, Service Agencies",
    icon: "hub",
  },
  app: {
    title: "App Development",
    desc: "Mobile-first software solutions. We build native and cross-platform apps that solve real user problems and create seamless interactions on any device.",
    list: ["iOS & Android Dev", "User Flow Mapping", "Cloud Infrastructure"],
    price: "$12,000",
    best: "Startup Founders, Tech Innovators",
    icon: "phone_iphone",
  },
  edit: {
    title: "Video Editing",
    desc: "Professional post-production for maximum impact. We turn raw footage into cinematic masterpieces with precision cutting, motion graphics, and premium sound layering.",
    list: [
      "Narrative Editing",
      "Motion Graphics",
      "Vertical Video Assets",
    ],
    price: "$1,500",
    best: "YouTubers, Agencies, Course Creators",
    icon: "video_settings",
  },
};

const serviceOrder: ServiceKey[] = [
  "content",
  "web",
  "growth",
  "ai",
  "photo",
  "crm",
  "app",
  "edit",
];

export default function ServiceExplorer() {
  const [active, setActive] = useState<ServiceKey>("content");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  const switchService = (key: ServiceKey) => {
    if (key === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(key);
      setVisible(true);
    }, 300);
  };

  const current = services[active];

  return (
    <section className="py-[160px] bg-surface relative" id="explorer">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.2em] uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-fg">
              Choose What You Need
            </h2>
          </div>
          <p className="font-['Inter'] text-fg-2 max-w-sm opacity-60">
            Browse our core specialized pillars of creative and technical
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {serviceOrder.map((key) => {
            const service = services[key];
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => switchService(key)}
                className={`group glass-card p-8 aspect-square flex flex-col justify-between text-left transition-all duration-500 cursor-pointer ${
                  isActive ? "service-active" : "hover:border-[#4169E1]/50"
                }`}
              >
                <span className="material-symbols-outlined text-[#4169E1] text-4xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <h3 className="font-['Hanken_Grotesk'] text-xl md:text-2xl font-medium text-fg">
                  {service.title}
                </h3>
              </button>
            );
          })}
        </div>

        <div
          className={`transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <div className="glass-card p-8 md:p-12 lg:p-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h3 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-fg">
                {current.title}
              </h3>
              <p className="font-['Inter'] text-lg leading-[1.6] text-fg-2">
                {current.desc}
              </p>
              <div className="space-y-4">
                <span className="font-['Geist'] text-xs font-medium uppercase tracking-[0.2em] text-[#4169E1] block">
                  What&apos;s Included
                </span>
                <ul className="space-y-3">
                  {current.list.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#4169E1] text-sm">
                        check_circle
                      </span>
                      <span className="font-['Inter'] text-fg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-surface p-8 md:p-10 border border-white/5 space-y-8 flex flex-col justify-center">
              <div>
                <span className="font-['Geist'] text-xs text-fg-2 uppercase block mb-2">
                  Starting Investment
                </span>
                <div className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium text-[#4169E1]">
                  {current.price}{" "}
                  <span className="font-['Inter'] text-base text-fg-2">
                    / Project
                  </span>
                </div>
              </div>
              <div>
                <span className="font-['Geist'] text-xs text-fg-2 uppercase block mb-2">
                  Best For
                </span>
                <p className="font-['Inter'] text-fg">{current.best}</p>
              </div>
              <button
                type="button"
                className="w-full bg-[#4169E1] text-[#FFFFFF] py-5 font-['Geist'] text-xs font-medium uppercase tracking-[0.2em] hover:brightness-110 transition-all"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
