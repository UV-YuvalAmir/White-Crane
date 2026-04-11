import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צ׳י קונג ומדיטציה",
  description:
    "שיעורי צ׳י קונג ומדיטציה במרכז עגור לבן. תרגילי נשימה, תנועה ומדיטציה לחיזוק אנרגיית החיים, שיפור הבריאות והרגעת הנפש.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
