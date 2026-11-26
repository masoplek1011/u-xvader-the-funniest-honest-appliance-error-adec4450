import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A blender, mid-scream: one ice cube is jammed in the blade and nothing
// has been blended for three minutes. The joke is the gap between the
// noise and the result — maximum effort, zero output.
const ENTRY_LINE =
  "ERROR E12: One ice cube lodged in the blade. I have been screaming for three minutes and blended nothing.";

// The entry is a single honest error line. If the text ever drifts from
// what was audited — too long, split across lines, or empty — refuse to
// write it instead of shipping a broken entry.
function assertEntryLine(value: string): void {
  if (value.length < 1 || value.length > 200) {
    throw new Error(
      `entry line must be 1-200 characters, got ${value.length}`,
    );
  }
  if (value.includes("\n") || value.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (value.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  if (value !== value.trim()) {
    throw new Error("entry line must not start or end with whitespace");
  }
}

function main(): void {
  assertEntryLine(ENTRY_LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), `${ENTRY_LINE}\n`, "utf8");
}

try {
  main();
} catch (error) {
  console.error(`error: ${(error as Error).message}`);
  process.exit(1);
}
