import React from "react";
import planet from "./assetsd/planet.png";

const Home = () => {
    return (
        <>
            <div className="h-auto w-full py-10 px-6 bg-black">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
                    <div className="text-center md:text-left">
                        <p className="font-bold text-3xl md:text-5xl max-w-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-fadeIn">
                            Easy navigation and a clear design boost user satisfaction.
                        </p>
                        <button className="border text-white p-2 rounded-full px-8 md:px-12 mt-5 hover:bg-violet-400 transition-all duration-300 hover:scale-110 shadow-lg shadow-violet-500/50">
                            Discover More
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <img src={planet} alt="planet" className="h-64 md:h-96" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
