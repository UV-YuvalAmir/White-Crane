"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const conditions = {
  he: [
    "כאבי כתפיים וכתף קפואה",
    "שרירים מכווצים",
    "מרפק טניס / גולף",
    "נימול בגפיים",
    "כאבי ראש וסחרחורות",
    "מבנה גוף לקוי",
    "כאבים דלקתיים",
    "שיקום לאחר בעיות דיסק",
  ],
  en: [
    "Shoulder pain & frozen shoulder",
    "Muscle spasms",
    "Tennis / golf elbow",
    "Limb numbness",
    "Headaches & dizziness",
    "Poor posture",
    "Inflammatory pain",
    "Post-disc problem rehabilitation",
  ],
};

export default function AnMoPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "אן-מו – עיסוי סיני אורטופדי" : "An-Mo – Chinese Orthopedic Massage"}
        subtitle={locale === "he" ? "לטיפול בכאבים ובעיות אורטופדיות" : "Treatment for pain and orthopedic issues"}
        character="按"
        backgroundImage="/images/gallery1-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Etymology */}
          <div className="flex justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <span className="text-6xl text-seal/20 font-serif">按</span>
              <p className="mt-2 text-xs text-stone-warm">
                {locale === "he" ? "אן – ללחוץ" : "An – To press"}
              </p>
            </div>
            <div className="text-center">
              <span className="text-6xl text-seal/20 font-serif">摩</span>
              <p className="mt-2 text-xs text-stone-warm">
                {locale === "he" ? "מו – לעסות, לשפשף" : "Mo – To massage, rub"}
              </p>
            </div>
          </div>

          {/* Image */}
          <Image
            src="/images/massage-anmo-lg.jpg"
            alt={locale === "he" ? "אן-מו עיסוי סיני" : "An-Mo Chinese Massage"}
            width={800}
            height={533}
            className="w-full h-auto grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            style={{ mixBlendMode: "multiply" }}
          />

          {/* Description */}
          <div className="text-stone-warm text-sm leading-[2] space-y-4">
            {locale === "he" ? (
              <>
                <p>אן-מו היא שיטת עיסוי סינית אורטופדית עתיקה. השיטה כוללת מגוון טכניקות: עיסוי דינאמי, מניפולציה ומתיחות המשפרות את זרימת האנרגיה ומביאות לשחרור כאבים.</p>
                <p>הטיפול מתמקד בפתרון בעיות שלד – כאבים ובעיות בשרירים, גידים, מפרקים ורצועות.</p>
              </>
            ) : (
              <>
                <p>An-Mo is an ancient Chinese orthopedic massage method. It includes a variety of techniques: dynamic massage, manipulation, and stretching that improve energy flow and relieve pain.</p>
                <p>Treatment focuses on solving skeletal problems – pain and issues in muscles, tendons, joints, and ligaments.</p>
              </>
            )}
          </div>

          {/* Conditions */}
          <div>
            <h2 className="text-xl heading-calligraphy text-ink mb-4">
              {locale === "he" ? "מצבים הניתנים לטיפול" : "Treatable Conditions"}
            </h2>
            <div className="brush-stroke mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/5">
              {conditions[locale].map((c, i) => (
                <div key={i} className="bg-paper py-4 px-5 text-sm text-stone-warm">
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-10 border-t border-b border-ink/5">
            <p className="text-stone-warm text-sm mb-6">
              {locale === "he" ? "לקביעת תור או למידע נוסף" : "Schedule an appointment"}
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
