"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Domain = {
  name: string;
  description: string;
};

type Councillor = {
  name: string;
  ward: string;
  alignment: number;
  summary: string;
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

const councillors: Councillor[] = [
  {
    name: "Dan McLean",
    ward: "Ward 13",
    alignment: 87,
    summary: "Strong alignment on economy, governance, and community development.",
  },
  {
    name: "Jyoti Gondek",
    ward: "Mayor",
    alignment: 79,
    summary: "Higher alignment on natural environment, wellness, and urban growth.",
  },
  {
    name: "Courtney Walcott",
    ward: "Ward 8",
    alignment: 74,
    summary: "Strong focus on community, housing, and public services.",
  },
];

export default function HomePage() {
  const [domains, setDomains] = useState<Domain[]>(initialDomains);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const rankedCouncillors = useMemo(() => {
    return [...councillors].sort((a, b) => b.alignment - a.alignment);
  }, []);

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
            Rank Calgary’s 7 sustainability domains by what matters most to you,
            then see which elected officials vote closest to your values.
          </p>

          <button
            onClick={handleFindMatch}
            className="mt-10 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Find My Match →
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
                Drag the domains into your preferred order. The sequence below
                becomes the lens for matching councillors to your priorities.
              </p>
            </div>

            <button
              onClick={handleFindMatch}
              className="w-fit rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              See Matches →
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

            <h2 className="text-3xl font-semibold">
              Current Results
            </h2>

            <p className="mt-4 text-slate-400">
              Councillors ranked by alignment with your current values.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-white">
                Your current ranking:
              </span>

              {domains.map((domain, index) => (
                <span key={domain.name} className="flex items-center gap-2">
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-slate-200">
                    {domain.name}
                  </span>
                  {index < domains.length - 1 && (
                    <span className="text-red-300">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rankedCouncillors.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm text-slate-400">{person.ward}</p>

                <h3 className="mt-2 text-2xl font-semibold">{person.name}</h3>

                <div className="mt-6">
                  <p className="text-sm text-slate-400">Alignment Score</p>
                  <p className="text-5xl font-bold">{person.alignment}%</p>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-red-400"
                    style={{ width: `${person.alignment}%` }}
                  />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-300">
                  {person.summary}
                </p>

                <button className="mt-8 text-sm font-semibold text-red-300 underline underline-offset-4">
                  View Voting Record
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="max-w-4xl text-sm leading-relaxed text-slate-400">
            Built using Calgary City Council voting records and the 7-domain
            sustainability framework inspired by Sustainable Calgary’s State of
            Our City. This platform focuses on actions, not promises.
          </p>
        </div>
      </section>
    </main>  
);
}
