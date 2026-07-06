import { DoodleIcon, type DoodleIconName } from "./DoodleIcons";

const SQUIGGLE = `M0 8 ${Array.from(
  { length: 30 },
  (_, i) => `Q ${i * 16 + 8} ${i % 2 === 0 ? 2 : 14} ${(i + 1) * 16} 8`
).join(" ")}`;

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 16"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d={SQUIGGLE} />
    </svg>
  );
}

/** Hand-drawn wavy divider with an optional doodle icon in the middle. */
export default function SectionDivider({
  icon,
  className = "text-ink-soft",
}: {
  icon?: DoodleIconName;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <Squiggle className="h-3 w-24 sm:w-40" />
      {icon && <DoodleIcon name={icon} className="w-8 h-8 shrink-0" />}
      <Squiggle className="h-3 w-24 sm:w-40" />
    </div>
  );
}
