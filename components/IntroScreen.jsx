"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Brief full-screen splash shown once per page load (layout.jsx doesn't
 * remount on client-side navigation, so this doesn't replay when moving
 * between pages via Link — only on a fresh visit or hard refresh).
 */
export default function IntroScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-black"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-medium tracking-tight text-white"
          >
            Deen.dsgn
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
