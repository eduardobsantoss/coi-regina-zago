import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, CalendarCheck } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_URL, INSTAGRAM_URL, DOCTORALIA_URL } from "@/lib/contact";
import logo from "@/assets/site/logo-icon.png";

const socials = [
  { label: "Instagram", href: INSTAGRAM_URL, Icon: Instagram },
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: MessageCircle },
  { label: "Doctoralia", href: DOCTORALIA_URL, Icon: CalendarCheck },
] as const;

export function SiteFooter() {
  return (
    <footer className="pt-32 pb-12 px-6 md:px-10 border-t border-brand-navy/10 bg-brand-cream text-brand-navy">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 max-w-7xl mx-auto">
        <div>
          <img src={logo} alt="COI · Centro Odontológico Integral" width={198} height={158} className="h-24 w-auto mb-10" />
          <p className="font-serif text-3xl md:text-4xl mb-10 italic max-w-md">
            Cuide do seu sorriso com quem entende.
          </p>
          <Link
            to="/agendamento"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] px-6 py-4 border border-brand-navy/15 rounded-full hover:bg-brand-navy hover:text-brand-cream transition-all duration-500"
          >
            Reservar consulta
            <span aria-hidden>→</span>
          </Link>
          <div className="flex gap-3 mt-10">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-11 rounded-full border border-brand-navy/15 flex items-center justify-center hover:bg-brand-navy hover:text-brand-cream transition-all"
              >
                <Icon size={16} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-5 text-brand-navy/40">
              Localização
            </h4>
            <p className="text-xs leading-relaxed">
              R. Cel. Antônio Rios, 1097 · Sala 1107-B
              <br />
              Santa Marta — Uberaba, MG
              <br />
              38061-150
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-5 text-brand-navy/40">
              Horários
            </h4>
            <p className="text-xs leading-relaxed">
              Seg — Sex: 08h — 18h
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
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal-deep">
                {PHONE_DISPLAY}
              </a>
              <br />
              WhatsApp
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-5 text-brand-navy/40">
              Navegação
            </h4>
            <ul className="text-xs leading-relaxed space-y-1">
              <li><Link to="/servicos" className="hover:text-brand-teal-deep">Serviços</Link></li>
              <li><Link to="/sobre" className="hover:text-brand-teal-deep">A Prática</Link></li>
              <li><Link to="/agendamento" className="hover:text-brand-teal-deep">Agendamento</Link></li>
              <li><Link to="/contato" className="hover:text-brand-teal-deep">Contato</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center text-[8px] uppercase tracking-[0.3em] text-brand-navy/30">
        <span>© 2026 Centro Odontológico Integral — Dra. Regina B. Zago — CRO 20.070 | CRO 1277</span>
        <span>Termos · Privacidade · Cookies</span>
      </div>
    </footer>
  );
}
