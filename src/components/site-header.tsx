import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/contact";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoMark from "@/assets/site/logo-icon.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/agendamento", label: "Agendamento" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // The home hero is a light marble image with dark navy copy on top, so the
  // overlay header stays navy too — only the background toggles: transparent
  // over the hero, solid once scrolled (or on any page without a hero).
  const overlay = isHome && !scrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 md:py-6 flex justify-between items-center text-brand-navy transition-colors duration-300",
        overlay
          ? "bg-transparent"
          : "bg-brand-white/95 backdrop-blur-sm border-b border-brand-navy/10",
      )}
    >
      <Link
        to="/"
        className={cn(
          "flex items-center gap-2.5 py-2 text-lg md:text-xl font-heading font-semibold",
          overlay && "drop-shadow-[0_1px_12px_rgba(255,255,255,0.9)]",
        )}
      >
        <img src={logoMark} alt="" width={500} height={500} className="h-7 w-7" />
        COI · Dra. Regina Zago
      </Link>

      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] text-brand-navy-muted">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="hover:text-brand-teal-deep transition-colors"
            activeProps={{ className: "text-brand-teal-deep" }}
            activeOptions={{ exact: l.to === "/" }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Abrir menu"
            className={cn(
              "md:hidden -mr-2 flex size-12 items-center justify-center rounded-full",
              overlay && "bg-brand-white/70 backdrop-blur-sm",
            )}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex w-full max-w-none flex-col border-0 bg-brand-navy p-8 pt-24 text-brand-white sm:max-w-sm"
        >
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">Navegação principal do site</SheetDescription>
          <nav aria-label="Principal" className="flex flex-col">
            {links.map((l) => (
              <SheetClose asChild key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-brand-teal" }}
                  className="border-b border-white/15 py-4 font-heading text-3xl font-semibold"
                >
                  {l.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <SheetClose asChild>
              <Link
                to="/agendamento"
                className="rounded-full bg-brand-teal-deep px-8 py-4 text-center text-[11px] uppercase tracking-[0.2em] text-brand-white"
              >
                Reservar consulta
              </Link>
            </SheetClose>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-8 py-4 text-center text-[11px] uppercase tracking-[0.2em]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
