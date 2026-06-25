import { motion } from "framer-motion";

const LINES = [
  "I choose you today.",
  "I'll choose you tomorrow.",
  "And I'll keep choosing you,",
  "every day after that. ❤️",
];

export function Finale() {
  return (
    <section className="relative z-10 overflow-hidden py-32">
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-[var(--gold)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${6 + Math.random() * 14}px`,
              opacity: 0.4 + Math.random() * 0.6,
              animation: `float-up ${10 + Math.random() * 14}s linear ${Math.random() * 10}s infinite`,
              filter: "drop-shadow(0 0 8px currentColor)",
            }}
          >
            ✦
          </span>
        ))}
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-script text-3xl text-foreground/70 sm:text-4xl"
        >
          These 9 months were only the beginning…
        </motion.p>
        <div className="mt-12 space-y-4">
          {LINES.map((l, i) => (
            <motion.p
              key={l}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.6, duration: 1.1 }}
              className="font-romantic text-gradient-rose text-4xl leading-tight sm:text-6xl"
            >
              {l}
            </motion.p>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3 }}
          className="font-script mt-16 text-2xl text-foreground/60"
        >
          - your naan, always.
        </motion.p>
      </div>
    </section>
  );
}
