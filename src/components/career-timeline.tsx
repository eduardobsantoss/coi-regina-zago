import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { withPending } from "@/components/pending";

export type TimelineEntry = { when: string; title: string; body: string };

// Vertical offset of a dot's center inside its <li> (top-2 + half of size-3).
const DOT_CENTER = 14;

export function CareerTimeline({ entries }: { entries: TimelineEntry[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState(0);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const nextFill = Math.min(Math.max(anchor - rect.top, 0), rect.height);
      const items = list.querySelectorAll<HTMLElement>("[data-entry]");
      let count = 0;
      items.forEach((el) => {
        if (el.offsetTop + DOT_CENTER <= nextFill) count += 1;
      });
      setFill(nextFill);
      setReached(count);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={listRef} className="relative max-w-4xl pl-10 md:pl-14">
      <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-px bg-brand-navy/25" />
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 w-0.5 -translate-x-px bg-brand-teal-deep"
        style={{ height: fill }}
      />
      {entries.map((entry, i) => {
        const active = i < reached;
        return (
          <li
            key={`${entry.when}-${entry.title}`}
            data-entry
            className="relative pb-12 last:pb-0 md:flex md:gap-10"
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-10 md:-left-14 top-2 size-3 -translate-x-1/2 rounded-full border-2 transition-colors duration-300 motion-reduce:transition-none",
                active ? "border-brand-teal-deep bg-brand-teal-deep" : "border-brand-navy/40 bg-brand-white",
              )}
            />
            <div
              className={cn(
                "font-heading font-semibold text-2xl md:w-56 shrink-0 mb-2 md:mb-0 transition-colors duration-300 motion-reduce:transition-none",
                active ? "text-brand-teal-deep" : "text-brand-navy-muted",
              )}
            >
              {withPending(entry.when)}
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">{entry.title}</h3>
              <p className="text-sm leading-relaxed text-brand-navy">{withPending(entry.body)}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
