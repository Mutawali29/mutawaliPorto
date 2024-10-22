import React from "react";
import qonaah from "./assetss/Qonaah.png";
import hero from "./assetss/heroAcademy.png";
import ecommerce from "./assetss/ecommerce.png";
import pajero from "./assetss/pajero.png";
import onemcn from "./assetss/onemcn.png";
import next from "./assetss/next.png";

const projectData = [
  {
    title: "Soto Qonaah Website Design",
    image: qonaah,
    github: "https://github.com/mutawali29/Soto-Qonaah-Website-Design",
    live: "https://soto-qonaah-website-design.netlify.app/",
  },
  {
    title: "Herro Academy Learning Center",
    image: hero,
    github: "https://github.com/mutawali29/herro-academy-learning-center-FRONT-END",
    live: "https://mutawali29.github.io/herro-academy-learning-center-FRONT-END/",
  },
  {
    title: "Modern E-Commerce",
    image: ecommerce,
    github: "https://github.com/mutawali29/modern-ecommerce",
    live: "https://modern-ecommerce-2903wudhkxsdu.netlify.app/",
  },
  {
    title: "Car Website",
    image: pajero,
    github: "https://github.com/mutawali29/croquembouche",
    live: "https://croquembouche-dc0dca-pajero-web.netlify.app/",
  },
  {
    title: "One Mcn Start-Up",
    image: onemcn,
    github: "https://github.com/mutawali29/gleeful-concha",
    live: "https://gleeful-concha-e34d13-one-mcn-startup.netlify.app/",
  },
  {
    title: "Web Services Next Js",
    image: next,
    github: "https://github.com/Mutawali29/services-web-next",
    live: "https://mutawali29.github.io/services-web-next/",
  },
];

const Project = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
