"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

const whatsappUrl = "https://wa.me/972548345192";

const navItems = [
  ["שירותים", "#services"],
  ["עבודות", "#work"],
  ["תהליך", "#process"],
  ["שאלות", "#faq"],
  ["צור קשר", whatsappUrl],
] as const;

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
        <a className="brand" href="#top" aria-label="Velora Studio — חזרה לראש העמוד">
          <Image className="brand-logo" src="/full-logo.svg" alt="Velora Studio" width={148} height={62} priority />
        </a>

        <nav className="nav-pill" aria-label="ניווט ראשי">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          בוא נדבר
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <button
          className={`menu-backdrop ${open ? "is-open" : ""}`}
          type="button"
          aria-label="סגירת תפריט"
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        />

        <nav
          id="mobile-navigation"
          className={`mobile-menu ${open ? "is-open" : ""}`}
          aria-label="ניווט למובייל"
          aria-hidden={!open}
        >
          <div className="mobile-menu-links">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} tabIndex={open ? 0 : -1} onClick={closeMenu}>{label}</a>
            ))}
          </div>
          <a className="mobile-menu-cta" href={whatsappUrl} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} onClick={closeMenu}>
            דבר איתי בוואטסאפ <MessageCircle aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
