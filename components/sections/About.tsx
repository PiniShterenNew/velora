import { Check, MessageCircle } from "lucide-react";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { whatsappUrl } from "./shared";

export function About() {
  const strengths = ["חשיבה עסקית לפני עיצוב", "קופי ומבנה שמובילים להחלטה", "עיצוב נקי, ברמה גבוהה ולא גנרי", "פיתוח מודרני, מהיר ורספונסיבי"];
  return <section id="about" className="page-section about-section"><AmbientBackground variant="about" /><div className="container about-grid">
    <Reveal className="about-copy"><p className="section-label">על הסטודיו</p><h2>מאחורי Velora Studio עומדת חשיבה שמחברת בין עסק, מסר וטכנולוגיה.</h2><p>Velora Studio הוקם על ידי פיני שטרן מתוך הבנה שאתר טוב לא מתחיל בעיצוב, אלא בשאלה עמוקה יותר: למה שהלקוח יבחר דווקא בעסק הזה?</p><p>העבודה בסטודיו משלבת חשיבה עסקית, כתיבה שיווקית, עיצוב נקי ופיתוח מודרני, כדי לבנות אתרים שמרגישים ממוקדים, נראים ברמה גבוהה ומובילים את המשתמש לפעולה ברורה.</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">ספר לי על האתר שאתה רוצה לבנות <MessageCircle aria-hidden="true" /></a></Reveal>
    <div className="about-cards"><Reveal><article className="founder-card"><div className="founder-card-top"><div className="founder-mark" aria-hidden="true">פש</div><i aria-hidden="true" /></div><div className="founder-details"><span>פיני שטרן</span><strong>Founder, Velora Studio</strong><p>אסטרטגיה · קופי · עיצוב · פיתוח</p></div></article></Reveal><div className="strengths">{strengths.map((strength, i) => <Reveal key={strength} delay={i * 70}><div><Check aria-hidden="true" />{strength}</div></Reveal>)}</div></div>
  </div></section>;
}
