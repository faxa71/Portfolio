"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * A text link with the site's recurring "goes somewhere else" affordance:
 * a small arrow that nudges up-right on hover.
 */
export default function ArrowLink({
  href,
  children,
  external = false,
  className = "",
  textClassName = "text-sm",
  arrow = "up-right",
}) {
  const isUpRight = arrow === "up-right";
  const isLeft = arrow === "left";
  const content = (
    <motion.span
      className={`group inline-flex items-center gap-1.5 ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {isLeft && (
        <motion.span
          variants={{ rest: { x: 0 }, hover: { x: -3 } }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      )}
      <span className={`${textClassName} font-medium text-white/90 group-hover:text-white transition-colors`}>
        {children}
      </span>
      {!isLeft && (
        <motion.span
          variants={
            isUpRight
              ? { rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }
              : { rest: { x: 0 }, hover: { x: 3 } }
          }
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            {isUpRight ? (
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </motion.span>
      )}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return <Link href={href}>{content}</Link>;
}
