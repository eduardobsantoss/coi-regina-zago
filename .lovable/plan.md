
# Plano — Expansão do site Éclat Odontologia

Mantém o mesmo idioma visual (Architectural Atelier: marfim `#f2f0ed`, tinta `#0a0a0b`, ouro `#c5a059`, Cormorant Garamond + Plus Jakarta Sans, hairlines em ouro, espaçamento generoso). Nada de mudar a paleta ou tipografia já aprovadas.

## Novas rotas

```
src/routes/
  index.tsx          (atualizar — home enxuta com prévias linkando para as páginas)
  servicos.tsx       (nova — catálogo completo)
  sobre.tsx          (nova — filosofia + equipe)
  contato.tsx        (nova — formulário + dados da clínica)
  agendamento.tsx    (nova — wizard de marcação)
```

Cada rota recebe `head()` próprio (title, description, og:title, og:description em pt-BR).

## Navegação

Atualizar o nav fixo em `index.tsx` e replicar via um componente compartilhado `src/components/site-header.tsx` + `src/components/site-footer.tsx` para reaproveitar nas novas páginas (mantendo `mix-blend-difference` no header).

## Conteúdo por página (mockado, genérico)

**Home (`/`)** — manter hero + filosofia, encurtar serviços para 3 cards-resumo com link "Ver todos os tratamentos →", adicionar faixa de depoimento único e CTA grande para `/agendamento`.

**Serviços (`/servicos`)**
- Hero curto com headline serif.
- 6–8 tratamentos em grid editorial (2 colunas alternadas, imagem + texto):
  Lentes de Porcelana, Implantes, Ortodontia Invisível, Clareamento, Harmonização Orofacial, Endodontia Microscópica, Periodontia, Odontopediatria.
- Cada item: número romano em ouro, nome serif, parágrafo curto, lista de 3 bullets ("indicado para…", "duração", "sessões"), link "Agendar avaliação".

**Sobre (`/sobre`)**
- Manifesto (texto longo serif).
- Linha do tempo da clínica (4 marcos).
- Equipe: 4 profissionais em grid, foto retrato monocromática (placeholder gerada), nome, CRO, especialidade, mini-bio.

**Contato (`/contato`)**
- Coluna esquerda: endereço, telefone, e-mail, horário, redes, mapa estático (imagem placeholder cinza com hairline ouro — sem integração).
- Coluna direita: formulário (nome, e-mail, telefone, assunto, mensagem) com validação Zod + react-hook-form + shadcn `Form`, `Input`, `Textarea`, `Button`. Submit faz `toast` de sucesso (sem backend — apenas mock visual conforme solicitado).

**Agendamento (`/agendamento`)**
- Wizard em 3 passos numerados em ouro:
  1. Tratamento (select de serviço)
  2. Data e horário (shadcn `Calendar` + grid de horários mockados)
  3. Dados (nome, telefone, e-mail, observações)
- Resumo final + botão "Confirmar solicitação" → toast de confirmação.
- Sem backend; estado em `useState`.

## Componentes shadcn a usar

`button`, `input`, `textarea`, `label`, `form`, `calendar`, `popover`, `select`, `sonner` (toaster). Verificar quais já existem em `src/components/ui/`; instalar via cli apenas os faltantes.

## Assets a gerar

- `src/assets/team.jpg` (1200×900) — interior da clínica em tom marfim/madeira.
- `src/assets/services-hero.jpg` (1920×900) — detalhe arquitetônico/mármore.
- `src/assets/map.jpg` (1200×700) — mapa estilizado monocromático.

(Retratos de equipe: usar 4 placeholders monocromáticos gerados num único batch.)

## Técnico

- Sem novas dependências além de shadcn pré-instalados (`react-hook-form`, `zod`, `date-fns` já presentes via shadcn). Verificar antes.
- Todo conteúdo em pt-BR, mockado e genérico (nomes fictícios tipo "Dra. Helena Marques", endereço "Rua Oscar Freire, 000 — São Paulo").
- Sem backend, sem Lovable Cloud — formulários apenas exibem toast.
- Manter SEO básico em cada rota.

## Fora de escopo

- Integração real de envio de e-mail/WhatsApp.
- Persistência de agendamentos.
- Autenticação / área do paciente.
- Blog / conteúdo real.
