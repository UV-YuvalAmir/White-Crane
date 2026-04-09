"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "@/lib/locale-context";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <Header />
      <main className="flex-1 pt-20 overflow-x-hidden">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
