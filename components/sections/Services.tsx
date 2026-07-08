import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { whatsappUrl } from "./shared";

const services = copy.servicesSection.items;

const serviceIllustrations: Record<string, string> = {
  landing: "/illustrations/browser.svg",
  brand: "/illustrations/trust.svg",
  story: "/illustrations/strategy.svg",
  commerce: "/illustrations/shopping.svg",
};

function ServiceIllustration({ kind }: { kind: string }) {
  const src = serviceIllustrations[kind] ?? "/illustrations/browser.svg";

  return <div className={`service-illustration service-illustration-${kind}`} aria-hidden="true">
    <Image className="service-illustration-img" src={src} alt="" width={150} height={150} />
  </div>;
}

export function Services() {
  return <section id="services" className="page-section services-section">
    <AmbientBackground variant="services" />
    <div className="container services-inner">
      <div className="services-intro">
        <Reveal className="services-heading">
          <p className="section-label services-label"><span aria-hidden="true" />{copy.servicesSection.label}</p>
          <h2>{copy.servicesSection.title}</h2>
          <p>{copy.servicesSection.intro}</p>
          <i aria-hidden="true" />
          <p>{copy.servicesSection.note}</p>
        </Reveal>
      </div>
      <div className="services-grid">{services.map((service, i) => <Reveal key={service.title} delay={i * 90}><article className="service-card">
        <span className="service-number">{service.number}</span>
        <ServiceIllustration kind={service.kind} />
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <ul>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </article></Reveal>)}</div>
      <Reveal className="services-action">
        <p className="services-helper-question">{copy.servicesSection.helperQuestion}</p>
        <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><ArrowLeft aria-hidden="true" />{copy.servicesSection.primaryCta}</a>
        <a className="services-process-link" href="#process">{copy.common.watchProcess}</a>
      </Reveal>
    </div>
  </section>;
}
