import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const REASONS = [
  "I love the way you say my name.",
  "Your voice is my favorite sound.",
  "I could listen to you sing forever.",
  "I love the way you walk.",
  "Your smile still melts my heart.",
  "Your laugh is my favorite melody.",
  "You make every ordinary day feel special.",
  "I love our late-night conversations.",
  "The memories of our two dates are priceless to me."
];

function ReasonCard({ reason, i }: { reason: string; i: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
      className="aspect-[3/4] [perspective:1200px]"
    >
      <button
        onClick={() => setFlipped((f) => !f)}
        className="relative h-full w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-700"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="glass absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-6 text-center [backface-visibility:hidden]">
          <div className="font-script text-5xl text-[var(--rose)]">{i + 1}</div>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-foreground/60">tap to reveal</p>
          <div className="mt-4 text-3xl">💗</div>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--rose)] via-[var(--blush)] to-[var(--lavender)] p-6 text-center text-white shadow-romantic [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="font-romantic text-xl leading-snug sm:text-2xl">{reason}</p>
        </div>
      </button>
    </motion.div>
  );
}

export function Reasons() {
  return (
    <section className="relative z-10 py-24">
      <SectionHeader
        eyebrow="Twenty truths"
        title="Reasons I Love You"
        subtitle="Tap each card. (There are infinitely more.)"
      />
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {REASONS.map((r, i) => (
          <ReasonCard key={i} reason={r} i={i} />
        ))}
      </div>
    </section>
  );
}
