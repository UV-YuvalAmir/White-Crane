import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ריקוד האריה",
  description:
    "ריקוד האריה הסיני במרכז עגור לבן. מסורת סינית עתיקה המשלבת אומנויות לחימה, אקרובטיקה ומוזיקה לאירועים וטקסים.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
