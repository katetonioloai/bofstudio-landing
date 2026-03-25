"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is BOF content on TikTok Shop?",
    answer: "BOF = bottom of funnel. These are TikTok Shop videos designed to convert — they show a product in action with a deal overlay (price, discount, product name) that makes viewers tap \"buy\" on the spot. BOFstudio makes creating them stupidly fast.",
  },
  {
    question: "How do the text overlays work?",
    answer: "Upload your product video and BOFstudio burns in your deal overlay — pill-style deal boxes with your product name, price, and discount, or full-screen hook text. It's baked into the video file, not a sticker, so it shows everywhere.",
  },
  {
    question: "Why do the AI captions matter for views?",
    answer: "TikTok uses your caption and hashtags to classify what your video is about and who to show it to. BOFstudio generates captions with your product name + bottom of funnel hashtags so TikTok puts your video in front of buyers searching for that product. More classification = more reach = more sales.",
  },
  {
    question: "Can I batch upload multiple videos at once?",
    answer: "Yes — on the Creator and Unlimited plans you can upload up to 10 videos at once. Apply the same overlay and caption settings to all of them and get 10 ready-to-post BOF videos in one go.",
  },
  {
    question: "Is there a free plan?",
    answer: "No free plan — but the Starter plan is just $9/mo and includes 10 BOF videos per day with all overlay styles and AI captions. No contracts, cancel anytime.",
  },
  {
    question: "Do I need a TikTok Shop account?",
    answer: "Yes. BOFstudio is built for TikTok Shop affiliates and creators. You'll need an active TikTok Shop account to post the videos you produce.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts, no lock-ins, no cancellation fees. Cancel straight from your dashboard whenever you want.",
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
            Got questions?{" "}
            <span className="text-gray-500">We got you.</span>
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
