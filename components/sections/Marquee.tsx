"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

const STACK = [
  "React", "Next.js", "Framer", "Tailwind", "TypeScript", 
  "UI/UX", "Figma", "GSAP", "Node.js", "WebGL",
  "React", "Next.js", "Framer", "Tailwind", "TypeScript", 
  "UI/UX", "Figma", "GSAP", "Node.js", "WebGL"
];

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredText, setHoveredText] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-24 overflow-hidden flex bg-transparent cursor-none"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex whitespace-nowrap gap-12 text-7xl md:text-[8rem] font-bold tracking-tighter uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        {STACK.map((item, idx) => (
          <span 
            key={idx} 
            onMouseEnter={() => setHoveredText(item)}
            className="text-transparent hover:text-black dark:hover:text-white transition-colors duration-300"
            style={{ WebkitTextStroke: "1px rgba(156, 163, 175, 0.4)" }}
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Floating Interactive Element */}
      <motion.div
        className="absolute pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden relative shadow-2xl">
           {/* Futuristic glass blur representing the hover state */}
           <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full flex flex-col items-center justify-center p-4">
             <span className="text-sm font-mono opacity-50 tracking-widest uppercase mb-1">Stack</span>
             <span className="text-xl font-bold tracking-tight text-center">{hoveredText}</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
