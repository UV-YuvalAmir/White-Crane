"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function TenPrinciplesOfDaoPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "עשרת העקרונות של הדאו" : "The Ten Principles of the Dao"}
        subtitle={
          locale === "he"
            ? "הדרך הפנימית והחיצונית מתלכדות"
            : "The inner and outer paths converge"
        }
        character="道"
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
                    עשרת העקרונות של הדאו מתארים את האופן בו גישת הדאו רואה את יצירת העולם ואת הדינמיקה שבו, כתהליכים מעגלים-מחזורים של שינוי והרמוניה. להבדיל ממצב קבוע וסטטי.
                  </p>
                  <p>
                    האדם שלומד, או אפילו רק מכיר במחזוריות מעגלית זו, יכול לחיות בהרמוניה עם מחזורי החיים, העונות, האנרגיות, והיחסים ביניהם.
                  </p>
                  <p>
                    כשיש חוויה אישית שהעולם מתנהל במחזורים, כלומר לא במונחים של התחלה וסוף, אלא כגלגל שמתגלגל, משתנה תפיסת הזמן, הרגע הופך להיות כאן ועכשיו וגם מייד משתנה, חווית החיים מתרככת ואפילו חיים והמוות נתפסים כחלק משלם מחזורי.
                  </p>
                  <p>
                    עשרת העקרונות של הדאו מראים לנו בנוסף את הכוחות הפועלים בעולם. אלו כוחות אנרגטיים וגשמיים שהאדם החי על פיהם, מפסיק להיות מרוכז בעצמו בלבד ומבין שהוא חלק ממערכת גדולה הפועלת בתוך עצמה. כך הוא משתחרר מאשליית השליטה.
                  </p>
                  <p>
                    שני משפטים על מערכת הדאו יכולים לתאר את הפיסקה הזו &ndash; <strong>&quot;היצירה היא רשת שאין לה טווה&quot;</strong> ו<strong>&quot;הדאו אינו משאיר עקבות למעשיו&quot;</strong>. כלומר &ndash; כל היצירה של היקום קשורה ומאוחדת כמו רשת טוויה, אך לא רואים שהדאו יצר ומפעיל אותה.
                  </p>
                  <p>
                    בסופו של דבר, אדם הלומד את הדאו ועקרונותיו חווה כי הדרך הפנימית (העצמית) והחיצונית (העולם החיצוני) מתלכדות. כפי שמופיע בפרק 33 של הדאו דה ג&apos;ינג &ndash; &quot;היודע את האחרים (החוץ) &ndash; נבון, היודע את עצמו (הפנים) &ndash; מואר.&quot;
                  </p>
                  <p>
                    וכך, העקרונות נעים בין הקוסמולוגי &ndash; שמים, ארץ, כוכבים, כיוונים ורוחות לבין האישי &ndash; גוף, נפש, נשמה. ככל שמבינים אותם &mdash; הגבול בין החוץ לפנים מתרכך ומתפוגג והחיים הופכים לדרך &ndash; לדאו.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">1. הדאו &ndash; (道) או הוו-ג&apos;י (无极) &ndash; אין קצה/אין-סוף</h3>
                  <p>
                    פירושה המילולי של המילה <strong>דאו</strong> היא &ndash; דרך. במאה ה-5 לפני הספירה, כינה החכם לאו דזה את האין סוף של הבריאה ויוצר הבריאה &ndash; דאו &ndash; האחד. בכך הביא לתחילתה של תורה מחשבה בשם זה &ndash; דאו, או דאואיזם.
                  </p>
                  <p>
                    הדאו אם כן הוא המקור הבלתי ניתן לתיאור, הריק, ממנו נובע כל הקיום. מבט נוסף רואה בדאו כפירושו המילולי &ndash; דרך, או ליתר דיוק, דרך הטבע. כלומר הטבע הוא מקור הקיום והדאו הוא החוקים (הדרך) על פיהם הטבע מתנהל.
                  </p>
                  <p>
                    נאמר בספר הדרך והסגולה &ndash; דאו דה ג&apos;ינג &ndash; <strong>&quot;הדאו הוא האחד, מאחד נולדו השניים.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">2. שתי האיכויות &ndash; היין והיאנג (陰陽) &ndash; הטאי ג&apos;י (太極)</h3>
                  <p>
                    הן הפיצול הראשוני של האחד לשני קטבים קיצוניים ומהוות שתי איכויות אנרגטיות &ndash; <strong>יין</strong> &ndash; פסיבית, כהה, פנימית. <strong>יאנג</strong> &ndash; פעילה, בהירה, חיצונית.
                  </p>
                  <p>
                    שתי איכויות אלו משלימות זו את זו, מגדירות זו את זו ויחסיות זו לזו. כל תופעה ביקום ניתנת להבנה דרך המתח, הדינמיקה והאיזון בין יין ליאנג ומתוך החיבור, התנועה וה&quot;חיכוך&quot; ביניהן, נוצרים הדברים בעולם.
                  </p>
                  <p>
                    <strong>&quot;מהשניים נולדים השלושה.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">3. שלושת הכשרונות &ndash; San Chai (三才)</h3>
                  <p>
                    זו היא <strong>השלישייה הקוסמית:</strong> <strong>השמיים (Tian 天)</strong> &ndash; הרוח, בהן נמצאים החוקים של הטבע/דאו. <strong>הארץ (Di 地)</strong> &ndash; החומר, מכילה ונותנת קרקע ליצירה וצמיחה. <strong>האדם (Ren 人)</strong> &ndash; הגשר, אחראי לשמור על הרמוניה ואיזון בין שמיים וארץ.
                  </p>
                  <p>
                    <strong>&quot;השלושה מולידים את הארבעה.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">4. ארבעת הכיוונים &ndash; Si Fang (四方)</h3>
                  <p>
                    מזרח, דרום, מערב, צפון &mdash; היסודות של מיקום במרחב. לכל כיוון יש בהתאמה &quot;סוכן&quot;, תנועה, עונה, צבע, חיה מיתית ואנרגיה. כמו ביין ויאנג, אין כיוון אחד טוב ושני רע &mdash; אלא כולם חיוניים.
                  </p>
                  <p>
                    כשהאדם נצמד רק ל&quot;כיוון אחד&quot; &ndash; תכונה אחת, נטייה אחת, שלב אחד &ndash; הוא יוצא מאיזון. תנועה הרמונית מתקיימת אך ורק בין כל הכיוונים.
                  </p>
                  <p>
                    <strong>&quot;הארבעה מולידים את החמישה.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">5. חמשת הסוכנים &ndash; Wu Xing (五行)</h3>
                  <p>
                    עץ, אש, אדמה, מתכת, מים. חשוב לומר כי אין להתייחס אליהם כחמישה חומרים פיזיים אלא כחמש תנועות אנרגטיות מחזוריות של שינוי ויצירה בטבע.
                  </p>
                  <p>
                    מערכת היחסים בין חמש האנרגיות היא של תמיכה ויצירה ושל ניתוב ובקרה, המביאים לאיזון ושלמות.
                  </p>
                  <p>
                    <strong>&quot;החמישה מולידים את השישה.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">6. שש ההרמוניות &ndash; Liu He (六合)</h3>
                  <p>
                    למעלה, למטה, ימין, שמאל, קדימה, אחורה &ndash; ההשלמה המרחבית. בהיבט אנרגטי שש האחדויות מייצגות איזון של התנועה החופשית של הצ&apos;י ביקום. האדם ביחס אליהן נמצא במרכז והוא נקודת האיזון.
                  </p>
                  <p>
                    <strong>&quot;להימצא בליוּ חֶה&quot;</strong> &ndash; משמעו לחיות בהרמוניה עם כל ממדי המציאות, להיות בשקט פנימי גם כשיש תנועה חיצונית &ndash; ולהפוך לכלי נקי לזרימת הדאו.
                  </p>
                  <p>
                    <strong>&quot;השישה מולידים את השבעה.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">7. שבעת הכוכבים &ndash; Qi Xing (七星)</h3>
                  <p>
                    אלו הם שבעת כוכבי הדובה הגדולה &ndash; המסמלים את החיבור בין האדם ליקום/דאו. הם נחשבים לשער קוסמי, לכלי ניווט רוחני ופיזי וסמל למחזור הזמן. מייצגים את הידע השמיימי, הדינמי והנצחי של הדאו. הם מכונים אף &ndash; <strong>&quot;השעון&quot;</strong> של היקום.
                  </p>
                  <p>
                    <strong>&quot;השבעה מולידים את השמונה.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">8. שמונה הטריגרמות &ndash; Ba Gua (八卦)</h3>
                  <p>
                    שמיים, אדמה, רעם, רוח, מים, אש, הר, אגם. כל טריגרמה מורכבת משלושה קווים, שיכולים להיות שלמים (יאנג) או שבורים (יין). הן משמשות בפנג שואי, בחיזוי על פי האי צ&apos;ינג, בתרגולים אנרגטיים, ברפואה סינית ובאומנויות לחימה.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">9. תשעת הארמונות &ndash; Jiu Gong (九宮)</h3>
                  <p>
                    תשעת הארמונות מייצגים תשעה אזורים במרחב ומתוארים כרשת של שלוש על שלוש, שמרכזם באמצע. הם מרכיבים את תשעת ריבועי הלוח בפנג שואי &ndash; לו שו (Luo Shu). לכל ארמון יש משמעות מיוחדת והוא קשור לאחד החמשת התנועות-סוכנים לאנרגיות של זמן, מרחב ותזמון.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">10. המעטפת הכבדה &ndash; Chong Wei / שלמות &ndash; Shi Quan (十全)</h3>
                  <p>
                    את העקרון העשירי אפשר להבין בשתי משמעויות &ndash; הראשונה: ה&quot;מעטפת הכבדה&quot; היא התגלמות הדאו בחומר באמצעות כל תשעת העקרונות הקודמים. היא מסמלת את החומר הכבד שמכסה את הקל והטהור &ndash; כלומר את הדאו עצמו.
                  </p>
                  <p>
                    הגישה השנייה &ndash; המספר עשר 十 ולצידו השלם 全, שביחד מסמלים את השלמות ואת התכלית של התרגול הרוחני &ndash; חזרה למקור האחד (הדאו) והתמזגות איתו.
                  </p>
                  <p>
                    בכל אופן &ndash; עקרון עשרי הוא הכל יחד. גם חומרית, גם אנרגטית וגם רוחנית.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The Ten Principles of the Dao describe how the Daoist approach views the creation of the world and its dynamics as cyclical processes of change and harmony, as opposed to a fixed and static state.
                  </p>
                  <p>
                    A person who studies, or even merely recognizes this cyclical nature, can live in harmony with the cycles of life, the seasons, the energies, and the relationships between them.
                  </p>
                  <p>
                    When one personally experiences that the world operates in cycles &mdash; not in terms of beginning and end, but as a turning wheel &mdash; the perception of time changes. The moment becomes here and now yet immediately changes. The experience of life softens, and even life and death are perceived as part of a cyclical whole.
                  </p>
                  <p>
                    Two statements about the Dao system can describe this: <strong>&quot;Creation is a web with no weaver&quot;</strong> and <strong>&quot;The Dao leaves no traces of its deeds.&quot;</strong> Meaning &mdash; all creation of the universe is connected and unified like a woven web, yet one cannot see that the Dao created and operates it.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">1. The Dao (道) or Wu Ji (无极) &mdash; No Limit / Infinity</h3>
                  <p>
                    The literal meaning of the word <strong>Dao</strong> is &quot;the way.&quot; In the 5th century BCE, the sage Lao Tzu named the infinity of creation and the creator of creation &mdash; Dao &mdash; the One. The Dao is the indescribable source, the void, from which all existence flows.
                  </p>
                  <p>
                    As stated in the Dao De Jing: <strong>&quot;The Dao is the One; from One, the Two were born.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">2. The Two Qualities &mdash; Yin and Yang (陰陽) &mdash; Tai Ji (太極)</h3>
                  <p>
                    These are the initial split of the One into two extreme poles, constituting two energetic qualities: <strong>Yin</strong> &mdash; passive, dark, internal. <strong>Yang</strong> &mdash; active, bright, external. These two qualities complement, define, and are relative to each other. Every phenomenon in the universe can be understood through the tension, dynamics, and balance between Yin and Yang.
                  </p>
                  <p>
                    <strong>&quot;From Two, Three are born.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">3. The Three Talents &mdash; San Chai (三才)</h3>
                  <p>
                    This is the <strong>cosmic trinity:</strong> <strong>Heaven (Tian 天)</strong> &mdash; Spirit, containing the laws of nature/Dao. <strong>Earth (Di 地)</strong> &mdash; Matter, providing ground for creation and growth. <strong>Human (Ren 人)</strong> &mdash; the Bridge, responsible for maintaining harmony between heaven and earth.
                  </p>
                  <p>
                    <strong>&quot;From Three, Four are born.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">4. The Four Directions &mdash; Si Fang (四方)</h3>
                  <p>
                    East, South, West, North &mdash; the foundations of spatial orientation. Each direction has a corresponding &quot;agent,&quot; movement, season, color, mythical animal, and energy. As with Yin and Yang, no direction is inherently good or bad &mdash; all are vital.
                  </p>
                  <p>
                    <strong>&quot;From Four, Five are born.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">5. The Five Agents &mdash; Wu Xing (五行)</h3>
                  <p>
                    Wood, Fire, Earth, Metal, Water. These should not be understood as five physical materials but as five cyclical energetic movements of change and creation in nature. The relationship between the five energies involves support and creation, as well as channeling and control, bringing about balance and wholeness.
                  </p>
                  <p>
                    <strong>&quot;From Five, Six are born.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">6. The Six Harmonies &mdash; Liu He (六合)</h3>
                  <p>
                    Up, down, right, left, forward, backward &mdash; spatial completion. The human stands at their center, serving as the balancing point. <strong>&quot;To be in Liu He&quot;</strong> means to live in harmony with all dimensions of reality &mdash; to be internally quiet even when there is external movement &mdash; and to become a clean vessel for the Dao&apos;s flow.
                  </p>
                  <p>
                    <strong>&quot;From Six, Seven are born.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">7. The Seven Stars &mdash; Qi Xing (七星)</h3>
                  <p>
                    These are the seven stars of the Big Dipper &mdash; symbolizing the connection between human and cosmos/Dao. They are considered a cosmic gate, a spiritual and physical navigation tool, and a symbol of the cycle of time. They are also called the &quot;clock&quot; of the universe.
                  </p>
                  <p>
                    <strong>&quot;From Seven, Eight are born.&quot;</strong>
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">8. The Eight Trigrams &mdash; Ba Gua (八卦)</h3>
                  <p>
                    Heaven, Earth, Thunder, Wind, Water, Fire, Mountain, Lake. Each trigram consists of three lines that can be solid (Yang) or broken (Yin). They are used in Feng Shui, divination according to the I Ching, energetic practices, Chinese medicine, and martial arts.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">9. The Nine Palaces &mdash; Jiu Gong (九宮)</h3>
                  <p>
                    The Nine Palaces represent nine areas in space, described as a three-by-three grid centered in the middle. They compose the nine squares of the Feng Shui Luo Shu board. Each palace has special significance connected to the Five Agents and energies of time, space, and timing.
                  </p>

                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">10. The Heavy Envelope &mdash; Chong Wei / Perfection &mdash; Shi Quan (十全)</h3>
                  <p>
                    The tenth principle can be understood in two ways. First: the &quot;heavy envelope&quot; is the embodiment of the Dao in matter through all nine preceding principles. It symbolizes the heavy matter covering the light and pure &mdash; the Dao itself.
                  </p>
                  <p>
                    Second: the number ten 十 alongside &quot;whole&quot; 全 together symbolize perfection and the purpose of spiritual practice &mdash; return to the source of the One (the Dao) and merging with it.
                  </p>
                  <p>
                    In any case &mdash; the tenth principle is everything together. Material, energetic, and spiritual.
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
