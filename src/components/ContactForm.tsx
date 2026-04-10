"use client";

import { useState, FormEvent } from "react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/translations";

export default function ContactForm() {
  const { locale } = useLocale();
  const tr = t(locale);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`פנייה מהאתר - ${name}`);
    const body = encodeURIComponent(
      `שם: ${name}\nאימייל: ${email}\nטלפון: ${phone}\n\nהודעה:\n${message}`
    );
    window.open(`mailto:pakhokis@gmail.com?subject=${subject}&body=${body}`, "_self");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-10">
        <p className="text-seal heading-calligraphy text-lg mb-2">
          {locale === "he" ? "תודה!" : "Thank you!"}
        </p>
        <p className="text-stone-warm text-sm">
          {locale === "he" ? "ההודעה נשלחה בהצלחה" : "Your message has been sent"}
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder={tr.contact.name}
          required
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink/10 focus:border-ink/30 focus:outline-none transition-colors text-ink placeholder:text-ink/25 text-sm"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder={tr.contact.email}
          required
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink/10 focus:border-ink/30 focus:outline-none transition-colors text-ink placeholder:text-ink/25 text-sm"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder={tr.contact.phone}
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink/10 focus:border-ink/30 focus:outline-none transition-colors text-ink placeholder:text-ink/25 text-sm"
        />
      </div>
      <div>
        <textarea
          name="message"
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
