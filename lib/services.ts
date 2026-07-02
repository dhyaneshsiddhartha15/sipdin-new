export type Offering = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  heroTitle: string;
  tagline: string;
  description: string;
  intro: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutText: string;
  offeringsTitle: string;
  offerings: Offering[];
  faqIntro: string;
  faqs: Faq[];
};

export type ServiceCategory = {
  name: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Design & Development Services",
    services: [
      {
        slug: "web-development",
        name: "Web Development",
        heroTitle: "Web Development Services",
        tagline: "Websites engineered for speed, trust, and conversions",
        description:
          "We design and develop fast, secure, SEO-ready websites that turn visitors into customers and support your business objectives.",
        intro:
          "From planning and design to development and launch, we ensure a smooth process that results in a scalable website tailored to your users and market.",
        aboutLabel: "Web Development",
        aboutTitle: "Building digital experiences that perform",
        aboutText:
          "Your website is your hardest-working salesperson. We build modern, responsive websites with clean code, fast load times, and conversion-focused layouts — engineered to rank on search engines and built to scale with your business.",
        offeringsTitle: "What We Build",
        offerings: [
          { title: "Business Websites", description: "Professional corporate websites that establish credibility and communicate your brand story clearly." },
          { title: "Landing Pages", description: "High-converting landing pages designed for campaigns, lead generation, and product launches." },
          { title: "Web Applications", description: "Custom web apps with dashboards, portals, and business logic tailored to your workflows." },
          { title: "CMS Websites", description: "Easy-to-manage websites so your team can update content without touching code." },
          { title: "Website Redesigns", description: "Modernize outdated websites with improved design, performance, and mobile experience." },
          { title: "Performance Optimization", description: "Speed audits, Core Web Vitals fixes, and technical tuning for faster load times." },
        ],
        faqIntro:
          "Our web development solutions are built to solve real business challenges with fast, secure, and scalable websites. From planning and design to development and launch, we help you build a web presence that delivers results.",
        faqs: [
          { question: "How long does it take to build a website?", answer: "A standard business website takes 2–4 weeks. Larger websites or custom web applications typically take 6–10 weeks depending on scope and features." },
          { question: "Will my website work on mobile devices?", answer: "Yes. Every website we build is fully responsive and tested across phones, tablets, and desktops to ensure a seamless experience everywhere." },
          { question: "Is SEO included in web development?", answer: "All our websites are built SEO-ready — clean structure, fast load times, proper meta tags, and schema. Ongoing SEO campaigns are available as a separate service." },
          { question: "Do you provide maintenance after launch?", answer: "Yes. We offer maintenance plans covering updates, backups, security monitoring, and content changes so your website stays fast and secure." },
        ],
      },
      {
        slug: "app-development",
        name: "App Development",
        heroTitle: "Application Development Services",
        tagline: "Building powerful apps that drive business growth",
        description:
          "We design and develop high-quality mobile applications that are fast, secure, and easy to use. Our solutions are built to deliver seamless experiences on Android and iOS while supporting your business objectives.",
        intro:
          "From planning and design to development and launch, we ensure a smooth and efficient process that results in scalable apps tailored to your users and market needs.",
        aboutLabel: "App Development",
        aboutTitle: "Apps your users will love to use",
        aboutText:
          "We build native and cross-platform mobile applications focused on performance, clean interfaces, and real business outcomes — from booking systems and customer portals to full product platforms.",
        offeringsTitle: "Apps We Develop",
        offerings: [
          { title: "Business & Booking Apps", description: "Appointment, reservation, and service booking apps that automate your operations." },
          { title: "E-commerce Apps", description: "Mobile shopping experiences with secure payments, carts, and order tracking." },
          { title: "Social & Community Apps", description: "Apps with real-time chat, media sharing, notifications, and engagement features." },
          { title: "Health & Fitness Apps", description: "Workout tracking, wellness programs, and progress dashboards for healthy engagement." },
          { title: "Productivity Apps", description: "Task management, scheduling, and business tools that improve daily productivity." },
          { title: "Custom Enterprise Apps", description: "Internal tools and automation apps built around your company's workflows." },
        ],
        faqIntro:
          "Our app development solutions are built to solve real business challenges with scalable and user-focused mobile applications. From idea validation and design to development and launch, we help you build apps that deliver performance, engagement, and long-term growth.",
        faqs: [
          { question: "Do you build for both Android and iOS?", answer: "Yes. We build cross-platform apps that run beautifully on both Android and iOS from a single codebase, saving time and cost without sacrificing quality." },
          { question: "How much does app development cost?", answer: "Cost depends on features and complexity. After a discovery call we provide a detailed proposal with transparent pricing — no hidden charges." },
          { question: "Will you publish the app to the stores?", answer: "Yes. We handle the complete submission process for Google Play and the Apple App Store, including store listings and compliance." },
          { question: "Do you provide support after launch?", answer: "Yes. We offer ongoing maintenance, updates for new OS versions, performance monitoring, and feature enhancements after launch." },
        ],
      },
      {
        slug: "ui-ux-design",
        name: "UI/UX Design",
        heroTitle: "UI/UX Design Services",
        tagline: "Interfaces that feel effortless and convert better",
        description:
          "We design user interfaces and experiences that improve usability, retention, and customer engagement across web and mobile products.",
        intro:
          "Every screen is designed with intent — reducing friction, guiding users to action, and making your product a pleasure to use.",
        aboutLabel: "Experience Design",
        aboutTitle: "Design that works as good as it looks",
        aboutText:
          "Good design is invisible — users just get where they want to go. We combine research, wireframing, and visual design to craft interfaces that lower drop-offs and raise conversions.",
        offeringsTitle: "What We Design",
        offerings: [
          { title: "UX Research & Audits", description: "Usability audits and user research that uncover friction points and opportunities." },
          { title: "Wireframes & Prototypes", description: "Clickable prototypes that validate flows before a single line of code is written." },
          { title: "Web & App UI Design", description: "Pixel-perfect, consistent interface design systems for web and mobile products." },
          { title: "Design Systems", description: "Reusable component libraries that keep your product consistent as it scales." },
          { title: "Conversion Optimization", description: "Data-driven design improvements to landing pages and funnels that lift conversions." },
          { title: "Interaction Design", description: "Micro-interactions and motion that make products feel responsive and alive." },
        ],
        faqIntro:
          "Our design process is grounded in how real users think and behave. From research to polished UI, we design experiences that keep users engaged and drive measurable results.",
        faqs: [
          { question: "What tools do you design in?", answer: "We primarily work in Figma, delivering organized files, components, and developer-ready specs your team can build from directly." },
          { question: "Do you redesign existing products?", answer: "Yes. We audit your current product, identify usability issues, and redesign it while preserving what already works for your users." },
          { question: "How do you measure design success?", answer: "We define metrics up front — conversion rate, task completion, retention — and validate designs against them through testing and analytics." },
          { question: "Can you work with our developers?", answer: "Absolutely. We hand off clean specs, assets, and design tokens, and stay available during development to ensure faithful implementation." },
        ],
      },
      {
        slug: "ecommerce-development",
        name: "E-commerce Development",
        heroTitle: "E-commerce Development Services",
        tagline: "High-converting stores engineered for revenue growth",
        description:
          "We build online stores engineered for repeat purchases and revenue growth — fast product pages, frictionless checkout, and everything in between.",
        intro:
          "From catalog architecture to payment integration and post-purchase automation, we build stores that sell around the clock.",
        aboutLabel: "E-commerce Architecture",
        aboutTitle: "Stores built to sell, not just to exist",
        aboutText:
          "An online store is a revenue machine — every second of load time and every extra checkout step costs sales. We engineer commerce experiences that maximize conversion and customer lifetime value.",
        offeringsTitle: "What We Deliver",
        offerings: [
          { title: "Custom Online Stores", description: "Branded storefronts with fast browsing, rich product pages, and smooth checkout." },
          { title: "Payment & Shipping Integration", description: "Secure payment gateways, shipping providers, and tax setup for smooth operations." },
          { title: "Product Catalog Architecture", description: "Scalable category and filter structures that help customers find products fast." },
          { title: "Store Migrations", description: "Move platforms without losing SEO rankings, order history, or customer data." },
          { title: "Conversion Rate Optimization", description: "Checkout and product page improvements that turn more visitors into buyers." },
          { title: "Marketing Integrations", description: "Email flows, abandoned-cart recovery, and analytics wired into your store." },
        ],
        faqIntro:
          "Our e-commerce solutions focus on the metrics that matter — conversion rate, average order value, and repeat purchases. We build stores that grow revenue, not just process orders.",
        faqs: [
          { question: "Which e-commerce platforms do you work with?", answer: "We build on modern stacks and popular platforms alike, recommending the best fit based on your catalog size, budget, and growth plans." },
          { question: "Can you migrate my existing store?", answer: "Yes. We handle full migrations — products, customers, orders, and SEO redirects — with zero downtime for your business." },
          { question: "Do you integrate payment gateways for India?", answer: "Yes. We integrate Razorpay, PayU, Stripe, UPI, and international gateways with proper security and compliance." },
          { question: "How do you improve store conversions?", answer: "We optimize page speed, simplify checkout, add trust signals, and set up abandoned-cart recovery — typically lifting conversion significantly within weeks." },
        ],
      },
    ],
  },
  {
    name: "Social Media Services",
    services: [
      {
        slug: "social-media-management",
        name: "Social Media Management",
        heroTitle: "Social Media Management Services",
        tagline: "We grow brands across all platforms",
        description:
          "Strategic content, community engagement, and data-driven growth. We manage your social presence so you can focus on running your business.",
        intro:
          "From content calendars to community management and monthly reporting, we run your social channels like a growth engine.",
        aboutLabel: "Social Media Management",
        aboutTitle: "Consistent presence, compounding growth",
        aboutText:
          "Social media rewards consistency. We plan, create, publish, and engage on your behalf — building real audiences with organic strategies backed by analytics, not vanity metrics.",
        offeringsTitle: "What We Manage",
        offerings: [
          { title: "Content Strategy & Calendars", description: "Monthly content plans aligned with your brand voice, campaigns, and goals." },
          { title: "Content Creation", description: "Posts, reels, stories, and carousels designed and written to stop the scroll." },
          { title: "Community Management", description: "Comment and DM responses that build trust and keep your audience engaged." },
          { title: "Profile Optimization", description: "Bios, highlights, and page setups optimized for discovery and conversions." },
          { title: "Growth Campaigns", description: "Organic growth tactics, collaborations, and hashtag strategies that build real followings." },
          { title: "Analytics & Reporting", description: "Monthly reports tracking followers, engagement, reach, and what to do next." },
        ],
        faqIntro:
          "Every brand has its own voice, audience, and goals on social media. We create tailored strategies that build brand awareness, increase engagement, and turn followers into loyal customers across all major platforms.",
        faqs: [
          { question: "Which platforms do you manage?", answer: "Instagram, Facebook, LinkedIn, YouTube, and X (Twitter). We recommend the mix that fits your audience rather than spreading thin everywhere." },
          { question: "How many posts per month do you create?", answer: "Plans typically range from 12 to 30 posts per month including reels, carousels, and stories — tailored to your goals and budget." },
          { question: "How soon will I see growth?", answer: "Engagement improves within the first month; meaningful follower and lead growth typically shows within 60–90 days of consistent execution." },
          { question: "Do I need to approve content before posting?", answer: "Yes. You review the monthly calendar in advance, request changes, and approve everything before it goes live." },
        ],
      },
      {
        slug: "social-media-marketing",
        name: "Social Media Marketing",
        heroTitle: "Social Media Marketing Services",
        tagline: "Paid social campaigns that turn attention into revenue",
        description:
          "We plan and run paid social campaigns across every major platform — engineered for qualified leads, sales, and measurable return on ad spend.",
        intro:
          "Audience research, creative production, campaign management, and optimization — a complete paid social system under one roof.",
        aboutLabel: "Social Media Marketing",
        aboutTitle: "Every platform, one growth strategy",
        aboutText:
          "Each platform has its own audience and ad playbook. We match your offer to the right channels and creatives, then optimize relentlessly toward cost per lead and return on ad spend.",
        offeringsTitle: "Platforms We Run Ads On",
        offerings: [
          { title: "Instagram & Facebook Ads", description: "Full-funnel Meta campaigns for awareness, lead generation, and conversions." },
          { title: "LinkedIn Ads", description: "B2B campaigns targeting decision-makers by role, industry, and company." },
          { title: "YouTube Ads", description: "Video campaigns on the world's biggest video platform for storytelling and reach." },
          { title: "Google Ads", description: "Search and display campaigns capturing high-intent buyers at the moment they search." },
          { title: "Remarketing Campaigns", description: "Re-engage visitors and warm audiences to recover lost conversions." },
          { title: "Creative & Ad Copy", description: "Scroll-stopping ad creatives and copy tested and iterated for performance." },
        ],
        faqIntro:
          "Our paid social campaigns are built on audience research, strong creative, and continuous optimization — designed to deliver qualified leads and measurable return on every rupee spent.",
        faqs: [
          { question: "What budget do I need to start?", answer: "We run effective campaigns starting from modest budgets. We recommend a starting ad spend based on your industry and goals, then scale what works." },
          { question: "How do you measure campaign success?", answer: "We track cost per lead, conversion rate, and return on ad spend — with transparent dashboards so you always know what your money is doing." },
          { question: "Do you create the ad creatives too?", answer: "Yes. Ad design, video edits, and copywriting are all included — creative quality is the biggest lever in paid social performance." },
          { question: "How long before campaigns become profitable?", answer: "Most campaigns exit the learning phase within 1–2 weeks. Expect meaningful optimization gains within the first 30–45 days." },
        ],
      },
    ],
  },
  {
    name: "SEO & PPC Services",
    services: [
      {
        slug: "seo",
        name: "SEO Services",
        heroTitle: "Search Engine Optimization Services",
        tagline: "Rank higher, get found, grow organic traffic",
        description:
          "Technical SEO, authority building, and keyword growth strategy — including AI-ready search visibility for the way people search today.",
        intro:
          "We build sustainable organic growth systems: technical foundations, content that ranks, and authority that compounds over time.",
        aboutLabel: "Search Optimization",
        aboutTitle: "Organic traffic that compounds",
        aboutText:
          "Paid traffic stops when you stop paying. SEO compounds — every ranking you earn keeps working for you. We combine technical excellence with content strategy to win searches that matter to your revenue.",
        offeringsTitle: "What We Optimize",
        offerings: [
          { title: "Technical SEO", description: "Site speed, crawlability, indexing, and Core Web Vitals — the foundation of rankings." },
          { title: "Keyword Strategy", description: "Research-driven keyword maps targeting terms your buyers actually search." },
          { title: "On-Page SEO", description: "Optimized titles, content structure, internal linking, and schema markup." },
          { title: "Content SEO", description: "Blog and landing page content engineered to rank and convert." },
          { title: "Local SEO", description: "Google Business Profile optimization and local rankings for location-based businesses." },
          { title: "Authority Building", description: "Quality backlink acquisition and digital PR that build lasting domain authority." },
        ],
        faqIntro:
          "Our SEO campaigns are built for sustainable, long-term growth — technical foundations, content that answers real search intent, and authority that keeps compounding.",
        faqs: [
          { question: "How long does SEO take to show results?", answer: "Initial improvements show in 6–8 weeks; significant ranking and traffic growth typically takes 3–6 months depending on competition and site history." },
          { question: "Do you guarantee #1 rankings?", answer: "No honest agency can. We guarantee proven processes, transparent reporting, and consistent growth in rankings, traffic, and leads." },
          { question: "What is AI-ready search visibility?", answer: "We optimize your content to be cited by AI search experiences like Google AI Overviews and ChatGPT — the fastest-growing way people find businesses." },
          { question: "Do you provide SEO reports?", answer: "Yes. Monthly reports covering rankings, organic traffic, conversions, and completed work — plus a clear plan for the next month." },
        ],
      },
      {
        slug: "ppc",
        name: "Performance PPC",
        heroTitle: "Performance PPC Services",
        tagline: "ROI-focused campaigns that capture buyers at the right moment",
        description:
          "ROI-focused campaigns across Google Ads and remarketing systems — built to capture high-intent buyers and convert them.",
        intro:
          "Every rupee of ad spend is tracked to a result. We build, optimize, and scale campaigns with relentless focus on cost per acquisition.",
        aboutLabel: "Performance PPC",
        aboutTitle: "Paid search that pays for itself",
        aboutText:
          "PPC puts you in front of buyers at the exact moment of intent. We combine precise targeting, compelling ad copy, and conversion-optimized landing pages so clicks become customers, not costs.",
        offeringsTitle: "Campaigns We Run",
        offerings: [
          { title: "Google Search Ads", description: "Capture high-intent searches with tightly themed ad groups and compelling copy." },
          { title: "Display & Discovery Ads", description: "Visual campaigns that build awareness across millions of websites and apps." },
          { title: "Shopping Ads", description: "Product listing campaigns that put your catalog in front of ready-to-buy shoppers." },
          { title: "Remarketing Systems", description: "Bring back visitors who didn't convert with strategically sequenced ads." },
          { title: "Landing Page Optimization", description: "Dedicated landing pages built and tested to maximize conversion from every click." },
          { title: "Tracking & Attribution", description: "Proper conversion tracking so you know exactly which campaigns drive revenue." },
        ],
        faqIntro:
          "Our PPC management is built around one metric: return on investment. We optimize continuously — keywords, bids, ads, and landing pages — to drive down cost per acquisition.",
        faqs: [
          { question: "How is PPC different from SEO?", answer: "PPC delivers immediate visibility through paid placements; SEO builds lasting organic presence. The strongest strategies use both together." },
          { question: "What's the minimum ad budget?", answer: "We work with budgets of all sizes. After understanding your goals we recommend a starting spend that can generate statistically meaningful results." },
          { question: "How quickly will I see leads?", answer: "Campaigns can start generating leads within days of launch. Optimization over the first month typically halves the initial cost per lead." },
          { question: "Do you manage the entire funnel?", answer: "Yes — keyword research, ads, landing pages, tracking, and reporting. You get a complete acquisition system, not just ad management." },
        ],
      },
    ],
  },
  {
    name: "Creative Services",
    services: [
      {
        slug: "video-production",
        name: "Video Production",
        heroTitle: "Video Production Services",
        tagline: "Cinematic brand films that people remember",
        description:
          "Professional video shooting that captures your brand story — from concept and scripting to final cut, in 4K cinematic quality.",
        intro:
          "Great brands are built through stories people remember. We plan, shoot, and deliver films that cut through the noise.",
        aboutLabel: "Video Production",
        aboutTitle: "Filmmaking first, marketing second",
        aboutText:
          "We don't start with marketing — we start with storytelling. Professional lighting, cinematic camera work, and narrative structure that makes your brand impossible to ignore.",
        offeringsTitle: "What We Shoot",
        offerings: [
          { title: "Brand Films", description: "Signature films that tell your story and anchor your entire content strategy." },
          { title: "Product Videos", description: "Crisp, compelling product showcases for websites, ads, and launches." },
          { title: "Corporate Videos", description: "Company profiles, founder stories, and culture films that build trust." },
          { title: "Event Coverage", description: "Multi-camera event films and highlight reels that capture the energy." },
          { title: "Testimonial Videos", description: "Customer story films — the most persuasive content a brand can own." },
          { title: "Ad Film Production", description: "Performance-ready ad creatives shot for social and digital campaigns." },
        ],
        faqIntro:
          "From concept to final delivery, our production process is built to make filming easy for you and the results unforgettable for your audience.",
        faqs: [
          { question: "Do you handle scripting and concepts?", answer: "Yes. Every production starts with concept development, scripting, and storyboarding so the shoot day is smooth and the story is strong." },
          { question: "What equipment do you shoot on?", answer: "Professional cinema cameras, 4K resolution, professional lighting, and audio — broadcast-quality output for every project." },
          { question: "How long does a video project take?", answer: "A typical brand film takes 2–4 weeks from concept to final delivery. Simple product or testimonial videos can be faster." },
          { question: "Do you travel for shoots?", answer: "Yes. We shoot on location wherever your story is — offices, factories, events, or outdoor locations." },
        ],
      },
      {
        slug: "video-editing",
        name: "Video Editing",
        heroTitle: "Video Editing Services",
        tagline: "Edits that keep audiences watching to the end",
        description:
          "Professional editing that turns raw footage into engaging content — cinematic edits, reels, and long-form videos built for retention.",
        intro:
          "Pacing, sound design, motion graphics, and color — every cut is made to hold attention and drive action.",
        aboutLabel: "Video Editing",
        aboutTitle: "Where raw footage becomes content that performs",
        aboutText:
          "The edit is where videos win or lose. We craft hooks in the first three seconds, pace for retention, and polish with color grading, captions, and sound design that make content feel premium.",
        offeringsTitle: "What We Edit",
        offerings: [
          { title: "Reels & Shorts", description: "Fast-paced vertical edits with hooks, captions, and trends that drive reach." },
          { title: "YouTube Videos", description: "Long-form edits with storytelling structure, b-roll, and retention editing." },
          { title: "Ad Creatives", description: "Performance ad edits with multiple hooks and variations for testing." },
          { title: "Motion Graphics", description: "Animated logos, titles, and explainers that add polish and clarity." },
          { title: "Color Grading", description: "Cinematic color treatment that gives your footage a signature look." },
          { title: "Podcast & Interview Edits", description: "Multi-camera conversation edits with clips cut for social distribution." },
        ],
        faqIntro:
          "We edit for the platform and the goal — a YouTube video, an Instagram reel, and a paid ad each demand a different rhythm. Our editors know the difference.",
        faqs: [
          { question: "What's your typical turnaround time?", answer: "Reels and shorts: 24–48 hours. Long-form videos: 3–5 days. Rush delivery is available for time-sensitive campaigns." },
          { question: "How do revisions work?", answer: "Every project includes revision rounds. You give timestamped feedback and we refine until it's right." },
          { question: "Can you edit from our existing footage?", answer: "Yes. Send us raw footage from any camera or phone and we'll turn it into polished, platform-ready content." },
          { question: "Do you provide captions and subtitles?", answer: "Yes. Styled captions, subtitles, and on-screen text are included — essential for social media where most videos play muted." },
        ],
      },
      {
        slug: "graphic-designing",
        name: "Graphic Designing",
        heroTitle: "Graphic Design Services",
        tagline: "Visual identities that make brands memorable",
        description:
          "From logos to brand identity, social media graphics to print materials — we create visuals that make your brand instantly recognizable.",
        intro:
          "Consistent, striking design across every touchpoint — so your brand looks as good as it performs.",
        aboutLabel: "Graphic Design",
        aboutTitle: "Design that builds recognition",
        aboutText:
          "People remember what they see. We craft visual systems — logos, colors, typography, and templates — that make every post, page, and pitch unmistakably yours.",
        offeringsTitle: "What We Design",
        offerings: [
          { title: "Logo & Brand Identity", description: "Distinctive logos and complete identity systems with usage guidelines." },
          { title: "Social Media Graphics", description: "Post, story, and carousel templates that keep your feed on-brand." },
          { title: "Marketing Collateral", description: "Brochures, flyers, banners, and presentations that sell professionally." },
          { title: "Packaging Design", description: "Product packaging that stands out on shelves and in unboxing videos." },
          { title: "Ad Creatives", description: "Static and animated ad designs built for click-through and conversions." },
          { title: "Print Design", description: "Business cards, signage, and print materials with press-ready files." },
        ],
        faqIntro:
          "Great design is strategy made visible. Every color, font, and layout choice we make is in service of how you want your brand to be perceived.",
        faqs: [
          { question: "What do I receive with a logo project?", answer: "Full logo suite — primary, secondary, and icon versions in all formats (AI, SVG, PNG, PDF) plus a brand guideline document." },
          { question: "How many concepts do you present?", answer: "We present 2–3 distinct concepts, then refine your chosen direction through revision rounds until it's perfect." },
          { question: "Can you match our existing brand style?", answer: "Yes. We work within your existing guidelines or help evolve them — whichever your brand needs." },
          { question: "Do you design for both digital and print?", answer: "Yes. From Instagram posts to billboards, we deliver correctly formatted, production-ready files for any medium." },
        ],
      },
    ],
  },
  {
    name: "Other Services",
    services: [
      {
        slug: "crm-solutions",
        name: "CRM Solutions",
        heroTitle: "CRM Software Solutions",
        tagline: "Your business doesn't need more leads. It needs a better system.",
        description:
          "SIDPIN CRM helps businesses organize operations, automate workflows, and create a seamless customer experience — from first inquiry to repeat purchase.",
        intro:
          "One system for inquiries, customers, follow-ups, payments, and communication — tailored to how your business actually works.",
        aboutLabel: "CRM Solutions",
        aboutTitle: "One CRM. Built for every business.",
        aboutText:
          "Most businesses lose opportunities because there's no structured process to manage them. Our CRM brings leads, bookings, payments, and follow-ups into one organized dashboard your team will actually use.",
        offeringsTitle: "Industries We Serve",
        offerings: [
          { title: "Yoga & TTC Centers", description: "Batch enrolments, automated reminders, and student progress tracking." },
          { title: "Hotels & Resorts", description: "Seamless guest management from booking inquiry to checkout." },
          { title: "Restaurants & Cafés", description: "Reservation systems with loyalty programs and customer history." },
          { title: "Travel Agencies", description: "Itinerary builders, visa tracking, and complete documentation workflows." },
          { title: "Schools & Colleges", description: "Student lifecycle management from admission inquiry to alumni." },
          { title: "Custom CRM Builds", description: "Tailored CRM systems designed around your unique business process." },
        ],
        faqIntro:
          "Our CRM is built for real businesses — hotels, schools, studios, and agencies that need structure, not complexity. Simple enough for your team, powerful enough for your growth.",
        faqs: [
          { question: "Is the CRM customizable to my business?", answer: "Yes. Modules, fields, and workflows are configured around your process — you don't change how you work to fit the software." },
          { question: "Does it include WhatsApp and email automation?", answer: "Yes. Automated follow-ups, booking confirmations, and reminders go out via WhatsApp, email, and SMS." },
          { question: "How long does implementation take?", answer: "Standard implementations go live in 1–2 weeks including data import, configuration, and team training." },
          { question: "Is my business data secure?", answer: "Yes. Role-based access, encrypted storage, and daily backups keep your customer data safe and private." },
        ],
      },
      {
        slug: "marketing-automation",
        name: "Marketing Automation",
        heroTitle: "Marketing Automation Services",
        tagline: "Growth systems that work while you sleep",
        description:
          "Lead nurturing, CRM flows, email automation, and scalable growth systems that convert leads consistently — without manual effort.",
        intro:
          "We design automated journeys that follow up with every lead, every time — so nothing falls through the cracks.",
        aboutLabel: "Marketing Automation",
        aboutTitle: "Every lead followed up. Automatically.",
        aboutText:
          "Speed and consistency win deals. We build automation that responds to inquiries instantly, nurtures leads with the right message at the right time, and hands your sales team warm, ready buyers.",
        offeringsTitle: "What We Automate",
        offerings: [
          { title: "Lead Nurturing Flows", description: "Multi-step email and WhatsApp sequences that warm leads to purchase." },
          { title: "Email Automation", description: "Welcome series, newsletters, and campaigns triggered by user behavior." },
          { title: "WhatsApp Automation", description: "Instant responses, booking confirmations, and follow-up sequences." },
          { title: "CRM Workflows", description: "Automatic lead assignment, stage updates, and task creation for your team." },
          { title: "Abandoned Cart Recovery", description: "Recover lost e-commerce sales with perfectly timed reminder sequences." },
          { title: "Reporting Dashboards", description: "Automated performance reports so you always know what's working." },
        ],
        faqIntro:
          "Automation isn't about replacing the human touch — it's about making sure every lead gets attention instantly, and your team spends time on conversations that close.",
        faqs: [
          { question: "Which tools do you work with?", answer: "We work with leading email, WhatsApp, and CRM platforms — and recommend the stack that fits your budget and use case." },
          { question: "Will automation feel robotic to my customers?", answer: "No. We write sequences in your brand voice with smart timing and personalization — customers experience helpful follow-up, not spam." },
          { question: "What results can I expect?", answer: "Clients typically see faster lead response times, 2–3x more follow-up touchpoints, and meaningfully higher lead-to-customer conversion." },
          { question: "Can automation work with my existing CRM?", answer: "Yes. We integrate with your current tools, or set up our CRM if you need a complete system." },
        ],
      },
      {
        slug: "managed-cloud",
        name: "Managed Cloud",
        heroTitle: "Managed Cloud Services",
        tagline: "Deploy anywhere. Scale everywhere.",
        description:
          "Deployment and management on AWS, Azure, Google Cloud, and DigitalOcean — secure, scalable, and always on.",
        intro:
          "From server setup to monitoring, backups, and scaling — we run your infrastructure so you can run your business.",
        aboutLabel: "Managed Cloud",
        aboutTitle: "Enterprise-grade infrastructure without the enterprise team",
        aboutText:
          "Your applications deserve infrastructure that never sleeps. We deploy, secure, monitor, and scale your systems across any cloud — with SSL, firewalls, backups, and 24/7 monitoring as standard.",
        offeringsTitle: "What We Manage",
        offerings: [
          { title: "Cloud Deployment", description: "Application deployment on AWS, Azure, Google Cloud, and DigitalOcean." },
          { title: "Auto-Scaling Setup", description: "Infrastructure that automatically scales resources based on traffic." },
          { title: "Managed Databases", description: "Secure, backed-up, and performance-optimized database management." },
          { title: "Enterprise Security", description: "SSL certificates, firewalls, and DDoS protection configured properly." },
          { title: "CDN Integration", description: "Lightning-fast content delivery to users anywhere in the world." },
          { title: "24/7 Monitoring", description: "Real-time alerts, uptime monitoring, and proactive issue resolution." },
        ],
        faqIntro:
          "We handle the infrastructure layer completely — deployment, security, scaling, and monitoring — so your team ships features instead of fighting servers.",
        faqs: [
          { question: "Which cloud providers do you support?", answer: "AWS, Microsoft Azure, Google Cloud, and DigitalOcean. We recommend the platform that best fits your workload and budget." },
          { question: "Can you migrate my existing servers?", answer: "Yes. We plan and execute migrations with minimal downtime — including databases, storage, and DNS cutover." },
          { question: "What does 24/7 monitoring include?", answer: "Uptime checks, resource alerts, error tracking, and automated recovery — with humans notified the moment something needs attention." },
          { question: "How do you handle backups?", answer: "Automated daily backups with tested restore procedures and retention policies suited to your compliance needs." },
        ],
      },
    ],
  },
];

export function getAllServices(): Service[] {
  return serviceCategories.flatMap((category) => category.services);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getAllServices().find((service) => service.slug === slug);
}

export function getCategoryForService(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((category) =>
    category.services.some((service) => service.slug === slug)
  );
}
