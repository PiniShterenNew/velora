"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/lib/i18n/context";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { LineBreakTitle, SectionIntro } from "./shared";

export function Process() {
  const { copy } = useI18n();
  const process = copy.process.items;
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);
  const lineRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(min-width: 801px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(cardRefs.current, { autoAlpha: 0, y: 24 });
        gsap.set(cardRefs.current.map((card) => card.querySelector(".process-number")), { scale: .82 });
        gsap.set(lineRefs.current, { scaleX: 0, scaleY: 0, transformOrigin: "right center" });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 66%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        cardRefs.current.forEach((card, index) => {
          timeline
            .to(card, { autoAlpha: 1, y: 0, duration: .58 }, index * .14)
            .to(card.querySelector(".process-number"), { scale: 1, duration: .42 }, index * .14 + .08);
        });

        timeline.to(lineRefs.current, {
          scaleX: 1,
          scaleY: 1,
          duration: .62,
          stagger: .12,
        }, .36);
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return <section id="process" className="page-section process-section" ref={sectionRef}><AmbientBackground variant="process" /><div className="container process-inner">
    <SectionIntro label={copy.process.label} title={<LineBreakTitle lines={copy.process.title} />} text={copy.process.text} />
    <div className="process-grid">
      <div className="process-flow" aria-hidden="true">
        <span className="process-flow-line process-flow-line-top" ref={(node) => { if (node) lineRefs.current[0] = node; }} />
        <span className="process-flow-line process-flow-line-turn" ref={(node) => { if (node) lineRefs.current[1] = node; }} />
        <span className="process-flow-line process-flow-line-bottom" ref={(node) => { if (node) lineRefs.current[2] = node; }} />
      </div>
      {process.map(({ number, title, text, illustration }, i) => <Reveal key={number} delay={i * 90}>
        <article className="process-card" ref={(node) => { if (node) cardRefs.current[i] = node; }}>
          <div className="process-card-head">
            <span className="process-number">{number}</span>
            <div className="process-illustration" aria-hidden="true"><Image src={illustration} alt="" width={96} height={96} /></div>
          </div>
          <div className="process-copy"><h3>{title}</h3><p>{text}</p></div>
        </article>
      </Reveal>)}
    </div>
  </div></section>;
}
