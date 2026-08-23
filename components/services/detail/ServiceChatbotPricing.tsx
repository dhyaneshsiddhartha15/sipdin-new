/**
 * ServiceChatbotPricing — Custom pricing table for AI chatbot services
 * Designed to match the reference dark table UI
 */

import Link from "next/link";

const CHATBOT_PLANS = [
  {
    name: "Basic Chatbot",
    features: "Single-channel bot (website or WhatsApp), FAQ-based responses, lead capture, basic analytics",
    price: "₹1,50,000 - ₹2,50,000",
    timeline: "4-6 weeks"
  },
  {
    name: "Advanced Chatbot",
    features: "Multi-channel deployment, knowledge base integration, lead qualification flows, conversation analytics",
    price: "₹3,00,000 - ₹5,00,000",
    timeline: "6-8 weeks"
  },
  {
    name: "Enterprise Chatbot Platform",
    features: "All channels, advanced AI capabilities, CRM integration, custom workflows, comprehensive analytics and support",
    price: "₹5,00,000+",
    timeline: "8+ weeks"
  }
];

const CHATBOT_FEATURES = [
  "Knowledge base setup and training",
  "Multi-channel deployment (web, app, WhatsApp)",
  "Conversation flow design",
  "Lead capture and qualification",
  "Human handoff setup",
  "Conversation analytics and insights",
  "Multi-language support",
  "Ongoing optimization and updates"
];

export default function ServiceChatbotPricing() {
  return (
    <section className="bg-surface-2/40 px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
            Pricing
          </span>
          <h2 className="font-['Hanken_Grotesk'] mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-fg md:text-[42px]">
            AI Chatbot Development{" "}
            <em className="not-italic text-brand md:italic">Packages and Pricing</em>
          </h2>
          <p className="font-['Inter'] mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-fg-2">
            AI chatbot costs depend on channels, AI capabilities, and integration complexity. Below is an honest breakdown of what different types of chatbots cost, what's included, and timeline expectations.
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
                {CHATBOT_PLANS.map((plan, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#1e293b] ${
                      index === CHATBOT_PLANS.length - 1 ? '' : ''
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
              {CHATBOT_FEATURES.map((feature, index) => (
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
                  <strong>Channels:</strong> Single vs multiple deployment channels
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>AI Capabilities:</strong> FAQ-based vs advanced AI and NLP
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Integrations:</strong> Standalone vs CRM and system integrations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Conversation Complexity:</strong> Simple Q&A vs complex qualification flows
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fg-3 mt-1">•</span>
                <span className="font-['Inter'] text-sm text-fg-2">
                  <strong>Support Needs:</strong> Launch vs ongoing optimization
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 rounded-xl border-l-4 border-brand bg-surface p-6">
          <p className="font-['Inter'] text-sm text-fg-2">
            <strong className="text-fg">Every chatbot is different.</strong> These ranges reflect real chatbot projects we've delivered.
            <Link href="/contact" className="text-brand hover:underline ml-2">
              Get a detailed consultation →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}