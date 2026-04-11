import type { Metadata } from "next";
import { Heebo, Noto_Serif_Hebrew, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSerif = Noto_Serif_Hebrew({
  variable: "--font-noto-serif",
  subsets: ["latin", "hebrew"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "מרכז עגור לבן | White Crane Center - Pak Hok Pai",
    template: "%s | מרכז עגור לבן",
  },
  description:
    "מרכז עגור לבן - בית ספר לאומנויות לחימה סיניות ובריאות הגוף והנפש. קונג פו פאק הוק פאי, טאי צ׳י, צ׳י קונג, הילינג סיני, עיסוי סיני ודיקור יבש.",
  keywords: [
    "מרכז עגור לבן",
    "White Crane Center",
    "קונג פו",
    "טאי צ׳י",
    "צ׳י קונג",
    "הילינג סיני",
    "פאק הוק פאי",
    "Pak Hok Pai",
    "אומנויות לחימה",
    "עיסוי סיני",
    "דיקור יבש",
  ],
  openGraph: {
    title: "מרכז עגור לבן | White Crane Center",
    description:
      "בית ספר לאומנויות לחימה סיניות ובריאות הגוף והנפש. קונג פו, טאי צ׳י, צ׳י קונג, הילינג סיני ועוד.",
    locale: "he_IL",
    type: "website",
    siteName: "מרכז עגור לבן",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${notoSerif.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
