import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NavItem } from "@/interfaces/nav.interface";

const sen = Sen({ subsets: ["latin"], weight: "400" });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: "Selim Goktug Cankurtaran - Software Engineer",
  description:
    "Selim Goktug Cankurtaran is a software engineer based in Istanbul, Turkey.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const navItems: NavItem[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/header?locale=${locale}`
  )
    .then((res) => res.json())
    .then((data) => data.navItems);

  return (
    <html lang={locale} className="h-full" style={{ scrollBehavior: "smooth" }}>
      <body className={`${sen.className} h-full`}>
        <Header navItems={navItems} />
        <div className="min-h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
