/**
 * ServiceIntegrationPricing — Custom pricing table for AI integration services
 * Designed to match the reference dark table UI
 */

import Link from "next/link";

const INTEGRATION_PLANS = [
  {
    name: "Single Tool Integration",
    features: "AI integration into one existing tool (CRM, helpdesk, or automation), basic workflow enhancement, monitoring and governance",
    price: "₹1,50,000 - ₹3,00,000",
    timeline: "4-6 weeks"
  },
  {
    name: "Multi-Tool Integration",
    features: "AI integration across multiple tools, custom workflows, data pipeline setup, comprehensive governance",
    price: "₹4,00,000 - ₹8,00,000",
    timeline: "6-10 weeks"
  },
  {
    name: "Enterprise AI Integration",
    features: "Comprehensive AI across your entire stack, custom infrastructure, advanced governance and security, full optimization and support",
    price: "₹8,00,000+",
    timeline: "10+ weeks"
  }
];

const INTEGRATION_FEATURES = [
  "Assessment of current tools and workflows",
  "AI API integration and configuration",
  "Data pipeline and vector database setup",
  "Workflow automation and enhancement",
  "Security and governance implementation",
  "Usage monitoring and cost controls",
  "Team training and documentation",
  "Ongoing optimization and support"
];

export default function ServiceIntegrationPricing() {
  return (
    <section className="bg-surface-2/40 px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
            Pricing
          </span>
          <h2 className="font-['Hanken_Grotesk'] mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-fg md:text-[42px]">
            AI Integration Services{" "}
            <em className="not-italic text-brand md:italic">Packages and Pricing</em>
          </h2>
          <p className="font-['Inter'] mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-fg-2">
            AI integration costs depend on the number of tools, complexity of workflows, and governance requirements. Below is an honest breakdown of what different types of AI integrations cost, what's included, and timeline expectations.
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
                  <th className="px-6 py-4 font-['Hankan_Grotesk'] text-sm font-semibold text-white">
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
                {INTEGRATION_PLANS.map((plan, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#1e293b] ${
                      index === INTEGRATION_PLANS.length - 1 ? '' : ''
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
                      <div className="font-['Hankan_Grotesk'] font-semibold text-brand">
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
              {INTEGRATION_FEATURES.map((feature, index) => (
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
                  <strong>Number of Tools:</strong> Single tool vs multiple system integration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Workflow Complexity:</strong> Simple automation vs complex multi-step processes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Data Requirements:</strong> Basic connectivity vs complex data pipelines
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Governance Needs:</strong> Basic monitoring vs enterprise security and compliance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Support Requirements:</strong> Launch vs ongoing optimization and updates
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 rounded-xl border-l-4 border-brand bg-surface p-6">
          <p className="font-['Inter'] text-sm text-fg-2">
            <strong className="text-fg">Every integration is different.</strong> These ranges reflect real AI integration projects we've delivered.
            <Link href="/contact" className="text-brand hover:underline ml-2">
              Get a detailed consultation →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}