import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import studyImg from "@/assets/study.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Éclat Odontologia — Arquitetura do Sorriso" },
      {
        name: "description",
        content:
          "Clínica odontológica de alto padrão dedicada à estética restauradora, implantodontia digital e à arquitetura natural do sorriso.",
      },
      { property: "og:title", content: "Éclat Odontologia — Arquitetura do Sorriso" },
      {
        property: "og:description",
        content:
          "Uma abordagem arquitetônica para a estética dental. Tratamentos sob medida, com precisão clínica e refinamento sensorial.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const philosophy = [
  {
    title: "Integridade Estrutural",
    body: "A odontologia moderna frequentemente ignora a harmonia das proporções faciais. Utilizamos enceramento digital e escaneamento 3D para garantir que cada intervenção respeite a sua arquitetura natural.",
    tag: "Foco Biomimético",
  },
  {
    title: "Santuário do Silêncio",
    body: "Esqueça o ruído clínico. Nossa prática foi desenhada como um refúgio acústico e olfativo, aplicando princípios de neuro-estética para dissolver a ansiedade antes da primeira consulta.",
    tag: "Curadoria Sensorial",
  },
  {
    title: "Precisão Invisível",
    body: "Nossos ceramistas trabalham internamente para produzir restaurações indistinguíveis do esmalte natural, equilibrando translucidez, textura e a forma como a luz se reflete.",
    tag: "Cerâmica Artesanal",
  },
];

const services = [
  {
    n: "I",
    title: "Atelier de Porcelana",
    body: "Lentes ultrafinas esculpidas com precisão microscópica para redefinir a silhueta natural do sorriso.",
  },
  {
    n: "II",
    title: "Alinhamento Invisível",
    body: "A evolução da ortodontia: alinhadores transparentes com acompanhamento digital contínuo.",
  },
  {
    n: "III",
    title: "Spa do Esmalte",
    body: "Profilaxia biológica avançada e clareamento a laser para uma saúde luminosa, em nível celular.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy font-sans selection:bg-brand-teal/20">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-end px-6 md:px-10 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Detalhe arquitetônico em pedra travertino com luz natural"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-cream/30" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-navy/60 mb-8 block">
            Estabelecida em 2018 — São Paulo
          </span>
          <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.9] italic mb-8">
            Revisitando a <br />
            Arte do Sorriso.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="max-w-md text-sm leading-relaxed text-brand-navy/70">
              Uma abordagem arquitetônica à estética dental. Tratamos a estrutura oral não apenas
              como uma necessidade clínica, mas como a geometria fundamental da expressão humana.
            </p>
            <div className="mt-2 flex gap-3">
              <Link
                to="/agendamento"
                className="px-6 py-4 border border-brand-navy/15 rounded-full bg-brand-cream/40 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] hover:bg-brand-navy hover:text-brand-cream transition-all duration-500"
              >
                Reservar consulta
              </Link>
              <Link
                to="/servicos"
                className="px-6 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] hover:text-brand-teal transition-colors"
              >
                Ver tratamentos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="filosofia" className="py-32 px-6 md:px-10 bg-brand-navy text-brand-cream">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-7xl mx-auto">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-6 block">
                01 / Identidade
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 italic">
                Além do clínico. <br />
                Puramente pessoal.
              </h2>
              <img
                src={studyImg}
                alt="Espelho odontológico minimalista sobre mármore polido"
                width={768}
                height={1024}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover outline-1 -outline-offset-1 outline-white/10"
              />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-32">
            <div className="space-y-24">
              {philosophy.map((p) => (
                <div key={p.title} className="border-l border-brand-teal/30 pl-8">
                  <h3 className="text-lg font-medium mb-4">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-cream/60 mb-6">{p.body}</p>
                  <span className="text-[10px] tracking-widest text-brand-teal uppercase">
                    {p.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="servicos" className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-4 block">
                02 / Curadoria
              </span>
              <h2 className="font-serif text-5xl md:text-6xl italic">Cuidados Selecionados</h2>
            </div>
            <Link
              to="/servicos"
              className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60 hover:text-brand-teal transition-colors"
            >
              Ver todas as especialidades →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {services.map((s) => (
              <Link
                to="/servicos"
                key={s.n}
                className="bg-brand-cream p-12 hover:bg-white transition-colors duration-500 group"
              >
                <span className="font-serif italic text-brand-teal block mb-12 text-2xl">
                  {s.n}
                </span>
                <h3 className="font-serif text-3xl mb-6">{s.title}</h3>
                <p className="text-xs leading-relaxed text-brand-navy/60 mb-12">{s.body}</p>
                <div className="w-full h-px bg-brand-navy/5" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/40 mt-6 block group-hover:text-brand-teal transition-colors">
                  Explorar →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 px-6 md:px-10 border-t border-brand-navy/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-10 block">
            03 / Testemunho
          </span>
          <blockquote className="font-serif italic text-3xl md:text-5xl leading-tight text-brand-navy">
            “Encontrei algo raro: uma clínica que trata a estética dental como
            uma forma de arquitetura. Saí com a sensação de ter visitado um
            atelier, não um consultório.”
          </blockquote>
          <div className="mt-12 text-[10px] uppercase tracking-[0.3em] text-brand-navy/50">
            Paciente · Reabilitação completa · 2025
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-brand-cream px-6 md:px-10 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-6 block">
              Próximo passo
            </span>
            <h2 className="font-serif italic text-5xl md:text-7xl leading-[0.95]">
              Sua primeira <br /> consulta começa <br /> com escuta.
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 md:items-end">
            <Link
              to="/agendamento"
              className="inline-flex items-center gap-3 px-8 py-5 border border-brand-teal/40 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-brand-teal hover:text-brand-navy hover:border-brand-teal transition-all duration-500"
            >
              Agendar avaliação →
            </Link>
            <Link
              to="/contato"
              className="text-[10px] uppercase tracking-[0.2em] text-brand-cream/60 hover:text-brand-teal px-8"
            >
              Falar com a clínica
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
