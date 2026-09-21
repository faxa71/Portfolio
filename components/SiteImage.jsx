"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Drop-in replacement for PlaceholderBlock that tries to load a real image
 * from /public/images/... first, and falls back to the placeholder look if
 * the file isn't there yet. This means: export the image from Figma, drop
 * it at the given path with the exact filename, and it appears on the site
 * automatically — no code changes needed.
 *
 * Clicking a loaded image opens it full-screen (rendered through a portal
 * to <body> so it always covers the whole viewport, regardless of any
 * animated/transformed ancestor).
 */
export default function SiteImage({
  src,
  alt = "",
  ratio = "16/9",
  label,
  className = "",
}) {
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <div
        className={`group relative w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#181818] via-panel to-black ${className} ${
          !failed ? "cursor-zoom-in" : ""
        }`}
        style={{ aspectRatio: ratio }}
        onClick={() => !failed && setOpen(true)}
      >
        {!failed && (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
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

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-4 sm:p-10 cursor-zoom-out"
                onClick={() => setOpen(false)}
              >
                <motion.img
                  src={src}
                  alt={alt}
                  initial={{ scale: 0.96 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="max-h-full max-w-full rounded-2xl object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
