import { copy } from "@/lib/data";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";

function isTodo(value: string) {
  return value === "TODO";
}

function isValidTestimonial(item: { quote: string; name: string; role: string }) {
  return !isTodo(item.quote) && !isTodo(item.name) && !isTodo(item.role);
}

export function Testimonials() {
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
