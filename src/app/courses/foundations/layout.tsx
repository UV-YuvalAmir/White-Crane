import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "קורס הילינג סיני יסודות",
  description:
    "קורס יסודות ההילינג הסיני במרכז עגור לבן. קורס בסיסי ללימוד עקרונות הריפוי האנרגטי הסיני, תרגול מעשי וכלים לטיפול עצמי.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
