import heCopySource from "./site-copy.json";
import enCopySource from "./site-copy.en.json";

export interface ServiceItemCopy {
  number: string;
  kind: string;
  badge?: string;
  title: string;
  text: string;
  tags: string[];
}

export interface ServicesSectionCopy {
  label: string;
  title: string;
  intro: string;
  scopeNote: string;
  aftercareNote: string;
  helperQuestion: string;
  mobileScrollHint: string;
  primaryCta: string;
  primaryCtaMobile: string;
  items: ServiceItemCopy[];
}

export interface TestimonialCopy {
  quote: string;
  name: string;
  role: string;
}

export interface TestimonialsCopy {
  _comment?: string;
  label: string;
  title: string;
  items: TestimonialCopy[];
}

export interface NichePageCopy {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  painPoints: { title: string; text: string }[];
  projectName: string;
  suggestedPlanNumber: string;
  whatsappMessage: string;
  relatedLinkLabel: string;
}

type SiteCopyContract = Omit<typeof heCopySource, "servicesSection" | "testimonials" | "nichePages"> & {
  servicesSection: ServicesSectionCopy;
  testimonials: TestimonialsCopy;
  nichePages: NichePageCopy[];
};

export type Locale = "he" | "en";
export const locales: Locale[] = ["he", "en"];
export const defaultLocale: Locale = "he";

const copyByLocale: Record<Locale, SiteCopyContract> = {
  he: heCopySource as SiteCopyContract,
  en: enCopySource as SiteCopyContract,
};

export function getCopy(locale: Locale): SiteCopyContract {
  return copyByLocale[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

/** Hebrew copy, for the handful of locale-agnostic call sites (sitemap, robots). */
export const copy = copyByLocale.he;
export type SiteCopy = SiteCopyContract;

export function buildWhatsappUrl(copy: SiteCopyContract, message: string) {
  const phoneDigits = copy.brand.phoneHref.replace("tel:+", "");
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

export function getServiceByNumber(copy: SiteCopyContract, number: string) {
  return copy.servicesSection.items.find((item) => item.number === number);
}

export function getProjectByName(copy: SiteCopyContract, name: string) {
  return copy.work.projects.find((project) => project.name === name);
}

export function getNicheBySlug(copy: SiteCopyContract, slug: string) {
  const niche = copy.nichePages.find((item) => item.slug === slug);
  if (!niche) throw new Error(`Unknown niche page slug: ${slug}`);
  return niche;
}

export function getNicheByProjectName(copy: SiteCopyContract, projectName: string) {
  return copy.nichePages.find((item) => item.projectName === projectName);
}
