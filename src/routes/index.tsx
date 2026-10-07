import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/site/hero-placeholder.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { withPending } from "@/components/pending";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Regina Zago — Centro Odontológico Integral | Uberaba e região" },
      {
        name: "description",
        content:
          "Cuidado odontológico completo em Uberaba e região. Mais de 30 anos de experiência, especialista em Periodontia, nota 5.0 no Google e no Doctoralia.",
      },
      { property: "og:title", content: "Dra. Regina Zago — Centro Odontológico Integral" },
      {
        property: "og:description",
        content:
          "Cuidado odontológico completo e acolhedor em Uberaba e região, com mais de 30 anos de experiência.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const philosophy = [
  {
    title: "Cuidado Integral",
    body: "Todas as especialidades em um só lugar, sem a necessidade de te encaminhar para outro profissional.",
    tags: ["Uma clínica, todo o cuidado"],
  },
  {
    title: "Mais de Três Décadas de Experiência",
    body: "Graduada em Odontologia pela Universidade de Uberaba em XXXX, com formação em ortodontia, periodontia, implantodontia, dentística restauradora e odontologia estética. Além de centenas de cursos e participações contínuas em congressos internacionais.",
    tags: ["Especialista em Periodontia"],
  },
  {
    title: "Perto de Você",
    body: "Mais de 4.300 pacientes atendidos. Avaliações merecidamente realizadas por pacientes com alto grau de satisfação.",
    tags: ["Google · 5.0★ · 124 avaliações", "Doctoralia · 5.0★ · 250 avaliações"],
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

function MediaPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center border border-dashed border-brand-navy/30 bg-brand-mist/70 p-6 text-center",
        className,
      )}
    >
      <span className="text-[11px] uppercase tracking-[0.3em] text-brand-navy-muted">{label}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-navy font-sans selection:bg-brand-teal/20">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-svh flex flex-col justify-end px-6 md:px-10 pt-32 pb-12 md:pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Ambiente do consultório odontológico"
            width={2400}
            height={1350}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-white/95 via-brand-white/60 to-brand-white/20" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-brand-navy-muted mb-8 block">
            Centro Odontológico Integral — Uberaba e região
          </span>
          <h1 className="font-heading font-semibold text-[clamp(3rem,8vw,6rem)] leading-[0.9] mb-8">
            Cuidado odontológico <br />
            com mais de 30 anos de história.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="max-w-md text-sm leading-relaxed text-brand-navy-muted">
              A Dra. Regina Zago acompanha pacientes de Uberaba e região há mais de três décadas, unindo
              experiência clínica em Periodontia a um atendimento próximo e humano.
            </p>
            <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/agendamento"
                className="px-6 py-4 text-center border border-brand-navy/15 rounded-full bg-brand-white/60 backdrop-blur-sm text-[11px] uppercase tracking-[0.2em] hover:bg-brand-navy hover:text-brand-white transition-all duration-500"
              >
                Reservar consulta
              </Link>
              <Link
                to="/servicos"
                className="px-6 py-4 text-center rounded-full text-[11px] uppercase tracking-[0.2em] hover:text-brand-teal-deep transition-colors"
              >
                Ver tratamentos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="filosofia" className="py-20 md:py-32 px-6 md:px-10 bg-brand-navy text-brand-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 max-w-7xl mx-auto">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-teal mb-6 block">
                Identidade
              </span>
              <h2 className="font-heading font-semibold text-4xl md:text-5xl leading-tight mb-8">
                Mais que uma clínica. <br />
                Uma trajetória de confiança.
              </h2>
              <div className="w-full aspect-[4/3] md:aspect-[3/4] border border-white/10 bg-white/5 flex items-center justify-center">
                <span className="text-[11px] uppercase tracking-[0.3em] text-brand-white/40">
                  Foto em breve
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-32">
            <div className="space-y-14 md:space-y-24">
              {philosophy.map((p, i) => (
                <div key={p.title} className="border-l border-brand-teal/30 pl-8">
                  <h3 className="text-lg font-medium mb-4">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-white/60 mb-6">{withPending(p.body)}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, j) => (
                      <span
                        key={tag}
                        className={cn(
                          "inline-block text-[11px] tracking-widest uppercase rounded-full px-3 py-1",
                          (i + j) % 2 === 0
                            ? "bg-brand-salmon text-brand-navy"
                            : "bg-brand-teal-deep text-brand-white",
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="servicos" className="py-20 md:py-32 px-6 md:px-10 bg-brand-mist/70">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12 md:mb-20">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4 block">
                Tratamentos
              </span>
              <h2 className="font-heading font-semibold text-5xl md:text-6xl">Como Podemos Cuidar de Você</h2>
            </div>
            <Link
              to="/servicos"
              className="py-3.5 text-[11px] uppercase tracking-[0.2em] text-brand-navy-muted hover:text-brand-teal-deep transition-colors"
            >
              Ver todas as especialidades →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {services.map((s) => (
              <Link
                to="/servicos"
                key={s.n}
                className="bg-brand-white p-8 md:p-12 hover:bg-brand-mist transition-colors duration-500 group"
              >
                <span className="font-heading font-semibold text-brand-teal-deep block mb-12 text-2xl">
                  {s.n}
                </span>
                <h3 className="font-heading font-semibold text-3xl mb-6">{s.title}</h3>
                <p className="text-xs leading-relaxed text-brand-navy-muted mb-12">{s.body}</p>
                <div className="w-full h-px bg-brand-navy/5" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-brand-navy-muted mt-6 block group-hover:text-brand-teal-deep transition-colors">
                  Explorar →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-24 md:py-40 px-6 md:px-10 border-t border-brand-navy/10 bg-brand-salmon/35">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-brand-teal-deep mb-10 block">
            Confiança
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="font-heading font-semibold text-5xl md:text-6xl mb-3">5.0★</div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-navy-muted">
                124 avaliações no Google
              </p>
            </div>
            <div>
              <div className="font-heading font-semibold text-5xl md:text-6xl mb-3">5.0★</div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-navy-muted">
                250 avaliações no Doctoralia
              </p>
            </div>
            <div>
              <div className="font-heading font-semibold text-5xl md:text-6xl mb-3">+4.300</div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-navy-muted">
                Pacientes atendidos
              </p>
            </div>
            <div>
              <div className="font-heading font-semibold text-5xl md:text-6xl mb-3">30+</div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-navy-muted">
                Anos de experiência
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4 block">
              Depoimentos
            </span>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl">O que dizem os pacientes</h2>
          </div>
          <TestimonialsCarousel />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <MediaPlaceholder className="md:col-span-2 aspect-video" label="Depoimento em vídeo — em breve" />
            <MediaPlaceholder className="aspect-video md:aspect-auto md:min-h-full" label="Print de conversa — em breve" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-brand-white px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-teal mb-6 block">
              Próximo passo
            </span>
            <h2 className="font-heading font-semibold text-5xl md:text-6xl leading-[0.98]">
              Sua primeira consulta começa com exame clínico minucioso.
            </h2>
            <p className="font-heading font-semibold text-2xl text-brand-teal mt-8">
              Começa com entendimento.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 md:items-end">
            <Link
              to="/agendamento"
              className="inline-flex items-center gap-3 px-8 py-5 border border-brand-teal/40 rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-brand-teal-deep hover:text-brand-white hover:border-brand-teal-deep transition-all duration-500"
            >
              Agendar avaliação →
            </Link>
            <Link
              to="/contato"
              className="py-3.5 text-[11px] uppercase tracking-[0.2em] text-brand-white/60 hover:text-brand-teal px-8"
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
