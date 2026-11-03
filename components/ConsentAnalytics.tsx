"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Google Analytics with Consent Mode v2.
 *
 * gtag.js always loads, but every storage type defaults to "denied" before
 * `config` runs. Returning visitors who already accepted get an early
 * `consent update` (in the root layout bootstrap), and the cookie banner (CookieConsent)
 * sends the update when a choice is made. Page views are sent manually on every
 * client-side route change (config uses send_page_view: false), so each
 * navigation is tracked. GA4 history-based page measurement must be disabled
 * in the web stream when manual page views are used.
 */
export function ConsentAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // The initial page_view is sent by the root layout bootstrap; this effect
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


  return (
    <>
      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
