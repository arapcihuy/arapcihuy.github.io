"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"

export default function ScrollVideoReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    // Kunci video agar selalu siap untuk di-scrub
    if (videoRef.current) {
      videoRef.current.pause();
    }

    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (videoRef.current && videoRef.current.duration) {
        // Mengubah waktu video berdasarkan scroll (0% sampai 100%)
        videoRef.current.currentTime = latest * videoRef.current.duration;
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Transformasi Opacity & Transformasi Teks layaknya Apple Product Page
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.3], [0, 1, 1, 0])
  const text1Y = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.3], [50, 0, 0, -50])

  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.65], [0, 1, 1, 0])
  const text2Y = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.65], [50, 0, 0, -50])

  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1])
  const text3Scale = useTransform(scrollYProgress, [0.7, 0.8, 1], [0.8, 1, 1])

  // Efek Parallax/Skala Gambar sebagai pengganti Video Scrubbing
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={containerRef} className="relative h-[800vh] bg-black text-white w-full border-t border-gray-900">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Image Parallax (Sebagai Pengganti Video) */}
        <motion.img
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
          style={{ scale: imageScale, y: imageY }}
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Abstract Background"
        />

        {/* Overlay gradient agar teks lebih terbaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />

        {/* Interactive Scroll Texts */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full pointer-events-none">
          
          {/* Teks 1: Muncul di Awal */}
          <motion.div 
            style={{ opacity: text1Opacity, y: text1Y }} 
            className="absolute top-1/2 -translate-y-1/2 w-full max-w-2xl left-6 md:left-12"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Pixel Perfect.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-8">
              Every micro-interaction is carefully crafted. I don't just build websites; I engineer digital experiences with precision.
            </p>
            <div className="flex gap-8 text-sm font-mono text-gray-500 uppercase tracking-wider">
              <div className="flex flex-col gap-3">
                <span className="text-white border-b border-gray-800 pb-2">01. UI/UX Design</span>
                <span>Figma to Code</span>
                <span>Component Driven</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white border-b border-gray-800 pb-2">02. Animation</span>
                <span>Framer Motion</span>
                <span>Micro-interactions</span>
              </div>
            </div>
          </motion.div>

          {/* Teks 2: Muncul di Tengah */}
          <motion.div 
            style={{ opacity: text2Opacity, y: text2Y }} 
            className="absolute top-1/2 -translate-y-1/2 w-full max-w-2xl right-6 md:right-12 text-left md:text-right"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Lightning Fast.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-8">
              Built on modern architectures. Because speed is a feature, not an afterthought. Performance is prioritized at every layer.
            </p>
            <div className="flex md:justify-end gap-8 text-sm font-mono text-gray-500 uppercase tracking-wider text-left">
              <div className="flex flex-col gap-3">
                <span className="text-white border-b border-gray-800 pb-2">Performance</span>
                <span>Server Components</span>
                <span>Sub-second LCP</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white border-b border-gray-800 pb-2">Technologies</span>
                <span>Next.js 14</span>
                <span>React Ecosystem</span>
              </div>
            </div>
          </motion.div>

          {/* Teks 3: Muncul di Akhir */}
          <motion.div 
            style={{ opacity: text3Opacity, scale: text3Scale }} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl text-center"
          >
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Experience <br />The Future.
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full" />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
