"use client";

import { useMemo, useState } from "react";

type Domain = {
  name: string;
  description: string;
};

export type CouncillorScore = {
  name: string;
  reviewedVotesMatched: number;
  minimumVotesRequired: number;
  isEligibleForPublicScore: boolean;
  alignmentScore: number | null;
  scoreStatus: string;
};

const initialDomains: Domain[] = [
  { name: "Resource Use", description: "Transit, utilities, infrastructure" },
  { name: "Economy", description: "Taxes, affordability, investment" },
  { name: "Education", description: "Youth, learning, opportunity" },
  { name: "Natural Environment", description: "Climate, parks, resilience" },
  { name: "Wellness", description: "Housing, safety, health" },
  { name: "Governance", description: "Transparency, accountability" },
  { name: "Community", description: "Neighbourhoods, belonging" },
];

export default function HomeClient({
  councillorData,
}: {
  councillorData: CouncillorScore[];
}) {
  const [domains, setDomains] = useState<Domain[]>(initialDomains);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const eligibleCouncillors = useMemo(
    () =>
      councillorData
        .filter((c) => c.isEligibleForPublicScore)
        .sort((a, b) => (b.alignmentScore ?? 0) - (a.alignmentScore ?? 0)),
    [councillorData]
  );

  const withheldCouncillors = useMemo(
    () => councillorData.filter((c) => !c.isEligibleForPublicScore),
    [councillorData]
  );

  function moveDomain(fromIndex: number, toIndex: number) {
    const next = [...domains];
    const [moved] = next.splice(fromIndex, 1);
    next.splice(toIndex, 0, moved);
    setDomains(next);
  }

  function handleFindMatch() {
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-[#070B18] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-red-300">
            Calgary Council Values Matcher
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
            Vote Records.
            <br />
            Not Campaign Promises.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Explore how Calgary City Council voted on the issues that matter most
            to you. Scores are based on reviewed public voting records.
          </p>

          <button
            onClick={handleFindMatch}
            className="mt-10 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            View Alignment Scores →
          </button>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                Step 1
              </p>
              <h2 className="text-3xl font-semibold">Rank Your Values</h2>
              <p className="mt-3 max-w-3xl text-slate-400">
                Explore how the seven civic domains are used in the methodology.
                Personalized weighting is a planned next step.
              </p>
            </div>

            <button
              onClick={handleFindMatch}
              className="w-fit rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              See Results →
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-7">
            {domains.map((domain, index) => {
              const isFirst = index === 0;

              return (
                <div
                  key={domain.name}
                  draggable
                  onDragStart={() => setDraggedIndex(index)}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={() => {
                    if (draggedIndex === null || draggedIndex === index) return;
                    moveDomain(draggedIndex, index);
                    setDraggedIndex(null);
                  }}
                  onDragEnd={() => setDraggedIndex(null)}
                  className={`min-h-36 cursor-grab rounded-2xl border p-4 transition active:cursor-grabbing ${
                    draggedIndex === index
                      ? "border-red-300/50 bg-white/10 opacity-70"
                      : isFirst
                        ? "border-dashed border-red-400 bg-red-500/5 hover:bg-red-500/10"
                        : "border-white/10 bg-white/[0.04] hover:border-red-300/40 hover:bg-white/[0.07]"
                  }`}
                >
                  {isFirst ? (
                    <div className="flex h-full min-h-28 flex-col items-center justify-center text-center">
                      <span className="text-sm font-semibold text-red-300">
                        01
                      </span>

                      <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-red-300 text-xs font-semibold uppercase tracking-[0.16em] text-red-300">
                        Drag
                      </div>

                      <h3 className="mt-4 text-base font-semibold leading-tight">
                        {domain.name}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        {domain.description}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-semibold text-red-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold leading-tight">
                        {domain.name}
                      </h3>

                      <p className="mt-3 text-xs leading-relaxed text-slate-400">
                        {domain.description}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="results" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
              Step 2
            </p>

            <h2 className="text-3xl font-semibold">Alignment Results</h2>

            <p className="mt-4 text-slate-400">
              Current public alignment scores based on reviewed public voting
              records. Scores use default methodology weighting across all 7
              domains. Personalized weighting is a planned next step.
            </p>
          </div>

          {/* Eligible councillors with public scores */}
          <div className="grid gap-6 md:grid-cols-3">
            {eligibleCouncillors.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm text-slate-400">
                  {person.reviewedVotesMatched} reviewed votes matched
                </p>

                <h3 className="mt-2 text-2xl font-semibold">{person.name}</h3>

                <div className="mt-6">
                  <p className="text-sm text-slate-400">Alignment Score</p>
                  <p className="text-5xl font-bold">
                    {Math.round(person.alignmentScore!)}%
                  </p>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-red-400"
                    style={{ width: `${Math.round(person.alignmentScore!)}%` }}
                  />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-400">
                  Score based on public voting record across reviewed votes and
                  7-domain methodology.
                </p>
              </div>
            ))}
          </div>

          {/* Withheld councillors */}
          {withheldCouncillors.length > 0 && (
            <div className="mt-14">
              <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Score Pending
              </p>
              <p className="mb-6 text-sm text-slate-600">
                Insufficient reviewed vote history to generate a public alignment score.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                {withheldCouncillors.map((person) => (
                  <div
                    key={person.name}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <p className="font-semibold text-slate-300">{person.name}</p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {person.scoreStatus}
                    </p>

                    <p className="mt-3 text-xs text-slate-600">
                      {person.reviewedVotesMatched} of{" "}
                      {person.minimumVotesRequired} reviewed votes matched
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="max-w-4xl text-sm leading-relaxed text-slate-400">
            Built using Calgary City Council voting records and the 7-domain
            sustainability framework inspired by Sustainable Calgary&apos;s State of
            Our City. Alignment scores reflect reviewed votes only. Methodology
            available on the Methodology page.
          </p>
        </div>
      </section>
    </main>
  );
}
