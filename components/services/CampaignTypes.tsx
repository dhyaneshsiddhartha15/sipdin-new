const campaigns = [
  {
    title: "Ecommerce Conversions",
    desc: "Personalized campaigns that boost sales. SIDPIN delivers tailored marketing for measurable revenue growth.",
    icon: "trending_up",
    iconColor: "#1B7A4E",
    tileBg: "#E8F4EE",
  },
  {
    title: "Lead Generation Campaigns",
    desc: "Contextual targeting for quality leads. SIDPIN drives better connections and higher conversions.",
    icon: "group_add",
    iconColor: "#E2574C",
    tileBg: "#FDE9E7",
  },
  {
    title: "App Install Campaigns",
    desc: "Empower your apps with actionable performance campaigns that put your product on every home screen.",
    icon: "install_mobile",
    iconColor: "#6366F1",
    tileBg: "#ECEDFD",
  },
  {
    title: "Brand Awareness Campaigns",
    desc: "Build genuine connections with targeted marketing. SIDPIN drives impactful brand recognition.",
    icon: "campaign",
    iconColor: "#3B82F6",
    tileBg: "#E7F1FB",
  },
];

export default function CampaignTypes() {
  return (
    <section className="relative bg-white py-[120px] px-[24px] md:px-[64px] overflow-hidden">
      {/* Faint vertical column lines */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden lg:block">
        <span className="absolute top-0 bottom-0 left-[25%] w-px bg-[#f0ede6]" />
        <span className="absolute top-0 bottom-0 left-[50%] w-px bg-[#f0ede6]" />
        <span className="absolute top-0 bottom-0 left-[75%] w-px bg-[#f0ede6]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-['Hanken_Grotesk'] text-[clamp(30px,4vw,46px)] font-semibold leading-[1.25] text-[#1A1A1A] mb-8">
            Types of campaigns we run to <br className="hidden md:block" />
            achieve{" "}
            <span className="underline decoration-[#4169E1] decoration-[4px] underline-offset-[8px]">
              results.
            </span>
          </h2>
          <p className="font-['Inter'] text-[16px] leading-[1.8] text-[#555555] max-w-[560px] mx-auto">
            Unleash the power of performance marketing with SIDPIN Digital. Our
            focused campaigns, utilizing data-driven insights, target and
            engage your audience effectively. Witness real, measurable results
            that drive <span className="text-[#4169E1]">business success</span>.
          </p>
        </div>

        {/* Campaign cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-[#ebe7de] rounded-lg p-5 text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(26,26,26,0.25)]"
            >
              <div
                className="h-[150px] rounded-md flex items-center justify-center mb-6"
                style={{ background: c.tileBg }}
              >
                <span
                  className="material-symbols-outlined text-[64px]"
                  style={{ color: c.iconColor }}
                >
                  {c.icon}
                </span>
              </div>
              <h3 className="font-['Hanken_Grotesk'] text-[19px] font-bold text-[#1A1A1A] leading-snug mb-3">
                {c.title}
              </h3>
              <p className="font-['Inter'] text-[14px] leading-[1.8] text-[#555577]/80">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
