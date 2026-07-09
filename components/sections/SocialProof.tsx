import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";

type SocialProofCopy = {
  socialProof?: {
    label: string;
    stats: Array<{ label: string; value: string }>;
  };
};

function hasPublishableValue(value: string) {
  const trimmed = value.trim();

  return trimmed !== "" && trimmed !== "TODO" && !trimmed.startsWith("[");
}

export function SocialProof() {
  const socialProof = (copy as unknown as SocialProofCopy).socialProof;

  if (!socialProof) return null;

  const stats = socialProof.stats.filter((stat) => hasPublishableValue(stat.value));

  if (stats.length === 0) return null;

  return (
    <section className="page-section social-proof-section">
      <AmbientBackground variant="work" />
      <div className="container social-proof-inner">
        <Reveal className="social-proof-heading">
          <p className="section-label">{socialProof.label}</p>
        </Reveal>
        <ul className="social-proof-stats">
          {stats.map((stat, index) => (
            <li key={stat.label}>
              <Reveal delay={index * 80}>
                <div className="social-proof-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
