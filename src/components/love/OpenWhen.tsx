import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const NOTES = [
  {
    when: "you miss me",
    note: "Just know I'm probably missing you even more. I can't wait to see you again. ❤️"
  },
  {
    when: "you can't sleep",
    note: "Call me, no matter what time it is, Niharika. We'll talk until you feel better. ❤️"
  },
  {
    when: "you're stressed with your internship",
    note: "Take a deep breath. I'm so proud of you. Just call me—I'm always here, and if I'm busy, I'll make time for you as soon as I can. ❤️"
  },
  {
    when: "you're having a bad day",
    note: "Call me. Even if we don't talk much, I just want to be there with you. ❤️"
  },
  {
    when: "you need a smile",
    note: "Remember our two dates? I still smile every time I think about them. Our third one is going to be even better. ❤️"
  },
  {
    when: "you wonder if I love you",
    note: "You never have to wonder. I'll choose you today, tomorrow, and every day after that. ❤️🧿"
  }
];

export function OpenWhen() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative z-10 py-24">
      <SectionHeader eyebrow="Whenever you need me" title="Open When…" />
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 px-6 md:grid-cols-3">
        {NOTES.map((n, i) => (
          <motion.button
            key={n.when}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4, rotate: i % 2 ? 1 : -1 }}
            className="aspect-[4/3] rounded-2xl bg-[var(--cream)] p-5 text-left shadow-romantic"
          >
            <div className="text-2xl">✉️</div>
            <p className="font-script mt-2 text-2xl text-foreground/80">open when</p>
            <p className="font-romantic text-xl">{n.when}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-lg"
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-md rounded-2xl bg-[var(--cream)] p-10 text-center shadow-romantic"
            >
              <p className="font-script text-3xl text-[var(--rose)]">open when {NOTES[open].when}</p>
              <p className="font-romantic mt-4 text-2xl leading-snug text-foreground/90">{NOTES[open].note}</p>
              <button onClick={() => setOpen(null)} className="mt-6 rounded-full bg-[var(--rose)] px-5 py-2 text-sm text-white">
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
