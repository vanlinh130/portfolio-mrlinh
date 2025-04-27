import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../db/projects.json";

const imageStyle = {
  width: "100%",
  height: "100%",
};

function Portfolio() {
  return (
    <div className="section-center flex flex-col">
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <h3 className="text-[#000] dark:text-[#fff] text-4xl font-bold ">
            Portfolios
          </h3>
          <div className="h-1 w-[80px] bg-[#e9b949] mt-3"></div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-8 px-4 mt-16">
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className="col-span-1 hover:scale-105 transition-all duration-300"
              >
                <div className="w-full bg-[#f1f5f8] dark:bg-[#252525] shadow-2xl rounded-bl-xl rounded-br-xl">
                  <div className="">
                    <Image
                      src={project.image}
                      alt='image'
                      width={500}
                      height={500}
                      style={imageStyle}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-5 px-4 py-6">
                    <h4 className="text-[#000] dark:text-[#fff] text-2xl mtt-2 font-semibold">
                      {project.name}
                    </h4>
                    <div className="flex flex-row items-baseline gap-1">
                      <h3 className="font-semibold text-[16px] text-[#000] dark:text-[#fff]">Tools: </h3>
                      <ul
                        className="flex flex-wrap gap-1 text-[13px] text-[#000] dark:text-[#fff] font-light"
                      >
                        {project?.Tools.map((tool, index) => {
                          return (
                              <li key={index} className="">
                                {tool.name},
                              </li>
                          );
                        })}
                        <div>
                          ...
                        </div>
                      </ul>
                    </div>
                    <p className="text-[16px] font-normal text-justify text-[#000] dark:text-[#fff]">
                      {project.description}
                    </p>
                    <div className="flex flex-col w-full gap-3">
                      <Link href={project.urlLive}>
                        <button className="flex items-center justify-center w-full py-1.5 px-3 shadow cursor-pointer rounded-[8px] bg-[#e9b949] text-[#000] font-bold hover:bg-[#f9da8b] hover:scale-105 transition-all duration-300">
                          Live
                        </button>
                      </Link>
                      <Link href={project.urlSource}>
                        <button className="flex items-center justify-center w-full py-1.5 px-3 shadow cursor-pointer rounded-[8px] bg-[#e9b949] text-[#000] font-bold hover:bg-[#f9da8b] hover:scale-105 transition-all duration-300">
                          Source
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center font-bold text-[#000] dark:text-[#fff] text-xl mt-8 cursor-pointer">
          <Link href="https://github.com/vanlinh130">
            See more on my Github
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
