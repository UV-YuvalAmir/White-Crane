"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function KungFuPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "קונג פו" : "Kung Fu"}
        subtitle={
          locale === "he"
            ? "לימודי קונג פו מקצועיים במרכז עגור לבן"
            : "Professional Kung Fu studies at White Crane Center"
        }
        character="武"
        backgroundImage="/images/kungfu-hands.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Etymology */}
          <div className="text-center">
            <div className="flex justify-center gap-16 mb-10">
              <div>
                <span className="text-7xl text-ink/10 font-serif">功</span>
                <p className="mt-2 text-xs text-stone-warm tracking-wide">
                  {locale === "he" ? "קונג" : "Kung"}
                </p>
              </div>
              <div>
                <span className="text-7xl text-ink/10 font-serif">夫</span>
                <p className="mt-2 text-xs text-stone-warm tracking-wide">
                  {locale === "he" ? "פו" : "Fu"}
                </p>
              </div>
            </div>

            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "משמעות המושג" : "The Meaning"}
            </h2>
            <div className="brush-stroke mx-auto mb-10" />

            <Image src="/images/kungfu-hands.jpg" alt="Kung Fu" width={800} height={600} className="w-full h-auto grayscale contrast-[1.1] opacity-90 mb-10 hover:grayscale-0 hover:opacity-100 transition-all duration-700" style={{ mixBlendMode: "multiply" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/5">
            <div className="bg-paper p-8 text-center">
              <span className="text-3xl text-seal font-serif">功</span>
              <h3 className="heading-calligraphy text-ink mt-3 mb-2">
                {locale === "he" ? "קונג" : "Kung"}
              </h3>
              <p className="text-xs text-stone-warm leading-relaxed">
                {locale === "he"
                  ? "עשייה מתמשכת, עמל, עבודה, מיומנות, הצטיינות, יעילות, תפקוד, מאמץ"
                  : "Doing over time, labor, work, skill, excellence, efficiency, function, effort"}
              </p>
            </div>
            <div className="bg-paper p-8 text-center">
              <span className="text-3xl text-bamboo font-serif">夫</span>
              <h3 className="heading-calligraphy text-ink mt-3 mb-2">
                {locale === "he" ? "פו" : "Fu"}
              </h3>
              <p className="text-xs text-stone-warm leading-relaxed">
                {locale === "he"
                  ? "אדם חכם, נאור, פילוסוף"
                  : "A person who is wise, enlightened, philosopher"}
              </p>
            </div>
          </div>

          <div className="text-stone-warm text-sm leading-[2] space-y-4">
            {locale === "he" ? (
              <>
                <p>יחד, המילים מתארות &quot;אדם חכם שעמל קשה ולאורך זמן כדי להגיע למיומנות במה שהוא עושה.&quot;</p>
                <p>הקשר לאומנויות לחימה נובע מהשימוש הלשוני הסיני שבו מילים מתארות גם את משמעותן המילולית וגם את הרעיונות שהן מגלמות. מתרגלי אומנויות לחימה משקיעים מאמץ רב לפתח מיומנות, ודרך מאמץ זה, לומדים הכרה עצמית ותהליכים טבעיים.</p>
                <p>לפיכך, מי שמתרגל אומנויות לחימה של עגור לבן מבצע &quot;קונג פו עגור לבן.&quot; עד המאה העשרים, &quot;קונג פו&quot; הפך לשם נרדף לאומנויות לחימה סיניות בכלל.</p>
              </>
            ) : (
              <>
                <p>Combined, the words describe &quot;a wise person who labors long and hard to become skillful at what they do.&quot;</p>
                <p>The connection to martial arts stems from Chinese linguistic usage where words describe both their literal meaning and the ideas they embody. Practitioners invest significant effort to develop skill, and through this effort, learn self-knowledge and natural processes.</p>
                <p>By the twentieth century, as Chinese martial arts became known in the West, &quot;Kung Fu&quot; became synonymous with Chinese martial arts generally.</p>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="text-center py-10 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-2">
              {locale === "he" ? "אתם מוזמנים לשיעור נסיון ללא תשלום" : "You are welcome to a free trial class"}
            </p>
            <p className="text-ink/30 text-xs mb-6">
              {locale === "he" ? "אין צורך בידע מוקדם" : "No prior knowledge required"}
            </p>
            <a href="tel:097416199" className="text-seal heading-calligraphy text-lg hover:text-seal-light transition-colors">
              09-7416199
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
