"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * "Liquid glass" styled pill button: a frosted, translucent surface with
 * a soft top specular highlight and a light sweep that glides across on
 * hover, mimicking the refractive look of Apple's glass material.
 */
export default function HeroCTA() {
  return (
    <Link href="/cases">
      <motion.span
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        animate="rest"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.02 } }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-6 py-4 text-base text-white backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.09) 45%, rgba(255,255,255,0.04) 100%)",
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 2px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.14), 0 8px 24px rgba(0,0,0,0.35)",
        }}
      >
        {/* top specular highlight, clipped to the pill by overflow-hidden above */}
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-70"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* light sweep that glides across on hover */}
        <motion.span
          variants={{ rest: { x: "-140%" }, hover: { x: "140%" } }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-[20deg]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0) 100%)",
          }}
        />

        <span className="relative">Посмотреть кейсы</span>
        <motion.span
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </motion.span>
    </Link>
  );
}
