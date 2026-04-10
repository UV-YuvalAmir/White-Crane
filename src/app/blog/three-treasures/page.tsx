"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function ThreeTreasuresPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "שלושת האוצרות – San Bao" : "The Three Treasures – San Bao"}
        subtitle={
          locale === "he"
            ? "עם הרחבה על הרוח – Shen"
            : "With an expansion on Spirit – Shen"
        }
        character="寶"
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
                {locale === "he" ? "הילינג" : "Healing"}
              </span>
            </div>

            <div className="text-stone-warm text-sm leading-[2] space-y-6">
              {locale === "he" ? (
                <>
                  <p>
                    מתוך קורס הילינג סיני פרח הלוטוס
                  </p>
                  <p>
                    שלושת האוצרות (San Bao) נקראים גם &ndash; שלושת המקורות (San Yuan) ושלושת העיקריים (San Ben). הם רעיון יסודי בתרגול צ&apos;י גונג ורפואה סינית ומייצגים את שלוש אנרגיות הקיום של האדם:
                  </p>
                  <ul className="list-disc pr-6 space-y-2">
                    <li><strong>Jing &ndash; ג&apos;ינג</strong> &ndash; תמצית</li>
                    <li><strong>Chi &ndash; צ&apos;י</strong> &ndash; אנרגיית החיים</li>
                    <li><strong>Shen &ndash; שן</strong> &ndash; רוח</li>
                  </ul>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הג&apos;ינג &ndash; התמצית</h3>
                  <p>
                    הג&apos;ינג הוא היסוד הנוזלי והחומרי מבין השלושה והוא תמצית החיוניות. בתוכו נמצא כוח החיים והצמיחה המקורי. הוא מאוכסן בכליות ונחשב למקור הזרע והביצית עוד לפני הלידה.
                  </p>
                  <p>
                    הג&apos;ינג הוא גם מקור התנועה והחיות של הצ&apos;י בדאן טיין ועם שנות החיים הוא נחלש ומתכלה. לכן יש לשמור עליו בריא, טהור ומלא. תרגול צ&apos;י גונג וסגנון חיים מתון יכולים לשמר ולשפר את איכות הג&apos;ינג. פעולה זו נקראת &ndash; <strong>gu jing</strong> &ndash; לשמר את הג&apos;ינג.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הצ&apos;י &ndash; אנרגיית החיים</h3>
                  <p>
                    הצ&apos;י הוא יסוד הגז בגוף ומאוכסן בדאן טיין. את הצ&apos;י הראשוני (יואן צ&apos;י) אנו מקבלים מהג&apos;ינג, מהמזון ומהאוויר. הוא אנרגיית החיים הזורמת בגוף ומניעה אותו. בשביל לחיות חיים בריאים, אנו צריכים זרימה חופשית ומאוזנת של צ&apos;י בגוף.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">השן &ndash; הרוח</h3>
                  <p>
                    השן (הגדולה) היא יסוד הרוח שבין השלושה ומייצגת את הקיום המנטאלי רוחני של האדם. השן מזינה את הראש ומחברת את האדם לשמיים ולרוח המקורית (הדאו). היא השליט המקורי של הגוף וכשהיא בריאה, האדם מתפקד נכון מבחינה מנטאלית.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">האלכימיה הפנימית</h3>
                  <p>
                    בתרגולי צ&apos;י גונג, אנו מתארים אלכימיה אנרגטית שיש בה התמרה מחומר לרוח. לאלכימיה יש שלושה שלבים:
                  </p>
                  <ol className="list-decimal pr-6 space-y-3">
                    <li><strong>Lian Jing Hua Chi</strong> &ndash; זיקוק והפיכת ג&apos;ינג לצ&apos;י &ndash; לטפח ולשמר את הג&apos;ינג ולהפוך אותו לחומר מזין לצ&apos;י.</li>
                    <li><strong>Lian Chi Hua Shen</strong> &ndash; זיקוק והפיכת צ&apos;י לשן &ndash; לטפח ולשמר את הצ&apos;י ולהפוך אותו לחומר המזין את השן.</li>
                    <li><strong>Lian Shen Hua Xing</strong> &ndash; זיקוק השן בשביל להתחבר לריק (לדאו) &ndash; לזקק ולהעלות את הרוח מעלה לשמיים.</li>
                  </ol>
                  <p>
                    תהליך המעבר מחומר לרוח הוא תכלית התרגולים הפנימיים הסיניים הרוחניים &ndash; <strong>Nei Dan</strong> &ndash; אלכימיה פנימית, שמטרתם &ndash; חזרה למקור.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">חמש הרוחות של השן</h3>
                  <p>
                    התפיסה הסינית רואה ברוח האדם חלק בלתי נפרד מהקיום הארצי שלו. לשן הגדולה חמישה רובדי קיום, שכל אחד שוכן באיבר פנימי חיוני:
                  </p>
                  <ol className="list-decimal pr-6 space-y-3">
                    <li><strong>Shen (הרוח הקטנה)</strong> &ndash; הנפש הרוחנית, שוכנת בלב. אחראית לחיבור הרוח לפיזי, להכרה עצמית ולאגו. נעלמת לאחר המוות.</li>
                    <li><strong>Hun &ndash; הנשמה</strong> &ndash; שוכנת בכבד. אינה קשורה לחיים הארציים וממשיכה גם אחרי המוות. אחראית על קבלת החיים וסיבולת כאב.</li>
                    <li><strong>Po &ndash; נשמה ארצית</strong> &ndash; שוכנת בריאות. האיכות הרוחנית הקשורה לחיים כאן, אינסטינקטיבית. אחראית על יצר ההישרדות.</li>
                    <li><strong>Yi &ndash; הכוונה</strong> &ndash; שוכנת בטחול. הכוח המנטאלי המכוון. אחראית למוטיבציה, חזון, יצירתיות, נאמנות.</li>
                    <li><strong>Zhi &ndash; כח הרצון</strong> &ndash; שוכנת בכליות. אחראית לחכמה, ראייה למרחוק, התמדה, נחישות, סבלנות.</li>
                  </ol>
                </>
              ) : (
                <>
                  <p>
                    From the Chinese Healing Lotus Flower course
                  </p>
                  <p>
                    The Three Treasures (San Bao), also called the Three Sources (San Yuan) and the Three Principals (San Ben), are a fundamental concept in Chi Kung practice and Chinese medicine, representing the three existential energies of a human being:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Jing</strong> &mdash; Essence</li>
                    <li><strong>Chi</strong> &mdash; Life Energy</li>
                    <li><strong>Shen</strong> &mdash; Spirit</li>
                  </ul>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Jing &mdash; Essence</h3>
                  <p>
                    Jing is the liquid and material foundation among the three, the essence of vitality. It contains the original force of life and growth. Stored in the kidneys, it is considered the source of sperm and egg even before birth. Jing is also the source of Chi&apos;s movement in the Dan Tian, and it weakens over the years. Chi Kung practice and a moderate lifestyle can preserve and improve Jing quality &mdash; called <strong>gu jing</strong>.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Chi &mdash; Life Energy</h3>
                  <p>
                    Chi is the gaseous element in the body, stored in the Dan Tian. Original Chi (Yuan Chi) comes from Jing, food, and air. It is the life energy flowing through the body, driving it. For healthy living, we need free and balanced Chi flow.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Shen &mdash; Spirit</h3>
                  <p>
                    The great Shen is the spirit element among the three, representing the mental-spiritual existence of a human. Shen nourishes the head and connects a person to heaven and the original spirit (Dao). It is the body&apos;s original ruler, and when healthy, the person functions correctly mentally.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Internal Alchemy</h3>
                  <p>
                    In Chi Kung practice, we describe an energetic alchemy transforming matter into spirit, in three stages:
                  </p>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li><strong>Lian Jing Hua Chi</strong> &mdash; Refining Jing into Chi &mdash; cultivating and preserving Jing to nourish Chi.</li>
                    <li><strong>Lian Chi Hua Shen</strong> &mdash; Refining Chi into Shen &mdash; cultivating and preserving Chi to nourish Shen.</li>
                    <li><strong>Lian Shen Hua Xing</strong> &mdash; Refining Shen to connect with the Void (Dao) &mdash; elevating spirit to heaven.</li>
                  </ol>
                  <p>
                    This process is the purpose of Chinese internal spiritual practices &mdash; <strong>Nei Dan</strong> &mdash; internal alchemy, aimed at returning to the source.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Five Spirits of Shen</h3>
                  <p>
                    Chinese philosophy sees a person&apos;s spirit as inseparable from earthly existence. The great Shen has five levels, each dwelling in a vital internal organ:
                  </p>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li><strong>Shen (small spirit)</strong> &mdash; The spiritual soul, dwelling in the heart. Responsible for connecting spirit to physical, self-awareness, and ego. Disappears after death.</li>
                    <li><strong>Hun &mdash; The Soul</strong> &mdash; Dwelling in the liver. Not bound to earthly life, continues after death. Responsible for acceptance of life and pain endurance.</li>
                    <li><strong>Po &mdash; Earthly Soul</strong> &mdash; Dwelling in the lungs. The spiritual quality connected to life here, instinctive. Responsible for survival instinct.</li>
                    <li><strong>Yi &mdash; Intention</strong> &mdash; Dwelling in the spleen. The directing mental force. Responsible for motivation, vision, creativity, loyalty.</li>
                    <li><strong>Zhi &mdash; Willpower</strong> &mdash; Dwelling in the kidneys. Responsible for wisdom, foresight, perseverance, determination, patience.</li>
                  </ol>
                </>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
