"use client";

import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  character?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, character, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[35vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover grayscale opacity-15 contrast-[1.2]"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/30 to-paper" />
        </>
      ) : (
        <div className="absolute inset-0 ink-wash-bg mountain-scene" />
      )}

      {/* Mist layers */}
      <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-ink/[0.03] to-transparent animate-mist" />

      {/* Watermark character */}
      {character && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark">
          {character}
        </div>
      )}

      <div className="relative z-10 text-center px-6 py-16 md:py-32 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl heading-calligraphy text-ink mb-6 opacity-0 animate-rise">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-stone-warm font-light max-w-xl mx-auto opacity-0 animate-rise delay-200 leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="brush-stroke mx-auto mt-8 opacity-0 animate-brush delay-400" />
      </div>
    </section>
  );
}
