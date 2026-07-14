import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { FinalCTA } from "@/components/sections";
import { copy } from "@/lib/data";

export const metadata: Metadata = {
  title: `${copy.faq.label} | ${copy.brand.name}`,
  description: copy.faq.text,
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <SectionPageLayout>
      <FAQ />
      <FinalCTA />
    </SectionPageLayout>
  );
}