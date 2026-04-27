import AvatarGroup from "./AvatarGroup.jsx";
import PhoneMockup from "./PhoneMockup.jsx";
import BackgroundCubes from "./BackgroundCubes.jsx";

function AppleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.365 1.43c0 1.14-.456 2.23-1.196 3.04-.79.86-2.06 1.52-3.1 1.43-.13-1.1.41-2.23 1.13-2.94.81-.81 2.18-1.42 3.16-1.53zM20.5 17.4c-.55 1.27-.81 1.83-1.52 2.95-.99 1.55-2.39 3.49-4.12 3.5-1.54.02-1.93-1-4.02-.99-2.09.01-2.52 1.01-4.06.99-1.73-.02-3.05-1.77-4.04-3.32C.05 16.97-.42 11.7 1.65 8.96c1.46-1.94 3.77-3.07 5.94-3.07 2.21 0 3.6 1.21 5.43 1.21 1.78 0 2.86-1.21 5.42-1.21 1.93 0 3.97 1.05 5.43 2.86-4.77 2.61-3.99 9.43-2.37 8.65z" />
    </svg>
  );
}

function ArrowRightThin() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-24 lg:px-10">
        {/* Trust pill */}
        <div className="flex justify-center">
          <div className="flex items-center gap-3 rounded-full bg-white/60 px-3 py-1.5 ring-1 ring-black/5 backdrop-blur-sm">
            <AvatarGroup />
            <span className="pr-2 text-[13px] font-medium text-ink/80">
              Trusted by thousands of healthy families
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mx-auto mt-8 max-w-4xl text-center font-display text-[56px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[68px] md:text-[80px]">
          The Safest Way to
          <br />
          Shop for Groceries
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-center text-[15px] leading-[1.65] text-ink/75 sm:text-[16px]">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          Ingredients from Your Family's Diet and Get Expert-Backed Food
          Insights
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-olive-700 px-6 py-3 text-[14px] font-semibold text-cream shadow-sm transition hover:bg-olive-800"
          >
            <AppleIcon />
            Download for iOS
          </a>
          <a
            href="#community"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink transition hover:text-olive-700"
          >
            Join the Olive Community
            <ArrowRightThin />
          </a>
        </div>

        {/* Phone + ambient cubes */}
        <div className="relative mt-16 flex items-end justify-center">
          <BackgroundCubes />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
