import MethodologyNav from "@/components/MethodologyNav";

export default function ScoringPage() {
  return (
    <main className="min-h-screen bg-[#070b18] text-white">
      <MethodologyNav />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff4b4b]">
          Methodology
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
          Scoring &amp; Transparency
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Calgary Council Values compares reviewed public voting records against
          the civic priorities selected by the user.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          The platform does not evaluate campaign promises, interviews, speeches,
          endorsements, party affiliation, or social media messaging.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          The system evaluates public voting behaviour.
        </p>

        <div className="mt-16 space-y-12 text-slate-400">

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Weighted civic priorities</h2>
            <p className="mt-4 leading-8">
              Users rank Calgary's 7 civic domains based on personal importance.
            </p>
            <p className="mt-4 leading-8">
              Those rankings become weighted inputs within the scoring system.
            </p>
            <p className="mt-4 leading-8">
              Votes connected to higher-priority domains contribute more strongly
              to the final alignment calculation than lower-priority domains.
            </p>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Score confidence levels</h2>
            <p className="mt-4 leading-8">
              Public scores are displayed using confidence tiers based on
              reviewed matched vote history.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  label: "Verified Score",
                  threshold: "15+ reviewed matched votes",
                  color: "text-emerald-400",
                  border: "border-emerald-900/30",
                  desc: "The sample is large enough to support a public ranking with reasonable confidence.",
                },
                {
                  label: "Preliminary Signal",
                  threshold: "5–14 reviewed matched votes",
                  color: "text-amber-400",
                  border: "border-amber-900/30",
                  desc: "A score is shown but marked as early-stage. The direction may shift as more votes are reviewed.",
                },
                {
                  label: "Insufficient Data",
                  threshold: "Fewer than 5 reviewed matched votes",
                  color: "text-slate-400",
                  border: "border-white/[0.06]",
                  desc: "No score is generated. The councillor appears on the page but is not ranked.",
                },
              ].map(({ label, threshold, color, border, desc }) => (
                <div
                  key={label}
                  className={`rounded-xl border ${border} bg-white/[0.02] p-5`}
                >
                  <p className={`font-semibold ${color}`}>{label}</p>
                  <p className="mt-1 text-xs text-slate-500">{threshold}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-8">
              Preliminary signals are visible for transparency, but may shift as
              additional public voting records are reviewed over time.
            </p>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Receipts-first transparency</h2>
            <p className="mt-4 leading-8">
              Every score should eventually connect back to:
            </p>
            <ul className="mt-4 space-y-2 pl-1">
              {[
                "the original motion",
                "the meeting date",
                "the councillor vote",
                "the domain classification",
                "the directional classification",
                "the confidence tier",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-8">
              If a score cannot be explained publicly, it should not exist.
            </p>
            <p className="mt-4 font-medium text-white">The score is not the product.</p>
            <p className="mt-1 font-medium text-white">The receipts are.</p>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Current limitations</h2>
            <p className="mt-4 leading-8">
              The platform only evaluates reviewed public voting records
              currently available in the dataset.
            </p>
            <p className="mt-4 leading-8">
              Some domains currently contain fewer reviewed votes than others.
            </p>
            <p className="mt-4 leading-8">
              For example, Education-related municipal votes are presently
              underrepresented because municipalities have more limited authority
              in that area compared to provincial governments.
            </p>
            <p className="mt-4 leading-8">
              As additional council voting records are reviewed over time, score
              confidence and domain coverage continue improving.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
