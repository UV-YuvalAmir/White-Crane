"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/translations";
import ContactForm from "@/components/ContactForm";

const serviceCards = [
  { key: "kungFu" as const, href: "/kung-fu", img: "/images/kungfu.png" },
  { key: "taiChi" as const, href: "/tai-chi", img: "/images/taichi.png" },
  { key: "chiKung" as const, href: "/chi-kung", img: "/images/chikung.png" },
  { key: "healing" as const, href: "/treatments/healing", img: "/images/treatments.png" },
  { key: "courses" as const, href: "/courses", img: "/images/courses.png" },
  { key: "lionDance" as const, href: "/lion-dance", img: "/images/liondance.png" },
];

const blogPosts = {
  he: [
    { title: "הילינג סיני פרח הלוטוס – ראיון עם צחי שוחט", excerpt: "על הייחודיות של הטיפול הסיני המבוסס על הקשבה לצ'י, ספונטניות וחיבור לידע קוסמי.", href: "/blog/healing-interview", img: "/images/blog1.jpg" },
    { title: "אדם – גוף, צ'י ורוח", excerpt: "ההרכב האנושי דרך עדשת הפילוסופיה הסינית.", href: "/blog/body-chi-spirit", img: "/images/blog2.jpg" },
    { title: "ג'ואנג דזה – ספר החיים", excerpt: "סיפורים ומשלים על החיים, הטבע והחוכמה.", href: "/blog/zhuang-zi", img: "/images/blog3.jpg" },
  ],
  en: [
    { title: "Chinese Healing Lotus Flower – Interview with Tzachi Shuhat", excerpt: "The uniqueness of Chinese therapy based on listening to chi and cosmic knowledge.", href: "/blog/healing-interview", img: "/images/blog1.jpg" },
    { title: "Man – Body, Chi and Spirit", excerpt: "Human composition through the lens of Chinese philosophy.", href: "/blog/body-chi-spirit", img: "/images/blog2.jpg" },
    { title: "Zhuang Zi – The Book of Life", excerpt: "Stories and fables about life, nature, and wisdom.", href: "/blog/zhuang-zi", img: "/images/blog3.jpg" },
  ],
};

export default function Home() {
  const { locale } = useLocale();
  const tr = t(locale);

  return (
    <>
      {/* === HERO: Banner with cranes and bamboo === */}
      <section className="relative overflow-hidden">
        <div className="relative w-full">
          <Image
            src="/images/header-banner.jpg"
            alt="White Crane Center - Pak Hok Pai"
            width={1920}
            height={406}
            className="w-full h-auto"
            priority
          />
          {/* Soft fade edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper" />
        </div>

        {/* Logo and title overlay */}
        <div className="relative -mt-32 z-10 text-center px-6 pb-16">
          <Image
            src="/images/logo.png"
            alt="White Crane Center Logo"
            width={200}
            height={200}
            className="mx-auto mb-6 drop-shadow-lg"
          />
          <h1 className="text-3xl md:text-5xl heading-calligraphy text-ink mb-4 opacity-0 animate-rise delay-200">
            {locale === "he" ? "מרכז עגור לבן" : "White Crane Center"}
          </h1>
          <p className="text-lg text-stone-warm font-light mb-3 opacity-0 animate-rise delay-300">
            {tr.hero.tagline}
          </p>
          <p className="text-xs text-ink/30 tracking-[0.4em] uppercase mb-10 opacity-0 animate-rise delay-400">
            Pak Hok Pai
          </p>
          <div className="brush-stroke brush-stroke-red mx-auto mb-10 opacity-0 animate-brush delay-500" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-rise delay-600">
            <Link
              href="/about"
              className="px-8 py-3 border border-ink text-ink text-sm tracking-wide hover:bg-ink hover:text-paper transition-all duration-500"
            >
              {tr.hero.cta}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 text-stone-warm text-sm tracking-wide hover:text-ink transition-colors duration-300"
            >
              {tr.nav.contact}
            </Link>
          </div>
        </div>
      </section>

      {/* === SCENE 2: Welcome === */}
      <section className="scroll-section relative">
        <div className="max-w-2xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl heading-calligraphy text-ink mb-6">
            {tr.home.welcome}
          </h2>
          <div className="brush-stroke mx-auto mb-10" />
          <p className="text-stone-warm leading-[2] text-base">
            {locale === "he"
              ? "מרכז עגור לבן, בראשותו של סיפו צחי שוחט, מציע מסלול ייחודי של אומנויות לחימה, בריאות גוף-נפש וטיפולים אנרגטיים מהמסורת הסינית העתיקה."
              : "White Crane Center, led by Sifu Tzachi Shuhat, offers a unique path of martial arts, body-mind health and energy treatments from the ancient Chinese tradition."}
          </p>
        </div>
      </section>

      {/* === Sifu image === */}
      <section className="relative py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Image
            src="/images/hero-main.jpg"
            alt="Sifu Tzachi Shuhat"
            width={1080}
            height={1383}
            className="w-full max-w-md mx-auto h-auto opacity-90 grayscale contrast-[1.1] hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            style={{ mixBlendMode: "multiply" }}
          />
          <div className="mt-4 text-xs text-ink/20 tracking-wide">
            {locale === "he" ? "סיפו צחי שוחט" : "Sifu Tzachi Shuhat"}
          </div>
        </div>
      </section>

      {/* === SCENE 3: Services with original icons === */}
      <section className="scroll-section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl heading-calligraphy text-ink mb-6">
              {tr.home.services}
            </h2>
            <div className="brush-stroke mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/5">
            {serviceCards.map((card, i) => {
              const service = tr.services[card.key];
              return (
                <Link
                  key={card.key}
                  href={card.href}
                  className="group bg-paper p-8 text-center ink-hover opacity-0 animate-rise"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <Image
                    src={card.img}
                    alt={service.title}
                    width={277}
                    height={290}
                    className="w-32 h-auto mx-auto mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <h3 className="text-base heading-calligraphy text-ink mb-3 group-hover:text-seal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-warm leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-1 text-xs text-ink/30 group-hover:text-seal transition-colors duration-300">
                    {locale === "he" ? "קרא עוד" : "Read more"}
                    <span className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${locale === "he" ? "rotate-180 group-hover:-translate-x-1" : ""}`}>
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Image break === */}
      <section className="relative py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/images/blog1-lg.jpg"
            alt="White Crane practice"
            width={1200}
            height={800}
            className="w-full h-auto opacity-90 grayscale contrast-[1.1] hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            style={{ mixBlendMode: "multiply" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper/50 pointer-events-none" />
        </div>
      </section>

      {/* === SCENE 4: Blog with thumbnails === */}
      <section className="scroll-section relative bg-ink text-paper overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl heading-calligraphy text-paper mb-6">
              {tr.home.selectedPosts}
            </h2>
            <div className="brush-stroke mx-auto" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(139,32,32,0.6) 15%, rgba(139,32,32,0.6) 50%, rgba(139,32,32,0.3) 85%, transparent 100%)" }} />
          </div>

          <div className="space-y-8">
            {blogPosts[locale].map((post, i) => (
              <Link key={i} href={post.href}>
                <article
                  className="group flex gap-6 items-start p-6 border-b border-paper/5 hover:bg-paper/[0.03] transition-all duration-500 opacity-0 animate-rise"
                  style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-24 h-20 object-cover flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500"
                  />
                  <div>
                    <h3 className="text-base heading-calligraphy text-paper/80 mb-2 group-hover:text-paper transition-colors duration-300 leading-relaxed">
                      {post.title}
                    </h3>
                    <p className="text-xs text-paper/30 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === Video section === */}
      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border border-ink/5 overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/GxGMRIclZA4"
                title="White Crane Center"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === SCENE 5: Contact === */}
      <section className="scroll-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl heading-calligraphy text-ink mb-6">
                {tr.home.contactUs}
              </h2>
              <div className="brush-stroke mb-10" />
              <p className="text-stone-warm text-sm leading-relaxed mb-10">{tr.home.contactDesc}</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-seal text-lg">&#9742;</span>
                  <a href="tel:097416199" className="text-ink hover:text-seal transition-colors text-sm">{tr.contact.phoneNumber}</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-seal text-lg">&#9993;</span>
                  <a href="mailto:pakhokis@gmail.com" className="text-ink hover:text-seal transition-colors text-sm">{tr.contact.emailAddress}</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-seal text-lg">&#9962;</span>
                  <span className="text-ink text-sm">{tr.contact.address}</span>
                </div>
              </div>
            </div>
            <div className="border border-ink/5 p-8 bg-paper-light relative">
              <div className="seal-stamp absolute -top-3 right-6 bg-paper">
                {locale === "he" ? "קשר" : "Contact"}
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* === Final breathing space === */}
      <section className="py-20 text-center">
        <Image
          src="/images/logo.png"
          alt="White Crane"
          width={80}
          height={80}
          className="mx-auto opacity-10"
        />
      </section>
    </>
  );
}
