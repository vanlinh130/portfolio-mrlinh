"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaRegUser, FaRegComments } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import ToggleTheme from "./toggleTheme";
import { FaBars } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* Navbar Fixed */}
      <div className="navbar-fixed flex w-full items-center justify-between bg-[#fff] dark:bg-[#3b3b3b] py-4 lg:px-10 md:px-8 px-5">
        <div>
          <Link href="#home">
            <h4 className="text-[20px] text-[#000] dark:text-[#fff] font-bold cursor-pointer">
              Le Van Linh
            </h4>
          </Link>
        </div>
        <div className="flex flex-row gap-5 items-center">
          {/* Desktop Menu */}
          <ul className="lg:flex md:flex flex-row gap-8 hidden">
            <NavItems />
          </ul>

          {/* Mobile toggle + theme */}
          <div className="flex items-center gap-5">
            <div
              className="lg:hidden md:hidden flex items-center justify-center text-[#000] dark:text-[#fff] text-[20px] cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars />
            </div>
            <div className="text-white pl-2 cursor-pointer border-solid border-l-[1px] border-l-[#ccc]">
              <ToggleTheme />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="fixed top-0 left-0 right-0 z-50 ">
        <div
          className={`absolute left-0 right-0 top-full z-50 flex flex-col bg-[#fff] dark:bg-[#3b3b3b] px-5 py-4 gap-4 shadow-md
          transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex justify-end text-[#000] dark:text-[#fff] text-[30px] cursor-pointer"  onClick={() => setIsOpen(!isOpen)}>
            <TiDelete />
          </div>
          <NavItems isMobile />
        </div>
      </div>


    </nav>
  );
}

const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => {
  const linkClass = "flex gap-3 items-center";
  const textClass = "text-[18px] text-[#000] dark:text-[#fff]";

  const navs = [
    { href: "#home", icon: <IoHome />, label: "Home" },
    { href: "#about", icon: <FaRegUser />, label: "About" },
    { href: "#skills", icon: <CiCircleList />, label: "Skills" },
    { href: "#portfolio", icon: <IoBriefcaseOutline />, label: "Portfolio" },
    { href: "#contact", icon: <FaRegComments />, label: "Contact" },
  ];

  return (
    <>
      {navs.map(({ href, icon, label }) => (
        <li key={label} className={isMobile ? " flex items-center justify-center pb-2" : ""}>
          <Link href={href} className={linkClass}>
            <span className="text-[#000] dark:text-[#fff]">{icon}</span>
            <span className={textClass}>{label}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Header;
