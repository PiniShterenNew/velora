import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { NichePage } from "@/components/sections/NichePage";
import { getCopy, getNicheBySlug, isLocale, locales } from "@/lib/data";

const slug = "website-for-beauty-clinics";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const niche = getNicheBySlug(getCopy(locale), slug);

  return {
    title: niche.metaTitle,
    description: niche.metaDescription,
    alternates: { canonical: `/${locale}/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const niche = getNicheBySlug(getCopy(locale), slug);

  return (
    <SectionPageLayout locale={locale}>
      <NichePage niche={niche} locale={locale} />
    </SectionPageLayout>
  );
}
