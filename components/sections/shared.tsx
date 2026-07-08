import type { ReactNode } from "react";
import { copy } from "@/lib/data";
import { Reveal } from "../Reveal";

export const whatsappUrl = copy.brand.whatsappUrl;

export function LineBreakTitle({ lines }: { lines: string[] }) {
  return <>{lines.map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</>;
}

export function SectionIntro({ label, title, text }: { label: string; title: ReactNode; text: string }) {
  return <Reveal className="section-intro"><p className="section-label">{label}</p><h2>{title}</h2><p className="section-copy">{text}</p></Reveal>;
}
