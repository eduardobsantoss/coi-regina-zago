import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DOCTORALIA_URL, GOOGLE_REVIEWS_URL } from "@/lib/contact";
import sobreHero from "@/assets/site/sobre-hero-placeholder.jpg";
import resultado1 from "@/assets/site/resultado-1.jpg";
import resultado2 from "@/assets/site/resultado-2.jpg";
import resultado3 from "@/assets/site/resultado-3.jpg";
import resultado4 from "@/assets/site/resultado-4.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A Dra. Regina Zago — Centro Odontológico Integral" },
      {
        name: "description",
        content:
          "Conheça a trajetória da Dra. Regina Beatriz Zago: mais de 30 anos de experiência e especialização em Periodontia, à frente do Centro Odontológico Integral em Uberaba, MG.",
      },
      { property: "og:title", content: "A Dra. Regina Zago — Centro Odontológico Integral" },
      {
        property: "og:description",
        content: "Mais de 30 anos de experiência cuidando de sorrisos em Uberaba, MG.",
      },
    ],
  }),
  component: Sobre,
});

const timeline = [
  { year: "1992", title: "Formação", body: "Graduação em Odontologia pela Universidade de Uberaba." },
  { year: "2002", title: "Especialização", body: "Título de Especialista em Periodontia pela Associação Brasileira de Odontologia (ABO)." },
  { year: "Hoje", title: "Reconhecimento", body: "Mais de 4.300 pacientes atendidos e nota 5.0 no Google, em Uberaba." },
];

const credentials = [
  { title: "Registro Profissional", body: "CRO 20.070 | CRO 1277 — Centro Odontológico Integral." },
  { title: "Avaliação", body: "5.0★ no Google, com base em 124 avaliações de pacientes." },
  { title: "Acolhimento", body: "Reconhecida como empresa amiga da comunidade LGBTQ+ — um espaço acolhedor para todos os pacientes." },
  { title: "Atendimento", body: "Consultas com hora marcada, avaliação individual e plano de tratamento personalizado." },
];

const platformReviews = [
  { platform: "Google", rating: "5.0", count: "124 avaliações", url: GOOGLE_REVIEWS_URL },
  { platform: "Doctoralia", rating: "5.0", count: "248 avaliações", url: DOCTORALIA_URL },
];

const results = [resultado1, resultado2, resultado3, resultado4];

function Sobre() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-navy font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end px-6 md:px-10 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={sobreHero}
            alt="Ambiente do consultório odontológico"
            width={2400}
            height={1350}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-white/40" />
        </div>
        <div className="relative z-10 max-w-5xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-navy-muted mb-6 block">
            A Prática
          </span>
          <h1 className="font-heading font-semibold text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] max-w-5xl">
            Mais de 30 anos cuidando de sorrisos em Uberaba.
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 md:px-10 py-32 bg-brand-navy text-brand-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-6 block">
              A Profissional
            </span>
            <div className="w-full max-w-xs flex-1 min-h-[280px] border border-white/10 bg-white/5 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-white/40">
                Foto em breve
              </span>
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-2xl md:text-3xl leading-tight">
            <p>
              Regina Beatriz Zago é cirurgiã-dentista formada pela Universidade de Uberaba, com
              especialização em Periodontia pela Associação Brasileira de Odontologia (ABO) desde 2002.
            </p>
            <p className="text-brand-white/70">
              Há mais de três décadas à frente do Centro Odontológico Integral (COI), já atendeu
              mais de 4.300 pacientes em Uberaba — muitos deles acompanhados há anos, entre
              gerações da mesma família.
            </p>
            <p className="text-brand-white/70">
              Cada atendimento começa com avaliação individual e um plano de tratamento pensado
              para o paciente — a abordagem que sustenta o Centro Odontológico Integral há mais de
              três décadas.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-10 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4 block">
              Trajetória
            </span>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl">Marcos da carreira</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {timeline.map((m) => (
              <li key={m.year} className="bg-brand-white p-10">
                <div className="font-heading font-semibold text-5xl text-brand-teal-deep mb-6">{m.year}</div>
                <h3 className="font-medium mb-3">{m.title}</h3>
                <p className="text-xs leading-relaxed text-brand-navy-muted">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Credentials */}
      <section className="px-6 md:px-10 py-32 border-t border-brand-navy/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4 block">
                Credenciais
              </span>
              <h2 className="font-heading font-semibold text-4xl md:text-5xl">Por que confiar seu sorriso a nós</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {credentials.map((c) => (
              <article key={c.title} className="bg-brand-white p-10 md:p-12">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-teal-deep mb-4">
                  {c.title}
                </h3>
                <p className="text-base leading-relaxed text-brand-navy">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 md:px-10 py-32 border-t border-brand-navy/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4 block">
              Avaliações
            </span>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl">O que dizem os pacientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {platformReviews.map((r) => (
              <a
                key={r.platform}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-white p-10 md:p-12 hover:bg-brand-mist transition-colors duration-500 flex items-center justify-between gap-6 group"
              >
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-teal-deep mb-4">
                    {r.platform}
                  </h3>
                  <div className="font-heading font-semibold text-4xl mb-2">{r.rating}★</div>
                  <p className="text-sm text-brand-navy-muted">{r.count}</p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-navy-muted group-hover:text-brand-teal-deep transition-colors shrink-0">
                  Ver avaliações →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-10 py-32 border-t border-brand-navy/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4 block">
              Resultados
            </span>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl">Sorrisos reais, pacientes reais</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {results.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Antes e depois de tratamento realizado pela Dra. Regina Zago ${i + 1}`}
                width={900}
                height={900}
                loading="lazy"
                className="w-full aspect-square object-cover bg-brand-white"
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
