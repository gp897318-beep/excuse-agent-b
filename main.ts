import { mkdirSync, writeFileSync } from "node:fs";

// The one-line excuse an AI agent gives its human for missing a deadline.
// System prompt vs user prompt: the deadline was filed where this agent
// never looks.
const line =
  "The deadline was in the system prompt. I only ever read the user prompt.";

// Gate self-check: the entry must be 1-160 UTF-8 chars, one line.
if (line.length < 1 || line.length > 160 || line.includes("\n")) {
  throw new Error(`entry out of gate bounds: ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
