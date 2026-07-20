import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { FinalCTA } from "@/components/sections";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { copy } = await getI18n();

  return {
    title: `${copy.faq.label} | ${copy.brand.name}`,
    description: copy.faq.text,
    alternates: {
      canonical: "/faq",
    },
  };
}

export default function FAQPage() {
  return (
    <SectionPageLayout>
      <FAQ />
      <FinalCTA />
    </SectionPageLayout>
  );
}