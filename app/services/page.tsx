import type { Metadata } from "next";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { Services, FinalCTA } from "@/components/sections";
import { copy } from "@/lib/data";

export const metadata: Metadata = {
  title: `${copy.servicesSection.label} | ${copy.brand.name}`,
  description: copy.servicesSection.intro,
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <SectionPageLayout>
      <Services />
      <FinalCTA />
    </SectionPageLayout>
  );
}