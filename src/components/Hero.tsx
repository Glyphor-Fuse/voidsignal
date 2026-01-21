import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-end px-4 md:px-10 pb-20 pt-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full -z-10 opacity-40 grayscale contrast-150">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="<span className="block"><img src="https://images.pexels.com/photos/11558377/pexels-photo-11558377.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Vibrant glitch art featuring a visually striking eye in an abstract style." loading="lazy" /><a href="https://www.pexels.com/photo/colourful-abstract-illustration-11558377/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Alexey Demidov on Pexels</a></span>" 
          alt="Glitch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-[14vw] font-black leading-[0.85] tracking-tighter uppercase italic glitch-text" data-text="VOID//SIGNAL">
            VOID//<br />SIGNAL
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 border-l-4 border-accent pl-6 py-2"
          >
            <p className="text-sm md:text-base leading-relaxed max-w-sm opacity-80">
              A RADICAL REJECTION OF THE POLISHED INTERFACE. FREQUENCY EXPERIMENTATION. DIGITAL DECAY. THREE DAYS OF UNFILTERED AUDIO-VISUAL ASSAULT.
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-4 flex flex-col gap-1 text-[10px] font-mono opacity-50 uppercase"
          >
            <span>LOCATION: SECTOR_07 // UNKNOWN</span>
            <span>COORDINATES: 52.5200° N, 13.4050° E</span>
            <span>DATE: 11.08.24 - 13.08.24</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="md:col-span-4 flex justify-end"
          >
            <div className="w-32 h-32 brutalist-border p-2 rotate-12 hover:rotate-0 transition-transform cursor-pointer group">
              <div className="w-full h-full bg-accent/10 flex items-center justify-center relative overflow-hidden">
                <span className="text-xs font-bold group-hover:scale-110 transition-transform">SCAN_ME</span>
                <div className="absolute top-0 left-0 w-full h-full border border-accent/20 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-20 bg-text" />
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll_Down</span>
      </div>
    </header>
  );
};

export default Hero;
