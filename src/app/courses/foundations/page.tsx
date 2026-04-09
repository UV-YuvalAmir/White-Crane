"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function FoundationsCoursePage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "קורס הילינג סיני – יסודות" : "Chinese Healing – Foundations Course"}
        subtitle={locale === "he" ? "צ'י קונג רפואי" : "Medical Chi Kung"}
        character="基"
        backgroundImage="/images/gallery2-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Intro */}
          <div className="text-stone-warm text-sm leading-[2] space-y-4">
            {locale === "he" ? (
              <>
                <p>הסינים העתיקים הבינו את אנרגיית החיים המקיימת את גופנו ואת היקום כולו – הצ&apos;י. הם ריפאו באמצעות עבודה אתו את כל רבדי הקיום – גוף, אנרגיה, נפש ונשמה.</p>
                <p>ההילינג הסיני, או בשמו המקורי צ&apos;י קונג רפואי, הוא המורשת של הבנה ועבודה עתיקת יומין זאת. זהו תחום מיוחד המביא לריפוי שלם של האדם, להרחבת המודעות, לחיים טובים ולצמיחה רוחנית.</p>
                <p>קורס זה מביא את יסודות ההילינג הסיני, ההבנה והפרקטיקה שלו, באופן מעשי, פשוט ונגיש. הוא קורס חוויתי, מלא תרגול עצמי ובזוגות המאפשר חיבור מיידי ויומיומי לעבודה עם אנרגיית הצ&apos;י.</p>
                <p><strong>אין צורך בידע מוקדם או ניסיון טיפולי בכדי להצטרף.</strong></p>
              </>
            ) : (
              <>
                <p>The ancient Chinese understood the life energy that sustains our bodies and the entire universe – the Chi. They healed through working with it across all levels of existence – body, energy, mind, and soul.</p>
                <p>Chinese Healing, or Medical Chi Kung, is the legacy of this ancient understanding. It brings complete healing, expanded awareness, better life, and spiritual growth.</p>
                <p>This course brings the foundations of Chinese Healing in a practical, simple, and accessible way. An experiential course full of self and pair practice enabling immediate daily connection with Chi energy.</p>
                <p><strong>No prior knowledge or therapeutic experience required.</strong></p>
              </>
            )}
          </div>

          {/* Who is it for */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "למי מתאים הקורס?" : "Who Is It For?"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>לאנשים שמרגישים ש&quot;יש להם אנרגיה בידיים&quot;, חווים תחושות אנרגטיות ואוהבים לעזור לסביבתם עם היכולות הטבעיות שלהם.</p>
                  <p>למטפלים מכל התחומים בעלי זיקה לעבודה אנרגטית, המעוניינים להעמיק את ההבנה והחיבור האנרגטיים.</p>
                  <p>למי שרוצים לעבור תהליך הכשרת מטפלים מעמיק בקורס הילינג סיני פרח הלוטוס ומעוניינים קודם לטעום ולהכיר.</p>
                </>
              ) : (
                <>
                  <p>For people who feel they &quot;have energy in their hands&quot;, experience energetic sensations, and enjoy helping others with their natural abilities.</p>
                  <p>For practitioners from all fields with an affinity for energy work, looking to deepen understanding and energetic connection.</p>
                  <p>For those wanting to experience the Lotus Flower training path and taste the approach first.</p>
                </>
              )}
            </div>
          </div>

          {/* What happens */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מה קורה בקורס?" : "What Happens in the Course?"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="space-y-6 text-stone-warm text-sm leading-[2]">
              {locale === "he" ? (
                <>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm mb-2">מושגים פילוסופיים בסיסיים</h3>
                    <p>הדאו, וו ג&apos;י – הריק/האינסוף, היין והיאנג, הצ&apos;י, הדאן טיין, הרמוניה ודיסהרמוניה</p>
                  </div>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm mb-2">תרגול צ&apos;י קונג</h3>
                    <p>סדרת חמשת היסודות היוצרת חיבור בין הגוף הפיזי לאנרגיה הפנימית, צ&apos;י קונג עמידת עמוד עם ארבע טכניקות להנעת הצ&apos;י וחיזוק האנרגיה בידיים</p>
                  </div>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm mb-2">6 נקודות וערוצים אנרגטיים</h3>
                    <p>לאו גונג – ארמון העבודה, צ&apos;ונג מאי – הערוץ המרכזי, המעגל הקוסמי הקטן, החווי יין, המינג מנג – שער החיים, היונג צ&apos;ואנג – המעיין המבעבע</p>
                  </div>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm mb-2">שש טכניקות ריפוי יסודיות</h3>
                    <p>הנעה, משיכה, דחיסה, פיזור, סיבוב, מיקוד</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm mb-2">Basic Philosophical Concepts</h3>
                    <p>The Dao, Wu Ji – void/infinity, Yin and Yang, Chi, Dan Tian, harmony and disharmony</p>
                  </div>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm mb-2">Chi Kung Practice</h3>
                    <p>Five Elements series connecting physical body to internal energy, Standing Pole Chi Kung with four techniques for moving Chi and strengthening hand energy</p>
                  </div>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm mb-2">6 Energy Points and Channels</h3>
                    <p>Lao Gong – Palace of Labor, Chong Mai – Central Channel, Small Cosmic Cycle, Hui Yin, Ming Men – Gate of Life, Yong Quan – Bubbling Spring</p>
                  </div>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm mb-2">Six Fundamental Healing Techniques</h3>
                    <p>Moving, Pulling, Compressing, Dispersing, Rotating, Focusing</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Session structure */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מבנה המפגשים" : "Session Structure"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/5">
              {(locale === "he"
                ? ["תרגול צ'י קונג – 60 דק'", "לימוד טכניקה ותרגול עצמי – 20 דק'", "תרגול טכניקת הריפוי בזוגות – 40 דק'", "תאוריה ודיון – 45 דק'"]
                : ["Chi Kung practice – 60 min", "Technique learning & self practice – 20 min", "Pair healing technique practice – 40 min", "Theory & discussion – 45 min"]
              ).map((item, i) => (
                <div key={i} className="bg-paper py-4 px-5 text-sm text-stone-warm">{item}</div>
              ))}
            </div>
            <p className="text-stone-warm text-sm leading-[2] mt-6">
              {locale === "he" ? "הקורס אורך שמונה מפגשים של שלוש שעות מלאות כל אחד." : "The course spans eight sessions of three full hours each."}
            </p>
          </div>

          {/* Details */}
          <div className="bg-ink text-paper py-12 px-8 text-center space-y-4">
            <p className="heading-calligraphy text-lg text-paper/80">
              {locale === "he" ? "מרכז עגור לבן, הפטיש 11, הוד השרון" : "White Crane Center, HaPatish 11, Hod HaSharon"}
            </p>
            <p className="text-paper/50 text-sm">
              {locale === "he" ? "עלות: 1,300 ₪ | ניתן לחלק עד 4 תשלומים" : "Cost: 1,300 NIS | Up to 4 payments available"}
            </p>
          </div>

          {/* Note */}
          <div className="text-center text-stone-warm text-xs leading-relaxed max-w-lg mx-auto">
            {locale === "he"
              ? "משתתפים שיחליטו להמשיך לאחר קורס יסודות להכשרה המלאה בהילינג סיני פרח הלוטוס, יוקזזו להם 800 ₪ מהמחיר המלא של הקורס."
              : "Participants who decide to continue to the full Lotus Flower training after the Foundations course will receive an 800 NIS discount on the full course price."}
          </div>

          {/* CTA */}
          <div className="text-center py-10 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-6">
              {locale === "he" ? "למידע נוסף והרשמה" : "For information and registration"}
            </p>
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">09-7416199</a>
          </div>
        </div>
      </section>
    </>
  );
}
