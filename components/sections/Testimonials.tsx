import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";

function hasPublishableValue(value?: string) {
  const trimmed = value?.trim() ?? "";

  return trimmed !== "" && trimmed !== "TODO" && !trimmed.startsWith("[");
}

function isValidTestimonial(item: { quote?: string; name?: string; role?: string }) {
  return hasPublishableValue(item.quote) && hasPublishableValue(item.name) && hasPublishableValue(item.role);
}

export function Testimonials() {
  // TODO: Add the real testimonial text from Notnim Beahava. Do not publish placeholder testimonial copy.
  const items = copy.testimonials.items.filter(isValidTestimonial);

  if (items.length === 0) return null;

  return (
    <section className="page-section testimonials-section">
      <AmbientBackground variant="about" />
      <div className="container testimonials-inner">
        <Reveal className="testimonials-heading">
          <p className="section-label">{copy.testimonials.label}</p>
          <h2>{copy.testimonials.title}</h2>
        </Reveal>
        <ul className="testimonials-grid">
          {items.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              <Reveal delay={index * 90}>
                <blockquote className="testimonial-card">
                  <p>{item.quote}</p>
                  <footer>
                    <cite>{item.name}</cite>
                    <span>{item.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}