import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AmbientBackground } from "./AmbientBackground";

const whatsappUrl = "https://wa.me/972548345192";

const links = [
  ["שירותים", "#services"],
  ["תהליך", "#process"],
  ["עבודות", "#work"],
  ["שאלות", "#faq"],
  ["צור קשר", "#contact"],
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <AmbientBackground variant="footer" />
      <div className="container">
        <div className="footer-shell">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="footer-logo-link" href="#top" aria-label="Velora Studio - חזרה לראש העמוד">
                <Image className="footer-logo" src="/full-logo.svg" alt="Velora Studio" width={190} height={80} />
              </a>
              <p>אתרים שנבנים סביב הסיבה שבגללה הלקוח צריך לבחור בך.</p>
            </div>

            <nav className="footer-nav" aria-label="ניווט תחתון">
              {links.map(([label, href]) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="footer-action">
              <a className="footer-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
                דבר איתי בוואטסאפ
                <MessageCircle aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Velora Studio. כל הזכויות שמורות.</span>
            <span>Strategy, copy, design and development.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
