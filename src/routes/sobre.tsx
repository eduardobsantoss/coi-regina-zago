import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A Prática — Éclat Odontologia" },
      {
        name: "description",
        content:
          "Manifesto, linha do tempo e equipe da Éclat: uma clínica odontológica desenhada como atelier arquitetônico.",
      },
      { property: "og:title", content: "A Prática — Éclat Odontologia" },
      {
        property: "og:description",
        content: "Uma clínica desenhada como atelier. Conheça a equipe e a filosofia da Éclat.",
      },
    ],
  }),
  component: Sobre,
});

const timeline = [
  { year: "2018", title: "Fundação", body: "Abertura do atelier nos Jardins, com três especialistas e um ceramista residente." },
  { year: "2020", title: "Laboratório Interno", body: "Integração do laboratório de cerâmica próprio, eliminando intermediários no processo restaurador." },
  { year: "2023", title: "Fluxo Digital Completo", body: "Implementação de escaneamento facial 3D e cirurgia guiada como protocolo padrão." },
  { year: "2026", title: "Pavilhão Sensorial", body: "Expansão para o segundo andar com sala de espera concebida como refúgio acústico e olfativo." },
];

const team = [
  { name: "Dra. Helena Marques", cro: "CRO/SP 00.000", role: "Diretora Clínica · Reabilitação Oral", bio: "Especialista em prótese e estética, formada em Genebra e São Paulo. Lidera o planejamento de casos complexos." },
  { name: "Dr. Renato Vilela", cro: "CRO/SP 00.001", role: "Implantodontia Digital", bio: "Mestre em cirurgia guiada. Conduz reabilitações totais e zigomáticas com protocolos minimamente invasivos." },
  { name: "Dra. Catarina Boaventura", cro: "CRO/SP 00.002", role: "Ortodontia & Harmonização", bio: "Referência em alinhadores transparentes e harmonização facial integrada à arquitetura do sorriso." },
  { name: "Dr. Tomás Andrade", cro: "CRO/SP 00.003", role: "Endodontia Microscópica", bio: "Conduz tratamentos endodônticos sob magnificação avançada, com foco em preservação dental." },
];

function Sobre() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-8 block">
            A Prática
          </span>
          <h1 className="font-serif italic text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] max-w-5xl">
            Um atelier dedicado à arquitetura do sorriso.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <img
            src={aboutHero}
            alt="Recepção do atelier Éclat com mármore e madeira"
            width={1600}
            height={1100}
            loading="lazy"
            className="w-full aspect-[16/10] object-cover"
          />
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 md:px-10 py-32 bg-brand-navy text-brand-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal">
              Manifesto
            </span>
          </div>
          <div className="md:col-span-8 space-y-8 font-serif text-2xl md:text-3xl italic leading-tight">
            <p>
              Acreditamos que um sorriso não é um produto — é uma proporção. Uma
              relação silenciosa entre osso, gengiva, lábio e luz.
            </p>
            <p className="text-brand-cream/70">
              A Éclat foi fundada com a recusa do consultório como local de
              ansiedade. Reorganizamos cada gesto — do som da campainha ao
              perfume da recepção — para devolver à odontologia o seu caráter
              cuidadoso e profundamente humano.
            </p>
            <p className="text-brand-cream/70">
              Trabalhamos com poucos casos por dia, em diálogo direto entre
              especialistas, ceramistas e o paciente. Cada plano nasce de uma
              conversa, não de um protocolo.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-10 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-4 block">
              Linha do tempo
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl">Marcos do atelier</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {timeline.map((m) => (
              <li key={m.year} className="bg-brand-cream p-10">
                <div className="font-serif text-5xl italic text-brand-teal mb-6">{m.year}</div>
                <h3 className="font-medium mb-3">{m.title}</h3>
                <p className="text-xs leading-relaxed text-brand-navy/60">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-10 py-32 border-t border-brand-navy/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-4 block">
                Equipe
              </span>
              <h2 className="font-serif italic text-4xl md:text-5xl">Especialistas residentes</h2>
            </div>
            <p className="max-w-md text-sm text-brand-navy/60 leading-relaxed">
              Quatro especialistas que dividem o mesmo espaço físico e o mesmo
              critério. Cada caso é discutido em conjunto antes da primeira
              intervenção.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {team.map((p) => (
              <article key={p.name} className="bg-brand-cream p-10 md:p-12">
                <div className="aspect-[4/5] mb-8 bg-brand-navy/[0.04] flex items-end p-6 relative">
                  <span className="font-serif italic text-[8rem] leading-none text-brand-teal/30 absolute top-4 left-6">
                    {p.name.split(" ").slice(-1)[0][0]}
                  </span>
                  <span className="font-serif italic text-2xl text-brand-navy/40 relative">
                    Retrato em curadoria
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-2">{p.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-teal mb-1">
                  {p.role}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/40 mb-6">
                  {p.cro}
                </p>
                <p className="text-sm leading-relaxed text-brand-navy/65">{p.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
