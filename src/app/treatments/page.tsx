"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const treatments = [
  { href: "/treatments/healing", he: "הילינג סיני – פרח הלוטוס", en: "Chinese Healing – Lotus Flower", char: "癒", descHe: "ענף רפואה אנרגטי עתיק שמקורו בתרבות הסינית. טיפול עמוק עם מגע נשמתי.", descEn: "An ancient energy medicine branch from Chinese culture. Deep treatment with soulful touch." },
  { href: "/treatments/an-mo", he: "אן-מו – עיסוי סיני אורטופדי", en: "An-Mo – Chinese Orthopedic Massage", char: "按", descHe: "שיטת עיסוי סינית אורטופדית עתיקה לטיפול בכאבים ובעיות שלד.", descEn: "An ancient Chinese orthopedic massage method for treating pain and skeletal problems." },
  { href: "/treatments/dry-needling", he: "דיקור יבש אורטופדי", en: "Orthopedic Dry Needling", char: "針", descHe: "טכניקה מודרנית לשחרור נקודות טריגר בשרירים באמצעות מחטים דקות.", descEn: "A modern technique for releasing muscle trigger points using fine needles." },
];

export default function TreatmentsPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "טיפולים" : "Treatments"}
        subtitle={locale === "he" ? "ריפוי הגוף והנפש" : "Healing Body & Mind"}
        character="療"
        backgroundImage="/images/healing-treatment-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-px">
            {treatments.map((t, i) => (
              <Link
                key={t.href}
                href={t.href}
                className="group flex items-start gap-6 py-8 border-b border-ink/5 opacity-0 animate-rise hover:bg-ink/[0.01] transition-colors"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
              >
                <span className="text-4xl text-ink/[0.05] font-serif flex-shrink-0 w-14 text-center leading-none mt-1 group-hover:text-seal/20 transition-colors">
                  {t.char}
                </span>
                <div>
                  <h2 className="heading-calligraphy text-ink text-base mb-2 group-hover:text-seal transition-colors duration-300">
                    {locale === "he" ? t.he : t.en}
                  </h2>
                  <p className="text-sm text-stone-warm leading-relaxed">
                    {locale === "he" ? t.descHe : t.descEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center py-16">
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
