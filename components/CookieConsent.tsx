"use client";

import { useEffect, useState } from "react";
import { getCopy, type Locale } from "@/lib/data";
import { CONSENT_CHANGE_EVENT, COOKIE_CONSENT_STORAGE_KEY, OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/consent";

type Consent = "granted" | "denied";

function updateConsent(value: Consent) {
  window.gtag?.("consent", "update", { analytics_storage: value });
}

function removeAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (name === "_ga" || name?.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  });
}

export function CookieConsent({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const [visible, setVisible] = useState(false);
  const localePath = (href: string) => `/${locale}${href}`;

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (stored === "granted" || stored === "denied") {
      updateConsent(stored);
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    const openSettings = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("cookie-consent-open", visible);
  }, [visible]);

  const choose = (value: Consent) => {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    updateConsent(value);
    if (value === "denied") removeAnalyticsCookies();
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: value }));
    setVisible(false);
  };

  return (
    <div className={`cookie-consent${visible ? " visible" : ""}`} role="region" aria-live="polite" aria-label={copy.cookieConsent.ariaLabel}>
      <div className="cookie-consent-inner">
        <p>
          {copy.cookieConsent.message}{" "}
          <a href={localePath("/privacy")}>{copy.cookieConsent.privacyLinkLabel}</a>
        </p>
        <div className="cookie-consent-actions">
          <button type="button" className="btn btn-secondary" onClick={() => choose("denied")}>
            {copy.cookieConsent.decline}
          </button>
          <button type="button" className="btn btn-primary" onClick={() => choose("granted")}>
            {copy.cookieConsent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
