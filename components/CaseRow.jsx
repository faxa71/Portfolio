"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A single row in the case list table. On sm+ uses a CSS grid with the
 * same column ratio as Figma's fixed 702/464/74 layout (proportional
 * fr units, not hardcoded px — so it stays aligned with the header at
 * any viewport width, not just exactly 1440px). The header row in
 * CaseList.jsx / app/cases/page.jsx uses the identical grid-template so
 * "ОПИСАНИЕ" and "ГОД" always line up with the data below them. On
 * mobile there's a simpler single-line fallback with no fixed columns.
 */
export default function CaseRow({ item }) {
  const disabled = !item.live;
  const rowRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const sx = useSpring(mx, springConfig);
  const sy = useSpring(my, springConfig);

  const handleMouseMove = (e) => {
    if (disabled || !rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const rowContent = (
    <motion.div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      initial="rest"
      whileHover={disabled ? "rest" : "hover"}
      animate="rest"
      className={`group relative flex items-center px-4 sm:px-[100px] h-14 ${
        disabled ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute inset-0 bg-white/[0.05] -z-10"
      />
      <span className="pointer-events-none absolute inset-x-1/2 bottom-0 h-px w-screen -translate-x-1/2 bg-line" />

      {!disabled && (
        <motion.span
          variants={{ rest: { opacity: 0, scale: 0.85 }, hover: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ left: sx, top: sy }}
          className="pointer-events-none absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black sm:flex"
        >
          Смотреть проект
        </motion.span>
      )}

      {/* sm+: grid matching the header's 702fr / 464fr / 74fr columns */}
      <div className="hidden sm:grid grid-cols-[702fr_464fr_74fr] items-center w-full min-w-0">
        <div className="flex items-center gap-2.5 text-[16px] min-w-0 pr-4">
          <span className="text-muted shrink-0">{item.num}</span>
          <span className="text-soft truncate">
            {item.name}
            {disabled && (
              <span className="ml-2 text-[10px] align-middle uppercase tracking-wide text-faint border border-line rounded-full px-2 py-0.5">
                скоро
              </span>
            )}
          </span>
        </div>
        <span className="text-muted text-[16px] truncate pr-4 transition-colors duration-300 group-hover:text-soft">( {item.tag} )</span>
        <span className="text-muted text-[16px] tabular-nums text-right transition-colors duration-300 group-hover:text-soft pr-6">{item.year}</span>
      </div>

      {/* mobile: single line, no fixed columns */}
      <div className="flex sm:hidden items-center justify-between gap-4 w-full min-w-0">
        <div className="flex items-center gap-2 min-w-0 shrink">
          <span className="text-muted shrink-0">{item.num}</span>
          <span className="text-soft shrink-0 whitespace-nowrap">
            {item.name}
            {disabled && (
              <span className="ml-2 text-[10px] align-middle uppercase tracking-wide text-faint border border-line rounded-full px-2 py-0.5">
                скоро
              </span>
            )}
          </span>
          <span className="text-muted text-[14px] truncate">( {item.tag} )</span>
        </div>
        <span className="text-muted text-[14px] tabular-nums shrink-0">{item.year}</span>
      </div>
    </motion.div>
  );

  if (disabled) return rowContent;
  return (
    <Link href={`/cases/${item.slug}`} className="block">
      {rowContent}
    </Link>
  );
}
