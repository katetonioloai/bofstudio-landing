"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is BOF content?",
    answer: "Bottom of funnel — TikTok Shop videos designed to drive purchases. They show a product in action with a deal overlay (price, discount, product name) that makes people tap \"buy\" right from the video.",
  },
  {
    question: "How does the text overlay work?",
    answer: "Upload your product video and we add the deal pill — a styled overlay at the bottom with your product name, original price, sale price, and discount percentage. It matches the format that TikTok Shop buyers are trained to respond to.",
  },
  {
    question: "Can I customize the overlay style?",
    answer: "Yes. Multiple templates are available to match different product categories and aesthetics. Pick the one that fits your niche — beauty, tech, fashion, home goods, and more.",
  },
  {
    question: "Do I need a TikTok Shop account?",
    answer: "Yes. BOFstudio is built specifically for TikTok Shop creators and affiliates. You'll need an active TikTok Shop account to post the videos you create.",
  },
  {
    question: "Is there a free trial?",
    answer: "Better — there's a free tier. 5 videos per month, forever. No credit card required. Upgrade when you're ready to scale.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts, no commitments, no cancellation fees. Cancel from your dashboard whenever you want.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.05]"
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <h3 className="text-base sm:text-lg font-medium">{faq.question}</h3>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`text-gray-500 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {open && (
          <p className="mt-3 sm:mt-4 text-gray-400 leading-relaxed text-sm sm:text-base pr-6 sm:pr-8">{faq.answer}</p>
        )}
      </button>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Questions?{" "}
            <span className="text-gray-500">Answers.</span>
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
