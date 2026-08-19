import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Centro Odontológico Integral" },
      {
        name: "description",
        content:
          "Periodontia, implantes, próteses, odontologia estética e cuidado odontológico completo com a Dra. Regina Zago, em Uberaba, MG.",
      },
      { property: "og:title", content: "Serviços — Centro Odontológico Integral" },
      {
        property: "og:description",
        content:
          "Cuidado odontológico completo, com foco em Periodontia, em Uberaba, MG.",
      },
    ],
  }),
  component: Servicos,
});

const treatments = [
  {
    n: "I",
    title: "Periodontia",
    desc: "Tratamento e prevenção das doenças da gengiva — a especialidade da Dra. Regina, com título pela ABO desde 2002.",
    bullets: ["Diagnóstico e manutenção periodontal", "Tratamento de gengivite e periodontite", "Acompanhamento contínuo"],
  },
  {
    n: "II",
    title: "Implantes",
    desc: "Reposição de dentes perdidos com implantes, do planejamento à instalação, com acompanhamento em cada etapa.",
    bullets: ["Reabilitação unitária ou total", "Avaliação individual do caso", "Acompanhamento pós-cirúrgico"],
  },
  {
    n: "III",
    title: "Prótese Dentária",
    desc: "Próteses fixas e removíveis planejadas sob medida para devolver função e estética ao sorriso.",
    bullets: ["Próteses fixas e removíveis", "Ajuste e manutenção periódica", "Materiais de alta performance"],
  },
  {
    n: "IV",
    title: "Odontologia Estética",
    desc: "Lentes de contato dental, facetas e clareamento para um sorriso com resultado natural.",
    bullets: ["Lentes de contato e facetas", "Clareamento dental", "Avaliação estética individual"],
  },
  {
    n: "V",
    title: "Ortodontia",
    desc: "Correção do alinhamento dentário com aparelhos convencionais ou alinhadores, conforme a necessidade de cada caso.",
    bullets: ["Aparelhos fixos e alinhadores", "Acompanhamento periódico", "Planejamento conforme o caso"],
  },
  {
    n: "VI",
    title: "Endodontia",
    desc: "Tratamento de canal com foco em preservar o dente natural e aliviar a dor com conforto.",
    bullets: ["Casos primários e retratamentos", "Anestesia local", "Foco na preservação dental"],
  },
  {
    n: "VII",
    title: "Clínica Geral",
    desc: "Diagnóstico, restaurações e manutenção da saúde bucal no dia a dia, com check-ups regulares.",
    bullets: ["Restaurações", "Limpeza e profilaxia", "Check-up e diagnóstico"],
  },
  {
    n: "VIII",
    title: "Odontopediatria",
    desc: "Cuidado odontológico para crianças, com foco em prevenção e uma primeira experiência tranquila no consultório.",
    bullets: ["Prevenção e orientação", "Atendimento acolhedor", "Acompanhamento do crescimento dental"],
  },
];

function Servicos() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy font-sans selection:bg-brand-teal/20">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end px-6 md:px-10 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHero}
            alt="Detalhe do ambiente do consultório"
            width={1920}
            height={900}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-cream/40" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-navy/60 mb-6 block">
            Tratamentos
          </span>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] italic">
            Cuidado odontológico<br />completo, em um só lugar.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-10 py-24 border-b border-brand-navy/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep">
            Nossa abordagem
          </span>
          <p className="md:col-span-2 text-lg md:text-xl leading-relaxed font-serif italic text-brand-navy/80">
            Como o nome do consultório propõe, cuidamos da sua saúde bucal de forma integral —
            com diagnóstico, tratamento e acompanhamento no mesmo lugar, com a mesma equipe.
          </p>
        </div>
      </section>

      {/* Treatments grid */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {treatments.map((t) => (
              <article
                key={t.title}
                className="bg-brand-cream p-10 md:p-14 hover:bg-brand-mist transition-colors duration-500 flex flex-col"
              >
                <div className="flex items-baseline justify-between mb-10">
                  <span className="font-serif italic text-brand-teal-deep text-3xl">{t.n}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/30">
                    Tratamento
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl mb-5 leading-tight">{t.title}</h2>
                <p className="text-sm leading-relaxed text-brand-navy/65 mb-8">{t.desc}</p>
                <ul className="space-y-3 mb-10">
                  {t.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-xs text-brand-navy/70 border-t border-brand-navy/5 pt-3"
                    >
                      <span className="text-brand-teal-deep">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/agendamento"
                  className="mt-auto self-start text-[10px] uppercase tracking-[0.2em] text-brand-navy/70 hover:text-brand-teal-deep transition-colors border-b border-brand-navy/20 pb-1"
                >
                  Agendar avaliação →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
