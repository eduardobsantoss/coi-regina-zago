import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { ErrorPage, NotFoundPage } from "@/components/status-page";

function NotFoundComponent() {
  return <NotFoundPage />;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorPage
      error={error}
      onRetry={() => {
        router.invalidate();
        reset();
      }}
    />
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Centro Odontológico Integral — Dra. Regina Zago" },
      { name: "description", content: "Clínica odontológica em Uberaba e região" },
      { property: "og:title", content: "Centro Odontológico Integral — Dra. Regina Zago" },
      { property: "og:description", content: "Clínica odontológica em Uberaba e região" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Centro Odontológico Integral — Dra. Regina Zago" },
      { name: "theme-color", content: "#0d4a63" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: `${import.meta.env.BASE_URL}favicon.png` },
      { rel: "apple-touch-icon", href: `${import.meta.env.BASE_URL}apple-touch-icon.png` },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WhatsAppFab />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}
