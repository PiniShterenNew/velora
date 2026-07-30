"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ValuePropositionBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const layers: Array<[string, number]> = [
          [".hero-parallax-slow", 26],
          [".hero-parallax-mid", -42],
          [".hero-parallax-fast", 58],
        ];

        for (const [selector, y] of layers) {
          gsap.to(selector, {
            y,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }, rootRef);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <div ref={rootRef} className="hero-decoration value-proposition-background shared-page-background" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1680" width="100%" height="100%" preserveAspectRatio="xMidYMin slice">
        <defs>
          <pattern id="velora-dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="#B86B3E" />
          </pattern>
        </defs>

        <g className="hero-geometries">
          {/* Depth groups carry the scroll drift; the shapes inside keep their CSS transforms. */}
          <g className="hero-parallax-slow">
            <circle className="hero-geometry hero-geometry-peach" cx="-28" cy="178" r="164" />
            <circle className="hero-geometry hero-geometry-olive" cx="1472" cy="720" r="206" />
            <rect className="hero-geometry hero-geometry-capsule" x="248" y="142" width="122" height="42" rx="21" />
            <circle className="hero-geometry hero-geometry-transition-circle" cx="-18" cy="940" r="210" />
          </g>

          <g className="hero-parallax-mid">
            <rect className="hero-geometry hero-geometry-square" x="92" y="618" width="124" height="124" />
            <path className="hero-geometry hero-geometry-triangle" d="M1278 94L1372 238H1184Z" />
            <path className="hero-geometry hero-geometry-hexagon" d="M1164 570L1205 546L1246 570V618L1205 642L1164 618Z" />
            <rect className="hero-geometry hero-geometry-transition-square" x="1180" y="900" width="154" height="154" />
            <path className="hero-geometry hero-geometry-transition-hexagon" d="M116 1490L166 1461L216 1490V1548L166 1577L116 1548Z" />
          </g>

          <g className="hero-parallax-fast">
            <rect className="hero-dot-field" x="64" y="382" width="104" height="164" fill="url(#velora-dot-grid)" />
            <path className="hero-geometry hero-geometry-transition-triangle" d="M164 1210L252 1346H76Z" />
            <rect className="hero-dot-field hero-dot-field-transition" x="1240" y="1190" width="120" height="200" fill="url(#velora-dot-grid)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
