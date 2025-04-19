import Link from "next/link";
import React from "react";
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import ToggleTheme from "./toggleTheme";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <nav>
      <div className="flex w-full items-center justify-between bg-[#3b3b3b] dark:bg-[#fffaeb] py-4 lg:px-10 md:px-8 px-5 rounded-lg mt-2.5">
        <div className="">
          <Link href="">
            <h4 className="text-[20px] text-[#fff] dark:text-[#000]">
              Le Van Linh
            </h4>
          </Link>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <ul className="lg:flex md:flex flex-row gap-8 hidden">
            <li>
              <Link href="#home" className="flex gap-3 items-center">
                <IoHome className="dark:text-[#000] text-[#fff]" />
                <span className="text-[20px] dark:text-[#000] text-[#fff]">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="#about" className="flex gap-3 items-center">
                <FaRegUser className="dark:text-[#000] text-[#fff]" />
                <span className="text-[20px] dark:text-[#000] text-[#fff]">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="#skills" className="flex gap-3 items-center">
                <CiCircleList className="dark:text-[#000] text-[#fff]" />
                <span className="text-[20px] dark:text-[#000] text-[#fff]">
                  Skills
                </span>
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="flex gap-3 items-center">
                <IoBriefcaseOutline className="dark:text-[#000] text-[#fff]" />
                <span className="text-[20px] dark:text-[#000] text-[#fff]">
                  Portfolio
                </span>
              </Link>
            </li>
            <li>
              <Link href="#contact" className="flex gap-3 items-center">
                <FaRegComments className="dark:text-[#000] text-[#fff]" />
                <span className="text-[20px] dark:text-[#000] text-[#fff]">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <div className="lg:hidden md:hidden flex items-center justify-center text-[#fff] dark:text-[#000] text-[20px] cursor-pointer">
              <FaBars />
            </div>
            <div className="text-white pl-2 cursor-pointer  border-l-[1px] border-l-[#ccc]">
              <ToggleTheme />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
