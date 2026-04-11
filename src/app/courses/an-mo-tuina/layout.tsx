import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "קורס אנמו טווינא",
  description:
    "קורס אנמו טווינא במרכז עגור לבן. למדו עיסוי סיני מסורתי וטכניקות טיפוליות לשחרור כאבים, מתחים ושיפור בריאות הגוף.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
