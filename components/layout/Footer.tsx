import Link from "next/link";
import { TrendingUp, Code2, Palette, Zap } from "lucide-react";

const columns = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    bgClass: "bg-[#4169E1]",
    hoverClass: "hover:bg-[#2E4FB8]",
    links: [
      { name: "SEO", href: "/services/seo" },
      { name: "PPC Advertising", href: "/services/ppc" },
      { name: "Meta Ads", href: "/services/social-media-marketing" },
      { name: "Social Media Management", href: "/services/social-media-management" },
    ],
  },
  {
    icon: Code2,
    title: "Development",
    bgClass: "bg-[#2E4FB8]",
    hoverClass: "hover:bg-[#24409A]",
    links: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "E-commerce Development", href: "/services/ecommerce-development" },
    ],
  },
  {
    icon: Palette,
    title: "Design & Content",
    bgClass: "bg-[#6E8CFF]",
    hoverClass: "hover:bg-[#5677E8]",
    links: [
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Graphic Designing", href: "/services/graphic-designing" },
      { name: "Video Editing", href: "/services/video-editing" },
    ],
  },
];

const otherServices = {
  icon: Zap,
  title: "Automation & Cloud",
  links: [
    { name: "Marketing Automation", href: "/services/marketing-automation" },
    { name: "CRM Solutions", href: "/services/marketing-automation" },
    { name: "Managed Cloud", href: "/services/managed-cloud" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top row — three brand-blue link blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {columns.map((col) => (
          <div
            key={col.title}
            className={`${col.bgClass} px-[40px] md:px-[64px] py-[56px] md:py-[72px] min-h-[310px]`}
          >
            <div className="flex items-center gap-3 mb-8">
              <col.icon size={20} color="#ffffff" strokeWidth={2.4} />
              <h5 className="font-['Hanken_Grotesk'] text-[20px] font-bold text-white">
                {col.title}
              </h5>
            </div>
            <ul className="space-y-1">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${col.hoverClass} inline-block font-['Inter'] text-[14.5px] text-white px-2.5 py-2 -ml-2.5 rounded-[3px] transition-colors duration-200`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row — soft periwinkle block + deep navy CTA block */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-[#DCE6FF] dark:bg-[#141D33] px-[40px] md:px-[64px] py-[56px] md:py-[72px] min-h-[310px]">
          <div className="flex items-center gap-3 mb-8">
            <otherServices.icon
              size={20}
              strokeWidth={2.4}
              className="text-[#16223F] dark:text-[#DBE4FB]"
            />
            <h5 className="font-['Hanken_Grotesk'] text-[20px] font-bold text-[#16223F] dark:text-[#DBE4FB]">
              {otherServices.title}
            </h5>
          </div>
          <ul className="space-y-1">
            {otherServices.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="inline-block font-['Inter'] text-[14.5px] text-[#16223F] dark:text-[#DBE4FB] px-2.5 py-2 -ml-2.5 rounded-[3px] hover:bg-[#4169E1]/15 dark:hover:bg-[#6E8CFF]/15 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 bg-[#0C1424] px-[40px] md:px-[64px] py-[56px] md:py-[72px] min-h-[310px]">
          <div className="max-w-[420px]">
            <h4 className="font-['Hanken_Grotesk'] text-[24px] md:text-[27px] font-bold text-white leading-snug mb-5">
              Do you want to increase your sales and reach your goals?
            </h4>
            <p className="font-['Inter'] text-[14.5px] text-white/85 leading-relaxed mb-8">
              Schedule a free, no-obligation conversation with one of our
              experts to quickly improve the results of your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#4169E1] text-white font-['Inter'] text-[15px] px-7 py-3.5 rounded-[3px] hover:bg-[#2E4FB8] transition-colors duration-200"
            >
              Book a conversation
            </Link>
          </div>
        </div>
      </div>

      {/* Slim copyright strip */}
      <div className="bg-[#0C1424] px-[40px] md:px-[64px] py-5 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="font-['Hanken_Grotesk'] text-[18px] font-bold text-white">
            SIDPIN
          </span>
          <p className="font-['Inter'] text-[13px] text-white/60">
            © 2026 SIDPIN. All rights reserved. · hello@sidpin.com · +91 074538
            69244
          </p>
        </div>
      </div>
    </footer>
  );
}
