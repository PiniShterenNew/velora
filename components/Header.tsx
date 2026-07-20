"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WhatsAppIcon } from "./WhatsAppIcon";

const menuAnimationMs = 280;

export function Header() {
  const { copy } = useI18n();
  const whatsappUrl = copy.brand.whatsappUrl;
  const navItems = [...copy.navigation.items, { label: copy.navigation.contactLabel, href: "#contact" }];
  const [open, setOpen] = useState(false);
  const [renderMenu, setRenderMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

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
    <header className="site-header">
      <div className={`header-inner site-container ${open ? "menu-open" : ""}`}>
        <a className="brand" href="#top" aria-label={copy.aria.backToTop}>
          <Image className="brand-logo" src="/full-logo.svg" alt={copy.brand.name} width={148} height={62} priority />
        </a>

        <nav className="nav-pill" aria-label={copy.aria.primaryNavigation}>
          {navItems.map(({ label, href }) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {copy.common.whatsappShort}
          </a>
        </div>

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
          <LanguageSwitcher className="mobile-menu-lang" />
        </nav> : null}
      </div>
    </header>
  );
}