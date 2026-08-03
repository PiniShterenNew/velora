import Image from "next/image";
import { getCopy, type Locale } from "@/lib/data";
import { AmbientBackground } from "./AmbientBackground";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const localePath = (href: string) => `/${locale}${href}`;
  const whatsappUrl = copy.brand.whatsappUrl;
  const links = copy.footer.links;

  return (
    <footer className="site-footer">
      <AmbientBackground variant="footer" />
      <div className="container">
        <div className="footer-shell">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="footer-logo-link" href={localePath("#top")} aria-label={copy.aria.backToTop}>
                <Image className="footer-logo" src="/full-logo.svg" alt={copy.brand.name} width={190} height={80} />
              </a>
              <p>{copy.footer.tagline}</p>
            </div>

            <nav className="footer-nav" aria-label={copy.aria.footerNavigation}>
              {links.map(({ label, href }) => (
                <a href={localePath(href)} key={label}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="footer-action">
              <a className="footer-contact" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {copy.common.whatsappFull}
                <WhatsAppIcon />
              </a>
              <div className="footer-alt-contact">
                <a href={copy.brand.phoneHref} dir="ltr">{copy.brand.phone}</a>
                <a href={copy.brand.emailHref}>{copy.brand.email}</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>{copy.footer.copyright}</span>
            <nav className="footer-legal" aria-label={copy.aria.footerNavigation}>
              {copy.footer.legalLinks.map(({ label, href }) => (
                <a href={localePath(href)} key={label}>
                  {label}
                </a>
              ))}
            </nav>
            <span>{copy.footer.credit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
