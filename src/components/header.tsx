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
      <div className="navbar-fixed bg-[#fff] dark:bg-[#3b3b3b]">
        <div className="section-center flex w-full items-center justify-between py-5 lg:px-10 md:px-8 px-5">
          <div>
            <Link href="#home">
              <h4 className="text-[20px] text-[#e67e22] font-bold cursor-pointer">
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
      </div>

      {/* Mobile Menu */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`fixed top-0 left-0 w-full z-50 flex flex-col bg-[#fff] dark:bg-[#3b3b3b] px-5 py-4 gap-4 shadow-md
          transition-transform transition-opacity duration-700 ease-in-out ${
            isOpen
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
          style={{ height: "100vh" }}
        >
          <div
            className="flex justify-end text-[#000] dark:text-[#fff] text-[40px] px-3 pt-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <TiDelete />
          </div>
          <NavItems isMobile setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  );
}

const NavItems = ({
  isMobile = false,
  setIsOpen,
}: {
  isMobile?: boolean;
  setIsOpen?: (value: boolean) => void;
}) => {
  const linkClass = "flex gap-3 items-center";
  const textClass = "text-[#000] dark:text-[#fff] hover:text-[#e9b949] transition-colors duration-300";

  const navs = [
    { href: "#home", icon: <IoHome />, label: "Home" },
    { href: "#about", icon: <FaRegUser />, label: "About" },
    { href: "#skills", icon: <CiCircleList />, label: "Skills" },
    { href: "#portfolio", icon: <IoBriefcaseOutline />, label: "Portfolios" },
    { href: "#contact", icon: <FaRegComments />, label: "Contact" },
  ];

  return (
    <>
      {navs.map(({ href, icon, label }) => (
        <li
          key={label}
          className={
            isMobile
              ? "flex flex-row w-full ml-10 pb-2 text-2xl transition-transform duration-300 hover:translate-x-2"
              : "text-[18px]"
          }
        >
          <Link href={href} className={linkClass}>
            <span className="text-[#e9b949]">{icon}</span>
            <span
              className={textClass}
              onClick={() => {
                if (isMobile && setIsOpen) setIsOpen(false);
              }}
            >
              {label}
            </span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Header;
