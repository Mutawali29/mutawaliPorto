import React from "react";
import planet from "./assetsd/planet.png";

const Home = () => {
    return(
        <>
            <div className="">
                <div className="flex items-center justify-center">
                    <div>
                        <p className="font-bold text-3xl md:text-5xl max-w-xl text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-fadeIn">
                            Easy navigation and a clear design boost user satisfaction.
                        </p>
                        <button className="border text-white p-2 rounded-full px-8 md:px-12 mt-5 hover:bg-violet-400 transition-all duration-300 hover:scale-110 shadow-lg shadow-violet-500/50">
                            HIRE ME
                        </button>
                    </div>
                    <div>
                        <img src={planet} alt="planet" className="h-96"/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;