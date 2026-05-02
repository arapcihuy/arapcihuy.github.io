"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import TextReveal from "@/components/TextReveal"

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 py-20 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* 1. 3D Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
      
      {/* 2. Profile Photo - Full Width, positioned right */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/profile.png"
            alt="Profile"
            fill
            className="object-cover object-right-top"
            priority
          />
        </motion.div>
      </div>

      {/* Left gradient overlay - smooth fade ke foto */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white from-30% via-white/60 via-50% to-transparent dark:from-[#0a0a0a] dark:from-30% dark:via-[#0a0a0a]/60 dark:via-50% dark:to-transparent pointer-events-none" />



      {/* 3. Completely Neat Geometric Hero Animation (Rapi) */}
      <div className="absolute top-0 right-0 w-full h-full z-10 overflow-hidden pointer-events-none opacity-50 mix-blend-screen flex items-center justify-end pr-20 md:pr-40">
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] text-gray-200 dark:text-gray-800 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </motion.svg>

        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] text-blue-500/10 dark:text-blue-500/5"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5" />
          <circle cx="10" cy="50" r="1.5" fill="currentColor" />
          <circle cx="90" cy="50" r="1.5" fill="currentColor" />
        </motion.svg>
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter text-black dark:text-white">
              <TextReveal text="Hi, I'm Rasyid" />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-light drop-shadow-sm"
          >
            Frontend Developer — UI/UX Designer. Focusing on building high-performance, 
            visually stunning web experiences with precision and care.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
