import Image from "next/image";
import { Check } from "lucide-react";
import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";

const strengths = copy.about.strengths;
const titleEmphasis = "בעצמי";

function AboutTitle({ title }: { title: string }) {
  if (!title.includes(titleEmphasis)) return <>{title}</>;
  const [before, after] = title.split(titleEmphasis);
  return <>{before}<span className="about-title-emphasis">{titleEmphasis}</span>{after}</>;
}

export function About() {
  return <section id="about" className="page-section about-section"><AmbientBackground variant="about" /><div className="container about-grid">
    <Reveal className="about-founder"><article className="founder-card"><span className="about-panel-line" aria-hidden="true" /><div className="founder-portrait"><Image className="founder-photo" src="/media/pini-founder.png" alt="פיני, מייסד NorthSpark Studio" width={1001} height={1570} sizes="(max-width: 800px) calc(100vw - 64px), 360px" /></div><div className="founder-details"><p>{copy.about.expertise}</p></div></article></Reveal>
    <Reveal className="about-copy"><p className="section-label">{copy.about.label}</p><h2><AboutTitle title={copy.about.title} /></h2>{copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Reveal>
    <div className="strengths">{strengths.map(({ title, text }, i) => <Reveal key={title} delay={i * 70}><div className="strength-item"><span className="strength-icon"><Check aria-hidden="true" /></span><span className="strength-copy"><strong>{title}</strong><span>{text}</span></span></div></Reveal>)}</div>
  </div></section>;
}
