import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "גלריית תמונות",
  description:
    "גלריית תמונות של מרכז עגור לבן. תמונות משיעורים, אירועים, הופעות ריקוד האריה ופעילויות המרכז.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
