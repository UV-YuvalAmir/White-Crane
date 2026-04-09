"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function InstructorsPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "מדריכים נוספים" : "Additional Instructors"}
        character="門"
        backgroundImage="/images/gallery3-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "אייל חי (טאי סי-הינג)" : "Eyal Chai (Tai Si-Hing)"}
            </h2>
            <div className="brush-stroke brush-stroke-red mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>האח הבכור של בית הספר. התלמיד הראשון.</p>
                  <p>מתרגל אומנויות לחימה משנת 1993. החל בעגור לבן בשנת 1997, לאחר שכבר היה תלמידו של סיפו צחי שוחט לפני שלימד עגור לבן. לאורך כל השנים ללא הפסקה, אייל נאמן לדרך ולעצמו ומשמש דוגמא אישית לתלמידים הרוצים לבחור באומנויות לחימה כדרך חיים.</p>
                  <p>הוא רואה בהדרכה חלק בלתי נפרד מהדרך, השלים קורס מדריכים בווינגייט ופתח סניפים של עגור לבן ישראל בתל אביב וברואש העין.</p>
                  <p>כמו המסורת העתיקה של אנשי עגור לבן, אייל גם מתרגל רפואה סינית ומוסמך כמטפל טווינא בכיר. הוא מטפל בתל אביב, הוד השרון וראש העין.</p>
                  <p>בשנת 2012 הוכר כמורה על ידי ארגון עגור לבן הבינלאומי, בראשות סיפו ז&apos;אנג קאו ווא.</p>
                </>
              ) : (
                <>
                  <p>The eldest brother of the school. The first student.</p>
                  <p>He has been practicing martial arts since 1993. He began at White Crane in 1997, after already being a student of Sifu Tzachi Shuhat. Throughout all these years without interruption, Eyal has been loyal to the way and serves as a personal example for students who want to choose martial arts as a way of life.</p>
                  <p>He sees instruction as an inseparable part of the path, completed an instructor course at Wingate and opened branches of White Crane Israel in Tel Aviv and in Rosh Ha&apos;ayin.</p>
                  <p>Like the ancient tradition of White Crane people, Eyal also practices Chinese medicine and is certified as a senior Tuina therapist. He treats in Tel Aviv, Hod HaSharon and Rosh Ha&apos;ayin.</p>
                  <p>In 2012, he was recognized as a teacher by the International White Crane organization, headed by Sifu Zhang Kao Wa.</p>
                </>
              )}
            </div>
          </div>

          <div className="bg-ink/[0.02] p-8">
            <p className="text-stone-warm text-sm leading-[2]">
              {locale === "he"
                ? "מדריכי בית הספר משתתפים באופן פעיל בכל הפעילויות השוטפות – סמינרים, אימונים בשטח, הדרכה מיוחדת, אימונים עם בתי ספר אחרים, מסעות אימונים להונג קונג. הם גם מסייעים בניהול התפעולי הכללי. כולם רואים בהוראה חלק מהדרך האישית שלהם ושמחים שיש להם היכולת להמשיך ולהפיץ את השיטה."
                : "School instructors actively participate in all ongoing activities—seminars, outdoor training, special instruction, training with other schools, training trips to Hong Kong. They also assist in general operational management. They all see teaching as part of their personal path and are glad they can continue spreading the method."}
            </p>
          </div>

          <div className="text-center py-10 border-t border-b border-ink/5">
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">09-7416199</a>
          </div>
        </div>
      </section>
    </>
  );
}
