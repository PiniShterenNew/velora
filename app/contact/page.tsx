import type { Metadata } from "next";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { FinalCTA } from "@/components/sections";
import { copy } from "@/lib/data";

export const metadata: Metadata = {
  title: `${copy.navigation.contactLabel} | ${copy.brand.name}`,
  description: copy.finalCta.text,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <SectionPageLayout>
      <FinalCTA />
    </SectionPageLayout>
  );
}