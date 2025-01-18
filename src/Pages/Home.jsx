import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "motion/react";
import { h1 } from "motion/react-client";
import React from "react";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Projects from "../Componenets/projects";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const delayTime = 0;
const mainViewport = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.6, staggerChildren: 0.4, when: "beforeChildren" },
  },
};

const subViewport = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const Home = () => {
  const text = "Full stock Developer ";
  return (
    <>
      <div className=" pt-4">
        <main className="flex justify-between  flex-col md:flex-row max-h-fit">
          <div className="lg:w-[55%] max-h-[82vw] md:max-h-fit ">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="lg:mt-40 mt-10 bg-green-500 flex   max-w-fit px-1 lg:px-3 py-1 rounded text-lg lg:text-xl"
            >
              {text.split("").map((letter, idx) => (
                <motion.h2
                  className=" bg-green-500"
                  key={idx}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 + idx * 0.15 }}
                >
                  {letter}
                </motion.h2>
              ))}
            </motion.div>
            <motion.div variants={mainViewport} initial="hidden" animate="show">
              <h2 className="text-[8vw] mt-1 lg:mt-4 font-medium md:text-[4vw] lg:text-6xl ">
                <motion.div variants={subViewport}>
                  Designing Innovation,
                </motion.div>
                <motion.div variants={subViewport}>
                  Eveloping Excellence,
                </motion.div>
                <motion.div variants={subViewport}>
                  Delivering Impact
                </motion.div>
              </h2>
            </motion.div>
            <div className="flex    flex-col md:flex-row mb-24 md:mb-8 lg:mb-24 gap-2 md:gap-10 items-center md:mt-[12vw]   max-w-fit mt-3 lg:mt-[9vw]  lg:px-3 py-1 rounded text-xl ">
              <motion.a
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                className="font-logoFont flex items-center min-w-36 lg:min-w-40 gap-1 bg-green-500 text-white px-5 lg:px-7 py-1 rounded"
                href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <h1 className="text-[18px]  bg-green-500">LinkedIn</h1>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                href="https://github.com/sapkotasunil"
                target="_blank"
                rel="noopener noreferrer"
                className="font-logoFont flex items-center justify-center gap-1 min-w-36 lg:min-w-40  bg-green-500 px-5 min-h-9 lg:px-7p y-1 rounded"
              >
                <FaGithub />
                <h1 className="text-[18px]  bg-green-500">Github</h1>
              </motion.a>
            </div>
          </div>
          <div className="lg:w-[45%]    md:min-h-fit mb-8 flex items-end md:pb-12 lg:mb-12">
            <motion.img
              animate={{ x: 0, opacity: 1, scale: 1 }}
              initial={{ x: 50, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="lg:pt-28 "
              src="./pp.png"
              alt=""
            />
          </div>
        </main>
        <hr />
        <div className=" max-h-fit flex mt-8">
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{}}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-[70%]  max-h-fit border-2 p-5  shadow border-solid border-secondaryColor"
          >
            <p className=" text-xl underline pb-7">Introduce</p>
            <h1 className="text-xl font-logoFont text-left">
              Hey, I'm&nbsp;
              <span className=" text-primaryColor ">Sunil Sapkota</span>. <br />
              A passionate Full Stack Developer from Ghodaghodi, Kailali.
            </h1>
            <p className="bg-secondaryColor pl-1 m-1 lg:ml-4 lg:pl-3 py-2 lg:mt-9 mt-3 border-l-4 border-solid border-primaryColor ">
              With expertise in React, Node.js, MongoDB, and Express.js, I
              specialize in crafting dynamic and visually engaging websites.
            </p>
            <div className="lg:mt-16 mt-6">
              <Link className=" underline text-primaryColor" to="/about">
                Read more
              </Link>
            </div>
          </motion.div>
        </div>
        {/* skill section */}
        <motion.div className="mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: "all" }}
            className="text-3xl sm:text-4xl flex items-center gap-2 "
          >
            <FaLaptopCode />
            Skills
          </motion.h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              "React.js",
              "Node.js",
              "MongoDB",
              "Express.js",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Git",
              "Framer Motion",
              "Tailwind CSS",
              "Firebase",
              "REST APIs",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.1, duration: 0.2 },
                }}
                viewport={{ amount: "0.1", once: "true" }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border-2 rounded-lg text-center text-lg font-semibold bg-secondaryColor border-primaryColor shadow-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Recent Projects Section */}
        <motion.div className="mt-20 h-fit ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: "all" }}
            className="text-3xl lg:text-4xl font-semibold mb-8 flex gap-2 "
          >
            <HiOutlineClipboardDocumentList />
            Recent Projects
          </motion.h2>
          <Projects delayTime={delayTime} />
        </motion.div>

        {/* Feedback Section */}
        <motion.div className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: "all" }}
            className="text-3xl lg:text-4xl font-semibold mb-8 flex items-center  gap-2 "
          >
            What People Say
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                name: "John Doe",
                feedback:
                  "Sunil is an exceptional developer. Highly recommend!",
              },
              {
                name: "Jane Smith",
                feedback: "Great attention to detail and amazing skills!",
              },
            ].map((testimonial, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true, amount: "all" }}
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-start p-6 border-2 rounded-lg bg-secondaryColor border-primaryColor shadow-lg"
              >
                <div className="w-16 h-16 rounded-full mr-4 flex">
                  <CgProfile className="h-full w-full  bg-secondaryColor" />
                </div>

                <div className="bg-secondaryColor">
                  <h3 className="text-xl text-primaryColor font-bold bg-secondaryColor">
                    {testimonial.name}
                  </h3>
                  <p className="mt-2 bg-secondaryColor">
                    {testimonial.feedback}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
