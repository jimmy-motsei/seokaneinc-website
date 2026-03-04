interface SeokaneSymbolProps {
  color?: string;
  size?: number;
  className?: string;
}

/**
 * Seokane Inc. symbol — SVG recreation of the brand mark.
 * Three-part composition: diagonal swoosh + teardrop dot + corner arc.
 * Default colour: Lexor Amber Yellow (#d2a647).
 */
export function SeokaneSymbol({
  color = "#d2a647",
  size = 36,
  className = "",
}: SeokaneSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Teardrop / comma — upper right */}
      <path
        fill={color}
        d="M77 12C87 11 95 19 94 28C93 37 85 43 76 41C67 39 62 29 65 20C67 13 72 12 77 12Z"
      />

      {/* Main diagonal swoosh — blade / wing shape */}
      <path
        fill={color}
        d="M13 68C21 52 45 29 67 22C79 18 90 23 91 35C92 46 84 58 71 65C52 73 27 73 17 70C14 69 12 69 13 68Z"
      />

      {/* Bottom-left corner arc */}
      <path
        fill={color}
        d="M13 76L40 76C39 88 29 96 13 96Z"
      />
    </svg>
  );
}
