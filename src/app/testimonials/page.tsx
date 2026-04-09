"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const testimonials = {
  he: [
    { name: "ש.ש", text: "הטיפול האנרגטי הצליח לפתוח ולפתור דברים במהירות ובדיוק שלא ראיתי לפני כן. אחרי פציעת ברך וניתוח, הגעתי צולע בצורה חמורה. השיפור הפיזי התחיל מיד; הליכה טבעית חזרה תוך מספר טיפולים. מעבר לריפוי הפיזי, עברתי תהליך נפשי משמעותי ששינה היבטים מהותיים בחיי." },
    { name: "אורן", text: "הגעתי עם כאבי גב חמורים שנמשכו 10 ימים אחרי טיפול קודם שלא הצליח. צחי שילב עיסוי, דיקור סיני, הילינג ומשחה מיוחדת. אחרי יומיים הרגשתי הקלה אדירה. כאבי הגב נעלמו ויכולתי לחזור לשגרת היומיום. ממליץ בחום על הטיפול המסור והמושקע." },
    { name: "אוסנת, הוד השרון", text: "הגעתי עם כאבי גב חריגים וחמורים, בהתחלה סקפטית. אחרי טיפול אחד הרגשתי כמו חדשה. הכרת תודה אדירה. ממליצה בחום (גם אם לא כואב)." },
    { name: "א'", text: "תודה על הטיפול המסור בחודשים האחרונים. התהליך עזר מאוד – אישית, בהבנת פחדים ומחשבות, ובכיוון החיים שאימצתי אחרי הטיפולים שלך. תודה מכל הלב." },
  ],
  en: [
    { name: "S.S", text: "The energetic treatment succeeded in opening and resolving things with speed and precision I had never seen before. After knee injury and surgery, I arrived severely limping. Physical improvement began immediately; natural walking returned within sessions. Beyond physical healing, I experienced a significant mental process that changed substantial life aspects." },
    { name: "Oren", text: "I arrived with severe back pain lasting 10 days after unsuccessful prior treatment. Tzachi combined massage, Chinese acupuncture, healing, and special ointment. After two days I felt enormous relief. Back pain disappeared and I could return to my daily routine. I highly recommend the dedicated and invested treatment." },
    { name: "Osnat, Hod HaSharon", text: "I came with unusual, severe back pain, initially skeptical. After one treatment I felt like new. Enormous gratitude. Highly recommending (even if not in pain)." },
    { name: "A.", text: "Thank you for dedicated treatment over recent months. The process helped tremendously – personally, understanding fears and thoughts, and life direction I adopted after your treatments. Thank you wholeheartedly." },
  ],
};

export default function TestimonialsPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "מטופלים משתפים" : "Patient Testimonials"}
        character="言"
        backgroundImage="/images/healing-treatment-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-stone-warm text-sm leading-[2] text-center mb-16 max-w-xl mx-auto">
            {locale === "he"
              ? "מטופלים רבים עוברים טיפולי הילינג עם צחי שוחט המשפיעים עמוקות על בריאותם ותפקודם בחיים."
              : "Many patients undergo healing treatments with Tzachi Shuhat that deeply affect their health and functioning in life."}
          </p>

          <div className="space-y-8">
            {testimonials[locale].map((t, i) => (
              <div
                key={i}
                className={`py-8 ${i < testimonials[locale].length - 1 ? "border-b border-ink/5" : ""}`}
              >
                <blockquote className="text-stone-warm text-sm leading-[2] mb-4">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <cite className="text-ink text-xs heading-calligraphy not-italic">— {t.name}</cite>
              </div>
            ))}
          </div>

          <div className="text-center py-10 mt-8 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-6">
              {locale === "he" ? "לקביעת תור" : "Schedule an appointment"}
            </p>
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">09-7416199</a>
          </div>
        </div>
      </section>
    </>
  );
}
