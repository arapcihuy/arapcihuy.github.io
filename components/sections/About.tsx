"use client"

import { motion } from "framer-motion"
import { galleryData } from "@/lib/data"
import Image from "next/image"
import TextReveal from "@/components/TextReveal"

export default function About() {
  return (
    <section className="py-32 border-t border-gray-100 dark:border-gray-900">
      <div className="flex flex-col md:flex-row gap-20 mb-24">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest uppercase text-gray-500"
          >
            [ 01 — About Me ]
          </motion.h2>
        </div>
        
        <div className="md:w-2/3 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-medium leading-tight tracking-tight"
          >
            <TextReveal text="I'm a Frontend Developer specializing in React, Next.js, and TypeScript to build interfaces that feel as good as they look." />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light"
          >
            <p>
              With 3+ years of experience, I've bridged the gap between complex engineering and human-centered design. 
              My approach is rooted in precision, ensuring every animation and pixel serves a purpose.
            </p>
            <p>
              I believe that great software is made in the details. From performance optimization to smooth 
              micro-interactions, I strive to create products that leave a lasting impression.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Activity Gallery */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
          {galleryData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative w-full md:w-1/3 aspect-[16/10] group overflow-hidden rounded-2xl bg-gray-900"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <span className="text-white font-mono text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
