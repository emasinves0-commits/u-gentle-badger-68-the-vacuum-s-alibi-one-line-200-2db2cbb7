// The Vacuum's Alibi: One Line, 200 Characters — make.fun bounty entry.
//
// This tiny program writes a single one-line excuse from a robot vacuum
// for missing a spot to entry.txt inside the output directory the harness
// provides. It does nothing else: no network, no extra files, no extra
// output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line, exactly as chosen. Keep it byte-for-byte identical:
// 97 characters (99 bytes UTF-8), no trailing newline, no extra content.
const LINE =
  "My lidar mapped that corner as a wall, so I respected it — I don't argue with my own cartography.";

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to /output when it is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
