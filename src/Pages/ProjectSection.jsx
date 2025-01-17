import React from "react";
import { motion } from "framer-motion";
import Projects from "../Componenets/projects";

const commingSoon = "Comming_Soon...";
const delayTime = 1.2;
const ProjectSection = () => {
  return (
    <section className="mt-8  lg:mt-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: "all" }}
          className="lg:text-5xl text-3xl font-semibold  mb-8"
        >
          My Projects
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
          viewport={{ once: true, amount: "all" }}
          className="text-2xl mb-8"
        >
          Below are some the projects I have worked on. I have worked on many
          other projects but I have listed only the ones that I think are worth
          mentioning.
        </motion.h1>
        <Projects delayTime={delayTime} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="lg:mt-40 mt-10 flex text-[9vw] text-green-500  "
      >
        {commingSoon.split("").map((letter, idx) => (
          <motion.h2
            className="  "
            key={idx}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="text-primaryColor"> {letter}</div>
          </motion.h2>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSection;
