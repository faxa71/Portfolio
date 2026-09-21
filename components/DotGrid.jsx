/**
 * Subtle dot-grid texture, faded out toward the edges via a radial mask
 * so it reads as background texture rather than a hard-edged pattern.
 * Purely decorative — render inside a `relative` ancestor.
 */
export default function DotGrid({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
        WebkitMaskImage:
          "radial-gradient(ellipse 60% 55% at 50% 45%, #000 40%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 60% 55% at 50% 45%, #000 40%, transparent 100%)",
      }}
    />
  );
}
