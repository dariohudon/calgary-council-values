import Link from "next/link";

const links = [
  { label: "Overview", href: "/methodology" },
  { label: "The 7 Civic Domains", href: "/methodology/domains" },
  { label: "How Classification Works", href: "/methodology/classification" },
  { label: "Scoring & Transparency", href: "/methodology/scoring" },
  { label: "Data Sources", href: "/methodology/data-sources" },
];

export default function MethodologyNav() {
  return (
    <nav className="border-b border-white/[0.06] bg-white/[0.02]">
      {/* Mobile: horizontally scrollable chips */}
      <div className="flex gap-2 overflow-x-auto px-6 py-3 md:hidden" style={{ scrollbarWidth: "none" }}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Desktop: inline flex row */}
      <div className="mx-auto hidden max-w-5xl px-8 py-4 md:block">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
