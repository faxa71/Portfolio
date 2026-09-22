"use client";

import { motion } from "framer-motion";

/**
 * Fades and slides a section up into view as it enters the viewport.
 * Wrap any block-level content with this to get the site's standard
 * scroll-reveal motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
  ...rest
}) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
