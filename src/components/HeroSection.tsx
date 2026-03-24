"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background video — muted, looping, no controls */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          poster="/bofstudio-landing/hero-poster.jpg"
        >
          <source src="/bofstudio-landing/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/30 via-[#0A0A0F]/20 to-[#0A0A0F]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now in Beta
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6"
        >
          Your TikTok Shop BOF Videos,{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Done in Seconds
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
        >
          Add overlays, trim clips, and generate captions — all from your phone. Built by a creator, for creators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="https://getbofstudio.com/"
            className="group relative w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105 text-center"
          >
            Start Creating — It&apos;s Free
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10" />
    </section>
  );
}
