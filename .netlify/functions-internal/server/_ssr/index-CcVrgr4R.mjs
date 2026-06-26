import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { A as AnimatePresence, m as motion, u as useInView, a as useMotionValue, b as useTransform, c as animate } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function LoadingScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.8 },
      className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-shimmer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { scale: [1, 1.2, 1] },
            transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
            className: "text-8xl drop-shadow-[0_0_30px_rgba(255,100,150,0.7)]",
            children: "❤️"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script mt-6 text-3xl text-white drop-shadow-lg", children: "Loading our story…" })
      ]
    }
  );
}
const SHAPES = ["❤️", "💖", "✨", "🌸", "💕", "⭐"];
function FloatingParticles({ count = 28 }) {
  const particles = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 18,
      size: 12 + Math.random() * 22,
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      opacity: 0.4 + Math.random() * 0.5
    })),
    [count]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "absolute",
      style: {
        left: `${p.left}%`,
        bottom: "-10vh",
        fontSize: `${p.size}px`,
        opacity: p.opacity,
        animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
        filter: "drop-shadow(0 0 6px rgba(255,180,200,0.5))"
      },
      children: p.shape
    },
    p.id
  )) });
}
function HeartCursor() {
  const [trails, setTrails] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let id = 0;
    let last = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - last < 40) return;
      last = now;
      const t = { id: id++, x: e.clientX, y: e.clientY };
      setTrails((prev) => [...prev.slice(-14), t]);
      setTimeout(() => setTrails((prev) => prev.filter((p) => p.id !== t.id)), 900);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 z-[60]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: trails.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      initial: { opacity: 1, scale: 0.6, y: 0 },
      animate: { opacity: 0, scale: 1.4, y: -30 },
      exit: { opacity: 0 },
      transition: { duration: 0.9, ease: "easeOut" },
      className: "absolute text-base",
      style: { left: t.x - 8, top: t.y - 8 },
      children: "❤"
    },
    t.id
  )) }) });
}
function ThemeToggle() {
  const [dark, setDark] = reactExports.useState(true);
  reactExports.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      onClick: () => setDark((d) => !d),
      whileHover: { scale: 1.06 },
      whileTap: { scale: 0.94 },
      className: "glass fixed right-5 top-5 z-40 rounded-full px-4 py-2 text-sm shadow-romantic",
      "aria-label": "Toggle theme",
      children: dark ? "🌙 night" : "☀️ day"
    }
  );
}
const MUSIC_URL = "images/song.mpeg";
function MusicPlayer() {
  const audioRef = reactExports.useRef(null);
  const [playing, setPlaying] = reactExports.useState(false);
  const toggle = () => {
    if (!audioRef.current) {
      const a2 = new Audio(MUSIC_URL);
      a2.loop = true;
      a2.volume = 0.4;
      audioRef.current = a2;
    }
    const a = audioRef.current;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch((err) => console.error("Audio playback failed:", err));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      onClick: toggle,
      whileHover: { scale: 1.06 },
      whileTap: { scale: 0.94 },
      className: "glass fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-romantic",
      "aria-label": playing ? "Pause music" : "Play music",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: playing ? "animate-spin-slow" : "", style: { animation: playing ? "spin 3s linear infinite" : void 0 }, children: "🎵" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-base", children: playing ? "playing" : "play our song" })
      ]
    }
  );
}
function SecretHeart() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setOpen(true),
        "aria-label": "A tiny secret",
        className: "fixed bottom-3 right-3 z-40 text-xs opacity-30 transition hover:scale-125 hover:opacity-100",
        children: "🤍"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-6 backdrop-blur-xl",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.7, rotate: -8, opacity: 0 },
            animate: { scale: 1, rotate: 0, opacity: 1 },
            exit: { scale: 0.7, opacity: 0 },
            transition: { type: "spring", damping: 15 },
            onClick: (e) => e.stopPropagation(),
            className: "glass max-w-md rounded-3xl p-10 text-center shadow-romantic",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl", children: "💌" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-romantic text-gradient-rose mt-4 text-3xl", children: "You found my hidden message ❤️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script mt-4 text-2xl text-foreground/80", children: "Even in the smallest corners of the world — I'm thinking about you." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-foreground/60", children: "P.S. You're the best part of every single day." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen(false),
                  className: "mt-6 rounded-full bg-gradient-to-r from-[var(--rose)] to-[var(--lavender)] px-5 py-2 text-sm font-semibold text-white",
                  children: "close gently"
                }
              )
            ]
          }
        )
      }
    ) })
  ] });
}
const PHRASE = "Every day with you has been my favorite day.";
function Welcome({ onOpen }) {
  const [typed, setTyped] = reactExports.useState("");
  reactExports.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(PHRASE.slice(0, i));
      if (i >= PHRASE.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.2, ease: "easeOut" },
        className: "font-script mb-4 text-2xl text-foreground/70 sm:text-3xl",
        children: "for the one I love,"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.h1,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
        className: "font-romantic text-gradient-rose text-6xl leading-[0.95] sm:text-8xl md:text-9xl",
        children: [
          "Happy 9 months ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "NIHARIKA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block", children: "❤️" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-10 min-h-[3.5rem] max-w-xl text-lg text-foreground/80 sm:text-xl", children: [
      typed,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-blink ml-0.5", children: "|" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.button,
      {
        whileHover: { scale: 1.06, y: -2 },
        whileTap: { scale: 0.97 },
        onClick: onOpen,
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 1.2, duration: 0.8 },
        className: "animate-pulse-glow mt-12 rounded-full bg-gradient-to-r from-[var(--rose)] via-[var(--lavender)] to-[var(--gold)] px-10 py-4 text-base font-semibold text-white shadow-romantic transition-all sm:text-lg",
        children: "Open Our Story ✨"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 0.7 },
        transition: { delay: 2 },
        className: "mt-16 text-xs uppercase tracking-[0.3em] text-foreground/50",
        children: "scroll to begin"
      }
    )
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-6 text-center", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "font-script text-2xl text-[var(--rose)]",
        children: eyebrow
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "font-romantic text-gradient-rose mt-2 text-5xl sm:text-6xl",
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { delay: 0.2 },
        className: "mt-4 text-foreground/70",
        children: subtitle
      }
    )
  ] });
}
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
function Timeline() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Chapter One", title: "Our Love Timeline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 overflow-x-auto pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex w-max gap-6 px-6 sm:px-10 pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-[76px] h-px bg-gradient-to-r from-transparent via-[var(--rose)]/40 to-transparent pointer-events-none" }),
      MILESTONES.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.7, delay: i * 0.08 },
          className: "glass relative w-64 shrink-0 rounded-3xl p-6 sm:w-72 flex flex-col items-start",
          style: { overflow: "visible" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex justify-between items-center z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: m.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-[var(--rose)]/10 border border-[var(--rose)]/30 px-2.5 py-0.5 text-xs font-bold text-[var(--rose)]", children: String(i + 1).padStart(2, "0") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-romantic mt-6 text-2xl relative z-10", children: m.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-foreground/70 relative z-10", children: m.text })
          ]
        },
        m.title
      ))
    ] }) })
  ] });
}
const PHOTOS = [
  { src: "images/1.jpeg", caption: "the day everything changed" },
  { src: "images/2.jpeg", caption: "waiting for you birthday again" },
  { src: "images/3.jpeg", caption: "you slayed that day" },
  { src: "images/4.jpeg", caption: "you, laughing" },
  { src: "images/5.jpeg", caption: "endless walks" },
  { src: "images/6.jpeg", caption: "our little world" },
  { src: "images/7.jpeg", caption: "sunflower for my girl" },
  { src: "images/8.jpeg", caption: "first garba together" }
];
const ROTATIONS = [-3, 2, -1.5, 3, -2.5, 1, -1, 2.5];
function Gallery() {
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Frozen in time", title: "Memory Gallery", subtitle: "Little moments that mean everything." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 max-w-6xl columns-2 gap-6 px-6 sm:columns-3 lg:columns-4 [&>*]:mb-6", children: PHOTOS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0, rotate: ROTATIONS[i % ROTATIONS.length] },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6, delay: i % 4 * 0.08 },
        whileHover: { rotate: 0, scale: 1.04, y: -6 },
        onClick: () => setActive(i),
        className: "block w-full break-inside-avoid rounded-md bg-[var(--cream)] p-3 pb-10 text-left shadow-romantic",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.src,
              alt: p.caption,
              loading: "lazy",
              className: "aspect-[4/5] w-full rounded-sm object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script mt-2 px-1 text-center text-lg text-foreground/80", children: p.caption })
        ]
      },
      p.src
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: active !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setActive(null),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.8, rotate: -4, opacity: 0 },
            animate: { scale: 1, rotate: 0, opacity: 1 },
            exit: { scale: 0.8, opacity: 0 },
            onClick: (e) => e.stopPropagation(),
            className: "max-w-2xl rounded-lg bg-[var(--cream)] p-4 pb-12 shadow-romantic",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PHOTOS[active].src, alt: "", className: "max-h-[70vh] w-full rounded object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script mt-4 text-center text-3xl text-foreground/80", children: PHOTOS[active].caption })
            ]
          }
        )
      }
    ) })
  ] });
}
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
function ReasonCard({ reason, i }) {
  const [flipped, setFlipped] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay: i % 5 * 0.06 },
      className: "aspect-[3/4] [perspective:1200px]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setFlipped((f) => !f),
          className: "relative h-full w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-700",
          style: { transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-6 text-center [backface-visibility:hidden]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script text-5xl text-[var(--rose)]", children: i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs uppercase tracking-[0.3em] text-foreground/60", children: "tap to reveal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-3xl", children: "💗" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 flex items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--rose)] via-[var(--blush)] to-[var(--lavender)] p-6 text-center text-white shadow-romantic [backface-visibility:hidden]",
                style: { transform: "rotateY(180deg)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-romantic text-xl leading-snug sm:text-2xl", children: reason })
              }
            )
          ]
        }
      )
    }
  );
}
function Reasons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Twenty truths",
        title: "Reasons I Love You",
        subtitle: "Tap each card. (There are infinitely more.)"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", children: REASONS.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReasonCard, { reason: r, i }, i)) })
  ] });
}
const LETTER = `Happy 9 months, my love. ❤️

Nine months ago, I never imagined someone could become such an important part of my life. And yet, here you are... the first person I think about when something good happens, and the one I miss the most when you're not around.
These last few weeks have been different. 

We're both busy with our internships, chasing our own goals, and I know that's important. But I won't lie, Niharika... I've missed you so much. It's been almost a month since I last saw you, and I really, really want to meet you tomorrow. It's our anniversary, and I just want to spend some time with you. Even if it's only for a little while, I know it'll make my whole day.
I miss your voice, your smile, the way you laugh, and just being around you. I miss our little moments together more than I can explain. I still think about our two dates so often, and I'm already hoping our third one comes soon.
Thank you for these beautiful nine months. 

Thank you for loving me, for being patient with me, and for making my life happier just by being in it.
I love you more than you'll probably ever know, and I hope I get to keep loving you for thousands of months more.

Forever your Naan. ❤️🧿`;
function Letter() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Sealed with love", title: "A Letter For You" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 flex max-w-xl flex-col items-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        onClick: () => setOpen(true),
        whileHover: { scale: 1.03, rotate: -1 },
        whileTap: { scale: 0.98 },
        className: "relative aspect-[3/2] w-full max-w-md cursor-pointer",
        "aria-label": "Open letter",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--blush)] to-[var(--rose)] shadow-romantic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 origin-top rounded-lg bg-gradient-to-br from-[var(--rose)] to-[var(--blush)]",
              style: { clipPath: "polygon(0 0, 50% 55%, 100% 0)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--rose)] shadow-md", children: "tap to open ✨" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 text-3xl drop-shadow", children: "💗" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { y: 100, opacity: 0, rotate: -2 },
            animate: { y: 0, opacity: 1, rotate: 0 },
            exit: { y: 100, opacity: 0 },
            transition: { type: "spring", damping: 18 },
            onClick: (e) => e.stopPropagation(),
            className: "relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg bg-[var(--cream)] p-8 text-foreground shadow-romantic sm:p-12",
            style: {
              backgroundImage: "repeating-linear-gradient(transparent 0 28px, color-mix(in oklab, var(--rose) 18%, transparent) 28px 29px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen(false),
                  className: "absolute right-4 top-4 rounded-full bg-background px-3 py-1 text-xs",
                  children: "close"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-romantic whitespace-pre-line text-lg leading-8 sm:text-xl", children: LETTER })
            ]
          }
        )
      }
    ) })
  ] });
}
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
function Quiz() {
  const [idx, setIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [selected, setSelected] = reactExports.useState(null);
  const pick = (i) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "A tiny game", title: "How Well Do You Know Us?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 max-w-xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-3xl p-8 sm:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -30 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.3em] text-foreground/60", children: [
        "Question ",
        idx + 1,
        " / ",
        QUESTIONS.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-romantic mt-2 text-3xl", children: QUESTIONS[idx].q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3", children: QUESTIONS[idx].options.map((o, i) => {
        const isCorrect = selected !== null && i === QUESTIONS[idx].answer;
        const isWrong = selected === i && i !== QUESTIONS[idx].answer;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => pick(i),
            className: `rounded-2xl border px-5 py-3 text-left transition-all ${isCorrect ? "border-transparent bg-gradient-to-r from-[var(--rose)] to-[var(--lavender)] text-white" : isWrong ? "border-destructive/50 bg-destructive/10" : "border-border bg-background/40 hover:border-[var(--rose)] hover:bg-background/60"}`,
            children: o
          },
          o
        );
      }) })
    ] }, idx) : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl", children: "💖" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-romantic text-gradient-rose mt-3 text-5xl", children: [
        score,
        " / ",
        QUESTIONS.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-foreground/70", children: score === QUESTIONS.length ? "Perfect. Of course." : "Either way — you're still my favorite person." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: restart,
          className: "mt-6 rounded-full bg-gradient-to-r from-[var(--rose)] to-[var(--lavender)] px-6 py-2 text-sm font-semibold text-white shadow-romantic",
          children: "Play again"
        }
      )
    ] }, "done") }) }) })
  ] });
}
function Counter({ to, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  reactExports.useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "font-romantic text-gradient-rose text-6xl sm:text-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { children: rounded }),
    suffix
  ] });
}
const STATS = [
  { value: 9, suffix: "", label: "Months Together ❤️" },
  { value: 274, suffix: "", label: "Days by your side" },
  { value: 1820, suffix: "+", label: "Hours of talking" },
  { value: 999, suffix: "+", label: "Memories made" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "By the numbers", title: "Us, In Stats" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-6 lg:grid-cols-4", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "glass rounded-3xl p-8 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/70", children: s.label })
        ]
      },
      s.label
    )) })
  ] });
}
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
function Dreams() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our forever list", title: "Dreams Ahead" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 px-6 sm:grid-cols-2", children: DREAMS.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.7, delay: i * 0.1 },
        whileHover: { y: -6, scale: 1.02 },
        className: "glass relative overflow-hidden rounded-[2rem] p-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--lavender)] opacity-30 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: d.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-romantic mt-4 text-3xl", children: d.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-foreground/70", children: d.text })
          ] })
        ]
      },
      d.title
    )) })
  ] });
}
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
function OpenWhen() {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Whenever you need me", title: "Open When…" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 px-6 md:grid-cols-3", children: NOTES.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        onClick: () => setOpen(i),
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.06 },
        whileHover: { y: -4, rotate: i % 2 ? 1 : -1 },
        className: "aspect-[4/3] rounded-2xl bg-[var(--cream)] p-5 text-left shadow-romantic",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: "✉️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script mt-2 text-2xl text-foreground/80", children: "open when" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-romantic text-xl", children: n.when })
        ]
      },
      n.when
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setOpen(null),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { y: 80, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 80, opacity: 0 },
            onClick: (e) => e.stopPropagation(),
            className: "max-w-md rounded-2xl bg-[var(--cream)] p-10 text-center shadow-romantic",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-script text-3xl text-[var(--rose)]", children: [
                "open when ",
                NOTES[open].when
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-romantic mt-4 text-2xl leading-snug text-foreground/90", children: NOTES[open].note }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(null), className: "mt-6 rounded-full bg-[var(--rose)] px-5 py-2 text-sm text-white", children: "close" })
            ]
          }
        )
      }
    ) })
  ] });
}
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
function RandomMessage() {
  const [msg, setMsg] = reactExports.useState(MESSAGES[0]);
  const [key, setKey] = reactExports.useState(0);
  const next = () => {
    let n = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    while (n === msg) n = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    setMsg(n);
    setKey((k) => k + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "A little surprise", title: "Whisper Me Love", subtitle: "Tap the button for a tiny love note." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-12 max-w-xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass min-h-[180px] rounded-3xl p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.p,
        {
          initial: { opacity: 0, y: 20, filter: "blur(8px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          exit: { opacity: 0, y: -20, filter: "blur(8px)" },
          transition: { duration: 0.6 },
          className: "font-romantic text-2xl leading-snug sm:text-3xl",
          children: [
            '"',
            msg,
            '"'
          ]
        },
        key
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: next,
          className: "mt-6 rounded-full bg-gradient-to-r from-[var(--rose)] to-[var(--lavender)] px-6 py-3 text-sm font-semibold text-white shadow-romantic",
          children: "another one ✨"
        }
      )
    ] })
  ] });
}
const LINES = [
  "I choose you today.",
  "I'll choose you tomorrow.",
  "And I'll keep choosing you,",
  "every day after that. ❤️"
];
function Finale() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 overflow-hidden py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: Array.from({ length: 40 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute text-[var(--gold)]",
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${6 + Math.random() * 14}px`,
          opacity: 0.4 + Math.random() * 0.6,
          animation: `float-up ${10 + Math.random() * 14}s linear ${Math.random() * 10}s infinite`,
          filter: "drop-shadow(0 0 8px currentColor)"
        },
        children: "✦"
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1 },
          className: "font-script text-3xl text-foreground/70 sm:text-4xl",
          children: "These 9 months were only the beginning…"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-4", children: LINES.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 30, filter: "blur(10px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true },
          transition: { delay: i * 0.6, duration: 1.1 },
          className: "font-romantic text-gradient-rose text-4xl leading-tight sm:text-6xl",
          children: l
        },
        l
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay: 3 },
          className: "font-script mt-16 text-2xl text-foreground/60",
          children: "- your naan, always."
        }
      )
    ] })
  ] });
}
function Index() {
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);
  const scrollDown = () => {
    document.getElementById("story")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingParticles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeartCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MusicPlayer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SecretHeart, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Welcome, { onOpen: scrollDown }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "story" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reasons, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Letter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Quiz, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dreams, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OpenWhen, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RandomMessage, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Finale, {})
  ] });
}
export {
  Index as component
};
