"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { copy } from "@/lib/data";
import { WhatsAppIcon } from "./WhatsAppIcon";

const whatsappUrl = copy.brand.whatsappUrl;
const navItems = [...copy.navigation.items, { label: copy.navigation.contactLabel, href: "#contact" }];
const menuAnimationMs = 280;

export function Header() {
  const [open, setOpen] = useState(false);
  const [renderMenu, setRenderMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (Math.abs(delta) > 8) {
          setHidden(y > 140 && delta > 0);
          lastY = y;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let animationFrame: number | null = null;
    let previousScrollBehavior = "";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link?.hash) return;

      let targetId: string;
      try {
        targetId = decodeURIComponent(link.hash.slice(1));
      } catch {
        return;
      }

      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      }

      const start = window.scrollY;
      const scrollMargin = targetId === "top" ? 0 : Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const destination = Math.min(maxScroll, Math.max(0, target.getBoundingClientRect().top + start - scrollMargin));
      const distance = destination - start;
      const duration = reducedMotion.matches ? 0 : 550;

      previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";

      if (window.location.hash === link.hash) {
        window.history.replaceState(null, "", link.hash);
      } else {
        window.history.pushState(null, "", link.hash);
      }

      const finish = () => {
        animationFrame = null;
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
        if (link.classList.contains("skip-link")) target.focus({ preventScroll: true });
      };

      if (duration === 0 || Math.abs(distance) < 1) {
        window.scrollTo({ top: destination, behavior: "auto" });
        finish();
        return;
      }

      const startedAt = performance.now();
      const animate = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, start + distance * eased);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animate);
        } else {
          finish();
        }
      };

      animationFrame = window.requestAnimationFrame(animate);
    };

    document.addEventListener("click", onAnchorClick);
    return () => {
      document.removeEventListener("click", onAnchorClick);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      }
    };
  }, []);

  useEffect(() => {
    if (open) {
      setRenderMenu(true);
      const frame = window.requestAnimationFrame(() => setMenuVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    setMenuVisible(false);
    const timeout = window.setTimeout(() => setRenderMenu(false), menuAnimationMs);
    return () => window.clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    if (!renderMenu) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [renderMenu]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuVisible);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuVisible]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${hidden && !open ? "is-hidden" : ""}`}>
      <div className={`header-inner site-container ${open ? "menu-open" : ""}`}>
        <a className="brand" href="#top" aria-label={copy.aria.backToTop}>
          <Image className="brand-logo" src="/full-logo.svg" alt={copy.brand.name} width={148} height={62} priority />
        </a>

        <nav className="nav-pill" aria-label={copy.aria.primaryNavigation}>
          {navItems.map(({ label, href }) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          {copy.common.whatsappShort}
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? copy.aria.closeMenu : copy.aria.openMenu}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        {renderMenu ? <button
          className={`menu-backdrop ${menuVisible ? "is-open" : ""}`}
          type="button"
          aria-label={copy.aria.closeMenu}
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        /> : null}

        {renderMenu ? <nav
          id="mobile-navigation"
          className={`mobile-menu ${menuVisible ? "is-open" : ""}`}
          aria-label={copy.aria.mobileNavigation}
          aria-hidden={!open}
        >
          <div className="mobile-menu-links">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href} tabIndex={open ? 0 : -1} onClick={closeMenu}>{label}</a>
            ))}
          </div>
          <a className="mobile-menu-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} onClick={closeMenu}>
            {copy.common.mobileWhatsapp} <WhatsAppIcon />
          </a>
        </nav> : null}
      </div>
    </header>
  );
}
