import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="relative w-full h-full">
        <Image
          src="/bg2.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle grain/dither for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-conic-gradient(rgb(255 255 255 / 0.03) 0% 25%, transparent 0% 50%)",
          backgroundSize: "4px 4px",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
