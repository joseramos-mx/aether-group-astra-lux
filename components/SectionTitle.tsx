import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
};

export function SectionTitle({
  title,
  description,
  align = "center",
}: Props) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={
        isCenter ? "max-w-2xl mx-auto text-center" : "max-w-2xl text-left"
      }
    >
      <h2 className="h2 mb-3">{title}</h2>
      {description && (
        <p className="text-brand-muted text-base md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
