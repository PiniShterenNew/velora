import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Locale } from "@/lib/data";

export function SectionPageLayout({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
