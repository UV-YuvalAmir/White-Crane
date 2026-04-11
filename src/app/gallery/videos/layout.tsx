import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "גלריית וידאו",
  description:
    "גלריית וידאו של מרכז עגור לבן. סרטונים של שיעורים, הדגמות קונג פו, טאי צ׳י, צ׳י קונג והופעות ריקוד האריה.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
