import { NextResponse, NextRequest } from "next/server";
import type { NavItem } from "@/interfaces/nav.interface";

export async function GET(req: NextRequest, res: NextResponse) {
  const navItems: NavItem[] = [
    {
      id: 1,
      title: { name: "Specialities", link: "#specialities" },
    },
    {
      id: 2,
      title: { name: "About", link: "#about" },
      // list: [
      //   { show: true, name: "About Me", link: "/about" },
      //   { show: true, name: "Education", link: "/education" },
      //   { show: true, name: "Experience", link: "/experience" },
      // ],
    },
    {
      id: 3,
      title: { name: "Projects", link: "#projects" },
    },
    {
      id: 4,
      title: { name: "Contact", link: "#contact" },
    },
    {
      id: 5,
      title: { name: "Curriculum Vitae", link: "/cv" },
    },
  ];

  return NextResponse.json({ navItems });
}
