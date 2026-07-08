import Image from "next/image";
import { AmbientBackground } from "../AmbientBackground";
import { Reveal } from "../Reveal";
import { SectionIntro } from "./shared";

const problems = [
  ["מסר לא חד", "הלקוח נכנס לאתר, אבל לא מבין מהר מספיק מה הערך שלך ולמה כדאי לפנות דווקא אליך."],
  ["ביטחון חלש", "האתר לא מעניק מספיק תחושת מקצועיות ואינו מציג הוכחות שמפחיתות חששות לפני פנייה."],
  ["עיצוב גנרי", "האתר נראה כמו עוד תבנית, במקום לשדר את האופי והבידול שגורמים ללקוח לבחור בו."],
  ["קריאה לפעולה לא ברורה", "הלקוח לא מבין מה הצעד הבא, היכן ללחוץ או למה לפנות עכשיו, ולכן הוא פשוט ממשיך הלאה."],
];

const problemIllustrations = [
  "/illustrations/message.svg",
  "/illustrations/shield.svg",
  "/illustrations/strategy.svg",
  "/illustrations/cursor.svg",
];

function ProblemIllustration({ index }: { index: number }) {
  return <div className="problem-illustration" aria-hidden="true">
    <Image src={problemIllustrations[index]} alt="" width={160} height={160} />
  </div>;
}

export function Problem() {
  return <section id="problem" className="page-section problem-section">
    <AmbientBackground variant="problem" />
    <div className="container problem-inner">
      <SectionIntro label="הבעיה" title={<>רוב האתרים לא נכשלים בגלל העיצוב.<br />הם נכשלים כי הלקוח לא מקבל תשובה מספיק מהר.</>} text="אתר יכול להיראות מודרני ועדיין לא להביא מספיק פניות. אם המסר לא חד, אם הביטחון לא נבנה מהר מספיק, ואם הקריאה לפעולה לא מובילה את הלקוח לצעד הבא, שום עיצוב לא יפצה על זה." />
      <div className="problem-flow">{problems.map(([title, text], i) => <Reveal key={title} delay={i * 90}>
        <article className="problem-step">
          <ProblemIllustration index={i} />
          <div className="problem-content"><h3>{title}</h3><p>{text}</p></div>
        </article>
      </Reveal>)}</div>
    </div>
  </section>;
}
