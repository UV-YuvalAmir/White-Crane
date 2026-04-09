"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "אודות מרכז עגור לבן" : "About White Crane Center"}
        subtitle={locale === "he" ? "מסורת · מקצועיות · אומנות" : "Tradition · Professionalism · Art"}
        character="白"
        backgroundImage="/images/gallery1-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Sifu */}
          <div className="relative">
            <div className="watermark -top-10 right-0">師</div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4 relative z-10">
              {locale === "he" ? "סיפו צחי שוחט" : "Sifu Tzachi Shuhat"}
            </h2>
            <div className="brush-stroke brush-stroke-red mb-8" />

            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src="/images/gallery1-lg.jpg"
                  alt="Sifu Tzachi Shuhat"
                  width={300}
                  height={400}
                  className="w-full h-auto grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
              <div className="space-y-4 text-stone-warm text-sm leading-[2]">
                {locale === "he" ? (
                  <>
                    <p>סיפו צחי שוחט הוא מייסד ומנהל מרכז עגור לבן. מזה למעלה משלושים שנה הוא עוסק באומנויות לחימה סיניות, טיפול אנרגטי והוראה.</p>
                    <p>צחי למד את שיטת פאק הוק פאי מפי מורים בכירים והוסמך כסיפו – מורה ראשי. הוא משלב בהוראתו את כל ענפי השיטה: קונג פו, טאי צ&apos;י, צ&apos;י קונג, מדיטציה וריפוי אנרגטי.</p>
                    <p>לצד ההוראה, צחי מטפל בשיטת הילינג סיני &quot;פרח הלוטוס&quot; – שיטת ריפוי אנרגטית ייחודית שפיתח, המבוססת על צ&apos;י קונג רפואי ועל הקשבה עמוקה לאנרגיית החיים.</p>
                  </>
                ) : (
                  <>
                    <p>Sifu Tzachi Shuhat is the founder and director of the White Crane Center. For over thirty years, he has been practicing Chinese martial arts, energy healing, and teaching.</p>
                    <p>Tzachi studied the Pak Hok Pai system under senior masters and was certified as a Sifu. His teaching combines all branches: Kung Fu, Tai Chi, Chi Kung, meditation, and energy healing.</p>
                    <p>Alongside teaching, Tzachi practices Chinese Healing &quot;Lotus Flower&quot; – a unique energy healing method he developed, based on medical Chi Kung and deep listening to life energy.</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* System */}
          <div className="relative">
            <div className="watermark -top-10 left-0">法</div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4 relative z-10">
              {locale === "he" ? "השיטה" : "The System"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="space-y-4 text-stone-warm text-sm leading-[2]">
              {locale === "he" ? (
                <>
                  <p>שיטת פאק הוק פאי (Pak Hok Pai) היא שיטת אומנויות לחימה טיבטית-סינית שמקורה במאה ה-15. השיטה פותחה על ידי הלאמא הטיבטי אור-דט-טו ומשלבת טכניקות לחימה דינמיות עם עבודה פנימית עמוקה.</p>
                  <p>השם &quot;עגור לבן&quot; מסמל את תנועות העגור – חיניות, מדויקות ואלגנטיות. השיטה כוללת ענפים רבים: קונג פו, טאי צ&apos;י, צ&apos;י קונג, מדיטציה, נשקים מסורתיים וריקוד האריה.</p>
                </>
              ) : (
                <>
                  <p>Pak Hok Pai is a Tibetan-Chinese martial arts system originating from the 15th century. It was developed by Tibetan Lama Or-det-tu and combines dynamic combat techniques with deep internal work.</p>
                  <p>The name &quot;White Crane&quot; symbolizes crane movements – graceful, precise, and elegant. The system includes many branches: Kung Fu, Tai Chi, Chi Kung, meditation, traditional weapons, and Lion Dance.</p>
                </>
              )}
            </div>
          </div>

          {/* Center */}
          <div className="relative">
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "המרכז" : "The Center"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="space-y-4 text-stone-warm text-sm leading-[2]">
              {locale === "he" ? (
                <>
                  <p>מרכז עגור לבן ממוקם בהוד השרון ומציע מגוון רחב של חוגים, קורסים וסדנאות באומנויות לחימה סיניות, צ&apos;י קונג, מדיטציה וטיפולים אנרגטיים.</p>
                  <p>המרכז מהווה בית לקהילה רחבה של תלמידים ומתרגלים, המחוברים למסורת הסינית העתיקה ולערכים של כבוד, התמדה והתפתחות אישית.</p>
                </>
              ) : (
                <>
                  <p>White Crane Center is located in Hod HaSharon and offers a wide range of classes, courses, and workshops in Chinese martial arts, Chi Kung, meditation, and energy treatments.</p>
                  <p>The center is home to a broad community of students and practitioners, connected to the ancient Chinese tradition and the values of respect, perseverance, and personal development.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
