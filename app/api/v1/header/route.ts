import { NextResponse, NextRequest } from "next/server";
import type { NavItem } from "@/interfaces/nav.interface";

export async function GET(req: NextRequest, res: NextResponse) {
  const navItems: NavItem[] = [
    {
      title: { name: "About", link: "/about" },
      list: [
        { show: true, name: "About Me", link: "/about" },
        { show: true, name: "Education", link: "/education" },
        { show: true, name: "Experience", link: "/experience" },
      ],
    },
    {
      title: { name: "Projects", link: "/projects" },
    },
    {
      title: { name: "Contact", link: "/contact" },
    },
    {
      title: { name: "Curriculum Vitae", link: "/cv" },
    },
  ];

  return NextResponse.json({ navItems });
}
