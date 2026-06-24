export default function Footer() {
  const contactLinks = [
    { name: "hello@sidpin.com", href: "mailto:hello@sidpin.com" },
    { name: "London, UK", href: "#" },
    { name: "Los Angeles, CA", href: "#" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Vimeo", href: "#" },
  ];

  return (
    <footer className="w-full py-[80px] bg-[#0c0e10] border-t border-[#988e90]/10">
      <div className="grid grid-cols-12 px-[80px] gap-[32px] w-full max-w-[1440px] mx-auto relative overflow-hidden">
        {/* Brand Column */}
        <div className="col-span-12 md:col-span-4 mb-16 md:mb-0">
          <div className="font-['Hanken_Grotesk'] text-[40px] font-medium text-[#e2e2e4] mb-8">
            SIDPIN
          </div>
          <p className="font-['Inter'] text-base text-[#cfc4c5] max-w-xs">
            Elevating global brands through cinematic precision and strategic
            innovation.
          </p>
        </div>

        {/* Contact Column */}
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-['Geist'] text-xs font-medium text-[#e9c349] uppercase tracking-widest mb-8">
            Contact
          </h5>
          <ul className="space-y-4">
            {contactLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[#cfc4c5] hover:text-[#e2e2e4] hover:translate-x-1 transition-all inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Column */}
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-['Geist'] text-xs font-medium text-[#e9c349] uppercase tracking-widest mb-8">
            Social
          </h5>
          <ul className="space-y-4">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[#cfc4c5] hover:text-[#e2e2e4] hover:translate-x-1 transition-all inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright Column */}
        <div className="col-span-12 md:col-span-4 mt-12 md:mt-0 text-left md:text-right flex flex-col justify-between">
          <div className="font-['Hanken_Grotesk'] text-[80px] font-medium text-[#e2e2e4] opacity-10 absolute -right-20 -bottom-10 pointer-events-none select-none whitespace-nowrap">
            CINEMATIC PRECISION
          </div>
          <p className="font-['Inter'] text-base text-[#cfc4c5] mt-auto">
            © 2024 SIDPIN. ALL RIGHTS RESERVED. CINEMATIC PRECISION.
          </p>
        </div>
      </div>
    </footer>
  );
}
