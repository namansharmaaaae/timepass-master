import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MUSIC_URL = "images/song.mpeg";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    // 1. Create the audio object only on the first user click
    if (!audioRef.current) {
      const a = new Audio(MUSIC_URL);
      a.loop = true;
      a.volume = 0.4;
      audioRef.current = a;
    }

    const a = audioRef.current;

    // 2. Play or pause based on the state
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play()
        .then(() => setPlaying(true))
        .catch((err) => console.error("Audio playback failed:", err));
    }
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="glass fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-romantic"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      <span className={playing ? "animate-spin-slow" : ""} style={{ animation: playing ? "spin 3s linear infinite" : undefined }}>
        🎵
      </span>
      <span className="font-script text-base">{playing ? "playing" : "play our song"}</span>
    </motion.button>
  );
}
