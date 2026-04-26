import fs from "fs";
import path from "path";
import HomeClient, { CouncillorScore } from "./HomeClient";

// Mirrors DOMAIN_WEIGHTS in scripts/calculate-alignment-score.mjs.
// Used only to derive cvFactor — never changes scoring logic.
const DOMAIN_WEIGHTS: Record<string, number> = {
  Wellness: 7,
  Community: 6,
  Economy: 5,
  "Natural Environment": 4,
  "Resource Use": 3,
  Governance: 2,
  Education: 1,
};

export default function HomePage() {
  const filePath = path.join(
    process.cwd(),
    "data/councillor_alignment_scores.json"
  );

  const raw: Array<{
    name: string;
    reviewedVotesMatched: number;
    minimumVotesRequired: number;
    isEligibleForPublicScore: boolean;
    alignmentScore: number | null;
    scoreStatus: string;
    matchedVotes: Array<{
      domain: string;
      alignment: number;
      possible: number;
    }>;
  }> = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const councillorData: CouncillorScore[] = raw.map((c) => ({
    name: c.name,
    reviewedVotesMatched: c.reviewedVotesMatched,
    minimumVotesRequired: c.minimumVotesRequired,
    isEligibleForPublicScore: c.isEligibleForPublicScore,
    alignmentScore: c.alignmentScore,
    scoreStatus: c.scoreStatus,
    // Eligible only: slim scoring summary for client-side re-weighting.
    // Withheld councillors receive null — no scoring data crosses the boundary.
    scoringVotes: c.isEligibleForPublicScore
      ? c.matchedVotes.map((v) => ({
          domain: v.domain,
          alignment: v.alignment,
          // cvFactor = confidenceWeight × voteTypeWeight (domain-agnostic multiplier).
          // Derived here so the client never sees raw possible/earned values.
          cvFactor: v.possible / (DOMAIN_WEIGHTS[v.domain] ?? 1),
        }))
      : null,
  }));

  return <HomeClient councillorData={councillorData} />;
}
