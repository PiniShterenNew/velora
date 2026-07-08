import { ArrowLeft, MessageCircle } from "lucide-react";
import ValuePropositionBackground from "./ValuePropositionBackground";

const whatsappUrl = "https://wa.me/972548345192";
const services = ["אתרי תדמית", "דפי נחיתה", "eCommerce", "Story Scrolling", "אוטומציות", "עיצוב מוצר"];
export function Hero() {
  return (
    <section className="hero" id="top">
      <ValuePropositionBackground />
      <div className="hero-container site-container">
        <div className="hero-content">
          <p className="eyebrow reveal reveal-1">סטודיו לאתרים שבנויים סביב הסיבה לבחור בך</p>

          <h1 className="hero-title">
            <span className="hero-title-first reveal reveal-2">לא מתחילים מתבנית.</span>
            <span className="hero-title-second reveal reveal-3">מתחילים מהסיבה שבגללה</span>
            <span className="hero-title-third reveal reveal-4">הלקוח צריך <em>לבחור בך</em>.</span>
          </h1>

          <p className="hero-text reveal reveal-5">
            Velora Studio בונה אתרי תדמית, דפי נחיתה וחוויות דיגיטליות שמשלבות
            אסטרטגיה, קופי, עיצוב ופיתוח תחת קורת גג אחת. כדי שהאתר שלך לא רק
            ייראה טוב, אלא גם יביא תוצאות.
          </p>

          <div className="hero-actions reveal reveal-6">
            <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              דבר איתי בוואטסאפ <MessageCircle aria-hidden="true" />
            </a>
            <a className="btn btn-secondary" href="#decision-board">
              צפה איך התהליך עובד <ArrowLeft aria-hidden="true" />
            </a>
          </div>

          <ul className="hero-tags reveal reveal-7" aria-label="שירותי הסטודיו">
            {services.slice(0, 4).map((service) => (
              <li className={`service-chip ${service === "Story Scrolling" ? "featured" : ""}`} key={service}>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-tags-marquee" aria-hidden="true">
        <div className="hero-tags-marquee-track">
          {[...services, ...services].map((service, index) => (
            <span dir="rtl" className={`service-chip ${index % 3 === 0 ? "featured" : ""}`} key={`${service}-${index}`}>
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
