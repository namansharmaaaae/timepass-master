import { StartClient } from "@tanstack/react-start/client";
import { hydrateRoot } from "react-dom/client";

// Hydrate the full server-rendered document.
// `shellComponent` in __root.tsx renders the complete <html> tree server-side,
// so we hydrate `document` (not just #root) to match the SSR output.
hydrateRoot(document, <StartClient />);
