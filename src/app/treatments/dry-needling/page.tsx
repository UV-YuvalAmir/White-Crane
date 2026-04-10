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
                  <p>נקודות טריגר הן אזורים מקומיים בתוך השרירים (לעיתים בגידים או בפאשיה) שבהם מתרכז מתח. לחץ עליהן מעורר כאב שעלול להקרין לאזורים אחרים בגוף. הגורמים כוללים עומס יתר על השריר, תנוחה לקויה, מתח רגשי, תנועות חדות או חבלה ישירה ברקמת השריר.</p>
                  <p>מחקרים עדכניים מראים ש-75 אחוז מכאבי הגוף מקורם בשרירים, מה שהופך את הטיפול בנקודות טריגר לאפקטיבי במיוחד לניהול כאב ולשיקום טווח תנועה.</p>
                </>
              ) : (
                <>
                  <p>Trigger points are localized areas within muscles (sometimes in tendons or fascia) where tension concentrates. Pressure on these points triggers pain that can radiate to other areas of the body. Causes include muscle overload, poor posture, emotional stress, sharp movements, or direct trauma to muscle tissue.</p>
                  <p>Current studies indicate 75 percent of body pain originates from muscles, making trigger point therapy particularly effective for pain management and restoring range of motion.</p>
                </>
              )}
            </div>
          </div>

          {/* Sarcomere Physiology */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "הפיזיולוגיה – סרקומרים" : "Physiology – Sarcomeres"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>סרקומרים הם יחידות ההתכווצות הבסיסיות של השריר. כאשר עצב מגרה שריר באופן מוגזם או מתמשך, הסרקומרים נשארים במצב של התכווצות קבועה. מצב זה יוצר את נקודת הטריגר – אזור מקומי של מתח כרוני בתוך השריר.</p>
                  <p>ההתכווצות המתמשכת גורמת לכאב שמקרין לאורך השריר ועלול להגיע למפרקים המחוברים אליו. זו הסיבה שכאב בכתף, למשל, יכול לנבוע מנקודת טריגר בשריר הצוואר.</p>
                </>
              ) : (
                <>
                  <p>Sarcomeres are the basic contraction units of muscles. When a nerve overstimulates a muscle excessively or continuously, the sarcomeres remain in a state of constant contraction. This creates the trigger point -- a localized area of chronic tension within the muscle.</p>
                  <p>The continuous contraction causes pain that radiates along the length of the muscle and can reach connected joints. This is why shoulder pain, for example, can originate from a trigger point in the neck muscle.</p>
                </>
              )}
            </div>
          </div>

          {/* Research History */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "היסטוריה מחקרית" : "Research History"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>המחקר על נקודות טריגר החל בשנות ה-40 של המאה ה-20. מאז, נקודות הטריגר מופו באמצעות מפות סטנדרטיות המציגות את מיקומן המדויק ואת דפוסי הכאב המוקרן שלהן, בהתבסס על אנטומיה ופיזיולוגיה מערבית.</p>
                  <p>שיטת הדיקור היבש עצמה פותחה בשנות ה-60 בארצות הברית, כאשר לטיפול המסורתי בלחץ נוספו מחטים דקות שהעצימו את האפקט הטיפולי.</p>
                </>
              ) : (
                <>
                  <p>Research on trigger points began in the 1940s. Since then, trigger points have been mapped using standardized charts showing their precise locations and referred pain patterns, based on Western anatomy and physiology.</p>
                  <p>The dry needling method itself was developed in the 1960s in the United States, when fine needles were added to traditional pressure-based treatment, amplifying the therapeutic effect.</p>
                </>
              )}
            </div>
          </div>

          {/* Active vs Dormant */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "נקודות פעילות ורדומות" : "Active vs. Dormant Trigger Points"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p><strong>נקודות טריגר פעילות</strong> – גורמות לכאב מתמשך גם ללא מגע. הן מקרינות כאב לאזורים אחרים בגוף ומגבילות את טווח התנועה. מצבן עלול להחמיר עם הזמן אם לא מטופלות.</p>
                  <p><strong>נקודות טריגר רדומות</strong> – אינן גורמות לכאב ספונטני, אך מעוררות כאב מקומי ותחושות מוקרנות בעת מגע או לחץ. הן עלולות להפוך לפעילות בעקבות עומס, מתח או פציעה.</p>
                </>
              ) : (
                <>
                  <p><strong>Active trigger points</strong> cause persistent pain even without touch. They radiate pain to other areas and limit range of motion. Their condition may worsen over time if left untreated.</p>
                  <p><strong>Dormant trigger points</strong> do not cause spontaneous pain, but produce local pain and referred sensations upon contact or pressure. They can become active following overload, stress or injury.</p>
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
