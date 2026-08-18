import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Éclat Odontologia" },
      {
        name: "description",
        content:
          "Catálogo completo de tratamentos: lentes de porcelana, implantes digitais, ortodontia invisível, clareamento, harmonização orofacial e mais.",
      },
      { property: "og:title", content: "Serviços — Éclat Odontologia" },
      {
        property: "og:description",
        content:
          "Tratamentos sob medida com precisão clínica e refinamento sensorial.",
      },
    ],
  }),
  component: Servicos,
});

const treatments = [
  {
    n: "I",
    title: "Lentes de Porcelana",
    desc: "Restaurações ultrafinas, esculpidas à mão por nossos ceramistas internos. Translucidez e textura indistinguíveis do esmalte natural.",
    bullets: ["Indicado para forma, cor e proporção", "2 a 4 sessões", "Garantia clínica de 5 anos"],
  },
  {
    n: "II",
    title: "Implantes Digitais",
    desc: "Cirurgia guiada por escaneamento 3D e enceramento virtual. Carga imediata em casos selecionados, mínima invasão tecidual.",
    bullets: ["Reabilitação unitária ou total", "Sessão única de instalação", "Acompanhamento por 24 meses"],
  },
  {
    n: "III",
    title: "Ortodontia Invisível",
    desc: "Alinhadores transparentes proprietários com monitoramento remoto. Plano de movimento simulado antes do primeiro encaixe.",
    bullets: ["Casos leves a complexos", "Trocas a cada 7 a 14 dias", "Acompanhamento digital contínuo"],
  },
  {
    n: "IV",
    title: "Clareamento a Laser",
    desc: "Protocolo de clareamento de consultório associado a manutenção domiciliar com moldeiras anatômicas personalizadas.",
    bullets: ["Resultado em 1 a 2 sessões", "Dessensibilização biomimética", "Pacote com manutenção semestral"],
  },
  {
    n: "V",
    title: "Harmonização Orofacial",
    desc: "Procedimentos minimamente invasivos para reequilibrar a moldura facial em diálogo com a arquitetura do sorriso.",
    bullets: ["Toxina, preenchedores e bioestimuladores", "Avaliação fotográfica em 3D", "Resultados naturais e reversíveis"],
  },
  {
    n: "VI",
    title: "Endodontia Microscópica",
    desc: "Tratamento de canal com microscópio cirúrgico de alta magnificação. Maior preservação dental, conforto e previsibilidade.",
    bullets: ["Casos primários e retratamentos", "1 a 2 sessões", "Anestesia computadorizada"],
  },
  {
    n: "VII",
    title: "Periodontia Estética",
    desc: "Cuidado das gengivas como moldura do sorriso: gengivoplastia, enxertos e manutenção biológica avançada.",
    bullets: ["Saúde e simetria gengival", "Procedimentos minimamente invasivos", "Protocolos de manutenção trimestrais"],
  },
  {
    n: "VIII",
    title: "Odontopediatria",
    desc: "Acolhimento sensorial para crianças e adolescentes, com prevenção, ortodontia interceptativa e educação postural.",
    bullets: ["A partir de 3 anos", "Sala dedicada, sem ruído clínico", "Plano de prevenção anual"],
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
            alt="Detalhe arquitetônico de mármore e latão escovado"
            width={1920}
            height={900}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-cream/40" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-navy/60 mb-6 block">
            Curadoria de tratamentos
          </span>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] italic">
            Cada sorriso é<br />um projeto único.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-10 py-24 border-b border-brand-navy/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal">
            Nossa abordagem
          </span>
          <p className="md:col-span-2 text-lg md:text-xl leading-relaxed font-serif italic text-brand-navy/80">
            Toda especialidade abaixo é precedida por uma avaliação fotográfica
            tridimensional, simulação digital e uma conversa de quarenta minutos
            sobre desejos, hábitos e arquitetura facial.
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
                className="bg-brand-cream p-10 md:p-14 hover:bg-white transition-colors duration-500 flex flex-col"
              >
                <div className="flex items-baseline justify-between mb-10">
                  <span className="font-serif italic text-brand-teal text-3xl">{t.n}</span>
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
                      <span className="text-brand-teal">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/agendamento"
                  className="mt-auto self-start text-[10px] uppercase tracking-[0.2em] text-brand-navy/70 hover:text-brand-teal transition-colors border-b border-brand-navy/20 pb-1"
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
