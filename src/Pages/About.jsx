import React from "react";
import Educations from "../Componenets/Educations";
import SkillsData from "../Componenets/SkillsData";
import { motion } from "motion/react";
import { GiDuration } from "react-icons/gi";
const aboutVariants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { delay: 1, when: "beforeChildren", staggerChildren: 0.3 },
  },
};

const aboutSubVarients = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7 } },
};
const About = () => {
  return (
    <div className="pt-4">
      <main className="w-full lg:w-[calc(100vw-192px)]">
        {/* About Section */}
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl underline pt-12 lg:pt-24"
          >
            About
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="text-zinc-500 text-sm sm:text-base mt-2 lg:mt-3"
          >
            Let's Get to Know me....
          </motion.p>
        </div>

        {/* Introduction */}
        <motion.div
          variants={aboutVariants}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.5 }}
          className="lg:max-w-[80vw] max-w-[90vw]  flex flex-col max-h-fit border-2 p-5 shadow border-solid border-secondaryColor mt-6 lg:mt-8"
        >
          <motion.p
            variants={aboutSubVarients}
            className="text-sm sm:text-base leading-6 lg:leading-8"
          >
            Hi, I'm Sunil Sapkota, a passionate Full Stack Developer from
            Ghodaghodi, Kailali. With expertise in React, Node.js, MongoDB, and
            Express.js, I specialize in crafting dynamic and visually engaging
            websites. I take pride in my ability to integrate seamless
            animations into web applications, delivering exceptional user
            experiences.
          </motion.p>
          <br />
          <motion.p
            variants={aboutSubVarients}
            className="text-sm sm:text-base leading-6 lg:leading-8"
          >
            I am currently in my sixth semester of the Bachelor of Information
            and Communication Technology in Education (BICTE) program at
            Ghodaghodi Multiple Campus, located in Sukhad, Kailali. My studies
            have provided me with a strong foundation in programming,
            algorithms, and software development principles. This academic
            background complements my professional skills, enabling me to tackle
            complex challenges with a structured and analytical approach.
          </motion.p>
          <br />
          <motion.p
            variants={aboutSubVarients}
            className="text-sm sm:text-base leading-6 lg:leading-8"
          >
            Beyond coding, I enjoy playing cricket, which fuels my team spirit
            and dedication—qualities I bring to every project I work on. Whether
            building robust back-end systems or designing captivating front-end
            interfaces, I’m committed to creating impactful solutions that make
            a difference.
          </motion.p>
          <br />
          <motion.p
            variants={aboutSubVarients}
            className="text-sm sm:text-base leading-6 lg:leading-8"
          >
            Let’s connect and bring innovative ideas to life!
          </motion.p>
        </motion.div>
        <Educations />
        <SkillsData />
      </main>
    </div>
  );
};

export default About;
