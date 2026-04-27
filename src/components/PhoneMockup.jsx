function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10z"
        stroke="#3E4A22"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 16V4m0 0L8 8m4-4 4 4M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
        stroke="#3E4A22"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrackerBox() {
  // Decorative product box illustration
  return (
    <div className="relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-[#E9DFC8] to-[#C9B98C] ring-1 ring-black/10">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#7A4E2D]" />
      <div className="absolute inset-x-0 bottom-0 h-2 bg-[#5A3B1F]" />
      <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white/80 ring-1 ring-black/5">
        <div className="mx-auto mt-1 h-1 w-5 rounded-full bg-[#5A3B1F]/70" />
        <div className="mx-auto mt-0.5 h-1 w-4 rounded-full bg-[#7A4E2D]/70" />
        <div className="mx-auto mt-1.5 h-2 w-2 rounded-full bg-[#8B2E2E]" />
      </div>
      <div className="absolute bottom-2.5 left-1.5 right-1.5 flex justify-center gap-0.5">
        <span className="h-0.5 w-3 rounded-full bg-[#5A3B1F]/60" />
        <span className="h-0.5 w-2 rounded-full bg-[#5A3B1F]/40" />
      </div>
    </div>
  );
}

function ScoreBadge() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#C0392B] text-white shadow-sm">
        <span className="text-[13px] font-bold leading-none">46</span>
        <span className="text-[8px] font-semibold leading-none opacity-90">
          /100
        </span>
        <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] ring-1 ring-black/5">
          <span className="text-[#C0392B]">✕</span>
        </span>
      </div>
      <span className="mt-1 text-[10px] font-semibold text-[#C0392B]">
        Avoid
      </span>
    </div>
  );
}

function OliverAvatar() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-olive-100 ring-1 ring-olive-600/20">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="14" rx="7" ry="8" fill="#5A6A36" />
        <path
          d="M13 6 C 11 3, 8 2, 5 3 C 7.5 4.5, 9.5 6, 11 8"
          fill="#3E4A22"
        />
      </svg>
    </div>
  );
}

export default function PhoneMockup() {
  return (
    <div className="relative z-10 mx-auto">
      {/* Phone frame */}
      <div className="relative h-[520px] w-[260px] rounded-[44px] bg-[#1F2410] p-[6px] shadow-phone sm:h-[560px] sm:w-[280px]">
        {/* Side buttons */}
        <span className="absolute left-[-2px] top-[110px] h-7 w-[3px] rounded-l-md bg-[#1F2410]" />
        <span className="absolute left-[-2px] top-[155px] h-12 w-[3px] rounded-l-md bg-[#1F2410]" />
        <span className="absolute left-[-2px] top-[210px] h-12 w-[3px] rounded-l-md bg-[#1F2410]" />
        <span className="absolute right-[-2px] top-[170px] h-16 w-[3px] rounded-r-md bg-[#1F2410]" />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#FAF7EF]">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-black" />

          {/* Status bar spacer */}
          <div className="h-9" />

          {/* Top product card area */}
          <div className="px-4">
            <div className="flex items-start gap-3 rounded-2xl bg-[#F1ECDD] p-3">
              <CrackerBox />
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="font-display text-[14px] font-bold leading-[1.2] text-ink">
                  Fig and Olive Crackers, Fig
                  <br />
                  and Olive
                </h3>
                <p className="mt-1 text-[11px] text-ink/60">Lesley Stowe</p>
                <div className="mt-2 flex items-center justify-between">
                  <ScoreBadge />
                  <div className="flex items-center gap-2 pr-1">
                    <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                      <HeartIcon />
                    </button>
                    <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                      <ShareIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Oliver Says */}
          <div className="mt-3 px-4">
            <div className="flex items-center gap-2">
              <OliverAvatar />
              <span className="text-[12px] font-semibold text-ink">
                Oliver Says:
              </span>
            </div>
            <p className="mt-2 text-[11px] leading-[1.55] text-ink/75">
              "This product's low score mainly comes from the processed sugars.
              Like honey and brown sugar, which can impact your family's health
              when consumed regularly, especially for kids who are still
              developing. Additionally, there are several additives that aren't
              ideal for your goal of avoiding processed foods, making this a
              choice to consider more carefully."
            </p>
          </div>

          {/* Breakdown header peek */}
          <div className="absolute inset-x-4 bottom-3">
            <h4 className="font-display text-[14px] font-bold text-ink">
              Breakdown
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
