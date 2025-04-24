import Image from "next/image"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const imageStyle = {
  width: "100%",
  height: "100%",
}

function Content() {
  return (
    <section className='section-center lg:py-10 md:py-8 py-8' id='home'>
      <div className='flex lg:flex-row md:flex-col flex-col w-full lg:gap-3 md:gap-5 gap-10'>
        <div className='lg:w-[50%] md:w-[50%] w-full lg:pl-10 md:pl-5 px-5 flex flex-col justify-center lg:text-left text-center gap-3'>
          <h3 className='text-[#000] dark:text-[#fff] text-xl my-3.5'>Hello, my name is 
            <span className='text-[#000] dark:text-[#fff] ml-2 font-semibold'>Van Linh</span>
          </h3>
          <h3 className='text-[#000] dark:text-[#fff] lg:text-6xl md:text-5xl text-5xl font-bold'> 
            <span className='text-[#000] dark:text-[#fff]'>Fullstack Developer</span>
          </h3>
          <p className="text-[#000] dark:text-[#fff] text-xl my-3.5">I love building a complete website & building android</p>
          <div className="flex lg:justify-start md:justify-start justify-center gap-5 pt-2">
            <Link href='#about'>
              <button className="flex items-center justify-center py-1.5 px-3 uppercase shadow cursor-pointer rounded-[8px] bg-[#e9b949] text-[#000] font-bold hover:bg-[#f9da8b] hover:scale-105 transition-all duration-300">
                about me
              </button>
            </Link>
            <Link href='#portfolio'>
              <button className="flex items-center justify-center py-1.5 px-3 uppercase shadow cursor-pointer rounded-[8px] bg-[#e9b949] text-[#000] font-bold hover:bg-[#f9da8b] hover:scale-105 transition-all duration-300">
                portfolio
              </button>
            </Link>
          </div>
          <ul className='flex lg:justify-start md:justify-start justify-center  gap-10 mt-5'>
            <li>
              <Link href='https://www.facebook.com/profile.php?id=100033522635647'>
                <FaFacebook className='text-[30px] text-[#000] dark:text-[#fff] hover:text-[#f9da8b] hover:scale-110 transition-all duration-300'/>
              </Link>
            </li>
            <li>
              <Link href='mailto:linhvanle130@gmail.com'>
                <MdEmail className='text-[30px] text-[#000] dark:text-[#fff] hover:text-[#f9da8b] hover:scale-110 transition-all duration-300'/>
              </Link>
            </li>
            <li>
              <Link href='https://www.youtube.com/@DevLinh-sx8zh'>
                <FaYoutube className='text-[30px] text-[#000] dark:text-[#fff] hover:text-[#f9da8b] hover:scale-110 transition-all duration-300'/>
              </Link>
            </li>
          </ul>
        </div>
        <div className='lg:w-[50%] md:w-[50%] w-full flex items-center justify-center lg:pr-10 md:pr-5 px-5'>
          <div className="lg:h-[560px] md:h-[480px] h-[350px] home-img">
            <Image src='/info.png' alt="image" width={500} height={500} style={imageStyle} className="rounded-[20px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content