import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import "./styles/tokens.css";
import "./globals.css";
import "./styles/utilities.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/hero.css";

const rubik = Rubik({ subsets: ["hebrew", "latin"], variable: "--font-rubik", display: "swap" });

export const metadata: Metadata = {
  title: "Velora Studio | אתרים שבנויים סביב הסיבה לבחור בך",
  description: "אסטרטגיה, קופי, עיצוב ופיתוח לאתרי תדמית, דפי נחיתה וחוויות דיגיטליות.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#faf7f0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="he" dir="rtl" className={rubik.variable}><body>{children}</body></html>;
}
