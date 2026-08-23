/**
 * ServiceSoftwarePricing — Custom pricing table for software development services
 * Designed to match the reference dark table UI
 */

import Link from "next/link";

const SOFTWARE_PLANS = [
  {
    name: "Internal Tool",
    features: "Custom dashboard or workflow tool, basic integrations, user authentication, reporting",
    price: "₹3,00,000 - ₹6,00,000",
    timeline: "10-12 weeks"
  },
  {
    name: "Enterprise Platform",
    features: "Multi-user system, advanced integrations, custom business logic, API development, documentation",
    price: "₹7,00,000 - ₹15,00,000",
    timeline: "14-20 weeks"
  },
  {
    name: "SaaS Product",
    features: "Multi-tenant architecture, billing system, subscription management, admin dashboards, scalable infrastructure",
    price: "₹15,00,000+",
    timeline: "20+ weeks"
  }
];

const SOFTWARE_FEATURES = [
  "Custom architecture design",
  "Clean, maintainable code with documentation",
  "Database design and optimization",
  "API development and integration",
  "User authentication and authorization",
  "Automated testing and quality assurance",
  "Deployment and infrastructure setup",
  "Training and handover documentation"
];

export default function ServiceSoftwarePricing() {
  return (
    <section className="bg-surface-2/40 px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
            Pricing
          </span>
          <h2 className="font-['Hanken_Grotesk'] mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-fg md:text-[42px]">
            Custom Software Development{" "}
            <em className="not-italic text-brand md:italic">Packages and Pricing</em>
          </h2>
          <p className="font-['Inter'] mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-fg-2">
            Custom software costs depend on complexity, integrations, and scale. Below is an honest breakdown of what different types of enterprise software cost, what's included, and timeline expectations.
          </p>
        </div>

        {/* Dark Pricing Table */}
        <div className="rounded-xl overflow-hidden border border-line/30 bg-[#0f172a]">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-[#1e293b] bg-[#1e293b]/50">
                  <th className="px-6 py-4 font-['Hanken_Grotesk'] text-sm font-semibold text-white">
                    Package
                  </th>
                  <th className="px-6 py-4 font-['Hanken_Grotesk'] text-sm font-semibold text-white">
                    What's Included
                  </th>
                  <th className="px-6 py-4 font-['Hanken_Grotesk'] text-sm font-semibold text-white">
                    Price (INR)
                  </th>
                  <th className="px-6 py-4 font-['Hanken_Grotesk'] text-sm font-semibold text-white">
                    Timeline
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {SOFTWARE_PLANS.map((plan, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#1e293b] ${
                      index === SOFTWARE_PLANS.length - 1 ? '' : ''
                    } hover:bg-white/5 transition-colors`}
                  >
                    <td className="px-6 py-4">
                      <div className="font-['Hanken_Grotesk'] font-semibold text-white">
                        {plan.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-['Inter'] text-sm text-gray-300">
                        {plan.features}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-['Hanken_Grotesk'] font-semibold text-brand">
                        {plan.price}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-['Geist'] text-sm text-gray-300">
                        {plan.timeline}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-line/30 bg-surface p-6">
            <h3 className="font-['Hanken_Grotesk'] text-lg font-semibold text-fg mb-4">
              What's Included in All Packages
            </h3>
            <ul className="space-y-3">
              {SOFTWARE_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-brand mt-1">✓</span>
                  <span className="font-['Inter'] text-sm text-fg-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-line/30 bg-surface p-6">
            <h3 className="font-['Hanken_Grotesk'] text-lg font-semibold text-fg mb-4">
              What Affects Pricing
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Complexity:</strong> Simple tools vs complex multi-system platforms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Integrations:</strong> Number of APIs and systems to connect
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Users:</strong> Single-user tools vs multi-user enterprise systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Security:</strong> Authentication complexity and compliance requirements
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Documentation:</strong> Technical specs and training materials
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 rounded-xl border-l-4 border-brand bg-surface p-6">
          <p className="font-['Inter'] text-sm text-fg-2">
            <strong className="text-fg">Every software project is unique.</strong> These ranges reflect real enterprise projects we've delivered.
            <Link href="/contact" className="text-brand hover:underline ml-2">
              Get a detailed consultation →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}