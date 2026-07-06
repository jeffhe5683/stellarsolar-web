export default function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <circle cx="22" cy="22" r="9" fill="#FFAB63" />
        <path
          d="M22 4V10M22 34V40M4 22H10M34 22H40M9.3 9.3L13.5 13.5M30.5 30.5L34.7 34.7M34.7 9.3L30.5 13.5M13.5 30.5L9.3 34.7"
          stroke="#FFAB63"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M12 27H32L29 34H15L12 27Z"
          fill="#1E293B"
          stroke="#FFAB63"
          strokeWidth="1.5"
        />
        <path d="M17 27L15 34M22 27V34M27 27L29 34" stroke="#FFAB63" strokeWidth="1" />
      </svg>

      <div className="leading-none">
        <div className="text-xl font-semibold tracking-wide text-white">
          Stellar<span className="text-solar-400">Solar</span>
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/45">
          Energy Solutions
        </div>
      </div>
    </div>
  );
}
