import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { whatsappUrl } from "./shared";

const services = [
  { number: "01", kind: "landing", title: "דפי נחיתה", text: "דף אחד, מטרה אחת. בנוי להניע לפעולה מהירה וברורה — השארת פרטים, רכישה או קביעת פגישה.", tags: ["Leads", "Conversion", "Focus"] },
  { number: "02", kind: "brand", title: "אתרי תדמית פרימיום", text: "אתר שמייצר אמון, מסביר את הערך שלך ומחזק את המיתוג — לעסקים שרוצים להיראות בדיוק כמו שהם.", tags: ["Brand", "Trust", "Professional"] },
  { number: "03", kind: "story", title: "Story Scrolling", text: "חוויית גלילה שמספרת סיפור. מתאים למותגים, פרויקטים ועסקים שרוצים להשאיר רושם עמוק.", tags: ["Story", "Engagement", "Emotion"] },
  { number: "04", kind: "commerce", title: "חוויות eCommerce", text: "חנות אונליין חכמה, ממוקדת וקלה לתפעול — שמביאה לקוחות לקנות ולחזור שוב.", tags: ["Shop", "UX", "Conversion"] },
];

const serviceIllustrations: Record<string, string> = {
  landing: "/illustrations/browser.svg",
  brand: "/illustrations/trust.svg",
  story: "/illustrations/strategy.svg",
  commerce: "/illustrations/shopping.svg",
};

function ServiceIllustration({ kind }: { kind: string }) {
  const src = serviceIllustrations[kind] ?? "/illustrations/browser.svg";

  return <div className={`service-illustration service-illustration-${kind}`} aria-hidden="true">
    <Image className="service-illustration-img" src={src} alt="" width={150} height={150} />
  </div>;
}

export function Services() {
  return <section id="services" className="page-section services-section">
    <AmbientBackground variant="services" />
    <div className="container services-inner">
      <div className="services-intro">
        <Reveal className="services-heading">
          <p className="section-label services-label"><span aria-hidden="true" />השירותים שלי</p>
          <h2>אתרים שמבוססים על מטרה ברורה</h2>
          <p>כל עסק הוא עולם. לכן אני בונה אתר שאינו בנוי לפי תבנית, אלא לפי המטרה, הקהל והדרך שבה העסק שלך רוצה להתפתח.</p>
          <i aria-hidden="true" />
          <p>ארבע משפחות של אתרים, כל אחת נבנית סביב מטרה עסקית אחרת.</p>
        </Reveal>
      </div>
      <div className="services-grid">{services.map((service, i) => <Reveal key={service.title} delay={i * 90}><article className="service-card">
        <span className="service-number">{service.number}</span>
        <ServiceIllustration kind={service.kind} />
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <ul>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </article></Reveal>)}</div>
      <Reveal className="services-action">
        <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><ArrowLeft aria-hidden="true" />איזה סוג אתר מתאים לעסק שלך?</a>
        <a className="services-process-link" href="#process">צפה איך התהליך עובד</a>
      </Reveal>
    </div>
  </section>;
}
