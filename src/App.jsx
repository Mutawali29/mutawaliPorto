import React from "react";

import { Route, Routes, useLocation, NavLink } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { GoHorizontalRule } from "react-icons/go";

import Navbar from "./Main/Navbar";
import FeDev from "./Main/FeDev";
import Designer from "./Main/Designer";
import Editor from "./Main/Editor";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="h-screen bg-black">
        <Navbar />

        {/* Navigation  */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<FeDev />} />
              <Route path="/Designer" element={<Designer />} />
              <Route path="/Editor" element={<Editor />} />
            </Routes>
          </AnimatePresence>
        </div>

        {/* Active marker  */}
        <div className="flex justify-center space-x-4">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              isActive ? 'z-20 text-white transition-all duration-300' : 
              'z-20 text-gray-500 hover:text-white transition-all duration-300'
            }
          >
            <GoHorizontalRule className="text-4xl relative z-30" />
          </NavLink>

          <NavLink 
            to="/Designer" // Corrected path
            className={({ isActive }) => 
              isActive ? 'z-20 text-white transition-all duration-300' : 
              'z-20 text-gray-500 hover:text-white transition-all duration-300'
            }
          >
            <GoHorizontalRule className="text-4xl relative z-30" />
          </NavLink>

          <NavLink 
            to="/Editor" // Corrected path
            className={({ isActive }) => 
              isActive ? 'z-20 text-white transition-all duration-300' : 
              'z-20 text-gray-500 hover:text-white transition-all duration-300'
            }
          >
            <GoHorizontalRule className="text-4xl relative z-30" />
          </NavLink>
        </div>
        
      </div>
    </>
  );
}

export default App;
