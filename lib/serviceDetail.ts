/**
 * Site-wide content for the service detail pages — the parts that are the same
 * whichever service you are reading about (proof numbers, how we work, how we
 * compare). Per-service copy stays in `lib/services.ts`.
 */

export type StatItem = { value: string; label: string };

/** Headline numbers shown in the hero row and the hero dashboard mockup. */
export const SERVICE_STATS: StatItem[] = [
  { value: "50+", label: "projects" },
  { value: "100%", label: "retention" },
  { value: "4.9", label: "client rating" },
];

/**
 * Client logos for the "brands that trust us" wall (files live in /public/logos).
 * Deliberately the lightest of the client marks — 6.png and 8.png are our own.
 */
export const LOGO_WALL_FILES = [
  "12.png",
  "7.png",
  "24.png",
  "20.png",
  "5.png",
  "13.png",
  "2.png",
  "21.png",
];

export type ComparisonRow = {
  label: string;
  typical: string;
  sidpin: string;
  sidpinNote: string;
};

/** "How we're different" — the claims below are all stated elsewhere on the site. */
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Contract",
    typical: "12 months, locked",
    sidpin: "Month to month",
    sidpinNote: "Scope agreed per phase, no lock-in",
  },
  {
    label: "Your accounts",
    typical: "Theirs. You leave with nothing",
    sidpin: "Yours — always",
    sidpinNote: "Code, accounts, analytics, creatives",
  },
  {
    label: "Pricing",
    typical: "Vague retainers, hidden markups",
    sidpin: "Flat, published on this site",
    sidpinNote: "See the pricing page before you call",
  },
  {
    label: "Reporting",
    typical: "Monthly PDF full of impressions",
    sidpin: "Numbers that move revenue",
    sidpinNote: "Leads, cost per lead, conversions",
  },
  {
    label: "A bad month",
    typical: "Buried in the deck",
    sidpin: "You see it too",
    sidpinNote: "Good or bad, same report",
  },
  {
    label: "Who does the work",
    typical: "Junior handed your account",
    sidpin: "The team you met",
    sidpinNote: "Designers and engineers in-house",
  },
  {
    label: "Delivery",
    typical: "“We'll get back to you”",
    sidpin: "Weekly, in writing",
    sidpinNote: "Every sprint ends with something live",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  note: string;
};

/** "How we work" — five steps, same discipline on every engagement. */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Audit",
    description:
      "We tear down what you have today — site, funnels, tracking and the competitors beating you.",
    note: "Free — yours whether you hire us or not.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We agree the numbers up front: target cost per lead, volume, timeline and budget split.",
    note: "You approve before a rupee is spent.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Design, development, campaigns and tracking — shipped by the in-house team, not outsourced.",
    note: "Every conversion measured from day one.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Weekly test cycles. We pause what loses, feed what wins, and write down every decision.",
    note: "This is where cost per lead falls.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Budget follows what is proven. New channels are added only when the data says so.",
    note: "Growth, without guessing.",
  },
];

export const PROCESS_BULLETS = [
  {
    title: "Tracking built by engineers.",
    body: "Most accounts we audit measure the wrong thing — or nothing at all. Our developers wire it up properly.",
  },
  {
    title: "Design and development in-house.",
    body: "No waiting on “your web guy”. Designers, engineers and campaign managers sit on one team.",
  },
  {
    title: "Process that survives people.",
    body: "Documented playbooks — your project never depends on one person's memory.",
  },
];

export const PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Access to your accounts, 30 minutes for a kickoff call, and a yes on the plan.",
  highlight: "We do the rest.",
};

// Web Development specific process content
export const WEBDEV_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, goals, and users — technical requirements, design preferences, and what success looks like.",
    note: "Free consultation — no commitment required.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Site architecture, content structure, and technical stack — mapped out and approved before development begins.",
    note: "Clear scope, timeline, and deliverables agreed upfront.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Visual design, user experience, and responsive layouts — crafted to convert and built for performance.",
    note: "Pixel-perfect designs optimized for all devices.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Clean code, fast performance, and SEO optimization — built by senior developers, not outsourced juniors.",
    note: "Every feature tested before deployment.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "Deployment, training, and ongoing support — your site goes live with monitoring and maintenance in place.",
    note: "Growth-ready from day one.",
  },
];

export const WEBDEV_PROCESS_BULLETS = [
  {
    title: "Code built by senior developers.",
    body: "Clean, maintainable code that scales — no shortcuts that break later.",
  },
  {
    title: "Design and development in-house.",
    body: "Designers and developers work together — no communication gaps or handoff delays.",
  },
  {
    title: "Performance guaranteed.",
    body: "Fast load times, proper SEO, and responsive design built in from the start.",
  },
];

export const WEBDEV_PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Your brand assets, basic content, and 30 minutes for requirements discussion.",
  highlight: "We handle the technical work.",
};

// App Development specific comparison content
export const APP_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Contract",
    typical: "12 months, locked",
    sidpin: "Month to month",
    sidpinNote: "Scope agreed per phase, no lock-in",
  },
  {
    label: "Your app & code",
    typical: "Theirs. You leave with nothing",
    sidpin: "Yours — always",
    sidpinNote: "Source code, design files, and app store accounts fully owned",
  },
  {
    label: "Pricing",
    typical: "Vague quotes, hidden costs",
    sidpin: "Flat, transparent",
    sidpinNote: "Clear milestone pricing, no surprises",
  },
  {
    label: "Communication",
    typical: "Black box, delayed updates",
    sidpin: "Weekly, in writing",
    sidpinNote: "Demo builds, progress reports, clear milestones",
  },
  {
    label: "Platform expertise",
    typical: "Web developers trying mobile",
    sidpin: "Mobile-first specialists",
    sidpinNote: "Native iOS and Android experience",
  },
  {
    label: "Who does the work",
    typical: "Junior freelancers or outsourced",
    sidpin: "Senior in-house team",
    sidpinNote: "Designers and mobile developers working together",
  },
  {
    label: "Store submission",
    typical: "You're on your own",
    sidpin: "We handle it",
    sidpinNote: "App Store and Play Store submission included",
  },
];

// App Development specific process content
export const APP_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your users, goals, and platform requirements — features, monetization, and technical needs for iOS and Android.",
    note: "Free consultation — no commitment required.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "App architecture, user flows, and technical stack — mapped out and approved before development begins.",
    note: "Clear scope, timeline, and milestone deliverables agreed upfront.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "UI/UX design optimized for mobile — intuitive interfaces, smooth animations, and platform-specific best practices.",
    note: "Pixel-perfect mobile designs for both iOS and Android.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Clean mobile architecture, native performance, and thorough testing — built by experienced mobile developers.",
    note: "Every feature tested on real devices before deployment.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "Store submission, launch support, and ongoing maintenance — your app goes live with monitoring and updates in place.",
    note: "Store-ready from day one with ongoing support.",
  },
];

export const APP_PROCESS_BULLETS = [
  {
    title: "Mobile-native architecture.",
    body: "Code built for mobile performance and battery efficiency — not bloated web views.",
  },
  {
    title: "Design and development in-house.",
    body: "Mobile designers and developers work together — no communication gaps.",
  },
  {
    title: "Store submission handled.",
    body: "We manage App Store and Play Store compliance, screenshots, and submission.",
  },
];

export const APP_PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Your brand guidelines, core content, and 30 minutes for requirements discussion.",
  highlight: "We handle the mobile development.",
};

// Web Development specific comparison content
export const WEBDEV_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Contract",
    typical: "12 months, locked",
    sidpin: "Month to month",
    sidpinNote: "Scope agreed per phase, no lock-in",
  },
  {
    label: "Your code & design",
    typical: "Theirs. You leave with nothing",
    sidpin: "Yours — always",
    sidpinNote: "Source code, designs, and assets fully owned",
  },
  {
    label: "Pricing",
    typical: "Vague quotes, hidden costs",
    sidpin: "Flat, published on this site",
    sidpinNote: "See pricing tables before you call",
  },
  {
    label: "Communication",
    typical: "Black box, no updates",
    sidpin: "Weekly, in writing",
    sidpinNote: "Progress updates, demo links, clear milestones",
  },
  {
    label: "Quality standards",
    typical: "Template-based, slow loading",
    sidpin: "Custom, performance-optimized",
    sidpinNote: "Fast load times, proper SEO, responsive design",
  },
  {
    label: "Who does the work",
    typical: "Junior freelancers or outsourced",
    sidpin: "Senior in-house team",
    sidpinNote: "Designers and developers work together",
  },
  {
    label: "Delivery process",
    typical: "'We'll get back to you'",
    sidpin: "Agile sprints, weekly demos",
    sidpinNote: "See progress every week, not just at launch",
  },
];

// Software Development specific comparison content
export const SOFTWARE_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Contract",
    typical: "12 months, locked",
    sidpin: "Month to month",
    sidpinNote: "Scope agreed per phase, no lock-in",
  },
  {
    label: "Your code & IP",
    typical: "Theirs. You leave with nothing",
    sidpin: "Yours — always",
    sidpinNote: "Source code, documentation, and IP fully owned",
  },
  {
    label: "Pricing",
    typical: "Vague quotes, hidden costs",
    sidpin: "Milestone-based, transparent",
    sidpinNote: "Clear deliverables per milestone, published rates",
  },
  {
    label: "Architecture",
    typical: "Quick fixes that break later",
    sidpin: "Scalable from day one",
    sidpinNote: "Clean architecture that grows with your business",
  },
  {
    label: "Communication",
    typical: "Black box, no visibility",
    sidpin: "Weekly demos, in writing",
    sidpinNote: "Working software every week, not just updates",
  },
  {
    label: "Who does the work",
    typical: "Junior devs or outsourced",
    sidpin: "Senior in-house team",
    sidpinNote: "Experienced engineers who understand business logic",
  },
  {
    label: "Documentation",
    typical: "Little to none",
    sidpin: "Full technical documentation",
    sidpinNote: "Your team can maintain and extend the software",
  },
];

// Software Development specific process content
export const SOFTWARE_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map your workflows, data flows, and pain points — understanding exactly how your business operates and where software can help.",
    note: "Deep business analysis — no assumptions.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "System design, tech stack selection, and data modeling — planned for scalability, security, and maintainability.",
    note: "Blueprint before any code is written.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean code, automated testing, and iterative delivery — building software that works and lasts.",
    note: "Working features every sprint, not just promises.",
  },
  {
    number: "04",
    title: "Integration",
    description:
      "Connect with your existing tools, databases, and APIs — ensuring seamless data flow and automation.",
    note: "Your stack connected and working together.",
  },
  {
    number: "05",
    title: "Deployment & Support",
    description:
      "Production deployment, monitoring, and ongoing support — your software runs reliably and evolves with your needs.",
    note: "Production-ready with long-term support.",
  },
];

export const SOFTWARE_PROCESS_BULLETS = [
  {
    title: "Business-first architecture.",
    body: "We start with your workflows and requirements, then design software around them — not force processes into templates.",
  },
  {
    title: "Enterprise-grade code quality.",
    body: "Clean architecture, automated testing, and documentation — software that's maintainable and scalable.",
  },
  {
    title: "Integration experts.",
    body: "We connect CRMs, ERPs, APIs, and databases — your software works with your existing stack.",
  },
];

export const SOFTWARE_PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Access to your current tools and processes, 30 minutes for workflow analysis, and clear requirements.",
  highlight: "We build around your business.",
};

// AI Development specific comparison content
export const AI_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Approach",
    typical: "Demo that never ships",
    sidpin: "Production-grade from day one",
    sidpinNote: "Built for real users, not investor pitches",
  },
  {
    label: "Your data & IP",
    typical: "Theirs to train on",
    sidpin: "Yours — always",
    sidpinNote: "Models and data fully owned and controlled",
  },
  {
    label: "Pricing",
    typical: "Vague hourly billing",
    sidpin: "Milestone-based, transparent",
    sidpinNote: "Clear deliverables per phase, published rates",
  },
  {
    label: "Model quality",
    typical: "Black box predictions",
    sidpin: "Validated & monitored",
    sidpinNote: "Metrics defined upfront, performance tracked continuously",
  },
  {
    label: "Integration",
    typical: "Standalone prototype",
    sidpin: "Integrated into your product",
    sidpinNote: "AI features wired into your existing workflows",
  },
  {
    label: "Who does the work",
    typical: "Junior ML engineers",
    sidpin: "Senior AI team",
    sidpinNote: "Experienced ML engineers and data scientists",
  },
  {
    label: "Post-launch",
    typical: "Handoff and disappear",
    sidpin: "Monitoring & iteration",
    sidpinNote: "Model performance tracked and improved over time",
  },
];

// AI Development specific process content
export const AI_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business problem, data availability, and success metrics — determining where AI can create real value.",
    note: "Problem-first, not technology-first.",
  },
  {
    number: "02",
    title: "Data & Model Selection",
    description:
      "Data assessment, preprocessing, and model selection — choosing the right approach for accuracy, cost, and scalability.",
    note: "Right tool for the job, not hype.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Model training, validation, and integration — building AI that works in your real-world context.",
    note: "Models tested against real data patterns.",
  },
  {
    number: "04",
    title: "Deployment & Monitoring",
    description:
      "Production deployment with monitoring, logging, and fallbacks — ensuring reliability and performance.",
    note: "Ship with confidence, track with clarity.",
  },
  {
    number: "05",
    title: "Iteration & Scale",
    description:
      "Performance analysis, model improvements, and scaling — making your AI smarter and more valuable over time.",
    note: "AI that keeps learning and improving.",
  },
];

export const AI_PROCESS_BULLETS = [
  {
    title: "Production-first mindset.",
    body: "We build AI for production deployment, not demos — monitoring, fallbacks, and real-world performance.",
  },
  {
    title: "Model validation & monitoring.",
    body: "Metrics defined upfront, performance tracked continuously, and models improved based on real results.",
  },
  {
    title: "Integration expertise.",
    body: "AI features integrated into your existing products and workflows, not standalone prototypes.",
  },
];

export const AI_PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Access to your data and systems, clear success metrics, and 30 minutes for requirements discussion.",
  highlight: "We build around your actual needs.",
};

// AI Chatbot specific comparison content
export const CHATBOT_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Knowledge base",
    typical: "Generic responses",
    sidpin: "Grounded on your data",
    sidpinNote: "Answers from your docs, FAQs, and product information",
  },
  {
    label: "Deployment",
    typical: "Website only",
    sidpin: "Everywhere your customers are",
    sidpinNote: "Web, app, WhatsApp, Instagram — consistent experience",
  },
  {
    label: "Handoff quality",
    typical: "Confusing escalations",
    sidpin: "Seamless human handoff",
    sidpinNote: "Full context passed to your team when needed",
  },
  {
    label: "Lead capture",
    typical: "Basic form fills",
    sidpin: "Conversational qualification",
    sidpinNote: "Natural conversations that qualify and route leads",
  },
  {
    label: "Setup time",
    typical: "Months of development",
    sidpin: "Weeks to live",
    sidpinNote: "Fast deployment with your existing knowledge base",
  },
  {
    label: "Analytics",
    typical: "Basic chat logs",
    sidpin: "Conversation insights",
    sidpinNote: "What customers ask, where they stall, what converts",
  },
  {
    label: "Language support",
    typical: "English only",
    sidpin: "Multilingual",
    sidpinNote: "Chat in multiple languages with consistent quality",
  },
];

// AI Chatbot specific process content
export const CHATBOT_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Knowledge Setup",
    description:
      "We import your FAQs, docs, and product data — building a knowledge base that the chatbot can draw from.",
    note: "Your expertise, automated and accessible.",
  },
  {
    number: "02",
    title: "Conversation Design",
    description:
      "We design conversation flows for your use cases — lead qualification, support answers, and sales assistance.",
    note: "Natural conversations that achieve business goals.",
  },
  {
    number: "03",
    title: "Training & Testing",
    description:
      "Chatbot training with your data, response testing, and accuracy validation before going live.",
    note: "Accurate, on-brand responses every time.",
  },
  {
    number: "04",
    title: "Multi-Channel Deploy",
    description:
      "Deployment across web, app, WhatsApp, and social — with consistent experience and handoff setup.",
    note: "Your customers supported wherever they are.",
  },
  {
    number: "05",
    title: "Optimization & Scale",
    description:
      "Analytics review, conversation improvement, and feature expansion based on real customer interactions.",
    note: "Chatbot that gets smarter with use.",
  },
];

export const CHATBOT_PROCESS_BULLETS = [
  {
    title: "Grounded on your knowledge.",
    body: "Chatbots trained on your actual content — accurate answers, not hallucinations or generic responses.",
  },
  {
    title: "Multi-channel deployment.",
    body: "One chatbot across website, app, WhatsApp, and social — consistent experience everywhere.",
  },
  {
    title: "Sales-focused conversations.",
    body: "Built for lead qualification and conversion, not just support deflection.",
  },
];

export const CHATBOT_PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Your FAQs, documentation, and product information, plus 30 minutes to design conversation flows.",
  highlight: "We build around your customers' questions.",
};

// AI SaaS specific comparison content
export const SAAS_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Architecture",
    typical: "Single-user codebase",
    sidpin: "Multi-tenant from day one",
    sidpinNote: "Built for many customers from the start",
  },
  {
    label: "Billing integration",
    typical: "Afterthought tacked on",
    sidpin: "Built into the core",
    sidpinNote: "Usage metering and subscription management integrated",
  },
  {
    label: "AI costs",
    typical: "Hidden and unpredictable",
    sidpin: "Transparent and optimized",
    sidpinNote: "Cost monitoring and optimization built in",
  },
  {
    label: "Time to market",
    typical: "Months to MVP",
    sidpin: "Weeks to launch",
    sidpinNote: "Proven architecture and components accelerate delivery",
  },
  {
    label: "Scalability",
    typical: "Breaks under load",
    sidpin: "Scales horizontally",
    sidpinNote: "Infrastructure designed for growth from day one",
  },
  {
    label: "Unit economics",
    typical: "Unprofitable at scale",
    sidpin: "Healthy from the start",
    sidpinNote: "Cost controls and pricing designed for sustainability",
  },
  {
    label: "Admin tooling",
    typical: "Manual operations",
    sidpin: "Self-service dashboard",
    sidpinNote: "Admin panel for customer management and monitoring",
  },
];

// AI SaaS specific process content
export const SAAS_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Product Strategy",
    description:
      "We define your AI SaaS concept, target users, and pricing model — turning your idea into a product plan.",
    note: "Clear path from idea to revenue.",
  },
  {
    number: "02",
    title: "Architecture Design",
    description:
      "Multi-tenant system design, AI infrastructure planning, and billing architecture — built for scale and profitability.",
    note: "Foundation that supports growth, not rewrites.",
  },
  {
    number: "03",
    title: "MVP Development",
    description:
      "Core feature development, AI integration, and customer dashboards — launch-ready product with real value.",
    note: "Ship fast with features customers will pay for.",
  },
  {
    number: "04",
    title: "Billing & Launch",
    description:
      "Payment integration, pricing setup, and go-to-market support — ready to accept customers and process payments.",
    note: "Business-ready from day one.",
  },
  {
    number: "05",
    title: "Scale & Optimize",
    description:
      "Performance optimization, cost controls, and feature expansion — growing your product while maintaining healthy margins.",
    note: "SaaS that scales profitably.",
  },
];

export const SAAS_PROCESS_BULLETS = [
  {
    title: "Multi-tenant architecture.",
    body: "Built for many customers from day one — secure isolation and efficient resource usage.",
  },
  {
    title: "AI cost controls.",
    body: "Monitoring and optimization that keep inference costs predictable as you scale.",
  },
  {
    title: "Product-to-revenue focus.",
    body: "Built as a business, not a technology demo — pricing, billing, and unit economics designed from the start.",
  },
];

export const SAAS_PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Your AI concept, target users, and 30 minutes to plan the product roadmap.",
  highlight: "We build products that can scale profitably.",
};

// AI Integration specific comparison content
export const INTEGRATION_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Disruption",
    typical: "Rip and replace",
    sidpin: "Integrate and enhance",
    sidpinNote: "Your existing tools stay, they just get smarter",
  },
  {
    label: "Implementation time",
    typical: "Months of custom work",
    sidpin: "Weeks to value",
    sidpinNote: "Fast integration with proven patterns",
  },
  {
    label: "Team adoption",
    typical: "Steep learning curve",
    sidpin: "Works with familiar tools",
    sidpinNote: "AI adds intelligence without changing workflows",
  },
  {
    label: "Data security",
    typical: "Sent to external APIs",
    sidpin: "Controlled and governed",
    sidpinNote: "Access controls, audit logging, and data governance",
  },
  {
    label: "Cost visibility",
    typical: "Hidden AI usage bills",
    sidpin: "Transparent and monitored",
    sidpinNote: "Usage tracking and cost controls built in",
  },
  {
    label: "Flexibility",
    typical: "Locked into one vendor",
    sidpin: "Model-agnostic",
    sidpinNote: "Switch AI providers without changing workflows",
  },
  {
    label: "Maintenance",
    typical: "You're on your own",
    sidpin: "Ongoing optimization",
    sidpinNote: "Monitoring, updates, and improvements included",
  },
];

// AI Integration specific process content
export const INTEGRATION_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Assessment",
    description:
      "We analyze your current stack, identify AI opportunities, and prioritize quick wins and long-term improvements.",
    note: "Maximum value, minimum disruption.",
  },
  {
    number: "02",
    title: "Integration Design",
    description:
      "We design how AI fits into your existing workflows — APIs, data flows, and user experience upgrades.",
    note: "Seamless enhancement, not wholesale replacement.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "API connections, data pipelines, and AI feature deployment — wired into your tools with proper governance.",
    note: "Production-ready integration from day one.",
  },
  {
    number: "04",
    title: "Testing & Rollout",
    description:
      "Validation with real workflows, user training, and phased rollout — ensuring adoption and measuring impact.",
    note: "Your team actually uses and benefits from it.",
  },
  {
    number: "05",
    title: "Optimize & Expand",
    description:
      "Usage analysis, cost optimization, and feature expansion — making your AI integrations more valuable over time.",
    note: "Intelligence that compounds across your stack.",
  },
];

export const INTEGRATION_PROCESS_BULLETS = [
  {
    title: "Zero-disruption integration.",
    body: "AI added to your existing tools and workflows — no rip and replace, no steep learning curves.",
  },
  {
    title: "Cost-controlled deployment.",
    body: "Usage monitoring and optimization that keep AI costs predictable as adoption grows.",
  },
  {
    title: "Governance and security.",
    body: "Access controls, audit logging, and guardrails — responsible AI integrated safely.",
  },
];

export const INTEGRATION_PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Access to your current tools and workflows, plus 30 minutes to identify integration opportunities.",
  highlight: "We make your existing stack smarter.",
};

// Generative AI specific comparison content
export const GENERATIVE_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Hallucinations",
    typical: "Generic, often wrong answers",
    sidpin: "Grounded on your data",
    sidpinNote: "Responses from your actual knowledge base with citations",
  },
  {
    label: "Integration",
    typical: "Standalone chat widget",
    sidpin: "Built into your product",
    sidpinNote: "AI features integrated into your existing workflows",
  },
  {
    label: "Cost control",
    typical: "Unpredictable API bills",
    sidpin: "Transparent and optimized",
    sidpinNote: "Usage monitoring and cost optimization built in",
  },
  {
    label: "Model choice",
    typical: "One-size-fits-all LLM",
    sidpin: "Right model for the job",
    sidpinNote: "Model-agnostic approach for optimal cost and performance",
  },
  {
    label: "Quality assurance",
    typical: "Hope for the best",
    sidpin: "Evaluated and guarded",
    sidpinNote: "Continuous evaluation with guardrails and fallbacks",
  },
  {
    label: "Setup time",
    typical: "Months to production",
    sidpin: "Weeks to live",
    sidpinNote: "Rapid deployment with proven RAG patterns",
  },
  {
    label: "Business value",
    typical: "Tech demo with no ROI",
    sidpin: "Built for measurable outcomes",
    sidpinNote: "Designed for real business results, not novelty",
  },
];

// Generative AI specific process content
export const GENERATIVE_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Knowledge Setup",
    description:
      "We import and organize your documents, data, and knowledge — building the foundation for accurate AI responses.",
    note: "Your expertise, indexed and accessible.",
  },
  {
    number: "02",
    title: "RAG Architecture",
    description:
      "Retrieval pipeline design, vector database setup, and grounding strategy — ensuring answers come from your data.",
    note: "Accurate responses, not hallucinations.",
  },
  {
    number: "03",
    title: "Agent Development",
    description:
      "Copilot and agent creation with proper guardrails, prompt engineering, and fallback mechanisms.",
    note: "Reliable AI that handles edge cases.",
  },
  {
    number: "04",
    title: "Integration & Testing",
    description:
      "Product integration, user testing, and quality validation — ensuring the AI adds real value to your workflows.",
    note: "Tested with real users and use cases.",
  },
  {
    number: "05",
    title: "Deploy & Optimize",
    description:
      "Production deployment, monitoring setup, and continuous optimization — keeping your generative AI accurate and cost-effective.",
    note: "AI that improves with use and monitoring.",
  },
];

export const GENERATIVE_PROCESS_BULLETS = [
  {
    title: "Grounded on your knowledge.",
    body: "RAG architecture ensures answers come from your data, not model hallucinations or generic training.",
  },
  {
    title: "Production-grade guardrails.",
    body: "Evaluated outputs, fallback mechanisms, and continuous monitoring for reliable deployment.",
  },
  {
    title: "Cost-optimized inference.",
    body: "Smart caching, model selection, and prompt optimization that keeps generative AI affordable at scale.",
  },
];

export const GENERATIVE_PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Your documentation and knowledge base, plus 30 minutes to design your copilot strategy.",
  highlight: "We build AI that knows your business.",
};
