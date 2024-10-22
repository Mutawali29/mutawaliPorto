import React from "react";
import design1 from "./assetsd/codesphere.png";
import design2 from "./assetsd/nextpay.png";
import design3 from "./assetsd/vrDesign.png";
import design4 from "./assetsd/rokok.png";
import { motion } from "framer-motion"; // Import motion for animation

const DesignProject = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16 px-6 relative">
                {/* Glowing Effect in Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-transparent to-indigo-800 opacity-40 blur-3xl"></div>
                
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
                        My Design Projects
                    </h1>
                    
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-16"
                >
                    {/* Project 1 - Codesphere */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className="relative bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out border border-opacity-30 border-gray-500"
                    >
                        <img src={design1} alt="Codesphere" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h2 className="text-3xl font-semibold text-white">Codesphere</h2>
                            <p className="text-gray-300 mt-2">
                                A modern platform for developers to code, deploy, and manage projects in the cloud.
                            </p>
                            <a href="https://www.figma.com/proto/n4GasO5iS2Zisuo0cGQxle/codesphere?node-id=1-3&node-type=canvas&t=vZduECsGsf4CjZx0-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg">
                                View Project
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 2 - NextPay */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className="relative bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out border border-opacity-30 border-gray-500"
                    >
                        <img src={design2} alt="NextPay" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h2 className="text-3xl font-semibold text-white">NextPay</h2>
                            <p className="text-gray-300 mt-2">
                                An innovative payment gateway platform designed for seamless transactions.
                            </p>
                            <a href="https://www.figma.com/proto/vrJA3vZKwOQCtHQzdvTBdE/Nextpay?node-id=1-2&node-type=canvas&t=3z9XAy8dezdpat0Y-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg">
                                View Project
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 3 - VR Design */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className="relative bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out border border-opacity-30 border-gray-500"
                    >
                        <img src={design3} alt="VR Design" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h2 className="text-3xl font-semibold text-white">VR Design</h2>
                            <p className="text-gray-300 mt-2">
                                A virtual reality design project focused on immersive 3D experiences.
                            </p>
                            <a href="https://www.figma.com/proto/JFs5NEpXThSeyEqF4Sh1eu/VRDesign?node-id=1-2&node-type=canvas&t=BkkPydVTdXahUhSz-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg">
                                View Project
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 4 - Rokok Branding */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className="relative bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out border border-opacity-30 border-gray-500"
                    >
                        <img src={design4} alt="Rokok Branding" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h2 className="text-3xl font-semibold text-white">Rokok Branding</h2>
                            <p className="text-gray-300 mt-2">
                                A branding project for a modern cigarette company, focusing on bold visuals and identity.
                            </p>
                            <a href="https://www.figma.com/design/Q2vdGeNlBAtrCTo9JTGBOT/Rokok-Company-Profile?node-id=0-1&node-type=canvas&t=93nmyfCEEQqEs2Bn-0" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg">
                                View Project
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default DesignProject;
