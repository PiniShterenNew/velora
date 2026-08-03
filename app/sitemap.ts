import type { MetadataRoute } from "next";
import { copy, locales } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const baseUrl = siteUrl.replace(/\/$/, "");

  const languages = Object.fromEntries(locales.map((locale) => [locale, `${baseUrl}/${locale}`]));
  const nicheLanguages = (slug: string) =>
    Object.fromEntries(locales.map((locale) => [locale, `${baseUrl}/${locale}/${slug}`]));
  const legalLanguages = (path: string) =>
    Object.fromEntries(locales.map((locale) => [locale, `${baseUrl}/${locale}/${path}`]));

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    });
  }

  for (const niche of copy.nichePages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/${niche.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: nicheLanguages(niche.slug) },
      });
    }
  }

  for (const path of ["accessibility", "privacy"]) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/${path}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
        alternates: { languages: legalLanguages(path) },
      });
    }
  }

  return entries;
}