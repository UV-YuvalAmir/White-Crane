import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות מרכז עגור לבן",
  description:
    "מרכז עגור לבן הוקם על ידי סיפו צחי שוחט ומציע מגוון רחב של אומנויות לחימה סיניות, טיפולים הוליסטיים וקורסים לבריאות הגוף והנפש.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
