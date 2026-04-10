"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function ChiKungCleansingPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "צ'י קונג לניקוי אנרגטי" : "Chi Kung for Energetic Cleansing"}
        subtitle={
          locale === "he"
            ? "מאת צחי שוחט"
            : "By Tzachi Shuhat"
        }
        character="清"
        backgroundImage="/images/blog2-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-seal hover:text-seal-light transition-colors mb-8"
          >
            <span className={locale === "he" ? "" : "rotate-180 inline-block"}>&rarr;</span>
            {locale === "he" ? "חזרה לבלוג" : "Back to Blog"}
          </Link>

          <article className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="seal-stamp text-[9px] px-1.5 py-0.5">
                {locale === "he" ? "תרגול" : "Practice"}
              </span>
            </div>

            <div className="text-stone-warm text-sm leading-[2] space-y-6">
              {locale === "he" ? (
                <>
                  <p>
                    צ&apos;י קונג זה הוא פשוט ויעיל לניקוי אנרגטי.
                  </p>
                  <p>
                    במקורו הוא מיועד למטפלים במטרה להתנקות מאנרגיות שליליות שיתכן וחדרו במהלך הטיפול. הוא טוב גם לשחרור כללי של לחץ פנימי ומתח. בפשטות ניתן לשטוף ידיים לאחר טיפול בשביל ניקוי אנרגטי, אך התרגיל שלהלן מנקה גם את כל הגוף.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">תיאור התרגול</h3>
                  <p>
                    באופן כללי יש לעמוד בעמידת רוחב כתפיים, פשוטה, יציבה ונינוחה, עם הלשון בחך העליון. אין צורך לעצום עיניים. במידה ורוצים, ניתן לעשותו גם בישיבה, מומלץ עם הרגליים ישרות.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">שלב 1</h3>
                  <p>
                    תוך ששואפים מהאף, הבטן התחתונה מתנפחת. במקביל מחזיקים בחוזקה את שתי כפות הידיים. האגודל עוטפת בחוזקה את שאר האצבעות והן מתנגדות לה. כלומר יוצרים מעין לחץ קפיצי בין האגודל לאצבעות.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">שלב 2</h3>
                  <p>
                    נושפים בבת-אחת מהפה, כשהשפתיים עגולות ומשוחררות. הבטן מתרוקנת בטבעיות. במקביל לנשיפה משחררים בבת-אחת את לחץ הקפיץ שנוצר באצבעות הידיים.
                  </p>
                  <p>
                    בשביל להשלים את תהליך הניקוי, מומלץ לחזור על התרגול 6 או 12 פעמים.
                  </p>
                  <p className="italic">בהצלחה.</p>
                </>
              ) : (
                <>
                  <p>
                    This Chi Kung exercise is simple and effective for energetic cleansing.
                  </p>
                  <p>
                    Originally designed for practitioners to cleanse themselves of negative energies that may have entered during treatment. It is also good for general release of internal pressure and tension. While simply washing hands after treatment can provide energetic cleansing, the following exercise cleanses the entire body.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Exercise Description</h3>
                  <p>
                    Generally, stand in a shoulder-width stance, simple, stable, and relaxed, with the tongue on the upper palate. No need to close your eyes. If preferred, it can also be done sitting, preferably with legs straight.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Step 1</h3>
                  <p>
                    While inhaling through the nose, the lower abdomen inflates. Simultaneously, firmly grip both hands &mdash; the thumb wraps tightly around the other fingers while they resist it, creating a spring-like pressure between the thumb and fingers.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Step 2</h3>
                  <p>
                    Exhale all at once through the mouth, with lips rounded and relaxed. The abdomen empties naturally. Simultaneously with the exhalation, release the spring pressure created in the fingers all at once.
                  </p>
                  <p>
                    To complete the cleansing process, it is recommended to repeat the exercise 6 or 12 times.
                  </p>
                  <p className="italic">Good luck.</p>
                </>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
