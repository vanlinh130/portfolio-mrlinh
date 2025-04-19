import React from "react";

function About() {
  return (
    <div id="about">
      <div className="mt-10 flex flex-col items-center">
        <h3 className="text-[#bad2ff] text-4xl font-bold ">About Me</h3>
        <div className="h-1 w-[80px] bg-[#bad2ff] mt-3"></div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 px-5 mt-16">
        <div className="col-span-1">
          <h3 className="font-bold text-2xl text-[#bad2ff]">Get to know me!</h3>
          <p className="text-[#fff] dark:text-[#000] text-[18px] my-3.5">
            My name is Le Van Linh, nickname Mr.Linh, I like to do new things
            and want to know more experience in my programming industry
            <br />I enjoy coding and the challenge of learning something new
            everyday
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold text-2xl text-[#bad2ff]">Education</h3>
          <p className="text-[#fff] dark:text-[#000] text-[18px] my-3.5">
            2019-2023
          </p>
          <h3 className="font-bold text-xl text-[#bad2ff]">
            The University Of Danang, Dong A University
          </h3>
          <p className="text-[#fff] dark:text-[#000] text-[18px] my-3.5">
            Major
          </p>
          <h3 className="font-bold text-xl text-[#bad2ff]">
            Information Technology
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
