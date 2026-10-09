interface ZoneIconProps {
  size?: number;
  className?: string;
}

const base = (size: number, className?: string) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  'aria-hidden': true,
});

export const ZoneBikini = ({ size = 24, className }: ZoneIconProps) => (
  <svg {...base(size, className)}>
    <path d="M12 21.5s7.5-3.5 7.5-9.5V5.5L12 2.5 4.5 5.5V12c0 6 7.5 9.5 7.5 9.5z" />
    <path d="M12 8.5l.9 2.2 2.3.3-1.7 1.6.5 2.3-2-1.2-2 1.2.5-2.3-1.7-1.6 2.3-.3z" />
  </svg>
);

export const ZoneLegs = ({ size = 24, className }: ZoneIconProps) => (
  <svg {...base(size, className)}>
    <path d="M6.5 2.5h11l-1 19h-3.6L12 10.5l-.9 11H7.5z" />
    <path d="M6.6 6h10.8" />
  </svg>
);

export const ZoneArms = ({ size = 24, className }: ZoneIconProps) => (
  <svg {...base(size, className)}>
    <path d="M2.5 20H13a3 3 0 0 0 3-3V8.5" />
    <path d="M2.5 14.5c1.6-3 4.3-3.9 6.8-2.8.8.3 1.7-.2 1.7-1.1V8.5" />
    <rect x="9.5" y="2.5" width="8" height="6" rx="2.2" />
  </svg>
);
