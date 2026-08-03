import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { getCopy, isLocale, locales, type Locale } from "@/lib/data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const metaByLocale: Record<Locale, Metadata> = {
  he: {
    title: "הצהרת נגישות | NorthSpark Studio",
    description: "הצהרת הנגישות של אתר NorthSpark Studio: רמת הנגישות, ההתאמות שבוצעו ודרכי פנייה בנושאי נגישות.",
    alternates: { canonical: "/he/accessibility" },
  },
  en: {
    title: "Accessibility Statement | NorthSpark Studio",
    description: "The accessibility statement for the NorthSpark Studio website: conformance level, accommodations in place, and how to reach us about accessibility.",
    alternates: { canonical: "/en/accessibility" },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return metaByLocale[locale];
}

function AccessibilityHe({ phone, phoneHref, email, emailHref }: { phone: string; phoneHref: string; email: string; emailHref: string }) {
  return (
    <>
      <h1>הצהרת נגישות</h1>
      <p className="legal-updated">עודכן לאחרונה: אוגוסט 2026</p>

      <p>
        אתר NorthSpark Studio שם דגש על נגישות, מתוך אמונה שלכל אדם מגיעה גישה שווה למידע ולשירותים.
        אנחנו פועלים כדי שהאתר יהיה שמיש ונוח לכולם, כולל אנשים עם מוגבלות.
      </p>

      <h2>רמת הנגישות באתר</h2>
      <p>
        האתר נבנה בשאיפה לעמוד בהנחיות הנגישות WCAG 2.1 ברמה AA, בהתאם לעקרונות התקן הישראלי
        (ת&quot;י 5568) לנגישות תכנים באינטרנט.
      </p>

      <h2>התאמות הנגישות שבוצעו</h2>
      <ul>
        <li>מבנה עמוד סמנטי עם כותרות מדורגות, המאפשר ניווט נוח עם קורא מסך.</li>
        <li>קישור &quot;דלג לתוכן המרכזי&quot; בראש העמוד.</li>
        <li>תמיכה מלאה בניווט באמצעות מקלדת, כולל סימון מיקוד ברור.</li>
        <li>ניגודיות צבעים העומדת בדרישות התקן.</li>
        <li>טקסט חלופי לתמונות ותיאורי ARIA לרכיבי ניווט.</li>
        <li>כיבוד העדפת &quot;הפחתת תנועה&quot; של מערכת ההפעלה - אנימציות מצומצמות למי שביקש זאת.</li>
        <li>האתר מותאם לצפייה במחשב ובטלפון, וניתן להגדיל את הטקסט דרך הדפדפן בלי פגיעה בתוכן.</li>
      </ul>

      <h2>מגבלות ידועות</h2>
      <p>
        למרות המאמצים, ייתכן שחלקים מסוימים באתר עדיין אינם נגישים במלואם. אם נתקלתם ברכיב שאינו
        נגיש - נשמח לדעת, ונטפל בזה בהקדם.
      </p>

      <h2>פנייה בנושאי נגישות</h2>
      <p>אם נתקלתם בבעיית נגישות באתר, או שיש לכם הצעה לשיפור, אפשר לפנות אליי ישירות:</p>
      <ul>
        <li>שם: פיני, NorthSpark Studio</li>
        <li>
          טלפון: <a href={phoneHref} dir="ltr">{phone}</a>
        </li>
        <li>
          דוא&quot;ל: <a href={emailHref}>{email}</a>
        </li>
      </ul>
      <p>אשתדל לחזור לכל פנייה בתוך מספר ימי עסקים.</p>
    </>
  );
}

function AccessibilityEn({ phone, phoneHref, email, emailHref }: { phone: string; phoneHref: string; email: string; emailHref: string }) {
  return (
    <>
      <h1>Accessibility Statement</h1>
      <p className="legal-updated">Last updated: August 2026</p>

      <p>
        NorthSpark Studio is committed to accessibility, in the belief that everyone deserves equal
        access to information and services. We work to keep this site usable and comfortable for
        everyone, including people with disabilities.
      </p>

      <h2>Conformance level</h2>
      <p>
        This site is built to aim for WCAG 2.1 level AA, in line with the principles of Israeli
        Standard 5568 for web content accessibility.
      </p>

      <h2>Accommodations in place</h2>
      <ul>
        <li>Semantic page structure with proper heading order, for smooth screen reader navigation.</li>
        <li>A &quot;skip to main content&quot; link at the top of the page.</li>
        <li>Full keyboard navigation support, with clear focus indication.</li>
        <li>Color contrast that meets the standard&apos;s requirements.</li>
        <li>Alt text for images and ARIA labels for navigation elements.</li>
        <li>Respect for the operating system&apos;s &quot;reduce motion&quot; preference - animations are minimized for anyone who has requested it.</li>
        <li>The site adapts to desktop and mobile, and text can be enlarged via the browser without breaking the layout.</li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        Despite these efforts, some parts of the site may not yet be fully accessible. If you run
        into a component that isn&apos;t accessible, we&apos;d like to know, and we&apos;ll address it promptly.
      </p>

      <h2>Accessibility contact</h2>
      <p>If you encounter an accessibility issue on this site, or have a suggestion, please reach out directly:</p>
      <ul>
        <li>Name: Pini, NorthSpark Studio</li>
        <li>
          Phone: <a href={phoneHref} dir="ltr">{phone}</a>
        </li>
        <li>
          Email: <a href={emailHref}>{email}</a>
        </li>
      </ul>
      <p>I aim to respond to every inquiry within a few business days.</p>
    </>
  );
}

export default async function AccessibilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const copy = getCopy(locale);

  return (
    <SectionPageLayout locale={locale}>
      <section className="legal-page">
        <div className="container legal-content">
          {locale === "he" ? (
            <AccessibilityHe phone={copy.brand.phone} phoneHref={copy.brand.phoneHref} email={copy.brand.email} emailHref={copy.brand.emailHref} />
          ) : (
            <AccessibilityEn phone={copy.brand.phone} phoneHref={copy.brand.phoneHref} email={copy.brand.email} emailHref={copy.brand.emailHref} />
          )}
        </div>
      </section>
    </SectionPageLayout>
  );
}
