import Image from "next/image";
import { copy } from "@/lib/data";
import { AmbientBackground } from "./AmbientBackground";
import { WhatsAppIcon } from "./WhatsAppIcon";

const whatsappUrl = copy.brand.whatsappUrl;
const links = copy.footer.links;

export function Footer() {
  return (
    <footer className="site-footer">
      <AmbientBackground variant="footer" />
      <div className="container">
        <div className="footer-shell">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="footer-logo-link" href="#top" aria-label={copy.aria.backToTop}>
                <Image className="footer-logo" src="/full-logo.svg" alt={copy.brand.name} width={190} height={80} />
              </a>
              <p>{copy.footer.tagline}</p>
            </div>

            <nav className="footer-nav" aria-label={copy.aria.footerNavigation}>
              {links.map(({ label, href }) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="footer-action">
              <a className="footer-contact" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {copy.common.whatsappFull}
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>{copy.footer.copyright}</span>
            <span>{copy.footer.credit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
