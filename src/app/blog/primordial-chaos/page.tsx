"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function PrimordialChaosPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "השיבה למקור הקיום – הכאוס הקדום" : "Return to the Source – The Primordial Chaos"}
        subtitle={
          locale === "he"
            ? "מבוסס על הרצאתה של אליזבת רושה דה לה וואלה"
            : "Based on a lecture by Elisabeth Rochat de la Vallée"
        }
        character="混"
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
                    בהגות הסינית הקיום החומרי מכונה &ndash; ריבוי התופעות, או 10,000 התופעות. כבני אדם, עולה בנו השאלה &ndash; מהיכן באנו ומי אנו? התשובה מורכבת ומתחילה בדרך כלל במחשבה המעשית ש &ndash; &quot;אני בא מהוריי&quot;. אך ככל שמעמיקים לשורשי אילן היוחסין, מגיעים עד למקור הקיום, למקום ממנו הכל התחיל.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">לפני ההתחלה הגדולה</h3>
                  <p>
                    החכמים הסינים ראו בכל יצור &quot;ערבוב&quot; מיוחד של יין ויאנג. מצד אחד נשאלה השאלה &ndash; &quot;מה הדבר שקיים לפני היין והיאנג?&quot;. מצד שני הם הביטו על תופעות הטבע &ndash; הבריאה &ndash; ריבוי התופעות.
                  </p>
                  <p>
                    הם הבינו שמה שגרם להם לבוא לחיים מתוך המקור, היא ההתמזגות של היין והיאנג ברמות השונות. אין באמת קדימות בין היין והיאנג שהרי לפני הכל יש &ndash; &quot;כלום&quot;. כלום הוא פוטנציאל מוחלט של הכל.
                  </p>
                  <p>
                    ל&quot;כלום&quot; הזה הסינים קראו <strong>וו-ג&apos;י &ndash; 無極 &ndash; Wu Ji</strong>, שמתורגם כ &ndash; אין-גבול, אין-סוף.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הצ&apos;י המקורי &ndash; יואן צ&apos;י</h3>
                  <p>
                    כשמדברים על התמזגות של יין ויאנג הנובעת מהמקור ומביאה לקיום, מדברים בעצם על צ&apos;י &ndash; אנרגיית הקיום. ברפואה הסינית, הסימנייה מציגה מים שנובעים מתוך מקור. לאט-לאט המשהו הזה יהיה יין ויאנג מאוחדים שמבטאים עצמם בדרכים שונות.
                  </p>
                  <p>
                    בדאואיזם הגישה הזו התפתחה מאוד והחקר הדאואיסטי מבקש להבין את המקור ולחזור אליו. הכתיבה הפילוסופית &ndash; 元 &ndash; מראה משהו שמקדים ועומד בראש ההיררכיה. ראשוני, בעל כח גדול. <strong>היואן צ&apos;י הוא לא צ&apos;י בעצמו, אלא איכות שמאפשרת קיום של כל צ&apos;י.</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הכאוס &ndash; חון דון (混沌)</h3>
                  <p>
                    <strong>Hun</strong> &ndash; מילה המתארת שני אנשים המביטים לעבר השמש, מעין קהילה. משהו שמשלב, כן ויציב, חזק. <strong>Dun</strong> &ndash; מילה המתארת משהו הרוצה לפרוץ מהאדמה, משהו אמורפי, לא ברור, כמו גלים אין סופיים שמתערבבים.
                  </p>
                  <p>
                    הכאוס קיים גם לפני השפה, שכן היא באה רק כשיש הבחנה. לכן נאמר ש&quot;דאו&quot; (הגדול) אינו השם של הדאו, אלא הוא רק מילה בשביל לדבר על משהו, למרות שהוא בכלל לא משהו.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הדרך חזרה למקור</h3>
                  <p>
                    כל החיים באים מהמקור וחוזרים אליו. הם ביטוי של הדבר הגדול הזה. התפקיד האנושי הוא לראות את תנועת החיים והטבע ולהגשים אותה, עד שהופכים להיות אחד איתה. באדם יש את הפוטנציאל להיות עם המקור, מתוך הקשר שלו איתו, באמצעות הלב והרוח.
                  </p>
                  <p className="italic">
                    &quot;האדם ניזון מהארץ, הארץ ניזונה מהשמיים, השמיים ניזונים מהדאו, והדאו ניזון מעצמו.&quot;
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הווייה ואי-הווייה</h3>
                  <p>
                    להיות משהו, ייחודי, בעל צורה ייחודית. מצד שני יש גם אי-הווייה &ndash; אין משהו, אין ייחודיות. אי-הוויה אינה מעידה על אי-קיימות, אלא על קיימות האין-משהו. במצב זה, הייחודי יכול לחזור למקור האחד.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">יין יאנג</h3>
                  <p>
                    מתוך האחד נוצרו שני קטבים. היין והיאנג מנהלים את ריבו הדברים ויוצרים בהם שינויים בסדר המופתי של השמיים. דחיסה של צ&apos;י המביאה חיים, היא צ&apos;י-יין. היא זו שיוצרת הופעת הצורות.
                  </p>
                  <p>
                    בו זמנית יש לנו צ&apos;י-יאנג שבא מהשמיים. השמיים מחליטים, שולטים, קובעים. הארץ מקבלת, מצייתת ומסיימת את הצורה. מה שחשוב הוא, שתהיה הרמוניה ביניהם.
                  </p>
                  <p>
                    <strong>המיטב שאנו יכולים לעשות הוא, להזין את החיים שלנו ואת החיים של היקום.</strong>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    In Chinese thought, material existence is called the &quot;multitude of phenomena,&quot; or the 10,000 things. As humans, the question arises &mdash; where did we come from and who are we? The answer is complex, but as one traces the family tree deeper, one arrives at the source of existence, the place where everything began.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Before the Great Beginning</h3>
                  <p>
                    The Chinese sages saw in every creature a special &quot;mixture&quot; of Yin and Yang. They understood that what brought them to life from the source was the merging of Yin and Yang at various levels. Before everything there is &quot;nothing&quot; &mdash; nothing is the absolute potential of everything.
                  </p>
                  <p>
                    The Chinese called this &quot;nothing&quot; <strong>Wu Ji &mdash; 無極</strong>, meaning no-limit, infinity.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Original Chi &mdash; Yuan Chi</h3>
                  <p>
                    When speaking of the merging of Yin and Yang flowing from the source and bringing existence, we are speaking of Chi &mdash; the energy of existence. <strong>Yuan Chi is not Chi itself, but a quality that enables the existence of all Chi.</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Chaos &mdash; Hun Dun (混沌)</h3>
                  <p>
                    <strong>Hun</strong> describes something that combines, something true and stable, strong. <strong>Dun</strong> describes something wanting to burst from the earth, something amorphous, unclear, like infinite waves mixing together. Chaos exists before language, since language only comes with distinction.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Path Back to Source</h3>
                  <p>
                    All life comes from the source and returns to it. The human role is to see the movement of life and nature and embody it until becoming one with it. Through heart and spirit, a person has the potential to be with the source.
                  </p>
                  <p className="italic">
                    &quot;The human is nourished by Earth, Earth is nourished by Heaven, Heaven is nourished by the Dao, and the Dao is nourished by itself.&quot;
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Being and Non-Being</h3>
                  <p>
                    To be something, unique, with unique form. On the other hand, there is also non-being &mdash; no-thing, no uniqueness. Non-being does not indicate non-existence, but the existence of no-thing. In this state, the unique can return to the source of the One.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Yin and Yang</h3>
                  <p>
                    From the One, two poles were created. Yin and Yang manage the multitude of things, creating changes in heaven&apos;s exemplary order. What matters is that there be harmony between them. Heaven decides, rules, determines. Earth receives, obeys, and completes the form.
                  </p>
                  <p>
                    <strong>The best we can do is nourish our lives and the life of the universe.</strong>
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
