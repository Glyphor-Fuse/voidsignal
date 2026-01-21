import React from 'react';
import { motion } from 'framer-motion';

const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-4 md:px-10 py-6 flex justify-between items-start pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="pointer-events-auto"
      >
        <span className="text-xl font-bold tracking-tighter text-accent">VOID//SIGNAL</span>
        <div className="text-[10px] opacity-70 mt-1 uppercase tracking-widest">
          EST. 2024 / FREQUENCY_CORRUPTION
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-end gap-2 pointer-events-auto"
      >
        <a href="#lineup" className="group flex items-center gap-2 overflow-hidden">
          <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">01</span>
          <span className="hover:text-accent transition-colors uppercase text-sm">Lineup</span>
        </a>
        <a href="#info" className="group flex items-center gap-2 overflow-hidden">
          <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">02</span>
          <span className="hover:text-accent transition-colors uppercase text-sm">Info</span>
        </a>
        <a href="#tickets" className="group flex items-center gap-2 overflow-hidden bg-accent text-bg px-2 py-1">
          <span className="uppercase text-xs font-bold">Access_Granted</span>
        </a>
      </motion.div>
    </nav>
  );
};

export default Nav;
