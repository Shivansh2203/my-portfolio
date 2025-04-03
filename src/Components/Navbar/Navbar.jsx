import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
  
    <nav style={{ background: "#171d3254", backdropFilter: "blur(5px)" }} className="flex flex-wrap justify-between md:items-center text-white px-20 pt-6 md:px-21 bg-black bg-opacity-40 backdrop-blur-lg shadow-lg round-lg p-4 fixed top-0 w-full z-50">
      <span className="text-4xl font-bold tracking-wide">Port<span className="text-yellow-500 hover:text-yellow-200">F</span>olio</span>

      <ul 
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 `}
      >
        <a href="#About">
          <li className="text-2xl transition-all duration-300 p-1 md:p-0 hover:text-yellow-500">
            About
          </li>
        </a>
       
        <a href="#Projects">
          <li className="text-2xl transition-all duration-300 p-1 md:p-0  hover:text-yellow-500">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-2xl transition-all duration-300 p-1 md:p-0  hover:text-yellow-500">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;