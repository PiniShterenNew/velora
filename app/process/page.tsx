import type { Metadata } from "next";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { Process, FinalCTA } from "@/components/sections";
import { copy } from "@/lib/data";

export const metadata: Metadata = {
  title: `${copy.process.label} | ${copy.brand.name}`,
  description: copy.process.text,
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return (
    <SectionPageLayout>
      <Process />
      <FinalCTA />
    </SectionPageLayout>
  );
}