export const BRAND = {
  name: "Velora Studio",
  whatsappDisplay: "054-834-5192",
  whatsappUrl: "https://wa.me/972548345192?text=היי%20פיני,%20אשמח%20לדבר%20על%20האתר%20שלי",
};

export const navItems = [
  { label: "שירותים", href: "#services" },
  { label: "תהליך", href: "#process" },
  { label: "עבודות", href: "#work" },
  { label: "שאלות", href: "#faq" },
] as const;

export const portfolio = [
  { name: "Cash Plus", url: "https://cashplus-app.com/", description: "פלטפורמה פיננסית שמתרגמת מוצר מורכב לחוויה ברורה ובטוחה.", tags: "Product · UX · Fintech", tone: "signal" },
  { name: "א.ש אינסטלציה", url: "https://as-plumbing-cyan.vercel.app/", description: "אתר שירות מקומי שבונה אמון מהר ומוביל לפנייה ישירה.", tags: "Service · Trust · Leads", tone: "cyan" },
  { name: "Karen Beauty", url: "https://karen-beauty.vercel.app/", description: "נוכחות דיגיטלית נקייה למותג יופי עם תחושת פרימיום מדויקת.", tags: "Beauty · Brand · Premium", tone: "ember" },
  { name: "נותנים באהבה", url: "https://donate.notnim.info/", description: "חוויית תרומה שמחברת בין מטרה, אמון ופעולה אחת ברורה.", tags: "Nonprofit · Trust · CTA", tone: "amber" },
] as const;

export const faq = [
  ["כמה זמן לוקח לבנות אתר?", "הזמן תלוי בהיקף ובעומק. דף נחיתה ממוקד יכול להיבנות מהר יחסית; אתר תדמית מלא דורש יותר אפיון, כתיבה ועיצוב. אחרי שיחת היכרות קצרה אפשר לתת מסגרת מדויקת."],
  ["אתם גם כותבים וגם מפתחים?", "כן. Velora מחברת אסטרטגיה, קופי, עיצוב, Motion ופיתוח לתהליך אחד — כדי שלא תצטרכו לחבר לבד בין כמה ספקים."],
  ["צריך להגיע עם טקסטים מוכנים?", "לא. חומר קיים עוזר, אבל אנחנו יודעים לזקק את המסר ולכתוב את התוכן בהתאם למבנה ולמטרה של האתר."],
  ["האתר מותאם למובייל?", "בהחלט. החוויה מתוכננת קודם כול לקריאה מהירה, נוחה וברורה גם במסכים קטנים."],
  ["מה זה Story Scrolling?", "זו דרך לספר רעיון או תהליך דרך הגלילה. התנועה משרתת את ההבנה ומובילה את המשתמש שלב אחר שלב, במקום להעמיס הכול בבת אחת."],
] as const;
