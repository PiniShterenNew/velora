"use client";

import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { SectionIntro, whatsappUrl } from "./shared";

const removedProjectNames = new Set(["Cash Plus"]);
const projectEntries = copy.work.projects
  .map((project, originalIndex) => ({ project, originalIndex }))
  .filter(({ project }) => !removedProjectNames.has(project.name));
const featuredEntry = projectEntries.find(({ project }) => project.featured);
const orderedProjectEntries = featuredEntry
  ? [featuredEntry, ...projectEntries.filter((entry) => entry !== featuredEntry)]
  : projectEntries;

function ProjectPreview({ name, index, screenshots }: { name: string; index: number; screenshots?: { desktop: string; mobile: string } }) {
  if (screenshots) {
    return <div className={`project-preview project-screenshot preview-${index}`}>
      <div className="desktop-shot">
        <div className="shot-chrome" aria-hidden="true"><i /><i /><i /></div>
        <Image src={screenshots.desktop} alt={`${name} desktop website screenshot`} fill sizes="(min-width: 1180px) 46vw, (min-width: 900px) 58vw, 92vw" />
      </div>
      <div className="mobile-shot">
        <Image src={screenshots.mobile} alt={`${name} mobile website screenshot`} fill sizes="160px" />
      </div>
    </div>;
  }

  return <div className={`project-preview project-abstract preview-${index}`} aria-hidden="true">
    <div className="abstract-desktop">
      <div className="shot-chrome"><i /><i /><i /></div>
      <div className="abstract-hero" />
      <div className="abstract-grid"><span /><span /><span /></div>
      <div className="abstract-rows"><span /><span /><span /></div>
    </div>
    <div className="abstract-mobile"><span /><span /><span /></div>
    <strong>{name}</strong>
  </div>;
}

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card", section);
      setActiveIndex(0);

      let latestIndex = 0;
      const updateWorkFocus = () => {
        if (!cards.length) return;

        const focusY = window.innerHeight * 0.54;
        const nextIndex = cards.reduce((closestIndex, card, index) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const closestRect = cards[closestIndex].getBoundingClientRect();
          const closestCenter = closestRect.top + closestRect.height / 2;

          return Math.abs(cardCenter - focusY) < Math.abs(closestCenter - focusY) ? index : closestIndex;
        }, 0);

        if (nextIndex !== latestIndex) {
          latestIndex = nextIndex;
          setActiveIndex(nextIndex);
        }
      };

      const focusTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        invalidateOnRefresh: true,
        onUpdate: updateWorkFocus,
        onRefresh: updateWorkFocus,
      });

      const refresh = window.requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        window.cancelAnimationFrame(refresh);
        focusTrigger.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return <section id="work" className="page-section work-section" ref={sectionRef}><AmbientBackground variant="work" /><div className="container">
    <SectionIntro label={copy.work.label} title={copy.work.title} text={copy.work.text} />
    <div className="work-grid has-scroll-focus">{orderedProjectEntries.map(({ project, originalIndex }, i) => <Reveal className={`work-grid-item ${project.featured ? "is-featured" : ""}`} key={project.name} delay={(i % 2) * 100}><article className={`work-card ${project.featured ? "featured" : ""} ${activeIndex === i ? "is-active" : ""}`}><ProjectPreview name={project.name} index={originalIndex + 1} screenshots={project.screenshots} /><div className="work-content"><h3>{project.name}</h3><p>{project.text}</p>{"outcome" in project && project.outcome && <p className="work-outcome">{project.outcome}</p>}<ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a href={project.href} target="_blank" rel="noopener noreferrer">{copy.common.watchProject} <ArrowUpLeft aria-hidden="true" /></a></div></article></Reveal>)}</div>
    <Reveal className="section-action action-with-note"><p>{copy.work.ctaText}</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{copy.work.ctaLabel} <WhatsAppIcon /></a></Reveal>
  </div></section>;
}
