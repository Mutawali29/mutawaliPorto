import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./menuVariants/Contact"; // Import komponen Contact
import Cv from "./menuVariants/Cv"; // Import komponen Cv
import html2pdf from "html2pdf.js"; // Untuk handle CV click (jika menggunakan html2pdf.js)
import { HiOutlineX } from "react-icons/hi";

const Menu = ({onClose}) => {
    // State untuk membuka modal kontak dan CV
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isCvOpen, setIsCvOpen] = useState(false);
    const menuRef = useRef(null);

    // Variants untuk animasi
    const menuVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    // Handle klik Contact
    const handleContactClick = () => {
        setIsContactOpen(true);
        setIsCvOpen(false); // Pastikan CV ditutup saat Contact dibuka
        console.log("Contact clicked");
    };

    // Handle klik CV (Generate PDF menggunakan html2pdf.js)
    const handleCvClick = () => {
        const element = document.getElementById("cv-content"); // Ambil elemen CV
        html2pdf()
            .from(element)
            .save();
        setIsCvOpen(true);
        setIsContactOpen(false); // Pastikan Contact ditutup saat CV dibuka
        console.log("CV clicked and PDF generated");
    };

    return (
        <>
            <AnimatePresence>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
                <motion.div
                    ref={menuRef}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-900 text-white rounded-lg shadow-lg p-8 md:p-16 flex flex-col relative max-w-lg md:max-w-4xl w-full"
                >
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
                        variants={menuVariants}
                    >
                        <button
                        onClick={onClose} // Panggil fungsi onClose untuk menutup halaman
                        className="absolute z-40 top-[-30px] right-[-30px] text-gray-400 hover:text-white transition-colors text-3xl"
                        >
                            <HiOutlineX />   
                        </button>

                        {['Dashboard', 'Work', 'CV', 'Contact'].map((item, index) => (
                            <motion.div
                                key={`${item}-${index}`}  // Unique key for each item
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="relative py-6 px-8 md:py-10 md:px-16 cursor-pointer text-center text-2xl md:text-3xl group"
                                onClick={
                                    item === "Contact" ? handleContactClick : 
                                    item === "CV" ? handleCvClick : 
                                    null
                                } // Handle Contact and CV click
                            >
                                {item}
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white h-1 w-12 md:w-16 origin-bottom transition-all duration-300 scale-y-0 group-hover:scale-y-100"></span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>    
            </AnimatePresence>

            {/* Conditional rendering for Contact and CV modals */}
            <AnimatePresence>
                {isContactOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }} // Start from below
                        animate={{ opacity: 1, y: 0 }}   // Slide to center
                        exit={{ opacity: 0, y: -100 }}   // Slide out to top
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 flex justify-center items-center"
                    >
                        <Contact onClose={() => setIsContactOpen(false)} /> {/* Render Contact component with close prop */}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isCvOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }} // Start from below
                        animate={{ opacity: 1, y: 0 }}   // Slide to center
                        exit={{ opacity: 0, y: -100 }}   // Slide out to top
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 flex justify-center items-center"
                    >
                        <Cv onClose={() => setIsCvOpen(false)} /> {/* Render Cv component with close prop */}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Menu;
