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
  title: "מרכז עגור לבן | White Crane Center - Pak Hok Pai",
  description: "אומנויות לחימה ובריאות הגוף והנפש - קונג פו, טאי צ'י, צ'י קונג, הילינג סיני",
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
      className={`${heebo.variable} ${notoSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
