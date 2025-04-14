import Link from "next/link"

function Content() {
  return (
    <section className='py-10'>
      <div className='grid grid-cols-2 gap-5'>
        <div className='col-span-1 px-6 flex flex-col justify-center'>
          <h3 className='text-[#fff] dark:text-[#000] text-[28px] my-3.5'>Hello, my name is 
            <span className='text-[#bad2ff] ml-2'>Van Linh</span>
          </h3>
          <h3 className='text-[#fff] dark:text-[#000] text-[30px]'>I'm a 
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
        <div className='col-span-1 flex items-center justify-center'>
          <div className="h-[480px] home-img">
            <img src='./info.png' alt="image" className="h-full rounded-[20px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content