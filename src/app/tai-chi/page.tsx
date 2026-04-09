"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const principles = {
  he: [
    { title: "משלימים זה את זה", desc: "כל אחד מכיל את הזרע של השני" },
    { title: "מקיימים ומגדירים זה את זה", desc: "אף אחד אינו קיים ללא השני" },
    { title: "מאזנים ומבקרים זה את זה", desc: "עודף של אחד יוצר חוסר הרמוניה" },
    { title: "נולדים זה מזה", desc: "מחזור מתמשך של התמרה" },
    { title: "יחסיים זה לזה", desc: "ייעודי יין/יאנג תלויים בהקשר" },
    { title: "מתאחדים זה עם זה", desc: "האיחוד ביניהם יוצר צ'י" },
  ],
  en: [
    { title: "Complementary", desc: "Each contains the seed of the other" },
    { title: "Define each other", desc: "Neither exists without the other" },
    { title: "Balance & regulate", desc: "Excess of either creates disharmony" },
    { title: "Generate each other", desc: "Continuous cycle of transformation" },
    { title: "Relative", desc: "Yin/yang designations depend on context" },
    { title: "Unite", desc: "Their union creates Chi – life force" },
  ],
};

export default function TaiChiPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "טאי צ'י" : "Tai Chi"}
        subtitle={locale === "he" ? "הקצוות הגדולים, העילאיים" : "The Supreme Extremes"}
        character="極"
        backgroundImage="/images/taichi-yinyang.png"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Characters */}
          <div className="text-center">
            <div className="flex justify-center gap-8 sm:gap-16 mb-6">
              <div>
                <span className="text-7xl text-ink/10 font-serif">太</span>
                <p className="mt-2 text-xs text-stone-warm">{locale === "he" ? "טאי = גדול" : "Tai = Great"}</p>
              </div>
              <div>
                <span className="text-7xl text-ink/10 font-serif">極</span>
                <p className="mt-2 text-xs text-stone-warm">{locale === "he" ? "צ'י = עילאי" : "Chi = Ultimate"}</p>
              </div>
            </div>
          </div>

          <div className="text-stone-warm text-sm leading-[2] space-y-4">
            {locale === "he" ? (
              <p>טאי צ&apos;י הוא רעיון קוסמי בפילוסופיה הסינית – &quot;הקצוות הגדולים, העילאיים&quot; – יין ויאנג מוחלטים, שני הכוחות והאינטראקציה ביניהם השולטת בטבע.</p>
            ) : (
              <p>Tai Chi is a cosmic concept in Chinese philosophy – &quot;the supreme extremes&quot; – absolute Yin and Yang, the two forces and their interaction governing nature.</p>
            )}
          </div>

          <Image src="/images/taichi-yinyang.png" alt="Yin Yang" width={300} height={300} className="mx-auto w-48 h-auto opacity-80 mb-10" style={{ mixBlendMode: "multiply" }} />

          {/* Yin Yang visual */}
          <div className="grid grid-cols-2 gap-px">
            <div className="bg-ink text-paper p-10 text-center">
              <h3 className="heading-calligraphy text-lg mb-3">{locale === "he" ? "יין" : "Yin"}</h3>
              <p className="text-xs text-paper/50 leading-relaxed">
                {locale === "he"
                  ? "שחור · חושך · רכות · לילה · חורף · ארץ"
                  : "Black · Darkness · Softness · Night · Winter · Earth"}
              </p>
            </div>
            <div className="bg-paper-light text-ink p-10 text-center border border-ink/5">
              <h3 className="heading-calligraphy text-lg mb-3">{locale === "he" ? "יאנג" : "Yang"}</h3>
              <p className="text-xs text-stone-warm leading-relaxed">
                {locale === "he"
                  ? "לבן · אור · קושי · יום · קיץ · שמים"
                  : "White · Light · Hardness · Day · Summer · Heaven"}
              </p>
            </div>
          </div>

          {/* Principles */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4 text-center">
              {locale === "he" ? "שש תכונות היחס" : "Six Characteristics"}
            </h2>
            <div className="brush-stroke mx-auto mb-10" />

            <div className="space-y-px">
              {principles[locale].map((p, i) => (
                <div key={i} className="flex items-baseline gap-6 py-4 border-b border-ink/5">
                  <span className="text-ink/10 heading-calligraphy text-2xl w-8 flex-shrink-0 text-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm">{p.title}</h3>
                    <p className="text-xs text-stone-warm mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practice */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מפילוסופיה לתרגול" : "From Philosophy to Practice"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="space-y-4 text-stone-warm text-sm leading-[2]">
              {locale === "he" ? (
                <>
                  <p><em>רכות בשילוב עם חיזוק פנימי</em> – &quot;הכותנה העוטפת את המחט.&quot;</p>
                  <p><em>זרימה</em> – טכניקות נולדות באופן טבעי אחת מהשנייה, ויוצרות המשכיות כמו מעגל הטאי צ&apos;י.</p>
                  <p><em>חיבור לטבע</em> – התרגול מספק כלים להתחבר לטבע דרך נשימה נכונה, טכניקת גוף וכוונה.</p>
                  <p><em>אי-התנגדות</em> – לא להתנגד לכוח אלא להפנותו דרך יישור וכוונה יציבה.</p>
                </>
              ) : (
                <>
                  <p><em>Softness combined with internal strengthening</em> – &quot;cotton wrapping a needle.&quot;</p>
                  <p><em>Flow</em> – techniques naturally generate from one to the next, creating continuity like the Tai Chi circle.</p>
                  <p><em>Connection to Nature</em> – the practice provides tools to connect with nature through proper breathing and intention.</p>
                  <p><em>Non-Resistance</em> – not to resist force but redirect it through alignment and stable intention.</p>
                </>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-10 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-6">
              {locale === "he" ? "אתם מוזמנים לשיעור נסיון ללא תשלום" : "Free trial class available"}
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
