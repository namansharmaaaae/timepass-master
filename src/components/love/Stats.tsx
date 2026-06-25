import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionHeader } from "./SectionHeader";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);
  return (
    <span ref={ref} className="font-romantic text-gradient-rose text-6xl sm:text-7xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 9, suffix: "", label: "Months Together ❤️" },
  { value: 274, suffix: "", label: "Days by your side" },
  { value: 1820, suffix: "+", label: "Hours of talking" },
  { value: 999, suffix: "+", label: "Memories made" },
];

export function Stats() {
  return (
    <section className="relative z-10 py-24">
      <SectionHeader eyebrow="By the numbers" title="Us, In Stats" />
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-6 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl p-8 text-center"
          >
            <Counter to={s.value} suffix={s.suffix} />
            <p className="mt-3 text-sm text-foreground/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
