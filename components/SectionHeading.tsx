type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} gap-3 mb-10 sm:mb-14`}>
      {eyebrow && (
        <p className="font-hand text-2xl sm:text-3xl text-ink-soft -rotate-1">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-5xl squiggle-underline">
        {title}
      </h2>
      {lead && (
        <p className="max-w-2xl text-ink-soft text-base sm:text-lg mt-2">
          {lead}
        </p>
      )}
    </div>
  );
}
