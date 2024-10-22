import React from "react";
import vImage from "./assetsVid/vEditing.png";

const Home = () => {
    return(
        <>
            <div className="h-[90vh] bg-black flex items-center justify-center px-4">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
                    
                    {/* Text Section */}
                    <div className="text-center md:text-left">
                        <p className="text-3xl md:text-5xl font-bold max-w-md bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-600">
                            Unleash Your Imagination, One Frame at a Time
                        </p>
                    </div>
                    
                    {/* Image Section */}
                    <div>
                        <img src={vImage} alt="vImage" className="h-64 md:h-80 w-full object-contain"/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
