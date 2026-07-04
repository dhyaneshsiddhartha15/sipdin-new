import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSplit from "@/components/contact/ContactSplit";

export const metadata: Metadata = {
  title: "Contact SIDPIN | Have a Project? We Would Love to Help",
  description:
    "Tell us about your project — SEO, web and app development, UI/UX, social media, PPC, or AI automation. SIDPIN turns conversations into growth.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg">
        <ContactSplit />
      </main>
      <Footer />
    </>
  );
}
