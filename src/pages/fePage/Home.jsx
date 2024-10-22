import React from "react";
import webDev from "./assetss/webDev.png";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="h-[100vh] bg-black">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center p-10 md:p-20">
                    <div className="space-y-6 md:space-y-10 text-center md:text-left">
                        <h1 className="text-3xl font-semibold tracking-widest text-blue-400">
                            INTERFACE BUILDER
                        </h1>
                        <h1 className="text-4xl md:text-6xl font-bold gradient-text text-white">
                            Front-End Developer
                        </h1>
                        <p className="text-white max-w-lg mx-auto md:mx-0">
                            Building intuitive and responsive interfaces with the latest front-end technologies for a high-quality user experience.
                        </p>
                    </div>
                    <img
                        src={webDev}
                        alt="webDev"
                        className="h-40 md:h-80 mb-6 md:mb-0"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
