import React from "react";
import AboutImg from "../../assets/46703070.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 overflow-hidden"
    >
      
      <div className="md:w-1/3 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">About</h2>
        <img className="w-full md:h-80 object-cover rounded-lg" src={AboutImg} alt="About img" />
      </div>

      
      <div className="md:w-2/3 px- text-left">
        <ul>
          {[
            {
              title: "Frontend Developer",
              description:
                "I’m a frontend developer skilled in creating responsive websites with a focus on seamless user experience and efficiency.",
            },
            {
              title: "Backend Developer",
              description:
                "I have expertise in building high-performance and efficient back-end systems, along with well-optimized APIs.",
            },
            {
              title: "UI Designer",
              description:
                "I have designed multiple landing pages and have created design systems as well.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-3 py-4 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  {item.title}
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  {item.description}
                </p>
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
