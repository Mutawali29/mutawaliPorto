import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Menu from "../components/Menu";


const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            
            <div className="flex items-center justify-between text-white p-8">
                <p className="text-xl">QUSAY MUTAWALI</p>
                <HiBars3 className="relative z-20 text-4xl cursor-pointer" onClick={toggleMenu}/>
            </div>

            {menuOpen && (
                <div className="absolute top-0 left-0 z-30 w-full h-full bg-black">
                    <Menu onClose={() => setMenuOpen(false)}/>
                </div>
            )}
        </>
    )
};

export default Navbar;