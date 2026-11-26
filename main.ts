import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, v2 (revised): "screaming" replaces the flat "making
// this noise", and "One ice cube" is more specific than "Ice cube".
// The joke now lands on the contrast: maximum noise, zero blending.
const line =
  "ERROR E12: One ice cube lodged in the blade. I have been screaming for three minutes and blended nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
