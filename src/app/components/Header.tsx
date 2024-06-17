"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.svg";
import NavList from "@/app/components/NavList";
export default function Header() {
  const navItems = [
    {
      title: { name: "About", link: "/about" },
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
    <div className="z-40 flex flex-col h-max items-center w-full fixed">
      <header className="flex items-start justify-center w-full absolute h-fit backdrop-blur-sm bg-[#ECEEEF]">
        <div
          className={`flex items-start justify-center w-full absolute h-fit backdrop-blur-sm`}
        >
          <div className={`top-0 flex items-center justify-between w-full`}>
            <Link href="/" className={`flex my-6`}>
              <Image src={logo} className="w-24" alt="logo" priority />
            </Link>

            <div className={`hidden gap-6 lg:flex text-black`}>
              {navItems.map((navItem, index) => (
                <NavList
                  navItem={navItem}
                  key={index}
                  setBody={undefined}
                  body={undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
