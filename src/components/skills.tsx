import React from "react";
import { IconCSS, IconGithub, IconHTML, IconJS, IconMysql, IconNEXTJS, IconPostgresql, IconRails, IconREACT, IconRUBY, IconVercel } from "./icons";

function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML",
      icon: <IconHTML />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <IconCSS />,
    },
    {
        id: 3,
        name: "Javascript",
        icon: <IconJS />,
    },
    {
        id: 4,
        name: "React",
        icon: <IconREACT />,
    },
    {
        id: 5,
        name: "Next Js",
        icon: <IconNEXTJS />,
    },
    {
        id: 6,
        name: "Ruby",
        icon: <IconRUBY/>,
    },
    {
        id: 7,
        name: "Rails",
        icon: <IconRails/>,
    },
    {
        id: 8,
        name: "Mysql",
        icon: <IconMysql/>,
    },
    {
        id: 9,
        name: "Postgresql",
        icon: <IconPostgresql/>,
    },
    {
        id: 10,
        name: "Github",
        icon: <IconGithub/>,
    },
    {
        id: 11,
        name: "Vercel",
        icon: <IconVercel/>,
    },
  ];
  return (
    <div id="skills">
      <div className="mt-10 flex flex-col items-center">
        <h3 className="text-[#bad2ff] text-4xl font-bold ">Skills</h3>
        <div className="h-1 w-[80px] bg-[#bad2ff] mt-3"></div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-16 gap-10 px-5">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="col-span-1">
              <div className="flex flex-col items-center gap-1">
                {skill.icon}
                <p className="text-[#fff]">{skill.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
