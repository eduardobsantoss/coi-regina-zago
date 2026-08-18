import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="pt-32 pb-12 px-6 md:px-10 border-t border-brand-navy/10 bg-brand-cream text-brand-navy">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 max-w-7xl mx-auto">
        <div>
          <p className="font-serif text-3xl md:text-4xl mb-10 italic max-w-md">
            Comece sua transformação.
          </p>
          <Link
            to="/agendamento"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] px-6 py-4 border border-brand-navy/15 rounded-full hover:bg-brand-navy hover:text-brand-cream transition-all duration-500"
          >
            Reservar consulta
            <span aria-hidden>→</span>
          </Link>
          <div className="flex gap-3 mt-10">
            {["IG", "WA", "LI"].map((s) => (
              <div
                key={s}
                className="size-11 rounded-full border border-brand-navy/15 flex items-center justify-center text-[10px] uppercase tracking-widest cursor-pointer hover:bg-brand-navy hover:text-brand-cream transition-all"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-5 text-brand-navy/40">
              Localização
            </h4>
            <p className="text-xs leading-relaxed">
              Avenida das Artes, 1020
              <br />
              Jardins — São Paulo, SP
              <br />
              01409-000
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-5 text-brand-navy/40">
              Horários
            </h4>
            <p className="text-xs leading-relaxed">
              Seg — Sex: 09h — 19h
              <br />
              Sáb: Sob agendamento
              <br />
              Dom: Fechado
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-5 text-brand-navy/40">
              Contato
            </h4>
            <p className="text-xs leading-relaxed">
              +55 11 3000-0000
              <br />
              ola@eclat.odo.br
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-5 text-brand-navy/40">
              Navegação
            </h4>
            <ul className="text-xs leading-relaxed space-y-1">
              <li><Link to="/servicos" className="hover:text-brand-teal">Serviços</Link></li>
              <li><Link to="/sobre" className="hover:text-brand-teal">A Prática</Link></li>
              <li><Link to="/agendamento" className="hover:text-brand-teal">Agendamento</Link></li>
              <li><Link to="/contato" className="hover:text-brand-teal">Contato</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center text-[8px] uppercase tracking-[0.3em] text-brand-navy/30">
        <span>© 2026 Éclat Odontologia — CRO/SP 00000</span>
        <span>Termos · Privacidade · Cookies</span>
      </div>
    </footer>
  );
}
