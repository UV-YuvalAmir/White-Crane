"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/translations";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubItem[];
}

export default function Header() {
  const { locale, toggleLocale, isRTL } = useLocale();
  const tr = t(locale);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: tr.nav.home, href: "/" },
    {
      label: tr.nav.center,
      href: "/about",
      children: [
        { label: tr.nav.about, href: "/about" },
        { label: tr.nav.sifu, href: "/sifu" },
        { label: tr.nav.instructors, href: "/instructors" },
        { label: tr.nav.schedule, href: "/schedule" },
        { label: tr.nav.branches, href: "/branches" },
        { label: tr.nav.photoGallery, href: "/gallery/photos" },
        { label: tr.nav.videoGallery, href: "/gallery/videos" },
      ],
    },
    {
      label: tr.nav.martialArts,
      href: "/kung-fu",
      children: [
        { label: tr.nav.kungFu, href: "/kung-fu" },
        { label: tr.nav.taiChi, href: "/tai-chi" },
        { label: tr.nav.chiKung, href: "/chi-kung" },
        { label: tr.nav.lionDance, href: "/lion-dance" },
      ],
    },
    {
      label: tr.nav.treatments,
      href: "/treatments/healing",
      children: [
        { label: tr.nav.healing, href: "/treatments/healing" },
        { label: tr.nav.dryNeedling, href: "/treatments/dry-needling" },
        { label: tr.nav.testimonials, href: "/testimonials" },
      ],
    },
    { label: tr.nav.courses, href: "/courses" },
    { label: tr.nav.blog, href: "/blog" },
    { label: tr.nav.contact, href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="White Crane Center"
              width={40}
              height={40}
              className="transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="text-ink font-semibold text-sm heading-calligraphy leading-tight">
                {locale === "he" ? "עגור לבן" : "White Crane"}
              </div>
              <div className="text-stone-warm text-[10px] tracking-widest uppercase">
                Pak Hok Pai
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-1.5 text-[13px] text-ink-faded hover:text-ink transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-4 after:h-[1.5px] after:bg-seal after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div
                    className={`absolute top-full mt-2 ${isRTL ? "right-0" : "left-0"} bg-paper border border-ink/8 shadow-lg shadow-ink/5 py-2 min-w-[200px] z-50`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2 text-[13px] text-ink-faded hover:text-ink hover:bg-ink/[0.02] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language + Mobile */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="seal-stamp text-[10px] px-2 py-1 hover:bg-seal hover:text-paper-light transition-colors"
            >
              {locale === "he" ? "EN" : "עב"}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 text-ink-faded hover:text-ink"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-paper border-t border-ink/5 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm text-ink-faded hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-8 py-2 text-xs text-stone-warm hover:text-ink transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
