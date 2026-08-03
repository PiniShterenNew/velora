import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Frank_Ruhl_Libre, Rubik } from "next/font/google";
import Script from "next/script";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { GoogleAnalyticsPageView } from "@/components/GoogleAnalyticsPageView";
import { getCopy, isLocale, locales, type Locale } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";

import "../styles/tokens.css";
import "../globals.css";
import "../styles/utilities.css";
import "../styles/layout.css";
import "../styles/components/buttons.css";
import "../styles/components/sections-shared.css";
import "../styles/components/decision-board.css";
import "../styles/components/services.css";
import "../styles/components/work.css";
import "../styles/components/process.css";
import "../styles/components/about.css";
import "../styles/components/testimonials.css";
import "../styles/components/faq.css";
import "../styles/components/final-cta.css";
import "../styles/components/footer.css";
import "../styles/components/legal.css";
import "../styles/components/niche.css";
import "../styles/hero.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  display: "swap",
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  variable: "--font-frank-ruhl-libre",
  style: "normal",
  display: "swap",
});

const siteUrl = getSiteUrl();
const baseUrl = siteUrl.replace(/\/$/, "");
const ogImageUrl = `${baseUrl}/og-image.jpg`;
const googleAnalyticsId = "G-YBED7XP2EX";

const localeMeta: Record<Locale, { dir: "rtl" | "ltr"; ogLocale: string }> = {
  he: { dir: "rtl", ogLocale: "he_IL" },
  en: { dir: "ltr", ogLocale: "en_US" },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};

  const copy = getCopy(rawLocale);
  const pagePath = rawLocale === "he" ? "/he" : "/en";

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: pagePath,
      languages: {
        he: "/he",
        en: "/en",
      },
    },

    verification: {
      google: "jrq-mj9t6iTGB0dhkcR9900W8waismDq31eIh15w74I",
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: `${baseUrl}${pagePath}`,
      siteName: "NorthSpark Studio",
      locale: localeMeta[rawLocale].ogLocale,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: copy.metadata.opengraphAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: [ogImageUrl],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f0",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  return (
    <html lang={locale} dir={localeMeta[locale].dir} className={`${rubik.variable} ${frankRuhlLibre.variable}`}>
      <body>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}', { send_page_view: false });
          `}
        </Script>
        <GoogleAnalyticsPageView measurementId={googleAnalyticsId} />
        <AnalyticsEvents />
        {children}
      </body>
    </html>
  );
}
