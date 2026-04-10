"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function DaoChiCreationPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "הדאו הצ'י והיצירה" : "The Dao, Chi and Creation"}
        subtitle={
          locale === "he"
            ? "מתוך קורס הילינג סיני פרח הלוטוס"
            : "From the Chinese Healing Lotus Flower course"
        }
        character="氣"
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
                    וו-ג&apos;י, דאו, טאי ג&apos;י, הצ&apos;י של היקום, הצ&apos;י של הגוף, וואי-צ&apos;י.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הצ&apos;י</h3>
                  <p>
                    המילה צ&apos;י מורכבת משתי סימניות סיניות: 气 &ndash; אדים, ו-米 &ndash; אורז מתבשל. ביחד מתקבל הרעיון של אדים העולים מאורז מתבשל. במובן הפילוסופי והאנרגטי ניתן לראות במושג צ&apos;י &ndash; אוויר, נשימה, רוח, אנרגיה קיומית, אתר.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Wu Ji &ndash; וו ג&apos;י</h3>
                  <p>
                    Wu פירושו &ndash; ריק, איין. Ji פירושו &ndash; מוחלט, קיצוני. כמושג פילוסופי משמעותו &ndash; האיין העליון או המוחלט. ה-Wu Ji הוא מצב של אי קיום משהו מוגדר, אי ההבדלה, אי צורה &ndash; הריקות האין סופית.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הדאו &ndash; Dao</h3>
                  <p>
                    Dao (דאו) פירושו &ndash; דרך. במאה החמישית לפני הספירה הטמיע החכם הסיני לאו צה את המושג &quot;דאו&quot;, כ &ndash; הטבע ודרכו. בספרו &quot;דאו טה ג&apos;ינג&quot; (תמצית הדרך) הוא כתב:
                  </p>
                  <blockquote className="border-r-2 border-seal/30 pr-4 italic">
                    &quot;יש דבר מעורפל ומושלם הקיים מלפני השמיים הארץ, חסר צורה נטול תנועה, מקיף כל ואינו מסכן דבר, אפשר לראותו כאם העולם, אינני יודע את שמו, אכנהו דאו...&quot;
                  </blockquote>
                  <p>
                    ניתן להבין שלאו צה ראה בדאו מקור היקום. הוא תפס את רעיון האין-סוף המוחלט כאינטליגנציית מקור וכינה אותה &ndash; דאו. מכך: <strong>הדאו הוא הוו-ג&apos;י.</strong>
                  </p>
                  <p>
                    תהליך יצירת היקום: מהאחד (הדאו) נבעו השניים (היין והיאנג). השניים הגדולים והחיבור ביניהם הם שלושה. מתוך השלושה נוצרו חמשת היסודות. מתוך חמשת היסודות נוצרו עשרת האלפים (ריבו הדברים שבין השמיים והארץ).
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Tai Ji &ndash; טאי ג&apos;י</h3>
                  <p>
                    Tai פירושו &ndash; עליון, גדול. Ji פירושו &ndash; מוחלט. משמעותו &ndash; העילאי המוחלט. הטאי ג&apos;י מורכב מיין ויאנג. <strong>יין</strong> &ndash; הצד המוצל של הגג, מייצג נקבה, חשכה, רכות, אדמה, ירח, קור. <strong>יאנג</strong> &ndash; הצד המואר של הגג, מייצג זכר, אור, קושי, שמיים, שמש, חום.
                  </p>
                  <p>
                    כששני כוחות אלו מחוברים כאחד ללא הבדלה &ndash; הם הוו-ג&apos;י. כשהם נבדלים אך מאוחדים ונעים יחד &ndash; הם טאי-ג&apos;י.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הצ&apos;י של היקום</h3>
                  <p>
                    מהוו-ג&apos;י שהוא הדאו, נוצרו שני כוחות היצירה &ndash; היין והיאנג. היין הוא איכות חומר והיאנג הוא איכות רוח. שני כוחות אלו מרכיבים את <strong>הצ&apos;י הראשוני של היקום</strong> &ndash; איכות של חומר ורוח יחדיו, אינטליגנציה ועשייה.
                  </p>
                  <p>
                    כוח היצירה הראשוני הזה נע בתוך עצמו ורוטט בתדר מסוים. בשביל ליצור את היקום הוא מתפצל לחלקיקי אנרגיה (צ&apos;י) נוספים שרוטטים ברטטים שונים. בכל חלקיק צ&apos;י יש זכר לרטט מהצ&apos;י הראשוני.
                  </p>
                  <p>
                    כבני אדם העושים עבודה אנרגטית ותודעתית (צ&apos;י גונג ומדיטציה), ככל שהמצב התודעתי שלנו קרוב לריק הרוחני, אנו מתחברים לרטט הצ&apos;י הראשוני ולתדר של הדאו.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הצ&apos;י של הגוף</h3>
                  <p>
                    ברפואה הסינית, הצ&apos;י נחשב לאנרגיה הזורמת בגוף ומקיימת אותו. האדם מתקיים משלושה סוגים של צ&apos;י:
                  </p>
                  <ul className="list-disc pr-6 space-y-2">
                    <li>הצ&apos;י המולד המגיע לנשמה מהיקום ומתקבל מהאם בזמן ההריון &ndash; <strong>יואן צ&apos;י</strong></li>
                    <li>הצ&apos;י המתקבל מהמזון &ndash; <strong>גו צ&apos;י</strong></li>
                    <li>הצ&apos;י המתקבל מהאוויר &ndash; <strong>קונג צ&apos;י</strong></li>
                  </ul>
                  <p>
                    אלו מתאחדים יחדיו והופכים להיות הצ&apos;י הזורם בגוף &ndash; <strong>זנג צ&apos;י</strong>. ללא הצ&apos;י אין חיים וכשהוא מפסיק לזרום או מתפוגג, מפסיקים החיים.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הווי צ&apos;י &ndash; Wai Chi</h3>
                  <p>
                    בנוסף לצ&apos;י הפנימי, הרפואה הסינית מכירה גם בצ&apos;י חיצוני העוטף את הגוף &ndash; הוואי צ&apos;י. הוא נשלט על ידי הריאות ומופץ החוצה מהגוף על ידי העור. הוא משמש כמגן אנרגטי שנמצא מסביב לגוף ואחראי על הקשר שלו לסביבה.
                  </p>
                  <p>
                    הוא אחראי להסיט מהגוף גורמים חיצוניים שעלולים לפגוע בו &ndash; קור קיצוני, רוח, וירוסים, אנרגיות שליליות. הוואי-צ&apos;י הוא פן אנרגטי של מערכת החיסון של הגוף.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Wu Ji, Dao, Tai Ji, the Chi of the universe, the Chi of the body, Wai Chi.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Chi</h3>
                  <p>
                    The word Chi is composed of two Chinese characters: steam (气) and cooking rice (米). Together they evoke the idea of steam rising from cooking rice. Philosophically and energetically, Chi can mean air, breath, wind, vital energy, ether.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Wu Ji</h3>
                  <p>
                    Wu means empty, nothing. Ji means absolute, extreme. As a philosophical concept it means the supreme nothingness. Wu Ji is a state of undefined existence, non-differentiation, formlessness &mdash; infinite emptiness.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Dao</h3>
                  <p>
                    Dao means &quot;the way.&quot; In the 5th century BCE, the Chinese sage Lao Tzu established the concept of &quot;Dao&quot; as nature and its way. In his Dao De Jing he wrote:
                  </p>
                  <blockquote className="border-l-2 border-seal/30 pl-4 italic">
                    &quot;There is something nebulous and perfect, existing before heaven and earth, formless and motionless, encompassing all without endangering anything, it can be seen as the mother of the world...&quot;
                  </blockquote>
                  <p>
                    The creation process: From the One (Dao) came the Two (Yin and Yang). The Two and their connection make Three. From Three came the Five Elements. From the Five Elements came the ten thousand things.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Tai Ji</h3>
                  <p>
                    Tai means supreme, great. Ji means absolute. The Tai Ji is composed of Yin and Yang. <strong>Yin</strong> &mdash; the shaded side of the roof: female, darkness, softness, earth, moon, cold. <strong>Yang</strong> &mdash; the lit side: male, light, hardness, heaven, sun, heat.
                  </p>
                  <p>
                    When these two forces are united without distinction &mdash; they are Wu Ji. When differentiated but unified and moving together &mdash; they are Tai Ji.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Chi of the Universe</h3>
                  <p>
                    From Wu Ji/Dao came two creative forces &mdash; Yin and Yang. Yin is the quality of matter; Yang is the quality of spirit. Together they compose the <strong>primordial Chi of the universe</strong> &mdash; intelligence and action combined.
                  </p>
                  <p>
                    This primordial creative force moves within itself and vibrates at a certain frequency. To create the universe it splits into additional energy particles (Chi) vibrating at different frequencies. Each Chi particle carries a memory of the primordial vibration.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Chi of the Body</h3>
                  <p>
                    In Chinese medicine, Chi is the energy flowing through the body sustaining it. Humans exist from three types of Chi:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Innate Chi received from the universe via the mother during pregnancy &mdash; <strong>Yuan Chi</strong></li>
                    <li>Chi received from food &mdash; <strong>Gu Chi</strong></li>
                    <li>Chi received from air &mdash; <strong>Kong Chi</strong></li>
                  </ul>
                  <p>
                    These unite to become the body&apos;s flowing Chi &mdash; <strong>Zeng Chi</strong>. Without Chi there is no life.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">Wai Chi &mdash; External Chi</h3>
                  <p>
                    Beyond internal Chi, Chinese medicine recognizes external Chi enveloping the body. Controlled by the lungs and emitted through the skin, it serves as an energetic shield surrounding the body, responsible for deflecting harmful external factors &mdash; extreme cold, wind, viruses, negative energies. Wai Chi is the energetic aspect of the immune system.
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
