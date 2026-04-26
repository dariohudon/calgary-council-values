export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-[#070b18] text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff4b4b]">
          Methodology
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          How the alignment score works.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Calgary Council Values Matcher compares public council votes against
          the sustainability domains you rank. The score is not a judgment of
          who is “best.” It is a transparent estimate of voting alignment based
          on reviewed public records.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            ["1", "You rank the 7 domains", "Economy, Education, Natural Environment, Resource Use, Wellness, Governance, and Community."],
            ["2", "Votes are reviewed", "Only meaningful civic decisions are classified. Procedural noise is excluded."],
            ["3", "Weights are applied", "Your ranked priorities become weighted criteria using a standard MCDA-style weighted model."],
            ["4", "Receipts remain visible", "Scores must trace back to actual votes, dates, domains, and classifications."],
          ].map(([num, title, body]) => (
            <article key={num} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 text-sm font-bold text-[#ff4b4b]">{num}</div>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{body}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 space-y-10 text-slate-300">
          <div>
            <h2 className="text-3xl font-bold text-white">Why MCDA?</h2>
            <p className="mt-4 leading-8">
              Multi-Criteria Decision Analysis is used when decisions involve
              multiple values that cannot be reduced to one simple measure. In
              this project, the criteria are Calgary’s 7 sustainability domains.
              The user’s ranking decides how important each domain is in the
              final comparison.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">Weighted Sum Model</h2>
            <p className="mt-4 leading-8">
              We use a transparent weighted sum approach: each reviewed vote is
              scored against the user’s domain priorities, then combined into an
              alignment percentage. The method is intentionally simple so it can
              be inspected, challenged, and improved.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">Why some scores are withheld</h2>
            <p className="mt-4 leading-8">
              A councillor must have at least 15 reviewed matched votes before a
              public alignment score is shown. If there are fewer than 15, the
              score is withheld pending sufficient reviewed vote history. Their
              vote receipts can still be shown, but they are not ranked beside
              councillors with stronger sample coverage.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">What this does not claim</h2>
            <p className="mt-4 leading-8">
              This tool does not determine who is the best councillor, who is
              most ethical, or who is most sustainable. It does not use campaign
              promises, speeches, or party-style labels. It compares reviewed
              public voting records against the values a user chooses.
            </p>
          </div>

          <div className="rounded-2xl border border-[#ff4b4b]/30 bg-[#ff4b4b]/10 p-6">
            <h2 className="text-2xl font-bold text-white">Scoring Model v0.1</h2>
            <p className="mt-3 leading-8">
              This methodology will be versioned. Any future change to weighting,
              thresholds, vote classifications, or exclusion rules should be
              documented publicly so the scoring model remains auditable.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

