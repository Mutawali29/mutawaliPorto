import React from "react";
import Home from "./Home";
import Tools from "./Tools";
import Project from "./Projects";
import { motion } from "framer-motion";

const pageAnim = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0 }        
};

const feHome = () => {

    return(
        <>
        <motion.div
            initial= "hidden"
            animate= "visible"
            exit="hidden"
            variants={pageAnim}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <Home />
            <Tools />
            <Project />
        </motion.div>
        </>
    )
};

export default feHome;