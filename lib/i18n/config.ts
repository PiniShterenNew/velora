export const locales = ["he", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "he";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export type Direction = "rtl" | "ltr";

export function isLocale(value: string | undefined | null): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function directionForLocale(locale: Locale): Direction {
  return locale === "he" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "he" ? "en" : "he";
}

export function openGraphLocale(locale: Locale): string {
  return locale === "he" ? "he_IL" : "en_US";
}
