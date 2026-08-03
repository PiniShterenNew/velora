import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { DecisionBoard } from "@/components/DecisionBoard";
import { Services, Work, Testimonials, Process, About, FinalCTA } from "@/components/sections";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { getCopy, isLocale, locales, type Locale } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function buildBusinessSchema(locale: Locale, copy: ReturnType<typeof getCopy>) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/${locale}#northspark`,
    name: "NorthSpark Studio",
    alternateName: "NorthSpark",
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/full-logo.svg`,
    description: copy.metadata.description,
    serviceType: copy.hero.eyebrow,
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    telephone: "+972-54-834-5192",
    email: "pini5192@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+972-54-834-5192",
      email: "pini5192@gmail.com",
      url: copy.brand.whatsappUrl,
    },
    makesOffer: copy.servicesSection.items.map((service) => {
      const [name, price] = service.title.split("|").map((part) => part.trim());
      const priceAmount = price?.replace(/[^\d.]/g, "");

      return {
        "@type": "Offer",
        name,
        price: priceAmount,
        priceCurrency: "ILS",
        itemOffered: {
          "@type": "Service",
          name,
          serviceType: copy.hero.eyebrow,
        },
      };
    }),
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const copy = getCopy(locale);
  const businessSchema = buildBusinessSchema(locale, copy);

  return <>
    <a className="skip-link" href="#main-content">{copy.common.skipLink}</a>
    <Header locale={locale} />
    <main id="main-content" tabIndex={-1}>
      <Analytics />
      <Hero locale={locale} />
      <DecisionBoard locale={locale} />
      <Services locale={locale} />
      <Work locale={locale} />
      <Testimonials locale={locale} />
      <Process locale={locale} />
      <About locale={locale} />
      <FAQ locale={locale} />
      <FinalCTA locale={locale} />
    </main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
    <Footer locale={locale} />
    <MobileStickyCta locale={locale} />
  </>;
}
