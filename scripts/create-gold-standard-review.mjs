import fs from "fs";

const inputPath = "data/Council_and_Committee_Votes_20260425.csv";
const outputPath = "data/GOLD_STANDARD_REVIEW.csv";

const raw = fs.readFileSync(inputPath, "utf8");

function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && next === '"') {
      cell += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (cell.length || row.length) {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = "";
      }
      if (char === "\r" && next === "\n") i++;
    } else {
      cell += char;
    }
  }

  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

const rows = parseCSV(raw);
const headers = rows[0];

const records = rows.slice(1).map((row) =>
  Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""]))
);

const excludePatterns = [
  /adjourn/i,
  /agenda.*confirm/i,
  /receive.*corporate record/i,
  /closed meeting/i,
  /remain confidential/i,
  /pursuant to section/i,
  /freedom of information/i,
  /\bfoip\b/i,
  /recess/i,
  /rise and report/i,
];

const includePatterns = [
  /housing/i,
  /homeless/i,
  /affordable/i,
  /transit/i,
  /parking/i,
  /climate/i,
  /emission/i,
  /environment/i,
  /budget/i,
  /tax/i,
  /levy/i,
  /reserve/i,
  /police/i,
  /public safety/i,
  /emergency/i,
  /infrastructure/i,
  /redesignation/i,
  /rezoning/i,
  /land use/i,
  /development plan/i,
  /area redevelopment plan/i,
  /municipal development plan/i,
];

function isExcluded(resolution) {
  return excludePatterns.some((pattern) => pattern.test(resolution));
}

function scoreResolution(resolution) {
  return includePatterns.reduce((score, pattern) => {
    return score + (pattern.test(resolution) ? 1 : 0);
  }, 0);
}

const unique = new Map();

for (const record of records) {
  const key = [
    record.MeetingType,
    record.MeetingDate,
    record.Resolution.replace(/\s+/g, " ").trim(),
    record.Result,
  ].join("||");

  if (!unique.has(key)) {
    unique.set(key, {
      MeetingType: record.MeetingType,
      MeetingDate: record.MeetingDate,
      Resolution: record.Resolution.replace(/\s+/g, " ").trim(),
      Result: record.Result,
      VoteCount: 0,
      YesCount: 0,
      NoCount: 0,
      Score: 0,
    });
  }

  const item = unique.get(key);
  item.VoteCount += 1;
  if (record.Vote === "Yes") item.YesCount += 1;
  if (record.Vote === "No") item.NoCount += 1;
}

const candidates = [...unique.values()]
  .filter((item) => !isExcluded(item.Resolution))
  .map((item) => ({
    ...item,
    Score: scoreResolution(item.Resolution),
  }))
  .filter((item) => item.Score > 0)
  .sort((a, b) => {
    if (b.Score !== a.Score) return b.Score - a.Score;
    return b.VoteCount - a.VoteCount;
  })
  .slice(0, 50);

function esc(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

const outputHeaders = [
  "Resolution",
  "MeetingType",
  "MeetingDate",
  "Result",
  "VoteCount",
  "YesCount",
  "NoCount",
  "PrimaryDomain",
  "SecondaryDomain",
  "VoteType",
  "DirectionOfYes",
  "Confidence",
  "Notes",
];

const output = [
  outputHeaders.join(","),
  ...candidates.map((item) =>
    [
      item.Resolution,
      item.MeetingType,
      item.MeetingDate,
      item.Result,
      item.VoteCount,
      item.YesCount,
      item.NoCount,
      "",
      "",
      "",
      "",
      "",
      "",
    ]
      .map(esc)
      .join(",")
  ),
].join("\n");

fs.writeFileSync(outputPath, output);

console.log(`Parsed rows: ${records.length}`);
console.log(`Unique resolutions: ${unique.size}`);
console.log(`Gold standard candidates written: ${candidates.length}`);
console.log(`Output: ${outputPath}`);
