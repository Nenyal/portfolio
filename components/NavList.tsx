"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavItem } from "@/interfaces/nav.interface";

export default function NavList({ navItem }: { navItem: NavItem }) {
  const [isHovered, setHovered] = useState(false);

  const shrink = {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  };

  const expand = {
    scale: 1,
    transition: {
      type: "",
      duration: 0.05,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {navItem?.title?.link ? (
        <Link
          href={navItem.title.link}
          className={`relative flex items-center gap-1 px-3 py-2 transition-all duration-300 ease-out group hover:shadow-sm ${
            navItem?.list && "hover:bg-white hover:text-slate-900"
          }`}
        >
          <p className="font-medium text-nowrap">{navItem.title.name}</p>
          {navItem?.list && (
            <ChevronDownIcon
              width={20}
              className="transition-all duration-300 ease-out group-hover:rotate-180"
            />
          )}
        </Link>
      ) : (
        <span className="relative flex items-center gap-1 py-2 text-sm transition-all duration-300 ease-out cursor-default sm:px-3 group hover:bg-slate-50 hover:shadow-sm">
          {navItem.title.name}
          {navItem?.list && (
            <ChevronDownIcon
              width={20}
              className="transition-all duration-300 ease-out group-hover:rotate-180"
            />
          )}
        </span>
      )}
      {navItem?.list && (
        <motion.ul
          initial={{ scale: 0 }}
          animate={isHovered ? expand : shrink}
          className="absolute z-20 flex flex-col min-w-full gap-2 p-2 overflow-auto overflow-x-hidden transition-all duration-500 ease-out bg-white shadow-md opacity-100 max-h-48 "
        >
          {navItem?.list?.map(
            (listItem: any, index: number) =>
              listItem?.show && (
                <li
                  key={index}
                  className="flex justify-between gap-4 px-2 py-1 font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 whitespace-nowrap"
                >
                  {listItem.link ? (
                    <Link className="w-full" href={listItem.link}>
                      {listItem.name}
                    </Link>
                  ) : (
                    <label
                      className="w-full text-sm cursor-pointer"
                      htmlFor={listItem.name}
                    >
                      {listItem.name}
                    </label>
                  )}
                </li>
              )
          )}
        </motion.ul>
      )}
    </div>
  );
}
