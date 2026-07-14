import type { Metadata } from "next";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { Work, FinalCTA } from "@/components/sections";
import { copy } from "@/lib/data";

export const metadata: Metadata = {
  title: `${copy.work.label} | ${copy.brand.name}`,
  description: copy.work.text,
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <SectionPageLayout>
      <Work />
      <FinalCTA />
    </SectionPageLayout>
  );
}