import React from "react";
import Home from "./Home";
import Software from "./Software";
import Project from "./ProjectV";
import { motion } from "framer-motion";

const pageAnima = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0 }
};

const VidHome = () => {
    return (
        <>
            <motion.div
                initial="hidden"  
                animate="visible"  
                exit="hidden"      
                variants={pageAnima}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <Home />
                <Software />
                <Project />
            </motion.div>
        </>
    );
};

export default VidHome;
