import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sen = Sen({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Selim Goktug Cankurtaran - Software Engineer",
  description:
    "Selim Goktug Cankurtaran is a software engineer based in Istanbul, Turkey.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} className="h-full" style={{ scrollBehavior: "smooth" }}>
      <body className={`${sen.className} h-full`}>
        <Header />
        <div className="min-h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
