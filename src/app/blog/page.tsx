"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const posts = {
  he: [
    { title: "עשרת העקרונות של הדאו", excerpt: "עשרת העקרונות מתארים את תנועת היצירה של העולם כתהליכים מעגליים-מחזורים של שינוי והרמוניה.", category: "פילוסופיה", href: "/blog/ten-principles-of-dao" },
    { title: "חמש הפאזות", excerpt: "עץ, אש, אדמה, מתכת, מים – חמש תנועות אנרגטיות מחזוריות של שינוי ויצירה בטבע.", category: "פילוסופיה", href: "/blog/five-phases" },
    { title: "הרוח החיונית – ג'ינג שן", excerpt: "חקירה מעמיקה של מושג הרוח בפילוסופיה הסינית – טיפוח הרוח, אינטליגנציה רוחנית והקשר בין לב לשן.", category: "פילוסופיה", href: "/blog/jing-shen" },
    { title: "השיבה למקור הקיום – הכאוס הקדום", excerpt: "מהיכן באנו ומי אנו? מסע לשורשי הקיום דרך הכאוס הקדום, הוו-ג'י והיין והיאנג.", category: "פילוסופיה", href: "/blog/primordial-chaos" },
    { title: "הילינג סיני פרח הלוטוס – ראיון עם צחי שוחט במגזין חיים אחרים", excerpt: "ראיון מרתק המדבר על הייחודיות של הטיפול הסיני המבוסס על הקשבה לצ'י, ספונטניות וחיבור לידע קוסמי.", category: "הילינג", href: "/blog/healing-interview" },
    { title: "אדם – גוף, צ'י ורוח", excerpt: "מאמר מעמיק החוקר את ההרכב האנושי דרך עדשת הפילוסופיה הסינית.", category: "פילוסופיה", href: "/blog/body-chi-spirit" },
    { title: "ג'ואנג דזה – ספר החיים", excerpt: "סיפורים ומשלים על החיים, הטבע והחוכמה. תרגום צחי שוחט.", category: "פילוסופיה", href: "/blog/zhuang-zi" },
    { title: "צ'י קונג לניקוי אנרגטי", excerpt: "תרגול פשוט ויעיל לניקוי אנרגטי, מיועד למטפלים ולשחרור כללי של לחץ פנימי ומתח.", category: "תרגול", href: "/blog/chi-kung-cleansing" },
    { title: "הנעלם – שיר מאת סיפו צחי שוחט", excerpt: "שיר על המציאות, הטבע והחיפוש אחר האמת שמעבר לתיאוריות.", category: "שירה", href: "/blog/the-hidden-poem" },
    { title: "ארבעה מוקדי אנרגיה עקריים", excerpt: "דאן טיין, שין זונג, העין השלישית ובאי חוי – ארבעה מרכזי אנרגיה חיוניים בגוף האדם.", category: "הילינג", href: "/blog/energy-centers" },
    { title: "הדאו הצ'י והיצירה", excerpt: "וו-ג'י, דאו, טאי ג'י – מסע בתהליך יצירת היקום והצ'י הזורם בגוף האדם.", category: "הילינג", href: "/blog/dao-chi-creation" },
    { title: "שלושת האוצרות – San Bao", excerpt: "ג'ינג, צ'י ושן – שלוש אנרגיות הקיום של האדם והאלכימיה הפנימית שביניהן.", category: "הילינג", href: "/blog/three-treasures" },
  ],
  en: [
    { title: "The Ten Principles of the Dao", excerpt: "The ten principles describe the world's creative movement as cyclical processes of change and harmony.", category: "Philosophy", href: "/blog/ten-principles-of-dao" },
    { title: "The Five Phases", excerpt: "Wood, Fire, Earth, Metal, Water – five cyclical energetic movements of change and creation in nature.", category: "Philosophy", href: "/blog/five-phases" },
    { title: "The Vital Spirit – Jing Shen", excerpt: "A deep exploration of the concept of Spirit in Chinese philosophy – cultivating spirit, spiritual intelligence, and the heart-shen connection.", category: "Philosophy", href: "/blog/jing-shen" },
    { title: "Return to the Source – The Primordial Chaos", excerpt: "Where did we come from and who are we? A journey to the roots of existence through primordial chaos, Wu Ji, and Yin and Yang.", category: "Philosophy", href: "/blog/primordial-chaos" },
    { title: "Chinese Healing Lotus Flower – Interview with Tzachi Shuhat", excerpt: "A fascinating interview discussing the uniqueness of Chinese therapy based on listening to chi and cosmic knowledge.", category: "Healing", href: "/blog/healing-interview" },
    { title: "Man – Body, Chi and Spirit", excerpt: "An in-depth article exploring human composition through the lens of Chinese philosophy.", category: "Philosophy", href: "/blog/body-chi-spirit" },
    { title: "Zhuang Zi – The Book of Life", excerpt: "Stories and fables about life, nature, and wisdom. Translated by Tzachi Shuhat.", category: "Philosophy", href: "/blog/zhuang-zi" },
    { title: "Chi Kung for Energetic Cleansing", excerpt: "A simple and effective exercise for energetic cleansing, designed for practitioners and general stress release.", category: "Practice", href: "/blog/chi-kung-cleansing" },
    { title: "The Hidden – A Poem by Sifu Tzachi Shuhat", excerpt: "A poem about reality, nature, and the search for truth beyond theories.", category: "Poetry", href: "/blog/the-hidden-poem" },
    { title: "Four Primary Energy Centers", excerpt: "Dan Tian, Xin Zong, the Third Eye, and Bai Hui – four vital energy centers in the human body.", category: "Healing", href: "/blog/energy-centers" },
    { title: "The Dao, Chi and Creation", excerpt: "Wu Ji, Dao, Tai Ji – a journey through the universe's creation process and the Chi flowing in the human body.", category: "Healing", href: "/blog/dao-chi-creation" },
    { title: "The Three Treasures – San Bao", excerpt: "Jing, Chi, and Shen – the three existential energies and the internal alchemy between them.", category: "Healing", href: "/blog/three-treasures" },
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
