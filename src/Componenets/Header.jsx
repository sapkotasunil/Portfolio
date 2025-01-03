import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { animate } from "motion/mini";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between  mt-8 text-xl ">
        <Link className="font-logoFont font-semibold" to="/">
          Sunil
        </Link>
        <div className="flex gap-10 justify-center items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="flex justify-between gap-10 items-center ">
          <a
            className="font-logoFont flex items-center gap-1 "
            href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/"
          >
            <FaLinkedin />
            <h1 className="text-[18px]"> Linkedln</h1>
          </a>
          <a
            href="https://github.com/sapkotasunil"
            className="font-logoFont flex items-center gap-1 "
          >
            <FaGithub />
            <h1 className="text-[18px]"> Linkedln</h1>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
