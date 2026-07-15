import siteCopy from "./site-copy.json";

export interface ServiceItemCopy {
  number: string;
  kind: string;
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

export interface StoryScrollingCardCopy {
  illustration: string;
  intro?: string;
  path?: string[];
  lines?: string[];
  strong?: string;
}

export interface StoryScrollingCopy {
  label: string;
  title: string;
  text: string;
  compassBefore: string;
  compassAfter: string;
  cards: StoryScrollingCardCopy[];
  ctaText: string;
  ctaLabel: string;
  ctaLabelMobile: string;
}
type SiteCopyContract = Omit<typeof siteCopy, "servicesSection" | "testimonials" | "storyScrolling"> & {
  servicesSection: ServicesSectionCopy;
  testimonials: TestimonialsCopy;
  storyScrolling: StoryScrollingCopy;
};

export const copy: SiteCopyContract = siteCopy;
export type SiteCopy = typeof copy;
