"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function TheHiddenPoemPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "הנעלם" : "The Hidden"}
        subtitle={
          locale === "he"
            ? "שיר מאת סיפו צחי שוחט"
            : "A poem by Sifu Tzachi Shuhat"
        }
        character="隱"
        backgroundImage="/images/blog2-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-seal hover:text-seal-light transition-colors mb-8"
          >
            <span className={locale === "he" ? "" : "rotate-180 inline-block"}>&rarr;</span>
            {locale === "he" ? "חזרה לבלוג" : "Back to Blog"}
          </Link>

          <article className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="seal-stamp text-[9px] px-1.5 py-0.5">
                {locale === "he" ? "שירה" : "Poetry"}
              </span>
            </div>

            <div className="text-stone-warm text-sm leading-[2] space-y-6">
              {locale === "he" ? (
                <div className="space-y-8">
                  <div className="space-y-1">
                    <p>כל התיאוריות נעלמות</p>
                    <p>קיימת רק המציאות כפי שהיא ואני בה</p>
                    <p>לא יותר מכך</p>
                    <p>מעבר לזה, פטפטת עם זנב ארוך</p>
                    <p>שאך את קצהה רואים</p>
                  </div>

                  <div className="space-y-1">
                    <p>אין חדש תחת השמש</p>
                    <p>רק הפרצופים משתנים</p>
                    <p>הדיבורים, גם הם זהים</p>
                    <p>רק בגוונים שונים</p>
                  </div>

                  <div className="space-y-1">
                    <p>ובא נביא לעירו</p>
                    <p>וגם חלילן להמלין</p>
                    <p>העכברים הולכים בעקבות הצלילים</p>
                    <p>לך תאמר להם שאלו חוזרים על עצמם</p>
                    <p>ומובילים לנהר, באשליה מבטיחה</p>
                  </div>

                  <div className="space-y-1">
                    <p>כולנו יציריו ובכל זאת לא תמיד מכירים בו</p>
                    <p>ממנו נובעות גם אותן התיאוריות הנעלמות</p>
                    <p>אלו שמכסות ומגלות אותו בפנינו</p>
                  </div>

                  <div className="space-y-1">
                    <p>להגשים עצמנו</p>
                    <p>מתנועה פנימית הנובעת ממנו</p>
                  </div>

                  <p className="italic mt-8">הטבע</p>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="space-y-1">
                    <p>All theories vanish</p>
                    <p>Only reality exists as it is, and I within it</p>
                    <p>Nothing more than that</p>
                    <p>Beyond this, chatter with a long tail</p>
                    <p>Of which only the tip is seen</p>
                  </div>

                  <div className="space-y-1">
                    <p>Nothing new under the sun</p>
                    <p>Only the faces change</p>
                    <p>The words, they too are identical</p>
                    <p>Just in different shades</p>
                  </div>

                  <div className="space-y-1">
                    <p>And a prophet comes to his city</p>
                    <p>And a piper to Hamelin</p>
                    <p>The mice follow the sounds</p>
                    <p>Try telling them these repeat themselves</p>
                    <p>And lead to the river, in a promising illusion</p>
                  </div>

                  <div className="space-y-1">
                    <p>We are all His creations yet do not always recognize Him</p>
                    <p>From Him flow those very vanishing theories</p>
                    <p>Those that cover and reveal Him before us</p>
                  </div>

                  <div className="space-y-1">
                    <p>To fulfill ourselves</p>
                    <p>From an inner movement flowing from Him</p>
                  </div>

                  <p className="italic mt-8">Nature</p>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
