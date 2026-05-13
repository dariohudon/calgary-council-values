import MethodologyNav from "@/components/MethodologyNav";

const domains = [
  {
    name: "Community",
    description:
      "How decisions affect neighbourhood life, social connection, public participation, inclusion, safety, and civic belonging.",
    examples: [
      "community planning",
      "recreation access",
      "neighbourhood services",
      "cultural spaces",
      "civic participation",
      "public gathering spaces",
    ],
  },
  {
    name: "Economy",
    description:
      "How decisions affect affordability, taxation, investment, business activity, employment, and long-term economic resilience.",
    examples: [
      "property taxes",
      "business incentives",
      "economic development",
      "municipal finance",
      "affordability measures",
      "investment priorities",
    ],
  },
  {
    name: "Education",
    description:
      "How decisions affect learning, youth development, public awareness, libraries, knowledge access, and civic literacy.",
    examples: [
      "libraries",
      "youth programs",
      "learning access",
      "public education partnerships",
      "literacy initiatives",
      "civic education",
    ],
  },
  {
    name: "Wellness",
    description:
      "How decisions affect physical health, mental health, housing stability, accessibility, emergency response, safety, and overall quality of life.",
    examples: [
      "housing supports",
      "public health",
      "mental health programs",
      "emergency services",
      "accessibility",
      "social wellbeing",
    ],
  },
  {
    name: "Natural Environment",
    description:
      "How decisions affect ecosystems, biodiversity, emissions, parks, air quality, land stewardship, and environmental sustainability.",
    examples: [
      "climate policy",
      "emissions reduction",
      "green space protection",
      "biodiversity",
      "environmental conservation",
      "ecological resilience",
    ],
  },
  {
    name: "Resource Use",
    description:
      "How decisions affect infrastructure, transit systems, utilities, land use, energy, water, waste, and long-term resource management.",
    examples: [
      "transit infrastructure",
      "utilities",
      "land use planning",
      "water systems",
      "waste management",
      "infrastructure investment",
    ],
  },
  {
    name: "Governance",
    description:
      "How decisions affect transparency, accountability, representation, ethics, public trust, and institutional decision-making.",
    examples: [
      "ethics policies",
      "accountability measures",
      "transparency rules",
      "public oversight",
      "governance reform",
      "procedural governance decisions",
    ],
  },
];

export default function DomainsPage() {
  return (
    <main className="min-h-screen bg-[#070b18] text-white">
      <MethodologyNav />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff4b4b]">
          Methodology
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
          The 7 Civic Domains
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Calgary Council Values uses seven civic domains to help organize and
          visualize how council decisions may impact different parts of city
          life.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          These domains are inspired by long-standing urban sustainability and
          civic analysis frameworks used in Calgary and elsewhere, but this
          project is independent and not affiliated with any external
          organization.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-400">
          The framework exists to improve clarity, consistency, and transparency
          when reviewing public council voting records.
        </p>

        <div className="mt-16 space-y-10">
          {domains.map((d) => (
            <div
              key={d.name}
              className="border-t border-white/[0.06] pt-10"
            >
              <h2 className="text-2xl font-bold text-white">{d.name}</h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                {d.description}
              </p>
              <div className="mt-4">
                <p className="text-sm text-slate-500">Examples may include:</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {d.examples.map((ex) => (
                    <li
                      key={ex}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-sm text-slate-400"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-10 text-slate-400">
          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Why only one domain?</h2>
            <p className="mt-4 leading-8">
              Many council decisions affect multiple areas of city life.
            </p>
            <p className="mt-4 leading-8">
              For consistency and transparency, each reviewed council item is
              assigned one primary civic domain based on its dominant direct
              impact.
            </p>
            <p className="mt-4 leading-8">
              This does not mean a decision affects only one area. It means the
              system applies a consistent classification process to identify the
              strongest primary relationship for scoring and comparison purposes.
            </p>
            <p className="mt-4 leading-8">
              Consistency and explainability are prioritized over subjective
              interpretation.
            </p>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="text-2xl font-bold text-white">Independence &amp; Transparency</h2>
            <p className="mt-4 leading-8">
              Calgary Council Values is an independent civic visualization
              project.
            </p>
            <p className="mt-4 leading-8">
              We are not affiliated with Sustainable Calgary, any political
              party, campaign, elected official, or advocacy organization.
            </p>
            <p className="mt-4 leading-8">
              The domain structure used here is an original adaptation designed
              specifically for transparent civic analysis and public
              accountability visualization.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
