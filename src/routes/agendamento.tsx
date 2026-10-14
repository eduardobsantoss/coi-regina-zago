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

      <section className="relative min-h-[55svh] flex items-end px-6 md:px-10 pt-32 pb-12 md:pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={agendamentoHero}
            alt="Ambiente do consultório odontológico"
            width={2400}
            height={1350}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-white/90 via-brand-white/55 to-brand-white/25" />
        </div>
        <div className="relative z-10 max-w-5xl">
          <span className="kicker text-brand-navy-muted mb-6 block">
            Agendamento
          </span>
          <h1 className="type-page">
            Reserve sua primeira consulta.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pt-20 pb-32 bg-brand-mist/70">
        <div className="max-w-3xl mx-auto min-h-[520px]">
          <DoctoraliaWidget type="big_with_calendar" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
