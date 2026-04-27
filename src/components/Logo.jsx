export default function Logo({ className = "" }) {
  return (
    <a href="#" className={`flex items-center gap-1.5 select-none ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="oliveGrad" x1="0.2" y1="0.1" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#B7CC72" />
            <stop offset="55%" stopColor="#7E9243" />
            <stop offset="100%" stopColor="#48571E" />
          </linearGradient>
          <radialGradient id="oliveHi" cx="0.35" cy="0.3" r="0.35">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <ellipse cx="32" cy="38" rx="20" ry="22" fill="url(#oliveGrad)" />
        <ellipse cx="26" cy="30" rx="10" ry="12" fill="url(#oliveHi)" />
        <path
          d="M33 18 C 30 9, 23 5, 14 7 C 21 11, 27 15, 31 22 Z"
          fill="#3E4A22"
        />
        <path
          d="M16 9 C 20 11, 26 15, 30 21"
          stroke="#2E3818"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-[28px] font-semibold tracking-tight text-ink leading-none">
        live
      </span>
    </a>
  );
}
