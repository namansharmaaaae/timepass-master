import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const MESSAGES = [
  "I still smile every time your name pops up on my phone.",
  "You somehow make even the most ordinary days feel better.",
  "I don't think you realize how often I think about you.",
  "I miss you in the little moments the most.",
  "I hope you always know how proud I am of you.",
  "Our two dates still make me smile. I'm already waiting for the third one.",
  "Your voice has a way of making everything feel okay.",
  "I never get tired of listening to you, even when you're just talking about your day.",
  "If I could choose one place to be right now, it'd be next to you.",
  "No matter how busy life gets, you'll always be my favorite part of it."
];

export function RandomMessage() {
  const [msg, setMsg] = useState(MESSAGES[0]);
  const [key, setKey] = useState(0);

  const next = () => {
    let n = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    while (n === msg) n = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    setMsg(n);
    setKey((k) => k + 1);
  };

  return (
    <section className="relative z-10 py-24">
      <SectionHeader eyebrow="A little surprise" title="Whisper Me Love" subtitle="Tap the button for a tiny love note." />
      <div className="mx-auto mt-12 max-w-xl px-6 text-center">
        <div className="glass min-h-[180px] rounded-3xl p-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={key}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.6 }}
              className="font-romantic text-2xl leading-snug sm:text-3xl"
            >
              "{msg}"
            </motion.p>
          </AnimatePresence>
        </div>
        <button
          onClick={next}
          className="mt-6 rounded-full bg-gradient-to-r from-[var(--rose)] to-[var(--lavender)] px-6 py-3 text-sm font-semibold text-white shadow-romantic"
        >
          another one ✨
        </button>
      </div>
    </section>
  );
}
