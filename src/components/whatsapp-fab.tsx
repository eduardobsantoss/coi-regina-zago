import { WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp (abre em nova aba)"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex size-14 items-center justify-center rounded-full bg-brand-teal-deep text-brand-white shadow-lg shadow-brand-navy/30 transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8 motion-reduce:transition-none"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
