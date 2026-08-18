import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/agendamento")({
  head: () => ({
    meta: [
      { title: "Agendamento — Éclat Odontologia" },
      {
        name: "description",
        content:
          "Reserve sua primeira avaliação na Éclat Odontologia. Escolha o tratamento, a data e o horário em poucos passos.",
      },
      { property: "og:title", content: "Agendamento — Éclat Odontologia" },
      {
        property: "og:description",
        content: "Reserve sua avaliação em poucos passos.",
      },
    ],
  }),
  component: Agendamento,
});

const treatments = [
  "Primeira avaliação",
  "Lentes de Porcelana",
  "Implantes Digitais",
  "Ortodontia Invisível",
  "Clareamento a Laser",
  "Harmonização Orofacial",
  "Endodontia Microscópica",
  "Periodontia Estética",
];

const times = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"];

type Step = 1 | 2 | 3 | 4;

function Agendamento() {
  const [step, setStep] = useState<Step>(1);
  const [treatment, setTreatment] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [obs, setObs] = useState("");

  const canNext1 = !!treatment;
  const canNext2 = !!date && !!time;
  const canNext3 = nome.trim().length > 1 && telefone.trim().length > 7 && /.+@.+\..+/.test(email);

  function confirm() {
    toast.success("Solicitação enviada", {
      description: "Confirmaremos seu horário em até duas horas úteis.",
    });
    setStep(4);
  }

  function reset() {
    setStep(1);
    setTreatment("");
    setDate(undefined);
    setTime("");
    setNome("");
    setTelefone("");
    setEmail("");
    setObs("");
  }

  const steps = [
    { n: "I", label: "Tratamento" },
    { n: "II", label: "Data e hora" },
    { n: "III", label: "Seus dados" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy font-sans">
      <SiteHeader />

      <section className="pt-40 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-8 block">
            Agendamento
          </span>
          <h1 className="font-serif italic text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] max-w-3xl">
            Reserve sua primeira consulta.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Stepper */}
          <ol className="grid grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10 mb-16">
            {steps.map((s, i) => {
              const idx = (i + 1) as Step;
              const active = step === idx;
              const done = step > idx;
              return (
                <li
                  key={s.n}
                  className={cn(
                    "bg-brand-cream p-6 md:p-8 flex items-baseline gap-4",
                    active && "bg-white",
                    done && "opacity-60",
                  )}
                >
                  <span className="font-serif italic text-2xl text-brand-teal">{s.n}</span>
                  <span className={cn(
                    "text-[10px] uppercase tracking-[0.2em]",
                    active ? "text-brand-navy" : "text-brand-navy/50",
                  )}>
                    {s.label}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-10">
              <h2 className="font-serif italic text-3xl md:text-4xl">Qual cuidado procura?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-navy/10 border border-brand-navy/10">
                {treatments.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTreatment(t)}
                    className={cn(
                      "bg-brand-cream p-6 text-left text-sm transition-colors",
                      treatment === t ? "bg-brand-navy text-brand-cream" : "hover:bg-white",
                    )}
                  >
                    <span className="block text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">
                      Tratamento
                    </span>
                    {t}
                  </button>
                ))}
              </div>
              <NavButtons onNext={() => setStep(2)} canNext={canNext1} />
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-10">
              <h2 className="font-serif italic text-3xl md:text-4xl">Escolha data e horário.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border border-brand-navy/10 bg-brand-cream p-4 inline-block">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={ptBR}
                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0)) || d.getDay() === 0}
                    className={cn("p-3 pointer-events-auto")}
                  />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60 mb-6">
                    Horários disponíveis
                    {date && (
                      <span className="block mt-2 text-brand-teal normal-case tracking-normal text-xs font-serif italic">
                        {format(date, "EEEE, d 'de' MMMM", { locale: ptBR })}
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
                    {times.map((t) => (
                      <button
                        key={t}
                        type="button"
                        disabled={!date}
                        onClick={() => setTime(t)}
                        className={cn(
                          "bg-brand-cream py-4 text-sm font-serif italic transition-colors",
                          time === t ? "bg-brand-navy text-brand-cream" : "hover:bg-white",
                          !date && "opacity-40 cursor-not-allowed",
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <NavButtons onBack={() => setStep(1)} onNext={() => setStep(3)} canNext={canNext2} />
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-10">
              <h2 className="font-serif italic text-3xl md:text-4xl">Seus dados.</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                <Field label="Nome completo">
                  <Input value={nome} onChange={(e) => setNome(e.target.value)} className={fieldClass} />
                </Field>
                <Field label="Telefone">
                  <Input value={telefone} onChange={(e) => setTelefone(e.target.value)} className={fieldClass} placeholder="(11) 90000-0000" />
                </Field>
                <Field label="E-mail">
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} />
                </Field>
                <Field label="Observações (opcional)">
                  <Textarea rows={3} value={obs} onChange={(e) => setObs(e.target.value)} className={cn(fieldClass, "resize-none")} />
                </Field>
              </div>

              {/* Summary */}
              <div className="border border-brand-navy/10 bg-white/60 p-8">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-6">
                  Resumo da solicitação
                </h3>
                <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/40 mb-2">Tratamento</dt>
                    <dd className="font-serif italic text-lg">{treatment}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/40 mb-2">Data</dt>
                    <dd className="font-serif italic text-lg">
                      {date ? format(date, "d 'de' MMMM", { locale: ptBR }) : "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/40 mb-2">Horário</dt>
                    <dd className="font-serif italic text-lg">{time || "—"}</dd>
                  </div>
                </dl>
              </div>

              <NavButtons
                onBack={() => setStep(2)}
                onNext={confirm}
                canNext={canNext3}
                nextLabel="Confirmar solicitação"
              />
            </div>
          )}

          {/* Step 4 — confirmation */}
          {step === 4 && (
            <div className="py-20 text-center max-w-2xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal block mb-8">
                Solicitação enviada
              </span>
              <h2 className="font-serif italic text-4xl md:text-5xl mb-8 leading-tight">
                Obrigado, {nome.split(" ")[0] || "paciente"}.
              </h2>
              <p className="text-sm text-brand-navy/65 leading-relaxed mb-12">
                Recebemos seu pedido para <strong>{treatment}</strong> em{" "}
                <strong>{date && format(date, "d 'de' MMMM", { locale: ptBR })}</strong> às{" "}
                <strong>{time}</strong>. Nossa equipe confirmará seu horário em até duas horas úteis pelos canais informados.
              </p>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-3 px-8 py-5 border border-brand-navy/15 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-brand-navy hover:text-brand-cream transition-all duration-500"
              >
                Fazer outra reserva →
              </button>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

const fieldClass =
  "rounded-none border-0 border-b border-brand-navy/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-brand-teal";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-3">
      <span className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60">{label}</span>
      {children}
    </label>
  );
}

function NavButtons({
  onBack,
  onNext,
  canNext,
  nextLabel = "Continuar",
}: {
  onBack?: () => void;
  onNext: () => void;
  canNext: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between pt-8 border-t border-brand-navy/10">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60 hover:text-brand-navy"
        >
          ← Voltar
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        className={cn(
          "inline-flex items-center gap-3 px-8 py-5 border rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500",
          canNext
            ? "border-brand-navy/15 hover:bg-brand-navy hover:text-brand-cream"
            : "border-brand-navy/10 opacity-40 cursor-not-allowed",
        )}
      >
        {nextLabel} →
      </button>
    </div>
  );
}
