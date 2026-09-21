"use client";

import { useState } from "react";

/**
 * Drop-in replacement for PlaceholderBlock that tries to load a real image
 * from /public/images/... first, and falls back to the placeholder look if
 * the file isn't there yet. This means: export the image from Figma, drop
 * it at the given path with the exact filename, and it appears on the site
 * automatically — no code changes needed.
 */
export default function SiteImage({
  src,
  alt = "",
  ratio = "16/9",
  label,
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#181818] via-panel to-black ${className}`}
      style={{ aspectRatio: ratio }}
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
  );
}
