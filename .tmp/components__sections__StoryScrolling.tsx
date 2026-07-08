"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { SectionIntro, whatsappUrl } from "./shared";

type StoryCard = {
  illustration: string;
  content: ReactNode;
};

const cards: StoryCard[] = [
  {
    illustration: "/illustrations/browser.svg",
    content: <><p>הלקוח נכנס לאתר.<br />הוא לא מחפש עיצוב.<br /><strong>הוא מחפש תשובה מהירה.</strong></p></>,
  },
  {
    illustration: "/illustrations/message.svg",
    content: <><p>אם המסר מטושטש,<br /><strong>שום עיצוב לא יציל את ההחלטה.</strong></p></>,
  },
  {
    illustration: "/illustrations/strategy.svg",
    content: <><p>אתר נכון מוביל את הלקוח:</p><div className="story-path"><span>מהבנה</span><i aria-hidden="true" /><span>לביטחון</span><i aria-hidden="true" /><span>לפעולה</span></div></>,
  },
  {
    illustration: "/illustrations/trust.svg",
    content: <><p>בסוף, האתר צריך לעשות דבר אחד:</p><strong className="story-result">להפוך עניין לפנייה.</strong></>,
  },
];

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
    <SectionIntro label="Story Scrolling" title="כשהמסר מורכב, הגלילה הופכת אותו לסיפור." text="Story Scrolling מאפשר להוביל את הלקוח דרך רעיון, מוצר או תהליך בצורה הדרגתית. במקום להעמיס את כל המידע בבת אחת, האתר בונה הבנה שלב אחרי שלב." />
    <div className="story-demo">
      <aside className="story-sticky" aria-label="Story Compass">
        <div className="story-compass-copy">
          <span>מעוד עמוד יפה</span>
          <i aria-hidden="true" />
          <strong>למסלול החלטה ברור.</strong>
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
      <div className="story-cards">{cards.map((card, i) => <Reveal key={i}>
        <article
          className={`story-card ${activeIndex === i ? "is-active" : ""}`}
          data-step={`0${i + 1}`}
        >
          <div className="story-illustration" aria-hidden="true"><Image src={card.illustration} alt="" width={196} height={196} /></div>
          <div className="story-card-copy"><span className="story-index">0{i + 1}</span>{card.content}</div>
        </article>
      </Reveal>)}</div>
    </div>
    <Reveal className="story-cta"><p>רוצה אתר שמספר את הסיפור שלך נכון?</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">בוא נדבר על הסיפור שלך <span className="story-button-mark" aria-hidden="true" /></a></Reveal>
  </div></section>;
}
