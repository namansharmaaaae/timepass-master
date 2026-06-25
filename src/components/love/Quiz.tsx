import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import { SectionHeader } from "./SectionHeader";

const QUESTIONS = [
  {
    q: "What do you say very often nowadays?",
    options: [
      "Goo khale",
      "I love you Naman",
      "Naman, you are gay",
      "I love Jungkook"
    ],
    answer: 2
  },
  {
    q: "Who confessed first?",
    options: [
      "You",
      "Me",
      "We just knew it all the time",
      "7 days relationship"
    ],
    answer: 2
  },
  {
    q: "What nickname would you like to save my contact as?",
    options: [
      "Chocolate House",
      "Naman Sharma AUR",
      "Noni",
      "Naan"
    ],
    answer: 0
  },
  {
    q: "What's our favorite kind of date?",
    options: [
      "Long walks in the hostel",
      "Horror movie night",
      "Just sitting while holding hands",
      "Going to New York together"
    ],
    answer: 2
  }
];

export function Quiz() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const pick = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === QUESTIONS[idx].answer;
    setTimeout(() => {
      if (correct) setScore((s) => s + 1);
      if (idx + 1 < QUESTIONS.length) {
        setIdx(idx + 1);
        setSelected(null);
      } else {
        setDone(true);
        confetti({ particleCount: 180, spread: 90, origin: { y: 0.6 }, colors: ["#ff6fa3", "#c9a0ff", "#ffd9a3", "#ffffff"] });
      }
    }, 700);
  };

  const restart = () => {
    setIdx(0);
    setScore(0);
    setDone(false);
    setSelected(null);
  };

  return (
    <section className="relative z-10 py-24">
      <SectionHeader eyebrow="A tiny game" title="How Well Do You Know Us?" />
      <div className="mx-auto mt-14 max-w-xl px-6">
        <div className="glass rounded-3xl p-8 sm:p-10">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  Question {idx + 1} / {QUESTIONS.length}
                </p>
                <h3 className="font-romantic mt-2 text-3xl">{QUESTIONS[idx].q}</h3>
                <div className="mt-6 grid gap-3">
                  {QUESTIONS[idx].options.map((o, i) => {
                    const isCorrect = selected !== null && i === QUESTIONS[idx].answer;
                    const isWrong = selected === i && i !== QUESTIONS[idx].answer;
                    return (
                      <button
                        key={o}
                        onClick={() => pick(i)}
                        className={`rounded-2xl border px-5 py-3 text-left transition-all ${
                          isCorrect
                            ? "border-transparent bg-gradient-to-r from-[var(--rose)] to-[var(--lavender)] text-white"
                            : isWrong
                              ? "border-destructive/50 bg-destructive/10"
                              : "border-border bg-background/40 hover:border-[var(--rose)] hover:bg-background/60"
                        }`}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <div className="text-6xl">💖</div>
                <h3 className="font-romantic text-gradient-rose mt-3 text-5xl">
                  {score} / {QUESTIONS.length}
                </h3>
                <p className="mt-3 text-foreground/70">
                  {score === QUESTIONS.length ? "Perfect. Of course." : "Either way — you're still my favorite person."}
                </p>
                <button
                  onClick={restart}
                  className="mt-6 rounded-full bg-gradient-to-r from-[var(--rose)] to-[var(--lavender)] px-6 py-2 text-sm font-semibold text-white shadow-romantic"
                >
                  Play again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
