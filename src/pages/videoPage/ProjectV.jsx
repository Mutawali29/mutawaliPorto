import React from "react";

// Video assets
import zolasips from "./assetsVid/zolasips2022.mp4";
import b2023 from "./assetsVid/b2023.mp4";
import Bercandha from "./assetsVid/Bercandha.mp4";
import Cosmic from "./assetsVid/Cosmic5CC.mp4";
import forest from "./assetsVid/forest.mp4";
import forest2 from "./assetsVid/forest2.mp4";
import kopiADS from "./assetsVid/kopiADS.mp4";
import Iphone14 from "./assetsVid/Iphone14.mp4";
import qmLogo from "./assetsVid/QMLogos.mp4";
import mcLaren from "./assetsVid/mclarenQM.mp4";
import jjStand from "./assetsVid/jjStand.mp4";
import jjWibu from "./assetsVid/jjWibu.mp4";
import playDate from "./assetsVid/playDate.mp4";
import starboy from "./assetsVid/starboy.mp4";
import Influence from "./assetsVid/Influence.mp4";

const videos = [
  { src: zolasips, title: "Zola Sips" },
  { src: b2023, title: "B2023" },
  { src: Bercandha, title: "Bercandha" },
  { src: Cosmic, title: "Cosmic5CC" },
  { src: forest, title: "Forest" },
  { src: forest2, title: "Forest 2" },
  { src: kopiADS, title: "Kopi ADS" },
  { src: Iphone14, title: "iPhone 14" },
  { src: qmLogo, title: "QM Logos" },
  { src: mcLaren, title: "McLaren QM" },
  { src: jjStand, title: "JJ Stand" },
  { src: jjWibu, title: "JJ Wibu" },
  { src: playDate, title: "Play Date" },
  { src: starboy, title: "Starboy" },
  { src: Influence, title: "Influence" }
];

const ProjectV = () => {
  return (
    <div className="h-screen text-white p-8 bg-black">
      <h1 className="text-3xl mb-4 text-teal-400 font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
        Video Projects
      </h1>
      <div className="flex overflow-x-auto space-x-4 p-4 bg-opacity-20 backdrop-blur-md rounded-md">
        {videos.map((video, index) => (
          <div key={index} className="flex-shrink-0 w-[400px] h-96 p-4 rounded-md bg-gray-800 border border-teal-400 shadow-lg hover:scale-105 transition-all duration-300">
            <h2 className="text-lg mb-2 text-teal-300">{video.title}</h2>
            <video
              controls
              src={video.src}
              className="w-full h-full object-cover rounded-md"
              alt={`${video.title} video`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};



  
  

export default ProjectV;
