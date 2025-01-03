import React from "react";
import Educations from "../Componenets/Educations";
import SkillsData from "../Componenets/SkillsData";

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
        <Educations />
        <SkillsData />
      </main>
    </div>
  );
};

export default About;
