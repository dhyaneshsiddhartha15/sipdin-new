/**
 * Translations for English and Arabic
 * Add all text content here for multi-language support
 */

import type { Language } from "./locale";

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.caseStudies": "Case Studies",
    "nav.pricing": "Pricing",
    "nav.studio": "Studio",
    "nav.allServices": "All Services",
    "nav.email": "hello@sidpin.com",

    // Language Switcher
    "lang.language": "Language",
    "lang.region": "Region & Currency",

    // Hero Section
    "hero.title": "Stories That Move Brands Forward",
    "hero.subtitle": "We create cinematic content, digital experiences, and growth systems that help modern brands stand out, connect, and grow.",
    "hero.cta": "Start Your Project",

    // Pricing Section - Home
    "pricing.title": "Simple, Transparent & Fair Pricing",
    "pricing.subtitle": "High-quality websites, 3D experiences & custom CRM solutions that drive results.",
    "pricing.pricingFor": "Pricing for",
    "pricing.requiredFor": "Required for",
    "pricing.includes": "Includes",
    "pricing.getStarted": "Get Started",

    // Business Types
    "business.hotel": "Hotels and restaurants",
    "business.school": "Schools and institutes",
    "business.clinic": "Clinics and hospitals",
    "business.realestate": "Real estate and builders",
    "business.retail": "Retail and e-commerce",
    "business.yoga": "Yoga and fitness",
    "business.influencer": "Influencer and portfolio",
    "business.other": "Other",

    // Service Names
    "service.website": "Website development",
    "service.3d-website": "3D website development",
    "service.crm": "Custom CRM",
    "service.app": "App development",
    "service.ecommerce": "E-commerce website (Shopify)",
    "service.social-media": "Social media management",
    "service.content": "Content creation",

    // Pricing Tiers
    "tier.starter": "Starter",
    "tier.growth": "Growth",
    "tier.premium": "Premium",
    "tier.recommended": "Recommended",

    // Periods
    "period.oneTime": "one-time",
    "period.perMonth": "/mo",

    // Plans - Website Development
    "plan.website.starter.features.1": "5–7 page custom-designed site",
    "plan.website.starter.features.2": "Mobile responsive design",
    "plan.website.starter.features.3": "Basic SEO setup",
    "plan.website.starter.features.4": "1 revision round",
    "plan.website.starter.features.5": "WhatsApp/contact integration",
    "plan.website.growth.features.1": "Custom design",
    "plan.website.growth.features.2": "Up to 12 pages",
    "plan.website.growth.features.3": "Self-editable CMS",
    "plan.website.growth.features.4": "On-page SEO",
    "plan.website.growth.features.5": "Google Maps/booking integration",
    "plan.website.growth.features.6": "2 revision rounds",
    "plan.website.premium.features.1": "Fully custom multi-page site",
    "plan.website.premium.features.2": "Advanced animations",
    "plan.website.premium.features.3": "Multi-location/branch pages",
    "plan.website.premium.features.4": "CRM/booking integration",
    "plan.website.premium.features.5": "Priority support",

    // Addon Services
    "addon.3d": "3D & Interactive",
    "addon.3d.note": "Immersive 3D elements & animations",
    "addon.logo": "Logo & Branding",
    "addon.logo.note": "Professional logo & brand identity",
    "addon.content": "Content Writing",
    "addon.content.note": "SEO-friendly content that converts",
    "addon.maintenance": "Maintenance",
    "addon.maintenance.note": "Ongoing updates & website care",
    "addon.marketing": "Digital Marketing",
    "addon.marketing.note": "SEO, Social Media & PPC campaigns",

    // Everything You Need Section
    "everything.title": "Everything you need to grow.",
    "everything.subtitle": "Whether you're a startup, an agency, or a global brand — Sidpin has the team and the tools you need to make it happen.",

    // Services Cards
    "services.design": "Creative Design",
    "services.designDesc": "Brand identity, UI/UX and graphics that make you unforgettable.",
    "services.web": "Web Development",
    "services.webDesc": "Fast, scalable websites and apps built to convert.",
    "services.seo": "SEO & Ads",
    "services.seoDesc": "Rank higher and turn clicks into paying customers.",
    "services.video": "Video Production",
    "services.videoDesc": "Scroll-stopping video and motion for every channel.",
    "services.ai": "AI Automation",
    "services.aiDesc": "AI agents and automations that do the busywork for you.",
    "services.learnMore": "Learn more →",

    // Footer
    "footer.rights": "All rights reserved.",

    // Hero Section - Slides
    "hero.web.eyebrow": "Digital Delivery",
    "hero.web.title": "We build digital products that actually get delivered.",
    "hero.web.subtitle": "End-to-end websites, apps and platforms — designed, built and shipped by one trusted digital partner.",
    "hero.web.cta": "See our work",
    "hero.web.tab": "Web & Product",

    "hero.seo.eyebrow": "Growth Marketing",
    "hero.seo.title": "Rank #1 and turn clicks into customers.",
    "hero.seo.subtitle": "SEO, Google & Meta Ads engineered around revenue — more visibility, more qualified traffic, more conversions.",
    "hero.seo.cta": "Explore SEO & Ads",
    "hero.seo.tab": "SEO & Ads",

    "hero.design.eyebrow": "Creative Studio",
    "hero.design.title": "Design that doesn't just look good. It works.",
    "hero.design.subtitle": "Brand identity, UI/UX and graphics designed to make your brand unforgettable and impossible to ignore.",
    "hero.design.cta": "Explore Design",
    "hero.design.tab": "Design & Brand",

    "hero.automation.eyebrow": "AI & Automation",
    "hero.automation.title": "AI agents that do the busywork for you.",
    "hero.automation.subtitle": "Automate follow-ups, qualify leads, and sync data — while you focus on closing deals and growing your business.",
    "hero.automation.cta": "Explore Automation",
    "hero.automation.tab": "AI & Automation",

    "hero.video.eyebrow": "Video Production",
    "hero.video.title": "Scroll-stopping video for every channel.",
    "hero.video.subtitle": "Cinematic ads, product demos, and brand stories that capture attention and drive action across all platforms.",
    "hero.video.cta": "Explore Video",
    "hero.video.tab": "Video & Motion",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.caseStudies": "دراسات الحالة",
    "nav.pricing": "التسعير",
    "nav.studio": "الاستوديو",
    "nav.allServices": "جميع الخدمات",
    "nav.email": "hello@sidpin.com",

    // Language Switcher
    "lang.language": "اللغة",
    "lang.region": "المنطقة والعملة",

    // Hero Section
    "hero.title": "قصص تدفع العلامات التجارية إلى الأمام",
    "hero.subtitle": "نحن نصنع محتوى سينمائي وتجارب رقمية وأنظمة نمو تساعد العلامات التجارية الحديثة على التميز والاتصال والنمو.",
    "hero.cta": "ابدأ مشروعك",

    // Pricing Section - Home
    "pricing.title": "تسعير بسيط وشفاف وعادل",
    "pricing.subtitle": "مواقع عالية الجودة وتجارب ثلاثية الأبعاد وحلول إدارة علاقات العملاء المخصصة التي تحقق النتائج.",
    "pricing.pricingFor": "التسعير لـ",
    "pricing.requiredFor": "مطلوب لـ",
    "pricing.includes": "يتضمن",
    "pricing.getStarted": "ابدأ الآن",

    // Business Types
    "business.hotel": "الفنادق والمطاعم",
    "business.school": "المدارس والمعاهد",
    "business.clinic": "العيادات والمستشفيات",
    "business.realestate": "العقار والمقاولين",
    "business.retail": "التجارة الإلكترونية",
    "business.yoga": "اليوغا واللياقة",
    "business.influencer": "المؤثرين ومعرض الأعمال",
    "business.other": "أخرى",

    // Service Names
    "service.website": "تطوير المواقع",
    "service.3d-website": "تطوير المواقع ثلاثية الأبعاد",
    "service.crm": "إدارة علاقات العملاء المخصصة",
    "service.app": "تطوير التطبيقات",
    "service.ecommerce": "موقع التجارة الإلكترونية (شوبيفاي)",
    "service.social-media": "إدارة وسائل التواصل الاجتماعي",
    "service.content": "إنشاء المحتوى",

    // Pricing Tiers
    "tier.starter": "المبتدئ",
    "tier.growth": "النمو",
    "tier.premium": "المتميز",
    "tier.recommended": "موصى به",

    // Periods
    "period.oneTime": "دفعة واحدة",
    "period.perMonth": "/شهر",

    // Plans - Website Development
    "plan.website.starter.features.1": "موقع مخصص من 5-7 صفحات",
    "plan.website.starter.features.2": "تصميم متجاوب مع جميع الأجهزة",
    "plan.website.starter.features.3": "إعداد تحسين محركات البحث الأساسي",
    "plan.website.starter.features.4": "جولة مراجعة واحدة",
    "plan.website.starter.features.5": "تكامل واتساب/التواصل",
    "plan.website.growth.features.1": "تصميم مخصص",
    "plan.website.growth.features.2": "حتى 12 صفحة",
    "plan.website.growth.features.3": "نظام إدارة محتوى قابل للتعديل",
    "plan.website.growth.features.4": "تحسين محركات البحث في الصفحة",
    "plan.website.growth.features.5": "تكامل خرائط جوجل/الحجز",
    "plan.website.growth.features.6": "جولتا مراجعة",
    "plan.website.premium.features.1": "موقع متعدد الصفحات بالكامل",
    "plan.website.premium.features.2": "رسوم متقدمة",
    "plan.website.premium.features.3": "صفحات متعددة المواقع/الفروع",
    "plan.website.premium.features.4": "تكامل إدارة علاقات العملاء/الحجز",
    "plan.website.premium.features.5": "دعم أولوي",

    // Addon Services
    "addon.3d": "ثلاثي الأبعاد وتفاعلي",
    "addon.3d.note": "عناصر ورسوم متطورة ثلاثية الأبعاد",
    "addon.logo": "الشعار والهوية",
    "addon.logo.note": "شعار احترافي وهوية العلامة التجارية",
    "addon.content": "كتابة المحتوى",
    "addon.content.note": "محتوى صديق لتحسين محركات البحث يحول",
    "addon.maintenance": "الصيانة",
    "addon.maintenance.note": "التحديثات المستمرة ورعاية الموقع",
    "addon.marketing": "التسويق الرقمي",
    "addon.marketing.note": "تحسين محركات البحث، وسائل التواصل الاجتماعي والإعلانات",

    // Everything You Need Section
    "everything.title": "كل ما تحتاجه للنمو.",
    "everything.subtitle": "سواء كنت شركة ناشئة أو وكالة أو علامة تجارية عالمية — لدى سيدبين الفريق والأدوات التي تحتاجها لتحقيق ذلك.",

    // Services Cards
    "services.design": "التصميم الإبداعي",
    "services.designDesc": "هوية العلامة، واجهة المستخدم وتجربة المستخدم والرسومات التي تجعلك لا يُنسى.",
    "services.web": "تطوير الويب",
    "services.webDesc": "مواقع وتطبيقات سريعة وقابلة للتوسع مبنية للتحويل.",
    "services.seo": "تحسين محركات البحث والإعلانات",
    "services.seoDesc": "احصل على ترتيب أعلى وحول النقرات إلى عملاء يدفعون.",
    "services.video": "إنتاج الفيديو",
    "services.videoDesc": "فيديو وحركة توقف التمرير لكل قناة.",
    "services.ai": "أتمتة الذكاء الاصطناعي",
    "services.aiDesc": "وكلاء الذكاء الاصطناعي والأتمتة التي تقوم بالعمل الروتيني نيابة عنك.",
    "services.learnMore": "اقرأ المزيد ←",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة.",

    // Hero Section - Slides
    "hero.web.eyebrow": "التسليم الرقمي",
    "hero.web.title": "نحن نصنع منتجات رقمية يتم تسليمها بالفعل.",
    "hero.web.subtitle": "مواقع وتطبيقات ومنصات من البداية إلى النهاية — مصممة ومبنية ومشحونة من قبل شريك رقمي موثوق.",
    "hero.web.cta": "شاهد أعمالنا",
    "hero.web.tab": "الويب والمنتجات",

    "hero.seo.eyebrow": "تسويق النمو",
    "hero.seo.title": "احتل المرتبة الأولى وحول النقرات إلى عملاء.",
    "hero.seo.subtitle": "تحسين محركات البحث وإعلانات جوجل وميتا مصممة حول الإيرادات — رؤية أكثر، وزيارات مؤهلة أكثر، وتحويلات أكثر.",
    "hero.seo.cta": "استكشف تحسين محركات البحث والإعلانات",
    "hero.seo.tab": "تحسين محركات البحث والإعلانات",

    "hero.design.eyebrow": "استوديو الإبداع",
    "hero.design.title": "تصميم لا يبدو جيدًا فحسب. إنه يعمل.",
    "hero.design.subtitle": "هوية العلامة، واجهة المستخدم وتجربة المستخدم والرسومات المصممة لجعل علامتك التجارية لا تُنسى ومستحيلة التجاهل.",
    "hero.design.cta": "استكشف التصميم",
    "hero.design.tab": "التصميم والعلامة التجارية",

    "hero.automation.eyebrow": "الذكاء الاصطناعي والأتمتة",
    "hero.automation.title": "وكلاء الذكاء الاصطناعي الذين يقومون بالعمل الروتيني نيابة عنك.",
    "hero.automation.subtitle": "أتمتة المتابعات، وتأهيل العملاء المتوقعين، ومزامنة البيانات — بينما تركز على إغلاق الصفقات ونمو عملك.",
    "hero.automation.cta": "استكشف الأتمتة",
    "hero.automation.tab": "الذكاء الاصطناعي والأتمتة",

    "hero.video.eyebrow": "إنتاج الفيديو",
    "hero.video.title": "فيديو يوقف التمرير لكل قناة.",
    "hero.video.subtitle": "إعلانات سينمائية، وعروض تجريبية للمنتجات، وقصص العلامة التجارية التي تلفت الانتباه وتدفع إلى اتخاذ إجراء عبر جميع المنصات.",
    "hero.video.cta": "استكشف الفيديو",
    "hero.video.tab": "الفيديو والحركة",
  },
};

/**
 * Get translation by key for a given language
 */
export function t(key: TranslationKey, language: Language): string {
  return translations[language][key] || translations.en[key] || key;
}

/**
 * Create a translation hook function
 */
export function createTranslator(language: Language) {
  return (key: TranslationKey): string => t(key, language);
}
