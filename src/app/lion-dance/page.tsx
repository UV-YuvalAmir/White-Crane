"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const events = {
  he: ["מסיבות פורים", "כנסים", "חתונות", "השקות מוצרים", "ימי הולדת", "פסטיבלים", "פתיחת עסקים"],
  en: ["Purim parties", "Conferences", "Weddings", "Product launches", "Birthdays", "Festivals", "Business openings"],
};

export default function LionDancePage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "ריקוד האריה" : "Lion Dance"}
        subtitle={locale === "he" ? "שמחה וססגוניות מהתרבות הסינית" : "Joy and color from Chinese culture"}
        character="獅"
        backgroundImage="/images/gallery6-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          <div className="text-center text-stone-warm text-sm leading-[2] max-w-xl mx-auto space-y-4">
            <p>
              {locale === "he"
                ? "ריקוד האריה הסיני מביא שמחה גדולה, מזל טוב ושפע, ומגרש את הרוחות הרעות."
                : "The Chinese Lion Dance brings great joy, good fortune and abundance, and drives away evil spirits."}
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מתאים לאירועים" : "Suitable for Events"}
            </h2>
            <div className="brush-stroke mx-auto mb-10" />
            <div className="flex flex-wrap justify-center gap-3">
              {events[locale].map((e, i) => (
                <span key={i} className="px-4 py-2 border border-ink/8 text-xs text-stone-warm">
                  {e}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-ink text-paper text-center py-16 px-8">
            <p className="heading-calligraphy text-lg text-paper/80 mb-8">
              {locale === "he" ? "לקבלת הצעת מחיר המותאמת לכם" : "Get a customized quote"}
            </p>
            <a href="tel:097416199" className="text-seal-light heading-calligraphy text-xl hover:text-paper transition-colors">
              09-7416199
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
