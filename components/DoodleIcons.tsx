/**
 * Hand-drawn doodle icon set matching the ink-line wall art.
 * All icons are stroke-based (currentColor), 48x48 viewBox.
 */

export type DoodleIconName =
  | "croissant"
  | "cupcake"
  | "bread"
  | "cake"
  | "cheesecake"
  | "coffee"
  | "cookie"
  | "whisk"
  | "rollingpin"
  | "pie"
  | "wheat"
  | "heart"
  | "mappin"
  | "clock"
  | "phone"
  | "instagram";

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

function Svg({
  children,
  className = "w-10 h-10",
  strokeWidth = 2.2,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function CroissantIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M15 19 C 20 14.5 28 14.5 33 19 C 36 24 36 29 33 33 C 28 35.5 20 35.5 15 33 C 12 29 12 24 15 19 Z" />
      <path d="M15 19 C 9 20.5 5.5 26 8 32.5 L 12.5 36 C 13.5 35 14.5 34 15 33" />
      <path d="M33 19 C 39 20.5 42.5 26 40 32.5 L 35.5 36 C 34.5 35 33.5 34 33 33" />
      <path d="M20 17.5 C 19 23 19 29 20.5 34.5" />
      <path d="M28 17.5 C 29 23 29 29 27.5 34.5" />
    </Svg>
  );
}

export function CupcakeIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M13.5 28 L 16.5 40 L 31.5 40 L 34.5 28" />
      <path d="M19.5 29 L 21 39.5 M 24 29 L 24 39.5 M 28.5 29 L 27 39.5" />
      <path d="M12.5 28 C 9.5 22.5 13 19.5 16 20.5 C 14.5 15 21 11.5 24 15.5 C 26.5 10.5 34 13.5 32 19.5 C 36 19.5 38.5 24 35.5 28 Z" />
      <circle cx="24" cy="9.5" r="2" />
    </Svg>
  );
}

export function BreadIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M9 33 C 7 26 11.5 20 18 19 L 30 19 C 36.5 20 41 26 39 33 C 38.5 35.5 36.5 37 34 37 L 14 37 C 11.5 37 9.5 35.5 9 33 Z" />
      <path d="M17.5 23 L 21.5 27.5 M 24.5 22.5 L 28.5 27 M 31.5 23 L 34.5 26.5" />
    </Svg>
  );
}

export function CakeIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M10 40 L 10 33 C 10 32 11 31 12 31 L 36 31 C 37 31 38 32 38 33 L 38 40" />
      <path d="M8 40 L 40 40" />
      <path d="M14 31 L 14 24.5 C 14 23.5 15 23 16 23 L 32 23 C 33 23 34 23.5 34 24.5 L 34 31" />
      <path d="M18 23 L 18 17.5 C 18 16.5 19 16 20 16 L 28 16 C 29 16 30 16.5 30 17.5 L 30 23" />
      <path d="M10 34.5 q 2.3 -2.6 4.6 0 t 4.6 0 t 4.6 0 t 4.6 0 t 4.6 0 t 4.6 0" />
      <path d="M14 26.5 q 2.5 -2.4 5 0 t 5 0 t 5 0 t 5 0" />
      <path d="M24 16 L 24 11" />
      <path d="M24 11 C 22.5 9.5 23 7.5 24 6.5 C 25 7.5 25.5 9.5 24 11 Z" />
    </Svg>
  );
}

export function CheesecakeIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M8 38 L 38 24 C 40 30 41 34 41 38 Z" />
      <path d="M8 38 L 38 24 C 36 20 33 17.5 30 16.5 L 8 38" />
      <path d="M20 32 L 32 38 M 30 22 C 31.5 24 33 27 34 30" />
      <circle cx="30" cy="12" r="2.4" />
      <path d="M30 9.5 C 30 8 31.5 7.5 32 6.5" />
    </Svg>
  );
}

export function CoffeeIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M11 22 L 35 22 L 33 36 C 32.7 38 31 39.5 29 39.5 L 17 39.5 C 15 39.5 13.3 38 13 36 Z" />
      <path d="M35 24 C 40 23.5 41.5 31 33.8 32.5" />
      <path d="M18.5 17 C 17.5 14 20.5 13 19.5 9.5" />
      <path d="M26.5 17 C 25.5 14 28.5 13 27.5 9.5" />
    </Svg>
  );
}

export function CookieIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M24 8.5 C 32.5 8 39.5 14.5 39.5 23.5 C 39.5 32.5 33 39.5 24 39.5 C 15 39.5 8.5 32.5 8.5 23.5 C 8.5 15 15.5 9 24 8.5 Z" />
      <circle cx="18.5" cy="18.5" r="1.4" fill="currentColor" />
      <circle cx="28.5" cy="16.5" r="1.4" fill="currentColor" />
      <circle cx="31.5" cy="26.5" r="1.4" fill="currentColor" />
      <circle cx="20.5" cy="29.5" r="1.4" fill="currentColor" />
      <circle cx="25.5" cy="33.5" r="1.4" fill="currentColor" />
      <path d="M24 23 L 26 25" />
    </Svg>
  );
}

export function WhiskIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M24 6 L 24 15" />
      <path d="M21 13.5 L 27 13.5" />
      <path d="M24 15 C 15.5 19 15.5 32 24 41 C 32.5 32 32.5 19 24 15 Z" />
      <path d="M24 15 C 20 21 20 33 24 41" />
      <path d="M24 15 C 28 21 28 33 24 41" />
    </Svg>
  );
}

export function RollingPinIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="12" y="19" width="24" height="10" rx="5" />
      <path d="M4 24 L 12 24 M 36 24 L 44 24" />
      <path d="M18 22 C 19 23.5 19 24.5 18 26 M 25 22 C 26 23.5 26 24.5 25 26 M 31 22 C 32 23.5 32 24.5 31 26" />
    </Svg>
  );
}

export function PieIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M8 27 C 8 20.5 15 16.5 24 16.5 C 33 16.5 40 20.5 40 27" />
      <path d="M7 27 q 2.4 -3 4.8 0 t 4.8 0 t 4.8 0 t 4.8 0 t 4.8 0 t 4.8 0 t 4.8 0" />
      <path d="M10 29.5 L 12 35 C 12.7 36.8 14.3 38 16.2 38 L 31.8 38 C 33.7 38 35.3 36.8 36 35 L 38 29.5" />
      <path d="M19 10.5 C 18 8.5 20 7.5 19.5 5.5 M 27 10.5 C 26 8.5 28 7.5 27.5 5.5" />
    </Svg>
  );
}

export function WheatIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M24 42 C 24 32 24 22 24 14" />
      <path d="M24 20 C 19.5 18.5 17 14.5 17.8 9.5 C 22.5 11.5 24.5 15.5 24 20 Z" />
      <path d="M24 20 C 28.5 18.5 31 14.5 30.2 9.5 C 25.5 11.5 23.5 15.5 24 20 Z" />
      <path d="M24 29 C 19.5 27.5 17 23.5 17.8 18.5 C 22.5 20.5 24.5 24.5 24 29 Z" />
      <path d="M24 29 C 28.5 27.5 31 23.5 30.2 18.5 C 25.5 20.5 23.5 24.5 24 29 Z" />
      <path d="M24 14 C 23 11 24.5 8 26.5 6" />
    </Svg>
  );
}

export function HeartIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M24 39.5 C 12 31 7.5 23.5 10 16.5 C 12 11 19.5 9.5 24 15.5 C 28.5 9.5 36 11 38 16.5 C 40.5 23.5 36 31 24 39.5 Z" />
      <path d="M15 17 C 13.8 18 13.2 19.5 13.4 21" />
    </Svg>
  );
}

export function MapPinIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M24 41.5 C 15.5 32 10.5 25 12 17.5 C 13.3 11 18 7 24 7 C 30 7 34.7 11 36 17.5 C 37.5 25 32.5 32 24 41.5 Z" />
      <circle cx="24" cy="19" r="5" />
    </Svg>
  );
}

export function ClockIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M24 7.5 C 33 7 40.5 14.5 40.5 24 C 40.5 33.5 33 41 24 41 C 15 41 7.5 33.5 7.5 24 C 7.5 15 15 8 24 7.5 Z" />
      <path d="M24 14 L 24 24 L 31 28" />
    </Svg>
  );
}

export function PhoneIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 8.5 C 9 10.5 8 14 9.5 18.5 C 12.5 27.5 20.5 35.5 29.5 38.5 C 34 40 37.5 39 39.5 36 C 40.3 34.6 40 33 38.7 32 L 33.5 28.3 C 32.3 27.4 30.7 27.6 29.7 28.7 L 28 30.7 C 24 28.5 20 24.5 17.5 20.3 L 19.5 18.3 C 20.6 17.3 20.8 15.7 19.9 14.5 L 16 9.3 C 15 8 13.4 7.7 12 8.5 Z" />
    </Svg>
  );
}

export function InstagramIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M15 9 L 33 9 C 36.5 9.2 39 12 39 15.5 L 39 32.5 C 38.8 36 36 38.8 32.5 39 L 15.5 39 C 12 38.8 9.2 36 9 32.5 L 9 15 C 9.3 11.7 11.7 9.2 15 9 Z" />
      <circle cx="24" cy="24" r="7" />
      <circle cx="33.5" cy="14.5" r="1.6" fill="currentColor" />
    </Svg>
  );
}

const ICONS: Record<DoodleIconName, (p: IconProps) => React.ReactNode> = {
  croissant: CroissantIcon,
  cupcake: CupcakeIcon,
  bread: BreadIcon,
  cake: CakeIcon,
  cheesecake: CheesecakeIcon,
  coffee: CoffeeIcon,
  cookie: CookieIcon,
  whisk: WhiskIcon,
  rollingpin: RollingPinIcon,
  pie: PieIcon,
  wheat: WheatIcon,
  heart: HeartIcon,
  mappin: MapPinIcon,
  clock: ClockIcon,
  phone: PhoneIcon,
  instagram: InstagramIcon,
};

export function DoodleIcon({
  name,
  ...props
}: IconProps & { name: DoodleIconName }) {
  const Icon = ICONS[name];
  return <Icon {...props} />;
}
