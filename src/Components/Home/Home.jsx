import React from "react";
import image from '../../assets/my image.jpg';

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-3/5 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
          Hi, I'm Shivansh Pratap Singh
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I am an MCA student specializing in web development, with strong expertise in React, JavaScript, and algorithmic problem-solving.
        </p>
        <a href="https://drive.google.com/file/d/1jvdVXYsit3FWLGrn4qa1T3b5YxIdL6gw/view?usp=drive_link">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] hover:text-yellow-500">
            My Resume
          </button>
        </a>
      </div>

      <div className="ml-auto mr-0 flex justify-end">
        <img className="w-3/5 md:w-3/5 mt-8" src={image} alt="Shivansh" />
      </div>
    </div>
  );
};

export default Home;
