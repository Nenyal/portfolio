"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import NavList from "./NavList";
import { NavItem } from "@/interfaces/nav.interface";
import { useCallback, useEffect, useState } from "react";

interface HeaderProps {
  navItems: NavItem[];
}

export default function Header({ navItems }: HeaderProps) {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="z-40 top-0 flex flex-col w-full h-max">
      <header className="z-40 flex flex-col h-max items-center w-full fixed top-0 bg-white shadow-sm">
        <div className={`top-0 flex items-center justify-between w-full`}>
          <Link href="/" className={`flex my-6 ml-5 lg:ml-1/6`}>
            <Image src={logo} className="w-72" alt="logo" priority />
          </Link>

          <div className="lg:hidden absolute z-50 top-0 right-0 mr-5 mt-7 text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              {mobile ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </div>
          {!!mobile && (
            <div
              className={`lg:hidden absolute z-50 top-[80px] bg-white border left-0 w-full`}
              onClick={() => {
                setMobile(false);
              }}
            >
              {navItems.map((navItem) => (
                <NavList navItem={navItem} key={navItem.id} />
              ))}
            </div>
          )}

          <div className={`gap-6 lg:flex hidden text-black mr-5 lg:mr-1/6`}>
            {navItems.map((navItem) => (
              <NavList navItem={navItem} key={navItem.id} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
