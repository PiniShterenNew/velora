import type { Metadata } from "next";
import { SectionPageLayout } from "@/components/SectionPageLayout";

export const metadata: Metadata = {
  title: "העמוד לא נמצא | NorthSpark Studio",
  robots: {
    index: false,
  },
};

export default function NotFound() {
  return (
    <SectionPageLayout locale="he">
      <section className="legal-page">
        <div className="container legal-content not-found-content">
          <h1>העמוד הזה לא קיים</h1>
          <p>
            יכול להיות שהקישור השתנה, או שהייתה טעות הקלדה בכתובת. בכל מקרה, כל מה שחשוב נמצא בעמוד
            הראשי.
          </p>
          <a className="btn btn-primary" href="/he">
            חזרה לעמוד הראשי
          </a>
        </div>
      </section>
    </SectionPageLayout>
  );
}
