import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import reginaPortrait from "@/assets/site/regina-portrait.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Regina Zago — Centro Odontológico Integral | Uberaba, MG" },
      {
        name: "description",
        content:
          "Cuidado odontológico completo em Uberaba, MG. Mais de 30 anos de experiência, especialista em Periodontia, nota 5.0 no Google com mais de 120 avaliações.",
      },
      { property: "og:title", content: "Dra. Regina Zago — Centro Odontológico Integral" },
      {
        property: "og:description",
        content:
          "Cuidado odontológico completo e acolhedor em Uberaba, MG, com mais de 30 anos de experiência.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const philosophy = [
  {
    title: "Cuidado Integral",
    body: "Como o nome do consultório propõe, tratamos a boca como parte da sua saúde geral — do diagnóstico à manutenção, em um só lugar, sem te mandar de um canto a outro.",
    tag: "Uma clínica, todo o cuidado",
  },
  {
    title: "Três Décadas de Experiência",
    body: "Formada em Odontologia pela Universidade de Uberaba e especialista em Periodontia pela ABO desde 2002, a Dra. Regina já acompanhou milhares de sorrisos — e trata cada paciente como o primeiro.",
    tag: "Especialista em Periodontia",
  },
  {
    title: "Perto de Você",
    body: "Mais de 4.300 pacientes atendidos e nota 5.0 no Google, construída avaliação após avaliação, por quem já passou pela cadeira.",
    tag: "5.0★ · 124 avaliações",
  },
];

const services = [
  {
    n: "I",
    title: "Periodontia",
    body: "Tratamento e prevenção das doenças da gengiva — a especialidade da Dra. Regina há mais de 20 anos.",
  },
  {
    n: "II",
    title: "Odontologia Estética",
    body: "Lentes de contato dental, facetas e harmonização do sorriso, com resultados naturais.",
  },
  {
    n: "III",
    title: "Reabilitação Oral",
    body: "Implantes, próteses e reconstrução de sorrisos comprometidos, com acompanhamento próximo em cada etapa.",
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
            alt="Detalhe em mármore do ambiente do consultório"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-cream/30" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-navy/60 mb-8 block">
            Centro Odontológico Integral — Uberaba, MG
          </span>
          <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.9] italic mb-8">
            Cuidado odontológico <br />
            com mais de 30 anos de história.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="max-w-md text-sm leading-relaxed text-brand-navy/70">
              A Dra. Regina Zago acompanha pacientes de Uberaba há mais de três décadas, unindo
              experiência clínica em Periodontia a um atendimento próximo e humano.
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
                className="px-6 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] hover:text-brand-teal-deep transition-colors"
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
                src={reginaPortrait}
                alt="Dra. Regina Zago no consultório"
                width={900}
                height={1200}
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
                  <span className="inline-block text-[10px] tracking-widest text-brand-navy uppercase bg-brand-gold rounded-full px-3 py-1">
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
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4 block">
                02 / Tratamentos
              </span>
              <h2 className="font-serif text-5xl md:text-6xl italic">Como Podemos Cuidar de Você</h2>
            </div>
            <Link
              to="/servicos"
              className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60 hover:text-brand-teal-deep transition-colors"
            >
              Ver todas as especialidades →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {services.map((s) => (
              <Link
                to="/servicos"
                key={s.n}
                className="bg-brand-cream p-12 hover:bg-brand-mist transition-colors duration-500 group"
              >
                <span className="font-serif italic text-brand-teal-deep block mb-12 text-2xl">
                  {s.n}
                </span>
                <h3 className="font-serif text-3xl mb-6">{s.title}</h3>
                <p className="text-xs leading-relaxed text-brand-navy/60 mb-12">{s.body}</p>
                <div className="w-full h-px bg-brand-navy/5" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/40 mt-6 block group-hover:text-brand-teal-deep transition-colors">
                  Explorar →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-40 px-6 md:px-10 border-t border-brand-navy/10 bg-brand-blush/15">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-10 block">
            03 / Confiança
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="font-serif italic text-5xl md:text-6xl mb-3">5.0★</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/50">
                124 avaliações no Google
              </p>
            </div>
            <div>
              <div className="font-serif italic text-5xl md:text-6xl mb-3">+4.300</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/50">
                Pacientes atendidos
              </p>
            </div>
            <div>
              <div className="font-serif italic text-5xl md:text-6xl mb-3">30+</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/50">
                Anos de experiência
              </p>
            </div>
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
