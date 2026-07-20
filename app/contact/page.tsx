import type { Metadata } from "next";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { FinalCTA } from "@/components/sections";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { copy } = await getI18n();

  return {
    title: `${copy.navigation.contactLabel} | ${copy.brand.name}`,
    description: copy.finalCta.text,
    alternates: {
      canonical: "/contact",
    },
  };
}

export default function ContactPage() {
  return (
    <SectionPageLayout>
      <FinalCTA />
    </SectionPageLayout>
  );
}