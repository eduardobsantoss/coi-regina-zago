import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PHONE_DISPLAY, WHATSAPP_URL, INSTAGRAM_URL, MAPS_EMBED_URL } from "@/lib/contact";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Centro Odontológico Integral" },
      {
        name: "description",
        content:
          "Fale com o Centro Odontológico Integral em Uberaba, MG. Endereço, horários e formulário de contato direto.",
      },
      { property: "og:title", content: "Contato — Centro Odontológico Integral" },
      {
        property: "og:description",
        content: "Endereço, horários e formulário de contato em Uberaba, MG.",
      },
    ],
  }),
  component: Contato,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(30),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().trim().min(10, "Conte um pouco mais").max(1000),
});

type FormValues = z.infer<typeof schema>;

function Contato() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", email: "", telefone: "", assunto: "", mensagem: "" },
  });

  function onSubmit(values: FormValues) {
    console.log("contato", values);
    toast.success("Mensagem recebida", {
      description: "Retornaremos em até um dia útil.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy font-sans">
      <SiteHeader />

      <section className="pt-40 pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-8 block">
            Contato
          </span>
          <h1 className="font-serif italic text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] max-w-4xl">
            Uma conversa antes de qualquer procedimento.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Info column */}
          <div className="md:col-span-5 space-y-12">
            <iframe
              title="Localização do Centro Odontológico Integral no Google Maps"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full aspect-[16/6.2] border border-brand-teal/30"
            />

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4">
                Endereço
              </h3>
              <p className="text-sm leading-relaxed text-brand-navy/75">
                R. Cel. Antônio Rios, 1097 · Sala 1107-B
                <br />
                Santa Marta — Uberaba, MG
                <br />
                CEP 38061-150
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4">
                Horários
              </h3>
              <p className="text-sm leading-relaxed text-brand-navy/75">
                Segunda a sexta · 08h às 18h
                <br />
                Sábado · sob agendamento
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-teal-deep mb-4">
                Canais
              </h3>
              <p className="text-sm leading-relaxed text-brand-navy/75">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal-deep">
                  {PHONE_DISPLAY} · WhatsApp
                </a>
                <br />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal-deep">
                  @drareginazagoo no Instagram
                </a>
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-7 md:border-l md:border-brand-navy/10 md:pl-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-navy/40 mb-6 block">
              Envie sua mensagem
            </span>
            <h2 className="font-serif italic text-3xl md:text-4xl mb-12">
              Responderemos pessoalmente.
            </h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60">Nome</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Como podemos chamá-lo"
                            className="rounded-none border-0 border-b border-brand-navy/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-brand-teal"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60">E-mail</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="seu@email.com"
                            className="rounded-none border-0 border-b border-brand-navy/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-brand-teal"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60">Telefone</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="(34) 90000-0000"
                            className="rounded-none border-0 border-b border-brand-navy/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-brand-teal"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="assunto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60">Assunto</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-0 border-b border-brand-navy/20 bg-transparent px-0 focus:ring-0 focus:border-brand-teal">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="avaliacao">Primeira avaliação</SelectItem>
                            <SelectItem value="tratamento">Dúvida sobre tratamento</SelectItem>
                            <SelectItem value="orcamento">Orçamento</SelectItem>
                            <SelectItem value="parceria">Parceria / imprensa</SelectItem>
                            <SelectItem value="outro">Outro assunto</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          placeholder="Conte um pouco sobre o que procura"
                          className="rounded-none border-0 border-b border-brand-navy/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-brand-teal resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-5 border border-brand-navy/15 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-brand-navy hover:text-brand-cream transition-all duration-500"
                >
                  Enviar mensagem →
                </button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
