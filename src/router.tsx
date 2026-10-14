import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// GitHub Pages answers unknown paths with /404.html, which was prerendered
// from the /404 route. Without help, the client would match the visitor's
// actual (unknown) path instead and React would discard the server HTML as a
// hydration mismatch. Reading that first path as /404 makes both sides render
// the same route; the address bar keeps what the visitor typed.
function notFoundRewrite() {
  if (typeof document === "undefined") return undefined;
  if (!document.querySelector('meta[name="coi:not-found"]')) return undefined;
  // The basepath rewrite runs first, so compare against the path without it.
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const servedPath = window.location.pathname.slice(base.length) || "/";
  return {
    input: ({ url }: { url: URL }) => {
      if (url.pathname !== servedPath) return undefined;
      url.pathname = "/404";
      return url;
    },
    // Without this the router "corrects" the address bar to /404.
    output: ({ url }: { url: URL }) => {
      if (url.pathname !== "/404") return undefined;
      url.pathname = servedPath;
      return url;
    },
  };
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath: import.meta.env.BASE_URL,
    rewrite: notFoundRewrite(),
  });

  return router;
};
