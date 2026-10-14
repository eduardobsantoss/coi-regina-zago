import { useEffect, useRef, useState } from "react";
import { CalendarCheck } from "lucide-react";
import { DOCTORALIA_URL, WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

type DoctoraliaWidgetProps = {
  type: "big_with_calendar" | "big" | "small";
  opinion?: boolean;
  className?: string;
};

// How long to wait for widget.js to swap the anchor for its iframe before
// assuming it was blocked (ad blockers commonly block docplanner) or is down.
const LOAD_TIMEOUT_MS = 10_000;

// Doctoralia's widget.js scans the page for `.zl-url` anchors exactly once,
// when the script itself first runs — there's no MutationObserver or public
// re-init hook. Since this app navigates between routes client-side (no full
// reload), a script tag inserted once on first page load won't notice an
// anchor that mounts later on a different route. Re-inserting a fresh
// <script> on every mount forces a rescan each time; the browser's HTTP
// cache makes the repeat "download" essentially free.
export function DoctoraliaWidget({ type, opinion = false, className }: DoctoraliaWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const markReadyIfRendered = () => {
      if (container.querySelector("iframe")) {
        setStatus("ready");
        return true;
      }
      return false;
    };

    const observer = new MutationObserver(() => {
      if (markReadyIfRendered()) observer.disconnect();
    });
    observer.observe(container, { childList: true, subtree: true });

    const script = document.createElement("script");
    script.src = "https://platform.docplanner.com/js/widget.js";
    script.async = true;
    script.onerror = () => setStatus("failed");
    document.body.appendChild(script);

    const timeout = window.setTimeout(() => {
      if (!markReadyIfRendered()) setStatus("failed");
    }, LOAD_TIMEOUT_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      script.remove();
    };
  }, []);

  return (
    <div className={className}>
      <div ref={containerRef} hidden={status === "failed"} aria-busy={status === "loading"}>
        {/* Visually hidden until widget.js swaps it for the iframe, so the
            bare fallback link doesn't flash above the loading message. */}
        <a
          className="zl-url sr-only"
          href={DOCTORALIA_URL}
          rel="nofollow"
          data-zlw-doctor="regina-zago"
          data-zlw-type={type}
          data-zlw-opinion={opinion ? "true" : "false"}
          data-zlw-hide-branding="true"
          data-zlw-saas-only="true"
          data-zlw-a11y-title="Widget de marcação de consultas médicas"
        >
          Marque uma consulta
        </a>
      </div>

      {status === "loading" && (
        <p role="status" className="py-10 text-center type-body text-brand-navy-muted">
          Carregando a agenda…
        </p>
      )}

      {status === "failed" && (
        <div role="status" className="border border-brand-navy/15 bg-brand-white p-8 md:p-10">
          <p className="kicker mb-3 text-brand-teal-deep">Agenda indisponível</p>
          <h2 className="type-card mb-3">Não conseguimos carregar a agenda online.</h2>
          <p className="type-body mb-8 text-brand-navy-muted">
            Pode ser a conexão ou um bloqueador de anúncios no navegador. Você pode agendar
            direto pelo Doctoralia ou falar com a gente pelo WhatsApp.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <CalendarCheck size={18} aria-hidden="true" />
              Agendar pelo Doctoralia
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <WhatsAppIcon size={18} />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
