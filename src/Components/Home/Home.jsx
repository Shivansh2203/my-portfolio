import React from "react";
import image from '../../assets/my image.jpg';

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-6 md:p-20">
      {/* Left Section - Text */}
      <div className="w-full md:w-3/5 text-center md:text-left md:pt-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-normal tracking-tighter mt-12 sm:mt-6">
          Hi, I'm Shivansh Pratap Singh
        </h1>
        <p className="text-sm sm:text-lg md:text-2xl mt-2 md:mt-4 tracking-tight">
          I am an MCA student specializing in web development, with strong expertise in React, JavaScript, and algorithmic problem-solving.
        </p>
        <a href="https://drive.google.com/file/d/1jvdVXYsit3FWLGrn4qa1T3b5YxIdL6gw/view?usp=drive_link">
          <button className="mt-4 md:mt-8 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] hover:text-yellow-500">
            My Resume
          </button>
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-3/5 flex justify-center md:justify-end mt-6 md:mt-8">
        <img className="w-4/5 sm:w-3/5 md:w-3/5 rounded-lg shadow-lg" src={image} alt="Shivansh" />
      </div>
    </div>
  );
};

export default Home;
