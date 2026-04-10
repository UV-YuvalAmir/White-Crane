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
          {/* Eyal Chai */}
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

          {/* Tal Tzur */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "טל צור" : "Tal Tzur"}
            </h2>
            <div className="brush-stroke brush-stroke-red mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>טל מתרגל אומנויות לחימה ובריאות במרכז עגור לבן מזה שנים רבות. הוא מדריך קונג פו ומקדיש את עצמו להוראה ולהעברת המסורת לדור הבא של תלמידים.</p>
                  <p>כמדריך בבית הספר, טל משתתף באופן פעיל בכל הפעילויות השוטפות – סמינרים, אימונים בשטח והדרכה מיוחדת. הוא רואה בהוראה חלק מהדרך האישית שלו.</p>
                </>
              ) : (
                <>
                  <p>Tal has been practicing martial arts and health at the White Crane Center for many years. He instructs Kung Fu and dedicates himself to teaching and passing the tradition to the next generation of students.</p>
                  <p>As a school instructor, Tal actively participates in all ongoing activities -- seminars, outdoor training, and special instruction. He sees teaching as part of his personal path.</p>
                </>
              )}
            </div>
          </div>

          {/* Mitam Govrin */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מיתם גוברין" : "Mitam Govrin"}
            </h2>
            <div className="brush-stroke brush-stroke-red mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>מיתם הוא מדריך ותיק במרכז עגור לבן, מתרגל את השיטה מזה שנים ארוכות. הוא מדריך קונג פו ומשמש דוגמא לתלמידים בהתמדה ובמסירות לדרך.</p>
                  <p>מיתם משתתף בסמינרים, אימונים עם בתי ספר אחרים ומסעות אימונים להונג קונג, ומסייע בניהול התפעולי של בית הספר.</p>
                </>
              ) : (
                <>
                  <p>Mitam is a veteran instructor at the White Crane Center, practicing the system for many years. He instructs Kung Fu and serves as an example to students through his perseverance and dedication to the path.</p>
                  <p>Mitam participates in seminars, training with other schools and training trips to Hong Kong, and assists in the operational management of the school.</p>
                </>
              )}
            </div>
          </div>

          {/* Rani Ben Zeev */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "רני בן זאב" : "Rani Ben Zeev"}
            </h2>
            <div className="brush-stroke brush-stroke-red mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>רני הוא מדריך במרכז עגור לבן, מתרגל אומנויות לחימה ובריאות ומלמד קונג פו. הוא חלק מצוות המדריכים הפעיל של בית הספר ומחויב להמשכיות המסורת.</p>
                  <p>כחלק מצוות ההדרכה, רני משתתף בכל פעילויות בית הספר ורואה בהוראה חלק בלתי נפרד מהדרך שלו באומנויות הלחימה.</p>
                </>
              ) : (
                <>
                  <p>Rani is an instructor at the White Crane Center, practicing martial arts and health and teaching Kung Fu. He is part of the active instructor team of the school and is committed to continuing the tradition.</p>
                  <p>As part of the instruction team, Rani participates in all school activities and sees teaching as an inseparable part of his martial arts path.</p>
                </>
              )}
            </div>
          </div>

          {/* Eti Abramovich */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "אתי אברמוביץ'" : "Eti Abramovich"}
            </h2>
            <div className="brush-stroke brush-stroke-red mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>אתי היא מדריכה במרכז עגור לבן, מתרגלת את שיטת עגור לבן ומלמדת קונג פו. היא חלק מצוות המדריכים ומשמשת דוגמא אישית לתלמידות ולתלמידים כאחד.</p>
                  <p>אתי משתתפת בסמינרים, אימונים מיוחדים ומסעות אימונים, ורואה בהדרכה חלק מהמסע האישי שלה בדרך אומנויות הלחימה.</p>
                </>
              ) : (
                <>
                  <p>Eti is an instructor at the White Crane Center, practicing the White Crane system and teaching Kung Fu. She is part of the instructor team and serves as a personal example to all students.</p>
                  <p>Eti participates in seminars, special training sessions and training trips, and sees instruction as part of her personal journey in the martial arts path.</p>
                </>
              )}
            </div>
          </div>

          {/* Tal Segal */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "טל סגל" : "Tal Segal"}
            </h2>
            <div className="brush-stroke brush-stroke-red mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>טל סגל הוא מדריך במרכז עגור לבן, מתרגל ומלמד אומנויות לחימה. הוא חלק מצוות ההדרכה הפעיל ומחויב להפצת השיטה ולשמירה על המסורת.</p>
                  <p>טל משתתף בכל הפעילויות השוטפות של בית הספר ומסייע בניהול התפעולי. הוא שמח שיש לו היכולת להמשיך ולהפיץ את שיטת עגור לבן.</p>
                </>
              ) : (
                <>
                  <p>Tal Segal is an instructor at the White Crane Center, practicing and teaching martial arts. He is part of the active instruction team and is committed to spreading the system and preserving the tradition.</p>
                  <p>Tal participates in all ongoing school activities and assists in operational management. He is glad to have the ability to continue spreading the White Crane system.</p>
                </>
              )}
            </div>
          </div>

          {/* Dor Or */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "דור אור" : "Dor Or"}
            </h2>
            <div className="brush-stroke brush-stroke-red mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>דור הוא מדריך במרכז עגור לבן, מתרגל את שיטת פאק הוק פאי ומלמד קונג פו. הוא חלק מצוות המדריכים הצעירים של בית הספר ומביא אנרגיה חדשה לדרך העתיקה.</p>
                  <p>דור רואה בהדרכה חלק בלתי נפרד מהדרך שלו, משתתף בסמינרים ובאימונים מיוחדים ושמח להיות חלק מהעברת המסורת הלאה.</p>
                </>
              ) : (
                <>
                  <p>Dor is an instructor at the White Crane Center, practicing the Pak Hok Pai system and teaching Kung Fu. He is part of the younger instructor team at the school and brings fresh energy to the ancient path.</p>
                  <p>Dor sees instruction as an inseparable part of his path, participates in seminars and special training sessions, and is glad to be part of passing the tradition forward.</p>
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
