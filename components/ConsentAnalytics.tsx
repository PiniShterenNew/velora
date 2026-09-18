"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONSENT_CHANGE_EVENT, COOKIE_CONSENT_STORAGE_KEY } from "@/lib/consent";

export function ConsentAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setEnabled(window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) === "granted");

    const handleConsentChange = (event: Event) => {
      const consent = (event as CustomEvent<"granted" | "denied">).detail;
      setEnabled(consent === "granted");
      if (consent === "denied") {
        window.gtag?.("consent", "update", { analytics_storage: "denied" });
      }
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
  }, []);

  useEffect(() => {
    if (!enabled || !ready) return;
    window.gtag?.("config", measurementId, { send_page_view: false });
  }, [enabled, measurementId, ready]);

  useEffect(() => {
    if (!enabled || !ready) return;
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [enabled, measurementId, pathname, ready]);

  if (!enabled) return null;

  return (
    <Script
      id="google-analytics"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
      onReady={() => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
        window.gtag("consent", "default", { analytics_storage: "granted" });
        window.gtag("js", new Date());
        setReady(true);
      }}
    />
  );
}
