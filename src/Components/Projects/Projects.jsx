import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg1 from "../../assets/5665422.jpg";
import bannerImg2 from "../../assets/Password.png";
import bannerImg3 from "../../assets/weather.png";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div  className="py-12 px-8 flex flex-wrap justify-around">
        <ProjectCard
          title="To-Do List"
          main="A simple and efficient task management app designed to help users organize their daily activities. With an intuitive interface, users can add, edit, mark as complete, and delete tasks effortlessly."
          imgSrc={bannerImg1} 
          demoLink="https://shivansh2203.github.io/TO-DO/"
          sourceLink="https://github.com/Shivansh2203/TO-DO"
        />
        <ProjectCard 
          title="Password Generator"
          main="A secure and customizable password generator that helps users create strong and unique passwords to enhance online security. This tool ensures that users can generate random, complex passwords with various customization options."
          imgSrc={bannerImg2} 
          demoLink="https://shivansh2203.github.io/Password-Generator/"
          sourceLink="https://github.com/Shivansh2203/Password-Generator"
        />
        <ProjectCard
          title="Weather Application"
          main="A real-time weather forecasting app that provides users with accurate weather updates for any city worldwide. The app fetches live weather data and displays essential details like temperature, humidity, wind speed, and weather conditions."
          imgSrc={bannerImg3} 
          demoLink="https://shivansh2203.github.io/Weather/"
          sourceLink="https://github.com/Shivansh2203/Weather"
        />
      </div>
    </div>
  );
};

export default Projects;