"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Drop-in replacement for PlaceholderBlock that tries to load a real image
 * from /public/images/... first, and falls back to the placeholder look if
 * the file isn't there yet. This means: export the image from Figma, drop
 * it at the given path with the exact filename, and it appears on the site
 * automatically — no code changes needed.
 *
 * Also carries the site's shared photo motion: a subtle scroll parallax
 * (on by default) and a zoom-in on hover.
 */
export default function SiteImage({
  src,
  alt = "",
  ratio = "16/9",
  label,
  className = "",
  parallax = true,
}) {
  const [failed, setFailed] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-6%", "6%"] : ["0%", "0%"]);

  return (
    <div
      ref={containerRef}
      className={`group relative w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#181818] via-panel to-black ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!failed && (
        <motion.img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          style={{ y }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute object-cover ${
            parallax ? "-inset-[6%] h-[112%] w-[112%]" : "inset-0 h-full w-full"
          }`}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs uppercase tracking-wider text-white/25 text-center px-4">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
