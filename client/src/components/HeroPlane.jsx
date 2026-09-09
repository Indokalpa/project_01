// Purely decorative, ambient background motion — not scroll-triggered, so it
// intentionally doesn't use useReveal(). Sits behind the hero content (see
// the .hero-plane z-index rule in index.css) and is hidden entirely under
// prefers-reduced-motion.
//
// The flight is driven by CSS offset-path (see .plane-fly in index.css), not
// hand-placed transform keyframes — keyframe interpolation is linear between
// stops, so a curve/loop approximated with a handful of translate() points
// renders as a visibly faceted polygon. offset-path lets the browser walk a
// real SVG bezier/arc path continuously, with offset-rotate:auto computing
// the exact tangent angle rather than a guessed rotation per segment. The
// trade-off is that offset-path's coordinates are fixed CSS pixels (not
// fluid vw/vh), calibrated for a ~1440x900 hero; the scale() breakpoints in
// index.css handle tablet/mobile. No trail/guide-line is rendered — only the
// plane itself.
//
// Deliberately no separate "bobbing" child animation: a translateY wobble on
// a child of an offset-rotate'd element plays out in the PARENT's rotated
// local space, so as the plane banks through the loop the bob's direction
// spins right along with it — two unrelated periodic motions compounding
// into a visible shake rather than a gentle float. The flight path's own
// climb/bank/loop already reads as motion; it doesn't need a second wobble.
export default function HeroPlane() {
  return (
    <div className="hero-plane" aria-hidden="true">
      <div className="plane-fly">
        {/* Commercial/passenger airplane silhouette, nose pointing up by default */}
        <svg className="plane-icon" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>
    </div>
  )
}
