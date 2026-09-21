/**
 * A thin light that continuously travels around the edge of its parent.
 * Parent must be `position: relative` (or similar) with its own
 * border-radius set — this reads `rounded-[inherit]` from it. Built with
 * a conic-gradient ring (mask-composite: exclude) spun via CSS
 * transform, which is broadly supported — no reliance on `offset-path`.
 */
export default function BorderBeam({ duration = 5 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: "1.5px",
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.9) 6%, transparent 16%)",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          animation: `border-beam-spin ${duration}s linear infinite`,
        }}
      />
    </div>
  );
}
