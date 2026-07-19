import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import { GoogleAnalyticsPageView } from "@/components/GoogleAnalyticsPageView";
import { SiteIntro } from "@/components/SiteIntro";
import { copy } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";

import "./styles/tokens.css";
import "./globals.css";
import "./styles/utilities.css";
import "./styles/layout.css";
import "./styles/components/buttons.css";
import "./styles/components/sections-shared.css";
import "./styles/components/decision-board.css";
import "./styles/components/services.css";
import "./styles/components/work.css";
import "./styles/components/process.css";
import "./styles/components/about.css";
import "./styles/components/social-proof.css";
import "./styles/components/testimonials.css";
import "./styles/components/faq.css";
import "./styles/components/final-cta.css";
import "./styles/components/footer.css";
import "./styles/components/site-intro.css";
import "./styles/hero.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  display: "swap",
});

const siteUrl = getSiteUrl();
const baseUrl = siteUrl.replace(/\/$/, "");
const ogImageUrl = `${baseUrl}/og-image.png`;
const googleAnalyticsId = "G-YBED7XP2EX";

export const metadata: Metadata = {
  title: copy.metadata.title,
  description: copy.metadata.description,

  metadataBase: new URL(baseUrl),

  alternates: {
    canonical: "/",
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
    url: baseUrl,
    siteName: "NorthSpark Studio",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "NorthSpark Studio: אתרי תדמית, דפי נחיתה וחוויות דיגיטליות",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <body>
        <SiteIntro />
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
        {children}
      </body>
    </html>
  );
}
