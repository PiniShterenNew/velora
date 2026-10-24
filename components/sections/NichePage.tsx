import { Check } from "lucide-react";
import { buildWhatsappUrl, getCopy, getProjectByName, getServiceByNumber, type Locale, type NichePageCopy } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";
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
  const siteUrl = getSiteUrl();
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/${locale}/${niche.slug}#service`,
    name: niche.title,
    description: niche.metaDescription,
    url: `${siteUrl}/${locale}/${niche.slug}`,
    serviceType: niche.eyebrow,
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    provider: {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/${locale}#northspark`,
      name: copy.brand.name,
      url: `${siteUrl}/${locale}`,
      telephone: copy.brand.phone,
      email: copy.brand.email,
    },
  };

  const pageUrl = `${siteUrl}/${locale}/${niche.slug}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: niche.faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.brand.name, item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: niche.eyebrow, item: pageUrl },
    ],
  };

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
      <section className="page-section niche-details">
        <div className="container niche-inner niche-article">
          {niche.sections.map((section) => (
            <Reveal key={section.title} className="niche-article-section">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          <Reveal className="niche-article-section niche-faq">
            <h2>{niche.faqTitle}</h2>
            {niche.faq.map(({ question, answer }) => (
              <div key={question} className="niche-faq-item">
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <FinalCTA locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
