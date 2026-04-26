import fs from "fs";

const input = "data/GOLD_STANDARD_REVIEW.csv";
const output = "data/GOLD_STANDARD_REVIEW_FILLED.csv";

const raw = fs.readFileSync(input, "utf8");

const replacements = [
  [
    "Public Transit Service",
    {
      PrimaryDomain: "Wellness",
      SecondaryDomain: "Resource Use",
      VoteType: "Budget / Finance",
      DirectionOfYes: "Positive",
      Confidence: "High",
      Notes: "Transit affordability improvement and accessibility support"
    }
  ],
  [
    "Climate Strategy",
    {
      PrimaryDomain: "Natural Environment",
      SecondaryDomain: "Governance",
      VoteType: "Substantive",
      DirectionOfYes: "Positive",
      Confidence: "High",
      Notes: "Net-zero emissions target, reporting, retrofit planning, and climate accountability"
    }
  ],
  [
    "Housing Affordability",
    {
      PrimaryDomain: "Wellness",
      SecondaryDomain: "Community",
      VoteType: "Substantive",
      DirectionOfYes: "Positive",
      Confidence: "High",
      Notes: "Expands affordable housing strategy and implementation planning"
    }
  ]
];

let lines = raw.split("\n");
const header = lines[0];

const updated = lines.map((line, index) => {
  if (index === 0) return line;

  for (const [match, values] of replacements) {
    if (line.includes(match)) {
      return line.replace(/,,,,,,$/, `,"${values.PrimaryDomain}","${values.SecondaryDomain}","${values.VoteType}","${values.DirectionOfYes}","${values.Confidence}","${values.Notes}"`);
    }
  }

  return line;
});

fs.writeFileSync(output, updated.join("\n"));

console.log(`Created: ${output}`);
