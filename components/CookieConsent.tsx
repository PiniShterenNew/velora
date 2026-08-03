"use client";

import { useEffect, useState } from "react";
import { getCopy, type Locale } from "@/lib/data";

const STORAGE_KEY = "ns-cookie-consent";

type Consent = "granted" | "denied";

function updateConsent(value: Consent) {
  window.gtag?.("consent", "update", { analytics_storage: value });
}

export function CookieConsent({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const [visible, setVisible] = useState(false);
  const localePath = (href: string) => `/${locale}${href}`;

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") {
      updateConsent(stored);
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("cookie-consent-open", visible);
  }, [visible]);

  const choose = (value: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    updateConsent(value);
    setVisible(false);
  };

  return (
    <div className={`cookie-consent${visible ? " visible" : ""}`} role="region" aria-label={copy.cookieConsent.ariaLabel}>
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
