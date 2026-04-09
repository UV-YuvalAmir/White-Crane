"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const events = {
  he: ["מסיבות פורים", "כנסים", "חתונות", "השקות מוצרים", "ימי הולדת", "פסטיבלים", "פתיחת עסקים"],
  en: ["Purim parties", "Conferences", "Weddings", "Product launches", "Birthdays", "Festivals", "Business openings"],
};

export default function LionDancePage() {
  const { locale } = useLocale();
  const [tab, setTab] = useState<"dance" | "tradition">("dance");

  return (
    <>
      <PageHero
        title={locale === "he" ? "ריקוד האריה" : "Lion Dance"}
        subtitle={locale === "he" ? "אטרקציה מרהיבה לאירועים" : "A spectacular attraction for events"}
        character="獅"
        backgroundImage="/images/gallery6-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-1 mb-16">
            <button
              onClick={() => setTab("dance")}
              className={`px-6 py-2.5 text-sm heading-calligraphy transition-colors ${tab === "dance" ? "bg-seal text-paper" : "border border-ink/10 text-ink-faded hover:text-ink"}`}
            >
              {locale === "he" ? "ריקוד האריה" : "Lion Dance"}
            </button>
            <button
              onClick={() => setTab("tradition")}
              className={`px-6 py-2.5 text-sm heading-calligraphy transition-colors ${tab === "tradition" ? "bg-seal text-paper" : "border border-ink/10 text-ink-faded hover:text-ink"}`}
            >
              {locale === "he" ? "מסורת ריקוד האריה" : "Lion Dance Tradition"}
            </button>
          </div>

          {tab === "dance" ? (
            <div className="space-y-20">
              {/* Title with characters */}
              <div className="text-center">
                <h2 className="text-xl heading-calligraphy text-seal mb-6">
                  <span className="text-seal/30 font-serif">舞</span>
                  {" "}
                  {locale === "he" ? "ריקוד האריה הסיני - אטרקציה מרהיבה לאירועים" : "Chinese Lion Dance – A Spectacular Event Attraction"}
                  {" "}
                  <span className="text-seal/30 font-serif">狮</span>
                </h2>
              </div>

              {/* Lion image */}
              <Image
                src="/images/lion-dance.jpg"
                alt={locale === "he" ? "ריקוד האריה הסיני" : "Chinese Lion Dance"}
                width={800}
                height={600}
                className="w-full h-auto hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />

              <div className="text-center text-stone-warm text-sm leading-[2] max-w-xl mx-auto space-y-4">
                {locale === "he" ? (
                  <>
                    <p>רוצים אטרקציה ייחודית וססגונית באירוע שלכם? כזו שיש לה משמעות טקסית וגם יוצרת אווירת אושר גדול?</p>
                    <p>מרכז עגור לבן יבצע עבורכם את ריקוד האריה הסיני.</p>
                    <p>ריקוד האריה מביא עימו שמחה גדולה, מזל טוב ושפע, ומגרש את הרוחות הרעות. הוא טקסי, ססגוני, מרגש ומשלהב.</p>
                  </>
                ) : (
                  <>
                    <p>Want a unique and colorful attraction at your event? One with ritual significance that creates an atmosphere of great happiness?</p>
                    <p>White Crane Center will perform the Chinese Lion Dance for you.</p>
                    <p>The Lion Dance brings great joy, good fortune and abundance, and drives away evil spirits. It is ritualistic, colorful, exciting, and exhilarating.</p>
                  </>
                )}
              </div>

              <div className="text-center">
                <h2 className="text-xl heading-calligraphy text-ink mb-4">
                  {locale === "he" ? "מתאים לאירועים" : "Suitable for Events"}
                </h2>
                <div className="brush-stroke mx-auto mb-10" />
                <div className="flex flex-wrap justify-center gap-3">
                  {events[locale].map((e, i) => (
                    <span key={i} className="px-4 py-2 border border-ink/8 text-xs text-stone-warm">
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* Video */}
              <div className="border border-ink/5 overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/GxGMRIclZA4"
                    title="Lion Dance"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="bg-ink text-paper text-center py-16 px-8">
                <p className="heading-calligraphy text-lg text-paper/80 mb-8">
                  {locale === "he" ? "לקבלת הצעת מחיר המותאמת לכם" : "Get a customized quote"}
                </p>
                <a href="tel:097416199" className="text-seal-light heading-calligraphy text-xl hover:text-paper transition-colors">
                  09-7416199
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-20">
              <div className="text-stone-warm text-sm leading-[2] space-y-4">
                {locale === "he" ? (
                  <>
                    <p>ריקוד האריה הוא ריקוד נפוץ ביותר בפולקלור הסיני. האריה הוא מלך החיות והסינים רואים בו יצור השומר מפני שדים ורוחות רעות ומפיץ מזל טוב.</p>
                    <p>ההיסטוריה של ריקוד האריה בסין החלה לפני למעלה מ-2,000 שנים.</p>
                  </>
                ) : (
                  <>
                    <p>The Lion Dance is one of the most widespread dances in Chinese folklore. The lion is the king of beasts, and the Chinese view it as a creature that protects against demons and evil spirits and spreads good fortune.</p>
                    <p>The history of the lion dance in China began over 2,000 years ago.</p>
                  </>
                )}
              </div>

              {/* Styles */}
              <div>
                <h2 className="text-xl heading-calligraphy text-ink mb-4">
                  {locale === "he" ? "סגנונות הריקוד" : "Dance Styles"}
                </h2>
                <div className="brush-stroke mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/5">
                  <div className="bg-paper p-8">
                    <h3 className="heading-calligraphy text-ink text-base mb-3">
                      {locale === "he" ? "הסגנון הצפוני" : "Northern Style"}
                    </h3>
                    <p className="text-stone-warm text-sm leading-[2]">
                      {locale === "he"
                        ? "סגנון עתיק עם פרווה ארוכה ועבה, תנועות אקרובטיות על עמודים, ודמיון לכלב הפו-סאו."
                        : "An ancient style with long, thick fur, acrobatic movements on poles, resembling the Foo-Sau dog."}
                    </p>
                  </div>
                  <div className="bg-paper p-8">
                    <h3 className="heading-calligraphy text-ink text-base mb-3">
                      {locale === "he" ? "הסגנון הדרומי" : "Southern Style"}
                    </h3>
                    <p className="text-stone-warm text-sm leading-[2]">
                      {locale === "he"
                        ? "הנפוץ ביותר, כולל גרסאות פאט-סאן והוק-סאן. צבעים שונים מסמלים אחווה, אומץ וחיוניות."
                        : "The most widespread, including Faat-San and Hok-San versions. Different colors symbolize brotherhood, courage, and vitality."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Symbolic Lions */}
              <div>
                <h2 className="text-xl heading-calligraphy text-ink mb-4">
                  {locale === "he" ? "האריות האגדיים" : "The Legendary Lions"}
                </h2>
                <div className="brush-stroke mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/5">
                  {(locale === "he"
                    ? [
                        { name: "לאו פיי", desc: "האריה הצהוב – מנהיג האחים" },
                        { name: "קוואן קונג", desc: "האריה האדום – סמל הנאמנות" },
                        { name: "צ'אנג פיי", desc: "האריה השחור – סמל העוצמה" },
                        { name: "צ'יו לונג", desc: "האריה הירוק – סמל החכמה" },
                        { name: "וונג צון", desc: "האריה הלבן – סמל הטוהר" },
                        { name: "מא צ'יו", desc: "האריה הצבעוני – סמל החיוניות" },
                      ]
                    : [
                        { name: "Lao Pei", desc: "The yellow lion – leader of the brothers" },
                        { name: "Kwan Kung", desc: "The red lion – symbol of loyalty" },
                        { name: "Chang Fei", desc: "The black lion – symbol of power" },
                        { name: "Chiu Long", desc: "The green lion – symbol of wisdom" },
                        { name: "Wong Tsun", desc: "The white lion – symbol of purity" },
                        { name: "Ma Chiu", desc: "The colorful lion – symbol of vitality" },
                      ]
                  ).map((lion, i) => (
                    <div key={i} className="bg-paper py-4 px-5">
                      <span className="text-ink text-sm font-medium">{lion.name}</span>
                      <span className="text-stone-warm text-sm"> – {lion.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
