// The Vacuum's Alibi: One Line, 200 Characters — make.fun bounty entry.
//
// A tiny program that writes one line — the excuse a robot vacuum gives
// for missing a spot — to entry.txt inside the output directory the
// harness provides. No network, no extra files, no extra output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bounty gate: entry.txt must hold 1 to 200 characters of UTF-8 text.
const MAX_CHARS = 200;
const OUTPUT_FILE = "entry.txt";

// The line, exactly as chosen: 119 characters, no trailing newline.
const LINE =
  "I could not determine whether the spot was dirt, a shadow, or a concept. I did not clean it. I respected the ambiguity.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail loudly rather than submit an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; gate needs 1-${MAX_CHARS}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, OUTPUT_FILE), LINE, "utf8");
