"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

/**
 * Wraps a dark section with a soft light that follows the cursor —
 * visible only while the pointer is inside, invisible (and inert) on
 * touch devices since it only ever turns on via mouse events.
 */
export default function Spotlight({ children, className = "" }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20, mass: 0.4 };
  const sx = useSpring(mx, springConfig);
  const sy = useSpring(my, springConfig);
  const background = useMotionTemplate`radial-gradient(500px circle at ${sx}px ${sy}px, rgba(255,255,255,0.07), transparent 70%)`;

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{ background, opacity: active ? 1 : 0 }}
      />
      {children}
    </div>
  );
}
