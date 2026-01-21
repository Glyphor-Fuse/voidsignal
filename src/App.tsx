import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Lineup from './components/Lineup';
import TerminalInfo from './components/TerminalInfo';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg selection:bg-accent selection:text-bg overflow-x-hidden">
      <div className="noise" />
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden opacity-20">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-scanline" />
      </div>

      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-bg flex items-center justify-center p-10"
          >
            <div className="w-full max-w-md">
              <div className="flex justify-between mb-2 text-xs text-accent">
                <span>INITIALIZING_SIGNAL...</span>
                <span>88%</span>
              </div>
              <div className="w-full h-1 border border-accent">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-accent"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.1, repeat: Infinity, delay: i * 0.05 }}
                    className="h-2 bg-accent/20"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Nav />
            <Hero />
            <section id="lineup" className="px-4 md:px-10 py-20">
              <Lineup />
            </section>
            <section id="info" className="px-4 md:px-10 py-20">
              <TerminalInfo />
            </section>
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
