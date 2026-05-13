import MethodologyNav from "@/components/MethodologyNav";

export default function DataSourcesPage() {
  return (
    <main className="min-h-screen bg-[#070b18] text-white">
      <MethodologyNav />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff4b4b]">
          Methodology
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
          Data Sources
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Calgary Council Values is built primarily from publicly available City
          of Calgary voting records and meeting documentation.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          Primary source materials may include:
        </p>

        <ul className="mt-4 space-y-2 pl-1">
          {[
            "council voting records",
            "committee voting records",
            "meeting agendas",
            "public reports",
            "amendments",
            "procedural motions",
            "council minutes",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-400">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-16 space-y-12 text-slate-400">

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Public does not always mean understandable</h2>
            <p className="mt-4 leading-8">
              Although council voting records are public, they are often
              difficult for residents to navigate in practice.
            </p>
            <p className="mt-4 leading-8">
              Information may exist across multiple systems, report formats,
              meeting structures, and procedural layers that require significant
              civic-process familiarity to interpret consistently.
            </p>
            <p className="mt-4 leading-8">
              This project exists to help organize, visualize, and contextualize
              that information in a more understandable way.
            </p>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Manual review and verification</h2>
            <p className="mt-4 leading-8">
              Reviewed votes are manually assessed before entering the scoring
              system.
            </p>
            <p className="mt-4 leading-8">This process may include:</p>
            <ul className="mt-4 space-y-2 pl-1">
              {[
                "duplicate detection",
                "report verification",
                "date verification",
                "procedural filtering",
                "domain classification",
                "directional classification",
                "confidence review",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-8">
              The objective is not political persuasion.
            </p>
            <p className="mt-2 leading-8">
              The objective is transparent civic interpretation.
            </p>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Independent project</h2>
            <p className="mt-4 leading-8">
              Calgary Council Values is an independent civic visualization
              project and is not affiliated with:
            </p>
            <ul className="mt-4 space-y-2 pl-1">
              {[
                "The City of Calgary",
                "Sustainable Calgary",
                "any political campaign",
                "any elected official",
                "any advocacy organization",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-8">
              This project exists to improve public visibility into council
              voting behaviour through explainable civic analysis.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
