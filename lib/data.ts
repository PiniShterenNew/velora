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

type SiteCopyContract = Omit<typeof siteCopy, "servicesSection" | "testimonials"> & {
  servicesSection: ServicesSectionCopy;
  testimonials: TestimonialsCopy;
};

export const copy: SiteCopyContract = siteCopy;
export type SiteCopy = typeof copy;
