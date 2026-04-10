"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function EnergyCentersPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "ארבעה מוקדי אנרגיה עקריים" : "Four Primary Energy Centers"}
        subtitle={
          locale === "he"
            ? "מתוך קורס הילינג סיני פרח הלוטוס"
            : "From the Chinese Healing Lotus Flower course"
        }
        character="丹"
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
                  <ul className="list-disc pr-6 space-y-2">
                    <li>דאן טיין &ndash; שדה הנקטר</li>
                    <li>שין זונג &ndash; מרכז הלב</li>
                    <li>העין השלישית &ndash; עין האמת</li>
                    <li>באי חוי &ndash; מאה הרוחות (הכתר)</li>
                  </ul>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">דאן טיין &ndash; Dan Tian &ndash; מרכז האנרגיה הפנימי</h3>
                  <p>
                    Dan &ndash; נקטר, גלולת חיי נצח. Tian &ndash; שדה. כמושג שלם הדאן טיין מתפרש כ &ndash; שדה אנרגיית החיים, שדה הנקטר, ים הצ&apos;י.
                  </p>
                  <p>
                    <strong>הדאן טיין</strong> הוא מרכז אנרגטי שנמצא בגובה שתי אצבעות מתחת לטבור, במרכז הפנימי של הגוף. בתורת הדאו הוא נחשב לדאן טיין התחתון, מבין שלושה. הוא המקום אליו נאסף ומתרכז הצ&apos;י. ממנו הוא מתפשט לגוף ומזין את מערכותיו. ככל שהדאן טיין מלא יותר בצ&apos;י והצ&apos;י שבו טהור וחזק, כך הגוף מתפקד טוב יותר ובריא יותר.
                  </p>
                  <p>
                    כשהצ&apos;י חלש מהזנה לקויה, ממאמץ יתר, חולשה נפשית, זקנה וכו&apos;, הוא לא יכול להזין את מערכות הגוף, כך שהן נחלשות ותפקודן הופך לקוי.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">שין זונג &ndash; Xin Zong &ndash; מרכז הלב</h3>
                  <p>
                    <strong>השין זונג</strong> הוא אזור אנרגטי שממוקם במרכז הגוף, בגובה שבין מקלעת השמש ועצם החזה. בתורת הדאו הוא נחשב לדאן טיין האמצעי.
                  </p>
                  <p>
                    הוא משמש אותנו להגדרה העצמית שלנו בהבדלה מהסביבה והוא חלק ממערך האמצעים באמצעותם אנו מתקשרים לסביבה. מבחינה פיזיולוגית, באזור זה ממוקמת בלוטת התימוס.
                  </p>
                  <p>
                    אחת התחושות העיקריות שנובעות ממרכז הלב היא תחושת האמפתיה. באמצעותה אנו חשים את הסביבה ומרגישים הזדהות איתה, עד לתחושת אחדות מוחלטת. מרכז הלב הוא גם אחד הכלים החשובים במערכת האינטואיציה.
                  </p>
                  <p>
                    כשמרכז הלב פתוח אנו נרגיש תחושת שמחה, הקלה בחזה, תנועת רגשות, קלילות נפשית. כשמרכז הלב סגור, נוצר בו מתח, שגורם לאטימות רגשית ומחשבתית &ndash; כבדות נפשית, מועקה נפשית וקושי נפשי.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">יין טאנג &ndash; Yin Tang &ndash; העין השלישית</h3>
                  <p>
                    <strong>היין טאנג</strong>, או בשמה הפילוסופי העין השלישית, היא היכולת לראות את האמת שמעבר לחומר הנגלה ולראות את הפוטנציאל האנרגטי רוחני של המציאות. היא ממוקמת בקדמת המצח בין שתי הגבות.
                  </p>
                  <p>
                    העין השלישית היא איבר אנרגטי המאחד את כל חושינו ותודעתנו לכדי כלי חושי רב עוצמה. ברפואה הסינית היא נחשבת לנקודה המרגיעה רגשות, מרגיעה את הרוח ומשחררת דיכאון.
                  </p>
                  <p>
                    נאמר עליה שהיא פועלת במימד חומר אחד ושלושה מימדי זמן &ndash; עבר, הווה, עתיד. כשהעין השלישית פתוחה, היא קולטת מידע רב מימדי מהסביבה, שמעובד בתודעה ומאפשר לראות את המציאות מעבר לתפישה הפיזית.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">באי חוי &ndash; Bai Hui &ndash; מאה הרוחות</h3>
                  <p>
                    <strong>הבאי-חוי</strong> היא הנקודה העליונה הקיצונית ביותר בגופנו ונחשבת למשכן הרוח. בתורת הדאו היא נחשבת לדאן טיין העליון.
                  </p>
                  <p>
                    היא נמצאת על ערוץ הדו מאי (הערוץ השליט) ונחשבת לנקודה ממנה מתגלה ה&quot;לוטוס בעל אלף עלי הכותרת&quot; &ndash; נביעה של אנרגיה רציפה, המביאה לראייה פנימית עמוקה וחיבור לשמיים הרוחניים.
                  </p>
                  <p>
                    מבחינת הפרקטיקה של הרפואה הסינית, נקודה זו משמשת להבהרת החושים, הרגעת הרוח, טיפול כאבי ראש, טיניטוס, ורטיגו, הפרעות נפש ועוד.
                  </p>
                </>
              ) : (
                <>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dan Tian &mdash; Field of Nectar</li>
                    <li>Xin Zong &mdash; Heart Center</li>
                    <li>Third Eye &mdash; Eye of Truth</li>
                    <li>Bai Hui &mdash; Hundred Spirits (Crown)</li>
                  </ul>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Dan Tian &mdash; The Inner Energy Center</h3>
                  <p>
                    Dan means nectar, pill of eternal life. Tian means field. As a whole concept, Dan Tian translates as the field of life energy, field of nectar, sea of Chi.
                  </p>
                  <p>
                    The <strong>Dan Tian</strong> is an energetic center located about two finger-widths below the navel, at the body&apos;s internal center. In Daoist theory it is the lower Dan Tian, one of three. It is where Chi gathers and concentrates, spreading to the body and nourishing its systems. The fuller and purer the Chi in the Dan Tian, the better and healthier the body functions.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Xin Zong &mdash; Heart Center</h3>
                  <p>
                    The <strong>Xin Zong</strong> is an energetic area located at the body&apos;s center, between the solar plexus and the sternum. In Daoist theory it is the middle Dan Tian. It serves our self-definition in distinction from our environment and is part of how we communicate with our surroundings.
                  </p>
                  <p>
                    One of the primary sensations from the heart center is empathy &mdash; through it we sense our environment and feel identification with it, up to a feeling of absolute unity. When open, we feel joy, lightness, emotional movement. When closed, tension creates emotional and mental numbness.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Yin Tang &mdash; The Third Eye</h3>
                  <p>
                    The <strong>Yin Tang</strong>, philosophically known as the Third Eye, is the ability to see truth beyond visible matter and perceive the energetic-spiritual potential of reality. Located at the front of the forehead between the eyebrows.
                  </p>
                  <p>
                    It is an energetic organ unifying all our senses and consciousness into a powerful sensory tool. It operates in one dimension of matter and three dimensions of time &mdash; past, present, future. When open, it absorbs multi-dimensional information, allowing perception beyond physical reality.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Bai Hui &mdash; Hundred Spirits</h3>
                  <p>
                    <strong>Bai Hui</strong> is the highest point on our body and is considered the dwelling place of spirit. In Daoist theory it is the upper Dan Tian. It is the point from which the &quot;thousand-petaled lotus&quot; is revealed &mdash; a continuous flow of energy bringing deep inner vision and connection to spiritual heaven.
                  </p>
                  <p>
                    In Chinese medicine practice, this point is used for clarifying the senses, calming the spirit, treating headaches, tinnitus, vertigo, and mental disturbances.
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
