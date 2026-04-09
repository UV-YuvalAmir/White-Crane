"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const tlvSchedule = [
  { day: "ראשון – רעננה", dayEn: "Sunday – Ra'anana", time: "8:30-9:45", classHe: "טאי צ'י מין לוי צ'אם", classEn: "Tai Chi Min Loi Chum" },
  { day: "שני – ת\"א", dayEn: "Monday – Tel Aviv", time: "8:15-9:30", classHe: "טאי צ'י מין לוי צ'אם", classEn: "Tai Chi Min Loi Chum" },
  { day: "שני – ת\"א", dayEn: "Monday – Tel Aviv", time: "9:30-11:00", classHe: "קונג פו מתחילים", classEn: "Kung Fu Beginners" },
  { day: "שני – ת\"א", dayEn: "Monday – Tel Aviv", time: "18:30-19:45", classHe: "קונג פו בוגרים", classEn: "Adult Kung Fu" },
  { day: "שלישי", dayEn: "Tuesday", time: "8:30-9:45", classHe: "טאי צ'י מין לוי צ'אם", classEn: "Tai Chi Min Loi Chum" },
  { day: "שלישי", dayEn: "Tuesday", time: "17:00-18:15", classHe: "קונג פו ילדים", classEn: "Kids Kung Fu" },
  { day: "שלישי", dayEn: "Tuesday", time: "18:00-19:30", classHe: "קונג פו מתחילים", classEn: "Kung Fu Beginners" },
  { day: "רביעי – רעננה", dayEn: "Wednesday – Ra'anana", time: "17:00-18:15", classHe: "קונג פו ילדים", classEn: "Kids Kung Fu" },
  { day: "שישי – רעננה", dayEn: "Friday – Ra'anana", time: "7:00-8:15", classHe: "טאי צ'י מין לוי צ'אם", classEn: "Tai Chi Min Loi Chum" },
  { day: "שישי – רעננה", dayEn: "Friday – Ra'anana", time: "18:30-19:45", classHe: "קונג פו בוגרים", classEn: "Adult Kung Fu" },
  { day: "שישי – ת\"א", dayEn: "Friday – Tel Aviv", time: "9:00-10:20", classHe: "טאי צ'י מין לוי צ'אם", classEn: "Tai Chi Min Loi Chum" },
  { day: "שישי – ת\"א", dayEn: "Friday – Tel Aviv", time: "10:30-12:00", classHe: "קונג פו מתחילים", classEn: "Kung Fu Beginners" },
];

export default function BranchesPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "סניפים נוספים" : "Additional Branches"}
        character="支"
        backgroundImage="/images/gallery4-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-2">
              {locale === "he" ? "סניף תל אביב" : "Tel Aviv Branch"}
            </h2>
            <div className="brush-stroke brush-stroke-red mb-8" />
            <div className="space-y-2 text-sm text-stone-warm mb-8">
              <p><strong className="text-ink">{locale === "he" ? "מדריך:" : "Instructor:"}</strong> {locale === "he" ? "אייל חי" : "Eyal Chai"}</p>
              <p><strong className="text-ink">{locale === "he" ? "מיקום:" : "Location:"}</strong> {locale === "he" ? "פארק הירקון – רחוב קוסובסקי 42" : "Yarkon Park – Kosovsky Street 42"}</p>
              <p><strong className="text-ink">{locale === "he" ? "טלפון:" : "Phone:"}</strong> <a href="tel:0544804202" className="hover:text-seal transition-colors">054-4804202</a></p>
            </div>

            <div className="border border-ink/5 overflow-hidden">
              <div className="grid grid-cols-3 bg-ink text-paper text-xs tracking-wide uppercase py-3 px-4">
                <span>{locale === "he" ? "יום" : "Day"}</span>
                <span>{locale === "he" ? "שעה" : "Time"}</span>
                <span>{locale === "he" ? "שיעור" : "Class"}</span>
              </div>
              {tlvSchedule.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 py-3 px-4 text-sm border-b border-ink/5 ${i % 2 === 0 ? "bg-paper" : "bg-paper-dark"}`}>
                  <span className="text-ink font-medium text-xs">{locale === "he" ? row.day : row.dayEn}</span>
                  <span className="text-stone-warm">{row.time}</span>
                  <span className="text-stone-warm text-xs">{locale === "he" ? row.classHe : row.classEn}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center py-10 border-t border-b border-ink/5">
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">09-7416199</a>
          </div>
        </div>
      </section>
    </>
  );
}
