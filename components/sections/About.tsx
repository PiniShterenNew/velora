import Image from "next/image";
import { Check } from "lucide-react";
import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { CtaLabel } from "../CtaLabel";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { whatsappUrl } from "./shared";

const strengths = copy.about.strengths;

export function About() {
  return <section id="about" className="page-section about-section"><AmbientBackground variant="about" /><div className="container about-grid">
    <Reveal className="about-founder"><article className="founder-card"><span className="about-panel-line" aria-hidden="true" /><div className="founder-card-top"><div className="founder-mark" aria-hidden="true"><Image src="/logo.svg" alt="" width={70} height={70} /></div><i aria-hidden="true" /></div><div className="founder-details"><p>{copy.about.expertise}</p></div></article></Reveal>
    <Reveal className="about-copy"><p className="section-label">{copy.about.label}</p><h2>{copy.about.title}</h2>{copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Reveal>
    <div className="strengths">{strengths.map(({ title, text }, i) => <Reveal key={title} delay={i * 70}><div className="strength-item"><span className="strength-icon"><Check aria-hidden="true" /></span><span className="strength-copy"><strong>{title}</strong><span>{text}</span></span></div></Reveal>)}</div>
    <Reveal className="about-cta"><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={copy.about.ctaLabel}><CtaLabel desktop={copy.about.ctaLabel} mobile={copy.about.ctaLabelMobile} /> <WhatsAppIcon /></a></Reveal>
  </div></section>;
}
