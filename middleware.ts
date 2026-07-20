import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

const LOCALE_HEADER = "x-locale";
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

/**
 * Picks a locale for a first-time visitor. Visitors located in Israel get
 * Hebrew; everyone else gets English. When geo data is unavailable we fall
 * back to the Accept-Language header, then to the default locale.
 */
function detectLocale(request: NextRequest): Locale {
  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    "";

  if (country) {
    return country.toUpperCase() === "IL" ? "he" : "en";
  }

  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (acceptLanguage) {
    const prefersHebrew = /\b(he|iw)\b/.test(acceptLanguage);
    const prefersEnglish = /\ben\b/.test(acceptLanguage);
    if (prefersEnglish && !prefersHebrew) return "en";
    if (prefersHebrew) return "he";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const existing = request.cookies.get(LOCALE_COOKIE)?.value;
  const hasValidCookie = isLocale(existing);
  const locale: Locale = hasValidCookie ? existing : detectLocale(request);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (!hasValidCookie) {
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: ONE_YEAR_SECONDS,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|json|txt|xml|mp4|webm)).*)",
  ],
};
