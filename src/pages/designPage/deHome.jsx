import React from "react";
import Homed from "./Homed";
import Statement from "./Statement";
import { motion } from "framer-motion";

const pageAnima = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0 }
}

const deHome = () => {
    return(
        <>
            <motion.div
                initial= "hidden"
                animate= "visible"
                exit= "hidden" 
                variants= {pageAnima}
                transition= {{ duration: 0.8, ease: "easeInOut" }}
            >
                <Homed />
                <Statement />
            </motion.div>
        </>
    )
};

export default deHome;