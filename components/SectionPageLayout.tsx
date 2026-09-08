import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Locale } from "@/lib/data";

export function SectionPageLayout({ locale, children }: { locale: Locale; children: ReactNode }) {
  const skipLabel = locale === "he" ? "דלג לתוכן המרכזי" : "Skip to main content";

  return (
    <>
      <a className="skip-link" href="#main-content">{skipLabel}</a>
      <Header locale={locale} />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
