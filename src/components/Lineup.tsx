import React from 'react';
import { motion } from 'framer-motion';

const ARTISTS = [
  { name: 'HEX_CODE', genre: 'Industrial Noise', time: '23:00' },
  { name: 'DATA_DECAY', genre: 'Broken Beat', time: '01:00' },
  { name: 'NULL_POINTER', genre: 'Glitch Techno', time: '03:00' },
  { name: 'SIGNAL_LOST', genre: 'Dark Ambient', time: '05:00' },
  { name: 'BUFFER_OVERFLOW', genre: 'Breakcore', time: '07:00' },
  { name: 'K_CORE', genre: 'Hardstyle Glitch', time: '09:00' },
];

const Lineup: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-text/20" />
        <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Phase_01_Lineup</h2>
        <div className="h-px w-20 bg-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-text/20">
        {ARTISTS.map((artist, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative border-r border-b border-text/20 p-8 hover:bg-accent transition-colors duration-300 cursor-none"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-bold group-hover:text-bg transition-colors">[{artist.time}]</span>
              <div className="w-2 h-2 bg-accent group-hover:bg-bg" />
            </div>
            
            <h3 className="text-3xl font-black mb-2 group-hover:text-bg transition-colors leading-none tracking-tighter">
              {artist.name}
            </h3>
            <p className="text-xs uppercase opacity-60 group-hover:text-bg/80 transition-colors">
              {artist.genre}
            </p>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none">
              <img 
                src={`<span className="block"><img src="https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&h=650&w=940" alt="A high-tech robot showcases advanced technology with its glowing energy sword in a futuristic setting." loading="lazy" /><a href="https://www.pexels.com/photo/robot-with-illuminated-item-13194386/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by iCliff Agendia on Pexels</a></span>`} 
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <button className="brutalist-border px-10 py-4 hover:bg-text hover:text-bg transition-colors uppercase font-bold text-sm tracking-widest">
          Load_More_Data
        </button>
      </div>
    </div>
  );
};

export default Lineup;
