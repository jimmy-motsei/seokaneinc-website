type PlaceholderImageProps = {
  label: string;
  className?: string;
  square?: boolean; // removes rounded-xl and border for full-bleed / flush contexts
  dark?: boolean;   // dark cool gradient — for use on dark/navy backgrounds (e.g. hero portrait)
};

export function PlaceholderImage({
  label,
  className = "",
  square = false,
  dark = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${dark ? "bg-[var(--color-navy-dark)]" : "bg-[#e8e8ec]"} ${square ? "" : "rounded-none border border-[var(--color-surface-dark)]"} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className={`absolute inset-0 ${dark ? "ph-gradient-dark" : "ph-gradient"}`} />
      <div className="relative flex h-full min-h-56 items-center justify-center p-6 text-center">
        <p className={`eyebrow ${dark ? "text-white/40" : "text-navy"}`}>{label}</p>
      </div>
    </div>
  );
}
