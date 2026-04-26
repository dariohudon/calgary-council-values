import fs from "fs";
import csv from "csv-parser";

const reviewedFile = "data/GOLD_STANDARD_REVIEW.csv";
const rawVotesFile = "data/Council_and_Committee_Votes_20260425.csv";
const outputFile = "data/councillor_alignment_scores.json";
const MINIMUM_PUBLIC_VOTES = 15;

/*
SCORING MODEL v0.1
Strict ranking only:
Rank 1 = 7
Rank 2 = 6
Rank 3 = 5
Rank 4 = 4
Rank 5 = 3
Rank 6 = 2
Rank 7 = 1
*/

const DOMAIN_ORDER = [
  "Wellness",
  "Community",
  "Economy",
  "Natural Environment",
  "Resource Use",
  "Governance",
  "Education",
];

const DOMAIN_WEIGHTS = {
  Wellness: 7,
  Community: 6,
  Economy: 5,
  "Natural Environment": 4,
  "Resource Use": 3,
  Governance: 2,
  Education: 1,
};

const CONFIDENCE_WEIGHTS = {
  High: 1.0,
  Medium: 0.6,
  Low: 0.3,
};

const VOTE_TYPE_WEIGHTS = {
  "Substantive": 1.0,
  "Budget / Finance": 1.0,
  "Land Use": 0.9,
  "Governance": 0.7,
  "Committee / Internal": 0.4,
  "Administrative": 0.2,
  "Procedural": 0.0,
};

function normalizeResolution(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim()
    .toLowerCase()
    .slice(0, 500);
}

function parseDirection(direction, vote) {
  if (direction === "Context Required") return null;
  if (direction === "Neutral") return 0;

  if (direction === "Support") {
    if (vote === "Yes") return 1;
    if (vote === "No") return -1;
    return 0;
  }

  if (direction === "Oppose") {
    if (vote === "Yes") return -1;
    if (vote === "No") return 1;
    return 0;
  }

  return null;
}

function loadReviewedVotes() {
  return new Promise((resolve) => {
    const reviewed = new Map();

    fs.createReadStream(reviewedFile)
      .pipe(csv())
      .on("data", (row) => {
        if (!row.PrimaryDomain) return;

        const key = normalizeResolution(row.Resolution);

        reviewed.set(key, {
          resolution: row.Resolution,
          primaryDomain: row.PrimaryDomain,
          secondaryDomain: row.SecondaryDomain || null,
          voteType: row.VoteType,
          direction: row.DirectionOfYes,
          confidence: row.Confidence || "Medium",
          confidenceWeight:
            CONFIDENCE_WEIGHTS[row.Confidence] || 0.6,
          voteTypeWeight:
            VOTE_TYPE_WEIGHTS[row.VoteType] || 0.5,
        });
      })
      .on("end", () => resolve(reviewed));
  });
}

function loadRawVotes(reviewed) {
  return new Promise((resolve) => {
    const councillors = {};

    fs.createReadStream(rawVotesFile)
      .pipe(csv())
      .on("data", (row) => {
        const key = normalizeResolution(row.Resolution);

        if (!reviewed.has(key)) return;

        const review = reviewed.get(key);
        const councillor = row.Voter;
        const vote = row.Vote;

        if (!councillors[councillor]) {
          councillors[councillor] = {
            name: councillor,
            totalScore: 0,
            totalPossible: 0,
            matchedVotes: [],
          };
        }

        const alignment = parseDirection(review.direction, vote);

        if (alignment === null) return;

        const domainWeight =
          DOMAIN_WEIGHTS[review.primaryDomain] || 1;

        const scoreWeight =
          domainWeight *
          review.confidenceWeight *
          review.voteTypeWeight;

        const earned =
          alignment > 0 ? scoreWeight :
          alignment < 0 ? 0 :
          scoreWeight * 0.5;

        councillors[councillor].totalScore += earned;
        councillors[councillor].totalPossible += scoreWeight;

        councillors[councillor].matchedVotes.push({
          resolution: review.resolution,
          domain: review.primaryDomain,
          vote,
          direction: review.direction,
          alignment,
          earned,
          possible: scoreWeight,
        });
      })
      .on("end", () => resolve(councillors));
  });
}

async function main() {
  console.log("Loading reviewed votes...");
  const reviewed = await loadReviewedVotes();

  console.log(`Reviewed resolutions: ${reviewed.size}`);

  console.log("Loading raw council votes...");
  const councillors = await loadRawVotes(reviewed);

const results = Object.values(councillors)
  .map((c) => {
    const reviewedVotesMatched = c.matchedVotes.length;
    const isEligibleForPublicScore =
      reviewedVotesMatched >= MINIMUM_PUBLIC_VOTES;

    const calculatedScore =
      c.totalPossible > 0
        ? Number(
            (
              (c.totalScore / c.totalPossible) *
              100
            ).toFixed(1)
          )
        : 0;

    return {
      ...c,
      reviewedVotesMatched,
      minimumVotesRequired: MINIMUM_PUBLIC_VOTES,
      isEligibleForPublicScore,
      alignmentScore: isEligibleForPublicScore
        ? calculatedScore
        : null,
      scoreStatus: isEligibleForPublicScore
        ? "Eligible for public ranking"
        : "Score withheld pending sufficient reviewed vote history",
    };
  })
  .sort((a, b) => {
    if (a.alignmentScore === null) return 1;
    if (b.alignmentScore === null) return -1;
    return b.alignmentScore - a.alignmentScore;
  });

  fs.writeFileSync(
    outputFile,
    JSON.stringify(results, null, 2)
  );

  console.log(`Created: ${outputFile}`);
  console.log(`Councillors scored: ${results.length}`);
  console.log(
    results.slice(0, 5).map((r) => ({
      name: r.name,
      score: r.alignmentScore,
    }))
  );
}

main();
