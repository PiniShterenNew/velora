"use client";

import { type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * GSAP's documented "horizontal scroll section" pattern (pin + scrub),
 * applied on phones only via gsap.matchMedia. The whole section pins as a
 * full-screen stage while vertical scroll drives the rail horizontally;
 * RTL layout means the track translates rightwards to expose the leftward
 * overflow. Progress is exposed on the section as a --rail-progress CSS
 * variable and a data-rail-active index for progress UI. The section must
 * contain a .rail-viewport clip box that directly wraps the rail.
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

        viewport.classList.add("rail-pin-active");
        section.dataset.railActive = "0";
        section.style.setProperty("--rail-progress", "0");

        const distance = () => Math.max(0, rail.scrollWidth - viewport.clientWidth);
        const cardCount = rail.children.length;

        gsap.to(rail, {
          x: () => distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.55,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            snap: cardCount > 1
              ? { snapTo: 1 / (cardCount - 1), duration: { min: 0.15, max: 0.4 }, ease: "power1.inOut" }
              : undefined,
            onUpdate: (self) => {
              section.style.setProperty("--rail-progress", self.progress.toFixed(4));
              const next = String(Math.round(self.progress * (cardCount - 1)));
              if (section.dataset.railActive !== next) section.dataset.railActive = next;
            },
          },
        });

        return () => {
          viewport.classList.remove("rail-pin-active");
          delete section.dataset.railActive;
          section.style.removeProperty("--rail-progress");
        };
      });
    },
    { scope: sectionRef }
  );
}
