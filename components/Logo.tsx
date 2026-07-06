type LogoProps = {
  /** Sets the overall scale via font-size, e.g. "text-3xl" or "text-7xl" */
  className?: string;
};

/**
 * Recreation of the Glen's Bakehouse signboard: ornate serif lettering
 * framed by hand-drawn filigree flourishes. Inherits currentColor so it
 * works ink-on-cream (header) and cream-on-ink (footer).
 */
export default function Logo({ className = "text-5xl" }: LogoProps) {
  return (
    <span
      className={`inline-flex flex-col items-center leading-none select-none ${className}`}
      aria-label="Glen's Bakehouse"
    >
      <FlourishLine className="w-[5.2em] h-[0.55em]" />
      <span className="font-display font-bold tracking-[0.06em] text-[1em] mt-[0.08em]">
        GLEN&rsquo;S
      </span>
      <span className="flex items-center gap-[0.35em] mt-[0.18em]">
        <FlourishCurl className="w-[1em] h-[0.5em]" />
        <span className="font-display tracking-[0.42em] text-[0.265em] translate-x-[0.21em]">
          BAKEHOUSE
        </span>
        <FlourishCurl className="w-[1em] h-[0.5em] -scale-x-100" />
      </span>
    </span>
  );
}

function FlourishLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 20 C 14 8 24 6 30 12 C 34 17 29 22 24 19 C 20 16 24 10 32 11 C 42 12 52 16 64 17 L 196 17 C 208 16 218 12 228 11 C 236 10 240 16 236 19 C 231 22 226 17 230 12 C 236 6 246 8 254 20" />
      <circle cx="130" cy="17" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FlourishCurl({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M46 12 L 20 12 C 12 12 6 8 8 4 C 10 1 15 3 13 7 C 11 12 5 14 2 12" />
    </svg>
  );
}
