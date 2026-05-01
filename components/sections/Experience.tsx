"use client"

import { motion } from "framer-motion"
import { experienceData, educationData } from "@/lib/data"
import { useState } from "react"
import Image from "next/image"
import TextReveal from "@/components/TextReveal"

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience")

  return (
    <section className="py-32 border-t border-gray-100 dark:border-gray-900">
      <div className="flex flex-col md:flex-row gap-20 items-stretch">
        
        {/* Sidebar Column */}
        <aside className="md:w-1/3">
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-8"
            >
              [ 03 — Experience ]
            </motion.h2>
            
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setActiveTab("experience")}
                className={`text-2xl text-left transition-all duration-300 ${activeTab === "experience" ? "text-black dark:text-white opacity-100 pl-4 border-l-2 border-black dark:border-white" : "text-gray-500 opacity-50 hover:opacity-80"}`}
              >
                Experience
              </button>
              <button 
                onClick={() => setActiveTab("education")}
                className={`text-2xl text-left transition-all duration-300 ${activeTab === "education" ? "text-black dark:text-white opacity-100 pl-4 border-l-2 border-black dark:border-white" : "text-gray-500 opacity-50 hover:opacity-80"}`}
              >
                Education
              </button>
            </div>
          </div>
        </aside>

        {/* Content Column */}
        <div className="md:w-2/3">
          <div className="mb-12">
            <TextReveal text="A chronological look at my professional journey and educational background." className="text-gray-400" />
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {(activeTab === "experience" ? experienceData : educationData).map((item, idx) => (
              <div key={idx} className="group border-b border-gray-100 dark:border-gray-900 pb-8 last:border-0 flex flex-col md:flex-row gap-6 mt-8">
                <div className="flex-shrink-0 mt-1 hidden md:block">
                  {item.logo ? (
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-800 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${'bgColor' in item ? item.bgColor : "bg-white dark:bg-gray-900"}`}>
                      <Image
                        src={item.logo}
                        alt={`${item.title} logo`}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full p-2"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-transform duration-500 group-hover:scale-110">
                      <span className="font-mono text-gray-500 text-xl">{item.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center gap-4 mb-2 md:mb-0">
                       <div className="flex-shrink-0 md:hidden">
                        {item.logo ? (
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-800 ${'bgColor' in item ? item.bgColor : "bg-white dark:bg-gray-900"}`}>
                            <Image
                              src={item.logo}
                              alt={`${item.title} logo`}
                              width={40}
                              height={40}
                              className="object-contain w-full h-full p-1"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                            <span className="font-mono text-gray-500 text-sm">{item.title.charAt(0)}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-gray-400 transition-colors cursor-default">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 font-light mt-1">{item.role}</p>
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-mono text-gray-600 shrink-0">{item.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-xl text-sm md:text-base">
                    {item.description}
                  </p>
                  {'link' in item && item.link && (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-[10px] font-mono uppercase tracking-widest text-black dark:text-white border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
