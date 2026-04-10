"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function JingShenPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "הרוח החיונית – ג'ינג שן" : "The Vital Spirit – Jing Shen"}
        subtitle={
          locale === "he"
            ? "מבוסס על הרצאתה של אליזבת' רושה דה לה וולה"
            : "Based on a lecture by Elisabeth Rochat de la Vallée"
        }
        character="神"
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
                {locale === "he" ? "פילוסופיה" : "Philosophy"}
              </span>
            </div>

            <div className="text-stone-warm text-sm leading-[2] space-y-6">
              {locale === "he" ? (
                <>
                  <p>
                    <strong>神 &ndash; שן</strong> &ndash; רוח &ndash; כל מה שאינו ניתן למדוד באמצעות היין והיאנג.
                  </p>
                  <p>
                    על מנת להבין את התפיסה הסינית, ניתן לבחון את המילים שבה וכיצד הן בנויות. דבר זה מסביר מה שמעבר למילה המדוברת ונותן את הרקע לרעיון שהיא מביאה ולמשמעות העמוקה שלה.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">ניתוח המילה שן</h3>
                  <p>
                    <strong>החצי הימני</strong> &ndash; מסמל משהו שנמתח מלמעלה ולמטה ומתרחב. יש לנו כאן התמתחות וחזרה פנימה, שני קיצונים של יין ויאנג. <strong>החצי השמאלי</strong> &ndash; מסמל רעיון של משהו שבא מלמעלה ויורד למטה עם נראות ארצית.
                  </p>
                  <p>
                    שתי הסימניות יחדיו מראות לנו משהו שבא מלמעלה ומחובר למטה. כשהאלים בשמיים מקבלים ביטוי באמצעות רוח האבות.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הרוחות ביקום</h3>
                  <p>
                    במובן היקום אפשר לומר שמאחורי כל בריאה יש רוח. יש אלפים ואף עשרות אלפי רוחות. על פי הדאואיזם, ככל שהאדם יפתח יותר פנימה אל עצמו, הוא ימצא יותר רוחות בתוך הגוף.
                  </p>
                  <p>
                    עשרות אלפי הרוחות מייצגות את השמיים, את הטבע ואת הסדר וההרמוניה של החיים בספונטניות ללא טעות ושגיאה. הרוחות הן כמו להקת דגים או ציפורים &ndash; אפשר לתפוס אחת מהן אך הן כולן נעות יחדיו.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">החיוניות של הרוח</h3>
                  <p>
                    כמו להקת הציפורים, אם אני תופס שאני אחד &ndash; הרי שאני רוח חיונית חיה וכמספר הרוחות שאני &ndash; אני באחדות. <strong>המטרה היא שכל הרוחות שאני יכוונו לאותו מקום, אחרת אני בקונפליקט.</strong>
                  </p>
                  <p>
                    הרוחות אינן הולכות בדרכן אלא בדרך השמיים הקבועה להן. הן נעות בחופשיות, הן חכמות, אינטליגנטיות, אין בהן טעויות. הן האינטגרציה המיטבית. מחוץ לאדם בו הן שוכנות במהלך החיים, הן ישות אלוהית, כוחות טבע, רוחות האבות שבשמיים. במוות, הגוף חוזר לארץ והרוחות לשמיים.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">אחריות האדם</h3>
                  <p>
                    על פי תפיסה הסינית, מהות החיים וההתפתחות של העבודה הפנימית של האדם היא טיפוח הרוח שנכנסת פנימה &ndash; כנראה מהשמיים. זוהי רוח &quot;האדם&quot; הספציפי ויש בה מהרוח של האבות הקדומים, לכן גם, האדם אחראי לדרכו על הארץ ולדרכו אחרי המוות.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">יכולת ההבחנה של האדם</h3>
                  <p>
                    לאדם יש יכולת אבחנה ויש לו את הדרך לראות ולשנות את הדפוסים שלו. <strong>יש קשר בין הלב-תודעה שלו לרוח (השוכנת בלב)</strong> וכך יש לו יכולת להידמות לרוח. פחות ופחות חושב ויותר נע בספונטניות.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">שלושת הגדולים</h3>
                  <p>
                    לשמיים &ndash; העונות. לאדמה &ndash; הגבולות. לאדם &ndash; השלטון. אלו הם חוקי הסדר של שלושת הגדולים. האדם המבין את מושלמות הדברים יכול להיות בסדר הנכון ולגרום לאחרים להיות גם.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">המחלה והריפוי</h3>
                  <p>
                    הריפוי מגיע מהרוח, עם צמצום השפעת התשוקה, הרגשות והמחשבות. ככל שהאדם רואה יותר מה הוא עושה בשביל האיזון, זוהי חוכמתו הרוחנית.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">אינטליגנציה רוחנית &ndash; שן מינג (神明)</h3>
                  <p>
                    Ming &ndash; אור בוהק, נקי, מואר, בהיר, ברור. ברמת היקום יש את אותו הבוהק של היופי, של השמיים והארץ וכשהכל נמצא בהרמוניה, בספונטניות, זוהי שן מינג &ndash; שילוב של הנפלאות שבאה מהרוח והחוכמה של הרוח.
                  </p>
                  <p>
                    <strong>החשוב ביותר &ndash; להיות חכם רוחנית &ndash; מואר &ndash; יש מוארות בכל יצור, ומה שמייחד את האדם הוא המרכז הפנימי בו הלב/תודעה, שיכול לתפקד עם רוחות השמיים.</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">החון &ndash; הנשמה השמיימית</h3>
                  <p>
                    <strong>החון &ndash; 魂</strong> &ndash; היא הנשמה השמיימית שאחראית להגיון הבריא בתוך הגוף והיא שוכנת בכבד. כשהחון מנותקת מהשן (השוכנת בלב) היא יכולה להיות לא מאוזנת.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הגשמת הרוח בחזה</h3>
                  <p>
                    האדם יכול &quot;להגשים את הרוח בחזה&quot; שלו &ndash; כשהצ&apos;י החיוני (ג&apos;ינג) מגיע מהכליות הוא מניע למעלה, אל החזה, את הצ&apos;י המזוקק. הוא מאפשר ליופי לצאת ולאינטליגנציה (לשן) להיות מוארת.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הלב והדם</h3>
                  <p>
                    הדם הפועם בכל הגוף יוצא מהלב ולכן חשיבותו של הלב נמצאת בתפקוד כל תא ותא בגוף. איננו מביטים על הגוף מצד אחד ומצד שני על הרוח, הם משולבים יחדיו זה בתוך זה. הגוף רוטט בהתאם למצב הרוח והרוח מושפעת מהגוף.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">סיכום &ndash; מה הוא ה&quot;רוח&quot;</h3>
                  <p>
                    דם וצ&apos;י בהרמוניה מוחלטת. הזנה והגנה מתקשרים בשלמות. חמשת האברים המלאים מושגים. הצ&apos;י הרוחני שוכן בלב. החון והפו, השמיים והארץ, מאוזנים בגוף. זהו האדם האמיתי.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Shen (神)</strong> &mdash; Spirit &mdash; everything that cannot be measured through Yin and Yang.
                  </p>
                  <p>
                    To understand the Chinese conception, one can examine the words themselves and how they are constructed, revealing the deeper meaning behind them.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Analysis of the Word Shen</h3>
                  <p>
                    The right half symbolizes something stretching upward and downward, expanding &mdash; two extremes of Yin and Yang. The left half symbolizes something coming from above and descending with earthly visibility. Together they show us something that comes from above and connects below &mdash; when the gods in heaven find expression through ancestral spirits.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Spirits in the Universe</h3>
                  <p>
                    Behind every creation there is a spirit. There are thousands, even tens of thousands of spirits. According to Daoism, the more a person develops inwardly, the more spirits they find within the body. They are like a flock of birds &mdash; one can grasp a single one, but they all move together.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Vitality of Spirit</h3>
                  <p>
                    <strong>The goal is that all the spirits within us point in the same direction; otherwise we are in conflict.</strong> The spirits move freely, are wise and intelligent, making no mistakes. They are the optimal integration. Outside the person in whom they dwell during life, they are divine entities, forces of nature, ancestral spirits in heaven. In death, the body returns to earth and the spirits to heaven.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Human Responsibility</h3>
                  <p>
                    According to Chinese philosophy, the essence of life and inner development is cultivating the spirit that enters from heaven. This is the specific person&apos;s spirit, containing something of the ancient ancestors&apos; spirits. Therefore, the person is responsible for their path on earth and after death.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Three Greats</h3>
                  <p>
                    To Heaven &mdash; the seasons. To Earth &mdash; the boundaries. To Humanity &mdash; governance. These are the laws of order of the Three Greats. The person who understands the perfection of things can be in right order and help others be so as well.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Illness and Healing</h3>
                  <p>
                    Healing comes from Spirit, with diminishing influence of desire, emotions, and thoughts. The more a person sees what they do for balance, that is their spiritual wisdom.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Spiritual Intelligence &mdash; Shen Ming (神明)</h3>
                  <p>
                    Ming means bright light, clean, illuminated, clear. At the cosmic level there is that same brilliance of beauty, of heaven and earth, and when everything is in harmony, spontaneously &mdash; that is Shen Ming. <strong>Most importantly &mdash; to be spiritually wise, illuminated. There is illumination in every creature, and what distinguishes humans is the inner center where heart-consciousness can function with heaven&apos;s spirits.</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Hun &mdash; Heavenly Soul</h3>
                  <p>
                    <strong>The Hun (魂)</strong> is the heavenly soul responsible for healthy reasoning within the body, dwelling in the liver. When the Hun is disconnected from the Shen (dwelling in the heart), it can become unbalanced.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Embodying Spirit in the Chest</h3>
                  <p>
                    A person can &quot;embody spirit in their chest&quot; &mdash; when vital Chi (Jing) rises from the kidneys upward to the chest as refined Chi, it allows beauty to emerge and intelligence (Shen) to be illuminated.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Summary &mdash; What is &quot;Spirit&quot;</h3>
                  <p>
                    Blood and Chi in absolute harmony. Nourishment and protection communicate perfectly. The five solid organs are fulfilled. Spiritual Chi dwells in the heart. The Hun and Po, Heaven and Earth, balanced in the body. This is the true human.
                  </p>
                </>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
