import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אן-מו עיסוי סיני",
  description:
    "טיפולי אן-מו (עיסוי סיני מסורתי) במרכז עגור לבן. עיסוי טיפולי לשחרור מתחים, כאבי שרירים ושיפור זרימת האנרגיה בגוף.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
