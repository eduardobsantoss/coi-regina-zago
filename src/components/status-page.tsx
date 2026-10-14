import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";
import logoMark from "@/assets/site/logo-icon.png";

type StatusPageProps = {
  code: string;
  title: string;
  message: ReactNode;
  actions: ReactNode;
  // Error boundaries use the minimal chrome: if the failure came from the
  // header or footer themselves, rendering them again would just re-throw.
  minimal?: boolean;
  showSuggestions?: boolean;
};

const suggestions = [
  { to: "/servicos", label: "Tratamentos" },
  { to: "/sobre", label: "Sobre a Dra. Regina" },
  { to: "/agendamento", label: "Agendar consulta" },
  { to: "/contato", label: "Contato e endereço" },
] as const;

export function StatusPage({ code, title, message, actions, minimal, showSuggestions }: StatusPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-white font-sans text-brand-navy">
      {minimal ? (
        <header className="px-6 py-5 md:px-10">
          {/* Plain <a>: a full reload is the most reliable way out of a broken state. */}
          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex items-center gap-2.5 py-2 font-heading text-lg font-semibold"
          >
            <img src={logoMark} alt="" width={500} height={500} className="h-7 w-7" />
            COI · Dra. Regina Zago
          </a>
        </header>
      ) : (
        <SiteHeader />
      )}

      <main className="flex flex-1 items-center bg-brand-mist/70 px-6 pb-20 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto w-full max-w-5xl">
          <p className="kicker mb-6 text-brand-teal-deep">{code}</p>
          <h1 className="type-page mb-6 max-w-3xl">{title}</h1>
          <div className="type-lead mb-10 max-w-2xl text-brand-navy">{message}</div>
          <div className="flex flex-col gap-3 sm:flex-row">{actions}</div>

          {showSuggestions && (
            <nav aria-label="Páginas do site" className="mt-14 border-t border-brand-navy/15 pt-8">
              <p className="kicker mb-4 text-brand-navy-muted">Talvez você procure</p>
              <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 md:grid-cols-4">
                {suggestions.map((s) => (
                  <li key={s.to}>
                    <Link
                      to={s.to}
                      className="block border-b border-brand-navy/10 py-3 font-heading text-lg font-semibold hover:text-brand-teal-deep"
                    >
                      {s.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <p className="mt-12 type-body text-brand-navy-muted">
            Prefere falar com a gente?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-brand-teal-deep underline underline-offset-4"
            >
              <WhatsAppIcon size={16} />
              WhatsApp {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </main>

      {!minimal && <SiteFooter />}
    </div>
  );
}

export function NotFoundPage() {
  return (
    <StatusPage
      code="Erro 404"
      title="Página não encontrada."
      message={
        <p>
          O endereço pode ter mudado ou ter sido digitado com algum erro. Veja abaixo algumas
          opções para continuar navegando.
        </p>
      }
      actions={
        <>
          <Link to="/" className="btn btn-primary">
            Voltar para o início
          </Link>
          <Link to="/agendamento" className="btn btn-secondary">
            Agendar consulta
          </Link>
        </>
      }
      showSuggestions
    />
  );
}

type ErrorKind = "offline" | "outdated" | "unknown";

// A deploy replaces the hashed JS chunks, so a tab left open from before the
// deploy fails to lazy-load the next page. Browsers word this differently.
const OUTDATED_CHUNK =
  /dynamically imported module|Importing a module script failed|Loading chunk|ChunkLoadError|Unable to preload CSS/i;

export function classifyError(error: unknown): ErrorKind {
  if (typeof navigator !== "undefined" && navigator.onLine === false) return "offline";
  const message = error instanceof Error ? error.message : String(error ?? "");
  if (OUTDATED_CHUNK.test(message)) return "outdated";
  return "unknown";
}

export function ErrorPage({ error, onRetry }: { error: unknown; onRetry: () => void }) {
  const kind = classifyError(error);
  const reload = () => window.location.reload();

  if (kind === "offline") {
    return (
      <StatusPage
        minimal
        code="Sem conexão"
        title="Você está sem internet no momento."
        message={
          <p>
            Verifique o Wi-Fi ou os dados móveis e tente de novo. Se preferir, ligue para{" "}
            <a href="tel:+5534998559855" className="font-medium underline underline-offset-4">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        }
        actions={
          <button type="button" onClick={onRetry} className="btn btn-primary">
            Tentar novamente
          </button>
        }
      />
    );
  }

  if (kind === "outdated") {
    return (
      <StatusPage
        minimal
        code="Site atualizado"
        title="Há uma versão mais nova desta página."
        message={<p>Publicamos uma atualização enquanto você navegava. Recarregue para continuar.</p>}
        actions={
          <button type="button" onClick={reload} className="btn btn-primary">
            Recarregar página
          </button>
        }
      />
    );
  }

  return (
    <StatusPage
      minimal
      code="Erro inesperado"
      title="Algo não carregou como deveria."
      message={
        <p>
          Pedimos desculpas pelo transtorno. Tente carregar a página novamente; se o problema
          continuar, fale com a gente pelo WhatsApp.
        </p>
      }
      actions={
        <>
          <button type="button" onClick={onRetry} className="btn btn-primary">
            Tentar novamente
          </button>
          <a href={import.meta.env.BASE_URL} className="btn btn-secondary">
            Voltar para o início
          </a>
        </>
      }
    />
  );
}
