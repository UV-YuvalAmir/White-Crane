"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function YogaPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "ויג'נאנה יוגה" : "Vijnana Yoga"}
        subtitle={locale === "he" ? "יוגה של מודעות" : "Yoga of Awareness"}
        character="瑜"
        backgroundImage="/images/gallery3-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          <div className="text-stone-warm text-sm leading-[2] space-y-4">
            {locale === "he" ? (
              <>
                <p>ויג&apos;נאנה יוגה ממשיכה את המורשת היוגית של שרי קרישנהמצ&apos;ריה. תרגולה מבוסס על שבעת העקרונות החיוניים, המנחים את המתרגל לחוויה עמוקה ומדויקת של היוגה.</p>
                <p>שבעת העקרונות הם: הרפיית הגוף, השקטת התודעה, כוונה, השתרשות, חיבור, נשימה והתארכות. עקרונות אלו מלווים כל תנוחה וכל תנועה, ומאפשרים תרגול בטוח, עמוק ומדויק.</p>
                <p>השיעורים מתאימים לכל הרמות – ממתחילים ועד מתרגלים מתקדמים. כל תלמיד מונחה באופן אישי בהתאם ליכולותיו ולצרכיו.</p>
                <p>התרגול משלב תנוחות (אסאנות), תרגילי נשימה (פראנאיאמה), ומדיטציה, ומביא לשיפור בגמישות, כוח, יציבה ואיזון – גופני ונפשי כאחד.</p>
              </>
            ) : (
              <>
                <p>Vijnana Yoga continues the yogic legacy of Sri Krishnamacharya. Its practice is based on seven vital principles that guide the practitioner to a deep and precise experience of yoga.</p>
                <p>The seven principles are: relaxation of the body, quieting the mind, intention, rooting, connection, breath, and elongation. These principles accompany every posture and movement, enabling safe, deep and precise practice.</p>
                <p>Classes are suitable for all levels -- from beginners to advanced practitioners. Each student is guided personally according to their abilities and needs.</p>
                <p>The practice combines postures (asanas), breathing exercises (pranayama), and meditation, leading to improvement in flexibility, strength, posture and balance -- both physical and mental.</p>
              </>
            )}
          </div>

          {/* Seven Principles */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "שבעת העקרונות" : "The Seven Principles"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-ink/5">
              {(locale === "he"
                ? ["הרפיית הגוף", "השקטת התודעה", "כוונה", "השתרשות", "חיבור", "נשימה", "התארכות"]
                : ["Relaxation", "Quieting the Mind", "Intention", "Rooting", "Connection", "Breath", "Elongation"]
              ).map((principle, i) => (
                <div key={i} className="bg-paper py-4 px-5 text-sm text-stone-warm">{principle}</div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-ink text-paper py-12 px-8 text-center space-y-4">
            <p className="heading-calligraphy text-lg text-paper/80">
              {locale === "he" ? "מרכז עגור לבן, הפטיש 11, הוד השרון" : "White Crane Center, HaPatish 11, Hod HaSharon"}
            </p>
            <p className="text-paper/50 text-sm">
              {locale === "he" ? "למידע על מועדי השיעורים – צרו קשר" : "For class schedule information -- contact us"}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center py-10 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-6">
              {locale === "he" ? "למידע נוסף והרשמה" : "For information and registration"}
            </p>
            <a href="tel:097416199" className="block text-seal heading-calligraphy text-base hover:text-seal-light transition-colors">09-7416199</a>
          </div>
        </div>
      </section>
    </>
  );
}
