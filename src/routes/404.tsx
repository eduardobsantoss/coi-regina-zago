import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/status-page";

// Prerendered to /404.html for the GitHub Pages build (see vite.config.ts):
// Pages serves that file for any path that doesn't exist. The router's own
// notFoundComponent covers unknown paths during client-side navigation.
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Página não encontrada — Centro Odontológico Integral" },
      { name: "robots", content: "noindex" },
      // Read by router.tsx before hydration, see the rewrite there.
      { name: "coi:not-found", content: "1" },
    ],
  }),
  component: NotFoundPage,
});
