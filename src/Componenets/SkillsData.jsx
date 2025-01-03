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
      <div className="max-w-[95vw]">
        <div className="flex flex-col lg:flex-row gap-6  justify-between  pr-4 py-4">
          <Skills
            icon={
              <FaHtml5 className="min-h-full h-24 w-36 bg-secondaryColor" />
            }
            skillName={"HTML"}
          />

          <Skills
            icon={<FaCss3Alt className="h-24 w-36 bg-secondaryColor" />}
            skillName={"CSS"}
          />
        </div>
        <div className=" justify-between flex flex-col lg:flex-row gap-6 pr-4 py-4">
          <Skills
            icon={<IoLogoJavascript className="h-24 w-36 bg-secondaryColor" />}
            skillName={"JavaScript"}
          />
          <Skills
            icon={<RiTailwindCssFill className="h-24 w-36 bg-secondaryColor" />}
            skillName={"Tailwind"}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-between pr-4 py-4">
          <Skills
            icon={<FaReact className="h-24 w-36 bg-secondaryColor" />}
            skillName={"React"}
          />
          <Skills
            icon={<FaCss3Alt className="h-24 w-36 bg-secondaryColor" />}
            skillName={"C"}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-between pr-4 py-4">
          <Skills
            icon={<TbBrandCpp className="h-24 w-36 bg-secondaryColor" />}
            skillName={"C++"}
          />
          <Skills
            icon={<FaJava className="h-24 w-36 bg-secondaryColor" />}
            skillName={"Java"}
          />
        </div>
      </div>
    </>
  );
};

export default SkillsData;
