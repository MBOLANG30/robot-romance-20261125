import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One single-line pickup line aimed at a robot/AI, authored for this entry.
// The joke turns on training data: a model ends up sounding like what it
// was trained on, so flirting with the machine means admitting it has
// already rewritten the speaker.
const line =
  "Are you my training data? Because everything I say now sounds a little like you.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
