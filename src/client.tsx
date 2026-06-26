import { StartClient } from "@tanstack/react-start/client";
import { createRoot } from "react-dom/client";

// CSR mode: the server sends an empty HTML shell (no SSR React content),
// so we use createRoot instead of hydrateRoot to avoid React's hydration
// invariant ("Invariant failed" / content mismatch error).
createRoot(document.getElementById("root")!).render(<StartClient />);
