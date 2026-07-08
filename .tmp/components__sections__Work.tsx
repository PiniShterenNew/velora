"use client";

import Image from "next/image";
import { ArrowUpLeft, MessageCircle } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { SectionIntro, whatsappUrl } from "./shared";

const projects = [
  { name: "Cash Plus", text: "פלטפורמה דיגיטלית בתחום הפיננסים, עם דגש על הצגת מוצר, בניית אמון, ממשק ברור וחוויית משתמש מודרנית.", tags: ["Product Website", "UX", "Fintech", "Conversion"], href: "https://cashplus-app.com/", featured: true },
  { name: "א.ש אינסטלציה", text: "אתר לעסק שירות מקומי, שנועד ליצור ביטחון מהיר, להסביר את השירותים ולהוביל לקוחות לפנייה ישירה.", tags: ["Local Business", "Service Website", "Trust", "Leads"], href: "https://as-plumbing-cyan.vercel.app/", featured: true, screenshots: { desktop: "/projects/as-plumbing-desktop.webp", mobile: "/projects/as-plumbing-mobile.webp" } },
  { name: "Karen Beauty", text: "אתר למותג יופי, עם שפה נקייה ועדינה שמטרתה לשדר מקצועיות, אסתטיקה ומהימנות.", tags: ["Beauty", "Premium", "Brand Website"], href: "https://karen-beauty.vercel.app/", screenshots: { desktop: "/projects/karen-beauty-desktop.webp", mobile: "/projects/karen-beauty-mobile.webp" } },
  { name: "נותנים באהבה", text: "אתר תרומות שמציג מטרה חברתית בצורה ברורה, בונה אמון ומוביל את המשתמש לפעולת תרומה.", tags: ["Donation", "Nonprofit", "Trust", "CTA"], href: "https://donate.notnim.info/", screenshots: { desktop: "/projects/notnim-beahava-desktop.webp", mobile: "/projects/notnim-beahava-mobile.webp" } },
];

function ProjectPreview({ name, index, screenshots }: { name: string; index: number; screenshots?: { desktop: string; mobile: string } }) {
  if (screenshots) {
    return <div className={`project-preview project-screenshot preview-${index}`}>
      <div className="desktop-shot">
        <div className="shot-chrome" aria-hidden="true"><i /><i /><i /></div>
        <Image src={screenshots.desktop} alt={`${name} desktop website screenshot`} fill sizes="(min-width: 900px) 44vw, 92vw" />
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
    <SectionIntro label="עבודות" title="עבודות שמראות חשיבה, לא רק עיצוב." text="כל פרויקט נבנה סביב מטרה אחרת: להסביר מוצר, לבנות ביטחון, להוביל לפנייה או להציג מותג בצורה המדויקת ביותר." />
    <div className="work-grid has-scroll-focus">{projects.map((project, i) => <Reveal key={project.name} delay={(i % 2) * 100}><article className={`work-card ${project.featured ? "featured" : ""} ${activeIndex === i ? "is-active" : ""}`}><ProjectPreview name={project.name} index={i} screenshots={project.screenshots} /><div className="work-content"><h3>{project.name}</h3><p>{project.text}</p><ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a href={project.href} target="_blank" rel="noreferrer">צפה בפרויקט <ArrowUpLeft aria-hidden="true" /></a></div></article></Reveal>)}</div>
    <Reveal className="section-action action-with-note"><p>רוצה שגם האתר שלך ירגיש מדויק יותר?</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">בוא נדבר <MessageCircle aria-hidden="true" /></a></Reveal>
  </div></section>;
}
