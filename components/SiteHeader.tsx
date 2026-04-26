import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Methodology", href: "/methodology" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#070b18]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.35em] text-[#ff6b5f]"
        >
          Calgary Council Values
        </Link>

        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}