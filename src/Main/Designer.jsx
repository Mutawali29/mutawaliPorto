import React, { useState } from "react";
import image from "../assets/Designer.png";
import { motion } from "framer-motion";
import DeHome from "../pages/designPage/deHome";

const textAnim = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
};

const Designer = () => {
    const [showDeHome, setShowDeHome] = useState(false);
    const handleButtonClick = () => {
        setShowDeHome(true);
    };

    return (
        <>
            {showDeHome ? (
                <DeHome />
            ) : (
                <>
                    {/* image section */}
                    <div className="relative z-0 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.65 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.65 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img src={image} className="h-96 w-auto opacity-45" alt="Designer" />
                        </motion.div>
                    </div>

                    {/* write section */}
                    <div className="absolute inset-0 z-10 text-white flex flex-col items-center justify-center space-y-16">
                        <motion.div
                            variants={textAnim}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <p>002</p>
                        </motion.div>
                        <div className="flex flex-col justify-center text-center">
                            <motion.div
                                variants={textAnim}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <h1 className="text-3xl font-bold">FIGMA DESIGNER</h1>
                            </motion.div>
                            <motion.div
                                variants={textAnim}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <p className="text-xl italic">Visual Rework</p>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={textAnim}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <button
                                onClick={handleButtonClick}
                                className="border-2 px-5 py-2 transition-all duration-300 hover:px-5 hover:bg-white hover:text-black"
                            >
                                Discover More
                            </button>
                        </motion.div>
                    </div>
                </>
            )}
        </>
    );
};

export default Designer;
