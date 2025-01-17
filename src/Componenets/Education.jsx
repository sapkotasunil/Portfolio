import { motion } from "motion/react";
import React from "react";

const Education = (props) => {
  return (
    <>
      <motion.div
        whileHover={{
          scale: 0.9,
          boxShadow: "0px 4px 10px rgba(0, 25, 254, 0.6)",
          transition: { duration: 0.1 }, // Hover-in speed
        }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{
          boxShadow: "0px 4px 10px rgba(0, 255, 0, 0.6)",
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.2, delay: props.index * 0.1 }, // Normal animation
        }}
        transition={{ delay: props.index * 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className=" w-[99%]   lg:w-[80%]  max-h-fit  mt-3 p-1 py-3 lg:p-5 rounded-lg  border-l-4  border-solid hover:scale-105  transform transition-transform duration-300 ease-linear  border-blue-700 bg-secondaryColor"
      >
        <div className=" flex bg-secondaryColor justify-between text items-center  min-w-full pl-2  lg:px-4">
          <div className="text-xl text-primaryColor  bg-secondaryColor">
            {props.academic_name}
          </div>
          <div className="text-zinc-500 text-base bg-secondaryColor">
            {props.duration}
          </div>
        </div>
        <h1 className="bg-secondaryColor px-2 font-logoFont lg:px-4 ">
          {props.classes}
        </h1>
      </motion.div>
    </>
  );
};

export default Education;
