import type { Metadata } from "next";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { Process, FinalCTA } from "@/components/sections";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { copy } = await getI18n();

  return {
    title: `${copy.process.label} | ${copy.brand.name}`,
    description: copy.process.text,
    alternates: {
      canonical: "/process",
    },
  };
}

export default function ProcessPage() {
  return (
    <SectionPageLayout>
      <Process />
      <FinalCTA />
    </SectionPageLayout>
  );
}