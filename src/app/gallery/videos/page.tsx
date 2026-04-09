"use client";

import { useLocale } from "@/lib/locale-context";
import PageHero from "@/components/PageHero";

export default function VideoGalleryPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        title={locale === "he" ? "גלריית וידאו" : "Video Gallery"}
        character="影"
        backgroundImage="/images/video-thumb.jpg"
      />

      <section className="scroll-section px-6">
        <div className="max-w-3xl mx-auto">
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
            <div className="p-6 bg-paper-light">
              <h2 className="heading-calligraphy text-ink text-base">
                {locale === "he" ? "סיפו צחי שוחט – מרכז עגור לבן" : "Sifu Tzachi Shuhat – White Crane Center"}
              </h2>
              <p className="text-xs text-stone-warm mt-1">Pak Hok Pai</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="https://youtube.com/channel/UC9lm82ZKhY5o2W_sAS49XHA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-ink text-ink text-sm hover:bg-ink hover:text-paper transition-all duration-300 inline-block"
            >
              {locale === "he" ? "ערוץ היוטיוב שלנו" : "Our YouTube Channel"} →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
