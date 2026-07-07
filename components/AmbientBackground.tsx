type AmbientVariant =
  | "decision"
  | "problem"
  | "approach"
  | "services"
  | "story"
  | "process"
  | "work"
  | "about"
  | "faq"
  | "finalCta"
  | "footer";

const ambientElements: Record<AmbientVariant, string[]> = {
  decision: ["ambient-circle", "ambient-square", "ambient-dots"],
  problem: ["ambient-dots", "ambient-arc", "ambient-circle"],
  approach: ["ambient-square", "ambient-circle", "ambient-blueprint"],
  services: ["ambient-dots", "ambient-square", "ambient-arc"],
  story: ["ambient-arc", "ambient-dots", "ambient-circle"],
  process: ["ambient-blueprint", "ambient-square", "ambient-dots"],
  work: ["ambient-glow", "ambient-dots", "ambient-square"],
  about: ["ambient-circle", "ambient-arc", "ambient-dots"],
  faq: ["ambient-dots", "ambient-arc", "ambient-circle"],
  finalCta: ["ambient-glow", "ambient-dots", "ambient-square"],
  footer: ["ambient-dot", "ambient-arc", "ambient-dots"],
};

export function AmbientBackground({ variant }: { variant: AmbientVariant }) {
  return (
    <div className={`ambient-layer ambient-${variant}`} aria-hidden="true">
      {ambientElements[variant].map((element, index) => (
        <span className={`ambient-shape ${element}`} key={`${variant}-${element}-${index}`} />
      ))}
    </div>
  );
}
