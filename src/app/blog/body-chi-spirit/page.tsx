"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function BodyChiSpiritPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "אדם – גוף, צ'י ורוח" : "Man – Body, Chi and Spirit"}
        subtitle={
          locale === "he"
            ? "מתוך הרצאה של אליזבת רושא דה לה ואלה"
            : "From a lecture by Elisabeth Rochat de la Vallée"
        }
        character="身"
        backgroundImage="/images/blog2-lg.jpg"
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
            </div>

            <div className="text-stone-warm text-sm leading-[2] space-y-6">
              {locale === "he" ? (
                <>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הבנת הגוף</h3>
                  <p>
                    למילה הסינית &quot;גוף&quot; משמעויות מרובות, שלוש מהן הנפוצות ביותר:
                  </p>
                  <ul className="list-disc pr-6 space-y-2">
                    <li><strong>שינג (形)</strong> – צורה חיצונית הנראית לעין</li>
                    <li><strong>טי (體)</strong> – מרכיבי הגוף: עצמות, שלד, האורגניזם הבונה את הגוף, חיבורים בין חלקים</li>
                    <li><strong>שן (身)</strong> – מסמל גוף של אישה בהריון, בטן, והיחס בין העצמי לגוף; משמעותו &quot;אני הוא גופי&quot;</li>
                  </ul>
                  <p>החיים מייצגים את האיחוד של הדברים; המוות מייצג את התפרקותם.</p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">צורה והתמרה</h3>
                  <p>
                    <strong>שינג (形)</strong> מתאר צורה חיצונית המופיעה בין שמיים וארץ, המציינת את התגלמות החיים ויכולת הקיום. הצורה אינה חייבת להיות קבועה – היא רק צריכה להיות נראית. היא יכולה אפילו להיות צורה דמיונית המתבטאת כלפי חוץ, כגון מחשבה מדוברת.
                  </p>
                  <p>
                    <strong>התמרה (化 – הואה)</strong> – שינוי מחולל חיים, ותחילת החיים מחוללת שינוי. זו תנועת הצ&apos;י היוצרת דפוסי צורה. הנוסחה ליצירת דפוסים קיימת בתוך ההתמרה עצמה – זהו חוק הדאו (הדרך).
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">שמיים וארץ</h3>
                  <p>
                    שמיים וארץ חולקים תלות הדדית עם יחס היררכי: שמיים למעלה, ארץ למטה. השמיים מספקים מבנים וחוקים היוצרים סדר; הארץ מקיימת אותם. השמיים מקבלים סדר חוקתי זה מהדאו – הטבע – הרוח הגדולה.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">טיפוח הרוח (ג&apos;ינג שן – 精神)</h3>
                  <p>
                    כשיצורים אינם מכבדים את הסדר השמימי, הם פוגעים בחיוניותם. האנושות, שנוצרה בצלם השמיים עם חיבור ישיר דרך <strong>הרוח (שן – 神)</strong>, חווה פגיעות מיוחדת.
                  </p>
                  <p>
                    בני אדם מחזיקים בחיבור ישיר לשמיים ונושאים, בניגוד לבעלי חיים, <strong>אחריות אישית</strong> לסדר השמימי שלהם דרך <strong>תודעת הלב (שין – 心)</strong> שברשותם. תודעת הלב מייצגת את <strong>הרוח השמימית שבפנים</strong>, ודרך טיפוחה, האדם לומד את סדר השמיים ומתקרב לדאו הגדול.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">שלושת היסודות: גוף, צ&apos;י, רוח</h3>
                  <p>
                    &quot;הגוף הוא המעבדה של הצ&apos;י. ללא גוף, לצ&apos;י אין ביטוי.&quot; כאשר תפקוד הצ&apos;י מופרע, הפרעות ב&quot;צורת&quot; הגוף מתבטאות. סדר בתוך גוף, צ&apos;י ורוח מתבטא ב&quot;צורת&quot; החיים. הצ&apos;י עוקב אחר הצורה, ולהפך.
                  </p>
                  <p>
                    כאשר מדברים כאן על רוח, מדובר ברוח ריאלית הנוכחת בתוך הגוף ובאיך בני אדם יכולים לאפשר לפוטנציאל שלהם להיות רוחני כמו השמיים.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">תרגול צ&apos;י קונג</h3>
                  <p className="italic">
                    מאת צחי שוחט
                  </p>
                  <p>
                    תרגול צ&apos;י קונג יומי מחבר גוף, צ&apos;י ורוח. תנועות רכות ואיטיות המתורגלות במודעות נשימה מלאה, מלוות בחוויה פנימית מועצמת, מלמדות את המתרגלים את הקשרים בין הגוף, זרימת הצ&apos;י ותודעת הלב.
                  </p>
                  <p>
                    דרך התרגול, האדם מתחבר לעצמו ולחוקים השמימיים שבתוכו – המבטאים את חוקי השמיים הסובבים וחוקי הטבע – הדאו.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Understanding the Body</h3>
                  <p>The Chinese word for &quot;body&quot; has multiple meanings, with three being most common:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Xing (形)</strong> – External form visible to the eye</li>
                    <li><strong>Ti (體)</strong> – Body components: bones, skeleton, the organism building the body, connections between parts</li>
                    <li><strong>Shen (身)</strong> – Symbolizes a pregnant woman&apos;s body and the relationship between self and body; meaning &quot;I am my body&quot;</li>
                  </ul>
                  <p>Life represents the union of things; death represents their dissolution.</p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Form and Transformation</h3>
                  <p>
                    <strong>Xing (形)</strong> describes external form appearing between heaven and earth, indicating the embodiment of life. Form need not be fixed—it only requires visibility.
                  </p>
                  <p>
                    <strong>Transformation (化 - Hua)</strong> – Change initiates life, and life&apos;s beginning initiates change. This represents Chi&apos;s movement creating form-patterns. The formula for creating patterns exists within transformation itself—this is the law of Tao.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Heaven and Earth</h3>
                  <p>
                    Heaven and earth share mutual dependency with hierarchical relationship. Heaven provides structures and laws creating order; earth fulfills them. Heaven receives this constitutional order from Tao—nature—the great spirit.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Cultivating Spirit (Jing Shen - 精神)</h3>
                  <p>
                    When beings disrespect celestial order, they damage their vitality. Humanity possesses direct heaven connection and, unlike animals, bears <strong>personal responsibility</strong> for their celestial order through <strong>Heart-Consciousness (Xin - 心)</strong>.
                  </p>
                  <p>
                    Heart-consciousness represents the <strong>celestial spirit within</strong>, and through its cultivation, one learns heaven&apos;s order and approaches the great Tao.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Three Elements: Body, Chi, Spirit</h3>
                  <p>
                    &quot;The body is Chi&apos;s laboratory. Without body, Chi has no expression.&quot; When Chi function disorders occur, body &quot;form&quot; disorders manifest. Chi follows form, and vice versa.
                  </p>
                  <p>
                    Heart-consciousness is the foundation of Spirit, where one finds internal heaven. Therefore, humans must &quot;remain centered,&quot; and when the center shifts, &quot;spiritual&quot; illness occurs.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Chi Kung Practice</h3>
                  <p className="italic">By Tzachi Shuhat</p>
                  <p>
                    Daily Chi Kung practice connects body, Chi, and spirit. Soft, slow movements practiced in complete breath awareness teach practitioners the relationships between body, flowing Chi, and Heart-consciousness.
                  </p>
                  <p>
                    Through practice, one connects with oneself and celestial laws within—expressing surrounding heaven&apos;s laws and nature&apos;s laws—Tao.
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
