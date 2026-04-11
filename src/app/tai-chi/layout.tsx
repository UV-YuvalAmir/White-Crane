import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "טאי צ׳י",
  description:
    "שיעורי טאי צ׳י במרכז עגור לבן. אומנות תנועה סינית עתיקה לשיפור שיווי משקל, גמישות, הרפיה ובריאות כללית.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
