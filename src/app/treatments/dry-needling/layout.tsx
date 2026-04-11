import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "דיקור יבש אורטופדי",
  description:
    "טיפולי דיקור יבש אורטופדי במרכז עגור לבן. שיטה יעילה לטיפול בכאבי שרירים, מפרקים ובעיות אורטופדיות באמצעות מחטים דקות.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
