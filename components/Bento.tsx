import clsx from "clsx";
import type { ReactNode, HTMLAttributes } from "react";

type BentoCardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "dark" | "cream" | "accent" | "ghost" | "ink";
  span?: string;
  children: ReactNode;
};

export function Bento({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  variant = "dark",
  span,
  className,
  children,
  ...rest
}: BentoCardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl border p-6 md:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1",
        variant === "dark" && "bg-brand-card border-brand-border/5 text-brand-text",
        variant === "cream" && "border-transparent text-[rgb(var(--brand-ink))]",
        variant === "accent" && "bg-brand-accent text-black border-transparent",
        variant === "ink" && "bg-[rgb(var(--brand-ink))] text-[rgb(var(--brand-cream))] border-transparent",
        variant === "ghost" && "bg-transparent border-brand-border/10 text-brand-text",
        span,
        className
      )}
      style={variant === "cream" ? { background: "rgb(var(--brand-cream))" } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}

export function StatBento({
  value,
  label,
  span,
  variant = "accent",
}: {
  value: string;
  label: string;
  span?: string;
  variant?: BentoCardProps["variant"];
}) {
  return (
    <BentoCard span={span} variant={variant}>
      <div className="text-xs uppercase tracking-[0.2em] opacity-70">Impacto</div>
      <div>
        <div className="leading-none text-[clamp(3rem,7vw,5.5rem)]">{value}</div>
        <div className="mt-2 opacity-90 max-w-[24ch]">{label}</div>
      </div>
    </BentoCard>
  );
}
