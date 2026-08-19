// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Actions sets GITHUB_ACTIONS=true during CI, which is how the static
// GitHub Pages build is distinguished from a normal server build.
const forPages = !!process.env.GITHUB_ACTIONS;

// Project pages are served from a sub-path, so assets and router URLs need the
// repo name prefixed. Local dev and normal builds stay at the root.
const base = forPages ? "/coi-regina-zago/" : "/";

export default defineConfig({
  vite: { base },

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },

    // GitHub Pages serves plain files, so every route is rendered to HTML at
    // build time. The site is entirely static marketing content — no server
    // functions, no per-request data — so a crawl from "/" reaches everything.
    ...(forPages ? { prerender: { enabled: true, crawlLinks: true } } : {}),
  },

  // Nitro bundles a *server*, which GitHub Pages cannot run, and its static
  // presets don't compose with TanStack Start's build pipeline here. Turning it
  // off leaves plain Vite output (dist/client + dist/server), which is also the
  // layout Start's own prerenderer expects; dist/client is what gets published.
  ...(forPages ? { nitro: false as const } : {}),
});
