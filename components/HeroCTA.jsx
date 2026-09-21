"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BorderBeam from "./BorderBeam";

export default function HeroCTA() {
  return (
    <Link href="/cases">
      <motion.span
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        animate="rest"
        className="relative inline-flex items-center gap-2.5 rounded-full bg-white/10 hover:bg-white/[0.15] text-white px-6 py-4 text-base transition-colors overflow-hidden"
      >
        <BorderBeam duration={5} />
        <span>Посмотреть кейсы</span>
        <motion.span
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </motion.span>
    </Link>
  );
}
