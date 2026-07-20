import "server-only";
import { cookies, headers } from "next/headers";
import { getDictionary, type SiteCopy } from "@/lib/data";
import {
  LOCALE_COOKIE,
  defaultLocale,
  directionForLocale,
  isLocale,
  type Direction,
  type Locale,
} from "./config";

const LOCALE_HEADER = "x-locale";

/**
 * Resolves the active locale for the current request. The cookie is the source
 * of truth once it exists; on the very first visit the middleware injects an
 * `x-locale` header from geo detection before the cookie is persisted.
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const headerStore = await headers();
  const fromHeader = headerStore.get(LOCALE_HEADER);
  if (isLocale(fromHeader)) return fromHeader;

  return defaultLocale;
}

export interface ServerI18n {
  locale: Locale;
  dir: Direction;
  copy: SiteCopy;
}

export async function getI18n(): Promise<ServerI18n> {
  const locale = await getLocale();

  return {
    locale,
    dir: directionForLocale(locale),
    copy: getDictionary(locale),
  };
}
