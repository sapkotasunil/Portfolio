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

const SkillsData = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl sm:text-4xl flex items-center gap-2 pt-12 lg:pt-24">
          <FaLaptopCode />
          Skills
        </h1>
      </div>
      <div>
        <div className="flex justify-between pr-4 py-4">
          <Skills
            icon={
              <FaHtml5 className="h-24 w-36 bg-secondaryColor text-yellow-500" />
            }
            skillName={"HTML"}
          />
          <Skills
            icon={
              <FaCss3Alt className="h-24 w-36 bg-secondaryColor text-yellow-500" />
            }
            skillName={"CSS"}
          />
        </div>
        <div className="flex justify-between pr-4 py-4">
          <Skills
            icon={
              <IoLogoJavascript className="h-24 w-36 bg-secondaryColor text-yellow-500" />
            }
            skillName={"JavaScript"}
          />
          <Skills
            icon={
              <RiTailwindCssFill className="h-24 w-36 bg-secondaryColor text-yellow-500" />
            }
            skillName={"Tailwind"}
          />
        </div>
        <div className="flex justify-between pr-4 py-4">
          <Skills
            icon={
              <FaReact className="h-24 w-36 bg-secondaryColor text-yellow-500" />
            }
            skillName={"React"}
          />
          <Skills
            icon={
              <FaCss3Alt className="h-24 w-36 bg-secondaryColor text-yellow-500" />
            }
            skillName={"C programming"}
          />
        </div>
        <div className="flex justify-between pr-4 py-4">
          <Skills
            icon={
              <TbBrandCpp className="h-24 w-36 bg-secondaryColor text-yellow-500" />
            }
            skillName={"C++"}
          />
          <Skills
            icon={
              <FaJava className="h-24 w-36 bg-secondaryColor text-yellow-500" />
            }
            skillName={"Java"}
          />
        </div>
      </div>
    </>
  );
};

export default SkillsData;
