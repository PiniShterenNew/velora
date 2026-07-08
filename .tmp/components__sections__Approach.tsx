import { ArrowLeft } from "lucide-react";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { SectionIntro } from "./shared";

const approach = [
  ["01", "אסטרטגיה", "מגדירים מי הלקוח הנכון, מה הוא מחפש, מה עלול למנוע ממנו לפנות, ומה חייב להיות ברור לו כבר בשניות הראשונות באתר."],
  ["02", "סיפור ומסר", "בונים היררכיית תוכן שמובילה את הלקוח בצורה טבעית: מהבעיה, להבנה, לביטחון, ומשם לפעולה."],
  ["03", "עיצוב ופיתוח", "מתרגמים את המבנה לאתר נקי, ממוקד ומהיר, עם חוויית משתמש שמרגישה ברמה גבוהה ונשארת ברורה בכל שלב."],
];

export function Approach() {
  return <section id="approach" className="page-section approach-section">
    <AmbientBackground variant="approach" />
    <div className="container approach-inner">
    <SectionIntro label="השיטה" title={<>קודם מבינים מה הלקוח צריך להבין.<br />אחר כך בונים את האתר סביב זה.</>} text="לפני שמעצבים מסך או כותבים שורת קוד, בודקים מה הלקוח חייב לראות, להרגיש ולהבין כדי לבחור בך. מתוך ההבנה הזאת נגזרים המסר, המבנה, העיצוב והפיתוח." />
    <div className="approach-track">{approach.map(([number, title, text], i) => <Reveal key={number} delay={i * 110}><article className="approach-step"><div className="approach-number"><strong>{number}</strong><i aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
    <Reveal className="section-action"><a className="text-link" href="#process">צפה בתהליך העבודה <ArrowLeft aria-hidden="true" /></a></Reveal>
  </div></section>;
}
