"use client";

import { motion } from "framer-motion";

/**
 * Next.js re-mounts this on every navigation (unlike layout.jsx), so it's
 * the right place for a shared page-enter animation: a quick fade + rise
 * instead of pages just snapping into place.
 */
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
