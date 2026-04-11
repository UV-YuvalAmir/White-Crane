import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מערכת שעות",
  description:
    "מערכת השעות של מרכז עגור לבן. שיעורי קונג פו, טאי צ׳י, צ׳י קונג והילינג סיני בימים ובשעות נוחים.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
