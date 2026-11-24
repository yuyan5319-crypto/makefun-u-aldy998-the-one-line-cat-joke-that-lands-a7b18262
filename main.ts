import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a cat stares at a blank wall for an hour, then turns to its
// owner with the look of someone who has just been told a secret about them.
const LINE =
  "My cat stared at a blank wall for an hour, then turned to me like the wall had just told it something about me.";

const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
let dir = outDir;
try {
  mkdirSync(dir, { recursive: true });
} catch {
  dir = join(process.cwd(), "output");
  mkdirSync(dir, { recursive: true });
}
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
