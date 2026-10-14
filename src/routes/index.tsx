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
    title: "Cuidado integral",
    body: "Todas as especialidades em um só lugar, sem a necessidade de te encaminhar para outro profissional.",
    tags: ["Uma clínica, todo o cuidado"],
  },
  {
    title: "Mais de três décadas de experiência",
    body: "Graduada em Odontologia pela Universidade de Uberaba em XXXX, com formação em ortodontia, periodontia, implantodontia, dentística restauradora e odontologia estética. Além de centenas de cursos e participações contínuas em congressos internacionais.",
    tags: ["Especialista em Periodontia"],
  },
  {
    title: "Perto de você",
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

const stats = [
  { value: "5.0★", label: "124 avaliações no Google" },
  { value: "5.0★", label: "250 avaliações no Doctoralia" },
  { value: "+4.300", label: "Pacientes atendidos" },
  { value: "30+", label: "Anos de experiência" },
];

function MediaPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center border border-dashed border-brand-navy/30 bg-brand-mist/70 p-6 text-center",
        className,
      )}
    >
      <span className="kicker text-brand-navy-muted">{label}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-navy font-sans selection:bg-brand-teal/20">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-svh flex flex-col justify-end px-6 md:px-10 pt-32 pb-24 md:pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Ambiente do consultório odontológico"
            width={2400}
            height={1350}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          {/* Bottom-up wash for the headline, plus a top band so the
              transparent header's nav stays readable over the photo. */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-white/95 via-brand-white/60 to-brand-white/20" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-white/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <span className="kicker text-brand-navy-muted mb-6 md:mb-8 block">
            Centro Odontológico Integral — Uberaba e região
          </span>
          <h1 className="type-display mb-8">Cuidado odontológico com mais de 30 anos de história.</h1>
          <div className="flex flex-col md:flex-row gap-8 md:items-end">
            <p className="type-lead max-w-md text-brand-navy">
              A Dra. Regina Zago acompanha pacientes de Uberaba e região há mais de três décadas, unindo
              experiência clínica em Periodontia a um atendimento próximo e humano.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link to="/agendamento" className="btn btn-primary">
                Reservar consulta
              </Link>
              <Link to="/servicos" className="btn btn-secondary bg-brand-white/60 backdrop-blur-sm">
                Ver tratamentos
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
              <span className="kicker text-brand-teal mb-6 block">Identidade</span>
              <h2 className="type-section mb-8">
                Mais que uma clínica. <br />
                Uma trajetória de confiança.
              </h2>
              <div className="w-full aspect-[4/3] md:aspect-[3/4] border border-white/15 bg-white/5 flex items-center justify-center">
                <span className="kicker text-brand-white/60">Foto em breve</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-32">
            <div className="space-y-14 md:space-y-20">
              {philosophy.map((p, i) => (
                <div key={p.title} className="border-l-2 border-brand-teal/40 pl-6 md:pl-8">
                  <h3 className="type-card mb-4">{p.title}</h3>
                  <p className="type-body text-brand-white/80 mb-6">{withPending(p.body)}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, j) => (
                      <span
                        key={tag}
                        className={cn(
                          "label-caps tracking-[0.12em] rounded-full px-3 py-1.5",
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
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12 md:mb-16">
            <div>
              <span className="kicker text-brand-teal-deep mb-4 block">Tratamentos</span>
              <h2 className="type-section">Como podemos cuidar de você</h2>
            </div>
            <Link
              to="/servicos"
              className="label-caps py-3.5 text-brand-navy-muted hover:text-brand-teal-deep transition-colors"
            >
              Ver todas as especialidades →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {services.map((s) => (
              <Link
                to="/servicos"
                key={s.n}
                className="bg-brand-white p-8 md:p-10 hover:bg-brand-mist transition-colors duration-500 group flex flex-col"
              >
                <span className="font-heading font-semibold text-brand-teal-deep block mb-8 md:mb-10 text-2xl">
                  {s.n}
                </span>
                <h3 className="type-card mb-4">{s.title}</h3>
                <p className="type-body text-brand-navy-muted mb-10">{s.body}</p>
                <span className="label-caps mt-auto pt-6 border-t border-brand-navy/10 text-brand-navy-muted group-hover:text-brand-teal-deep transition-colors">
                  Saiba mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-brand-navy/10 bg-brand-salmon/35">
        <div className="max-w-6xl mx-auto text-center">
          <span className="kicker text-brand-teal-deep mb-10 block">Confiança</span>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-3">
                <dt className="label-caps tracking-[0.14em] text-brand-navy-muted">{s.label}</dt>
                <dd className="font-heading font-semibold text-[clamp(2.25rem,1.6rem+2.4vw,3.75rem)] leading-none">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-14">
            <span className="kicker text-brand-teal-deep mb-4 block">Depoimentos</span>
            <h2 className="type-section">O que dizem os pacientes</h2>
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end">
          <div className="md:col-span-8">
            <span className="kicker text-brand-teal mb-6 block">Próximo passo</span>
            <h2 className="type-section">Sua primeira consulta começa com exame clínico minucioso.</h2>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
            <Link to="/agendamento" className="btn btn-light">
              Agendar avaliação
            </Link>
            <Link to="/contato" className="btn btn-ghost-light">
              Falar com a clínica
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
