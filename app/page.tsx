import fs from "fs";
import path from "path";
import HomeClient, { CouncillorScore } from "./HomeClient";

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
  }> = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const councillorData: CouncillorScore[] = raw.map((c) => ({
    name: c.name,
    reviewedVotesMatched: c.reviewedVotesMatched,
    minimumVotesRequired: c.minimumVotesRequired,
    isEligibleForPublicScore: c.isEligibleForPublicScore,
    alignmentScore: c.alignmentScore,
    scoreStatus: c.scoreStatus,
  }));

  return <HomeClient councillorData={councillorData} />;
}
