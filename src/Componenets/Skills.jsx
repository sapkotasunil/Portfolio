import { motion } from "motion/react";

import React from "react";

const Skills = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 0.9,

        transition: { duration: 0.1 }, // Hover-in speed
      }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{
        boxShadow: "0px 4px 10px rgba(0, 255, 0, 0.6)",
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5 }, // Normal animation
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="max-h-[16vh] min-w-full lg:min-w-[40vw] shadow-[] lg:max-h-28 border-l-4 border-solid hover:scale-105  transform transition-transform duration-300 ease-linear flex-wrap  border-blue-700   rounded-lg flex px-1 py-2 mt-4  gap items-center ml-1 bg-secondaryColor"
    >
      <div className="max-h-fit w-36  bg-secondaryColor ">{props.icon}</div>
      <div className=" bg-secondaryColor text-primaryColor text-3xl ">
        {props.skillName}
      </div>
    </motion.div>
  );
};

export default Skills;
