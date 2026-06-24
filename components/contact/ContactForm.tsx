"use client";

export default function ContactForm() {
  return (
    <section className="py-40 bg-[#1a1c1d]">
      <div className="max-w-4xl mx-auto px-[24px] md:px-[80px]">
        <div className="text-center mb-24">
          <p className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.3em] uppercase mb-6">
            Enquiry
          </p>
          <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-[#e2e2e4]">
            Tell Us About Your Vision.
          </h2>
        </div>
        <form
          className="glass-card p-8 md:p-12 lg:p-20 space-y-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <label className="block font-['Geist'] text-xs font-medium text-[#e2e2e4]/60 uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-[#e2e2e4]/20 py-4 focus:ring-0 focus:border-[#e9c349] transition-colors font-['Inter'] text-lg text-[#e2e2e4] outline-none"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div>
              <label className="block font-['Geist'] text-xs font-medium text-[#e2e2e4]/60 uppercase tracking-widest mb-2">
                Company
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-[#e2e2e4]/20 py-4 focus:ring-0 focus:border-[#e9c349] transition-colors font-['Inter'] text-lg text-[#e2e2e4] outline-none"
                placeholder="Nexus Corp"
                type="text"
              />
            </div>
            <div>
              <label className="block font-['Geist'] text-xs font-medium text-[#e2e2e4]/60 uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-[#e2e2e4]/20 py-4 focus:ring-0 focus:border-[#e9c349] transition-colors font-['Inter'] text-lg text-[#e2e2e4] outline-none"
                placeholder="john@nexus.com"
                type="email"
              />
            </div>
            <div>
              <label className="block font-['Geist'] text-xs font-medium text-[#e2e2e4]/60 uppercase tracking-widest mb-2">
                Phone
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-[#e2e2e4]/20 py-4 focus:ring-0 focus:border-[#e9c349] transition-colors font-['Inter'] text-lg text-[#e2e2e4] outline-none"
                placeholder="+1 234 567 890"
                type="tel"
              />
            </div>
            <div>
              <label className="block font-['Geist'] text-xs font-medium text-[#e2e2e4]/60 uppercase tracking-widest mb-2">
                Website
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-[#e2e2e4]/20 py-4 focus:ring-0 focus:border-[#e9c349] transition-colors font-['Inter'] text-lg text-[#e2e2e4] outline-none"
                placeholder="www.nexus.com"
                type="url"
              />
            </div>
            <div>
              <label className="block font-['Geist'] text-xs font-medium text-[#e2e2e4]/60 uppercase tracking-widest mb-2">
                Industry
              </label>
              <select className="w-full bg-transparent border-0 border-b border-[#e2e2e4]/20 py-4 focus:ring-0 focus:border-[#e9c349] transition-colors font-['Inter'] text-lg text-[#e2e2e4] outline-none appearance-none">
                <option className="bg-black">Technology</option>
                <option className="bg-black">Fashion</option>
                <option className="bg-black">Real Estate</option>
                <option className="bg-black">Entertainment</option>
              </select>
            </div>
            <div>
              <label className="block font-['Geist'] text-xs font-medium text-[#e2e2e4]/60 uppercase tracking-widest mb-2">
                Budget Range
              </label>
              <select className="w-full bg-transparent border-0 border-b border-[#e2e2e4]/20 py-4 focus:ring-0 focus:border-[#e9c349] transition-colors font-['Inter'] text-lg text-[#e2e2e4] outline-none appearance-none">
                <option className="bg-black">$10k - $25k</option>
                <option className="bg-black">$25k - $50k</option>
                <option className="bg-black">$50k - $100k</option>
                <option className="bg-black">$100k+</option>
              </select>
            </div>
            <div>
              <label className="block font-['Geist'] text-xs font-medium text-[#e2e2e4]/60 uppercase tracking-widest mb-2">
                Timeline
              </label>
              <select className="w-full bg-transparent border-0 border-b border-[#e2e2e4]/20 py-4 focus:ring-0 focus:border-[#e9c349] transition-colors font-['Inter'] text-lg text-[#e2e2e4] outline-none appearance-none">
                <option className="bg-black">ASAP</option>
                <option className="bg-black">1-3 Months</option>
                <option className="bg-black">3-6 Months</option>
                <option className="bg-black">Flexible</option>
              </select>
            </div>
          </div>
          <div className="pt-6">
            <label className="block font-['Geist'] text-xs font-medium text-[#e2e2e4]/60 uppercase tracking-widest mb-2">
              Project Description
            </label>
            <textarea
              className="w-full bg-transparent border-0 border-b border-[#e2e2e4]/20 py-4 focus:ring-0 focus:border-[#e9c349] transition-colors font-['Inter'] text-lg text-[#e2e2e4] resize-none outline-none"
              placeholder="Tell us about the challenges and goals of your project..."
              rows={4}
            />
          </div>
          <div className="flex justify-center pt-12">
            <button
              className="bg-[#e9c349] text-[#3c2f00] px-16 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(233,195,73,0.4)] transition-all duration-500 w-full md:w-auto"
              type="submit"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
