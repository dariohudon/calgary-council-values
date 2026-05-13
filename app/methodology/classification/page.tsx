import MethodologyNav from "@/components/MethodologyNav";

export default function ClassificationPage() {
  return (
    <main className="min-h-screen bg-[#070b18] text-white">
      <MethodologyNav />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff4b4b]">
          Methodology
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
          How Classification Works
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Council decisions are not imported into the system automatically.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          Each reviewed item is manually evaluated before entering the scoring
          framework.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          The goal is not to classify every council motion ever recorded. The
          goal is to identify decisions with meaningful civic impact that can be
          reasonably compared against public priorities.
        </p>

        <div className="mt-16 space-y-12 text-slate-400">

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">What gets reviewed</h2>
            <p className="mt-4 leading-8">
              The system focuses primarily on substantive civic decisions
              involving areas such as:
            </p>
            <ul className="mt-4 space-y-2 pl-1">
              {[
                "housing",
                "taxation",
                "transportation",
                "public safety",
                "governance",
                "land use",
                "infrastructure",
                "environmental policy",
                "affordability",
                "public services",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-8">
              Low-signal procedural motions, administrative approvals, duplicate
              records, ceremonial items, and technical housekeeping decisions are
              generally excluded.
            </p>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">One vote, one primary domain</h2>
            <p className="mt-4 leading-8">
              Many council decisions affect multiple parts of city life
              simultaneously.
            </p>
            <p className="mt-4 leading-8">
              For scoring consistency, each reviewed item receives one primary
              civic domain classification based on its dominant direct impact.
            </p>
            <p className="mt-4 leading-8">
              This creates a stable and explainable framework for comparison
              over time.
            </p>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Directional classification</h2>
            <p className="mt-4 leading-8">
              Reviewed votes may also receive a directional classification:
            </p>
            <div className="mt-6 space-y-4">
              {[
                { label: "Support", desc: "A Yes vote on this motion advances the civic interest associated with its domain." },
                { label: "Oppose", desc: "A Yes vote on this motion works against the civic interest associated with its domain." },
                { label: "Context Required", desc: "The motion cannot be defensibly simplified into a directional alignment signal without creating misleading conclusions." },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <p className="font-semibold text-white">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-8">
              Context Required votes remain visible as public receipts but do
              not contribute to alignment scoring.
            </p>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Human review matters</h2>
            <p className="mt-4 leading-8">
              The system intentionally avoids fully automated political
              classification.
            </p>
            <p className="mt-4 leading-8">
              Council decisions are often nuanced, overlapping, and
              context-dependent.
            </p>
            <p className="mt-4 leading-8">Manual review allows:</p>
            <ul className="mt-4 space-y-2 pl-1">
              {[
                "duplicate detection",
                "contextual interpretation",
                "procedural filtering",
                "classification consistency",
                "auditability",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-8">
              The objective is not perfect objectivity.
            </p>
            <p className="mt-2 leading-8">
              The objective is transparent and explainable consistency.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
