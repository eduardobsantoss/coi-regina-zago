import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "A Prática" },
  { to: "/agendamento", label: "Agendamento" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The home hero is a light marble image with dark navy copy on top, so the
  // overlay header stays navy too — only the background toggles: transparent
  // over the hero, solid once scrolled (or on any page without a hero).
  const overlay = isHome && !scrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex justify-between items-center text-brand-navy transition-colors duration-300",
        overlay
          ? "bg-transparent"
          : "bg-brand-cream/95 backdrop-blur-sm border-b border-brand-navy/10",
      )}
    >
      <Link
        to="/"
        className={cn(
          "text-lg md:text-xl font-serif italic tracking-tight",
          overlay && "drop-shadow-[0_1px_12px_rgba(247,243,234,0.9)]",
        )}
      >
        COI · Dra. Regina Zago
      </Link>
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] text-brand-navy/70">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="hover:text-brand-teal-deep transition-colors"
            activeProps={{ className: "text-brand-teal-deep" }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <div className="hidden md:block h-px w-10 bg-brand-navy/20" />
    </nav>
  );
}
