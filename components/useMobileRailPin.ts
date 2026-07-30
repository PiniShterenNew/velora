"use client";

import { type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Pins a mobile section while vertical scroll advances a full-width RTL rail.
 * Scroll distance is divided into discrete steps: crossing a threshold moves
 * to the next or previous card instead of scrubbing between cards.
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

        const cardCount = rail.children.length;
        if (cardCount < 2) return;

        viewport.classList.add("rail-pin-active");
        let activeIndex = 0;
        let cardTween: gsap.core.Tween | null = null;

        const scrollStep = () => Math.min(420, Math.max(280, viewport.clientHeight * 0.5));
        const showCard = (nextIndex: number, immediate = false) => {
          const clampedIndex = Math.max(0, Math.min(cardCount - 1, nextIndex));
          if (!immediate && clampedIndex === activeIndex) return;

          activeIndex = clampedIndex;
          cardTween?.kill();
          cardTween = gsap.to(rail, {
            x: () => activeIndex * viewport.clientWidth,
            duration: immediate ? 0 : 0.46,
            ease: "power2.inOut",
            overwrite: "auto",
          });
        };

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${scrollStep() * (cardCount - 1)}`,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            showCard(Math.round(self.progress * (cardCount - 1)), true);
          },
          onUpdate: (self) => {
            showCard(Math.round(self.progress * (cardCount - 1)));
          },
        });

        return () => {
          cardTween?.kill();
          trigger.kill();
          viewport.classList.remove("rail-pin-active");
          gsap.set(rail, { clearProps: "transform" });
        };
      });

      return () => media.revert();
    },
    { scope: sectionRef }
  );
}
