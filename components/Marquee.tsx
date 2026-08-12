import clsx from "clsx";

type Props = {
  items: string[];
  separator?: string;
  variant?: "dark" | "cream" | "accent";
  className?: string;
};

export function Marquee({
  items,
  separator = "·",
  variant = "dark",
  className,
}: Props) {
  const doubled = [...items, ...items];
  return (
    <div
      className={clsx(
        "overflow-hidden mask-fade-x py-6 border-y",
        variant === "dark" && "bg-brand-surface border-brand-border/5 text-brand-text",
        variant === "cream" && "border-[rgb(var(--brand-ink)/0.1)] text-[rgb(var(--brand-ink))]",
        variant === "accent" && "bg-brand-accent text-black border-transparent",
        className
      )}
      style={variant === "cream" ? { background: "rgb(var(--brand-cream))" } : undefined}
      aria-hidden
    >
      <div className="flex whitespace-nowrap animate-marquee text-2xl md:text-4xl">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 px-6">
            {item}
            <span className="text-[0.6em] opacity-50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
