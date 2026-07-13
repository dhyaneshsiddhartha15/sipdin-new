import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PolicyPage from "@/components/policy/PolicyPage";
import { FAIR_USAGE_SECTIONS, FAIR_USAGE_EFFECTIVE, FAIR_USAGE_INTRO } from "@/lib/fairUsage";

export const metadata: Metadata = {
  title: "Fair Usage Policy | SIDPIN Digital",
  description:
    "How Sidpin governs the unlimited resources included in our plans so every customer enjoys fast, reliable service.",
};

export default function FairUsagePolicyPage() {
  return (
    <>
      <Navbar />
      <PolicyPage
        eyebrow="Legal"
        title="Fair Usage Policy"
        effective={FAIR_USAGE_EFFECTIVE}
        intro={FAIR_USAGE_INTRO}
        sections={FAIR_USAGE_SECTIONS}
      />
      <Footer />
    </>
  );
}
