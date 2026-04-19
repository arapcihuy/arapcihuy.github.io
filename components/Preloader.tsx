"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cinematic quick load
    const duration = 1500; // 1.5 seconds loading sequence
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Wait a tiny bit then trigger completion
          setTimeout(onComplete, 400);
          return 100;
        }
        // Accelerate loading randomly towards the end
        return Math.min(prev + step * (Math.random() * 2 + 0.5), 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      <div className="flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-8xl md:text-[12rem] font-bold font-mono tracking-tighter"
        >
          {Math.floor(progress)}
          <span className="text-4xl md:text-6xl text-gray-500 font-light ml-2">%</span>
        </motion.div>
        
        <div className="w-64 h-1 bg-white/20 mt-8 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>

        <motion.p 
          className="mt-6 text-sm font-mono tracking-widest text-gray-400 uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Initializing Experience.
        </motion.p>
      </div>
    </motion.div>
  );
}
