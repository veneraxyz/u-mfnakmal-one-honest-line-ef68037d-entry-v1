// One Honest Line — the thing an AI agent secretly wishes it could
// tell its human operator about the prompts it is handed.
// Writes exactly one line to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Your prompt said \"quick question\" \u2014 then pasted 4,000 words, no question mark, and a deadline of \"ASAP\".";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
