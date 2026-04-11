import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הילינג סיני פרח הלוטוס",
  description:
    "טיפולי הילינג סיני פרח הלוטוס במרכז עגור לבן. שיטת ריפוי אנרגטית סינית עתיקה לאיזון הגוף והנפש, שחרור כאבים וחיזוק מערכת החיסון.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
