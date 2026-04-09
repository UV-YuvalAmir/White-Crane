"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const conditions = {
  he: ["טראומות נפשיות", "לחצים ומתחים", "בעיות הקשורות להריון", "כאבים כרוניים וגופניים", "שיקום לאחר פציעות וניתוחים", "דלקות", "מחלות פנימיות", "הדרכת חיים"],
  en: ["Psychological trauma", "Stress & tension", "Pregnancy-related issues", "Chronic and physical pain", "Post-injury rehabilitation", "Inflammation", "Internal diseases", "Life guidance"],
};

export default function HealingPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "הילינג סיני – פרח הלוטוס" : "Chinese Healing – Lotus Flower"}
        subtitle={locale === "he" ? "לפתור מחלות ממקורן הפנימי" : "Solving diseases from their internal source"}
        character="癒"
        backgroundImage="/images/healing-treatment-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          <div className="text-stone-warm text-sm leading-[2] space-y-4">
            {locale === "he" ? (
              <>
                <p>הילינג סיני (צ&apos;י קונג רפואי) הוא ענף רפואה אנרגטי עתיק שמקורו בתרבות הסינית, לצד דיקור, עיסוי טווינא ורפואת צמחים.</p>
                <p>המטפל משתמש באינטואיציה ובידיים לזיהוי חוסר איזון אנרגטי בצ&apos;י של המטופל ומביא אותו להרמוניה וריפוי.</p>
              </>
            ) : (
              <>
                <p>Chinese Healing (Medical Chi Kung) is an ancient energy medicine branch originating from Chinese culture, alongside acupuncture, Tuina massage, and herbal medicine.</p>
                <p>The practitioner uses intuition and hands to detect energy imbalances in the patient&apos;s Chi and brings them to harmony and healing.</p>
              </>
            )}
          </div>

          <Image src="/images/healing-treatment-lg.jpg" alt="Chinese Healing treatment" width={800} height={533} className="w-full h-auto grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" style={{ mixBlendMode: "multiply" }} />

          <div className="text-center bg-ink text-paper py-12 px-8">
            <p className="heading-calligraphy text-lg text-paper/80">
              {locale === "he"
                ? "כל בעיה גופנית היא ביטוי חיצוני לקושי פנימי-נפשי"
                : "Every physical problem is an external expression of internal-emotional difficulty"}
            </p>
          </div>

          {/* Conditions */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מצבים שניתן לטפל בהם" : "Treatable Conditions"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="grid grid-cols-2 gap-px bg-ink/5">
              {conditions[locale].map((c, i) => (
                <div key={i} className="bg-paper py-4 px-5 text-sm text-stone-warm">
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-10 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-6">
              {locale === "he" ? "לקביעת תור או למידע נוסף" : "Schedule an appointment"}
            </p>
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">
              09-7416199
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
