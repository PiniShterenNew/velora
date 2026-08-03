"use client";

import { useEffect, useState } from "react";
import { getCopy, type Locale } from "@/lib/data";
import { WhatsAppIcon } from "./WhatsAppIcon";

const SCROLL_THRESHOLD = 500;

export function MobileStickyCta({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let pastHero = false;
    let nearFinalCta = false;
    const update = () => setVisible(pastHero && !nearFinalCta);

    const onScroll = () => {
      pastHero = window.scrollY > SCROLL_THRESHOLD;
      update();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const finalCta = document.getElementById("contact");
    let observer: IntersectionObserver | undefined;
    if (finalCta) {
      observer = new IntersectionObserver(([entry]) => {
        nearFinalCta = entry.isIntersecting;
        update();
      });
      observer.observe(finalCta);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className={`mobile-sticky-cta${visible ? " visible" : ""}`}>
      <a className="btn btn-primary" href={copy.brand.whatsappUrl} target="_blank" rel="noopener noreferrer">
        {copy.common.mobileWhatsapp} <WhatsAppIcon />
      </a>
    </div>
  );
}
