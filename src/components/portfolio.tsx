import Image from "next/image";
import Link from "next/link";
import React from "react";

const imageStyle = {
  width: "100%",
  height: "100%",
};

function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description:
        "ACM at CSUF 1-week virtual website hackathon for Spring 2024, animation built using GSAP",
      image: "/img.png",
      techStack: [
        {
          name: "Next.js",
          icon: "/nextjs.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/nextjs.svg",
        },
        {
          name: "GSAP",
          icon: "/nextjs.svg",
        },
        {
          name: "Framer Motion",
          icon: "/nextjs.svg",
        },
      ],
    },
    {
      id: 2,
      name: "Project 2",
      description:
        "ACM at CSUF 1-week virtual website hackathon for Spring 2024, animation built using GSAP",
      image: "/img.png",
      techStack: [
        {
          name: "Next.js",
          icon: "/nextjs.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/nextjs.svg",
        },
      ],
    },
    {
      id: 3,
      name: "Project 3",
      description:
        "ACM at CSUF 1-week virtual website hackathon for Spring 2024, animation built using GSAP",
      image: "/img.png",
      techStack: [
        {
          name: "Next.js",
          icon: "/nextjs.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/nextjs.svg",
        },
      ],
    },
  ];
  return (
    <div id="portfolio" className="flex flex-col">
      <div className="mt-10 flex flex-col items-center">
        <h3 className="text-[#bad2ff] text-4xl font-bold ">Projects</h3>
        <div className="h-1 w-[80px] bg-[#bad2ff] mt-3"></div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4 mt-16">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="col-span-1 px-5 hover:scale-105 transition-all duration-300"
            >
              <Link href="" className="cursor-pointer">
                <div className="w-full h-[490px] bg-[#3b3b3b] rounded-bl-xl rounded-br-xl">
                  <div className="h-[200px]">
                    <Image
                      src="/img.png"
                      alt={project.image}
                      width={500}
                      height={500}
                      style={imageStyle}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col mx-4 mt-1">
                    <h4 className="text-[#fff] text-2xl my-2 font-semibold">
                      {project.name}
                    </h4>
                    <div className="flex flex-wrap gap-1 mb-2 font-bold">
                      {project.techStack.map((tech, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center bg-[#0284c7] mr-2 mb-2 py-1 px-2 rounded-md"
                          >
                            <div className="h-[20px] w-[20px] mr-1">
                              <Image
                                src={tech.icon}
                                alt="image"
                                width={500}
                                height={500}
                                style={imageStyle}
                                className="rounded-full w-4 h-4 mr-1"
                              />
                            </div>
                            <span className="text-[#fff] text-sm">
                              {tech.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[16px] font-normal mb-8 text-[#fff] ">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center font-bold text-[#fff] text-xl mt-8 cursor-pointer">
        <Link href="https://github.com/vanlinh130">See more on my Github</Link>
      </div>
    </div>
  );
}

export default Portfolio;
