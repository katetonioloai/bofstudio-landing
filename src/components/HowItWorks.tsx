"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Upload Your Product Video",
    description: "Drop in any product clip — straight from TikTok Shop, your phone, or a brand asset. Any format, any length.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-400">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Overlay + Caption",
    description: "BOFstudio adds the deal pill with product info, price, and discount — then generates an engaging caption ready to post.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-400">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Two steps.{" "}
            <span className="text-gray-500">That&apos;s it.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No learning curve. No editing skills required. Upload and go.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.05]">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent">
                    {step.number}
                  </span>
                  <div className="mt-2">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
