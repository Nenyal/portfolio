"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavItem, NavListItem } from "@/interfaces/nav.interface";

export default function NavList({ navItem }: { navItem: NavItem }) {
  const [isHovered, setHovered] = useState(false);

  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={navItem.title.link}
        className={`relative flex items-center gap-1 px-3 py-2 transition-all duration-300 ease-out group hover:shadow-sm ${
          navItem?.list ? "hover:bg-white hover:text-slate-900" : ""
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

      <AnimatePresence>
        {isHovered && navItem?.list && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="absolute z-20 flex flex-col min-w-full gap-2 p-2 overflow-hidden transition-all duration-300 ease-out bg-white shadow-md opacity-100"
          >
            {navItem?.list?.map(
              (listItem: NavListItem, index: number) =>
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
      </AnimatePresence>
    </div>
  );
}
