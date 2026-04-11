import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "המדריכים שלנו",
  description:
    "הכירו את צוות המדריכים המקצועי של מרכז עגור לבן. מורים מוסמכים לקונג פו, טאי צ׳י, צ׳י קונג, הילינג סיני ועוד.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
