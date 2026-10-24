"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/consent";

/**
 * Google Analytics with Consent Mode v2.
 *
 * gtag.js always loads, but every storage type defaults to "denied" before
 * `config` runs. Returning visitors who already accepted get an early
 * `consent update` (in the same inline bootstrap), and the cookie banner (CookieConsent)
 * sends the update when a choice is made. Page views are sent manually on every
 * client-side route change (config uses send_page_view: false), so each
 * navigation is counted exactly once.
 */
export function ConsentAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // The initial page_view is sent by the inline bootstrap below; this effect
    // only reports subsequent client-side navigations.
    if (lastTrackedPath.current === null) {
      lastTrackedPath.current = pathname;
      return;
    }
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  const bootstrap = `
window.dataLayer = window.dataLayer || [];
window.gtag = function gtag(){ window.dataLayer.push(arguments); };
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
try {
  if (window.localStorage.getItem(${JSON.stringify(COOKIE_CONSENT_STORAGE_KEY)}) === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
} catch (e) {}
gtag('js', new Date());
gtag('config', ${JSON.stringify(measurementId)}, { send_page_view: false });
gtag('event', 'page_view', {
  page_path: window.location.pathname,
  page_location: window.location.href,
  page_title: document.title
});
`;

  return (
    <>
      <Script id="ga-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: bootstrap }} />
      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
