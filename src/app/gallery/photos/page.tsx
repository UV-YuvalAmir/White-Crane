"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

type Category = "all" | "general" | "liondance" | "healing" | "chikung" | "taichi" | "kungfu";

interface Photo {
  src: string;
  alt: string;
  title: { he: string; en: string };
  category: Category;
}

const categories: { key: Category; he: string; en: string }[] = [
  { key: "all", he: "הכל", en: "All" },
  { key: "general", he: "בין הדברים", en: "General" },
  { key: "liondance", he: "ריקוד האריה", en: "Lion Dance" },
  { key: "healing", he: "הילינג סיני", en: "Chinese Healing" },
  { key: "chikung", he: "צ'י קונג", en: "Chi Kung" },
  { key: "taichi", he: "טאי צ'י", en: "Tai Chi" },
  { key: "kungfu", he: "קונג פו", en: "Kung Fu" },
];

const WP = "https://www.pakhokpai.co.il/wp-content/uploads";

const photos: Photo[] = [
  // === בין הדברים (General) ===
  { src: `${WP}/2018/08/DSCF0922-Small.jpg`, alt: "White Crane general 1", title: { he: "בין הדברים", en: "Between Things" }, category: "general" },
  { src: `${WP}/2018/08/DSCF0939-Small.jpg`, alt: "White Crane general 2", title: { he: "בין הדברים", en: "Between Things" }, category: "general" },
  { src: `${WP}/2018/08/DSCF3331-Small.jpg`, alt: "White Crane general 3", title: { he: "בין הדברים", en: "Between Things" }, category: "general" },
  { src: `${WP}/2018/08/IMG_0006-Large.jpg`, alt: "White Crane general 4", title: { he: "בין הדברים", en: "Between Things" }, category: "general" },
  { src: `${WP}/2018/08/IMG_9528-Large.jpg`, alt: "White Crane general 5", title: { he: "בין הדברים", en: "Between Things" }, category: "general" },
  { src: `${WP}/2018/08/DSCF1524-Small.jpg`, alt: "White Crane general 6", title: { he: "בין הדברים", en: "Between Things" }, category: "general" },
  { src: `${WP}/2018/08/IMG_7012-Small.jpg`, alt: "White Crane general 7", title: { he: "בין הדברים", en: "Between Things" }, category: "general" },
  { src: `${WP}/2018/08/IMG_5334-Large.jpg`, alt: "White Crane general 8", title: { he: "בין הדברים", en: "Between Things" }, category: "general" },

  // === ריקוד האריה (Lion Dance) ===
  { src: `${WP}/2018/08/IMG_1119-Small.jpg`, alt: "Lion Dance performance 1", title: { he: "ריקוד האריה", en: "Lion Dance" }, category: "liondance" },
  { src: `${WP}/2018/08/0839-Small.jpg`, alt: "Lion Dance performance 2", title: { he: "ריקוד האריה", en: "Lion Dance" }, category: "liondance" },
  { src: `${WP}/2018/08/0842-Small.jpg`, alt: "Lion Dance performance 3", title: { he: "ריקוד האריה", en: "Lion Dance" }, category: "liondance" },
  { src: `${WP}/2018/08/DSC_3350-Small.jpg`, alt: "Lion Dance performance 4", title: { he: "ריקוד האריה", en: "Lion Dance" }, category: "liondance" },
  { src: `${WP}/2018/08/1DL0743-1-Small.jpg`, alt: "Lion Dance performance 5", title: { he: "ריקוד האריה", en: "Lion Dance" }, category: "liondance" },
  { src: `${WP}/2018/08/1DL0773-1-Small.jpg`, alt: "Lion Dance performance 6", title: { he: "ריקוד האריה", en: "Lion Dance" }, category: "liondance" },
  { src: `${WP}/2018/08/17-Medium.jpg`, alt: "Lion Dance performance 7", title: { he: "ריקוד האריה", en: "Lion Dance" }, category: "liondance" },

  // === הילינג סיני (Chinese Healing) ===
  { src: `${WP}/2018/08/IMG_20180610_125437_2-Small.jpg`, alt: "Chinese Healing session 1", title: { he: "הילינג סיני", en: "Chinese Healing" }, category: "healing" },
  { src: `${WP}/2018/08/IMG_1127-Custom.jpg`, alt: "Chinese Healing session 2", title: { he: "הילינג סיני", en: "Chinese Healing" }, category: "healing" },
  { src: `${WP}/2018/08/IMG_1129-Custom.jpg`, alt: "Chinese Healing session 3", title: { he: "הילינג סיני", en: "Chinese Healing" }, category: "healing" },
  { src: `${WP}/2018/08/IMG_1124-Custom.jpg`, alt: "Chinese Healing session 4", title: { he: "הילינג סיני", en: "Chinese Healing" }, category: "healing" },
  { src: `${WP}/2018/08/IMG_20170210_104908-Small.jpg`, alt: "Chinese Healing session 5", title: { he: "הילינג סיני", en: "Chinese Healing" }, category: "healing" },
  { src: `${WP}/2018/08/IMG_9429-Small.jpg`, alt: "Chinese Healing session 6", title: { he: "הילינג סיני", en: "Chinese Healing" }, category: "healing" },
  { src: `${WP}/2018/08/IMG_9431-Small.jpg`, alt: "Chinese Healing session 7", title: { he: "הילינג סיני", en: "Chinese Healing" }, category: "healing" },

  // === צ'י קונג (Chi Kung) ===
  { src: `${WP}/2018/06/IMG_5884-Medium.jpg`, alt: "Chi Kung practice 1", title: { he: "צ'י קונג", en: "Chi Kung" }, category: "chikung" },
  { src: `${WP}/2018/08/IMG_4480-Large.jpg`, alt: "Chi Kung practice 2", title: { he: "צ'י קונג", en: "Chi Kung" }, category: "chikung" },
  { src: `${WP}/2018/08/IMG_4482-Large.jpg`, alt: "Chi Kung practice 3", title: { he: "צ'י קונג", en: "Chi Kung" }, category: "chikung" },
  { src: `${WP}/2018/07/IMG_4529-Large.jpg`, alt: "Chi Kung practice 4", title: { he: "צ'י קונג", en: "Chi Kung" }, category: "chikung" },
  { src: `${WP}/2018/07/IMG_4530-Large.jpg`, alt: "Chi Kung practice 5", title: { he: "צ'י קונג", en: "Chi Kung" }, category: "chikung" },

  // === טאי צ'י (Tai Chi) ===
  { src: `${WP}/2018/08/DSCF1176-Small.jpg`, alt: "Tai Chi practice 1", title: { he: "טאי צ'י", en: "Tai Chi" }, category: "taichi" },
  { src: `${WP}/2018/08/DSCF1183-Small.jpg`, alt: "Tai Chi practice 2", title: { he: "טאי צ'י", en: "Tai Chi" }, category: "taichi" },
  { src: `${WP}/2018/07/DSC_0101-Medium.jpg`, alt: "Tai Chi practice 3", title: { he: "טאי צ'י", en: "Tai Chi" }, category: "taichi" },
  { src: `${WP}/2018/07/DSCF4285-Small.jpg`, alt: "Tai Chi practice 4", title: { he: "טאי צ'י", en: "Tai Chi" }, category: "taichi" },
  { src: `${WP}/2018/07/IMG_4531-Large.jpg`, alt: "Tai Chi practice 5", title: { he: "טאי צ'י", en: "Tai Chi" }, category: "taichi" },
  { src: `${WP}/2018/06/DSC_6376-Large.jpg`, alt: "Tai Chi practice 6", title: { he: "טאי צ'י", en: "Tai Chi" }, category: "taichi" },
  { src: `${WP}/2018/07/DSC_6372-Large.jpg`, alt: "Tai Chi practice 7", title: { he: "טאי צ'י", en: "Tai Chi" }, category: "taichi" },
  { src: `${WP}/2018/08/IMG_0897-Large.jpg`, alt: "Tai Chi practice 8", title: { he: "טאי צ'י", en: "Tai Chi" }, category: "taichi" },

  // === קונג פו (Kung Fu) ===
  { src: `${WP}/2018/08/P9276663-Small.jpg`, alt: "Kung Fu training 1", title: { he: "קונג פו", en: "Kung Fu" }, category: "kungfu" },
  { src: `${WP}/2018/08/DSCF1390-Small.jpg`, alt: "Kung Fu training 2", title: { he: "קונג פו", en: "Kung Fu" }, category: "kungfu" },
  { src: `${WP}/2018/08/IMG_6098-Medium.jpg`, alt: "Kung Fu training 3", title: { he: "קונג פו", en: "Kung Fu" }, category: "kungfu" },
  { src: `${WP}/2018/08/IMG_7410-Medium.jpg`, alt: "Kung Fu training 4", title: { he: "קונג פו", en: "Kung Fu" }, category: "kungfu" },
  { src: `${WP}/2018/08/DSCF0967-Medium.jpg`, alt: "Kung Fu training 5", title: { he: "קונג פו", en: "Kung Fu" }, category: "kungfu" },
  { src: `${WP}/2018/07/IMG_4078-Large.jpg`, alt: "Kung Fu training 6", title: { he: "קונג פו", en: "Kung Fu" }, category: "kungfu" },
  { src: `${WP}/2018/07/DSC_6348-1.jpg`, alt: "Kung Fu training 7", title: { he: "קונג פו", en: "Kung Fu" }, category: "kungfu" },
  { src: `${WP}/2018/07/DSC_6269-Large.jpg`, alt: "Kung Fu training 8", title: { he: "קונג פו", en: "Kung Fu" }, category: "kungfu" },
];

export default function PhotoGalleryPage() {
  const { locale } = useLocale();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredPhotos = activeCategory === "all"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        title={locale === "he" ? "גלריית תמונות" : "Photo Gallery"}
        character="畫"
        backgroundImage="/images/gallery4-lg.jpg"
      />

      {/* Category Tabs */}
      <section className="px-6 pt-12 pb-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => { setActiveCategory(cat.key); setLightbox(null); }}
                className={`px-4 py-2 text-sm sm:text-base border transition-all duration-300 tracking-wide ${
                  activeCategory === cat.key
                    ? "bg-ink text-paper border-ink"
                    : "bg-transparent text-ink/70 border-ink/20 hover:border-ink/50 hover:text-ink"
                }`}
              >
                {locale === "he" ? cat.he : cat.en}
              </button>
            ))}
          </div>
          <p className="text-center text-ink/40 text-sm mt-4">
            {filteredPhotos.length} {locale === "he" ? "תמונות" : "photos"}
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="scroll-section px-6 pt-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/5">
            {filteredPhotos.map((photo, i) => (
              <div
                key={`${photo.category}-${i}`}
                className="relative bg-paper cursor-pointer group overflow-hidden"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-64 lg:h-72 object-cover grayscale contrast-[1.05] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  style={{ mixBlendMode: "multiply" }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-seal-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-paper text-lg font-bold tracking-wide">
                    {locale === "he" ? photo.title.he : photo.title.en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && lightbox < filteredPhotos.length && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-paper/40 hover:text-paper" onClick={() => setLightbox(null)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            className="absolute left-6 text-paper/40 hover:text-paper"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filteredPhotos.length) % filteredPhotos.length); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-6 text-paper/40 hover:text-paper"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filteredPhotos.length); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Category label in lightbox */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-paper/50 text-sm tracking-widest uppercase">
            {locale === "he" ? filteredPhotos[lightbox].title.he : filteredPhotos[lightbox].title.en}
          </div>
          <Image
            src={filteredPhotos[lightbox].src}
            alt={filteredPhotos[lightbox].alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
            unoptimized
          />
          {/* Photo counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-paper/30 text-sm">
            {lightbox + 1} / {filteredPhotos.length}
          </div>
        </div>
      )}
    </>
  );
}
