import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "סניפים",
  description:
    "סניפי מרכז עגור לבן ברחבי הארץ. מצאו את הסניף הקרוב אליכם לשיעורי קונג פו, טאי צ׳י וצ׳י קונג.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
