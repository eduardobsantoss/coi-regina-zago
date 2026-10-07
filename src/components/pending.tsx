import type { ReactNode } from "react";

export const PENDING = "XXXX";

export function Pending() {
  return (
    <mark className="rounded-sm bg-brand-salmon px-1 text-brand-navy" title="Informação a confirmar">
      {PENDING}
    </mark>
  );
}

export function withPending(text: string): ReactNode {
  const parts = text.split(PENDING);
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <Pending />}
    </span>
  ));
}
