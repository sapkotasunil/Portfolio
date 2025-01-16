import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import Skills from "../Componenets/Skills";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoMdLeaf } from "react-icons/io";
import { PiFramerLogoFill } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";
import { FaFlutter } from "react-icons/fa6";

const SkillsData = () => {
  const skillDatas = [
    {
      icon: <FaHtml5 className=" h-[100%] w-12 lg:w-24  bg-secondaryColor" />,
      skillName: "HTML",
    },
    {
      icon: <FaNodeJs className=" h-[100%] w-12 lg:w-24  bg-secondaryColor" />,
      skillName: "Node JS",
    },
    {
      icon: <SiExpress className=" h-[100%] w-12 lg:w-24  bg-secondaryColor" />,
      skillName: "Express js",
    },
    {
      icon: <FaCss3Alt className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />,
      skillName: "CSS",
    },
    {
      icon: (
        <IoLogoJavascript className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
      ),
      skillName: "JavaScript",
    },
    {
      icon: (
        <RiTailwindCssFill className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
      ),
      skillName: "Tailwind",
    },
    {
      icon: <FaReact className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />,
      skillName: "React",
    },
    {
      icon: <FaCss3Alt className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />,
      skillName: "C",
    },
    {
      icon: <IoMdLeaf className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />,
      skillName: "Mango DB",
    },
    {
      icon: (
        <PiFramerLogoFill className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
      ),
      skillName: "Motion",
    },
    {
      icon: <GrMysql className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />,
      skillName: "MY SQL",
    },
    {
      icon: <FaFlutter className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />,
      skillName: "Flutter",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-3xl sm:text-4xl flex items-center gap-2 pt-12 lg:pt-24">
          <FaLaptopCode />
          Skills
        </h1>
      </div>
      <div className="max-w-[95vw] lg:max-w[45vw]">
        <div className="flex flex-wrap  lg:gap-x-6 lg:gap-y-2">
          {skillDatas.map((skill, key) => {
            return (
              <Skills
                icon={skill.icon}
                skillName={skill.skillName}
                index={key}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillsData;
