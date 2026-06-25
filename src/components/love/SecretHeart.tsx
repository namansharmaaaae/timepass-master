import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function SecretHeart() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="A tiny secret"
        className="fixed bottom-3 right-3 z-40 text-xs opacity-30 transition hover:scale-125 hover:opacity-100"
      >
        🤍
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-md rounded-3xl p-10 text-center shadow-romantic"
            >
              <div className="text-6xl">💌</div>
              <h3 className="font-romantic text-gradient-rose mt-4 text-3xl">
                You found my hidden message ❤️
              </h3>
              <p className="font-script mt-4 text-2xl text-foreground/80">
                Even in the smallest corners of the world — I'm thinking about you.
              </p>
              <p className="mt-4 text-sm text-foreground/60">
                P.S. You're the best part of every single day.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-gradient-to-r from-[var(--rose)] to-[var(--lavender)] px-5 py-2 text-sm font-semibold text-white"
              >
                close gently
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
