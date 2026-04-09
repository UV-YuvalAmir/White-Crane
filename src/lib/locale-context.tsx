"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Locale } from "./translations";

interface LocaleContextType {
  locale: Locale;
  toggleLocale: () => void;
  isRTL: boolean;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "he",
  toggleLocale: () => {},
  isRTL: true,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("he");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "he" ? "en" : "he"));
  }, []);

  const isRTL = locale === "he";

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} lang={locale}>
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
