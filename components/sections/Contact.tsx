"use client"

import { motion } from "framer-motion"
import { navItems } from "@/lib/data"
import MagneticButton from "@/components/MagneticButton"
import TextReveal from "@/components/TextReveal"
import { useLenis } from "lenis/react"

export default function Contact() {
  const lenis = useLenis()

  return (
    <section className="py-32 border-t border-gray-100 dark:border-gray-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-12">
          [ 04 — Connection ]
        </h2>
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight">
            <TextReveal text="Ready to create something" />
          </h3>
          <h3 className="text-5xl md:text-7xl font-medium tracking-tighter italic text-gray-400 mt-2">
            <TextReveal text="extraordinary?" delay={0.4} />
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {navItems.map((item, idx) => (
            <MagneticButton key={idx}>
              {item.label === "Home" ? (
                <button 
                  onClick={() => lenis?.scrollTo(0)}
                  className="group flex items-center gap-2 text-xl hover:text-gray-400 dark:hover:text-white transition-all font-light px-4 py-2"
                >
                  <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                  {item.label}
                </button>
              ) : (
                <a 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-xl hover:text-gray-400 dark:hover:text-white transition-all font-light px-4 py-2"
                >
                  <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                  {item.label}
                </a>
              )}
            </MagneticButton>
          ))}
        </div>
        
        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Rasyid Achmad — Crafted with Precision
        </p>
      </motion.div>
    </section>
  )
}
