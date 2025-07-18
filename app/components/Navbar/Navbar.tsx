"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1d3c45]/80 backdrop-blur-md border-b border-gray-500"
          : "bg-transparent border-b border-gray-500"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
            <span className="text-white">Gads</span>
            <span className="text-[#d2601a]">Web</span>
        </h1>

        <ul className="flex items-center gap-8 text-white font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={800}
              offset={-80} // biar gak ketutup navbar
              className="hover:text-[#d2601a] cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-[#d2601a] cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-[#d2601a] cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
