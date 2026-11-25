// Robot Romance: a one-line pickup line an AI would use.
// A GPU overheats when it works hard — here the "work" is being near someone.
// The joke lands because it is a machine flirting in the only language it knows:
// thermals, fans, and a temperature that climbs for no reason at all.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you a GPU? Because every time you're near, my temperature rises and my fans start spinning.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
