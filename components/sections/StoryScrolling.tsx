"use client";

import Image from "next/image";
import { Fragment, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { CtaLabel } from "../CtaLabel";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { SectionIntro, whatsappUrl } from "./shared";

type StoryCardData = typeof copy.storyScrolling.cards[number];

type StoryCard = {
  illustration: string;
  content: ReactNode;
};

function renderStoryCardContent(card: StoryCardData) {
  if ("path" in card && card.path) {
    return <><p>{card.intro}</p><div className="story-path">
      {card.path.map((item, index) => (
        <Fragment key={item}>
          {index > 0 && <i aria-hidden="true" />}
          <span>{item}</span>
        </Fragment>
      ))}
    </div></>;
  }

  return <>{card.lines && <p>{card.lines.map((line) => <span key={line}>{line}<br /></span>)}{card.strong && <strong>{card.strong}</strong>}</p>}{!card.lines && card.intro && <><p>{card.intro}</p>{card.strong && <strong className="story-result">{card.strong}</strong>}</>}</>;
}

const cards: StoryCard[] = copy.storyScrolling.cards.map((card) => ({
  illustration: card.illustration,
  content: renderStoryCardContent(card),
}));

export function StoryScrolling() {
  const sectionRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();

    const ctx = gsap.context(() => {
      media.add("(min-width: 801px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".story-card", section);
        setActiveIndex(0);

        const triggers = cards.map((card, index) => ScrollTrigger.create({
          trigger: card,
          start: "top 62%",
          end: "bottom 38%",
          invalidateOnRefresh: true,
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        }));

        const refresh = window.requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          window.cancelAnimationFrame(refresh);
          triggers.forEach((trigger) => trigger.kill());
        };
      });

      media.add("(max-width: 800px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".story-card", section);
        setActiveIndex(0);

        let latestIndex = 0;
        const updateMobileFocus = () => {
          if (!cards.length) return;

          const focusY = window.innerHeight * 0.56;
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
          onUpdate: updateMobileFocus,
          onRefresh: updateMobileFocus,
        });

        const refresh = window.requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          window.cancelAnimationFrame(refresh);
          focusTrigger.kill();
        };
      });
    }, section);

    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!markerRef.current) return;
    const isMobile = window.matchMedia("(max-width: 800px)").matches;
    if (isMobile) return;

    gsap.to(markerRef.current, {
      top: `${14 + activeIndex * 24}%`,
      duration: .45,
      ease: "power3.out",
    });
  }, [activeIndex]);

  return <section id="story-scrolling" className="page-section story-section" ref={sectionRef}><AmbientBackground variant="story" /><div className="container story-shell">
    <SectionIntro label={copy.storyScrolling.label} title={copy.storyScrolling.title} text={copy.storyScrolling.text} />
    <div className="story-demo">
      <aside className="story-sticky" aria-label={copy.aria.storyCompass}>
        <div className="story-compass-copy">
          <span>{copy.storyScrolling.compassBefore}</span>
          <i aria-hidden="true" />
          <strong>{copy.storyScrolling.compassAfter}</strong>
        </div>
        <div className="story-compass-visual" aria-hidden="true">
          <span className="story-compass-line" />
          <span className="story-progress-marker" ref={markerRef} />
          <span className="story-compass-node story-compass-node-1" />
          <span className="story-compass-node story-compass-node-2" />
          <span className="story-compass-node story-compass-node-3" />
          <span className="story-compass-node story-compass-node-4" />
          <span className="story-compass-shape story-compass-shape-1" />
          <span className="story-compass-shape story-compass-shape-2" />
        </div>
      </aside>
      <div className="story-cards">{cards.map((card, i) =>
        <Reveal key={i}>
          <article
            className={`story-card ${activeIndex === i ? "is-active" : ""}`}
            data-step={`0${i + 1}`}
          >
            <div className="story-illustration" aria-hidden="true">
              <Image src={card.illustration} alt="" width={196} height={196} />
            </div>
            <div className="story-card-copy">
              <span className="story-index">0{i + 1}</span>
              {card.content}
            </div>
          </article>
        </Reveal>
      )}
      </div>
    </div>
    <Reveal className="story-cta"><p>{copy.storyScrolling.ctaText}</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={copy.storyScrolling.ctaLabel}><CtaLabel desktop={copy.storyScrolling.ctaLabel} mobile={copy.storyScrolling.ctaLabelMobile} /> <WhatsAppIcon /></a></Reveal>
  </div></section>;
}
