"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function SifuPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "סיפו צחי שוחט" : "Sifu Tzachi Shuhat"}
        subtitle={locale === "he" ? "אומן לחימה ומרפא" : "Martial Arts Master & Healer"}
        character="師"
        backgroundImage="/images/hero-main.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3 flex-shrink-0">
              <Image
                src="/images/sifu-with-master.jpg"
                alt="Sifu Tzachi Shuhat with Master in Hong Kong"
                width={188}
                height={300}
                className="w-full h-auto grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="text-stone-warm text-sm leading-[2] space-y-4">
              {locale === "he" ? (
                <>
                  <p>סיפו (מורה) צחי שוחט – אומן לחימה ומרפא. צחי החל ללמוד אומנויות לחימה בשנת 1982 בגיל 10.</p>
                  <p>בשנת 1997 (בגיל 24), התמקד בבית הספר הטיבטי העתיק לעגור לבן (Pak Hok Pai). למד ישירות תחת המאסטר טון פאי צ&apos;אן בניו יורק.</p>
                  <p>בשנת 1998, פתח את &quot;בית הספר עגור לבן ישראל&quot; בהוד השרון.</p>
                  <p>בשנת 2002 למד תחת המאסטר צ&apos;אנג קוואוק וואה בהונג קונג. בשנת 2004 השלים את טקס הבאי סי, והפך לתלמיד האישי של המאסטר.</p>
                </>
              ) : (
                <>
                  <p>Sifu (Master) Tzachi Shuhat – martial arts master and healer. Tzachi began studying martial arts in 1982 at age 10.</p>
                  <p>In 1997 (age 24), he focused on the ancient Tibetan White Crane school (Pak Hok Pai). He studied directly under Master Ton Fai Chan in New York.</p>
                  <p>In 1998, he opened &quot;White Crane School Israel&quot; in Hod HaSharon.</p>
                  <p>In 2002 he studied under Master Cheung Kwok Wah in Hong Kong. In 2004 he completed the Bai Si ceremony, becoming the master&apos;s personal disciple.</p>
                </>
              )}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "השכלה" : "Education"}
            </h2>
            <div className="brush-stroke mb-8" />
            <p className="text-stone-warm text-sm leading-[2]">
              {locale === "he"
                ? "בין השנים 1995-1999, למד צחי שוחט לתואר ראשון באוניברסיטה הפתוחה בתחום מדעי המחשב ומנהל עסקים."
                : "Between 1995-1999, Tzachi Shuhat studied for a Bachelor's degree at the Open University in computer science and business management."}
            </p>
          </div>

          {/* Healing */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "תחומי ריפוי" : "Healing Specializations"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/5">
              {(locale === "he"
                ? ["צ'י קונג ריפוי", "הילינג סיני – פרח הלוטוס", "אן-מו (עיסוי אורטופדי סיני)", "דיקור יבש אורטופדי"]
                : ["Chi Kung Healing", "Chinese Healing – Lotus Flower", "An-Mo (Chinese Orthopedic Massage)", "Orthopedic Dry Needling"]
              ).map((item, i) => (
                <div key={i} className="bg-paper py-4 px-5 text-sm text-stone-warm">{item}</div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-3 gap-px bg-ink/5">
            {["/images/sifu-pose1.jpg", "/images/sifu-pose2.jpg", "/images/hero-main.jpg"].map((src, i) => (
              <div key={i} className="bg-paper">
                <Image src={src} alt="Sifu Tzachi" width={400} height={500} className="w-full h-auto grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" style={{ mixBlendMode: "multiply" }} />
              </div>
            ))}
          </div>

          <div className="text-center py-10 border-t border-b border-ink/5">
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">09-7416199</a>
          </div>
        </div>
      </section>
    </>
  );
}
