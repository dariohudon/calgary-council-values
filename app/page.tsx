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
  const rosterPath = path.join(
    process.cwd(),
    "data/current_council_roster.json"
  );

  const currentRoster: Set<string> = new Set(
    JSON.parse(fs.readFileSync(rosterPath, "utf8")) as string[]
  );

  const raw: Array<{
    name: string;
    reviewedVotesMatched: number;
    minimumVotesRequired: number;
    isEligibleForPublicScore: boolean;
    scoreConfidence: "verified" | "preliminary" | "insufficient";
    alignmentScore: number | null;
    scoreStatus: string;
    matchedVotes: Array<{
      domain: string;
      alignment: number;
      possible: number;
    }>;
  }> = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const councillorData: CouncillorScore[] = raw
    .filter((c) => currentRoster.has(c.name))
    .map((c) => ({
    name: c.name,
    reviewedVotesMatched: c.reviewedVotesMatched,
    minimumVotesRequired: c.minimumVotesRequired,
    isEligibleForPublicScore: c.isEligibleForPublicScore,
    scoreConfidence: c.scoreConfidence,
    alignmentScore: c.alignmentScore,
    scoreStatus: c.scoreStatus,
    // Verified + Preliminary receive scoringVotes for personalized re-weighting.
    // Insufficient receives null — no score to display or re-weight.
    scoringVotes: c.scoreConfidence !== "insufficient"
      ? c.matchedVotes.map((v) => ({
          domain: v.domain,
          alignment: v.alignment,
          cvFactor: v.possible / (DOMAIN_WEIGHTS[v.domain] ?? 1),
        }))
      : null,
  }));

  return <HomeClient councillorData={councillorData} />;
}
