export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Ordered-dither overlay — 4px Bayer-style checkerboard */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-conic-gradient(rgb(0 0 0 / 0.10) 0% 25%, transparent 0% 50%)",
          backgroundSize: "4px 4px",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
