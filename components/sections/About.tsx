import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { whatsappUrl } from "./shared";

export function About() {
  const strengths = [
    { title: "חשיבה עסקית", text: "לפני עיצוב" },
    { title: "קופי ומבנה", text: "שמובילים להחלטה" },
    { title: "עיצוב נקי, ברמה", text: "גבוהה ולא גנרי" },
    { title: "פיתוח מודרני", text: "מהיר ורספונסיבי" },
  ];
  return <section id="about" className="page-section about-section"><AmbientBackground variant="about" /><div className="container about-grid">
    <Reveal className="about-founder"><article className="founder-card"><span className="about-panel-line" aria-hidden="true" /><div className="founder-card-top"><div className="founder-mark" aria-hidden="true"><Image src="/logo.svg" alt="" width={70} height={70} /></div><i aria-hidden="true" /></div><div className="founder-details"><span>פיני שטרן</span><strong>Founder, Velora Studio</strong><p>אסטרטגיה · קופי · עיצוב · פיתוח</p></div></article></Reveal>
    <Reveal className="about-copy"><p className="section-label">על הסטודיו</p><h2>מאחורי Velora Studio עומדת חשיבה שמחברת בין עסק, מסר וטכנולוגיה.</h2><p>Velora Studio הוקם על ידי פיני שטרן מתוך הבנה שאתר טוב לא מתחיל בעיצוב, אלא בשאלה עמוקה יותר: למה שהלקוח יבחר דווקא בעסק הזה?</p><p>העבודה בסטודיו משלבת חשיבה עסקית, כתיבה שיווקית, עיצוב נקי ופיתוח מודרני, כדי לבנות אתרים שמרגישים ממוקדים, נראים ברמה גבוהה ומובילים את המשתמש לפעולה ברורה.</p></Reveal>
    <div className="strengths">{strengths.map(({ title, text }, i) => <Reveal key={title} delay={i * 70}><div className="strength-item"><span className="strength-icon"><Check aria-hidden="true" /></span><span className="strength-copy"><strong>{title}</strong><span>{text}</span></span></div></Reveal>)}</div>
    <Reveal className="about-cta"><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">ספר לי על האתר שאתה רוצה לבנות <MessageCircle aria-hidden="true" /></a></Reveal>
  </div></section>;
}
