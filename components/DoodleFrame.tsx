type DoodleFrameProps = {
  children: React.ReactNode;
  className?: string;
  /** Flips the wobble direction so neighbouring frames don't look cloned */
  alt?: boolean;
  /** Small rotation for a pinned-to-the-wall feel, e.g. "-rotate-1" */
  tilt?: string;
};

/** Wrapper with a hand-drawn wobbly ink border, like a sketchbook panel. */
export default function DoodleFrame({
  children,
  className = "",
  alt = false,
  tilt = "",
}: DoodleFrameProps) {
  return (
    <div
      className={`${alt ? "sketch-border-alt" : "sketch-border"} bg-paper ${tilt} ${className}`}
    >
      {children}
    </div>
  );
}
