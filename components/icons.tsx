/**
 * Iconos de Phosphor Icons (estilo Regular) trazados a mano como SVG inline.
 * Se copian los paths del set oficial en lugar de instalar @phosphor-icons/react
 * para no añadir una dependencia por dos iconos.
 * viewBox 0 0 256 256 y stroke-width 16 son los valores nativos del estilo Regular.
 */

type IconProps = {
  className?: string;
  /** Grosor del trazo en unidades del viewBox de 256. Regular = 16. */
  weight?: number;
};

export function ArrowUpRight({ className, weight = 16 }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="64" y1="192" x2="192" y2="64" />
      <polyline points="88 64 192 64 192 168" />
    </svg>
  );
}

export function CaretDown({ className, weight = 20 }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="208 96 128 176 48 96" />
    </svg>
  );
}

export function List({ className, weight = 16 }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="40" y1="128" x2="216" y2="128" />
      <line x1="40" y1="64" x2="216" y2="64" />
      <line x1="40" y1="192" x2="216" y2="192" />
    </svg>
  );
}

export function X({ className, weight = 16 }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="200" y1="56" x2="56" y2="200" />
      <line x1="56" y1="56" x2="200" y2="200" />
    </svg>
  );
}

export function ArrowRight({ className, weight = 16 }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="40" y1="128" x2="216" y2="128" />
      <polyline points="144 56 216 128 144 200" />
    </svg>
  );
}
