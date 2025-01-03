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
        <main className="flex justify-between w-calc(100vh-192px) max-h-fit">
          <div className="w-[55%] max-h-fit">
            <h1 className="mt-40 bg-green-500  max-w-fit px-3 py-1 rounded text-xl">
              Full stock Developer
            </h1>
            <h2 className="xl:text-6xl md:text-5xl mt-4 font-medium ">
              Designing Innovation,
              <br />
              Eveloping Excellence, <br />
              Delivering Impact
            </h2>
            <div className="flex  mb-24  gap-10 items-center  md:mt-28 xl:mt-[20%] 2xl:mt-32 max-w-fit px-3 py-1 rounded text-xl ">
              <a
                className="font-logoFont flex items-center gap-1 bg-green-500 text-white px-7 py-1 rounded"
                href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/"
              >
                <FaLinkedin />
                <h1 className="text-[18px]  bg-green-500">LinkedIn</h1>
              </a>

              <a
                href="https://github.com/sapkotasunil"
                className="font-logoFont flex items-center gap-1  bg-green-500 px-7 py-1 rounded"
              >
                <FaGithub />
                <h1 className="text-[18px]  bg-green-500">Github</h1>
              </a>
            </div>
          </div>
          <div className="w-[45%] max-h-fit">
            <motion.img
              animate={{ x: 0 }}
              initial={{ x: 250 }}
              transition={{ duration: 0.5 }}
              className="pt-28"
              src="./pp.png"
              alt=""
            />
          </div>
        </main>
        <hr />
        <div className="w-calc(100vh-192px) max-h-fit flex mt-8">
          <div className="w-[50%]  max-h-fit border-2 p-5  shadow border-solid border-secondaryColor">
            <p className=" text-xl underline pb-7">Introduce</p>
            <h1 className="text-xl font-logoFont">
              Hey, I'm&nbsp;
              <span className=" text-primaryColor ">Sunil Sapkota</span>, a
              passionate Full Stack Developer from Ghodaghodi, Kailali
            </h1>
            <p className="bg-secondaryColor pl-8 py-2 mt-9 border-l-4 border-solid border-primaryColor ">
              With expertise in React, Node.js, MongoDB, and Express.js, I
              specialize in crafting dynamic and visually engaging websites.
            </p>
            <div className="mt-16">
              <Link className="mt-16 underline text-primaryColor" to="/about">
                Read more
              </Link>
            </div>
          </div>
          <div className="w-[50%]"></div>
        </div>
        <div className="h-screen flex mt-5 ">
          <div className=" w-[50%]  max-h-fit border-2 p-5 shadow border-solid border-secondaryColor">
            <p className=" text-xl underline pb-7">Projects</p>
            <div className="h-[20vh] w-[20vh] "></div>
          </div>
          <div className="w-[45%]"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
