import type { Metadata } from "next";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { Services, FinalCTA } from "@/components/sections";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { copy } = await getI18n();

  return {
    title: `${copy.servicesSection.label} | ${copy.brand.name}`,
    description: copy.servicesSection.intro,
    alternates: {
      canonical: "/services",
    },
  };
}

export default function ServicesPage() {
  return (
    <SectionPageLayout>
      <Services />
      <FinalCTA />
    </SectionPageLayout>
  );
}