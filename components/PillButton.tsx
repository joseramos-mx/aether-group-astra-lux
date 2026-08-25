import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "@/components/icons";

type Variant = "gold" | "outline" | "navy" | "ink" | "light";
type Size = "sm" | "md" | "lg";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
};

/* El botón del diseño: píldora con el texto a la izquierda y la flecha de
   Phosphor dentro de un círculo pegado al borde derecho. */
const shell: Record<Variant, string> = {
  gold: "bg-gold-400 text-ink hover:bg-gold-300",
  outline:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
  navy: "bg-[#0D1B34] text-white hover:bg-[#16294a]",
  ink: "bg-ink text-gold-100 hover:bg-ink/85",
  light: "bg-white text-ink hover:bg-gold-100",
};

const bubble: Record<Variant, string> = {
  gold: "bg-ink text-gold-200",
  outline: "bg-white text-ink",
  navy: "bg-white text-[#0D1B34]",
  ink: "bg-gold-400 text-ink",
  light: "bg-ink text-white",
};

const sizing: Record<Size, { shell: string; bubble: string; icon: string }> = {
  sm: { shell: "h-8 pl-3.5 pr-1 text-[11.5px] gap-2", bubble: "w-6 h-6", icon: "w-3 h-3" },
  md: { shell: "h-9 pl-4 pr-1 text-[12.5px] gap-2.5", bubble: "w-7 h-7", icon: "w-3.5 h-3.5" },
  lg: { shell: "h-12 pl-6 pr-1.5 text-[14px] gap-3", bubble: "w-9 h-9", icon: "w-4 h-4" },
};

export function PillButton({
  href,
  children,
  variant = "gold",
  size = "md",
  className,
  external,
}: Props) {
  const s = sizing[size];
  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={clsx(
          "inline-flex items-center justify-center rounded-full shrink-0 transition-transform duration-200 group-hover:rotate-45",
          s.bubble,
          bubble[variant]
        )}
      >
        <ArrowUpRight className={s.icon} />
      </span>
    </>
  );

  const cls = clsx(
    "group inline-flex items-center rounded-full font-normal transition-colors duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    s.shell,
    shell[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
