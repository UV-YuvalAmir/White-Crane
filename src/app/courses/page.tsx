"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const courses = {
  he: [
    { title: "הילינג סיני – פרח הלוטוס", char: "蓮", desc: "תכנית הכשרה המפתחת יכולות ריפוי אינטואיטיביות-אנרגטיות ומלמדת אינטראקציה עם זרימת האנרגיה של הטבע." },
    { title: "הילינג סיני – יסודות", char: "基", desc: "קורס מעשי המלמד שש טכניקות ריפוי בסיסיות ויעילות דרך צ'י קונג רפואי." },
    { title: "הכשרת אן-מו-טווינא", char: "推", desc: "הכשרת מטפלים מקיפה המשלבת טכניקות סיניות עתיקות. כוללת עיסוי דינמי, מתיחות, יסודות אנטומיה." },
    { title: "ויגניאנה יוגה", char: "瑜", desc: "מסורת היוגה המבוססת על שבעה עקרונות: הרפיית גוף, השתקת מחשבה, כוונה, הארקה, חיבור, נשימה, התרחבות." },
    { title: "שיטת פלדנקרייז", char: "動", desc: "מערכת חינוך לתנועה. השיעורים עוזרים לשכלל את איכות התנועה לקלות ונוחות ולזהות דפוסי תנועה." },
  ],
  en: [
    { title: "Chinese Healing – Lotus Flower", char: "蓮", desc: "Training program developing intuitive-energetic healing abilities and teaching interaction with nature's energy flow." },
    { title: "Chinese Healing – Foundations", char: "基", desc: "Practical course teaching six basic, effective healing techniques through medical chi kung." },
    { title: "An-Mo-Tuina Training", char: "推", desc: "Comprehensive therapist certification combining ancient Chinese techniques. Includes dynamic massage, stretching, anatomy." },
    { title: "Vignyana Yoga", char: "瑜", desc: "Based on seven principles: body relaxation, mind quieting, intention, grounding, connection, breathing, expansion." },
    { title: "Feldenkrais Method", char: "動", desc: "Movement education system. Classes refine movement quality for ease and comfort, identify habitual patterns." },
  ],
};

export default function CoursesPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "קורסים, חוגים וסדנאות" : "Courses & Workshops"}
        subtitle={locale === "he" ? "לימוד · התפתחות · שליטה" : "Learning · Growth · Mastery"}
        character="學"
        backgroundImage="/images/gallery2-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-px">
            {courses[locale].map((course, i) => (
              <div
                key={i}
                className="flex items-start gap-6 py-8 border-b border-ink/5 opacity-0 animate-rise"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
              >
                <span className="text-4xl text-ink/[0.05] font-serif flex-shrink-0 w-14 text-center leading-none mt-1">
                  {course.char}
                </span>
                <div>
                  <h2 className="heading-calligraphy text-ink text-base mb-2">{course.title}</h2>
                  <p className="text-sm text-stone-warm leading-relaxed">{course.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-16">
            <p className="text-stone-warm text-sm mb-6">
              {locale === "he" ? "למידע נוסף והרשמה" : "For information and registration"}
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
