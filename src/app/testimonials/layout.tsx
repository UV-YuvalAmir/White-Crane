import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מטופלים משתפים",
  description:
    "עדויות וחוויות של מטופלים ותלמידים במרכז עגור לבן. סיפורים אישיים על טיפולי הילינג סיני, קונג פו, טאי צ׳י ועוד.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
