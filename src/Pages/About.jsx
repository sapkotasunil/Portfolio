import React from "react";
import { HiAcademicCap } from "react-icons/hi2";
import Education from "../Componenets/Education";
import { FaLaptopCode } from "react-icons/fa";
import Skills from "../Componenets/Skills";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
const About = () => {
  return (
    <div className="pt-4">
      <main className="w-full lg:w-[calc(100vw-192px)]">
        {/* About Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl underline pt-12 lg:pt-24">
            About
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base mt-2 lg:mt-3">
            Let's Get to Know me....
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-[80vw] flex flex-col max-h-fit border-2 p-5 shadow border-solid border-secondaryColor mt-6 lg:mt-8">
          <p className="text-sm sm:text-base leading-6 lg:leading-8">
            Hi, I'm Sunil Sapkota, a passionate Full Stack Developer from
            Ghodaghodi, Kailali. With expertise in React, Node.js, MongoDB, and
            Express.js, I specialize in crafting dynamic and visually engaging
            websites. I take pride in my ability to integrate seamless
            animations into web applications, delivering exceptional user
            experiences.
          </p>
          <br />
          <p className="text-sm sm:text-base leading-6 lg:leading-8">
            I am currently in my sixth semester of the Bachelor of Information
            and Communication Technology in Education (BICTE) program at
            Ghodaghodi Multiple Campus, located in Sukhad, Kailali. My studies
            have provided me with a strong foundation in programming,
            algorithms, and software development principles. This academic
            background complements my professional skills, enabling me to tackle
            complex challenges with a structured and analytical approach.
          </p>
          <br />
          <p className="text-sm sm:text-base leading-6 lg:leading-8">
            Beyond coding, I enjoy playing cricket, which fuels my team spirit
            and dedication—qualities I bring to every project I work on. Whether
            building robust back-end systems or designing captivating front-end
            interfaces, I’m committed to creating impactful solutions that make
            a difference.
          </p>
          <br />
          <p className="text-sm sm:text-base leading-6 lg:leading-8">
            Let’s connect and bring innovative ideas to life!
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl flex items-center gap-2 pt-12 lg:pt-24">
            <HiAcademicCap />
            Education
          </h1>
        </div>

        {/* Education Component */}
        <Education
          academic_name={"GhodaGhodi Multiple Campus"}
          duration={"2021-2026"}
          classes={
            "Bachelor of Information and Communication Technology in Education (BICTE)"
          }
        />
        <Education
          academic_name={"GhodaGhodi Multiple Campus"}
          duration={"2019-2021"}
          classes={"+2 In Management"}
        />
        <Education
          academic_name={"Rastriya Secondary School"}
          duration={"2016-2019"}
          classes={"Class 6 to Class 10"}
        />
        <Education
          academic_name={"Shree Sapta Shree Secondary School"}
          duration={"2007-2016"}
          classes={"From Nursery to Class 6"}
        />

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
      </main>
    </div>
  );
};

export default About;
