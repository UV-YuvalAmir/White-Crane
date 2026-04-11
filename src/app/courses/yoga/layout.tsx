import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ויג׳נאנה יוגה",
  description:
    "שיעורי ויג׳נאנה יוגה במרכז עגור לבן. גישה ייחודית ליוגה המשלבת מודעות גופנית, נשימה ותנועה לאיזון פנימי ושלווה.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
