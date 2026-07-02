import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/services/ServiceDetail";
import {
  getAllServices,
  getServiceBySlug,
  getCategoryForService,
} from "@/lib/services";

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | SIDPIN Creative Co." };
  return {
    title: `${service.heroTitle} | SIDPIN Creative Co.`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const category = getCategoryForService(slug);

  if (!service || !category) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceDetail service={service} category={category} />
      <Footer />
    </>
  );
}
