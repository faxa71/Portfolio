"use client";

import ArrowLink from "./ArrowLink";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-4 sm:px-[100px] py-16 flex flex-col items-center gap-3 text-center">
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -3 }}
        className="text-sm font-medium text-white/90 hover:text-white transition-colors inline-flex items-center gap-1.5"
      >
        Вверх
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
      <ArrowLink href="/cases" arrow="right">Кейсы</ArrowLink>
      <ArrowLink href="mailto:madiyarovfaxriddin@gmail.com" arrow="right">Писать мне</ArrowLink>
    </footer>
  );
}
