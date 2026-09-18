import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DoctoraliaWidget } from "@/components/doctoralia-widget";
import agendamentoHero from "@/assets/site/agendamento-hero-placeholder.jpg";

export const Route = createFileRoute("/agendamento")({
  head: () => ({
    meta: [
      { title: "Agendamento — Centro Odontológico Integral" },
      {
        name: "description",
        content:
          "Reserve sua consulta com a Dra. Regina Zago. Escolha o tratamento, a data e o horário em poucos passos.",
      },
      { property: "og:title", content: "Agendamento — Centro Odontológico Integral" },
      {
        property: "og:description",
        content: "Reserve sua consulta em poucos passos.",
      },
    ],
  }),
  component: Agendamento,
});

function Agendamento() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-navy font-sans">
      <SiteHeader />

      <section className="relative h-[55vh] min-h-[380px] flex items-end px-6 md:px-10 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={agendamentoHero}
            alt="Ambiente do consultório odontológico"
            width={2400}
            height={1350}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-white/40" />
        </div>
        <div className="relative z-10 max-w-5xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-navy-muted mb-6 block">
            Agendamento
          </span>
          <h1 className="font-heading font-semibold text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] max-w-3xl">
            Reserve sua primeira consulta.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pt-20 pb-32">
        <div className="max-w-3xl mx-auto min-h-[520px]">
          <DoctoraliaWidget type="big_with_calendar" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
