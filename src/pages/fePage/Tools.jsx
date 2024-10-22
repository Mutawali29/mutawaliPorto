import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Impor motion dari framer-motion
import { IoLogoHtml5 } from "react-icons/io5";
import { FaHtml5, FaCss3, FaReact, FaVuejs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const morphStyle = {
    initial: { opacity: 0, y: 50, clipPath: "inset(0 100% 0 0)" },
    animate: { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" },
    transition: { duration: 1, ease: "easeOut" }
};

const Tools = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    return (
        <>
            <div className="h-auto w-full bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 py-10">
                <div className="pt-10">
                    <p className="text-3xl md:text-4xl font-semibold text-white text-center pt-10">What I Use</p>
                </div>
                {/* Wrapper utama untuk ikon dan timeline */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-10 px-6 md:px-0">
                    {/* Bagian Ikon */}
                    <div className="space-y-8">
                        <div className="flex space-x-4 justify-center gap-x-4 md:gap-x-6">
                            <IoLogoHtml5 className="text-orange-500 text-4xl md:text-5xl" />
                            <FaCss3 className="text-blue-500 text-4xl md:text-5xl" />
                            <SiJavascript className="text-yellow-300 text-4xl md:text-5xl" />
                        </div>
                        <div className="flex space-x-4 justify-center gap-x-4 md:gap-x-6 mt-4">
                            <FaReact className="text-4xl md:text-5xl text-cyan-400" />
                            <FaVuejs className="text-4xl md:text-5xl text-green-500" />
                            <RiNextjsFill className="text-4xl md:text-5xl text-white" />
                        </div>
                        <div className="flex space-x-4 justify-center gap-x-4 md:gap-x-6 mt-4">
                            <SiTypescript className="text-4xl md:text-5xl text-blue-500" />
                            <FaGitAlt className="text-4xl md:text-5xl text-orange-500" />
                            <SiRedux className="text-4xl md:text-5xl text-purple-500" />
                        </div>
                    </div>

                    {/* Bagian Timeline */}
                    <div className="flex flex-col space-y-8 mt-10 md:mt-0 text-white w-full md:w-auto">
                        <motion.div
                            initial={morphStyle.initial}
                            animate={hasAnimated ? morphStyle.animate : morphStyle.initial}
                            transition={{ ...morphStyle.transition, delay: 1 }}
                            className="text-center p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-lg"
                        >
                            <p className="font-semibold text-lg md:text-xl">2023</p>
                            <p className="text-lg md:text-xl font-semibold">Junior React Developer</p>
                            <p className="font-light">Personal</p>
                        </motion.div>
                        <motion.div
                            initial={morphStyle.initial}
                            animate={hasAnimated ? morphStyle.animate : morphStyle.initial}
                            transition={{ ...morphStyle.transition, delay: 1.6 }}
                            className="text-center p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-lg"
                        >
                            <p className="font-semibold text-lg md:text-xl">2024</p>
                            <p className="text-lg md:text-xl font-semibold">Junior Front-End Developer</p>
                            <p className="font-light">Personal</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tools;
