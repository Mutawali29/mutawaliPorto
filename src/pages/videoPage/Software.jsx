import React from "react";
import afterE from "./assetsVid/aftereffect.png";
import priemere from "./assetsVid/priemere.png";
import davinci from "./assetsVid/davinci.png"

const Software = () => {
    return(
        <>
            <div>
                <div>
                    <div className="flex items-center justify-center">
                        <img src={afterE} alt="afterE" className="h-32"/>
                        <p className="text-white max-w-lg">Adobe After Effects excels in video editing with its ability to create advanced animations and impressive visual effects, as well as seamless integration with other Adobe software for an efficient workflow.</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Software;