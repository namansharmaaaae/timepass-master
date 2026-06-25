import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-shimmer"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="text-8xl drop-shadow-[0_0_30px_rgba(255,100,150,0.7)]"
      >
        ❤️
      </motion.div>
      <p className="font-script mt-6 text-3xl text-white drop-shadow-lg">Loading our story…</p>
    </motion.div>
  );
}
