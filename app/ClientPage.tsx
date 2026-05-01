"use client"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Contact from "@/components/sections/Contact"
import Marquee from "@/components/sections/Marquee"
import ScrollVideoReveal from "@/components/sections/ScrollVideoReveal"
import CustomCursor from "@/components/CustomCursor"
import Preloader from "@/components/Preloader"
import { motion, AnimatePresence } from "framer-motion"

export default function ClientPage() {
  const [isDark, setIsDark] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = (e: React.MouseEvent) => {
    // View Transition API for the circular mask effect
    if (!document.startViewTransition) {
      const newTheme = !isDark
      setIsDark(newTheme)
      document.documentElement.classList.toggle("dark")
      localStorage.setItem("theme", newTheme ? "dark" : "light")
      return
    }

    const x = e.clientX
    const y = e.clientY
    
    document.documentElement.style.setProperty('--x', `${x}px`)
    document.documentElement.style.setProperty('--y', `${y}px`)

    document.startViewTransition(() => {
      const newTheme = !isDark
      setIsDark(newTheme)
      document.documentElement.classList.toggle("dark")
      localStorage.setItem("theme", newTheme ? "dark" : "light")
    })
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className={`transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Floating Navigation */}
        <nav className="fixed top-8 right-8 z-50 flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full border border-gray-100 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-xl transition-all hover:scale-110 active:scale-95"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                >
                  <Moon size={20} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                >
                  <Sun size={20} className="text-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Removed Progress Bar to prevent sync issues */}

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <Hero />
        </div>
        
        <ScrollVideoReveal />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <About />
          <Projects />
          <Experience />
        </div>
        <Marquee />
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <Contact />
        </div>
      </div>
    </main>
  )
}
