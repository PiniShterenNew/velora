import Image from "next/image";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { whatsappUrl } from "./shared";

export function FinalCTA() {
  return (
    <section id="contact" className="page-section final-cta">
      <AmbientBackground variant="finalCta" />
      <div className="container">
        <Reveal>
          <div className="final-cta-card">
            <Image className="cta-logo-mark" src="/logo.svg" alt="" width={92} height={92} aria-hidden="true" />
            <div className="final-cta-content">
              <h2>אם האתר שלך לא מסביר למה לבחור בך, זה המקום להתחיל.</h2>
              <p>
                בשיחת אפיון קצרה נבין מה העסק שלך צריך לשדר, מה הלקוח צריך להבין, ואיזה אתר נכון לבנות כדי
                להוביל אותו לפעולה.
              </p>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  דבר איתי בוואטסאפ <MessageCircle aria-hidden="true" />
                </a>
                <a className="btn btn-dark-secondary" href="#work">
                  חזור לראות עבודות <ArrowLeft aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
