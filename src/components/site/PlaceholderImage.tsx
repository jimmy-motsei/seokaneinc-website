type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-navy/20 bg-surface-light ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,166,35,0.28),transparent_55%),linear-gradient(135deg,rgba(27,42,107,0.08),rgba(234,232,240,0.6))]" />
      <div className="relative flex h-full min-h-56 items-center justify-center p-6 text-center">
        <p className="eyebrow text-navy">{label}</p>
      </div>
    </div>
  );
}
