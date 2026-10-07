import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// Real patient reviews, copied from Regina's public Doctoralia profile
// (doctoralia.com.br/regina-zago/dentista/uberaba) — lightly cleaned for
// punctuation/capitalization only, meaning unchanged.
const testimonials = [
  {
    name: "Maria das Graças",
    date: "Julho de 2024",
    treatment: "Prótese sobre implantes",
    quote:
      "Super indico, ótimo tratamento, excelente profissional muito competente, muito atenciosa. Me acompanha há mais de 13 anos — moro em outro estado e venho a Uberaba para as manutenções.",
  },
  {
    name: "Alirio",
    date: "Junho de 2024",
    treatment: "Primeira consulta odontológica",
    quote:
      "Adorei a consulta com a Dra., estava com uma dor na face fazia bastante tempo — ela foi a única que soube a causa e conseguiu tratar e dar o diagnóstico correto. Agora é viver sem dores, graças a ela.",
  },
  {
    name: "Ruti Muniz",
    date: "Março de 2024",
    treatment: "Primeira consulta odontológica",
    quote:
      "Consulta eficaz e resolutiva. Minhas lentes em cerâmica, feitas em 2012, há 12 anos atrás, estão perfeitas e naturais. Deposito nela toda a minha confiança!",
  },
  {
    name: "Maria de Melo",
    date: "Setembro de 2026",
    treatment: "Implantes dentários",
    quote:
      "Ótima experiência com o tratamento estético e reabilitação que fiz com a Dra. Regina Zago. Muito atenciosa, caprichosa, bastante paciente comigo por estes quinze anos confiando minha saúde bucal. Os implantes que ela realizou estão todos íntegros, sem perda óssea.",
  },
  {
    name: "Clara",
    date: "Agosto de 2026",
    treatment: "Retorno de consultas",
    quote: "Excelente profissional! Muito atenciosa e um ótimo serviço.",
  },
];

export function TestimonialsCarousel() {
  return (
    <Carousel opts={{ loop: true, align: "start" }}>
      <CarouselContent>
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="md:basis-1/2">
            <div className="h-full border border-brand-navy/10 bg-brand-white p-8 md:p-10 flex flex-col">
              <p className="text-base leading-relaxed text-brand-navy mb-8 flex-1">“{t.quote}”</p>
              <div className="pt-6 border-t border-brand-navy/10">
                <p className="font-heading font-semibold text-sm">{t.name}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand-navy-muted mt-1">
                  {t.date} · {t.treatment}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-3 mt-8">
        <CarouselPrevious className="static translate-y-0 size-11 rounded-full border-brand-navy/15 hover:bg-brand-navy hover:text-brand-white" />
        <CarouselNext className="static translate-y-0 size-11 rounded-full border-brand-navy/15 hover:bg-brand-navy hover:text-brand-white" />
      </div>
    </Carousel>
  );
}
