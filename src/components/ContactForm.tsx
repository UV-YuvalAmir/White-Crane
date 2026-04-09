"use client";

import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/translations";

export default function ContactForm() {
  const { locale } = useLocale();
  const tr = t(locale);

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          type="text"
          placeholder={tr.contact.name}
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink/10 focus:border-ink/30 focus:outline-none transition-colors text-ink placeholder:text-ink/25 text-sm"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder={tr.contact.email}
          required
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink/10 focus:border-ink/30 focus:outline-none transition-colors text-ink placeholder:text-ink/25 text-sm"
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder={tr.contact.phone}
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink/10 focus:border-ink/30 focus:outline-none transition-colors text-ink placeholder:text-ink/25 text-sm"
        />
      </div>
      <div>
        <textarea
          placeholder={tr.contact.message}
          rows={4}
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink/10 focus:border-ink/30 focus:outline-none transition-colors text-ink placeholder:text-ink/25 text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-8 py-2.5 border border-ink text-ink text-sm tracking-wide hover:bg-ink hover:text-paper transition-all duration-300"
      >
        {tr.contact.send}
      </button>
    </form>
  );
}
