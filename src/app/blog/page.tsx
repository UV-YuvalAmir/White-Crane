"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const posts = {
  he: [
    { title: "הילינג סיני פרח הלוטוס – ראיון עם צחי שוחט במגזין חיים אחרים", excerpt: "ראיון מרתק המדבר על הייחודיות של הטיפול הסיני המבוסס על הקשבה לצ'י, ספונטניות וחיבור לידע קוסמי.", category: "הילינג", href: "/blog/healing-interview" },
    { title: "אדם – גוף, צ'י ורוח", excerpt: "מאמר מעמיק החוקר את ההרכב האנושי דרך עדשת הפילוסופיה הסינית.", category: "פילוסופיה", href: "/blog/body-chi-spirit" },
    { title: "ג'ואנג דזה – ספר החיים", excerpt: "סיפורים ומשלים על החיים, הטבע והחוכמה. תרגום צחי שוחט.", category: "פילוסופיה", href: "/blog/zhuang-zi" },
  ],
  en: [
    { title: "Chinese Healing Lotus Flower – Interview with Tzachi Shuhat", excerpt: "A fascinating interview discussing the uniqueness of Chinese therapy based on listening to chi and cosmic knowledge.", category: "Healing", href: "/blog/healing-interview" },
    { title: "Man – Body, Chi and Spirit", excerpt: "An in-depth article exploring human composition through the lens of Chinese philosophy.", category: "Philosophy", href: "/blog/body-chi-spirit" },
    { title: "Zhuang Zi – The Book of Life", excerpt: "Stories and fables about life, nature, and wisdom. Translated by Tzachi Shuhat.", category: "Philosophy", href: "/blog/zhuang-zi" },
  ],
};

export default function BlogPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "בלוג" : "Blog"}
        subtitle={locale === "he" ? "מאמרים · תובנות · ידע" : "Articles · Insights · Knowledge"}
        character="文"
        backgroundImage="/images/blog2-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-px">
            {posts[locale].map((post, i) => (
              <Link key={i} href={post.href}>
                <article
                  className="group py-10 border-b border-ink/5 opacity-0 animate-rise"
                  style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <div className="mb-3">
                    <span className="seal-stamp text-[9px] px-1.5 py-0.5">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg heading-calligraphy text-ink mb-2 group-hover:text-seal transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm text-stone-warm leading-relaxed">{post.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
