import { useEffect, useRef } from "react";
import { DOCTORALIA_URL } from "@/lib/contact";

type DoctoraliaWidgetProps = {
  type: "big_with_calendar" | "big" | "small";
  opinion?: boolean;
  className?: string;
};

// Doctoralia's widget.js scans the page for `.zl-url` anchors exactly once,
// when the script itself first runs — there's no MutationObserver or public
// re-init hook. Since this app navigates between routes client-side (no full
// reload), a script tag inserted once on first page load won't notice an
// anchor that mounts later on a different route. Re-inserting a fresh
// <script> on every mount forces a rescan each time; the browser's HTTP
// cache makes the repeat "download" essentially free.
export function DoctoraliaWidget({ type, opinion = false, className }: DoctoraliaWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.docplanner.com/js/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <a
        className="zl-url"
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
  );
}
