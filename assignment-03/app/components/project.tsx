
import React from 'react';
import Image from 'next/image';

const Project = () => {
  return (
    <section className="bg-gray-700 min-h-[800px] py-10" id="project">
      <h2 className="text-5xl font-bold text-center mb-16 text-white">
        Latest <span className="text-cyan-500">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 lg:mx-36">
        {/* Project Boxes */}
        {[
          {
            imgSrc: "projects/developer.jpg",
            title: "Web Design",
            description:
              "I design sleek, responsive websites that combine beauty with intuitive, user-centered experiences",
          },
          {
            imgSrc: "/projects/web.jpg",
            title: "Web Design",
            description:
              "I design sleek, responsive websites that combine beauty with intuitive, user-centered experiences",
          },
          {
            imgSrc: "/projects/leptop.jpg",
            title: "Web Design",
            description:
              "I design sleek, responsive websites that combine beauty with intuitive, user-centered experiences",
          },
          {
            imgSrc: "/projects/culculator.jpg",
            title: "CLI CULCULATOR",
            description:
              "I developed a powerful CLI calculator that performs quick and accurate calculations right from the command line.",
          },
          {
            imgSrc: "/projects/CLI-ATM.jpg",
            title: "CLI ATM",
            description:
              "I’m currently building a CLI ATM, focused on simulating secure and efficient banking transactions directly through the terminal",
          },
          {
            imgSrc: "/projects/number-guassing-game.jpg",
            title: "NUMBER GUASSING GAME",
            description:
              "A CLI number guessing game that’s interactive and fun.",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={project.imgSrc}
              alt="simple project"
              className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 via-transparent to-black bg-opacity-70 flex justify-center items-center flex-col opacity-0 hover:opacity-100 transition-opacity duration-300 text-white p-6">
              <h4 className="text-2xl font-semibold">{project.title}</h4>
              <p className="text-base mt-2 mb-4">{project.description}</p>
              <a href="#" className="bg-white rounded-full p-3">
                <i className="bx bx-link-external text-gray-800"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

