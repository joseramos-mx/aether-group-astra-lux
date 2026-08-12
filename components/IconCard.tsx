import type { ReactNode } from "react";
import { StaggerItem } from "./Reveal";

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export function IconCard({ icon, title, children }: Props) {
  return (
    <StaggerItem className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="h3 text-brand-text mb-2">{title}</h3>
      <p className="text-brand-muted text-sm">{children}</p>
    </StaggerItem>
  );
}

export function StepCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <StaggerItem className="card">
      <div className="card-icon text-lg">{number}</div>
      <h3 className="h3 text-brand-text mb-2">{title}</h3>
      <p className="text-brand-muted text-sm">{children}</p>
    </StaggerItem>
  );
}
