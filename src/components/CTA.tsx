"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
            Every BOF video you don&apos;t post is{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              a sale you don&apos;t make.
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
            BOFstudio creators add overlays, generate captions, and batch-post TikTok Shop BOF videos in seconds. Get your first video done in under 60 seconds.
          </p>
          <a
            href="https://getbofstudio.com/"
            className="group relative inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105"
          >
            Start Posting Faster — $9/mo
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
