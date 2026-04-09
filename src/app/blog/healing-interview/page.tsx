"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function HealingInterviewPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={
          locale === "he"
            ? "הילינג סיני פרח הלוטוס – ראיון עם צחי שוחט"
            : "Chinese Healing Lotus Flower – Interview with Tzachi Shuhat"
        }
        subtitle={locale === "he" ? "מגזין חיים אחרים" : "Published in Another Life Magazine"}
        character="蓮"
        backgroundImage="/images/blog1-lg.jpg"
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
                {locale === "he" ? "הילינג" : "Healing"}
              </span>
              <span className="text-stone-400 text-sm">6.4.2019</span>
            </div>

            <div className="text-stone-warm text-sm leading-[2] space-y-6">
              {locale === "he" ? (
                <>
                  <p>
                    ראיון מרתק עם צחי שוחט, מייסד מרכז עגור לבן ומפתח שיטת הילינג סיני פרח הלוטוס, שפורסם במגזין &quot;חיים אחרים&quot;.
                  </p>
                  <p>
                    הראיון מדבר על הייחודיות של הטיפול הסיני המבוסס על הקשבה לצ&apos;י, ספונטניות וחיבור לידע קוסמי. צחי מספר על הדרך שהובילה אותו לפיתוח שיטת פרח הלוטוס – שיטת ריפוי אנרגטית ייחודית המבוססת על צ&apos;י קונג רפואי.
                  </p>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">מהו הילינג סיני?</h3>
                  <p>
                    הילינג סיני, או צ&apos;י קונג רפואי, הוא ענף רפואה אנרגטי עתיק שמקורו בתרבות הסינית. המטפל משתמש באינטואיציה ובידיים לזיהוי חוסר איזון אנרגטי בצ&apos;י של המטופל ומביא אותו להרמוניה וריפוי.
                  </p>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">שיטת פרח הלוטוס</h3>
                  <p>
                    השיטה מבוססת על הקשבה עמוקה לאנרגיית החיים של המטופל. המטפל מתחבר לזרימת הצ&apos;י ומאפשר לתהליך הריפוי להתרחש באופן ספונטני, תוך חיבור לידע קוסמי ולחוכמת הטבע.
                  </p>
                  <p>
                    הטיפול מתבצע על מיטה ומתואר כטיפול &quot;עמוק&quot; עם &quot;מגע נשמתי&quot; – חוויה שמגיעה מעבר לגוף הפיזי ונוגעת בשכבות הנפשיות והרוחניות של האדם.
                  </p>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">הפילוסופיה מאחורי הטיפול</h3>
                  <p>
                    לפי הגישה הסינית, כל בעיה גופנית היא ביטוי חיצוני לקושי פנימי-נפשי. הטיפול אינו מתמקד רק בסימפטומים אלא חותר להגיע למקור הפנימי של חוסר האיזון.
                  </p>
                  <p>
                    צחי מדגיש את חשיבות הספונטניות בטיפול – היכולת להיות נוכח ופתוח לתהליך מבלי לכפות עליו כיוון מוגדר מראש. כך מתאפשר ריפוי אמיתי ועמוק.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    A fascinating interview with Tzachi Shuhat, founder of White Crane Center and developer of the Chinese Healing Lotus Flower method, published in &quot;Another Life&quot; magazine.
                  </p>
                  <p>
                    The interview discusses the uniqueness of Chinese therapy based on listening to Chi, spontaneity, and cosmic knowledge connection. Tzachi shares the journey that led him to develop the Lotus Flower method – a unique energy healing system based on medical Chi Kung.
                  </p>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">What is Chinese Healing?</h3>
                  <p>
                    Chinese Healing, or Medical Chi Kung, is an ancient energy medicine branch originating from Chinese culture. The practitioner uses intuition and hands to detect energy imbalances in the patient&apos;s Chi and brings them to harmony and healing.
                  </p>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Lotus Flower Method</h3>
                  <p>
                    The method is based on deep listening to the patient&apos;s life energy. The practitioner connects to the Chi flow and allows the healing process to occur spontaneously, through connection to cosmic knowledge and nature&apos;s wisdom.
                  </p>
                  <p>
                    The treatment is performed on a bed and is described as &quot;deep&quot; with &quot;soul connection&quot; – an experience that reaches beyond the physical body and touches the emotional and spiritual layers of the person.
                  </p>
                  <h3 className="text-lg heading-calligraphy text-ink mt-10 mb-4">The Philosophy Behind the Treatment</h3>
                  <p>
                    According to the Chinese approach, every physical problem is an external expression of internal-emotional difficulty. The treatment doesn&apos;t focus only on symptoms but strives to reach the internal source of imbalance.
                  </p>
                  <p>
                    Tzachi emphasizes the importance of spontaneity in treatment – the ability to be present and open to the process without imposing a predetermined direction. This enables true and deep healing.
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
