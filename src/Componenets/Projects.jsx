import { motion } from "motion/react";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const projectsData = [
  {
    name: "Dice Game",
    description: "A fun game where you roll the dice and enjoy the game.",
    image: "./dicegame.png",
    link: "https://github.com/sapkotasunil/ludo_games",
  },
  {
    name: "Animated website",
    description: "A modern and beautifully animated website of Ghoda ghodi.",
    image: "./ghodaghodi.jpg",
    link: "https://ghodaghodibysunil.netlify.app/",
  },
  {
    name: "Portfolio Website",
    description: "A modern and responsive portfolio with animation.",
    image: "./portfolio.png",
    link: "sapkotasunil11.com.np",
  },
];

const Projects = ({ delayTime }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className=" rounded-lg border-2 border-solid border-secondaryColor py-6 px-2 shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: delayTime + index * 0.4 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="pt-16">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex max-w-fit items-center bg-primaryColor  text-white px-4 mt-10 rounded-md gap-2 py-2"
              >
                Watch Demo
                <MdOutlineArrowOutward
                  size={"20px"}
                  className="bg-primaryColor "
                />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;
