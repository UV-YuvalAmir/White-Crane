"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/translations";

export default function Footer() {
  const { locale } = useLocale();
  const tr = t(locale);

  const links = [
    { label: tr.nav.about, href: "/about" },
    { label: tr.footer.sifu, href: "/sifu" },
    { label: tr.footer.instructors, href: "/instructors" },
    { label: tr.footer.schedule, href: "/schedule" },
    { label: tr.footer.branches, href: "/branches" },
  ];

  return (
    <footer className="relative bg-ink text-paper/60 overflow-hidden">
      {/* Top brush stroke border */}
      <div className="h-px bg-gradient-to-r from-transparent via-paper/10 to-transparent" />

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[20rem] text-paper/[0.02] font-serif pointer-events-none select-none leading-none">
        道
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="White Crane" width={40} height={40} className="opacity-80" />
              <div>
                <div className="text-paper font-semibold heading-calligraphy">
                  {locale === "he" ? "מרכז עגור לבן" : "White Crane Center"}
                </div>
                <div className="text-paper/30 text-xs tracking-[0.2em] uppercase">
                  Pak Hok Pai
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-paper/40 max-w-[200px]">
              {locale === "he"
                ? "אומנויות לחימה ובריאות הגוף והנפש"
                : "Martial Arts & Body-Mind Health"}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-paper/80 text-xs tracking-[0.15em] uppercase mb-6">
              {locale === "he" ? "ניווט" : "Navigate"}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/40 hover:text-paper transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-paper/80 text-xs tracking-[0.15em] uppercase mb-6">
              {tr.nav.contact}
            </h3>
            <div className="space-y-3 text-sm text-paper/40">
              <p>{tr.contact.address}</p>
              <p>
                <a href="tel:097416199" className="hover:text-paper transition-colors">
                  {tr.contact.phoneNumber}
                </a>
              </p>
              <p>
                <a href="mailto:pakhokis@gmail.com" className="hover:text-paper transition-colors">
                  {tr.contact.emailAddress}
                </a>
              </p>
              <div className="flex gap-3 pt-4">
                <a
                  href="https://facebook.com/pakhokis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-paper/10 flex items-center justify-center hover:border-paper/30 hover:text-paper transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/channel/UC9lm82ZKhY5o2W_sAS49XHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-paper/10 flex items-center justify-center hover:border-paper/30 hover:text-paper transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-paper/5 text-center text-[11px] text-paper/20 tracking-wide">
          <p>&copy; 2026 {tr.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
