import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative px-4 py-4 lg:mt-8  border-solid border-primaryColor lg:border-none border-b">
      <div className="flex items-center justify-between">
        <Link className="font-logoFont font-semibold text-xl" to="/">
          Sunil
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-green-500"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoCloseSharp className="w-6 h-6" />
          ) : (
            <MdMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 p:3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 scale-125 transform transition-transform duration-300 ease-linear"
                : "hover:text-green-500 transform transition-transform duration-300 ease-linear hover:scale-125"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 scale-125 transform transition-transform duration-300 ease-linear"
                : "hover:text-green-500 transform transition-transform duration-300 ease-linear hover:scale-125"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 scale-125 transform transition-transform duration-300 ease-linear"
                : "hover:text-green-500 transform transition-transform duration-300 ease-linear hover:scale-125"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 scale-125 transform transition-transform duration-300 ease-linear"
                : "hover:text-green-500 transform transition-transform duration-300 ease-linear hover:scale-125"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            className="flex items-center gap-1 hover:text-green-500 transition-colors"
            href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="text-[18px]">LinkedIn</span>
          </a>
          <a
            className="flex items-center gap-1 hover:text-green-500 transition-colors"
            href="https://github.com/sapkotasunil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-[18px]">GitHub</span>
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-400 ease-in-out  ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-green-50 text-green-500" : "hover:bg-gray-50"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-green-50 text-green-500" : "hover:bg-gray-50"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-green-50 text-green-500" : "hover:bg-gray-50"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-green-50 text-green-500" : "hover:bg-gray-50"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>

          {/* Social Links - Mobile */}
          <div className="flex flex-col space-y-2 pt-4 border-t">
            <a
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md"
              href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md"
              href="https://github.com/sapkotasunil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
