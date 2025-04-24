import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#3b3b3b] flex flex-col gap-5 items-center justify-center py-8'>
      <ul className='flex gap-10'>
        <li>
          <Link href='https://www.facebook.com/profile.php?id=100033522635647'>
            <FaFacebook className='text-[30px] text-[#e9b949] hover:text-[#f9da8b] hover:scale-110 transition-all duration-300'/>
          </Link>
        </li>
        <li>
          <Link href='mailto:linhvanle130@gmail.com'>
            <MdEmail className='text-[30px] text-[#e9b949] hover:text-[#f9da8b] hover:scale-110 transition-all duration-300'/>
          </Link>
        </li>
        <li>
          <Link href='https://www.youtube.com/@DevLinh-sx8zh'>
            <FaYoutube className='text-[30px] text-[#e9b949] hover:text-[#f9da8b] hover:scale-110 transition-all duration-300'/>
          </Link>
        </li>
      </ul>
      <p className='text-[#fff] text-[18px]'>© 2025 Le Van Linh. all rights reserved</p>
    </div>
  )
}

export default Footer