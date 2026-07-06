"use client";
import { useState } from "react";
import { MessageCircle, Minus, Plus } from "lucide-react";

const whatsappUrl = "https://wa.me/972548345192";
const items = [
  ["כמה זמן לוקח לבנות אתר?", "זה תלוי בסוג האתר, כמות העמודים, היקף הקופי, והאם נדרשות אנימציות או חוויות מיוחדות. דף נחיתה יכול להיות מהיר יחסית, בעוד שאתר תדמית מלא דורש יותר אפיון, כתיבה, עיצוב ופיתוח."],
  ["האם אתה רק מעצב או גם מפתח את האתר?", "Velora Studio מטפל בכל המעטפת: בחשיבה, במבנה, בקופי, בעיצוב ובפיתוח. המטרה היא לא להעביר קובץ עיצוב, אלא לבנות אתר שלם שעובד נכון."],
  ["האם צריך להגיע עם טקסטים מוכנים?", "לא בהכרח. אם יש לך חומרים קיימים, נשתמש בהם כבסיס. אם אין, נבנה יחד את המסרים המרכזיים ונכתוב את התוכן לפי המבנה הנכון לאתר."],
  ["האם האתר יהיה מותאם למובייל?", "בוודאי. האתר מתוכנן מראש גם לדסקטופ וגם למובייל, כדי שהחוויה, הקריאה לפעולה והמסר יעבדו נכון בכל גודל מסך."],
  ["האם אפשר לבנות אתר פשוט בלי אנימציות מיוחדות?", "כן. Motion ו Story Scrolling נכנסים לתמונה רק אם הם משרתים את המסר. אם אתר נקי, חד ומהיר יעשה את העבודה טוב יותר, זה הכיוון שניקח."],
  ["מה זה Story Scrolling?", "Story Scrolling הוא שימוש בגלילה כדי להוביל את המשתמש דרך רעיון, מוצר או תהליך בצורה הדרגתית. במקום להציג הכול בבת אחת, האתר מספר את הסיפור בשלבים."],
  ["האם אפשר לשדרג אתר קיים ולא לבנות מאפס?", "כן. אם יש אתר קיים עם בסיס טוב, בודקים מה לא עובד במסר, במבנה, בעיצוב או בקריאות לפעולה, ובונים תוכנית שיפור ממוקדת. אם הבסיס חלש מדי, לרוב עדיף לבנות מחדש בצורה נכונה."],
  ["כמה עולה לבנות אתר?", "המחיר תלוי בסוג האתר, כמות העבודה, עומק האפיון, ורמת העיצוב והפיתוח הנדרשים. אחרי שיחת אפיון קצרה אפשר להבין מה נכון לבנות ומה סדר הגודל."],
  ["למי השירות פחות מתאים?", "מי שמחפש בעיקר את הפתרון הזול והמהיר ביותר שיש, כנראה ימצא אצל ספקים אחרים התאמה טובה יותר. השירות בנוי למי שרוצה אתר מדויק ומקצועי, שמושקעת בו חשיבה אסטרטגית ושמטרתו להניב תוצאה עסקית."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return <section id="faq" className="page-section faq-section"><div className="container faq-wrap"><div className="section-intro"><p className="section-label">שאלות נפוצות</p><h2>שאלות שעולות לפני שמתחילים.</h2><p className="section-copy">לפני שבונים אתר, טבעי לרצות להבין איך נראה התהליך, מה כלול, עד כמה עמוק נכנסים לאסטרטגיה והאם זה בכלל מתאים לעסק שלך.</p></div><div className="faq-list">{items.map(([question, answer], i) => { const active = open === i; return <article className={`faq-item ${active ? "open" : ""}`} key={question}><h3><button type="button" aria-expanded={active} aria-controls={`answer-${i}`} onClick={() => setOpen(active ? null : i)}><span>{question}</span>{active ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}</button></h3><div className="faq-answer" id={`answer-${i}`} role="region" aria-hidden={!active}><p>{answer}</p></div></article>})}</div><div className="faq-contact"><p>יש לך שאלה אחרת?</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">שלח הודעה בוואטסאפ <MessageCircle aria-hidden="true" /></a></div></div></section>;
}
