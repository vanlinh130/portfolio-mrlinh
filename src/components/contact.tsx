import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdAddHome } from "react-icons/md";

function Contact() {
  return (
    <div id="contact">
      <div className="mt-10 flex flex-col items-center">
        <h3 className="text-[#bad2ff] text-4xl font-bold ">Contact</h3>
        <div className="h-1 w-[80px] bg-[#bad2ff] mt-3"></div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 px-5 mt-16 gap-5">
        <div className="col-span-1 flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-[#bad2ff]">Contact Info</h3>
          <ul className="flex flex-col gap-5 text-[16px]">
            <li className="flex flex-row gap-3 items-center">
              <FaMapMarkerAlt className="text-[#bad2ff] text-[20px]" />
              <span className="text-[#fff] dark:text-[#000]">
                Address: Da Nang City, Vietnam
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <FaPhoneAlt className="text-[#bad2ff] text-[20px]" />
              <span className="text-[#fff] dark:text-[#000]">
                Phone:{" "}
                <Link
                  href="tel:+84 7894 5995"
                  className="hover:text-[#bad2ff] cursor-pointer"
                >
                  +84 7894 5995
                </Link>
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <MdEmail className="text-[#bad2ff] text-[20px]" />
              <span className="text-[#fff] dark:text-[#000]">
                Email:{" "}
                <Link
                  href="mailto:linhvanle130@gmail.com"
                  className="hover:text-[#bad2ff] cursor-pointer"
                >
                  linhvanle130@gmail.com
                </Link>
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <MdAddHome className="text-[#bad2ff] text-[20px]" />
              <span className="text-[#fff] dark:text-[#000]">
                MyCV:{" "}
                <Link
                  href="https://www.topcv.vn/quan-ly-cv"
                  className="hover:text-[#bad2ff] cursor-pointer"
                >
                  Le Van Linh
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-[#bad2ff]">Contact Form</h3>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md  text-[#fff] border border-[#767676] focus:outline-none focus:border-[#bad2ff]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md  text-[#fff] border border-[#767676] focus:outline-none focus:border-[#bad2ff]"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 rounded-md  text-[#fff] border border-[#767676] focus:outline-none focus:border-[#bad2ff]"
            ></textarea>
            <button className="bg-[#bad2ff] text-white p-3 rounded-md hover:bg-blue-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
