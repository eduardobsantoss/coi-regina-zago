// Last-resort page for when server rendering itself fails, so it can't use the
// app's React components, CSS or fonts — everything is inline and system fonts
// only. Colors and copy follow the site's own error pages.
export function renderErrorPage(): string {
  const home = import.meta.env.BASE_URL;
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Erro inesperado — Centro Odontológico Integral</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <style>
      *, *::before, *::after { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; display: flex; flex-direction: column; font: 16px/1.65 system-ui, -apple-system, "Segoe UI", sans-serif; background: #ebf5f4; color: #0d4a63; }
      header { padding: 1.25rem 1.5rem; background: #fff; font-weight: 600; font-size: 1.125rem; }
      header a { color: inherit; text-decoration: none; }
      main { flex: 1; display: flex; align-items: center; padding: 3rem 1.5rem 5rem; }
      .wrap { max-width: 40rem; margin: 0 auto; width: 100%; }
      .kicker { font-size: .75rem; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; color: #12797e; margin: 0 0 1.25rem; }
      h1 { font-size: clamp(2rem, 1.5rem + 2.5vw, 3rem); line-height: 1.05; margin: 0 0 1.25rem; }
      p { margin: 0 0 2rem; font-size: 1.125rem; }
      .actions { display: flex; flex-wrap: wrap; gap: .75rem; }
      .btn { display: inline-flex; align-items: center; justify-content: center; min-height: 3rem; padding: .875rem 1.75rem; border-radius: 999px; font: 600 .75rem/1.2 inherit; letter-spacing: .16em; text-transform: uppercase; text-decoration: none; cursor: pointer; border: 1px solid #0d4a63; }
      .primary { background: #0d4a63; color: #fff; }
      .secondary { background: transparent; color: #0d4a63; }
      .btn:focus-visible, header a:focus-visible, .help a:focus-visible { outline: 2px solid #12797e; outline-offset: 2px; }
      .help { margin-top: 2.5rem; font-size: 1rem; color: #427285; }
      .help a { color: #12797e; font-weight: 600; }
    </style>
  </head>
  <body>
    <header><a href="${home}">COI · Dra. Regina Zago</a></header>
    <main>
      <div class="wrap">
        <p class="kicker">Erro inesperado</p>
        <h1>Algo não carregou como deveria.</h1>
        <p>Pedimos desculpas pelo transtorno. Tente carregar a página novamente; se o problema continuar, fale com a gente.</p>
        <div class="actions">
          <button class="btn primary" type="button" onclick="location.reload()">Tentar novamente</button>
          <a class="btn secondary" href="${home}">Voltar para o início</a>
        </div>
        <p class="help">WhatsApp: <a href="https://wa.me/5534998559855" rel="noopener noreferrer">(34) 99855-9855</a></p>
      </div>
    </main>
  </body>
</html>`;
}
