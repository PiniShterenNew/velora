import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPageLayout } from "@/components/SectionPageLayout";
import { getCopy, isLocale, locales, type Locale } from "@/lib/data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const metaByLocale: Record<Locale, Metadata> = {
  he: {
    title: "מדיניות פרטיות | NorthSpark Studio",
    description: "מדיניות הפרטיות של אתר NorthSpark Studio: איזה מידע נאסף באתר, לאיזו מטרה, ואילו זכויות יש לך לגביו.",
    alternates: { canonical: "/he/privacy" },
  },
  en: {
    title: "Privacy Policy | NorthSpark Studio",
    description: "The privacy policy for the NorthSpark Studio website: what data is collected, why, and what rights you have over it.",
    alternates: { canonical: "/en/privacy" },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return metaByLocale[locale];
}

function PrivacyHe({ phone, phoneHref, email, emailHref }: { phone: string; phoneHref: string; email: string; emailHref: string }) {
  return (
    <>
      <h1>מדיניות פרטיות</h1>
      <p className="legal-updated">עודכן לאחרונה: אוגוסט 2026</p>

      <p>
        האתר northsparkstudio.com מופעל על ידי NorthSpark Studio (להלן: &quot;אני&quot; או
        &quot;האתר&quot;). המדיניות הזו מסבירה בשפה פשוטה איזה מידע נאסף כשגולשים באתר, מה נעשה
        איתו, ומה הזכויות שלך לגביו - בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981.
      </p>

      <h2>איזה מידע נאסף באתר</h2>
      <p>באתר אין טפסי הרשמה ואין צורך למסור פרטים אישיים כדי לגלוש בו. המידע היחיד שנאסף הוא:</p>
      <ul>
        <li>
          <strong>נתוני שימוש אנונימיים</strong> - סטטיסטיקות גלישה כלליות (אילו עמודים נצפו, משך
          הביקור, סוג המכשיר והדפדפן, אזור גיאוגרפי כללי). המידע הזה אינו מזהה אותך אישית.
        </li>
        <li>
          <strong>מידע שאתה בוחר למסור</strong> - אם פנית אליי בוואטסאפ, בטלפון או במייל, הפרטים
          שמסרת (שם, מספר טלפון, תוכן הפנייה) ישמשו אך ורק כדי לחזור אליך ולטפל בפנייה.
        </li>
      </ul>

      <h2>כלי מדידה באתר</h2>
      <p>האתר משתמש בכלים הבאים לצורך הבנת השימוש בו ושיפורו:</p>
      <ul>
        <li>
          <strong>Google Analytics 4</strong> - שירות של Google למדידת תנועה באתר. הכלי משתמש
          בעוגיות (Cookies) ואוסף נתוני שימוש אנונימיים, אך ורק לאחר שמאשרים זאת בהודעת העוגיות
          שמופיעה בכניסה הראשונה לאתר. מידע נוסף זמין ב
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            מדיניות הפרטיות של Google
          </a>
          .
        </li>
        <li>
          <strong>Vercel Analytics</strong> - כלי מדידה של פלטפורמת האחסון, שאוסף נתוני ביצועים
          ושימוש ללא עוגיות וללא זיהוי אישי.
        </li>
      </ul>
      <p>
        אפשר לשנות את הבחירה בכל רגע על ידי ניקוי האחסון המקומי (local storage) של הדפדפן עבור
        האתר, או לחסום ולמחוק עוגיות דרך הגדרות הדפדפן. דחיית עוגיות או חסימתן לא תפגע בגלישה באתר.
      </p>

      <h2>מה לא נעשה עם המידע</h2>
      <ul>
        <li>המידע לא נמכר ולא מועבר לגורמים שלישיים למטרות שיווק.</li>
        <li>אין באתר פרסומות ואין מעקב פרסומי (רימרקטינג).</li>
        <li>פרטים שנמסרו בפנייה אישית משמשים רק למענה לפנייה.</li>
      </ul>

      <h2>הזכויות שלך</h2>
      <p>
        לפי חוק הגנת הפרטיות, יש לך זכות לעיין במידע שנשמר עליך, לבקש לתקן אותו או לבקש שיימחק.
        לכל בקשה כזו אפשר לפנות אליי בפרטים שבהמשך, ואטפל בה בהקדם.
      </p>

      <h2>שינויים במדיניות</h2>
      <p>
        אם המדיניות תתעדכן (למשל אם יתווסף לאתר כלי חדש), העמוד הזה יעודכן בהתאם, כולל תאריך
        העדכון בראש העמוד.
      </p>

      <h2>יצירת קשר</h2>
      <ul>
        <li>שם: פיני, NorthSpark Studio</li>
        <li>
          טלפון: <a href={phoneHref} dir="ltr">{phone}</a>
        </li>
        <li>
          דוא&quot;ל: <a href={emailHref}>{email}</a>
        </li>
      </ul>
    </>
  );
}

function PrivacyEn({ phone, phoneHref, email, emailHref }: { phone: string; phoneHref: string; email: string; emailHref: string }) {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: August 2026</p>

      <p>
        The website northsparkstudio.com is operated by NorthSpark Studio (&quot;I&quot; or
        &quot;the site&quot;). This policy explains, in plain language, what data is collected when
        you browse the site, what it&apos;s used for, and what rights you have over it.
      </p>

      <h2>What data is collected</h2>
      <p>There are no sign-up forms on this site, and no personal details are required to browse it. The only data collected is:</p>
      <ul>
        <li>
          <strong>Anonymous usage data</strong> - general browsing statistics (which pages were viewed,
          visit duration, device and browser type, general geographic region). This data does not
          identify you personally.
        </li>
        <li>
          <strong>Information you choose to share</strong> - if you reach out via WhatsApp, phone, or
          email, the details you provide (name, phone number, message content) are used solely to get
          back to you and handle your inquiry.
        </li>
      </ul>

      <h2>Measurement tools on this site</h2>
      <p>This site uses the following tools to understand and improve how it&apos;s used:</p>
      <ul>
        <li>
          <strong>Google Analytics 4</strong> - Google&apos;s service for measuring site traffic. It
          uses cookies and collects anonymous usage data, but only after you accept the cookie
          notice shown on your first visit. More information is available in
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&apos;s Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Vercel Analytics</strong> - a measurement tool from the hosting platform, collecting
          performance and usage data without cookies or personal identification.
        </li>
      </ul>
      <p>
        You can change your choice at any time by clearing your browser&apos;s local storage for this
        site, or block/delete cookies via your browser settings. Declining or blocking cookies will
        not affect your ability to browse the site.
      </p>

      <h2>What is not done with your data</h2>
      <ul>
        <li>Data is not sold or shared with third parties for marketing purposes.</li>
        <li>There is no advertising on this site and no ad-retargeting tracking.</li>
        <li>Details shared through a personal inquiry are used only to respond to that inquiry.</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        Under applicable privacy law, you have the right to review data held about you, request a
        correction, or request its deletion. For any such request, reach out using the details below,
        and it will be handled promptly.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy is updated (for example, if a new tool is added to the site), this page will
        be updated accordingly, including the date at the top.
      </p>

      <h2>Contact</h2>
      <ul>
        <li>Name: Pini, NorthSpark Studio</li>
        <li>
          Phone: <a href={phoneHref} dir="ltr">{phone}</a>
        </li>
        <li>
          Email: <a href={emailHref}>{email}</a>
        </li>
      </ul>
    </>
  );
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const copy = getCopy(locale);

  return (
    <SectionPageLayout locale={locale}>
      <section className="legal-page">
        <div className="container legal-content">
          {locale === "he" ? (
            <PrivacyHe phone={copy.brand.phone} phoneHref={copy.brand.phoneHref} email={copy.brand.email} emailHref={copy.brand.emailHref} />
          ) : (
            <PrivacyEn phone={copy.brand.phone} phoneHref={copy.brand.phoneHref} email={copy.brand.email} emailHref={copy.brand.emailHref} />
          )}
        </div>
      </section>
    </SectionPageLayout>
  );
}
