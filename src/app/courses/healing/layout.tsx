import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "קורס הילינג סיני פרח הלוטוס",
  description:
    "קורס הילינג סיני פרח הלוטוס במרכז עגור לבן. למדו שיטת ריפוי אנרגטית סינית עתיקה לטיפול בכאבים, איזון אנרגטי וחיזוק הבריאות.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
