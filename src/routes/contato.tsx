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
import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { PHONE_DISPLAY, WHATSAPP_URL, INSTAGRAM_URL, MAPS_EMBED_URL, MAPS_URL } from "@/lib/contact";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Centro Odontológico Integral" },
      {
        name: "description",
        content:
          "Fale com o Centro Odontológico Integral em Uberaba e região. Endereço, horários e formulário de contato direto.",
      },
      { property: "og:title", content: "Contato — Centro Odontológico Integral" },
      {
        property: "og:description",
        content: "Endereço, horários e formulário de contato em Uberaba e região.",
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
    <div className="min-h-screen bg-brand-white text-brand-navy font-sans">
      <SiteHeader />

      <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <span className="kicker text-brand-teal-deep mb-8 block">
            Contato
          </span>
          <h1 className="type-page">
            Uma conversa antes de qualquer procedimento.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pt-12 md:pt-16 pb-20 md:pb-32 bg-brand-mist/70">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Info column */}
          <div className="md:col-span-5 space-y-12">
            <iframe
              title="Localização do Centro Odontológico Integral no Google Maps"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full aspect-[16/10] md:aspect-[16/6.2] border border-brand-teal/30"
            />

            <div>
              <h3 className="kicker text-brand-teal-deep mb-4">
                Endereço
              </h3>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver localização no Google Maps (abre em nova aba)"
                className="block py-1 type-body text-brand-navy underline-offset-4 hover:underline"
              >
                R. Cel. Antônio Rios, 1097 · Sala 1107-B
                <br />
                Santa Marta — Uberaba, MG
                <br />
                CEP 38061-150
              </a>
            </div>

            <div>
              <h3 className="kicker text-brand-teal-deep mb-4">
                Horários
              </h3>
              <p className="type-body text-brand-navy">
                Segunda a sexta · 08h às 18h
                <br />
                Sábado · sob agendamento
              </p>
            </div>

            <div>
              <h3 className="kicker text-brand-teal-deep mb-4">
                Canais
              </h3>
              <div className="type-body text-brand-navy">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2.5 hover:text-brand-teal-deep">
                  <WhatsAppIcon size={18} />
                  {PHONE_DISPLAY}
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2.5 hover:text-brand-teal-deep">
                  <Instagram size={18} strokeWidth={1.75} aria-hidden="true" />
                  @drareginazagoo
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-7 md:border-l md:border-brand-navy/10 md:pl-16">
            <span className="kicker text-brand-navy-muted mb-6 block">
              Envie sua mensagem
            </span>
            <h2 className="type-section mb-10 md:mb-12">Responderemos pessoalmente.</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="label-caps text-xs leading-snug text-brand-navy-muted">Nome</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Como podemos chamá-lo"
                            className="h-12 rounded-none border-0 border-b border-brand-navy-muted bg-transparent px-0 text-base shadow-none focus-visible:ring-0 focus-visible:border-brand-teal-deep focus-visible:shadow-[0_1px_0_0_var(--color-brand-teal-deep)]"
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
                        <FormLabel className="label-caps text-xs leading-snug text-brand-navy-muted">E-mail</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="seu@email.com"
                            className="h-12 rounded-none border-0 border-b border-brand-navy-muted bg-transparent px-0 text-base shadow-none focus-visible:ring-0 focus-visible:border-brand-teal-deep focus-visible:shadow-[0_1px_0_0_var(--color-brand-teal-deep)]"
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
                        <FormLabel className="label-caps text-xs leading-snug text-brand-navy-muted">Telefone</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="(34) 90000-0000"
                            className="h-12 rounded-none border-0 border-b border-brand-navy-muted bg-transparent px-0 text-base shadow-none focus-visible:ring-0 focus-visible:border-brand-teal-deep focus-visible:shadow-[0_1px_0_0_var(--color-brand-teal-deep)]"
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
                        <FormLabel className="label-caps text-xs leading-snug text-brand-navy-muted">Assunto</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none border-0 border-b border-brand-navy-muted bg-transparent px-0 text-base shadow-none focus:ring-0 focus:border-brand-teal-deep focus:shadow-[0_1px_0_0_var(--color-brand-teal-deep)]">
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
                      <FormLabel className="label-caps text-xs leading-snug text-brand-navy-muted">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          placeholder="Conte um pouco sobre o que procura"
                          className="rounded-none border-0 border-b border-brand-navy-muted bg-transparent px-0 text-base shadow-none focus-visible:ring-0 focus-visible:border-brand-teal-deep focus-visible:shadow-[0_1px_0_0_var(--color-brand-teal-deep)] resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  Enviar mensagem
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
