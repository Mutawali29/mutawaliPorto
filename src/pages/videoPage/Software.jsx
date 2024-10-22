import React from "react";
import afterE from "./assetsVid/aftereffect.png";
import priemere from "./assetsVid/priemere.png";
import davinci from "./assetsVid/davinci.png"

const Software = () => {
    return(
        <>
            <div>
                <div className="">
                    {/* after effect  */}
                    <div className="flex items-center justify-center mb-20 space-x-20 ml-20">
                        <img src={afterE} alt="afterE" className="h-32"/>
                        <p className="text-white max-w-md">Adobe After Effects excels in video editing with its ability to create advanced animations and impressive visual effects, as well as seamless integration with other Adobe software for an efficient workflow.</p>
                    </div>
                    {/* priemere pro  */}
                    <div className="flex items-center justify-center mb-20 mr-32 space-x-20">
                        <p className="max-w-md text-center lg:text-left lg:ml-52 drop-shadow-[0_0_10px_purple] text-white">
                            Adobe Premiere Pro is a powerful video editing software known for its advanced editing tools, seamless integration with other Adobe applications, and support for a wide range of formats.
                        </p>
                        <img src={priemere} alt="priemere" className="h-32"/>
                    </div>
                    {/* davinci  */}
                    <div className="flex items-center justify-center  space-x-20">
                        <img src={davinci} alt="davinci" className="h-32"/>
                        <p className="max-w-md text-left lg:text-right lg:mr-52 drop-shadow-[0_0_5px_red] text-white">
                            DaVinci Resolve is a comprehensive video editing software renowned for its advanced color grading tools, robust editing features, and powerful audio post-production capabilities.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Software;