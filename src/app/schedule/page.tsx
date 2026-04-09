"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const schedule = [
  { day: "ראשון", dayEn: "Sunday", time: "8:00-9:30", classHe: "וי'גנאנה יוגה עם נוגה", classEn: "Vignyana Yoga with Noga" },
  { day: "שני", dayEn: "Monday", time: "8:30-9:45", classHe: "צ'י קונג ומדיטציה", classEn: "Chi Kung & Meditation" },
  { day: "שלישי", dayEn: "Tuesday", time: "8:00-9:30", classHe: "וי'גנאנה יוגה עם גנית", classEn: "Vignyana Yoga with Ganit" },
  { day: "שלישי", dayEn: "Tuesday", time: "8:30-9:45", classHe: "צ'י קונג מדיטציה", classEn: "Chi Kung Meditation" },
  { day: "רביעי", dayEn: "Wednesday", time: "17:00-18:00", classHe: "קונג פו ילדים", classEn: "Kids Kung Fu" },
  { day: "חמישי", dayEn: "Thursday", time: "17:00-18:00", classHe: "קונג פו ילדים", classEn: "Kids Kung Fu" },
  { day: "רביעי", dayEn: "Wednesday", time: "18:30-19:45", classHe: "קונג פו בוגרים מתחילים + רמה 1", classEn: "Adult Kung Fu Beginners + Level 1" },
  { day: "חמישי", dayEn: "Thursday", time: "18:30-19:45", classHe: "פלדנקרייז", classEn: "Feldenkrais" },
  { day: "שישי", dayEn: "Friday", time: "18:30-19:45", classHe: "קונג פו מתחילים", classEn: "Kung Fu Beginners" },
  { day: "חמישי", dayEn: "Thursday", time: "20:00-21:30", classHe: "טאי צ'י רמה 3", classEn: "Tai Chi Level 3" },
  { day: "שישי", dayEn: "Friday", time: "20:00-21:30", classHe: "קונג פו בוגרים רמה 1", classEn: "Adult Kung Fu Level 1" },
  { day: "שני", dayEn: "Monday", time: "20:15-21:30", classHe: "טאי צ'י רמה 2", classEn: "Tai Chi Level 2" },
  { day: "שלישי", dayEn: "Tuesday", time: "20:00-21:30", classHe: "טאי צ'י מתחילים", classEn: "Tai Chi Beginners" },
  { day: "רביעי", dayEn: "Wednesday", time: "20:00-21:30", classHe: "קונג פו בוגרים רמה 2+3", classEn: "Adult Kung Fu Level 2+3" },
  { day: "חמישי", dayEn: "Thursday", time: "20:00-21:30", classHe: "קונג פו בוגרים רמה 2+3", classEn: "Adult Kung Fu Level 2+3" },
];

export default function SchedulePage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "מערכת שעות" : "Class Schedule"}
        subtitle={locale === "he" ? "הפטיש 11, הוד השרון" : "HaPatish 11, Hod HaSharon"}
        character="時"
        backgroundImage="/images/gallery5-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border border-ink/5 overflow-hidden">
            <div className="grid grid-cols-3 bg-ink text-paper text-xs tracking-wide uppercase py-3 px-4">
              <span>{locale === "he" ? "יום" : "Day"}</span>
              <span>{locale === "he" ? "שעה" : "Time"}</span>
              <span>{locale === "he" ? "שיעור" : "Class"}</span>
            </div>
            {schedule.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 py-3 px-4 text-sm border-b border-ink/5 ${i % 2 === 0 ? "bg-paper" : "bg-paper-dark"}`}>
                <span className="text-ink font-medium">{locale === "he" ? row.day : row.dayEn}</span>
                <span className="text-stone-warm">{row.time}</span>
                <span className="text-stone-warm">{locale === "he" ? row.classHe : row.classEn}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-stone-warm text-sm">
            <p className="mb-2">
              {locale === "he"
                ? "שיעורים פרטיים זמינים עם סיפו צחי שוחט, מותאמים לצרכים האישיים."
                : "Private lessons available with Sifu Tzachi Shuhat, customized to individual needs."}
            </p>
          </div>

          <div className="text-center py-10 mt-8 border-t border-b border-ink/5">
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">09-7416199</a>
          </div>
        </div>
      </section>
    </>
  );
}
