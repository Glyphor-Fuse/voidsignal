import React from 'react';
import { motion } from 'framer-motion';

const TerminalInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div>
          <h3 className="text-accent text-sm mb-4 font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-accent" /> SYSTEM_SPECIFICATIONS
          </h3>
          <div className="space-y-4 font-mono text-sm leading-relaxed opacity-80">
            <p>
              &gt; VOID//SIGNAL is an anti-algorithm gathering. We curate experiences that cannot be replicated in the digital stream. 
            </p>
            <p>
              &gt; No phones permitted within the resonance zones. No recording. Only physical presence and direct frequency impact.
            </p>
            <p>
              &gt; The venue is a decommissioned power plant in the outskirts of Berlin. Access codes will be sent 24 hours prior to the event via encrypted SMS.
            </p>
          </div>
        </div>

        <div className="brutalist-border p-6 relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent/20 group-hover:h-full transition-all duration-500 -z-10" />
          <h4 className="font-bold mb-2 uppercase">Safety_Protocol</h4>
          <p className="text-xs opacity-60">
            High-intensity strobe lighting and extreme decibel levels will be present. Ear protection is mandatory and provided at entry. Proceed with caution.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-square brutalist-border p-2 grayscale hover:grayscale-0 transition-all duration-700">
          <img 
            src="https://images.pexels.com/photos/27362930/pexels-photo-27362930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Venue" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 -z-10 bg-accent/5 accent-border flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-1/2 border border-dashed border-accent/20 rounded-full"
          />
        </div>
        <div className="mt-12 flex flex-col gap-2">
          <div className="flex justify-between text-[10px] opacity-40 uppercase">
            <span>Entry_Status</span>
            <span>Available</span>
          </div>
          <div className="w-full h-1 bg-text/10 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              className="w-3/4 h-full bg-accent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalInfo;