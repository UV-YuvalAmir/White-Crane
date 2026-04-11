import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "פלדנקרייז",
  description:
    "שיעורי פלדנקרייז במרכז עגור לבן. שיטת תנועה לשיפור גמישות, יציבה ומודעות גופנית באמצעות תנועות עדינות ומדויקות.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
