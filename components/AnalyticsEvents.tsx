"use client";

import { useEffect } from "react";

function trackEvent(name: string, params: Record<string, string>) {
  window.gtag?.("event", name, params);
}

/* Where on the page the click happened, for the `location` event param. */
function clickLocation(element: Element): string {
  if (element.closest(".mobile-sticky-cta")) return "sticky";
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  const section = element.closest("section");
  if (section?.id) return section.id;
  if (section?.classList.contains("testimonials-section")) return "testimonials";
  return "page";
}

const viewedSections = new Set<string>();

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const faqButton = event.target.closest<HTMLButtonElement>(".faq-item button");
      if (faqButton) {
        if (faqButton.getAttribute("aria-expanded") === "false") {
          const question = faqButton.querySelector("span")?.textContent?.trim() ?? "";
          trackEvent("faq_open", { question });
        }
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const location = clickLocation(link);

      if (href.includes("wa.me")) {
        trackEvent("whatsapp_click", { location });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { location });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { location });
      } else if (link.closest(".work-card")) {
        const project = link.closest(".work-card")?.querySelector("h3")?.textContent?.trim() ?? "";
        trackEvent("project_click", { project_name: project });
      }
    };

    document.addEventListener("click", onClick);

    const sections = document.querySelectorAll<HTMLElement>("main section");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          const name = target.id || (target.classList.contains("testimonials-section") ? "testimonials" : "");
          if (!name || viewedSections.has(name)) continue;
          viewedSections.add(name);
          trackEvent("section_view", { section: name });
        }
      },
      /* Fire once the section's top crosses the lower 40% of the viewport;
         a plain threshold never fires for sections taller than the screen. */
      { rootMargin: "0px 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      document.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, []);

  return null;
}
