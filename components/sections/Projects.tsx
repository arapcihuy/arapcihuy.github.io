"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { projectsData } from "@/lib/data"
import { useRef } from "react"
import TextReveal from "@/components/TextReveal"

export default function Projects() {
  return (
    <section className="py-32 border-t border-gray-100 dark:border-gray-900">
      <div className="flex flex-col md:flex-row gap-20 mb-20">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest uppercase text-gray-500"
          >
            [ 02 — Work ]
          </motion.h2>
        </div>
        <div className="md:w-2/3 text-4xl font-medium tracking-tight">
          <TextReveal text="Selected projects that showcase my passion for clean code and creative design." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement with physical springs
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform mouse coordinates into 3D rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized mouse positions (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group block perspective-1000"
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY
      }}
    >
      <div 
        className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 mb-6 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(59,130,246,0.2)] dark:group-hover:shadow-[0_30px_60px_rgba(255,255,255,0.05)] border border-gray-100 dark:border-white/5"
        style={{ transform: "translateZ(30px)" }} // Pop the image out slightly
      >
        {project.isVideo ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
          />
        ) : (
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
        )}
        
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          <a href={project.github} className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white hover:scale-110 transition-all"><Github size={20} /></a>
          <a href={project.link} className="p-3 bg-white rounded-full text-black hover:scale-110 transition-all"><ExternalLink size={20} /></a>
        </div>
      </div>

      <div style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-xl font-medium mb-1">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-light mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags?.slice(0, 3).map((tag: string, i: number) => (
            <span key={i} className="text-[10px] font-mono border border-gray-100 dark:border-white/10 px-2 py-0.5 rounded-full uppercase text-gray-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
