import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdAddHome } from "react-icons/md";

function Contact() {
  return (
    <div className="section-center" id="contact">
      <div className="flex flex-col items-center">
        <h3 className="text-[#000] dark:text-[#fff] text-4xl font-bold ">Contact</h3>
        <div className="h-1 w-[80px] bg-[#e9b949] mt-3"></div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 px-5 mt-16 lg:gap-5 md:gap-5 gap-10">
        <div className="col-span-1 flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-[#000] dark:text-[#e9b949]">Contact Info</h3>
          <ul className="flex flex-col gap-5 text-[16px]">
            <li className="flex flex-row gap-3 items-center">
              <FaMapMarkerAlt className="text-[#000] dark:text-[#e9b949] text-[20px]" />
              <span className="text-[#000] dark:text-[#fff]">
                Address: Da Nang City, Vietnam
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <FaPhoneAlt className="text-[#000] dark:text-[#e9b949] text-[20px]" />
              <span className="text-[#000] dark:text-[#fff]">
                Phone:{" "}
                <Link
                  href="tel:+84 7894 5995"
                  className="hover:text-[#e9b949] cursor-pointer"
                >
                  +84 7894 5995
                </Link>
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <MdEmail className="text-[#000] dark:text-[#e9b949] text-[20px]" />
              <span className="text-[#000] dark:text-[#fff]">
                Email:{" "}
                <Link
                  href="mailto:linhvanle130@gmail.com"
                  className="hover:text-[#e9b949] cursor-pointer"
                >
                  linhvanle130@gmail.com
                </Link>
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <MdAddHome className="text-[#000] dark:text-[#e9b949] text-[20px]" />
              <span className="text-[#000] dark:text-[#fff]">
                MyCV:{" "}
                <Link
                  href="https://www.topcv.vn/quan-ly-cv"
                  className="hover:text-[#e9b949] cursor-pointer"
                >
                  Le Van Linh
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-[#000] dark:text-[#e9b949]">Contact Form</h3>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md text-[#fff] border border-solid border-[#767676] "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md text-[#fff] border border-solid border-[#767676] "
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 rounded-md text-[#fff] border border-solid border-[#767676]"
            ></textarea>
            <button className="flex items-center justify-center w-[200px] py-1.5 px-3 uppercase shadow rounded-[8px] cursor-pointer bg-[#e9b949] hover:bg-[#f9da8b] text-[#000] font-bold hover:scale-105 transition-all duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
