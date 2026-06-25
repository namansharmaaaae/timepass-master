import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PHRASE = "Every day with you has been my favorite day.";

export function Welcome({ onOpen }: { onOpen: () => void }) {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(PHRASE.slice(0, i));
      if (i >= PHRASE.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-script mb-4 text-2xl text-foreground/70 sm:text-3xl"
      >
        for the one I love,
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="font-romantic text-gradient-rose text-6xl leading-[0.95] sm:text-8xl md:text-9xl"
      >
        Happy 9 months <br/> <i>NIHARIKA</i><span className="inline-block">❤️</span>
      </motion.h1>

      <p className="mx-auto mt-10 min-h-[3.5rem] max-w-xl text-lg text-foreground/80 sm:text-xl">
        {typed}
        <span className="animate-blink ml-0.5">|</span>
      </p>

      <motion.button
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="animate-pulse-glow mt-12 rounded-full bg-gradient-to-r from-[var(--rose)] via-[var(--lavender)] to-[var(--gold)] px-10 py-4 text-base font-semibold text-white shadow-romantic transition-all sm:text-lg"
      >
        Open Our Story ✨
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2 }}
        className="mt-16 text-xs uppercase tracking-[0.3em] text-foreground/50"
      >
        scroll to begin
      </motion.p>
    </section>
  );
}
