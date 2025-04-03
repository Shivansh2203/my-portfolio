import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center p-1 hover:text-yellow-500">
          <MdOutlineEmail size={20} />
          <a href="mailto:shivanshsingh2203@gmail.com">Email</a>
        </li>
        <li className="flex gap-1 items-center p-1 hover:text-yellow-500">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/shivansh-pratap-singh-6156912a8">LinkedIn</a>
        </li>
        <li className="flex gap-1 items-center p-1 hover:text-yellow-500">
          <FaGithub />
          <a href="https://github.com/Shivansh2203">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;