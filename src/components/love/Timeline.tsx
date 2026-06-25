import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const MILESTONES = [
  {
    emoji: "🤝",
    title: "The First Time We Held Hands",
    text: "A tiny moment that somehow meant everything."
  },
  {
    emoji: "🌸",
    title: "Our First Date",
    text: "Flowers, butterflies, and one of my favorite memories."
  },
  {
    emoji: "✨",
    title: "Our Second Date",
    text: "Another day I'll never get tired of remembering."
  },
  {
    emoji: "🦷",
    title: "The Day You Bit Me 😂",
    text: "I never thought getting bitten would become such a cute memory."
  },
  {
    emoji: "❤️",
    title: "Nine Months",
    text: "Nine beautiful months... and I'm still falling for you."
  },
  {
    emoji: "🫂",
    title: "Our First Hug",
    text: "Still waiting for this milestone... and I know it'll be worth it."
  },
  {
    emoji: "☀️",
    title: "A Part of Your Every Day",
    text: "I hope one day talking to each other is just a normal part of every single day."
  },
  {
    emoji: "♾️",
    title: "Forever",
    text: "The milestone I'm looking forward to the most."
  }
];

export function Timeline() {
  return (
    <section className="relative z-10 py-24">
      <SectionHeader eyebrow="Chapter One" title="Our Love Timeline" />
      
      {/* Scrollable Container with Hidden Scrollbar */}
      <div className="mt-14 overflow-x-auto pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        {/* The overall timeline wrapper */}
        <div className="relative mx-auto flex w-max gap-6 px-6 sm:px-10 pt-6">
          
          {/* FIXED: The connector line is shifted down to sit between the emoji and header level, 
              and it uses a lower opacity so it looks deliberate and clean */}
          <div className="absolute left-0 right-0 top-[76px] h-px bg-gradient-to-r from-transparent via-[var(--rose)]/40 to-transparent pointer-events-none" />
          
          {MILESTONES.map((m, i) => (
            <motion.article
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              /* REMOVED: Any background lines behind text. This box remains clean. */
              className="glass relative w-64 shrink-0 rounded-3xl p-6 sm:w-72 flex flex-col items-start"
              style={{ overflow: 'visible' }} // Forces browser to ignore any hidden overflow rules inside .glass
            >
              {/* Header section containing number and emoji safely inside the viewport */}
              <div className="w-full flex justify-between items-center z-10">
                <span className="text-5xl">{m.emoji}</span>
                
                {/* FIXED: Moving the number badge inside the upper card bounds protects it from being hidden */}
                <div className="rounded-full bg-[var(--rose)]/10 border border-[var(--rose)]/30 px-2.5 py-0.5 text-xs font-bold text-[var(--rose)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              
              {/* Content items stay completely clear of any background rules */}
              <h3 className="font-romantic mt-6 text-2xl relative z-10">{m.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 relative z-10">{m.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
