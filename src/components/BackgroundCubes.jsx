function Cube({ className = "", size = 90 }) {
  return (
    <div
      className={`absolute rounded-[14px] bg-white/55 shadow-[0_18px_40px_-18px_rgba(20,25,10,0.18)] ring-1 ring-black/[0.04] backdrop-blur-[2px] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export default function BackgroundCubes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Cube className="left-[6%] top-[8%]" size={110} />
      <Cube className="left-[18%] top-[42%]" size={85} />
      <Cube className="right-[8%] top-[10%]" size={120} />
      <Cube className="right-[20%] top-[46%]" size={80} />
      <Cube className="left-[2%] bottom-[6%] hidden md:block" size={70} />
      <Cube className="right-[4%] bottom-[8%] hidden md:block" size={75} />
    </div>
  );
}
