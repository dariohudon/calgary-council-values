export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020B1C] text-white">
      <section className="mx-auto max-w-4xl px-8 py-24">
        <div className="space-y-20 text-lg leading-relaxed text-white/80">

          <div>
            <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl">
              Matching values, not talking points.
            </h1>
            <p className="mb-6">
              Calgary Council Values exists to help residents compare public voting records against their own civic priorities — not campaign messaging, party branding, or political rhetoric.
            </p>
            <p className="mb-6">The platform asks a simple question first:</p>
            <p className="mb-6 pl-6 border-l border-white/20 italic text-white/60">
              "What matters most to you?"
            </p>
            <p className="mb-6">
              From there, it compares those values against how councillors have actually voted on reviewed public decisions involving housing, taxation, transportation, climate policy, governance, public safety, and community planning.
            </p>
            <p className="mb-6">The goal is not to determine who is "good" or "bad."</p>
            <p>
              The goal is to create a clearer, more transparent picture of alignment, consistency, and public accountability through real civic records.
            </p>
          </div>

          <div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              Public does not always mean understandable.
            </h2>
            <p className="mb-6">
              Calgary's council voting records are public — but public does not always mean understandable.
            </p>
            <p className="mb-6">
              Most voting data exists as raw legislative records, report numbers, meeting minutes, procedural motions, amendments, and committee documents spread across multiple systems. For the average resident, turning that information into a clear understanding of how councillors actually vote is difficult, time-consuming, and often inaccessible without technical or civic-process knowledge.
            </p>
            <p className="mb-6">
              This project exists to help translate and visualize that public information into something people can meaningfully explore, question, and understand for themselves.
            </p>
            <p className="mb-6">The voting records are not hidden.</p>
            <p>
              But without structure, classification, and context, they are difficult for most people to navigate in practice.
            </p>
          </div>

          <div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              Built around public accountability.
            </h2>
            <p className="mb-6">
              Calgary Council Values does not score politicians based on:
            </p>
            <ul className="mb-6 space-y-2 pl-6 text-white/60">
              <li>campaign promises</li>
              <li>interviews</li>
              <li>speeches</li>
              <li>endorsements</li>
              <li>party affiliations</li>
              <li>social media positioning</li>
            </ul>
            <p className="mb-6">
              It compares reviewed public voting records against the civic priorities chosen by the user.
            </p>
            <p className="mb-4 text-white">Every score must be explainable.</p>
            <p className="mb-4 text-white">Every score must trace back to actual votes.</p>
            <p className="mb-6 text-white">Every result must remain challengeable and auditable.</p>
            <p className="mb-4 text-white">The score is not the product.</p>
            <p className="text-white">The receipts are.</p>
          </div>

          <div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              What this is not.
            </h2>
            <p className="mb-6">This is not a campaign tool.</p>
            <p className="mb-6">It is not a political endorsement engine.</p>
            <p className="mb-6">It does not claim to determine:</p>
            <ul className="mb-6 space-y-2 pl-6 text-white/60">
              <li>who is the "best" councillor</li>
              <li>who is morally right</li>
              <li>who is most ethical</li>
              <li>who is most progressive or conservative</li>
            </ul>
            <p>
              It is a public civic utility designed to help residents better understand how elected officials vote once they are in office.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
