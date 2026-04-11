import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונג פו פאק הוק פאי",
  description:
    "שיעורי קונג פו בסגנון פאק הוק פאי (עגור לבן) במרכז עגור לבן. אומנות לחימה סינית עתיקה המשלבת טכניקות תקיפה, הגנה ופיתוח גוף ונפש.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
