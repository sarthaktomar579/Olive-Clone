import Logo from "./Logo.jsx";

const NAV_ITEMS = [
  { label: "Solutions", hasMenu: true },
  { label: "Features", hasMenu: true },
  { label: "Pricing", hasMenu: false },
  { label: "Blog", hasMenu: true },
  { label: "Restaurants", hasMenu: false },
  { label: "Food", hasMenu: true },
];

function Caret() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      className="opacity-70"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 11L11 5M11 5H6M11 5V10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Logo />

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className="flex items-center gap-1 text-[15px] font-medium text-ink/85 transition hover:text-ink"
              >
                {item.label}
                {item.hasMenu && <Caret />}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <a
            href="#signin"
            className="hidden text-[15px] font-medium text-ink/85 transition hover:text-ink sm:inline"
          >
            Sign in
          </a>
          <a
            href="#get-olive"
            className="group inline-flex items-center gap-2 rounded-full bg-olive-700 px-5 py-2.5 text-[14px] font-semibold text-cream shadow-sm transition hover:bg-olive-800"
          >
            Get Olive
            <ArrowUpRight />
          </a>
        </div>
      </nav>
    </header>
  );
}
