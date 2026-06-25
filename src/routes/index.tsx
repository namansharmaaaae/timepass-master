import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { LoadingScreen } from "@/components/love/Loading";
import { FloatingParticles } from "@/components/love/Particles";
import { HeartCursor } from "@/components/love/HeartCursor";
import { ThemeToggle } from "@/components/love/ThemeToggle";
import { MusicPlayer } from "@/components/love/MusicPlayer";
import { SecretHeart } from "@/components/love/SecretHeart";
import { Welcome } from "@/components/love/Welcome";
import { Timeline } from "@/components/love/Timeline";
import { Gallery } from "@/components/love/Gallery";
import { Reasons } from "@/components/love/Reasons";
import { Letter } from "@/components/love/Letter";
import { Quiz } from "@/components/love/Quiz";
import { Stats } from "@/components/love/Stats";
import { Dreams } from "@/components/love/Dreams";
import { OpenWhen } from "@/components/love/OpenWhen";
import { RandomMessage } from "@/components/love/RandomMessage";
import { Finale } from "@/components/love/Finale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "9 Months of Us - A Love Story" },
      {
        name: "description",
        content:
          "A small interactive love letter celebrating nine months together — timelines, memories, quizzes, and dreams ahead.",
      },
      { property: "og:title", content: "Happy 9 months NIHARIKA" },
      {
        property: "og:description",
        content: "A handmade interactive love letter for the person who makes every day better.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <FloatingParticles />
      <HeartCursor />
      <ThemeToggle />
      <MusicPlayer />
      <SecretHeart />

      <Welcome onOpen={scrollDown} />
      <div id="story" />
      <Timeline />
      <Gallery />
      <Reasons />
      <Letter />
      <Quiz />
      <Stats />
      <Dreams />
      <OpenWhen />
      <RandomMessage />
      <Finale />
    </main>
  );
}
