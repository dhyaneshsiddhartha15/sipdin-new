/**
 * Fair Usage Policy content for /fair-usage-policy. Dummy but realistic copy
 * describing how Sidpin's "unlimited" plan features are governed.
 */

import type { PolicySection } from "@/components/policy/PolicyPage";

export const FAIR_USAGE_EFFECTIVE = "Effective July 1, 2026";

export const FAIR_USAGE_INTRO =
  "This Fair Usage Policy explains how Sidpin governs the “unlimited” resources included in our plans so that every customer enjoys fast, reliable service. By using our products you agree to use them in a way that is reasonable and consistent with a typical small-to-medium business workload.";

export const FAIR_USAGE_SECTIONS: PolicySection[] = [
  {
    id: "overview",
    title: "Overview",
    body: [
      { type: "p", text: "“Unlimited” features — such as unlimited websites, bandwidth, mailboxes, or storage on eligible plans — are offered on a shared-infrastructure basis. They are unlimited for normal website and business use, but not for workloads that would degrade service for other customers." },
      { type: "p", text: "This policy applies to all Sidpin hosting, website, and email products. Where a numeric limit is stated on your plan, that stated limit always takes precedence over any reference to “unlimited.”" },
    ],
  },
  {
    id: "what-unlimited-means",
    title: "What “Unlimited” Means",
    body: [
      { type: "p", text: "Unlimited means we do not set a fixed cap for typical usage. It does not mean the resources are infinite or that a single account may consume a disproportionate share of shared capacity." },
      { type: "h", text: "Typical usage" },
      { type: "ul", items: [
        "Hosting business, portfolio, e-commerce, or content websites.",
        "Storing files that are actively used by your live websites.",
        "Sending and receiving business email at ordinary volumes.",
      ] },
    ],
  },
  {
    id: "thresholds",
    title: "Fair Usage Thresholds",
    body: [
      { type: "p", text: "The vast majority of customers — well over 99% — never approach these thresholds. They exist only to protect shared performance." },
      { type: "ul", items: [
        "CPU / RAM: sustained use of a large share of a shared node's resources for extended periods.",
        "Inodes / files: an unusually high number of small files relative to actual site content.",
        "Email: bulk sending that resembles unsolicited or marketing blasts from shared mail servers.",
        "Storage: data not associated with a live, served website (e.g. backups, media libraries, or file archives).",
      ] },
    ],
  },
  {
    id: "prohibited-use",
    title: "Prohibited Use",
    body: [
      { type: "p", text: "The following activities are never permitted, regardless of plan:" },
      { type: "ul", items: [
        "Using hosting primarily for file storage, backup, or distribution rather than serving a website.",
        "Running standalone applications such as proxies, crawlers, torrent trackers, or crypto miners.",
        "Sending spam or operating mailing lists without verified opt-in.",
        "Any activity that is illegal or infringes the rights of others.",
      ] },
    ],
  },
  {
    id: "monitoring",
    title: "Resource Monitoring",
    body: [
      { type: "p", text: "We continuously monitor aggregate resource usage to keep our platform fast and stable. Monitoring is automated and focuses on resource metrics — not on the content of your files or emails." },
      { type: "p", text: "If an account consistently exceeds fair thresholds, our systems flag it for review by our reliability team before any action is taken." },
    ],
  },
  {
    id: "enforcement",
    title: "Enforcement & Remedies",
    body: [
      { type: "p", text: "Where usage materially affects other customers, we will normally contact you first and work with you to resolve it. Depending on severity we may:" },
      { type: "ul", items: [
        "Ask you to optimise your site or reduce non-website data.",
        "Recommend a plan better suited to your workload (such as a VPS or dedicated resources).",
        "Temporarily throttle the specific process causing the issue.",
        "Suspend the account only in cases of abuse or where service stability is at immediate risk.",
      ] },
    ],
  },
  {
    id: "upfront-billing",
    title: "Upfront Billing",
    body: [
      { type: "p", text: "All plans are billed upfront for the full term you select. The monthly rate shown on our pricing page reflects the total plan price divided by the number of months in the plan; it is not a month-to-month charge." },
      { type: "p", text: "Renewals are charged at the standard rate unless otherwise stated at checkout. Promotional discounts apply to the first term only." },
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: [
      { type: "p", text: "We may update this Fair Usage Policy from time to time to reflect changes in technology or our services. Material changes will be posted on this page with an updated effective date, and where appropriate we will notify you by email." },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    body: [
      { type: "p", text: "If you have questions about this policy or believe your account has been flagged in error, our team is happy to help." },
      { type: "p", text: "Email: hello@sidpin.com" },
    ],
  },
];
