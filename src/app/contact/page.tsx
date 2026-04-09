"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "צרו קשר" : "Contact Us"}
        character="連"
        backgroundImage="/images/gallery5-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h2 className="text-xl heading-calligraphy text-ink mb-4">
                {locale === "he" ? "כתובת בית הספר" : "School Address"}
              </h2>
              <div className="brush-stroke mb-10" />

              <div className="space-y-8 text-sm">
                <div>
                  <p className="text-ink/30 text-xs tracking-wide uppercase mb-1">
                    {locale === "he" ? "כתובת" : "Address"}
                  </p>
                  <p className="text-ink">{locale === "he" ? "הפטיש 11, הוד השרון" : "HaPatish 11, Hod HaSharon"}</p>
                </div>
                <div>
                  <p className="text-ink/30 text-xs tracking-wide uppercase mb-1">
                    {locale === "he" ? "טלפון" : "Phone"}
                  </p>
                  <a href="tel:097416199" className="text-ink hover:text-seal transition-colors">09-7416199</a>
                </div>
                <div>
                  <p className="text-ink/30 text-xs tracking-wide uppercase mb-1">
                    {locale === "he" ? "אימייל" : "Email"}
                  </p>
                  <a href="mailto:pakhokis@gmail.com" className="text-ink hover:text-seal transition-colors">pakhokis@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="border border-ink/5 p-8 bg-paper-light relative">
              <div className="seal-stamp absolute -top-3 right-6 bg-paper-light">
                {locale === "he" ? "קשר" : "Write"}
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
