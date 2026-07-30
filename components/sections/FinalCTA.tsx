import Image from "next/image";
import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { whatsappUrl } from "./shared";

type FinalCtaCopy = typeof copy.finalCta & {
  reassurance?: string;
};

function CtaTitle({ title }: { title: string }) {
  if (!title.endsWith("?")) return <>{title}</>;
  return <>{title.slice(0, -1)}<span className="final-cta-qmark">?</span></>;
}

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
              <h2><CtaTitle title={finalCta.title} /></h2>
              <div className="final-cta-copy">
                <p>{finalCta.text}</p>
                {finalCta.reassurance && <p className="final-cta-reassurance">{finalCta.reassurance}</p>}
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {copy.common.whatsappFull} <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
