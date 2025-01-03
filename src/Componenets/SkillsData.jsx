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
  return (
    <>
      <div>
        <h1 className="text-3xl sm:text-4xl flex items-center gap-2 pt-12 lg:pt-24">
          <FaLaptopCode />
          Skills
        </h1>
      </div>
      <div className="max-w-[95vw] lg:max-w[45vw]">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6  justify-between  pr-4 pt-3 lg:py-4">
          <Skills
            icon={
              <FaHtml5 className=" h-[100%] w-12 lg:w-24  bg-secondaryColor" />
            }
            skillName={"HTML"}
          />

          <Skills
            icon={
              <FaCss3Alt className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"CSS"}
          />
        </div>
        <div className=" justify-between flex flex-col lg:flex-row gap-3 lg:gap-6 pr-4 pt-3 lg:py-4">
          <Skills
            icon={
              <IoLogoJavascript className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"JavaScript"}
          />
          <Skills
            icon={
              <RiTailwindCssFill className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"Tailwind"}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 justify-between pr-4 pt-3 lg:py-4">
          <Skills
            icon={
              <FaReact className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"React"}
          />
          <Skills
            icon={
              <FaCss3Alt className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"C"}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 justify-between pr-4 pt-3 lg:py-4">
          <Skills
            icon={
              <TbBrandCpp className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"C++"}
          />
          <Skills
            icon={
              <FaJava className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"Java"}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 justify-between pr-4 pt-3 lg:py-4">
          <Skills
            icon={
              <FaNodeJs className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"Node JS"}
          />
          <Skills
            icon={
              <SiExpress className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"Express Js"}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 justify-between pr-4 pt-3 lg:py-4">
          <Skills
            icon={
              <IoMdLeaf className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"Mango DB"}
          />
          <Skills
            icon={
              <PiFramerLogoFill className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"Framer Motion"}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6  justify-between pr-4 pt-3 lg:py-4">
          <Skills
            icon={
              <GrMysql className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"MY SQL"}
          />
          <Skills
            icon={
              <FaFlutter className="h-[100%] w-12 lg:w-24 bg-secondaryColor" />
            }
            skillName={"Flutter"}
          />
        </div>
      </div>
    </>
  );
};

export default SkillsData;
