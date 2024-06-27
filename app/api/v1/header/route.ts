import { NextResponse, NextRequest } from "next/server";
import type { NavItem } from "@/interfaces/nav.interface";

export async function GET(req: NextRequest, res: NextResponse) {
  const locale = req.nextUrl.searchParams.get("locale");

  const navItems: NavItem[] = [
    {
      id: 1,
      title: {
        name:
          locale === "tr"
            ? "Uzmanlık Alanları"
            : locale === "de"
            ? "Spezialitäten"
            : "Specialities",
        link: "#specialities",
      },
    },
    {
      id: 2,
      title: {
        name:
          locale === "tr"
            ? "Hakkımda"
            : locale === "de"
            ? "Über mich"
            : "About",
        link: "#about",
      },
      // list: [
      //   { show: true, name: "About Me", link: "/about" },
      //   { show: true, name: "Education", link: "/education" },
      //   { show: true, name: "Experience", link: "/experience" },
      // ],
    },
    {
      id: 3,
      title: {
        name:
          locale === "tr"
            ? "Projeler"
            : locale === "de"
            ? "Projekte"
            : "Projects",
        link: "#projects",
      },
    },
    {
      id: 4,
      title: {
        name:
          locale === "tr"
            ? "İletişim"
            : locale === "de"
            ? "Kontakt"
            : "Contact",
        link: "#contact",
      },
    },
    {
      id: 5,
      title: {
        name:
          locale === "tr"
            ? "Özgeçmiş"
            : locale === "de"
            ? "Lebenslauf"
            : "Resume",
        link: "/cv",
      },
    },
  ];

  return NextResponse.json({ navItems });
}
