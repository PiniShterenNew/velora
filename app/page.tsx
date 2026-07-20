import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DecisionBoard } from "@/components/DecisionBoard";
import { Services, Work, Testimonials, Process, About, FinalCTA } from "@/components/sections";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { getI18n } from "@/lib/i18n/server";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export default async function Home() {
  const { copy } = await getI18n();

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#northspark`,
    name: "NorthSpark Studio",
    alternateName: "NorthSpark",
    url: siteUrl,
    logo: `${siteUrl}/full-logo.svg`,
    description: copy.metadata.description,
    serviceType: copy.hero.eyebrow,
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
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

  return <>
    <a className="skip-link" href="#main-content">{copy.common.skipToContent}</a>
    <Header />
    <main id="main-content" tabIndex={-1}>
      <Analytics />
      <Hero />
      <DecisionBoard />
      <Services />
      <Work />
      <Testimonials />
      <Process />
      <About />
      <FAQ />
      <FinalCTA />
    </main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
    <Footer />
  </>;
}