"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Approximate on-screen size of the button, used only to size the
// displacement/specular textures the SVG filter reads from. The button
// itself stays auto-width (content-sized), so this is a best-fit, not a
// hard constraint — the filter still degrades gracefully if the real
// size differs slightly.
const MAP_WIDTH = 260;
const MAP_HEIGHT = 56;

/**
 * "Liquid glass" CTA: a real backdrop-refraction effect (SVG
 * feDisplacementMap warping whatever sits behind the button, lit by a
 * specular rim) layered over a plain frosted-glass fallback. Chrome/
 * Chromium render the full refraction; Safari and Firefox currently
 * don't support SVG filters as backdrop-filter input, so they fall back
 * to the plain translucent glass layer underneath — the button still
 * looks intentional either way, just without the extra distortion.
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
        className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-6 py-4 text-base text-white"
      >
        {/* SVG filter definition — zero-size, never rendered directly */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <filter
              id="liquid-glass-cta"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blurred_source" />
              <feImage
                href="/images/effects/liquid-displacement.png"
                x="0"
                y="0"
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                result="displacement_map"
              />
              <feDisplacementMap
                in="blurred_source"
                in2="displacement_map"
                scale="45"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
              <feColorMatrix in="displaced" type="saturate" values="1.4" result="displaced_saturated" />
              <feImage
                href="/images/effects/liquid-specular.png"
                x="0"
                y="0"
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                result="specular_layer"
              />
              <feGaussianBlur in="specular_layer" stdDeviation="1" result="specular_layer_blurred" />
              <feComposite
                in="displaced_saturated"
                in2="specular_layer_blurred"
                operator="in"
                result="specular_saturated"
              />
              <feBlend in="specular_saturated" in2="displaced" mode="normal" />
            </filter>
          </defs>
        </svg>

        {/* Base translucent glass surface — the fallback every browser sees */}
        <div
          className="pointer-events-none absolute inset-0 backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.09) 45%, rgba(255,255,255,0.04) 100%)",
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 2px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.14), 0 8px 24px rgba(0,0,0,0.35)",
          }}
        />

        {/* Real refraction layer — only browsers that support SVG filters
            as backdrop-filter input (currently Chrome/Chromium) render this */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backdropFilter: "url(#liquid-glass-cta) brightness(1.2)" }}
        />

        {/* Top specular highlight (plain CSS, every browser) */}
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-60"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)" }}
        />

        {/* Light sweep that glides across on hover */}
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
