import { ArrowLeft, MessageCircle } from "lucide-react";
import { copy } from "@/lib/data";
import ValuePropositionBackground from "./ValuePropositionBackground";

const whatsappUrl = copy.brand.whatsappUrl;
const services = copy.hero.services;

export function Hero() {
  return (
    <section className="hero" id="top">
      <ValuePropositionBackground />
      <div className="hero-container site-container">
        <div className="hero-content">
          <p className="eyebrow reveal reveal-1">{copy.hero.eyebrow}</p>

          <h1 className="hero-title">
            <span className="hero-title-first reveal reveal-2">{copy.hero.title.first}</span>
            <span className="hero-title-second reveal reveal-3">{copy.hero.title.second}</span>
            <span className="hero-title-third reveal reveal-4">{copy.hero.title.thirdPrefix} <em>{copy.hero.title.thirdEmphasis}</em>{copy.hero.title.thirdSuffix}</span>
          </h1>

          <p className="hero-text reveal reveal-5">{copy.hero.text}</p>

          <div className="hero-actions reveal reveal-6">
            <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              {copy.common.whatsappFull} <MessageCircle aria-hidden="true" />
            </a>
            <a className="btn btn-secondary" href="#decision-board">
              {copy.common.watchProcess} <ArrowLeft aria-hidden="true" />
            </a>
          </div>

          <p className="hero-micro-trust reveal reveal-7">{copy.hero.microTrust}</p>

          <ul className="hero-tags reveal reveal-8" aria-label={copy.aria.studioServices}>
            {services.slice(0, 4).map((service) => (
              <li className={`service-chip ${service === "Story Scrolling" ? "featured" : ""}`} key={service}>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-tags-marquee" aria-hidden="true">
        <div className="hero-tags-marquee-track">
          {[...services, ...services].map((service, index) => (
            <span dir="rtl" className={`service-chip ${index % 3 === 0 ? "featured" : ""}`} key={`${service}-${index}`}>
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
