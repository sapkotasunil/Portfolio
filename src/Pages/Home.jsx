import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "motion/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" pt-4">
        <main className="flex justify-between  flex-col lg:flex-row max-h-fit">
          <div className="lg:w-[55%] max-h-80 lg:max-h-fit">
            <h1 className="lg:mt-40 mt-10 bg-green-500   max-w-fit px-1 lg:px-3 py-1 rounded text-lg lg:text-xl">
              Full stock Developer
            </h1>
            <h2 className="text-[8vw] mt-1 lg:mt-4 font-medium lg:text-6xl ">
              Designing Innovation,
              <br />
              Eveloping Excellence, <br />
              Delivering Impact
            </h2>
            <div className="flex  flex-col lg:flex-row mb-24 gap-2 lg:gap-10 items-center lg:mt-32   max-w-fit mt-3  lg:px-3 py-1 rounded text-xl ">
              <a
                className="font-logoFont flex items-center min-w-36 lg:min-w-40 gap-1 bg-green-500 text-white px-5 lg:px-7 py-1 rounded"
                href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/"
              >
                <FaLinkedin />
                <h1 className="text-[18px]  bg-green-500">LinkedIn</h1>
              </a>

              <a
                href="https://github.com/sapkotasunil"
                className="font-logoFont flex items-center justify-center gap-1 min-w-36 lg:min-w-40  bg-green-500 px-5 min-h-9 lg:px-7p y-1 rounded"
              >
                <FaGithub />
                <h1 className="text-[18px]  bg-green-500">Github</h1>
              </a>
            </div>
          </div>
          <div className="lg:w-[45%] max-h-fit mb-8 lg:mb-12">
            <motion.img
              animate={{ x: 0 }}
              initial={{ x: 250 }}
              transition={{ duration: 0.5 }}
              className="lg:pt-28"
              src="./pp.png"
              alt=""
            />
          </div>
        </main>
        <hr />
        <div className=" max-h-fit flex mt-8">
          <div className="lg:w-[70%]  max-h-fit border-2 p-5  shadow border-solid border-secondaryColor">
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
          </div>
        </div>
        <div className="h-screen flex mt-5 "></div>
      </div>
    </>
  );
};

export default Home;
