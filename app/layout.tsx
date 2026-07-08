import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { copy } from "@/lib/data";
import "./styles/tokens.css";
import "./globals.css";
import "./styles/utilities.css";
import "./styles/layout.css";
import "./styles/components/buttons.css";
import "./styles/components/sections-shared.css";
import "./styles/components/decision-board.css";
import "./styles/components/services.css";
import "./styles/components/story.css";
import "./styles/components/work.css";
import "./styles/components/process.css";
import "./styles/components/about.css";
import "./styles/components/social-proof.css";
import "./styles/components/testimonials.css";
import "./styles/components/faq.css";
import "./styles/components/final-cta.css";
import "./styles/components/footer.css";
import "./styles/hero.css";

const rubik = Rubik({ subsets: ["hebrew", "latin"], variable: "--font-rubik", display: "swap" });

export const metadata: Metadata = {
  title: copy.metadata.title,
  description: copy.metadata.description,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#faf7f0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="he" dir="rtl" className={rubik.variable}><body>{children}</body></html>;
}
