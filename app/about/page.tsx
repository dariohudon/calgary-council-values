import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020B1C] text-white">
      {/* Top Navigation */}


      {/* Content */}
      <section className="mx-auto max-w-4xl px-8 py-24">
        <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#E85D4A] uppercase">
          About The Method
        </p>

        <h1 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
          Transparent Scores.
          <br />
          Real Voting Records.
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-white/80">
          <p>
            Calgary Council Values Matcher helps residents understand which
            elected officials vote most closely to their own civic priorities.
            It does not score politicians based on promises, campaigns, or
            opinions — only public voting records.
          </p>

          <p>
            The methodology is based on{" "}
            <strong className="text-white">
              Multi-Criteria Decision Analysis (MCDA)
            </strong>{" "}
            using a{" "}
            <strong className="text-white">
              Weighted Sum Model (WSM)
            </strong>
            , a standard framework commonly used in public policy, sustainability
            assessment, and decision-making systems.
          </p>

          <p>
            Users rank Calgary’s 7 sustainability domains — Economy, Education,
            Natural Environment, Resource Use, Wellness, Governance, and
            Community — in the order that matters most to them. Those priorities
            become weighted inputs.
          </p>

          <p>
            Council votes are then reviewed, classified, and matched against
            those priorities. Higher-impact decisions such as housing,
            transportation, climate policy, taxation, and public safety carry
            more weight than procedural or administrative motions.
          </p>

          <p>
            Every score must be explainable. Every result must be traceable.
            The score is not the product — the receipts are.
          </p>
        </div>
      </section>
    </main>
  );
}
