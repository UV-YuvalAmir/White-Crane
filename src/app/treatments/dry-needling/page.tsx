"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const treatable = {
  he: ["בעיות כתפיים, כתף קפואה", "שרירים תפוסים בצוואר ובגב", "מרפק טניס / גולף", "חוסר תחושה בגפיים", "טינטון", "כאבי ראש וסחרחורות", "מכניקת גוף לקויה", "כאבי שרירים ומפרקים"],
  en: ["Shoulder problems, frozen shoulder", "Tight muscles in neck and back", "Tennis / golf elbow", "Limb numbness", "Tinnitus", "Headaches and dizziness", "Poor body mechanics", "Muscle and joint pain"],
};

export default function DryNeedlingPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "דיקור יבש אורטופדי" : "Orthopedic Dry Needling"}
        subtitle={locale === "he" ? "טיפול מתקדם בכאב" : "Advanced pain treatment"}
        character="針"
        backgroundImage="/images/dryneedling.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          <Image src="/images/dryneedling.jpg" alt="Dry Needling" width={800} height={600} className="w-full h-auto grayscale contrast-[1.1] opacity-90 mb-12 hover:grayscale-0 hover:opacity-100 transition-all duration-700" style={{ mixBlendMode: "multiply" }} />

          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "נקודות טריגר" : "Trigger Points"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>נקודות בשרירים שבהן מתרכז מתח ולחץ עליהן מעורר כאב. הגורמים כוללים עומס יתר, תנוחה לקויה, מתח, תנועות חדות או חבלה ישירה.</p>
                  <p>מחקרים עדכניים מראים ש-75 אחוז מכאבי הגוף מקורם בשרירים.</p>
                </>
              ) : (
                <>
                  <p>Points in muscles where tension concentrates and pressure triggers pain. Causes include muscle overload, poor posture, stress, sharp movements, or direct trauma.</p>
                  <p>Current studies indicate 75 percent of body pain originates from muscles.</p>
                </>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "שיטת הטיפול" : "Treatment Method"}
            </h2>
            <div className="brush-stroke mb-8" />
            <p className="text-stone-warm text-sm leading-[2]">
              {locale === "he"
                ? "טכניקות מודרניות משלבות מחטים דקות עם לחץ, ויוצרות גירוי עצבי שגורם למוח לשחרר כימיקלים מרככי כאב כמו אנדורפינים."
                : "Modern techniques combine fine needles with pressure, creating nerve stimulation that prompts the brain to release pain-relieving chemicals like endorphins."}
            </p>
          </div>

          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מצבים הניתנים לטיפול" : "Treatable Conditions"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="grid grid-cols-2 gap-px bg-ink/5">
              {treatable[locale].map((item, i) => (
                <div key={i} className="bg-paper py-4 px-5 text-sm text-stone-warm">{item}</div>
              ))}
            </div>
          </div>

          <div className="text-center py-10 border-t border-b border-ink/5">
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">
              09-7416199
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
