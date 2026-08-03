import { Check } from "lucide-react";
import { buildWhatsappUrl, getCopy, getProjectByName, getServiceByNumber, type Locale, type NichePageCopy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { FinalCTA } from "./FinalCTA";
import { SectionIntro } from "./shared";

export function NichePage({ niche, locale }: { niche: NichePageCopy; locale: Locale }) {
  const copy = getCopy(locale);
  const whatsappUrl = buildWhatsappUrl(copy, niche.whatsappMessage);
  const project = getProjectByName(copy, niche.projectName);
  const plan = getServiceByNumber(copy, niche.suggestedPlanNumber);

  return (
    <>
      <section className="page-section niche-hero">
        <AmbientBackground variant="about" />
        <div className="container niche-inner">
          <SectionIntro as="h1" label={niche.eyebrow} title={niche.title} text={niche.intro} />

          <div className="strengths niche-points">
            {niche.painPoints.map(({ title, text }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="strength-item">
                  <span className="strength-icon"><Check aria-hidden="true" /></span>
                  <span className="strength-copy"><strong>{title}</strong><span>{text}</span></span>
                </div>
              </Reveal>
            ))}
          </div>

          {project && (
            <Reveal>
              <blockquote className="testimonial-card niche-project-card">
                <p>{project.outcome ?? project.text}</p>
                <footer>
                  <cite>{project.name}</cite>
                  {project.href && (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {copy.common.watchProject}
                    </a>
                  )}
                </footer>
              </blockquote>
            </Reveal>
          )}

          {plan && (
            <Reveal className="niche-plan-note">
              <p>
                {copy.common.suggestedPlanLabel} <strong>{plan.title}</strong>. {copy.common.suggestedPlanFooter}
              </p>
            </Reveal>
          )}

          <Reveal className="niche-cta">
            <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {copy.common.whatsappFull} <WhatsAppIcon />
            </a>
          </Reveal>
        </div>
      </section>
      <FinalCTA locale={locale} />
    </>
  );
}
