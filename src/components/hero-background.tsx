"use client";

import { useRef, useEffect } from "react";

export function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const runReverse = (ts: number, lastTs: number) => {
      const delta = (ts - lastTs) / 1000;
      const next = video.currentTime - delta;
      if (next <= 0) {
        video.currentTime = 0;
        video.play();
        return;
      }
      video.currentTime = next;
      rafId = requestAnimationFrame((t) => runReverse(t, ts));
    };

    const onEnded = () => {
      // capture two frames so we get a real delta on the first reverse step
      rafId = requestAnimationFrame((t0) => {
        rafId = requestAnimationFrame((t1) => runReverse(t1, t0));
      });
    };

    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("ended", onEnded);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/vid2.mp4"
        autoPlay
        muted
        playsInline
        /* no loop — ping-pong is handled in JS */
      />

      {/* Dark overlay — tints video to match warm-dark page */}
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
