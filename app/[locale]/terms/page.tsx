import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { getCopy, isLocale, locales, type Locale } from "@/lib/data";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

const metaByLocale: Record<Locale, Metadata> = {
  he: { title: "תנאי שימוש | NorthSpark Studio", description: "תנאי השימוש באתר NorthSpark Studio ומידע על תוכן, קניין רוחני, קישורים והתקשרות לקבלת שירותים.", alternates: { canonical: "/he/terms" } },
  en: { title: "Terms of Use | NorthSpark Studio", description: "Terms governing use of the NorthSpark Studio website, its content, intellectual property, links and service inquiries.", alternates: { canonical: "/en/terms" } },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? metaByLocale[locale] : {};
}

type ContactProps = { phone: string; phoneHref: string; email: string; emailHref: string };

function TermsHe({ phone, phoneHref, email, emailHref }: ContactProps) {
  return <>
    <h1>תנאי שימוש</h1>
    <p className="legal-updated">עודכן לאחרונה: ספטמבר 2026</p>
    <p>ברוכים הבאים ל‑northsparkstudio.com, אתר התדמית של NorthSpark Studio המופעל על ידי פיני. הגלישה באתר והשימוש בתכניו כפופים לתנאים אלה. אם אינך מסכים להם, אנא הימנע משימוש באתר.</p>
    <h2>מידע ושירותים</h2>
    <p>האתר מציג מידע כללי על שירותי כתיבה, עיצוב ובניית אתרים ועל עבודות קודמות. גלישה באתר או שליחת הודעה אינן יוצרות התקשרות מחייבת. היקף העבודה, המחיר, לוחות הזמנים, התשלומים, האחריות, הביטול וכל תנאי מסחרי אחר ייקבעו בהצעה או בהסכם כתוב שיאושר בנפרד. במקרה של סתירה, המסמך הכתוב והמאושר גובר.</p>
    <p>מחירים המופיעים באתר הם מחירי התחלה או הערכות כלליות. המחיר הכולל והסופי, לרבות רכיבים רלוונטיים לפי דין, יפורט בהצעה שתימסר לפני תחילת העבודה. אין באתר התחייבות לתוצאה עסקית, לכמות פניות, למכירות או לדירוג מסוים במנועי חיפוש.</p>
    <h2>שימוש מותר</h2>
    <p>מותר להשתמש באתר לצורך התרשמות מהשירותים ויצירת קשר חוקית בלבד. אין להעתיק, לשכפל, לפרסם, להפיץ, לבצע הנדסה לאחור, להפריע לפעילות האתר, לנסות לקבל גישה בלתי מורשית או להשתמש בתוכן באופן מטעה או מפר זכויות.</p>
    <h2>קניין רוחני ותיק עבודות</h2>
    <p>המותג NorthSpark Studio, מבנה האתר, הטקסטים, העיצוב, הקוד והחומרים המקוריים מוגנים בדיני קניין רוחני ושייכים לבעליהם. שמות, סימנים מסחריים, לוגואים ותכנים של לקוחות שייכים ללקוחות או לבעלי הזכויות בהם, ומוצגים בתיק העבודות ברשות. אין בהצגתם כדי להעביר זכויות למשתמש באתר או ליצור מצג שהלקוח ממליץ על שירות מעבר למה שאושר במפורש.</p>
    <h2>קישורים ואתרי צד שלישי</h2>
    <p>האתר עשוי לכלול קישורים לאתרי לקוחות, WhatsApp ושירותים חיצוניים. אין לי שליטה על זמינותם, אבטחתם, נגישותם, תוכנם או מדיניות הפרטיות שלהם, והשימוש בהם כפוף לתנאיהם.</p>
    <h2>זמינות ואחריות</h2>
    <p>נעשה מאמץ סביר לשמור על מידע תקין ועל אתר זמין ובטוח, אך ייתכנו טעויות, שינויים, תקלות או הפסקות. השימוש באתר הוא באחריות המשתמש. שום דבר בתנאים אלה אינו גורע מזכות, סעד או אחריות שלא ניתן להגביל לפי דין.</p>
    <h2>פרטיות, דין ושינויים</h2>
    <p>הטיפול במידע מוסבר ב<Link href="/he/privacy">מדיניות הפרטיות</Link>. על תנאים אלה יחולו דיני מדינת ישראל, והסמכות המקומית תיקבע לפי הדין החל, בלי לגרוע מזכויות קוגנטיות של צרכנים או משתמשים. התנאים עשויים להתעדכן, והנוסח המעודכן יחול ממועד פרסומו.</p>
    <h2>יצירת קשר</h2>
    <ul><li>פיני, NorthSpark Studio</li><li>טלפון: <a href={phoneHref} dir="ltr">{phone}</a></li><li>דוא&quot;ל: <a href={emailHref}>{email}</a></li></ul>
  </>;
}

function TermsEn({ phone, phoneHref, email, emailHref }: ContactProps) {
  return <>
    <h1>Terms of Use</h1>
    <p className="legal-updated">Last updated: September 2026</p>
    <p>Welcome to northsparkstudio.com, the portfolio website of NorthSpark Studio, operated by Pini. Browsing the site and using its content are subject to these terms. If you do not agree, please do not use the site.</p>
    <h2>Information and services</h2>
    <p>The site provides general information about website copy, design and development services and previous work. Browsing or sending a message does not create a binding engagement. Scope, price, schedule, payments, responsibility, cancellation and other commercial terms are set out in a separately approved written proposal or agreement. If there is a conflict, the approved written document controls.</p>
    <p>Prices shown are starting prices or general estimates. A final total price, including legally relevant components, will be stated in the proposal before work begins. The site does not promise business results, inquiry volume, sales or a particular search-engine ranking.</p>
    <h2>Permitted use</h2>
    <p>You may use the site only to learn about the services and make lawful contact. You may not copy, reproduce, publish, distribute, reverse engineer, disrupt the site, seek unauthorised access, or use its content in a misleading or rights-infringing manner.</p>
    <h2>Intellectual property and portfolio work</h2>
    <p>The NorthSpark Studio brand, site structure, copy, design, code and original materials are protected and belong to their respective owners. Client names, marks, logos and content belong to the clients or other rights holders and are displayed with permission. Their display does not transfer rights to visitors or imply a client endorsement beyond anything separately approved.</p>
    <h2>Third-party links</h2>
    <p>The site may link to client websites, WhatsApp and other services. I do not control their availability, security, accessibility, content or privacy practices, and their own terms apply.</p>
    <h2>Availability and responsibility</h2>
    <p>Reasonable efforts are made to keep information accurate and the site available and secure, but errors, changes, interruptions or faults may occur. Use of the site is at the visitor&apos;s responsibility. Nothing in these terms limits a right, remedy or liability that cannot lawfully be limited.</p>
    <h2>Privacy, law and changes</h2>
    <p>Information handling is explained in the <Link href="/en/privacy">Privacy Policy</Link>. Israeli law applies, and local jurisdiction will be determined under applicable law without limiting mandatory consumer or user rights. These terms may be updated, and the revised version applies from publication.</p>
    <h2>Contact</h2>
    <ul><li>Pini, NorthSpark Studio</li><li>Phone: <a href={phoneHref} dir="ltr">{phone}</a></li><li>Email: <a href={emailHref}>{email}</a></li></ul>
  </>;
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = getCopy(rawLocale);
  const contact = { phone: copy.brand.phone, phoneHref: copy.brand.phoneHref, email: copy.brand.email, emailHref: copy.brand.emailHref };
  return <SectionPageLayout locale={rawLocale}><section className="legal-page"><div className="container legal-content">{rawLocale === "he" ? <TermsHe {...contact} /> : <TermsEn {...contact} />}</div></section></SectionPageLayout>;
}
