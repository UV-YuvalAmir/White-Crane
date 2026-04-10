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
                  <p>מרכז עגור לבן הוא מרכז ללימודי אומנויות הלחימה והבריאות הסיניות, לטיפולים, לסדנאות ולחוגים בתחום המודעות – גוף נפש. מטרתו – להיות בית. להציע לכם מגוון פעילויות ייחודיות ומעשירות, באמצעותן תוכלו לטפח את גופכם, נפשכם, בריאותכם וחייכם.</p>
                  <p>מגיעים אליו ילדים החל מגיל 9 ללימוד קונג פו ומבוגרים עד מעל גיל 80, ללימודי טאי צ&apos;י וצ&apos;י קונג.</p>
                </>
              ) : (
                <>
                  <p>The White Crane Center is a center for the study of Chinese martial arts and health, treatments, workshops and classes in the field of body-mind awareness. Its purpose is to be a home -- to offer a variety of unique and enriching activities through which you can nurture your body, soul, health and life.</p>
                  <p>Children from age 9 come to study Kung Fu, and adults up to over 80 study Tai Chi and Chi Kung.</p>
                </>
              )}
            </div>
          </div>

          {/* History */}
          <div className="relative">
            <div className="watermark -top-10 right-0">歷</div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4 relative z-10">
              {locale === "he" ? "ההיסטוריה" : "History"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="space-y-4 text-stone-warm text-sm leading-[2]">
              {locale === "he" ? (
                <>
                  <p>בשנת 1998, סיפו צחי שוחט פתח את &quot;בית ספר לקונג פו עגור לבן ישראל&quot; בהוד השרון. בית הספר המשיך את המסורת העתיקה של נזירים טיבטים ומורים סיניים שטיפחו אומנויות לחימה, פילוסופיה, רפואה הוליסטית ופרקטיקות רוחניות.</p>
                  <p>בשנת 2017 נפתח מרכז עגור לבן במתכונתו הנוכחית – כמרכז הוליסטי המציע מגוון פעילויות רחב: קונג פו עגור לבן, טאי צ&apos;י, צ&apos;י קונג ומדיטציה, הילינג סיני – פרח הלוטוס, ריקוד האריה הסיני, טיפולי אן-מו ודיקור יבש, פלדנקרייז וויג&apos;נאנה יוגה.</p>
                </>
              ) : (
                <>
                  <p>In 1998, Sifu Tzachi Shuhat opened the &quot;White Crane Kung Fu School Israel&quot; in Hod HaSharon. The school continued the ancient tradition of Tibetan monks and Chinese teachers who cultivated martial arts, philosophy, holistic medicine and spiritual practices.</p>
                  <p>In 2017, the White Crane Center opened in its current format -- as a holistic center offering a wide range of activities: White Crane Kung Fu, Tai Chi, Chi Kung and Meditation, Chinese Healing -- Lotus Flower, Chinese Lion Dance, An-Mo and Dry Needling treatments, Feldenkrais, and Vijnana Yoga.</p>
                </>
              )}
            </div>
          </div>

          {/* Services */}
          <div className="relative">
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מה תמצאו אצלנו" : "What You Will Find"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-ink/5">
              {(locale === "he"
                ? ["קונג פו", "טאי צ'י", "צ'י קונג ומדיטציה", "הילינג סיני – פרח הלוטוס", "ריקוד האריה", "ויג'נאנה יוגה", "פלדנקרייז", "דיקור יבש אורטופדי", "אן-מו – עיסוי סיני"]
                : ["Kung Fu", "Tai Chi", "Chi Kung & Meditation", "Chinese Healing – Lotus Flower", "Lion Dance", "Vijnana Yoga", "Feldenkrais", "Orthopedic Dry Needling", "An-Mo – Chinese Massage"]
              ).map((service, i) => (
                <div key={i} className="bg-paper py-4 px-5 text-sm text-stone-warm">{service}</div>
              ))}
            </div>
          </div>

          {/* Center Gallery */}
          <div className="relative">
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "המרכז שלנו" : "Our Center"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <Image
                  key={n}
                  src={`/images/center-gallery${n}.jpg`}
                  alt={locale === "he" ? `מרכז עגור לבן ${n}` : `White Crane Center ${n}`}
                  width={400}
                  height={300}
                  className="w-full h-auto grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  style={{ mixBlendMode: "multiply" }}
                />
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-ink/[0.02] p-8">
            <div className="space-y-4 text-stone-warm text-sm leading-[2]">
              {locale === "he" ? (
                <>
                  <p>המרכז כולל אולם תרגול מרווח וקליניקה נעימה לטיפולים. ניתן לשכור את מרחב התרגול ואת הקליניקה לסדנאות, הרצאות וטיפולים.</p>
                  <p>שיעור ניסיון ראשון חינם – בואו להתנסות!</p>
                </>
              ) : (
                <>
                  <p>The center includes a spacious training hall and a pleasant treatment clinic. The training space and clinic are available for rent for workshops, lectures and treatments.</p>
                  <p>First trial class is free -- come try it out!</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
