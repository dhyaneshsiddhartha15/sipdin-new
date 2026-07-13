import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReleaseFeed from "@/components/products/ReleaseFeed";

export const metadata: Metadata = {
  title: "Our Products | SIDPIN Digital",
  description:
    "Stay up-to-date with the latest enhancements across the Sidpin product suite — new features, improvements, and fixes.",
};

export default function OurProductsPage() {
  return (
    <>
      <Navbar />
      <ReleaseFeed />
      <Footer />
    </>
  );
}
