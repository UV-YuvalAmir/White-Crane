"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function ZhuangZiPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "ג'ואנג דזה – ספר החיים" : "Zhuang Zi – The Book of Life"}
        subtitle={locale === "he" ? "תרגום: צחי שוחט" : "Translation: Tzachi Shuhat"}
        character="莊"
        backgroundImage="/images/blog3-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-seal hover:text-seal-light transition-colors mb-8"
          >
            <span className={locale === "he" ? "" : "rotate-180 inline-block"}>→</span>
            {locale === "he" ? "חזרה לבלוג" : "Back to Blog"}
          </Link>

          <article className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="seal-stamp text-[9px] px-1.5 py-0.5">
                {locale === "he" ? "פילוסופיה" : "Philosophy"}
              </span>
              <span className="text-stone-400 text-sm">8.8.2018</span>
            </div>

            <div className="text-stone-warm text-sm leading-[2] space-y-6">
              {locale === "he" ? (
                <>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הקדמה</h3>
                  <p>
                    החכם ג&apos;ואנג דזה חי במאה ה-4 לפנה&quot;ס בסין. יש הרואים בו ממשיך דרכו הפילוסופית של לאו דזה מה-דאו דה ג&apos;ינג, מה שהופך אותו לאחד משני הפילוסופים המרכזיים שעיצבו את הדאואיזם – פילוסופיית הטבע ודרכו. אחרים טוענים שג&apos;ואנג דזה פיתח את הדאואיזם באופן עצמאי.
                  </p>
                  <p>
                    ג&apos;ואנג דזה נוגע בנושאים רבים – פעולות הטבע, התנהגות אנושית, חברה ושלטון – לפעמים ברצינות, לפעמים בהומור ושנינות. שפתו המטאפורית והלא-לוגית מותירה לקוראים מרחב לפרשנות אישית.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">מילות המתרגם</h3>
                  <p className="italic">צחי שוחט</p>
                  <p>
                    גיליתי טקסט זה בסביבות שנת 2000 ומצאתי עצמי שבוי בעוצמתו הספרותית והפואטית. בחרתי בתרגום האנגלי של ג&apos;יימס לג לגבי יכולתו להעביר את ה&quot;תחושה הסינית&quot; מעבר למשמעות המילולית.
                  </p>
                  <p>
                    ראיתי בו ספר לחיים, מורכב וציורי מחד, אך פשוט ומשעשע מאידך. אני ממליץ לקרוא לאט ולחזור אליו מדי פעם.
                  </p>
                  <div className="bg-paper-dark p-6 my-8 border-r-4 border-seal">
                    <p className="font-medium text-stone-700">
                      &quot;אין דבר, אשר אין לו ולו תנאי אחד לפחות, בו הוא נכון.&quot;
                    </p>
                    <p className="font-medium text-stone-700 mt-2">
                      &quot;אין דבר שהוא שגוי לחלוטין ואין דבר שהוא נכון לחלוטין.&quot;
                    </p>
                  </div>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">פרק 1: הנאה בשלווה שאינה מופרעת</h3>
                  <h4 className="text-lg font-semibold text-stone-700">דג הקון וציפור הפנג</h4>
                  <p>
                    באוקיינוס הצפוני חי דג בשם קון, שגודלו נותר בלתי נתפס. דג זה משתנה לציפור בשם פנג בעלת ממדים עצומים לא פחות. &quot;כנפיה כעננים הפזורים בשמיים.&quot;
                  </p>
                  <p>
                    הפנג עולה לגובה 90,000 לי, רוכבת על זרמי רוח בדרכה דרומה. &quot;ההבנה הקטנה לא יכולה להיות הבנה הגדולה.&quot;
                  </p>
                  <p>
                    צרצר ויונה לועגים למסע הפנג ושואלים מדוע היא צריכה לעוף כל כך גבוה. יצורים בעלי תוחלת חיים קצרה אינם יכולים להבין את אלה שנועדו לאריכות ימים.
                  </p>

                  <h4 className="text-lg font-semibold text-stone-700 mt-6">העץ חסר התועלת</h4>
                  <p>
                    נגר הבחין בעץ אלון ענק שנחשב &quot;חסר תועלת&quot; לעבודת עץ. העץ השיב בחלום: &quot;אם היו ברשותי נכסים שימושיים, האם הייתי מגיע לגודל העצום שלי?&quot;
                  </p>
                  <p>
                    חוסר התועלת הפך להצלת העץ, ששמר על חייו כשעצים שימושיים נכרתו.
                  </p>
                  <div className="bg-paper-dark p-6 my-8 border-r-4 border-seal">
                    <p className="font-medium text-stone-700">
                      &quot;אדם רוחני מכיר בערכה של חוסר שימושיות שכזו ובתוצאותיה.&quot;
                    </p>
                  </div>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">פרק 2: הרמוניה בניגודים</h3>
                  <h4 className="text-lg font-semibold text-stone-700">קולות הארץ והשמיים</h4>
                  <p>
                    ננפו דזה-צ&apos;י ישב בטראנס, כאילו אבד בתודעה. תלמידו שאל מה הוא עושה. המורה השיב: &quot;אולי שמעת את קולות בני האדם, אך האם שמעת את אלו של האדמה? אולי שמעת את אלו של האדמה, אך האם שמעת את אלו של השמיים?&quot;
                  </p>

                  <h4 className="text-lg font-semibold text-stone-700 mt-6">ציר הדאו</h4>
                  <p>
                    החכם מוצא את &quot;ציר הדאו&quot; – נקודת הציר שבה נקודות מבט מנוגדות נפגשות. &quot;ברגע שהאדם מוצא ציר זה, הוא עומד במרכז מעגל המחשבה.&quot;
                  </p>
                  <div className="bg-paper-dark p-6 my-8 border-r-4 border-seal">
                    <p className="font-medium text-stone-700">
                      &quot;אין דבר שישווה לאור הנאות של התודעה.&quot;
                    </p>
                  </div>

                  <h4 className="text-lg font-semibold text-stone-700 mt-6">חלום הפרפר</h4>
                  <p>
                    ג&apos;ואנג דזה חלם שהוא פרפר, חווה התמרה מוחלטת. כשהתעורר, לא יכול היה לקבוע האם הוא ג&apos;ואנג שחלם על פרפרים או פרפר שחולם שהוא ג&apos;ואנג.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">פרק 3: סוד שימור החיים</h3>
                  <h4 className="text-lg font-semibold text-stone-700">הקצב המיומן</h4>
                  <p>
                    הקצב של המלך הואי חותך בדיוק מושלם, מעולם לא מקהה את להבו לאורך 19 שנה. סודו: &quot;משרתך אוהב את מתודת הדאו.&quot;
                  </p>
                  <p>
                    הוא אינו רואה בעיניים אלא תופס ברוח. להבו מוצא הפרדות טבעיות, נמנע מעצם ורקמת חיבור לחלוטין. &quot;אני רואה בחיתוך השור תעסוקה רוחנית.&quot;
                  </p>
                  <div className="bg-paper-dark p-6 my-8 border-r-4 border-seal">
                    <p className="font-medium text-stone-700">
                      &quot;לחיינו יש גבול, אך לידע אין. לרדוף אחר ידע בלתי מוגבל באמצעות חיים מוגבלים מזמין סכנה.&quot;
                    </p>
                  </div>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">עקרונות מרכזיים</h3>
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="bg-paper-dark p-5">
                      <h4 className="font-semibold text-ink">חוסר תועלת כהגנה</h4>
                      <p className="text-sm mt-1">דברים בעלי ערך בזכות חוסר השימושיות שלהם שורדים זמן רב יותר.</p>
                    </div>
                    <div className="bg-paper-dark p-5">
                      <h4 className="font-semibold text-ink">הרמוניה טבעית</h4>
                      <p className="text-sm mt-1">ללכת בדרך הדאו משמעו לקבל נסיבות מבלי לכפות שינוי.</p>
                    </div>
                    <div className="bg-paper-dark p-5">
                      <h4 className="font-semibold text-ink">אחדות נקודות מבט</h4>
                      <p className="text-sm mt-1">&quot;אין דבר שישווה לאור הנאות של התודעה.&quot;</p>
                    </div>
                    <div className="bg-paper-dark p-5">
                      <h4 className="font-semibold text-ink">מעבר למילים</h4>
                      <p className="text-sm mt-1">&quot;הדאו המוצג איננו דאו. מילים וטענות אינן מגיעות למקומן.&quot;</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Introduction</h3>
                  <p>
                    The sage Zhuangzi lived in 4th century BCE China. Some view him as continuing Laozi&apos;s philosophical path from the Daodejing, making him one of two major philosophers shaping Daoism. Others argue Zhuangzi developed Daoism independently.
                  </p>
                  <p>
                    Zhuangzi touches numerous themes—nature&apos;s operations, human conduct, society, and governance—sometimes seriously, sometimes with humor and wit. His metaphorical, non-logical language leaves readers space for personal interpretation.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Translator&apos;s Words</h3>
                  <p className="italic">Tzachi Shuhat</p>
                  <p>
                    I discovered this text around 2000 and found myself captivated by its literary and poetic power. I chose James Legge&apos;s English translation for its ability to convey the &quot;Chinese feeling&quot; beyond literal meaning. I viewed it as a life manual—complex and vivid yet simple and amusing.
                  </p>
                  <div className="bg-paper-dark p-6 my-8 border-l-4 border-seal">
                    <p className="font-medium text-stone-700">&quot;Nothing exists without at least one condition making it right.&quot;</p>
                    <p className="font-medium text-stone-700 mt-2">&quot;Nothing is entirely wrong; nothing entirely right.&quot;</p>
                  </div>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Chapter 1: Enjoyment in Undisturbed Ease</h3>
                  <h4 className="text-lg font-semibold text-stone-700">The Kun Fish and Peng Bird</h4>
                  <p>
                    In the northern ocean lives a fish named Kun, whose size remains unknowable. This fish transforms into a bird called Peng with equally immense dimensions. &quot;Its wings scatter like clouds across the sky.&quot;
                  </p>
                  <p>
                    The Peng rises 90,000 li high. A cicada and dove mock its journey. Creatures of short lifespan cannot understand those meant for longevity.
                  </p>

                  <h4 className="text-lg font-semibold text-stone-700 mt-6">The Useless Tree</h4>
                  <p>
                    A carpenter observed a massive oak tree deemed &quot;useless.&quot; The tree replied in a dream: &quot;Had I possessed usefulness, would I have reached such size?&quot; Uselessness became the tree&apos;s salvation.
                  </p>
                  <div className="bg-paper-dark p-6 my-8 border-l-4 border-seal">
                    <p className="font-medium text-stone-700">&quot;The spiritual person recognizes the value of uselessness and its consequences.&quot;</p>
                  </div>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Chapter 2: Harmony in Opposites</h3>
                  <p>
                    The sage finds the &quot;Axis of Tao&quot;—the pivot point where opposite views meet. &quot;When finding this axis, one stands at thought&apos;s circle center.&quot;
                  </p>
                  <div className="bg-paper-dark p-6 my-8 border-l-4 border-seal">
                    <p className="font-medium text-stone-700">&quot;Nothing compares to consciousness&apos;s proper light.&quot;</p>
                  </div>

                  <h4 className="text-lg font-semibold text-stone-700 mt-6">The Butterfly Dream</h4>
                  <p>
                    Zhuangzi dreamed he was a butterfly. Upon waking, he couldn&apos;t determine whether he was Zhuang dreaming of butterflies or a butterfly dreaming of being Zhuang.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Chapter 3: The Secret of Preserving Life</h3>
                  <h4 className="text-lg font-semibold text-stone-700">The Skilled Butcher</h4>
                  <p>
                    The butcher of King Hui cuts with perfect precision, never dulling his blade across 19 years. His secret: &quot;My master loves Tao&apos;s method.&quot; He perceives spiritually, finding natural separations. &quot;I see ox-butchering as spiritual engagement.&quot;
                  </p>
                  <div className="bg-paper-dark p-6 my-8 border-l-4 border-seal">
                    <p className="font-medium text-stone-700">&quot;Our lives are finite; knowledge is not. Pursuing unlimited knowledge through limited life invites danger.&quot;</p>
                  </div>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Core Principles</h3>
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="bg-paper-dark p-5">
                      <h4 className="font-semibold text-ink">Uselessness as Protection</h4>
                      <p className="text-sm mt-1">Things valuable for their lack of utility survive longer.</p>
                    </div>
                    <div className="bg-paper-dark p-5">
                      <h4 className="font-semibold text-ink">Natural Harmony</h4>
                      <p className="text-sm mt-1">Following Tao means accepting circumstances without forcing change.</p>
                    </div>
                    <div className="bg-paper-dark p-5">
                      <h4 className="font-semibold text-ink">Perspective Unity</h4>
                      <p className="text-sm mt-1">&quot;Nothing compares to consciousness&apos;s proper light.&quot;</p>
                    </div>
                    <div className="bg-paper-dark p-5">
                      <h4 className="font-semibold text-ink">Beyond Words</h4>
                      <p className="text-sm mt-1">&quot;The displayed Tao is not Tao. Words and arguments don&apos;t reach the place.&quot;</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
