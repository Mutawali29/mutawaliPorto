import React from "react";
import img1 from "./assetsd/image.png";
import img2 from "./assetsd/SocialMediaCore.png";
import img3 from "./assetsd/UserAnalysis.png";

const Statement = () => {
    return(
        <>
            <div className="bg-black h-[50vh]">
                <div className="flex justify-center space-x-10 pt-20">
                    <div>
                        <img src={img1} alt="img1" className="h-24"/>
                    </div>
                    <div>
                        <img src={img2} alt="img2" className="h-24"/>
                    </div>
                    <div>
                        <img src={img3} alt="img3" className="h-24"/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Statement;