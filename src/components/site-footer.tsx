import { Link } from "@tanstack/react-router";
import { Instagram, CalendarCheck } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_URL, INSTAGRAM_URL, DOCTORALIA_URL, MAPS_URL } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import logo from "@/assets/site/logo-lockup.png";

const socials = [
  { label: "Instagram", href: INSTAGRAM_URL, Icon: Instagram },
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: WhatsAppIcon },
  { label: "Doctoralia", href: DOCTORALIA_URL, Icon: CalendarCheck },
] as const;

export function SiteFooter() {
  return (
    <footer className="pt-20 md:pt-32 pb-28 md:pb-12 px-6 md:px-10 border-t border-brand-navy/10 bg-brand-salmon text-brand-navy">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-10 md:mb-24 max-w-7xl mx-auto">
        <div>
          <img src={logo} alt="COI · Centro Odontológico Integral" width={1400} height={253} className="h-14 w-auto mb-10" />
          <p className="font-heading font-semibold text-3xl md:text-4xl mb-10 max-w-md">
            Cuide do seu sorriso com quem entende.
          </p>
          <Link
            to="/agendamento"
            className="btn btn-primary"
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
                className="size-11 rounded-full border border-brand-navy/15 flex items-center justify-center hover:bg-brand-navy hover:text-brand-white transition-all"
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="label-caps mb-4 text-brand-navy">
              Localização
            </h4>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver localização no Google Maps (abre em nova aba)"
              className="block py-1 text-sm leading-relaxed underline-offset-4 hover:underline"
            >
              R. Cel. Antônio Rios, 1097 · Sala 1107-B
              <br />
              Santa Marta — Uberaba, MG
              <br />
              38061-150
            </a>
          </div>
          <div>
            <h4 className="label-caps mb-4 text-brand-navy">
              Horários
            </h4>
            <p className="text-sm leading-relaxed">
              Seg — Sex: 08h — 18h
              <br />
              Sáb: Sob agendamento
              <br />
              Dom: Fechado
            </p>
          </div>
          <div>
            <h4 className="label-caps mb-4 text-brand-navy">
              Contato
            </h4>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${PHONE_DISPLAY} (abre em nova aba)`}
              className="inline-flex items-center gap-2 py-3 text-sm underline-offset-4 hover:underline"
            >
              <WhatsAppIcon size={16} />
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <h4 className="label-caps mb-4 text-brand-navy">
              Navegação
            </h4>
            <ul className="text-sm leading-relaxed">
              <li><Link to="/" className="inline-block py-3 underline-offset-4 hover:underline">Home</Link></li>
              <li><Link to="/servicos" className="inline-block py-3 underline-offset-4 hover:underline">Serviços</Link></li>
              <li><Link to="/sobre" className="inline-block py-3 underline-offset-4 hover:underline">Sobre</Link></li>
              <li><Link to="/agendamento" className="inline-block py-3 underline-offset-4 hover:underline">Agendamento</Link></li>
              <li><Link to="/contato" className="inline-block py-3 underline-offset-4 hover:underline">Contato</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center label-caps tracking-[0.14em] text-[11px] text-brand-navy">
        <span>© 2026 Centro Odontológico Integral — Dra. Regina B. Zago — CRO-MG 20.070 | CRO-MG 1277</span>
        <span>Termos · Privacidade · Cookies</span>
      </div>
    </footer>
  );
}
