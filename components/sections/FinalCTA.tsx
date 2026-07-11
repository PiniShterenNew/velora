import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { whatsappUrl } from "./shared";

type FinalCtaCopy = typeof copy.finalCta & {
  reassurance?: string;
};

export function FinalCTA() {
  const finalCta = copy.finalCta as FinalCtaCopy;

  return (
    <section id="contact" className="page-section final-cta">
      <AmbientBackground variant="finalCta" />
      <div className="container">
        <Reveal>
          <div className="final-cta-card">
            <Image className="cta-logo-mark" src="/logo.svg" alt="" width={92} height={92} aria-hidden="true" />
            <div className="final-cta-content">
              <h2>{finalCta.title}</h2>
              <div className="final-cta-copy">
                <p>{finalCta.text}</p>
                {finalCta.reassurance && <p className="final-cta-reassurance">{finalCta.reassurance}</p>}
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {copy.common.whatsappFull} <WhatsAppIcon />
                </a>
                <a className="btn btn-dark-secondary" href="#work">
                  {finalCta.secondaryCta} <ArrowLeft aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
