"use client"

import { motion, Variants } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  width?: string
  delay?: number
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const words = text.split(" ")

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for premium feel
      },
    },
    hidden: {
      opacity: 0,
      y: "100%",
    },
  }

  return (
    <motion.div
      className={`flex flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block mr-[0.2em] py-[0.1em] px-[0.15em] -mx-[0.15em]">
          <motion.span
            variants={child}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
