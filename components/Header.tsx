import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import NavList from "./NavList";
import { NavItem } from "@/interfaces/nav.interface";

export default async function Header() {
  const navItems: NavItem[] = await fetch(
    `${process.env.API_URL_V1}/header`
  ).then((res) => res.json().then((data) => data.navItems));

  return (
    <div className="z-40 top-0 flex flex-col w-full h-max">
      <header className="z-40 flex flex-col h-max items-center w-full fixed top-0 bg-[#ECEEEF]">
        <div className={`top-0 flex items-center justify-between w-full`}>
          <Link href="/" className={`flex my-6 ml-1/5`}>
            <Image src={logo} className="w-8" alt="logo" priority />
          </Link>

          <div className={`gap-6 lg:flex text-black mr-1/5`}>
            {navItems.map((navItem, index) => (
              <NavList navItem={navItem} key={index} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
