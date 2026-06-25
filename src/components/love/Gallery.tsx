import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

// Replace these with your own photos any time.
const PHOTOS = [
  { src: "images/1.jpeg", caption: "the day everything changed" },
  { src: "images/2.jpeg", caption: "waiting for you birthday again" },
  { src: "images/3.jpeg", caption: "you slayed that day" },
  { src: "images/4.jpeg", caption: "you, laughing" },
  { src: "images/5.jpeg", caption: "endless walks" },
  { src: "images/6.jpeg", caption: "our little world" },
  { src: "images/7.jpeg", caption: "sunflower for my girl" },
  { src: "images/8.jpeg", caption: "first garba together" },
];

const ROTATIONS = [-3, 2, -1.5, 3, -2.5, 1, -1, 2.5];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="relative z-10 py-24">
      <SectionHeader eyebrow="Frozen in time" title="Memory Gallery" subtitle="Little moments that mean everything." />
      <div className="mx-auto mt-14 max-w-6xl columns-2 gap-6 px-6 sm:columns-3 lg:columns-4 [&>*]:mb-6">
        {PHOTOS.map((p, i) => (
          <motion.button
            key={p.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, rotate: ROTATIONS[i % ROTATIONS.length] }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
            whileHover={{ rotate: 0, scale: 1.04, y: -6 }}
            onClick={() => setActive(i)}
            className="block w-full break-inside-avoid rounded-md bg-[var(--cream)] p-3 pb-10 text-left shadow-romantic"
          >
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <p className="font-script mt-2 px-1 text-center text-lg text-foreground/80">{p.caption}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -4, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl rounded-lg bg-[var(--cream)] p-4 pb-12 shadow-romantic"
            >
              <img src={PHOTOS[active].src} alt="" className="max-h-[70vh] w-full rounded object-cover" />
              <p className="font-script mt-4 text-center text-3xl text-foreground/80">
                {PHOTOS[active].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
