import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Dice Game",
    description: "A fun game where you roll the dice and test your luck.",
    image: "./dicegame.png",
    link: "https://example.com/dicegame",
  },
  {
    name: "Portfolio Website",
    description: "A modern and responsive portfolio website.",
    image: "./portfolio.png",
    link: "https://example.com/portfolio",
  },
  {
    name: "E-Commerce App",
    description: "An e-commerce platform for seamless online shopping.",
    image: "./ecommerce.png",
    link: "https://example.com/ecommerce",
  },
];

const ProjectSection = () => {
  return (
    <section className="mt-8  lg:mt-24">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-5xl text-3xl font-semibold  mb-8">
          My Projects
        </h2>
        <h1 className="text-2xl mb-8">
          Below are some the projects I have worked on. I have worked on many
          other projects but I have listed only the ones that I think are worth
          mentioning.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className=" rounded-lg border-2 border-solid border-secondaryColor py-6 px-2 shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                  className="inline-block bg-primaryColor text-white px-4 mt-10 rounded-md hover:bg-green-700"
                >
                  Get Link
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
