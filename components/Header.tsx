"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { copy } from "@/lib/data";
import { WhatsAppIcon } from "./WhatsAppIcon";

const whatsappUrl = copy.brand.whatsappUrl;
const navItems = [...copy.navigation.items, { label: copy.navigation.contactLabel, href: "#contact" }];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
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
  }, [open]);

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

        <button
          className={`menu-backdrop ${open ? "is-open" : ""}`}
          type="button"
          aria-label={copy.aria.closeMenu}
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        />

        <nav
          id="mobile-navigation"
          className={`mobile-menu ${open ? "is-open" : ""}`}
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
        </nav>
      </div>
    </header>
  );
}
