import Image from "next/image";
import { Check } from "lucide-react";
import { getCopy, type Locale } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";

function AboutTitle({ title, emphasis }: { title: string; emphasis: string }) {
  if (!emphasis || !title.includes(emphasis)) return <>{title}</>;
  const [before, after] = title.split(emphasis);
  return <>{before}<span className="about-title-emphasis">{emphasis}</span>{after}</>;
}

export function About({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const strengths = copy.about.strengths;

  return <section id="about" className="page-section about-section"><AmbientBackground variant="about" /><div className="container about-grid">
    <Reveal className="about-founder"><article className="founder-card"><span className="about-panel-line" aria-hidden="true" /><div className="founder-portrait"><Image className="founder-photo" src="/media/pini-founder.webp" alt={copy.about.founderPhotoAlt} width={860} height={1349} sizes="(max-width: 800px) calc(100vw - 64px), 360px" /></div><div className="founder-details"><p>{copy.about.expertise}</p></div></article></Reveal>
    <Reveal className="about-copy"><p className="section-label">{copy.about.label}</p><h2><AboutTitle title={copy.about.title} emphasis={copy.about.titleEmphasis} /></h2>{copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Reveal>
    <div className="strengths">{strengths.map(({ title, text }, i) => <Reveal key={title} delay={i * 70}><div className="strength-item"><span className="strength-icon"><Check aria-hidden="true" /></span><span className="strength-copy"><strong>{title}</strong><span>{text}</span></span></div></Reveal>)}</div>
  </div></section>;
}
