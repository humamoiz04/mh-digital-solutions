"use client"

function FloatingBackground() {
  return (
    <div className="floating-bg" aria-hidden="true">
      {/* Primary floating blobs - larger and more prominent */}
      <div className="floating-blob blob-1"></div>
      <div className="floating-blob blob-2"></div>
      <div className="floating-blob blob-3"></div>
      <div className="floating-blob blob-4"></div>
      <div className="floating-blob blob-5"></div>

      {/* Secondary floating blobs - smaller accent elements */}
      <div className="floating-blob blob-6"></div>
      <div className="floating-blob blob-7"></div>
      <div className="floating-blob blob-8"></div>

      {/* Subtle grid pattern overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
    </div>
  )
}

export default FloatingBackground
