"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const topics = {
  he: [
    "סדרת צ'י קונג מכינה – החיבור בין היין והיאנג",
    "סדרת \"העבודה הפנימית של פרח הלוטוס ושמונת הכיוונים\" (שני חלקים)",
    "תיאוריות וקריאת טקסטים סיניים",
    "מדיטציית פרח הלוטוס",
    "תהליכי התנסות אנרגטיים",
    "התנסויות חווייתיות פותחות תודעה",
    "התמחות בריפוי אינטואיטיבי-אנרגטי – צ'י קונג רפואי",
    "ליווי אישי של צחי שוחט",
  ],
  en: [
    "Preparatory Chi Kung series – Yin-Yang connection",
    "\"Internal Work of the Lotus Flower and Eight Directions\" series (two parts)",
    "Chinese theories and text reading",
    "Lotus Flower meditation",
    "Energetic experiential processes",
    "Consciousness-opening experiences",
    "Specialization in intuitive-energetic healing – Medical Chi Kung",
    "Personal guidance by Tzachi Shuhat",
  ],
};

const semesters = {
  he: [
    { title: "סמסטר ראשון", desc: "תרגול הכנה, תיאוריות, סדרת הניי-גונג הראשונה, מדיטציות, למידת הסריקה האנרגטית" },
    { title: "סמסטר שני", desc: "תיאוריות ריפוי, סדרת הניי-גונג השנייה, שש טכניקות ריפוי בסיסיות" },
    { title: "סמסטר שלישי", desc: "יחסי מטפל-מטופל, טיפול הוליסטי-קליני" },
  ],
  en: [
    { title: "First Semester", desc: "Preparatory practice, theories, first Nei Kung series, meditations, learning energetic scanning" },
    { title: "Second Semester", desc: "Healing theories, second Nei Kung series, six basic healing techniques" },
    { title: "Third Semester", desc: "Therapist-patient relations, holistic-clinical treatment" },
  ],
};

const audience = {
  he: [
    "לאלו שתחום הריפוי הוא חלק מהותי בחייהם",
    "למרפאים מתחומים שונים המעוניינים להרחיב ידע",
    "לאלו המבקשים תהליך מעמיק של ריפוי עצמי",
    "לאלו הרוצים להיכנס לעומק תרגול הצ'י קונג",
  ],
  en: [
    "Those for whom healing is an essential part of life",
    "Practitioners from various fields looking to expand knowledge",
    "Those seeking a deep self-healing process",
    "Those wanting to deepen Chi Kung practice",
  ],
};

export default function HealingCoursePage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "הכשרת מטפלים בהילינג סיני פרח הלוטוס" : "Chinese Healing – Lotus Flower Training"}
        subtitle={locale === "he" ? "צ'י קונג רפואי" : "Medical Chi Kung"}
        character="蓮"
        backgroundImage="/images/healing-treatment-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Intro */}
          <div className="text-stone-warm text-sm leading-[2] space-y-4">
            {locale === "he" ? (
              <>
                <p>מסלול הלימודים הייחודי של קורס זה מביא ידע הריפוי שהועבר על ידי המאסטר לאנג בינג שואי, ושל תרגול הצ&apos;י קונג בשיטת לימוד נגישה ונהירה.</p>
                <p>קורס ייחודי לפיתוח יכולות הריפוי האינטואיטיביות-אנרגטיות שלכם.</p>
              </>
            ) : (
              <>
                <p>This unique curriculum brings healing knowledge passed down by Master Leung Bing Shui, combined with Chi Kung practice in an accessible learning method.</p>
                <p>A unique course for developing your intuitive-energetic healing abilities.</p>
              </>
            )}
          </div>

          {/* Objectives */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מטרת הקורס" : "Course Objectives"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-2">
              {locale === "he" ? (
                <>
                  <p>הכשרת מטפלים בתחום הטיפול הסיני האנרגטי-אינטואיטיבי – צ&apos;י קונג רפואי.</p>
                  <p>העמקה לתחום התרגול הפנימי – צ&apos;י קונג-ניי גונג.</p>
                  <p>הקניית דרך חיים של בריאות, עומק, עניין ומשמעות שלמה.</p>
                </>
              ) : (
                <>
                  <p>Training practitioners in Chinese energetic-intuitive therapy – Medical Chi Kung.</p>
                  <p>Deepening into internal practice – Chi Kung-Nei Kung.</p>
                  <p>Cultivating a lifestyle of health, depth, interest, and complete meaning.</p>
                </>
              )}
            </div>
          </div>

          {/* Target audience */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "למי מיועד הקורס" : "Who Is It For"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/5">
              {audience[locale].map((item, i) => (
                <div key={i} className="bg-paper py-4 px-5 text-sm text-stone-warm">{item}</div>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "נושאי הלימוד המרכזיים" : "Core Curriculum Topics"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="space-y-px">
              {topics[locale].map((topic, i) => (
                <div key={i} className="bg-paper py-3 px-5 text-sm text-stone-warm border-b border-ink/5">
                  {topic}
                </div>
              ))}
            </div>
          </div>

          {/* Structure */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מבנה הקורס" : "Course Structure"}
            </h2>
            <div className="brush-stroke mb-8" />
            <p className="text-stone-warm text-sm leading-[2] mb-8">
              {locale === "he"
                ? "3 סמסטרים, 36 מפגשים שבועיים, בני 4.5 שעות אקדמיות"
                : "3 semesters, 36 weekly sessions, 4.5 academic hours each"}
            </p>
            <div className="space-y-6">
              {semesters[locale].map((s, i) => (
                <div key={i} className="border-b border-ink/5 pb-6">
                  <h3 className="heading-calligraphy text-ink text-sm mb-2">{s.title}</h3>
                  <p className="text-stone-warm text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/5">
            {["/images/course-healing-student1.jpg", "/images/course-healing-class.jpg", "/images/course-healing-practice.jpg"].map((src, i) => (
              <div key={i} className="bg-paper">
                <Image src={src} alt="Healing course" width={400} height={300} className="w-full h-48 object-cover grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" style={{ mixBlendMode: "multiply" }} />
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="bg-ink text-paper py-12 px-8 text-center space-y-4">
            <p className="heading-calligraphy text-lg text-paper/80">
              {locale === "he" ? "מרכז עגור לבן, הפטיש 11, הוד השרון" : "White Crane Center, HaPatish 11, Hod HaSharon"}
            </p>
            <p className="text-paper/50 text-sm">
              {locale === "he" ? "עלות: 8,300 ₪ כולל מע\"מ | דמי הרשמה: 300 ₪" : "Cost: 8,300 NIS incl. VAT | Registration fee: 300 NIS"}
            </p>
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
