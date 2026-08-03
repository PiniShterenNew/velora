import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

export function LineBreakTitle({ lines }: { lines: string[] }) {
  return <>{lines.map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</>;
}

export function SectionIntro({ label, title, text, as: Heading = "h2" }: { label: string; title: ReactNode; text: string; as?: "h1" | "h2" }) {
  return <Reveal className="section-intro"><p className="section-label">{label}</p><Heading>{title}</Heading><p className="section-copy">{text}</p></Reveal>;
}
