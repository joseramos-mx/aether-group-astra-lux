import clsx from "clsx";
import type { ReactNode } from "react";

/** Encabezado plano; se conservan el componente por compatibilidad. */

export function TerminalHeading({
  children,
  as: Tag = "h2",
  className,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={clsx(
        "leading-[1.05] tracking-tight",
        Tag === "h1" && "text-[clamp(2.2rem,5.5vw,4rem)]",
        Tag === "h2" && "text-[clamp(1.6rem,3.5vw,2.6rem)]",
        Tag === "h3" && "text-lg md:text-xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function TerminalTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-brand-accent border border-brand-accent/40 rounded-sm px-2 py-1">
      {children}
    </span>
  );
}

export function TerminalCard({
  title,
  children,
  className,
}: {
  code?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl bg-brand-card border border-brand-border/10 p-6 transition-colors hover:border-brand-accent/50",
        className
      )}
    >
      <h3 className="text-lg md:text-xl mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-brand-muted">{children}</p>
    </div>
  );
}

export function TerminalBraceTitle({
  pre,
  highlight,
  post,
  className,
}: {
  pre?: string;
  highlight: string;
  post?: string;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "leading-[1.05] tracking-tight text-[clamp(1.8rem,4.5vw,3.2rem)]",
        className
      )}
    >
      {pre}
      <span className="text-brand-accent">{highlight}</span>
      {post}
    </h2>
  );
}
