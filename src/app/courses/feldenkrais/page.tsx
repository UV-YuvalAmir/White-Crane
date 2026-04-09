"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function FeldenkraisPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "שיעורי פלדנקרייז" : "Feldenkrais Classes"}
        subtitle={locale === "he" ? "מודעות דרך תנועה" : "Awareness Through Movement"}
        character="動"
        backgroundImage="/images/gallery3-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          <div className="text-stone-warm text-sm leading-[2] space-y-4">
            {locale === "he" ? (
              <>
                <p>פלדנקרייז היא שיטת תנועה שפיתח משה פלדנקרייז, שהיה פיזיקאי, מהנדס, וג&apos;ודוקא.</p>
                <p>השעורים מועברים בהנחיה, כשכל שעור הוא שונה, וכולל תהליך לימודי-חוויתי של חיפוש וגלוי, דרך תנועה עדינה. הלימוד דרך תנועה מבוסס על עקרונות נוירולוגיים, פיזיקליים וביומכניים.</p>
                <p>השעורים נקראים שעורי מודעות-דרך-תנועה משום שהתרגול העיקרי בשיעור הוא שכלול היכולת לחוש את הגוף.</p>
                <p>במהלך השעורים התלמידים לומדים לשכלל את התנועה של גופם כך שהתנועה תהיה קלה ונעימה יותר. התלמידים לומדים איך לאפשר יותר חופש בתנועת המפרקים ובשלד (גמישות), ולומדים לזהות תבניות תנועה הרגליות מגבילות.</p>
                <p>שכלול התנועה במימד הפיזי משכלל גם את היכולות במימד התחושתי, המחשבתי והנפשי.</p>
              </>
            ) : (
              <>
                <p>Feldenkrais is a movement method developed by Moshe Feldenkrais, who was a physicist, engineer, and judoka.</p>
                <p>Classes are guided, each one unique, involving an experiential learning process of exploration and discovery through gentle movement. Learning through movement is based on neurological, physical, and biomechanical principles.</p>
                <p>The classes are called Awareness Through Movement because the main practice is refining the ability to sense the body.</p>
                <p>During classes, students learn to refine their body movement so it becomes easier and more pleasant. Students learn to allow more freedom in joint and skeletal movement (flexibility), and to identify limiting habitual movement patterns.</p>
                <p>Refining movement in the physical dimension also refines abilities in the sensory, cognitive, and emotional dimensions.</p>
              </>
            )}
          </div>

          {/* Instructor */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "המורה" : "Instructor"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="text-stone-warm text-sm leading-[2] space-y-2">
              <p className="text-ink font-medium">{locale === "he" ? "ליאורה זינגר" : "Liora Zinger"}</p>
              <p>
                {locale === "he"
                  ? "הוכשרה במהלך שלוש שנים כתלמידתה של רותי בר, טריינרית בכירה. בעלת תואר ראשון ושני במדעי החיים, מלמדת ומטפלת בשיטת פלדנקרייז קבוצות ויחידים."
                  : "Trained for three years under Ruth Bar, a senior trainer. Holds Bachelor's and Master's degrees in Life Sciences, teaches and treats using Feldenkrais for groups and individuals."}
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-ink text-paper py-12 px-8 text-center space-y-4">
            <p className="heading-calligraphy text-lg text-paper/80">
              {locale === "he" ? "ימי ב' 18:30-19:30" : "Mondays 18:30-19:30"}
            </p>
            <p className="text-paper/50 text-sm">
              {locale === "he" ? "מרכז עגור לבן, הפטיש 11, הוד השרון" : "White Crane Center, HaPatish 11, Hod HaSharon"}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center py-10 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-6">
              {locale === "he" ? "למידע נוסף והרשמה" : "For information and registration"}
            </p>
            <div className="space-y-2">
              <a href="tel:0522778815" className="block text-seal heading-calligraphy text-base hover:text-seal-light transition-colors">
                {locale === "he" ? "ליאורה – 052-2778815" : "Liora – 052-2778815"}
              </a>
              <a href="tel:097416199" className="block text-seal heading-calligraphy text-base hover:text-seal-light transition-colors">09-7416199</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
