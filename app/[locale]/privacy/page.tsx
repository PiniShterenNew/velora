import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { getCopy, isLocale, locales, type Locale } from "@/lib/data";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

const metaByLocale: Record<Locale, Metadata> = {
  he: { title: "מדיניות פרטיות | NorthSpark Studio", description: "איזה מידע נאסף באתר NorthSpark Studio, לאילו מטרות ואילו זכויות עומדות למשתמשים.", alternates: { canonical: "/he/privacy" } },
  en: { title: "Privacy Policy | NorthSpark Studio", description: "What information NorthSpark Studio collects, why it is used and the choices available to visitors.", alternates: { canonical: "/en/privacy" } },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? metaByLocale[locale] : {};
}

type ContactProps = { phone: string; phoneHref: string; email: string; emailHref: string };

function ContactHe({ phone, phoneHref, email, emailHref }: ContactProps) {
  return <ul><li>פיני, NorthSpark Studio</li><li>טלפון: <a href={phoneHref} dir="ltr">{phone}</a></li><li>דוא&quot;ל: <a href={emailHref}>{email}</a></li></ul>;
}

function ContactEn({ phone, phoneHref, email, emailHref }: ContactProps) {
  return <ul><li>Pini, NorthSpark Studio</li><li>Phone: <a href={phoneHref} dir="ltr">{phone}</a></li><li>Email: <a href={emailHref}>{email}</a></li></ul>;
}

function PrivacyHe(props: ContactProps) {
  return <>
    <h1>מדיניות פרטיות</h1>
    <p className="legal-updated">עודכן לאחרונה: ספטמבר 2026</p>
    <p>האתר northsparkstudio.com מופעל על ידי NorthSpark Studio. המדיניות מסבירה כיצד מידע מטופל בעת גלישה באתר או פנייה אליי, בהתאם לדין החל ובכלל זה חוק הגנת הפרטיות, התשמ&quot;א–1981.</p>
    <h2>המידע שנאסף</h2>
    <p>אפשר לגלוש באתר בלי להירשם ובלי למסור פרטים. עם זאת, עשוי להיאסף מידע טכני ומידע שימוש, כגון עמודים שנצפו, זמני שימוש, סוג מכשיר ודפדפן, כתובת IP או מזהים מקוונים, ואזור גיאוגרפי משוער. נתונים אלה אינם נועדו לזהות אותך ישירות, אך עשויים להיחשב מידע אישי לפי הדין.</p>
    <p>אם פנית מיוזמתך באמצעות WhatsApp, טלפון או דוא&quot;ל, יטופלו פרטי הקשר, תוכן הפנייה וכל מידע נוסף שבחרת למסור. אינך חייב למסור מידע, אך בלעדיו ייתכן שלא אוכל להשיב או לספק הצעה ושירות.</p>
    <h2>מטרות השימוש</h2>
    <ul><li>תפעול האתר, אבטחתו ושיפור הביצועים וחוויית השימוש.</li><li>מדידת שימוש באתר, בכפוף לבחירת העוגיות שלך.</li><li>מענה לפניות, הכנת הצעות ומתן שירות.</li><li>עמידה בחובות חוקיות, ניהול רשומות והגנה על זכויות משפטיות.</li></ul>
    <h2>עוגיות וכלי מדידה</h2>
    <p><strong>Google Analytics 4</strong> נטען רק לאחר אישור מפורש לעוגיות ניתוח. הוא עשוי להציב עוגיות ולעבד נתוני שימוש ומזהים מקוונים עבור Google. דחייה לא תפגע בגלישה. מידע נוסף נמצא ב<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">מדיניות הפרטיות של Google</a>.</p>
    <p><strong>Vercel Analytics</strong> משמש למדידת ביצועים ושימוש בסיסי ללא עוגיות. Vercel היא גם ספקית האחסון והתשתית של האתר. מידע נוסף נמצא ב<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">מדיניות הפרטיות של Vercel</a>.</p>
    <p><CookieSettingsButton className="legal-cookie-settings" label="פתיחת הגדרות העוגיות" />. אפשר גם למחוק עוגיות דרך הגדרות הדפדפן.</p>
    <h2>מסירת מידע והעברה מחוץ לישראל</h2>
    <p>המידע אינו נמכר ואינו משמש לפרסום מותאם או לרימרקטינג באתר. הוא עשוי להיות מעובד בידי ספקי תשתית, מדידה ותקשורת הנדרשים להפעלת האתר ולטיפול בפנייה, ובהם Vercel, Google וספקי WhatsApp או דוא&quot;ל. חלק מהעיבוד עשוי להתבצע מחוץ לישראל בהתאם להסדרים ולאמצעי ההגנה של אותם ספקים. מידע עשוי להימסר גם אם הדבר נדרש לפי דין או לצורך הגנה על זכויות.</p>
    <h2>שמירה ואבטחה</h2>
    <p>מידע נשמר רק למשך הזמן הדרוש למטרות שלשמן נאסף, לטיפול בפנייה או בשירות, ולתקופות הנדרשות לפי דין, צורכי הנהלת חשבונות או הגנה משפטית. לאחר מכן הוא יימחק או יצומצם ככל שניתן. ננקטים אמצעי אבטחה סבירים, אך אין אפשרות להבטיח אבטחה מוחלטת.</p>
    <h2>הזכויות שלך</h2>
    <p>בכפוף לדין, אפשר לבקש לעיין במידע עליך, לתקן מידע שאינו נכון או לבקש את מחיקתו. אפשר גם לבטל הסכמה לעוגיות ניתוח בכל עת. ייתכן שאבקש פרטים סבירים כדי לאתר את המידע ולאמת את זהות המבקש.</p>
    <h2>שינויים ויצירת קשר</h2>
    <p>המדיניות עשויה להתעדכן בעקבות שינוי באתר, בספקים או בדין. תאריך העדכון יוצג בראש העמוד. לבקשות ולשאלות בנושא פרטיות:</p>
    <ContactHe {...props} />
  </>;
}

function PrivacyEn(props: ContactProps) {
  return <>
    <h1>Privacy Policy</h1>
    <p className="legal-updated">Last updated: September 2026</p>
    <p>northsparkstudio.com is operated by NorthSpark Studio. This policy explains how information is handled when you browse the site or contact me, in accordance with applicable privacy law.</p>
    <h2>Information collected</h2>
    <p>You can browse without registering or submitting details. Technical and usage information may still be processed, including pages viewed, usage times, device and browser type, IP address or online identifiers, and an approximate location. This data is not intended to identify you directly, but may be personal data under applicable law.</p>
    <p>If you contact me voluntarily through WhatsApp, phone or email, I process the contact details, message and any other information you choose to provide. You are not required to provide information, but without it I may be unable to respond, prepare a proposal or provide services.</p>
    <h2>Purposes</h2>
    <ul><li>Operating, securing and improving the site and its performance.</li><li>Measuring site usage, subject to your cookie choice.</li><li>Responding to inquiries, preparing proposals and providing services.</li><li>Meeting legal obligations, maintaining records and protecting legal rights.</li></ul>
    <h2>Cookies and analytics</h2>
    <p><strong>Google Analytics 4</strong> loads only after you explicitly allow analytics cookies. It may set cookies and process usage data and online identifiers for Google. Declining does not affect access to the site. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</p>
    <p><strong>Vercel Analytics</strong> provides basic cookie-free usage and performance measurement. Vercel also hosts and provides infrastructure for the site. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>.</p>
    <p><CookieSettingsButton className="legal-cookie-settings" label="Open cookie settings" />. You can also delete cookies in your browser settings.</p>
    <h2>Recipients and international processing</h2>
    <p>Information is not sold and the site does not use personalised advertising or remarketing. It may be processed by infrastructure, analytics and communications providers needed to operate the site and handle inquiries, including Vercel, Google, and WhatsApp or email providers. Some processing may take place outside Israel under those providers&apos; safeguards. Information may also be disclosed when legally required or necessary to protect rights.</p>
    <h2>Retention and security</h2>
    <p>Information is kept only as long as needed for its purpose, to handle an inquiry or service, and for periods required by law, accounting or legal defence. It is then deleted or minimised where reasonably possible. Reasonable safeguards are used, but absolute security cannot be guaranteed.</p>
    <h2>Your rights</h2>
    <p>Subject to applicable law, you may request access to information about you, correction of inaccurate information, or deletion. You may withdraw analytics consent at any time. Reasonable identifying details may be requested to locate the information and verify your request.</p>
    <h2>Changes and contact</h2>
    <p>This policy may change when the site, providers or law change. The latest date will appear above. For privacy questions or requests:</p>
    <ContactEn {...props} />
  </>;
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = getCopy(rawLocale);
  const contact = { phone: copy.brand.phone, phoneHref: copy.brand.phoneHref, email: copy.brand.email, emailHref: copy.brand.emailHref };
  return <SectionPageLayout locale={rawLocale}><section className="legal-page"><div className="container legal-content">{rawLocale === "he" ? <PrivacyHe {...contact} /> : <PrivacyEn {...contact} />}</div></section></SectionPageLayout>;
}
