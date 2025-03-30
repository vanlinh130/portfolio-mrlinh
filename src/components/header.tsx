import Link from "next/link";
import React from "react";
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";

function Header() {
  return (
    <nav className="flex items-center h-[80px] navbar-fixed">
      <div className="flex w-full items-center justify-between section-center">
        <div className="">
          <Link href="">
            <h4 className="text-[20px]">Le Van Linh</h4>
          </Link>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link href="" className="flex gap-3 items-center">
              <IoHome />
              <span className="text-[20px]">Home</span>
            </Link>
          </li>
          <li>
            <Link href="" className="flex gap-3 items-center">
              <FaRegUser />
              <span className="text-[20px]">About</span>
            </Link>
          </li>
          <li>
            <Link href="" className="flex gap-3 items-center">
              <CiCircleList />
              <span className="text-[20px]">Skills</span>
            </Link>
          </li>
          <li>
            <Link href="" className="flex gap-3 items-center">
              <IoBriefcaseOutline />
              <span className="text-[20px]">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link href="#contact" className="flex gap-3 items-center">
              <FaRegComments />
              <span className="text-[20px]">Contact</span>
            </Link>
          </li>
          <button></button>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
