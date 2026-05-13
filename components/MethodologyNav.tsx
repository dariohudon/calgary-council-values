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
      <div className="mx-auto max-w-5xl px-8 py-4">
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
