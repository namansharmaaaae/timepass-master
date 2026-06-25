import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Trail = { id: number; x: number; y: number };

export function HeartCursor() {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let id = 0;
    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 40) return;
      last = now;
      const t = { id: id++, x: e.clientX, y: e.clientY };
      setTrails((prev) => [...prev.slice(-14), t]);
      setTimeout(() => setTrails((prev) => prev.filter((p) => p.id !== t.id)), 900);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <AnimatePresence>
        {trails.map((t) => (
          <motion.span
            key={t.id}
            initial={{ opacity: 1, scale: 0.6, y: 0 }}
            animate={{ opacity: 0, scale: 1.4, y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute text-base"
            style={{ left: t.x - 8, top: t.y - 8 }}
          >
            ❤
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
