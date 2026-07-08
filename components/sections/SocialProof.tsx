import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";

function isTodo(value: string) {
  return value === "TODO";
}

export function SocialProof() {
  const stats = copy.socialProof.stats.filter((stat) => !isTodo(stat.value));

  if (stats.length === 0) return null;

  return (
    <section className="page-section social-proof-section">
      <AmbientBackground variant="work" />
      <div className="container social-proof-inner">
        <Reveal className="social-proof-heading">
          <p className="section-label">{copy.socialProof.label}</p>
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
