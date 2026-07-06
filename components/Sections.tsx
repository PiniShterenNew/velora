import { ArrowLeft, ArrowUpLeft, Check, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const whatsappUrl = "https://wa.me/972548345192";

const problems = [
  ["מסר לא חד", "הלקוח נכנס לאתר, אבל לא מבין מהר מספיק מה הערך שלך ולמה כדאי לפנות דווקא אליך."],
  ["ביטחון חלש", "האתר לא מעניק מספיק תחושת מקצועיות ואינו מציג הוכחות שמפחיתות חששות לפני פנייה."],
  ["עיצוב גנרי", "האתר נראה כמו עוד תבנית, במקום לשדר את האופי והבידול שגורמים ללקוח לבחור בו."],
  ["קריאה לפעולה לא ברורה", "הלקוח לא מבין מה הצעד הבא, היכן ללחוץ או למה לפנות עכשיו, ולכן הוא פשוט ממשיך הלאה."],
];

const approach = [
  ["01", "אסטרטגיה", "מגדירים מי הלקוח הנכון, מה הוא מחפש, מה עלול למנוע ממנו לפנות, ומה חייב להיות ברור לו כבר בשניות הראשונות באתר."],
  ["02", "סיפור ומסר", "בונים היררכיית תוכן שמובילה את הלקוח בצורה טבעית: מהבעיה, להבנה, לביטחון, ומשם לפעולה."],
  ["03", "עיצוב ופיתוח", "מתרגמים את המבנה לאתר נקי, ממוקד ומהיר, עם חוויית משתמש שמרגישה ברמה גבוהה ונשארת ברורה בכל שלב."],
];

const services = [
  { title: "אתרי תדמית פרימיום", text: "אתרים לעסקים, מותגים ונותני שירות שרוצים להיראות כמו מי שהם באמת: מקצועיים, ממוקדים וראויים לבחירה.", tags: ["עסקים מקומיים", "מותגים אישיים", "קליניקות", "חברות שירות"] },
  { title: "דפי נחיתה ממירים", text: "עמודים ממוקדים לקמפיינים, הצעות ושירותים, עם מסר חד, מבנה ברור וקריאה לפעולה שלא הולכת לאיבוד.", tags: ["קמפיינים", "לידים", "השקות", "שירות ספציפי"] },
  { title: "eCommerce ודפי מוצר", text: "חוויות מכירה שמציגות מוצר בצורה ברורה, בונות ביטחון ומובילות את הלקוח להבין למה נכון לקנות עכשיו.", tags: ["חנויות", "מוצרי פרימיום", "דפי מוצר", "משפכי מכירה"] },
  { title: "Story Scrolling & Motion", text: "סקשנים אינטראקטיביים שמספרים סיפור דרך תנועה, שכבות וגלילה, כשצריך להסביר רעיון, מוצר או תהליך בצורה חדה ובלתי נשכחת.", tags: ["מותגים", "מוצרים מורכבים", "השקות", "אתרי פרימיום"], featured: true },
];

const process = [
  ["01", "אפיון והבנה", "מבינים מה העסק מוכר, מי הלקוח הנכון, מה מפריע לו לבחור בך, ומה האתר צריך לגרום לו להבין."],
  ["02", "מסר ומבנה", "מגדירים את הסיפור של האתר: מה מופיע ראשון, איך נבנה הביטחון, ואיפה הלקוח מקבל את הסיבה לפנות."],
  ["03", "עיצוב וחוויה", "יוצרים עיצוב נקי, ברמה גבוהה ומדויק, כזה שמחזק את המסר ולא מתחרה בו."],
  ["04", "פיתוח והשקה", "בונים אתר מהיר, רספונסיבי ומוכן לשימוש, עם התאמה מושלמת למובייל, קריאות לפעולה וחיבורים בסיסיים לפי הצורך."],
];

const projects = [
  { name: "Cash Plus", text: "פלטפורמה דיגיטלית בתחום הפיננסים, עם דגש על הצגת מוצר, בניית אמון, ממשק ברור וחוויית משתמש מודרנית.", tags: ["Product Website", "UX", "Fintech", "Conversion"], href: "https://cashplus-app.com/", featured: true },
  { name: "א.ש אינסטלציה", text: "אתר לעסק שירות מקומי, שנועד ליצור ביטחון מהיר, להסביר את השירותים ולהוביל לקוחות לפנייה ישירה.", tags: ["Local Business", "Service Website", "Trust", "Leads"], href: "https://as-plumbing-cyan.vercel.app/", featured: true },
  { name: "Karen Beauty", text: "אתר למותג יופי, עם שפה נקייה ועדינה שמטרתה לשדר מקצועיות, אסתטיקה ומהימנות.", tags: ["Beauty", "Premium", "Brand Website"], href: "https://karen-beauty.vercel.app/" },
  { name: "נותנים באהבה", text: "אתר תרומות שמציג מטרה חברתית בצורה ברורה, בונה אמון ומוביל את המשתמש לפעולת תרומה.", tags: ["Donation", "Nonprofit", "Trust", "CTA"], href: "https://donate.notnim.info/" },
];

function SectionIntro({ label, title, text }: { label: string; title: React.ReactNode; text: string }) {
  return <Reveal className="section-intro"><p className="section-label">{label}</p><h2>{title}</h2><p className="section-copy">{text}</p></Reveal>;
}

export function Problem() {
  return <section id="problem" className="page-section problem-section">
    <div className="problem-geometry" aria-hidden="true"><i /><i /><i /><span /></div>
    <div className="container problem-inner">
      <SectionIntro label="הבעיה" title={<>רוב האתרים לא נכשלים בגלל העיצוב.<br />הם נכשלים כי הלקוח לא מקבל תשובה מספיק מהר.</>} text="אתר יכול להיראות מודרני ועדיין לא להביא מספיק פניות. אם המסר לא חד, אם הביטחון לא נבנה מהר מספיק, ואם הקריאה לפעולה לא מובילה את הלקוח לצעד הבא, שום עיצוב לא יפצה על זה." />
      <div className="problem-flow">{problems.map(([title, text], i) => <Reveal key={title} delay={i * 90}>
        <article className="problem-step">
          <div className="problem-number"><span>0{i + 1}</span><i aria-hidden="true" /></div>
          <div className="problem-content"><h3>{title}</h3><p>{text}</p></div>
          {i < problems.length - 1 && <span className="problem-connector" aria-hidden="true" />}
        </article>
      </Reveal>)}</div>
    </div>
  </section>;
}

export function Approach() {
  return <section id="approach" className="page-section approach-section">
    <div className="approach-geometry" aria-hidden="true"><i /><i /><span /></div>
    <div className="container approach-inner">
    <SectionIntro label="השיטה" title={<>קודם מבינים מה הלקוח צריך להבין.<br />אחר כך בונים את האתר סביב זה.</>} text="לפני שמעצבים מסך או כותבים שורת קוד, בודקים מה הלקוח חייב לראות, להרגיש ולהבין כדי לבחור בך. מתוך ההבנה הזאת נגזרים המסר, המבנה, העיצוב והפיתוח." />
    <div className="approach-track">{approach.map(([number, title, text], i) => <Reveal key={number} delay={i * 110}><article className="approach-step"><div className="approach-number"><strong>{number}</strong><i aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
    <Reveal className="section-action"><a className="text-link" href="#process">צפה בתהליך העבודה <ArrowLeft aria-hidden="true" /></a></Reveal>
  </div></section>;
}

export function Services() {
  return <section id="services" className="page-section services-section"><div className="container">
    <SectionIntro label="שירותים" title="אתרים שנבנים לפי המטרה שלהם." text="כל אתר צריך לשרת מטרה אחרת: לבנות ביטחון, להסביר שירות, להביא פניות, למכור מוצר או להציג רעיון בצורה שקשה להתעלם ממנה." />
    <div className="services-grid">{services.map((service, i) => <Reveal key={service.title} delay={i * 90}><article className={`service-card ${service.featured ? "featured" : ""}`}><div className="service-mark" aria-hidden="true"><span /><span /></div><h3>{service.title}</h3><p>{service.text}</p><strong>מתאים ל:</strong><ul>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article></Reveal>)}</div>
    <Reveal className="section-action"><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">איזה סוג אתר נכון לעסק שלך? <MessageCircle aria-hidden="true" /></a></Reveal>
  </div></section>;
}

export function StoryScrolling() {
  const cards = [
    <><p>הלקוח נכנס לאתר.<br />הוא לא מחפש עיצוב.<br /><strong>הוא מחפש תשובה מהירה.</strong></p></>,
    <><p>אם המסר מטושטש,<br /><strong>שום עיצוב לא יציל את ההחלטה.</strong></p></>,
    <><p>אתר נכון מוביל את הלקוח:</p><div className="story-path"><span>מהבנה</span><ArrowLeft /><span>לביטחון</span><ArrowLeft /><span>לפעולה</span></div></>,
    <><p>בסוף, האתר צריך לעשות דבר אחד:</p><strong className="story-result">להפוך עניין לפנייה.</strong></>,
  ];
  return <section id="story-scrolling" className="page-section story-section"><div className="container story-shell">
    <SectionIntro label="Story Scrolling" title="כשהמסר מורכב, הגלילה הופכת אותו לסיפור." text="Story Scrolling מאפשר להוביל את הלקוח דרך רעיון, מוצר או תהליך בצורה הדרגתית. במקום להעמיס את כל המידע בבת אחת, האתר בונה הבנה שלב אחרי שלב." />
    <div className="story-demo"><div className="story-sticky"><span>מעוד עמוד יפה</span><ArrowLeft aria-hidden="true" /><strong>למסלול החלטה ברור.</strong><div className="story-orbit" aria-hidden="true" /></div><div className="story-cards">{cards.map((card, i) => <Reveal key={i}><article className="story-card"><span className="story-index">0{i + 1}</span>{card}</article></Reveal>)}</div></div>
    <Reveal className="story-cta"><p>רוצה אתר שמספר את הסיפור שלך נכון?</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">בוא נדבר על הסיפור שלך <MessageCircle aria-hidden="true" /></a></Reveal>
  </div></section>;
}

export function Process() {
  return <section id="process" className="page-section process-section"><div className="container">
    <SectionIntro label="תהליך" title={<>תהליך ברור. אתר מדויק.<br />בלי לנחש בדרך.</>} text="כדי שאתר יעבוד נכון, צריך לבנות אותו בסדר הנכון: להבין את העסק, לדייק את המסר, לתכנן את המבנה, ורק אחר כך לגשת לעיצוב ופיתוח." />
    <div className="process-grid">{process.map(([number, title, text], i) => <Reveal key={number} delay={i * 90}><article className="process-card"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div>
    <Reveal className="section-action action-with-note"><p>רוצה להבין איך זה ייראה אצלך?</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">נתחיל באפיון קצר <ArrowLeft aria-hidden="true" /></a></Reveal>
  </div></section>;
}

function ProjectPreview({ name, index }: { name: string; index: number }) {
  return <div className={`project-preview preview-${index}`} aria-hidden="true"><div className="preview-bar"><i /><i /><i /></div><strong>{name}</strong><div className="preview-layout"><span /><span /><span /></div></div>;
}

export function Work() {
  return <section id="work" className="page-section work-section"><div className="container">
    <SectionIntro label="עבודות" title="עבודות שמראות חשיבה, לא רק עיצוב." text="כל פרויקט נבנה סביב מטרה אחרת: להסביר מוצר, לבנות ביטחון, להוביל לפנייה או להציג מותג בצורה המדויקת ביותר." />
    <div className="work-grid">{projects.map((project, i) => <Reveal key={project.name} delay={(i % 2) * 100}><article className={`work-card ${project.featured ? "featured" : ""}`}><ProjectPreview name={project.name} index={i} /><div className="work-content"><h3>{project.name}</h3><p>{project.text}</p><ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a href={project.href} target="_blank" rel="noreferrer">צפה בפרויקט <ArrowUpLeft aria-hidden="true" /></a></div></article></Reveal>)}</div>
    <Reveal className="section-action action-with-note"><p>רוצה שגם האתר שלך ירגיש מדויק יותר?</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">בוא נדבר <MessageCircle aria-hidden="true" /></a></Reveal>
  </div></section>;
}

export function About() {
  const strengths = ["חשיבה עסקית לפני עיצוב", "קופי ומבנה שמובילים להחלטה", "עיצוב נקי, ברמה גבוהה ולא גנרי", "פיתוח מודרני, מהיר ורספונסיבי"];
  return <section id="about" className="page-section about-section"><div className="container about-grid">
    <Reveal className="about-copy"><p className="section-label">על הסטודיו</p><h2>מאחורי Velora Studio עומדת חשיבה שמחברת בין עסק, מסר וטכנולוגיה.</h2><p>Velora Studio הוקם על ידי פיני שטרן מתוך הבנה שאתר טוב לא מתחיל בעיצוב, אלא בשאלה עמוקה יותר: למה שהלקוח יבחר דווקא בעסק הזה?</p><p>העבודה בסטודיו משלבת חשיבה עסקית, כתיבה שיווקית, עיצוב נקי ופיתוח מודרני, כדי לבנות אתרים שמרגישים ממוקדים, נראים ברמה גבוהה ומובילים את המשתמש לפעולה ברורה.</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">ספר לי על האתר שאתה רוצה לבנות <MessageCircle aria-hidden="true" /></a></Reveal>
    <div className="about-cards"><Reveal><article className="founder-card"><div className="founder-mark" aria-hidden="true">פש</div><span>פיני שטרן</span><strong>Founder, Velora Studio</strong><p>אסטרטגיה · קופי · עיצוב · פיתוח</p></article></Reveal><div className="strengths">{strengths.map((strength, i) => <Reveal key={strength} delay={i * 70}><div><Check aria-hidden="true" />{strength}</div></Reveal>)}</div></div>
  </div></section>;
}

export function FinalCTA() {
  return <section id="contact" className="page-section final-cta"><div className="container"><Reveal><div className="final-cta-card"><h2>אם האתר שלך לא מסביר למה לבחור בך, זה המקום להתחיל.</h2><p>בשיחת אפיון קצרה נבין מה העסק שלך צריך לשדר, מה הלקוח צריך להבין, ואיזה אתר נכון לבנות כדי להוביל אותו לפעולה.</p><div><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">דבר איתי בוואטסאפ <MessageCircle aria-hidden="true" /></a><a className="btn btn-dark-secondary" href="#work">חזור לראות עבודות <ArrowLeft aria-hidden="true" /></a></div></div></Reveal></div></section>;
}
