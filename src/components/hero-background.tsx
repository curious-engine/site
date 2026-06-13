export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {/* background-attachment: fixed — image is pinned to viewport, zero JS, zero lag */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/thumb-1920-693632.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Desaturate — mix-blend-mode: color with a neutral gray kills saturation.
          CSS filter cannot be used: it breaks background-attachment: fixed (spec behaviour). */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "hsl(0 0% 35%)",
          mixBlendMode: "color",
        }}
      />

      {/* Ordered-dither overlay — 4px Bayer-style checkerboard */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-conic-gradient(rgb(0 0 0 / 0.6) 0% 25%, transparent 0% 50%)",
          backgroundSize: "4px 4px",
          mixBlendMode: "multiply",
        }}
      />

      {/* Readability veil */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
