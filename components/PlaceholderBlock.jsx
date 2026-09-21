/**
 * Stand-in for a real exported image/screenshot. Swap these out for actual
 * PNGs exported from the Figma file (each case's hero shot, screen images,
 * moodboard references) — this keeps the right proportions and a tasteful
 * placeholder in the meantime instead of a blank box.
 */
export default function PlaceholderBlock({
  label,
  ratio = "16/9",
  gradient = "from-[#181818] via-panel to-black",
  className = "",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-line bg-gradient-to-br ${gradient} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs uppercase tracking-wider text-white/25">
          {label}
        </span>
      </div>
    </div>
  );
}
