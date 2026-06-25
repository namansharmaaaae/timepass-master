import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  // Simply change false to true here
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark((d) => !d)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="glass fixed right-5 top-5 z-40 rounded-full px-4 py-2 text-sm shadow-romantic"
      aria-label="Toggle theme"
    >
      {dark ? "🌙 night" : "☀️ day"}
    </motion.button>
  );
}
