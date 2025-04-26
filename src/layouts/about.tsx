import React from "react";

function About() {
  return (
    <div className="section-center">
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <h3 className="text-[#000] dark:text-[#fff] text-4xl font-bold ">About Me</h3>
          <div className="h-1 w-[80px] bg-[#e9b949] mt-3"></div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 px-5 lg:mt-16 md:mt-12 mt-10">
          <div className="col-span-1">
            <h3 className="font-bold text-2xl text-[#000] dark:text-[#e9b949]">Get to know me!</h3>
            <p className="text-[#000] dark:text-[#fff] text-[18px] my-3.5">
              My name is Le Van Linh, nickname Mr.Linh, I like to do new things
              and want to know more experience in my programming industry
              <br />I enjoy coding and the challenge of learning something new
              everyday
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold text-2xl text-[#000] dark:text-[#e9b949]">Education</h3>
            <p className="text-[#000] dark:text-[#fff] text-[18px] my-3.5">
              2019-2023
            </p>
            <h3 className="font-bold text-xl text-[#000] dark:text-[#e9b949]">
              The University Of Danang, Dong A University
            </h3>
            <p className="text-[#000] dark:text-[#fff] text-[18px] my-3.5">
              Major
            </p>
            <h3 className="font-bold text-xl text-[#000] dark:text-[#e9b949]">
              Information Technology
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
