import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "סיפו צחי שוחט",
  description:
    "סיפו צחי שוחט, מייסד מרכז עגור לבן ומורה בכיר לאומנויות לחימה סיניות פאק הוק פאי. ניסיון של עשרות שנים בהוראת קונג פו, טאי צ׳י, צ׳י קונג והילינג סיני.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
