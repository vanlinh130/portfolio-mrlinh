import Image from "next/image"
import Link from "next/link"

const imageStyle = {
  width: "100%",
  height: "100%",
}

function Content() {
  return (
    <section className='py-10' id='home'>
      <div className='flex lg:flex-row md:flex-row flex-col-reverse w-full gap-5 '>
        <div className='lg:w-[50%] md:w-[50%] w-full lg:pl-10 md:pl-5 px-5 flex flex-col justify-center'>
          <h3 className='text-[#fff] dark:text-[#000] text-[28px] my-3.5'>Hello, my name is 
            <span className='text-[#bad2ff] ml-2'>Van Linh</span>
          </h3>
          <h3 className='text-[#fff] dark:text-[#000] text-[30px]'> 
            <span className='text-[#bad2ff] ml-2 text-5xl'>Fullstack Developer</span>
          </h3>
          <p className="text-[#fff] dark:text-[#000] text-[18px] my-3.5">I love building a complete website & building android</p>
          <div className="flex items-center gap-5 pt-2">
            <Link href='' className="flex items-center justify-center py-1.5 px-3 uppercase shadow rounded-[8px] bg-[#bad2ff] text-[#000] font-bold cursor-pointer">
              about me
            </Link>
            <Link href='' className="flex items-center justify-center py-1.5 px-3 uppercase shadow rounded-[8px] bg-[#bad2ff] text-[#000] font-bold cursor-pointer">
              portfolio
            </Link>
          </div>
        </div>
        <div className='lg:w-[50%] md:w-[50%] w-full flex items-center justify-center px-10'>
          <div className="lg:h-[480px] md:h-[480px] h-[350px] home-img">
            <Image src='/info.png' alt="image" width={500} height={500} style={imageStyle} className="rounded-[20px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content