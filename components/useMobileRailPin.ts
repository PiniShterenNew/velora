"use client";

import { type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Pins a mobile section while vertical scroll advances a card deck in place:
 * the active card holds the stage, crossing a scroll threshold sends it up
 * and out while the next one rises in from below (CSS drives the motion via
 * data-pos). Without JS or with reduced motion it degrades to native swipe.
 */
export function useMobileRailPin(sectionRef: RefObject<HTMLElement | null>, railSelector: string) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const media = gsap.matchMedia();

      media.add("(max-width: 700px) and (prefers-reduced-motion: no-preference)", () => {
        const rail = section.querySelector<HTMLElement>(railSelector);
        const viewport = section.querySelector<HTMLElement>(".rail-viewport");
        if (!rail || !viewport) return;

        const cards = Array.from(rail.children) as HTMLElement[];
        if (cards.length < 2) return;

        viewport.classList.add("rail-pin-active");
        let activeIndex = -1;

        const scrollStep = () => Math.min(520, Math.max(360, window.screen.height * 0.55));
        const pinTop = () => {
          const rootStyles = window.getComputedStyle(document.documentElement);
          const headerHeight = Number.parseFloat(rootStyles.getPropertyValue("--header-height-mobile")) || 68;
          return headerHeight + 8;
        };

        const showCard = (nextIndex: number) => {
          const clampedIndex = Math.max(0, Math.min(cards.length - 1, nextIndex));
          if (clampedIndex === activeIndex) return;

          activeIndex = clampedIndex;
          cards.forEach((card, index) => {
            card.dataset.pos = index < activeIndex ? "above" : index > activeIndex ? "below" : "active";
          });
        };

        /* Equal scroll share per card: card N holds the stage for exactly one
           scrollStep of pinned scroll before the next one takes over. */
        const cardAt = (progress: number) => Math.min(cards.length - 1, Math.floor(progress * cards.length));

        const trigger = ScrollTrigger.create({
          trigger: viewport,
          /* Pin once the deck itself clears the fixed mobile header, so the
             screen holds only the cards — not the section's heading. */
          start: () => `top ${pinTop()}px`,
          end: () => `+=${scrollStep() * cards.length}`,
          pin: true,
          pinReparent: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            showCard(cardAt(self.progress));
          },
          onUpdate: (self) => {
            showCard(cardAt(self.progress));
          },
        });

        return () => {
          trigger.kill();
          viewport.classList.remove("rail-pin-active");
          cards.forEach((card) => delete card.dataset.pos);
          gsap.set(rail, { clearProps: "transform" });
        };
      });

      return () => media.revert();
    },
    { scope: sectionRef }
  );
}
