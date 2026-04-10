"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function FivePhasesPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "חמש הפאזות" : "The Five Phases"}
        subtitle={
          locale === "he"
            ? "עץ, אש, אדמה, מתכת, מים – היכרות ראשונית"
            : "Wood, Fire, Earth, Metal, Water – An Introduction"
        }
        character="行"
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
                    חמש הפאזות (Wu Xin) הן תפישה סינית של מערכת איכויות ותהליכים המציגים את תנועת היצירה של היקום. הן מתארות את השלב האחרון לפני היווצרות רבבת הדברים:
                  </p>
                  <ul className="list-disc pr-6 space-y-2">
                    <li><strong>האחד</strong> הוא הדאו או הוו-ג&apos;י &ndash; האין המוחלט.</li>
                    <li><strong>השניים</strong> הם הטאי ג&apos;י &ndash; היין והיאנג &ndash; העליונים המוחלטים, יוצרי השמיים והארץ.</li>
                    <li><strong>השלושה</strong> הם השמיים (יאנג) האדמה (יין) ומה שביניהם.</li>
                    <li><strong>הארבעה</strong> (הגדולים) הם הדאו, השמיים, האדמה והאדם.</li>
                    <li><strong>החמישה</strong> הם הפאזות/היסודות/התהליכים/השינויים: עץ, אש, אדמה, מתכת ומים.</li>
                  </ul>
                  <p>
                    לרוב משתמשים במושג &quot;חמשת היסודות&quot; בשביל לתאר מערכת זו, אך המילה &quot;יסודות&quot; מאוד מגבילה את התפישה המלאה שלה. לכן נכון יותר להשתמש במושגים &ndash; חמשת השינויים או חמש הפאזות.
                  </p>
                  <p>
                    <strong>חמש הפאזות</strong> מרכיבות את יצירת הטבע החומרי ביקום ובעיקר את זה שמתחת לשמיים. הן מתארות גם את תהליכי השינוי והתנועה של הטבע.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">מעגל ההזנה</h3>
                  <p>
                    משקף את הקשר בו כל פאזה מזינה ותומכת בפאזה שאחריה. הסינים מתארים מערכת יחסים זו כמערכת יחסים בין אם לבנה, כך שכל פאזה היא ה&quot;אם&quot; של פאזה אחת וה&quot;בן&quot; של פאזה אחרת.
                  </p>
                  <p>
                    המים מזינים את העץ ועוזרים לו לצמוח; העץ מזין את האש ומקיים אותה; האש מזינה את האדמה באפר שהופך לעפר; האדמה מכילה את המינרלים &ndash; ביניהם המתכת; והמתכת הופכת לנוזלית כשמתחממת.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">מעגל הבקרה</h3>
                  <p>
                    משקף את הקשר בו כל פאזה מווסתת פאזה אחרת הקשורה אליה ומווסתת בעצמה. הוויסות מאזן את הצמיחה הנוצרת במעגל התמיכה, יוצר גבולות ומסגרת יציבה, בלעדיה הקיום יתפשט ללא שליטה.
                  </p>
                  <p>
                    למים יכולת לכבות את האש; לאש יכולת להמיס את המתכת; למתכת יכולת לחתוך ולעצב את העץ; העץ יכול לעצור אדמה נסחפת והאדמה נותנת למים את מסלול זרימתם.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">האדם וחמש הפאזות</h3>
                  <p>
                    התפישה הסינית רואה באדם יקום קטן. כיצירה שמתחת לשמיים, גם הוא מכיל את תופעת חמשת הפאזות. הן באות לידי ביטוי באישיותו, במבנה גופו ובתפקוד אבריו הפנימיים &ndash; כשלכל פאזה משויכים איבר ו/או רקמה בגוף.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">טיפוסי העץ</h3>
                  <p>
                    מבנה גופם חטוב ותמיר, פניהם מעט מחודדות. טיפוסים אנליטיים, מאורגנים ומסודרים מאוד, המתכננים מהלכים מבעוד מועד. אסרטיביים ויוזמים, יצירתיים ובעלי דמיון מפותח. נוטים לצבור מתחים וכעסים. הם מניעים לצמיחה, התקדמות וארגון.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">טיפוסי האש</h3>
                  <p>
                    מבנה גופם רזה עד בינוני. דינמיים ומלאי חיות ושמחת חיים, טובים בתקשורת עם קהל. כריזמטיים, חמים, פתוחים, מלאי חיות והתלהבות. נוטים לאי יציבות, כמו האש.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">טיפוסי האדמה</h3>
                  <p>
                    מבנה גופם מלא ובשרני. טיפוסים אימהיים, אמפאתיים, תומכים, אנשי משפחה חמים. בעלי צורך בחום, מגע, יציבות וסביבה תומכת. נטייה לנתינה וקבלה ללא תנאי.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">טיפוסי המתכת</h3>
                  <p>
                    מבנה גופם ארוך וצר. אינטליגנטים, בעלי גבולות ברורים, משמעת עצמית וביקורתיות גבוהים. אנשים איכותיים בעלי יכולת אבחנה חדה, חוש לאסטטיקה ועיצוב מפותחים, נטייה לדייקנות ושאיפה לשלמות.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">טיפוסי המים</h3>
                  <p>
                    מבנה גופם עגול. טיפוסים סתגלניים מאוד, מתאימים עצמם לסביבתם. אנשים עקביים עם שלווה וסבלנות רבה. בעלי יכולת התבוננות עמוקה, עולם פנימי מאוד מפותח, מיומנות ויכולת חשיבה גבוהה. שורדים, בעלי כוח רצון ונחישות.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The Five Phases (Wu Xin) are a Chinese concept of a system of qualities and processes that present the creative movement of the universe. They describe the final stage before the formation of the ten thousand things:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>The One</strong> is the Dao or Wu Ji &mdash; absolute nothingness.</li>
                    <li><strong>The Two</strong> are Tai Ji &mdash; Yin and Yang &mdash; the supreme absolutes, creators of heaven and earth.</li>
                    <li><strong>The Three</strong> are Heaven (Yang), Earth (Yin), and what lies between.</li>
                    <li><strong>The Four</strong> (Great Ones) are the Dao, Heaven, Earth, and Humanity.</li>
                    <li><strong>The Five</strong> are the phases/elements/processes: Wood, Fire, Earth, Metal, and Water.</li>
                  </ul>
                  <p>
                    The term &quot;five elements&quot; is commonly used, but &quot;elements&quot; limits the full understanding. Therefore, &quot;five changes&quot; or &quot;five phases&quot; is more accurate.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Nourishing Cycle</h3>
                  <p>
                    Reflects the relationship where each phase nourishes and supports the next. The Chinese describe this as a mother-son relationship. Water nourishes Wood; Wood feeds Fire; Fire nourishes Earth with ash; Earth contains minerals including Metal; and Metal becomes liquid when heated.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Control Cycle</h3>
                  <p>
                    Reflects how each phase regulates another phase and is itself regulated. This regulation balances the growth from the nourishing cycle, creating boundaries and stable structure. Water can extinguish Fire; Fire can melt Metal; Metal can cut Wood; Wood can stop eroding Earth; and Earth gives Water its flow path.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Humans and the Five Phases</h3>
                  <p>
                    Chinese philosophy sees humans as a microcosm. As creatures beneath heaven, we also contain the phenomenon of the Five Phases, expressed in personality, body structure, and internal organ function.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Wood Types</h3>
                  <p>
                    Lean, sculpted bodies with slightly pointed faces. Analytical, organized, planners. Assertive, initiative-taking, creative with developed imagination. Tend to accumulate tension and anger. They drive growth and progress.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Fire Types</h3>
                  <p>
                    Thin to medium build. Dynamic, vivacious, joyful, excellent communicators. Charismatic, warm, open, full of enthusiasm. Tend toward instability, like fire itself.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Earth Types</h3>
                  <p>
                    Full, fleshy build. Nurturing, empathetic, supportive, warm family people. Need warmth, touch, stability. Tendency for unconditional giving and receiving.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Metal Types</h3>
                  <p>
                    Long, narrow build. Intelligent, clear boundaries, high self-discipline and critical thinking. Quality individuals with sharp discernment, developed aesthetic sense, tendency toward precision and perfection.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Water Types</h3>
                  <p>
                    Round build. Highly adaptable, adjusting to their environment. Consistent with great calm and patience. Deep observational ability, highly developed inner world, excellence in thinking. Survivors with strong willpower and determination.
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
