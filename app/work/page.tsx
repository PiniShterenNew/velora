import type { Metadata } from "next";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { Work, FinalCTA } from "@/components/sections";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { copy } = await getI18n();

  return {
    title: `${copy.work.label} | ${copy.brand.name}`,
    description: copy.work.text,
    alternates: {
      canonical: "/work",
    },
  };
}

export default function WorkPage() {
  return (
    <SectionPageLayout>
      <Work />
      <FinalCTA />
    </SectionPageLayout>
  );
}