export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/vid2.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* White overlay */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Ordered-dither overlay — 4px Bayer-style checkerboard */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-conic-gradient(rgb(255 255 255 / 0.35) 0% 25%, transparent 0% 50%)",
          backgroundSize: "4px 4px",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
