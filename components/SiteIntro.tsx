"use client";

import type { AnimationItem } from "lottie-web";
import { useCallback, useEffect, useRef, useState } from "react";

const introSeenKey = "northspark-intro-seen";
const exitDuration = 420;

export function SiteIntro() {
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const skipButtonRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);
  const exitTimerRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  const closeIntro = useCallback(() => {
    if (closingRef.current) return;

    closingRef.current = true;
    try {
      window.sessionStorage.setItem(introSeenKey, "true");
    } catch {
      // Storage can be unavailable in restrictive browser modes.
    }

    setIsLeaving(true);
    exitTimerRef.current = window.setTimeout(() => setIsVisible(false), exitDuration);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hasSeenIntro = false;

    try {
      hasSeenIntro = window.sessionStorage.getItem(introSeenKey) === "true";
    } catch {
      // Continue without persistence when session storage is unavailable.
    }

    if (prefersReducedMotion || hasSeenIntro) {
      setIsVisible(false);
      return;
    }

    let isMounted = true;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    const fallbackTimer = window.setTimeout(closeIntro, 5000);

    document.body.style.overflow = "hidden";
    skipButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeIntro();
      if (event.key === "Tab") {
        event.preventDefault();
        skipButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const loadAnimation = async () => {
      try {
        const { default: lottie } = await import("lottie-web");
        if (!isMounted || !animationContainerRef.current) return;

        const animation = lottie.loadAnimation({
          container: animationContainerRef.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "/animation/northspark-intro.json",
          rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
          },
        });

        animationRef.current = animation;
        animation.addEventListener("complete", closeIntro);
        animation.addEventListener("data_failed", closeIntro);
      } catch {
        closeIntro();
      }
    };

    void loadAnimation();

    return () => {
      isMounted = false;
      window.clearTimeout(fallbackTimer);
      if (exitTimerRef.current !== null) window.clearTimeout(exitTimerRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      animationRef.current?.destroy();
      animationRef.current = null;
      document.body.style.overflow = previousOverflow;

      if (previousFocus instanceof HTMLElement && previousFocus !== document.body && previousFocus.isConnected) {
        previousFocus.focus();
      }
    };
  }, [closeIntro, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`site-intro${isLeaving ? " is-leaving" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="פתיח NorthSpark Studio"
    >
      <div className="site-intro-animation" ref={animationContainerRef} aria-hidden="true" />
      <button className="site-intro-skip" type="button" onClick={closeIntro} ref={skipButtonRef}>
        דלג על הפתיח
      </button>
    </div>
  );
}
