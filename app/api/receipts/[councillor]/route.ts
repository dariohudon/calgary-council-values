import fs from "fs";
import path from "path";

// Replicates normalizeResolution from scripts/calculate-alignment-score.mjs
// Must remain identical for enrichment lookup to match scored votes.
function normalizeResolution(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim()
    .toLowerCase()
    .slice(0, 500);
}

function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Minimal synchronous CSV parser — handles quoted fields, embedded commas,
// escaped double-quotes, and embedded newlines within quoted fields.
function parseCSV(content: string): Array<Record<string, string>> {
  const rows: Array<Record<string, string>> = [];
  let i = 0;
  const len = content.length;

  function readField(): string {
    if (i < len && content[i] === '"') {
      i++; // skip opening quote
      let val = "";
      while (i < len) {
        if (content[i] === '"') {
          if (i + 1 < len && content[i + 1] === '"') {
            val += '"';
            i += 2;
          } else {
            i++; // skip closing quote
            break;
          }
        } else {
          val += content[i++];
        }
      }
      return val;
    }
    let val = "";
    while (
      i < len &&
      content[i] !== "," &&
      content[i] !== "\n" &&
      content[i] !== "\r"
    ) {
      val += content[i++];
    }
    return val;
  }

  function readRow(): string[] {
    const fields: string[] = [];
    while (i < len && content[i] !== "\n" && content[i] !== "\r") {
      fields.push(readField());
      if (i < len && content[i] === ",") {
        i++;
      } else {
        break;
      }
    }
    if (i < len && content[i] === "\r") i++;
    if (i < len && content[i] === "\n") i++;
    return fields;
  }

  const headers = readRow();
  if (headers.length === 0) return rows;

  while (i < len) {
    if (content[i] === "\r" || content[i] === "\n") {
      if (content[i] === "\r") i++;
      if (content[i] === "\n") i++;
      continue;
    }
    const fields = readRow();
    if (fields.length === 0) continue;
    if (fields.length === 1 && fields[0] === "") continue;
    const row: Record<string, string> = {};
    headers.forEach((h, idx) => {
      row[h] = fields[idx] ?? "";
    });
    rows.push(row);
  }

  return rows;
}

type EnrichmentData = {
  date: string;
  confidence: string;
  voteType: string;
  notes: string;
};

type MatchedVoteRaw = {
  resolution: string;
  domain: string;
  vote: string;
  direction: string;
  alignment: number;
  earned: number;
  possible: number;
};

type CouncillorRaw = {
  name: string;
  matchedVotes: MatchedVoteRaw[];
  reviewedVotesMatched: number;
  minimumVotesRequired: number;
  isEligibleForPublicScore: boolean;
  alignmentScore: number | null;
  scoreStatus: string;
};

function loadEnrichmentMap(): Map<string, EnrichmentData> {
  const filePath = path.join(
    process.cwd(),
    "data/GOLD_STANDARD_REVIEW.csv"
  );
  const content = fs.readFileSync(filePath, "utf8");
  const csvRows = parseCSV(content);
  const map = new Map<string, EnrichmentData>();

  for (const row of csvRows) {
    if (!row.Resolution) continue;
    const key = normalizeResolution(row.Resolution);
    map.set(key, {
      date: row.MeetingDate ?? "",
      confidence: row.Confidence ?? "",
      voteType: row.VoteType ?? "",
      notes: row.Notes ?? "",
    });
  }

  return map;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ councillor: string }> }
) {
  const { councillor } = await params;

  const scorePath = path.join(
    process.cwd(),
    "data/councillor_alignment_scores.json"
  );
  const data: CouncillorRaw[] = JSON.parse(
    fs.readFileSync(scorePath, "utf8")
  );

  const match = data.find((c) => nameToSlug(c.name) === councillor);

  if (!match) {
    return Response.json({ error: "Councillor not found" }, { status: 404 });
  }

  if (!match.isEligibleForPublicScore) {
    return Response.json(
      { error: "Score withheld pending sufficient reviewed vote history" },
      { status: 404 }
    );
  }

  const enrichmentMap = loadEnrichmentMap();

  const receipts = match.matchedVotes.map((v) => {
    const key = normalizeResolution(v.resolution);
    const enrichment = enrichmentMap.get(key);

    return {
      resolution: v.resolution,
      date: enrichment?.date ?? "",
      vote: v.vote,
      domain: v.domain,
      direction: v.direction,
      alignmentLabel:
        v.alignment === 1
          ? "Voted with this direction"
          : "Voted against this direction",
      confidence: enrichment?.confidence ?? "",
      voteType: enrichment?.voteType ?? "",
      notes: enrichment?.notes ?? "",
    };
  });

  return Response.json({
    councillorName: match.name,
    reviewedVotesMatched: match.reviewedVotesMatched,
    receipts,
  });
}
