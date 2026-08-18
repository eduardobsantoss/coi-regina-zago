import { Link } from "@tanstack/react-router";

const links = [
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "A Prática" },
  { to: "/agendamento", label: "Agendamento" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex justify-between items-center mix-blend-difference">
      <Link
        to="/"
        className="text-lg md:text-xl font-serif italic tracking-tight text-white"
      >
        Éclat Odontologia
      </Link>
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] text-white/85">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="hover:text-brand-teal transition-colors"
            activeProps={{ className: "text-brand-teal" }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <div className="hidden md:block h-px w-10 bg-white/30" />
    </nav>
  );
}
