import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "בלוג",
  description:
    "הבלוג של מרכז עגור לבן. מאמרים על אומנויות לחימה סיניות, פילוסופיה טאואיסטית, צ׳י קונג, הילינג סיני ובריאות הגוף והנפש.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
