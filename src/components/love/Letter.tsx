import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

// Edit me freely.
const LETTER = `Happy 9 months, my love. ❤️

Nine months ago, I never imagined someone could become such an important part of my life. And yet, here you are... the first person I think about when something good happens, and the one I miss the most when you're not around.
These last few weeks have been different. 

We're both busy with our internships, chasing our own goals, and I know that's important. But I won't lie, Niharika... I've missed you so much. It's been almost a month since I last saw you, and I really, really want to meet you tomorrow. It's our anniversary, and I just want to spend some time with you. Even if it's only for a little while, I know it'll make my whole day.
I miss your voice, your smile, the way you laugh, and just being around you. I miss our little moments together more than I can explain. I still think about our two dates so often, and I'm already hoping our third one comes soon.
Thank you for these beautiful nine months. 

Thank you for loving me, for being patient with me, and for making my life happier just by being in it.
I love you more than you'll probably ever know, and I hope I get to keep loving you for thousands of months more.

Forever your Naan. ❤️🧿`;

export function Letter() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative z-10 py-24">
      <SectionHeader eyebrow="Sealed with love" title="A Letter For You" />
      <div className="mx-auto mt-14 flex max-w-xl flex-col items-center px-6">
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.03, rotate: -1 }}
          whileTap={{ scale: 0.98 }}
          className="relative aspect-[3/2] w-full max-w-md cursor-pointer"
          aria-label="Open letter"
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--blush)] to-[var(--rose)] shadow-romantic" />
          <div
            className="absolute inset-0 origin-top rounded-lg bg-gradient-to-br from-[var(--rose)] to-[var(--blush)]"
            style={{ clipPath: "polygon(0 0, 50% 55%, 100% 0)" }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--rose)] shadow-md">
            tap to open ✨
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-3xl drop-shadow">💗</div>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-lg"
          >
            <motion.div
              initial={{ y: 100, opacity: 0, rotate: -2 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg bg-[var(--cream)] p-8 text-foreground shadow-romantic sm:p-12"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent 0 28px, color-mix(in oklab, var(--rose) 18%, transparent) 28px 29px)",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-background px-3 py-1 text-xs"
              >
                close
              </button>
              <p className="font-romantic whitespace-pre-line text-lg leading-8 sm:text-xl">{LETTER}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
