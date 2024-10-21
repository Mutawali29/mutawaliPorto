import React from "react";
import vImage from "./assetsVid/vEditing.png";

const Home = () => {
    return(
        <>
            <div className="h-screen bg-black">
                <div className="flex items-center justify-center">
                    <div>
                        <p className="text-5xl font-bold max-w-md bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-600">
                            Unleash Your Imagination, One Frame at a Time
                        </p>
                    </div>
                    <div>
                        <img src={vImage} alt="vImage" className="h-80"/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;