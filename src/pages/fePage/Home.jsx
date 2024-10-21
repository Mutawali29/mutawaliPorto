import React from "react";
import webDev from "./assetss/webDev.png";
import "./Home.css"

const Home = () => {
    return(
        <>
            <div className="h-[100vh] bg-black">
                <div className="flex justify-between items-center p-20">
                    <div className="space-y-10">
                        <h1 className="text-3xl font-semibold tracking-widest text-blue-400">INTERFACE BUILDER</h1>
                        <h1 className="text-5xl md:text-6xl font-bold gradient-text text-white">Front-End Developer</h1>
                        <p className="text-white max-w-lg">Building intuitive and responsive interfaces with the latest front-end technologies for a high-quality user experience.</p>
                    </div>
                    <img src={webDev} alt="webDev" className="h-80"/>
                </div>
            </div>
        </>
    )
};

export default Home;