"use client";

import { motion } from "framer-motion";

const TITLE = "Создаю цифровые интерфейсы, которые интуитивны и функциональны";
const WORDS = TITLE.split(" ");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
};

const word = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Homepage headline: words fade + slide up in a staggered sequence on
 * initial load, instead of appearing as one static block.
 */
export default function HeroTitle() {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.15] font-medium tracking-tight"
    >
      {WORDS.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block mr-[0.26em]">
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
}
