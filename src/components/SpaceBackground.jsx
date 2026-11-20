export default function SpaceBackground() {
  return (
    <div className="space-bg" aria-hidden="true">
      <div className="hud-grid" />
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      <div className="star-layer star-far" />
      <div className="star-layer star-mid" />
      <div className="star-layer star-near" />

      <div className="planet-wrap">
        <span className="planet-ring ring-back" />
        <div className="planet">
          <span className="planet-shine" />
        </div>
        <span className="planet-ring ring-front" />
        <span className="planet-moon" />
        <span className="planet-orbit orbit-a" />
        <span className="planet-orbit orbit-b" />
      </div>

      <span className="shooting-star shoot-1" />
      <span className="shooting-star shoot-2" />
      <span className="shooting-star shoot-3" />

      <div className="space-vignette" />
    </div>
  )
}
