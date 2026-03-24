"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Videos Created" },
  { number: "50+", label: "Creators" },
  { number: "2", label: "Overlay Styles" },
  { number: "1", label: "Platform (TikTok)" },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
