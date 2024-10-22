import React from "react";
import afterE from "./assetsVid/aftereffect.png";
import priemere from "./assetsVid/priemere.png";
import davinci from "./assetsVid/davinci.png";

const Software = () => {
    return (
        <>
            <div className="py-10 bg-black">
                <div className="space-y-12 px-4 md:px-16">
                    <p className="text-white mb-24 text-center text-4xl font-bold mt-2 drop-shadow-[0_0_10px_blue]">
                        EDITING SOFTWARE
                    </p>
                    
                    {/* After Effects Section */}
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                        <img src={afterE} alt="After Effects" className="h-32 w-full md:w-auto object-contain" />
                        <p className="text-white max-w-md text-center md:text-left">
                            Adobe After Effects excels in video editing with its ability to create advanced animations and impressive visual effects, as well as seamless integration with other Adobe software for an efficient workflow.
                        </p>
                    </div>
                    
                    {/* Premiere Pro Section */}
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                        <p className="text-white max-w-md text-center md:text-right drop-shadow-[0_0_10px_purple]">
                            Adobe Premiere Pro is a powerful video editing software known for its advanced editing tools, seamless integration with other Adobe applications, and support for a wide range of formats.
                        </p>
                        <img src={priemere} alt="Premiere Pro" className="h-32 w-full md:w-auto object-contain" />
                    </div>
                    
                    {/* DaVinci Resolve Section */}
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                        <img src={davinci} alt="DaVinci Resolve" className="h-32 w-full md:w-auto object-contain" />
                        <p className="text-white max-w-md text-center md:text-left drop-shadow-[0_0_5px_red]">
                            DaVinci Resolve is a comprehensive video editing software renowned for its advanced color grading tools, robust editing features, and powerful audio post-production capabilities.
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Software;
