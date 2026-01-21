import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-10 py-12 border-t border-text/10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="space-y-6">
          <div className="text-4xl md:text-6xl font-black italic tracking-tighter text-accent">
            END_OF_LINE
          </div>
          <div className="flex gap-8 text-[10px] uppercase font-bold opacity-60">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">X/Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">Discord</a>
            <a href="#" className="hover:text-accent transition-colors">Telegram</a>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4 font-mono text-[10px] text-right">
          <p className="max-w-[200px] opacity-40">
            © 2024 VOID//SIGNAL LABORATORY. ALL RIGHTS RESERVED. UNAUTHORIZED REPLICATION OF FREQUENCIES IS PROHIBITED.
          </p>
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-2 h-2 ${i === 2 ? 'bg-accent' : 'bg-text/20'}`} />
            ))}
          </div>
          <span className="opacity-20 uppercase tracking-widest">Build_v0.9.2_BETA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
