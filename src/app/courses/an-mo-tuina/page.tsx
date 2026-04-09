"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function AnMoTuinaCoursePage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "קורס מוסמך אנמו-טווינא" : "An-Mo-Tuina Certification Course"}
        subtitle={locale === "he" ? "הכשרת מטפלים בשיטת טיפול סינית עתיקה" : "Practitioner training in ancient Chinese therapy"}
        character="推"
        backgroundImage="/images/gallery1-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          <div className="text-stone-warm text-sm leading-[2] space-y-4">
            {locale === "he" ? (
              <>
                <p>הכשרת מטפלים מקיפה בשיטת אן-מו-טווינא – שיטת עיסוי ומניפולציה סינית עתיקה לטיפול בבעיות אורטופדיות וכאבים.</p>
                <p>הקורס כולל עיסוי דינמי, מתיחות, יסודות אנטומיה, ותרגול מעשי מקיף.</p>
              </>
            ) : (
              <>
                <p>Comprehensive practitioner training in An-Mo-Tuina – an ancient Chinese massage and manipulation method for treating orthopedic problems and pain.</p>
                <p>The course includes dynamic massage, stretching, anatomy fundamentals, and extensive hands-on practice.</p>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="text-center py-10 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-6">
              {locale === "he" ? "למידע נוסף והרשמה" : "For information and registration"}
            </p>
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">09-7416199</a>
          </div>
        </div>
      </section>
    </>
  );
}
