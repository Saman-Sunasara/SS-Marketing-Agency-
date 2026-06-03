import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[var(--gold)]">{eyebrow}</div>
      <h2 className="font-display text-3xl leading-[1.05] text-slate-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{description}</p> : null}
    </div>
  );
}
