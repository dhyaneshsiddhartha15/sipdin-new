import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RecentWorkDetail from "@/components/recent-work/RecentWorkDetail";
import { getAllRecentWork, getRecentWorkBySlug } from "@/lib/recentWork";

export function generateStaticParams() {
  return getAllRecentWork().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = getRecentWorkBySlug(slug);
  if (!work) return { title: "Recent Work | SIDPIN Digital" };
  return {
    title: `${work.brand} — Social Media Campaign | SIDPIN Digital`,
    description: work.intro,
  };
}

export default async function RecentWorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getRecentWorkBySlug(slug);
  if (!work) notFound();

  return (
    <>
      <Navbar />
      <RecentWorkDetail work={work} />
      <Footer />
    </>
  );
}
