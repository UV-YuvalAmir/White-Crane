"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

const photos = [
  { src: "/images/gallery1-lg.jpg", alt: "White Crane training", title: { he: "אימון עגור לבן", en: "White Crane Training" } },
  { src: "/images/gallery2-lg.jpg", alt: "Kung Fu practice", title: { he: "ריקוד האריה", en: "Lion Dance" } },
  { src: "/images/gallery3-lg.jpg", alt: "Martial arts class", title: { he: "שיעור אומנויות לחימה", en: "Martial Arts Class" } },
  { src: "/images/gallery4-lg.jpg", alt: "White Crane Center", title: { he: "מרכז עגור לבן", en: "White Crane Center" } },
  { src: "/images/gallery5-lg.jpg", alt: "Training session", title: { he: "אימון", en: "Training Session" } },
  { src: "/images/gallery6-lg.jpg", alt: "Kung Fu demonstration", title: { he: "הדגמת קונג פו", en: "Kung Fu Demonstration" } },
];

export default function PhotoGalleryPage() {
  const { locale } = useLocale();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <PageHero
        title={locale === "he" ? "גלריית תמונות" : "Photo Gallery"}
        character="畫"
        backgroundImage="/images/gallery4-lg.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/5">
            {photos.map((photo, i) => (
              <div
                key={i}
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
      {lightbox !== null && (
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
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-6 text-paper/40 hover:text-paper"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <Image
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
