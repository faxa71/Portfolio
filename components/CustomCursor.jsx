"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A small dot that follows the cursor and grows over clickable elements.
 * Only activates on fine-pointer (mouse/trackpad) devices — touch screens
 * are left completely untouched, and the native cursor is only hidden once
 * we've confirmed a fine pointer is present.
 */
export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { stiffness: 500, damping: 40, mass: 0.5 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    setActive(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const overCheck = (e) => {
      const target = e.target;
      const interactive = target && target.closest && target.closest("a, button, [role='button']");
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overCheck);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overCheck);
    };
  }, [x, y]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference transition-[width,height] duration-200 ease-out ${
        hovering ? "w-10 h-10" : "w-2.5 h-2.5"
      }`}
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    />
  );
}
