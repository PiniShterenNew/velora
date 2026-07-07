import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

export const whatsappUrl = "https://wa.me/972548345192";

export function SectionIntro({ label, title, text }: { label: string; title: ReactNode; text: string }) {
  return <Reveal className="section-intro"><p className="section-label">{label}</p><h2>{title}</h2><p className="section-copy">{text}</p></Reveal>;
}
