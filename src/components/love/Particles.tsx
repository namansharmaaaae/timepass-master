import { useMemo } from "react";

const SHAPES = ["❤️", "💖", "✨", "🌸", "💕", "⭐"];

export function FloatingParticles({ count = 28 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 18,
        size: 12 + Math.random() * 22,
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            bottom: "-10vh",
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            filter: "drop-shadow(0 0 6px rgba(255,180,200,0.5))",
          }}
        >
          {p.shape}
        </span>
      ))}
    </div>
  );
}
