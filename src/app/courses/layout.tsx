import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "קורסים, חוגים וסדנאות",
  description:
    "קורסים, חוגים וסדנאות במרכז עגור לבן. הילינג סיני, אנמו טווינא, פלדנקרייז, יוגה ועוד. הצטרפו ולמדו אומנויות ריפוי ותנועה.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
