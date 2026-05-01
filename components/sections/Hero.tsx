"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Spline from '@splinetool/react-spline'

import TextReveal from "@/components/TextReveal"

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 py-20 relative overflow-hidden">
      {/* 1. 3D Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
      
      {/* 2. Cinematic Half-Body Background Portrait */}
      <div className="absolute bottom-0 right-0 w-[85%] md:w-3/5 h-[75%] md:h-[95%] z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="relative w-full h-full dark:mix-blend-luminosity transition-all duration-1000 z-20"
          style={{ 
            maskImage: 'linear-gradient(to left, black 40%, transparent 85%), linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 85%), linear-gradient(to bottom, black 40%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Profile Background"
            fill
            className="object-cover object-center md:object-top opacity-80"
            priority
          />
        </motion.div>
      </div>

      {/* Left gradient overlay for text readability on mobile */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-[#0a0a0a]/90 dark:via-[#0a0a0a]/50 dark:to-transparent pointer-events-none" />

      {/* 3D Interactive Spline Object */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-10 opacity-70 cursor-grab active:cursor-grabbing">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>


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
