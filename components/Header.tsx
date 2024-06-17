import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import NavList from "./NavList";
import { NavItem } from "@/interfaces/nav.interface";

export default function Header() {
  const navItems: NavItem[] = [
    {
      title: { name: "About", link: "/about" }, list: [
        { show: true, name: "About Me", link: "/about" },
        { show: true, name: "Education", link: "/education" },
        { show: true, name: "Experience", link: "/experience" },
      ]
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

  return (
    <div className="z-40 top-0 flex flex-col w-full h-max sticky">
      <header className="z-40 flex flex-col h-max items-center w-full">
        <div
          className={`flex items-start justify-center w-full absolute h-fit backdrop-blur-sm bg-[#ECEEEF]`}
        >
          <div className={`top-0 flex items-center justify-between w-full`}>
            <Link href="/" className={`flex my-6`}>
              <Image src={logo} className="w-8 " alt="logo" priority />
            </Link>

            <div className={`hidden gap-6 lg:flex text-black`}>
              {navItems.map((navItem, index) => (
                <NavList navItem={navItem} key={index} />
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
