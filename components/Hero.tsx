import { ArrowLeft } from "lucide-react";
import { getCopy, type Locale } from "@/lib/data";
import { CtaLabel } from "./CtaLabel";
import { WhatsAppIcon } from "./WhatsAppIcon";
import ValuePropositionBackground from "./ValuePropositionBackground";

export function Hero({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const whatsappUrl = copy.brand.whatsappUrl;
  const services = copy.hero.services;
  const heroTitle = `${copy.hero.title.first} ${copy.hero.title.second} ${copy.hero.title.thirdPrefix} ${copy.hero.title.thirdEmphasis}${copy.hero.title.thirdSuffix}`;

  return (
    <section className="hero" id="top">
      <ValuePropositionBackground />
      <div className="hero-container site-container">
        <div className="hero-content">
          <h1 className={`hero-title${locale === "en" ? " hero-title--en" : ""}`} aria-label={heroTitle}>
            <span className="hero-line"><span className="hero-title-first">{copy.hero.title.first}</span></span>
            <span className="hero-line"><span className="hero-title-second">{copy.hero.title.second}</span></span>
            <span className="hero-line"><span className="hero-title-third">{copy.hero.title.thirdPrefix} <em>{copy.hero.title.thirdEmphasis}</em>{copy.hero.title.thirdSuffix}</span></span>
          </h1>

          <p className="hero-text reveal reveal-5">{copy.hero.text}</p>

          <div className="hero-actions reveal reveal-6">
            <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {copy.common.whatsappFull} <WhatsAppIcon />
            </a>
            <a className="btn btn-secondary" href="#process" aria-label={copy.hero.secondaryCta.desktop}>
              <CtaLabel desktop={copy.hero.secondaryCta.desktop} mobile={copy.hero.secondaryCta.mobile} /> <ArrowLeft aria-hidden="true" />
            </a>
            <span className="hero-sticker" aria-hidden="true">{copy.common.noCommitmentBadge}</span>
          </div>

          <p className="hero-micro-trust reveal reveal-7">{copy.hero.microTrust}</p>

          <ul className="sr-only" aria-label={copy.aria.studioServices}>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-tags-marquee" aria-hidden="true">
        <div className="hero-tags-marquee-track">
          {[...services, ...services].map((service, index) => (
            <span dir={locale === "he" ? "rtl" : "ltr"} className={`service-chip ${index % 3 === 0 ? "featured" : ""}`} key={`${service}-${index}`}>
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
