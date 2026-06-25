import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const DREAMS = [
  {
    emoji: "❤️",
    title: "Our Third Date",
    text: "I can't wait to finally see you again and make another memory together."
  },
  {
    emoji: "🌙",
    title: "Late Night Talks",
    text: "I want more nights where we forget the time and just keep talking."
  },
  {
    emoji: "🎬",
    title: "Horror Movie Night",
    text: "Watching a scary movie together while pretending I'm not scared."
  },
  {
    emoji: "✈️",
    title: "New York Together",
    text: "One day we'll stand in Times Square and laugh about this dream coming true."
  }
];

export function Dreams() {
  return (
    <section className="relative z-10 py-24">
      <SectionHeader eyebrow="Our forever list" title="Dreams Ahead" />
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 px-6 sm:grid-cols-2">
        {DREAMS.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass relative overflow-hidden rounded-[2rem] p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--lavender)] opacity-30 blur-3xl" />
            <div className="relative">
              <div className="text-5xl">{d.emoji}</div>
              <h3 className="font-romantic mt-4 text-3xl">{d.title}</h3>
              <p className="mt-2 text-foreground/70">{d.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
