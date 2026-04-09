"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const branches = {
  he: [
    { title: "בריאותי", char: "健", desc: "טכניקות בסיסיות עם מתיחות, תנוחות, תנועות המביאות להמרצת אנרגיה ודם." },
    { title: "טיפוח אנרגטי רוחני", char: "靈", desc: "הבנת המבנה האנרגטי של האדם והטבע. נקרא גם ניי גונג – עבודה פנימית." },
    { title: "רפואי", char: "醫", desc: "תרגול וטיפול – מטפל עובד על מטופל בעבודה אנרגטית מרפאת." },
    { title: "לחימתי", char: "戰", desc: "משלב את כל המרכיבים הבסיסיים עם עבודה בטונוס שרירים גבוה." },
    { title: "כשפים", char: "咒", desc: "שימוש במילים וצלילים ליצירת תנועה אנרגטית למטרות ריפוי." },
  ],
  en: [
    { title: "Health", char: "健", desc: "Basic techniques with stretching, postures, movements stimulating energy and blood flow." },
    { title: "Spiritual Cultivation", char: "靈", desc: "Understanding the energetic structure of humans and nature. Also called Nei Gong – internal work." },
    { title: "Medical", char: "醫", desc: "Practice and treatment – practitioner works on patient with healing energy work." },
    { title: "Martial", char: "戰", desc: "Combines all basic components with high muscle tone work." },
    { title: "Mystical", char: "咒", desc: "Using words and sounds to create energetic movement for healing purposes." },
  ],
};

export default function ChiKungPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "צ'י קונג ומדיטציה" : "Chi Kung & Meditation"}
        subtitle={locale === "he" ? "עבודה עם אנרגיית הקיום" : "Working with life energy"}
        character="氣"
        backgroundImage="/images/chikung-class.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Intro */}
          <div className="text-stone-warm text-sm leading-[2] text-center max-w-xl mx-auto">
            <p>
              {locale === "he"
                ? "צ'י קונג הוא ענף תרגול סיני המשלב בין תנועה גוף נכונה, מחשבה ונשימה ותורם לתפקוד בריא של הגוף, לחיוניות, להכרה צלולה, לרוגע והתפתחות תודעתית."
                : "Chi Kung is a Chinese practice combining proper body movement, thought, and breathing, contributing to healthy body function, vitality, clear awareness, calmness, and consciousness development."}
            </p>
          </div>

          <Image src="/images/chikung-class.jpg" alt="Chi Kung class" width={1024} height={768} className="w-full h-auto grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" style={{ mixBlendMode: "multiply" }} />

          {/* Etymology */}
          <div className="flex justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <span className="text-6xl text-seal/20 font-serif">氣</span>
              <p className="mt-2 text-xs text-stone-warm">
                {locale === "he" ? "צ'י – אנרגיית קיום" : "Chi – Life energy"}
              </p>
            </div>
            <div className="text-center">
              <span className="text-6xl text-bamboo/20 font-serif">功</span>
              <p className="mt-2 text-xs text-stone-warm">
                {locale === "he" ? "קונג – עבודה מתמשכת" : "Kung – Continuous work"}
              </p>
            </div>
          </div>

          {/* Five branches */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4 text-center">
              {locale === "he" ? "חמישה ענפי צ'י קונג" : "Five Branches of Chi Kung"}
            </h2>
            <div className="brush-stroke mx-auto mb-10" />

            <div className="space-y-px">
              {branches[locale].map((branch, i) => (
                <div key={i} className="flex items-start gap-6 py-6 border-b border-ink/5">
                  <span className="text-3xl text-ink/[0.06] font-serif flex-shrink-0 w-12 text-center leading-none mt-1">
                    {branch.char}
                  </span>
                  <div>
                    <h3 className="heading-calligraphy text-ink text-sm">{branch.title}</h3>
                    <p className="text-xs text-stone-warm mt-1 leading-relaxed">{branch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="text-center py-10 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-2">
              {locale === "he"
                ? "שיעורי צ'י קונג-מדיטציה: ימי ו' וב', 8:30-9:45"
                : "Chi Kung-Meditation: Fridays & Mondays, 8:30-9:45"}
            </p>
            <p className="text-ink/30 text-xs mb-6">
              {locale === "he" ? "שיעור נסיון ללא תשלום · אין צורך בידע מוקדם" : "Free trial · No prior knowledge required"}
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
